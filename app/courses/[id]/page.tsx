import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Award, CheckCircle, ArrowRight, Star, Globe, BookOpen, Target, Briefcase } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  // This would typically fetch course data based on the ID
  const course = {
    id: "aws-cloud",
    category: "Cloud Computing",
    title: "AWS Cloud Practitioner Certification",
    description:
      "Master Amazon Web Services fundamentals and prepare for the AWS Certified Cloud Practitioner exam with hands-on labs and real-world projects.",
    duration: "8 weeks",
    students: "2,500+",
    rating: 4.9,
    level: "Beginner",
    price: "Contact for pricing",
    whatYouLearn: [
      "AWS Core Services (EC2, S3, RDS, Lambda)",
      "Cloud Architecture Best Practices",
      "Security and Compliance in AWS",
      "Cost Optimization Strategies",
      "Monitoring and Logging",
      "Disaster Recovery Planning",
      "Hands-on Lab Exercises",
      "Real-world Project Implementation",
    ],
    certifications: [
      { name: "AWS Certified Cloud Practitioner", logo: "AWS logo" },
      { name: "AWS Solutions Architect Associate", logo: "AWS SA logo" },
    ],
    careerOutcomes: [
      "Cloud Solutions Architect",
      "AWS Systems Administrator",
      "Cloud Security Specialist",
      "DevOps Engineer",
      "Cloud Consultant",
      "Technical Account Manager",
    ],
    curriculum: [
      {
        week: "Week 1-2",
        title: "AWS Fundamentals",
        topics: ["Introduction to Cloud Computing", "AWS Global Infrastructure", "Core Services Overview"],
      },
      {
        week: "Week 3-4",
        title: "Compute & Storage",
        topics: ["EC2 Instances", "S3 Storage Solutions", "EBS and EFS", "Lambda Functions"],
      },
      {
        week: "Week 5-6",
        title: "Networking & Security",
        topics: ["VPC Configuration", "Security Groups", "IAM Policies", "CloudTrail"],
      },
      {
        week: "Week 7-8",
        title: "Certification Prep",
        topics: ["Practice Exams", "Hands-on Labs", "Final Project", "Exam Strategies"],
      },
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#1a5f3f]/90 to-[#2d7a5a]/90 backdrop-blur-sm text-white px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/">
              <div className="bg-white/95 text-[#1a5f3f] px-4 py-2 rounded-lg font-bold text-xl shadow-lg cursor-pointer">
                GITB
              </div>
            </Link>
            <nav className="hidden md:flex space-x-8 text-sm font-medium">
              <Link href="/" className="hover:text-[#daff7d] transition-colors">
                Home
              </Link>
              <Link href="/courses" className="text-[#daff7d] font-semibold">
                Courses
              </Link>
              <Link href="/about" className="hover:text-[#daff7d] transition-colors">
                About Us
              </Link>
              <Link href="/how-it-works" className="hover:text-[#daff7d] transition-colors">
                How It Works
              </Link>
              <Link href="/faq" className="hover:text-[#daff7d] transition-colors">
                FAQ
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/application">
              <Button className="bg-[#daff7d] text-[#1a5f3f] hover:bg-[#c5e86a] text-sm px-6 py-2 font-semibold shadow-lg">
                APPLY NOW
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Course Hero */}
      <section className="bg-gradient-to-br from-purple-100/30 via-blue-50/40 to-green-50/30 py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-gradient-to-r from-[#daff7d]/5 via-transparent to-[#daff7d]/5"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,_#daff7d_0.1px,_transparent_0.1px)] bg-[length:60px_60px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#daff7d]/20 text-[#1a5f3f] mb-4">{course.category}</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{course.title}</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">{course.description}</p>

              <div className="flex flex-wrap gap-6 mb-8 text-sm">
                <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Clock className="w-4 h-4 mr-2 text-[#1a5f3f]" />
                  {course.duration}
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Users className="w-4 h-4 mr-2 text-[#1a5f3f]" />
                  {course.students} enrolled
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Star className="w-4 h-4 mr-2 text-[#daff7d] fill-current" />
                  {course.rating} rating
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <BookOpen className="w-4 h-4 mr-2 text-[#1a5f3f]" />
                  {course.level}
                </div>
              </div>

              <Link href="/application">
                <Button className="bg-gradient-to-r from-[#1a5f3f] to-[#2d7a5a] text-white px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>

              <p className="text-sm text-gray-500 mt-4">
                A non-refundable application fee of €50 applies, which will be deducted from your initial tuition
                payment upon enrollment.
              </p>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Course preview"
                width={500}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#daff7d] p-4 rounded-xl shadow-lg">
                <Award className="w-8 h-8 text-[#1a5f3f]" />
                <div className="text-sm font-bold text-[#1a5f3f] mt-1">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                What You'll <span className="text-[#1a5f3f]">Learn</span>
              </h2>
              <div className="grid gap-4">
                {course.whatYouLearn.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#1a5f3f] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Course <span className="text-[#1a5f3f]">Curriculum</span>
              </h2>
              <div className="space-y-6">
                {course.curriculum.map((module, index) => (
                  <Card key={index} className="border-l-4 border-l-[#1a5f3f] shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <Badge className="bg-[#daff7d]/20 text-[#1a5f3f] mr-3">{module.week}</Badge>
                        <h3 className="font-bold text-lg">{module.title}</h3>
                      </div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex}>• {topic}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50/50 to-blue-50/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            <span className="text-[#1a5f3f]">Certifications</span> You'll Prepare For
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {course.certifications.map((cert, index) => (
              <Card key={index} className="border-2 border-[#1a5f3f]/20 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#1a5f3f]/10 to-[#daff7d]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-10 h-10 text-[#1a5f3f]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{cert.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What You Can Do After <span className="text-[#1a5f3f]">Completion</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our graduates secure high-demand positions across Europe's leading technology companies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {course.careerOutcomes.map((career, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-br from-[#1a5f3f]/10 to-[#daff7d]/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="w-8 h-8 text-[#1a5f3f]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{career}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#1a5f3f] to-[#2d7a5a] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#daff7d]/10 via-transparent to-[#daff7d]/10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#daff7d_0.5px,_transparent_0.5px)] bg-[length:60px_60px] opacity-20"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Industry-Ready Focus</h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            This program is designed with direct input from industry professionals and hiring managers to ensure you
            learn exactly what employers need.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Target className="w-8 h-8 text-[#daff7d] mx-auto mb-3" />
              <h3 className="font-bold text-white mb-2">Real Projects</h3>
              <p className="text-green-100 text-sm">Work on actual industry scenarios</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Users className="w-8 h-8 text-[#daff7d] mx-auto mb-3" />
              <h3 className="font-bold text-white mb-2">Expert Mentors</h3>
              <p className="text-green-100 text-sm">Learn from working professionals</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Globe className="w-8 h-8 text-[#daff7d] mx-auto mb-3" />
              <h3 className="font-bold text-white mb-2">EU Network</h3>
              <p className="text-green-100 text-sm">Access to European job market</p>
            </div>
          </div>

          <Link href="/application">
            <Button className="bg-[#daff7d] text-[#1a5f3f] hover:bg-[#c5e86a] px-8 py-4 text-lg rounded-xl shadow-xl font-semibold">
              Start Your Application
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a5f3f] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/">
                <div className="bg-white text-[#1a5f3f] px-4 py-2 rounded-lg font-bold text-xl mb-6 inline-block cursor-pointer">
                  GITB
                </div>
              </Link>
              <p className="text-green-100 mb-6 leading-relaxed">
                Global Institute of Tech and Business - Empowering careers through technology education.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <div className="space-y-3 text-green-100">
                <p>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </p>
                <p>
                  <Link href="/courses" className="hover:text-white transition-colors">
                    Courses
                  </Link>
                </p>
                <p>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </p>
                <p>
                  <Link href="/application" className="hover:text-white transition-colors">
                    Apply Now
                  </Link>
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Programs</h4>
              <div className="space-y-3 text-green-100">
                <p>Cloud Computing</p>
                <p>Cybersecurity</p>
                <p>Full Stack Development</p>
                <p>Data Analytics</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Contact</h4>
              <div className="space-y-3 text-green-100">
                <p>+370 600 12345</p>
                <p>info@gitb.eu</p>
                <p>Vilnius, Lithuania</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
