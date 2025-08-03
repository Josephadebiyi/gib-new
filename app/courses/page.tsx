import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Clock,
  Users,
  Award,
  ArrowRight,
  Star,
  Globe,
  Shield,
  Code,
  Database,
  Smartphone,
  BarChart,
} from "lucide-react"
import Link from "next/link"

export default function CoursesPage() {
  const courses = [
    {
      id: "aws-cloud",
      category: "Cloud Computing",
      title: "AWS Cloud Practitioner Certification",
      description: "Master Amazon Web Services fundamentals and prepare for the AWS Certified Cloud Practitioner exam.",
      duration: "8 weeks",
      students: "2,500+",
      rating: 4.9,
      level: "Beginner",
      icon: <Globe className="w-8 h-8" />,
      gradient: "from-blue-500/10 to-blue-600/20",
      skills: ["AWS Core Services", "Cloud Architecture", "Security", "Pricing"],
    },
    {
      id: "cybersecurity",
      category: "Cybersecurity",
      title: "CISSP Cybersecurity Professional",
      description: "Comprehensive cybersecurity training preparing you for CISSP certification and security roles.",
      duration: "12 weeks",
      students: "1,800+",
      rating: 4.8,
      level: "Advanced",
      icon: <Shield className="w-8 h-8" />,
      gradient: "from-red-500/10 to-red-600/20",
      skills: ["Risk Management", "Security Architecture", "Incident Response", "Compliance"],
    },
    {
      id: "full-stack",
      category: "Web Development",
      title: "Full Stack JavaScript Developer",
      description: "Complete web development bootcamp covering React, Node.js, databases, and modern deployment.",
      duration: "16 weeks",
      students: "3,200+",
      rating: 4.9,
      level: "Intermediate",
      icon: <Code className="w-8 h-8" />,
      gradient: "from-green-500/10 to-green-600/20",
      skills: ["React", "Node.js", "MongoDB", "AWS Deployment"],
    },
    {
      id: "data-analytics",
      category: "Data Science",
      title: "Data Analytics & Visualization",
      description: "Learn Python, SQL, and modern data visualization tools to become a data analytics professional.",
      duration: "10 weeks",
      students: "1,500+",
      rating: 4.7,
      level: "Beginner",
      icon: <BarChart className="w-8 h-8" />,
      gradient: "from-purple-500/10 to-purple-600/20",
      skills: ["Python", "SQL", "Tableau", "Statistical Analysis"],
    },
    {
      id: "mobile-dev",
      category: "Mobile Development",
      title: "React Native Mobile Development",
      description: "Build cross-platform mobile applications for iOS and Android using React Native.",
      duration: "12 weeks",
      students: "900+",
      rating: 4.6,
      level: "Intermediate",
      icon: <Smartphone className="w-8 h-8" />,
      gradient: "from-orange-500/10 to-orange-600/20",
      skills: ["React Native", "Mobile UI/UX", "App Store Deployment", "Native APIs"],
    },
    {
      id: "database-admin",
      category: "Database Management",
      title: "Database Administration & Design",
      description: "Master PostgreSQL, MySQL, and NoSQL databases with advanced administration techniques.",
      duration: "8 weeks",
      students: "1,200+",
      rating: 4.8,
      level: "Intermediate",
      icon: <Database className="w-8 h-8" />,
      gradient: "from-indigo-500/10 to-indigo-600/20",
      skills: ["PostgreSQL", "MongoDB", "Performance Tuning", "Backup & Recovery"],
    },
  ]

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
            <div className="flex items-center space-x-2 text-sm">
              <span className="bg-white/20 px-2 py-1 rounded">EN | LT</span>
            </div>
            <Link href="/application">
              <Button className="bg-[#daff7d] text-[#1a5f3f] hover:bg-[#c5e86a] text-sm px-6 py-2 font-semibold shadow-lg">
                APPLY NOW
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-100/30 via-blue-50/40 to-green-50/30 py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-gradient-to-r from-[#daff7d]/5 via-transparent to-[#daff7d]/5"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,_#daff7d_0.1px,_transparent_0.1px)] bg-[length:60px_60px]"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Industry-Focused <span className="text-[#1a5f3f]">Tech Courses</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose from our comprehensive catalog of EU-recognized programs designed to prepare you for high-demand tech
            careers
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-[#daff7d]/20 text-[#1a5f3f] px-4 py-2">EU Recognized</Badge>
            <Badge className="bg-blue-100/50 text-blue-700 px-4 py-2">Industry Partnerships</Badge>
            <Badge className="bg-green-100/50 text-green-700 px-4 py-2">Job Placement Support</Badge>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm group"
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`bg-gradient-to-br ${course.gradient} p-4 rounded-2xl`}>
                      <div className="text-[#1a5f3f]">{course.icon}</div>
                    </div>
                    <Badge className="bg-[#daff7d]/20 text-[#1a5f3f]">{course.level}</Badge>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-[#1a5f3f] mb-2">{course.category}</p>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{course.description}</p>
                  </div>

                  <div className="flex items-center space-x-6 mb-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {course.students} enrolled
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-2 text-[#daff7d] fill-current" />
                      {course.rating}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-700 mb-3">Key Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Link href={`/courses/${course.id}`}>
                    <Button className="w-full bg-gradient-to-r from-[#1a5f3f] to-[#2d7a5a] text-white hover:from-[#145033] hover:to-[#246647] group-hover:shadow-lg transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Partners */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50/50 to-blue-50/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Prepare for <span className="text-[#1a5f3f]">Industry Certifications</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center opacity-70 hover:opacity-100 transition-opacity">
            {["AWS", "Microsoft", "Google Cloud", "CompTIA", "CISSP", "Cisco"].map((cert, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1a5f3f]/10 to-[#daff7d]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-[#1a5f3f]" />
                </div>
                <span className="text-sm font-semibold text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#1a5f3f] to-[#2d7a5a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Learning?</h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of students who have transformed their careers with our industry-focused programs
          </p>
          <Link href="/application">
            <Button className="bg-[#daff7d] text-[#1a5f3f] hover:bg-[#c5e86a] px-8 py-4 text-lg rounded-xl shadow-xl font-semibold">
              Apply Now - €50 Application Fee
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
