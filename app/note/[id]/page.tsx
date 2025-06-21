'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Navigation } from '@/components/layout/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Save, 
  MoreHorizontal, 
  Tag,
  Clock,
  FileText
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { mockNotes } from '@/lib/mock-data';
import { Note } from '@/types';
import { formatDate } from '@/lib/utils';

export default function NoteEditorPage() {
  const params = useParams();
  const router = useRouter();
  const noteId = params.id as string;
  
  const [note, setNote] = useState<Note | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [saveStatus, setSaveStatus] = useState<'saved' | 'saving' | 'unsaved'>('saved');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading a note
    const foundNote = mockNotes.find(n => n.id === noteId);
    if (foundNote) {
      setNote(foundNote);
      setTitle(foundNote.title);
      setContent(foundNote.content);
      setTags(foundNote.tags || []);
    }
    setLoading(false);
  }, [noteId]);

  useEffect(() => {
    if (!note) return;
    
    // Simulate auto-save
    const hasChanges = title !== note.title || content !== note.content;
    if (hasChanges) {
      setSaveStatus('unsaved');
      const timer = setTimeout(() => {
        setSaveStatus('saving');
        setTimeout(() => setSaveStatus('saved'), 1000);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [title, content, note]);

  const handleSave = () => {
    setSaveStatus('saving');
    // Simulate save
    setTimeout(() => setSaveStatus('saved'), 1000);
  };

  const handleBack = () => {
    router.push('/dashboard');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="h-10 bg-gray-200 rounded mb-4"></div>
            <div className="h-96 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!note) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-16">
            <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Note not found</h2>
            <p className="text-gray-600 mb-8">The note you're looking for doesn't exist.</p>
            <Button onClick={handleBack}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Button variant="ghost" onClick={handleBack} className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="h-4 w-4" />
                {saveStatus === 'saved' && 'Saved'}
                {saveStatus === 'saving' && 'Saving...'}
                {saveStatus === 'unsaved' && 'Unsaved changes'}
              </div>
              
              <Button onClick={handleSave} disabled={saveStatus === 'saving'}>
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Tag className="h-4 w-4 mr-2" />
                    Manage Tags
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Export
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">
                    Delete Note
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span>Created {formatDate(note.created_at)}</span>
            <span>•</span>
            <span>Updated {formatDate(note.updated_at)}</span>
          </div>
          
          <div className="flex items-center gap-2 mb-6">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Editor */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6">
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Note title..."
              className="text-2xl font-bold border-none p-0 shadow-none focus-visible:ring-0 mb-6"
            />
            
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Start writing your note..."
              className="min-h-[500px] border-none p-0 shadow-none focus-visible:ring-0 resize-none text-gray-700 leading-relaxed"
            />
          </div>
        </div>
        
        {/* Floating Toolbar */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 rounded-lg shadow-lg px-4 py-2 flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
            <strong>B</strong>
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
            <em>I</em>
          </Button>
          <div className="w-px h-6 bg-gray-200" />
          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
            H1
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
            H2
          </Button>
          <div className="w-px h-6 bg-gray-200" />
          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
            Link
          </Button>
        </div>
      </div>
    </div>
  );
}