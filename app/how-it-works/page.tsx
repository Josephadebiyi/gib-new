import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Lightbulb, BookOpen, GraduationCap, Briefcase } from 'lucide-react'

export default function HowItWorksPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-12">How It Works</h1>

      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Our Simple Process</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              At Codel, we&apos;ve streamlined the learning journey to make it as effective and straightforward as possible. Follow these steps to kickstart your career transformation.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <Card className="text-center p-6">
          <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
          <CardTitle className="text-xl mb-2">1. Explore Courses</CardTitle>
          <CardContent className="p-0">
            <p className="text-gray-700 dark:text-gray-300">
              Browse our diverse catalog of courses in cybersecurity, design, languages, and finance. Find the program that best fits your career goals.
            </p>
          </CardContent>
        </Card>
        <Card className="text-center p-6">
          <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
          <CardTitle className="text-xl mb-2">2. Enroll & Learn</CardTitle>
          <CardContent className="p-0">
            <p className="text-gray-700 dark:text-gray-300">
              Complete the application process and enroll in your chosen course. Access our online learning platform with engaging content and expert instructors.
            </p>
          </CardContent>
        </Card>
        <Card className="text-center p-6">
          <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
          <CardTitle className="text-xl mb-2">3. Master Skills</CardTitle>
          <CardContent className="p-0">
            <p className="text-gray-700 dark:text-gray-300">
              Engage with interactive lessons, hands-on projects, and live sessions. Build practical skills and a strong portfolio.
            </p>
          </CardContent>
        </Card>
        <Card className="text-center p-6">
          <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
          <CardTitle className="text-xl mb-2">4. Launch Your Career</CardTitle>
          <CardContent className="p-0">
            <p className="text-gray-700 dark:text-gray-300">
              Leverage our career support, including resume building and interview prep, to land your dream job in your new field.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section>
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">What Makes Us Different?</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 space-y-4">
              <li>
                <strong>Industry-Led Curriculum:</strong> Our courses are developed and taught by professionals with real-world experience, ensuring you learn the most relevant and up-to-date skills.
              </li>
              <li>
                <strong>Flexible Learning:</strong> Our online platform allows you to learn at your own pace, fitting education into your busy schedule without compromising quality.
              </li>
              <li>
                <strong>Dedicated Support:</strong> From academic assistance to career guidance, our team is committed to your success every step of the way.
              </li>
              <li>
                <strong>Practical, Hands-on Projects:</strong> Apply your knowledge immediately through projects that simulate real-world scenarios, building a portfolio that stands out to employers.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
