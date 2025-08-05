import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { getCourses, Course } from "@/lib/api"

export default async function HomePage() {
  const courses: Course[] = await getCourses()
  const featuredCourses = courses.slice(0, 3); // Get first 3 courses as featured

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary to-primary-foreground text-primary-foreground dark:from-primary dark:to-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Unlock Your Potential with Codel
                </h1>
                <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                  High-quality online courses in Cybersecurity, UI/UX Design, European Languages, and Finance.
                  Learn from industry experts and transform your career.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Link href="/courses">Explore Courses</Link>
                </Button>
                <Button asChild variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  <Link href="/application">Apply Now</Link>
                </Button>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=400&width=550&text=Hero+Image"
              width="550"
              height="400"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Courses</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Dive into our most popular and in-demand programs designed to give you a competitive edge.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCourses.map((course) => (
              <Card key={course.id} className="flex flex-col">
                <CardHeader className="p-0">
                  <div className="relative w-full h-48">
                    <Image
                      src={course.image_url || "/placeholder.svg?height=200&width=300&text=Course+Image"}
                      alt={course.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow p-6">
                  <CardTitle className="text-2xl font-semibold mb-2">{course.title}</CardTitle>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{course.description}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-lg font-bold text-primary">{course.price}</span>
                    <Button asChild>
                      <Link href={`/courses/${course.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Button asChild variant="outline">
              <Link href="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Why Choose Codel?
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We are committed to providing an exceptional learning experience that leads to real career outcomes.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
            <ul className="grid gap-4">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Expert Instructors</h3>
                  <p className="text-muted-foreground">
                    Learn from industry veterans with years of practical experience.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Flexible Learning</h3>
                  <p className="text-muted-foreground">
                    Study at your own pace, on your own schedule, from anywhere in the world.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Career Support</h3>
                  <p className="text-muted-foreground">
                    Get help with resume building, interview prep, and job placement.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Start Your Journey?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of successful students who have transformed their careers with Codel.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild>
                <Link href="/application">Apply Now</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/faq">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
