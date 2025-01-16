import { Skeleton } from "@/components/ui/skeleton";

export function UserProfileSkeleton() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-7 w-7 rounded-full" />
      <div className="space-y-1">
        <Skeleton className="h-3 w-[120px]" />
        <Skeleton className="h-3 w-[80px]" />
      </div>
    </div>
  );
}
