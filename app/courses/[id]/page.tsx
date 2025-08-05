import { getCourseById, Course } from "@/lib/api"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CourseDetailPageProps {
  params: {
    id: string
  }
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const course: Course | null = await getCourseById(params.id)

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          The course you are looking for does not exist or has been removed.
        </p>
        <Button asChild className="mt-6">
          <Link href="/courses">Back to Courses</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="p-0">
              <div className="relative w-full h-64 md:h-80 lg:h-96">
                <Image
                  src={course.image_url || "/placeholder.svg?height=400&width=600&text=Course+Image"}
                  alt={course.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{course.description}</p>

              <Separator className="my-6" />

              <h2 className="text-2xl font-semibold mb-4">Course Modules</h2>
              <ul className="space-y-4">
                {course.modules && course.modules.map((module, index) => (
                  <li key={index}>
                    <h3 className="text-xl font-medium">{module.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{module.description}</p>
                  </li>
                ))}
              </ul>

              <Separator className="my-6" />

              <h2 className="text-2xl font-semibold mb-4">Career Outcomes</h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                {course.career_outcomes && course.career_outcomes.map((outcome, index) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Course Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Duration:</h3>
                <p className="text-gray-700 dark:text-gray-300">{course.duration}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Price:</h3>
                <p className="text-gray-700 dark:text-gray-300">{course.price}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Category:</h3>
                <p className="text-gray-700 dark:text-gray-300">{course.category}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Enrollment:</h3>
                <p className="text-gray-700 dark:text-gray-300">{course.enrollment_details}</p>
              </div>
              <Button asChild className="w-full">
                <Link href="/application">Apply Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
