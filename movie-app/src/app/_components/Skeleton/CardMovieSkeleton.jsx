import { Card, Skeleton } from "@nextui-org/react";

export default function CardMovieSkeleton() {
  return (
    <Card className="w-full flex flex-col gap-1 bg-transparent">
      <Skeleton className="rounded-lg">
        <div className="h-[270px] rounded-lg"></div>
      </Skeleton>
      <div className="flex flex-col gap-1">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg "></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg "></div>
        </Skeleton>
      </div>
    </Card>
  );
}
