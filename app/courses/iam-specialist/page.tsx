import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function IamSpecialistPage() {
  const course = {
    title: "IAM Specialist",
    description: "Master Identity and Access Management (IAM) principles, technologies, and best practices to secure digital identities and resources.",
    image_url: "/images/iam-specialist-flyer.png",
    duration: "14 Weeks",
    price: "€1500",
    category: "Cybersecurity",
    career_outcomes: [
      "IAM Engineer",
      "Access Control Specialist",
      "Identity Architect",
      "Security Administrator",
      "Cybersecurity Consultant (IAM focus)",
    ],
    enrollment_details: "Enrollment closes soon. Prerequisites: Experience with enterprise IT systems, basic understanding of networking and security concepts.",
    modules: [
      { title: "Module 1: IAM Fundamentals", description: "Core concepts of IAM, including authentication, authorization, and identity lifecycle management." },
      { title: "Module 2: Directory Services", description: "Working with LDAP, Active Directory, and other identity repositories." },
      { title: "Module 3: Single Sign-On (SSO) and Federation", description: "Implementing SSO solutions using SAML, OAuth, and OpenID Connect." },
      { title: "Module 4: Privileged Access Management (PAM)", description: "Securing privileged accounts and managing elevated access." },
      { title: "Module 5: Multi-Factor Authentication (MFA)", description: "Deploying and managing various MFA methods." },
      { title: "Module 6: IAM Governance and Compliance", description: "Ensuring IAM solutions meet regulatory requirements and industry standards." },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="p-0">
              <div className="relative w-full h-64 md:h-80 lg:h-96">
                <Image
                  src={course.image_url || "/placeholder.svg"}
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
                {course.modules.map((module, index) => (
                  <li key={index}>
                    <h3 className="text-xl font-medium">{module.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{module.description}</p>
                  </li>
                ))}
              </ul>

              <Separator className="my-6" />

              <h2 className="text-2xl font-semibold mb-4">Career Outcomes</h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                {course.career_outcomes.map((outcome, index) => (
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
