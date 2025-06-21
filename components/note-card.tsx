'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Note } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, Edit, Trash2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { formatDate, truncateText, extractPlainText } from '@/lib/utils';

interface NoteCardProps {
  note: Note;
  view?: 'grid' | 'list';
}

export function NoteCard({ note, view = 'grid' }: NoteCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const excerpt = extractPlainText(note.content);
  const formattedDate = formatDate(note.updated_at);

  if (view === 'list') {
    return (
      <div
        className="group p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 hover:border-gray-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center gap-4">
          <Link href={`/note/${note.id}`} className="flex-1 min-w-0">
            <div className="flex items-center gap-4">
              <h3 className="font-medium text-gray-900 truncate">{note.title}</h3>
              <p className="text-sm text-gray-600 truncate flex-1">
                {truncateText(excerpt, 80)}
              </p>
              <div className="flex items-center gap-2 flex-shrink-0">
                {note.tags?.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                <span className="text-sm text-gray-500 ml-2">{formattedDate}</span>
              </div>
            </div>
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className={`opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                  isHovered ? 'opacity-100' : ''
                }`}
              >
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-600">
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    );
  }

  return (
    <div
      className="group p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-200 hover:border-gray-300 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-start mb-3">
        <Link href={`/note/${note.id}`} className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 truncate">{note.title}</h3>
        </Link>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className={`opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                isHovered ? 'opacity-100' : ''
              }`}
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">
              <Trash2 className="h-4 w-4 mr-2" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <Link href={`/note/${note.id}`} className="block">
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {truncateText(excerpt, 120)}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {note.tags?.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <span className="text-xs text-gray-500">{formattedDate}</span>
        </div>
      </Link>
    </div>
  );
}