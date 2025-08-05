import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>

      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              At Codel, our mission is to empower individuals and organizations with cutting-edge knowledge and skills in the most in-demand fields. We believe in accessible, high-quality education that transforms careers and drives innovation. Our programs are designed to be practical, relevant, and delivered by industry experts, ensuring our students are well-prepared for the challenges of tomorrow.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                We are committed to delivering educational content and services of the highest quality, constantly striving for improvement and innovation.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Empowerment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                We empower our students by providing them with the tools, knowledge, and confidence to achieve their professional goals.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Integrity</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                We operate with honesty, transparency, and ethical conduct in all our interactions and educational practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-12" />

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardContent className="flex flex-col items-center text-center p-6">
              <Image
                src="/placeholder-user.jpg"
                alt="Team Member 1"
                width={120}
                height={120}
                className="rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Jane Doe</h3>
              <p className="text-primary">CEO & Founder</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Jane is a visionary leader with over 20 years of experience in educational technology.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center text-center p-6">
              <Image
                src="/placeholder-user.jpg"
                alt="Team Member 2"
                width={120}
                height={120}
                className="rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">John Smith</h3>
              <p className="text-primary">Head of Curriculum</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                John designs our cutting-edge courses, ensuring they meet industry standards.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center text-center p-6">
              <Image
                src="/placeholder-user.jpg"
                alt="Team Member 3"
                width={120}
                height={120}
                className="rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Emily White</h3>
              <p className="text-primary">Student Success Manager</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Emily is dedicated to supporting our students throughout their learning journey.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
