import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader className="p-0">
              <Skeleton className="w-full h-48 rounded-t-lg" />
            </CardHeader>
            <CardContent className="flex flex-col flex-grow p-6">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-4 flex-grow" />
              <Skeleton className="h-4 w-full mb-4" />
              <div className="flex justify-between items-center mt-auto">
                <Skeleton className="h-6 w-1/4" />
                <Skeleton className="h-10 w-24 rounded-md" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
