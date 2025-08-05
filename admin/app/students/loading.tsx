import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <Skeleton key={i} className="h-[120px] w-full rounded-lg" />
      ))}
      <div className="col-span-full grid gap-4 md:grid-cols-2 md:gap-8">
        <Skeleton className="col-span-2 h-[300px] w-full rounded-lg" />
        <Skeleton className="h-[300px] w-full rounded-lg" />
        <Skeleton className="h-[300px] w-full rounded-lg" />
      </div>
      <Skeleton className="col-span-full h-[400px] w-full rounded-lg" />
    </div>
  )
}
