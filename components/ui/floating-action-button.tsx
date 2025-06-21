'use client';

import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FloatingActionButtonProps {
  onClick: () => void;
  className?: string;
}

export function FloatingActionButton({ onClick, className }: FloatingActionButtonProps) {
  return (
    <Button
      onClick={onClick}
      size="lg"
      className={cn(
        'fixed bottom-8 right-8 z-50 h-14 w-14 rounded-full shadow-lg',
        'bg-blue-600 hover:bg-blue-700 text-white',
        'transform transition-all duration-200 hover:scale-110',
        'shadow-blue-600/25 hover:shadow-blue-600/40',
        className
      )}
    >
      <Plus className="h-6 w-6" />
    </Button>
  );
}