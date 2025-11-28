import { Skeleton } from "@/components/core/skeleton";

export const LoadingCard = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-48 w-[250px] rounded-md" />
    </div>
  );
};
