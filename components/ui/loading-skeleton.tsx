import { cn } from '@/lib/utils';

interface LoadingSkeletonProps {
  className?: string;
}

export function LoadingSkeleton({ className }: LoadingSkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-muted',
        className
      )}
    />
  );
}

export function NoteCardSkeleton() {
  return (
    <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
      <LoadingSkeleton className="h-6 w-3/4 mb-3" />
      <LoadingSkeleton className="h-4 w-full mb-2" />
      <LoadingSkeleton className="h-4 w-2/3 mb-4" />
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <LoadingSkeleton className="h-6 w-16 rounded-full" />
          <LoadingSkeleton className="h-6 w-12 rounded-full" />
        </div>
        <LoadingSkeleton className="h-4 w-20" />
      </div>
    </div>
  );
}

export function NoteListSkeleton() {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="flex items-center gap-4">
        <LoadingSkeleton className="h-6 w-1/4" />
        <LoadingSkeleton className="h-4 w-1/2" />
        <LoadingSkeleton className="h-4 w-20 ml-auto" />
      </div>
    </div>
  );
}