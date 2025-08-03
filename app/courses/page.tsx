"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, ArrowRight, Search, Filter, Clock, Award, Users, Star, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("popular")
  const [filterBy, setFilterBy] = useState("all")

  const courses = [
    {
      id: "cybersecurity-professional",
      title: "Cybersecurity Professional",
      category: "Technical",
      duration: "4 months",
      price: 1635,
      level: "Beginner to Advanced",
      rating: 4.9,
      students: 1250,
      image: "/images/cybersecurity-flyer.jpg",
      description: "Master cybersecurity fundamentals and earn CompTIA Security+ certification",
      skills: ["Network Security", "Risk Assessment", "Incident Response", "Compliance"],
      certification: "CompTIA Security+",
      popular: true,
    },
    {
      id: "cybersecurity-vulnerability",
      title: "Vulnerability Tester",
      category: "Technical",
      duration: "4 months",
      price: 1590,
      level: "Intermediate to Advanced",
      rating: 4.8,
      students: 890,
      image: "/images/cybersecurity-vuln-flyer.jpg",
      description: "Learn penetration testing and vulnerability assessment with CompTIA PenTest+",
      skills: ["Penetration Testing", "Vulnerability Assessment", "Ethical Hacking", "Security Tools"],
      certification: "CompTIA PenTest+",
      popular: false,
    },
    {
      id: "uiux-design",
      title: "UI/UX & Webflow Design",
      category: "Design",
      duration: "4 months",
      price: 1590,
      level: "Beginner to Intermediate",
      rating: 4.9,
      students: 1100,
      image: "/images/uiux-flyer.jpg",
      description: "Create stunning user experiences and build websites with Webflow",
      skills: ["User Research", "Prototyping", "Webflow", "Design Systems"],
      certification: "Google UX Design Certificate",
      popular: true,
    },
    {
      id: "iam-specialist",
      title: "IAM Specialist",
      category: "Technical",
      duration: "4 months",
      price: 1730,
      level: "Intermediate",
      rating: 4.7,
      students: 650,
      image: "/images/iam-flyer.jpg",
      description: "Master identity and access management for enterprise security",
      skills: ["Identity Management", "Access Control", "SSO", "Directory Services"],
      certification: "CIAM Certification",
      popular: false,
    },
    {
      id: "kyc-compliance",
      title: "KYC Compliance Specialist",
      category: "Business",
      duration: "4 months",
      price: 1590,
      level: "Beginner to Intermediate",
      rating: 4.8,
      students: 780,
      image: "/images/kyc-flyer.jpg",
      description: "Navigate financial regulations and compliance requirements",
      skills: ["KYC Procedures", "AML Compliance", "Risk Assessment", "Regulatory Reporting"],
      certification: "CKYCA Certification",
      popular: false,
    },
    {
      id: "european-languages",
      title: "European Languages Program",
      category: "Language",
      duration: "3 months",
      price: 300,
      level: "All Levels",
      rating: 4.6,
      students: 2100,
      image: "/images/languages-flyer.jpg",
      description: "Learn French, Spanish, or Lithuanian for European career opportunities",
      skills: ["Conversational Skills", "Business Communication", "Cultural Awareness", "Professional Writing"],
      certification: "CEFR Certificate",
      popular: true,
    },
  ]

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesFilter = filterBy === "all" || course.category.toLowerCase() === filterBy.toLowerCase()

    return matchesSearch && matchesFilter
  })

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "duration":
        return Number.parseInt(a.duration) - Number.parseInt(b.duration)
      case "rating":
        return b.rating - a.rating
      case "popular":
      default:
        return b.students - a.students
    }
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#173104]/90 to-[#2d5a1a]/90 backdrop-blur-sm text-white px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/">
              <Image
                src="/images/gitb-logo-simple.png"
                alt="GITB Logo"
                width={120}
                height={40}
                className="h-10 w-auto cursor-pointer brightness-0 invert"
              />
            </Link>
            <nav className="hidden md:flex space-x-8 text-sm font-medium">
              <Link href="/" className="hover:text-[#b9ee44] transition-colors">
                Home
              </Link>
              <Link href="/courses" className="text-[#b9ee44] font-semibold">
                Courses
              </Link>
              <Link href="/about" className="hover:text-[#b9ee44] transition-colors">
                About Us
              </Link>
              <Link href="/how-it-works" className="hover:text-[#b9ee44] transition-colors">
                How It Works
              </Link>
              <Link href="/faq" className="hover:text-[#b9ee44] transition-colors">
                FAQ
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-2 text-sm">
              <Phone className="w-4 h-4" />
              <span>+370 600 12345</span>
            </div>
            <Link href="/application">
              <Button className="bg-[#b9ee44] text-[#173104] hover:bg-[#a8d93a] text-sm px-6 py-2 font-semibold shadow-lg">
                APPLY NOW
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-100/30 via-blue-50/40 to-green-50/30 py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-gradient-to-r from-[#b9ee44]/5 via-transparent to-[#b9ee44]/5"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,_#b9ee44_0.1px,_transparent_0.1px)] bg-[length:60px_60px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <Badge className="bg-[#b9ee44]/20 text-[#173104] mb-4">All Courses</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Industry-Ready <span className="text-[#173104]">Programs</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive range of technology, business, and language courses designed for career
            success in Europe's competitive job market.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search courses, skills, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 py-3 border-2 border-gray-200 focus:border-[#173104] rounded-xl"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <Select value={filterBy} onValueChange={setFilterBy}>
                <SelectTrigger className="w-40 border-2 border-gray-200 rounded-xl">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Filter by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="technical">Technical</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="language">Language</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40 border-2 border-gray-200 rounded-xl">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="duration">Duration</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {sortedCourses.map((course) => (
              <Card
                key={course.id}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm group overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {course.popular && (
                    <Badge className="absolute top-4 left-4 bg-[#b9ee44] text-[#173104] font-semibold">
                      Most Popular
                    </Badge>
                  )}
                  <Badge className="absolute top-4 right-4 bg-white/90 text-gray-700">{course.category}</Badge>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold text-gray-700">{course.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{course.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-[#173104]" />
                        <span className="text-gray-600">{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-[#173104]" />
                        <span className="text-gray-600">{course.students.toLocaleString()} students</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 text-sm">
                      <Award className="w-4 h-4 text-[#173104]" />
                      <span className="text-gray-600">{course.certification}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Key Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {course.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} className="bg-[#173104]/10 text-[#173104] text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {course.skills.length > 3 && (
                        <Badge className="bg-gray-100 text-gray-600 text-xs">+{course.skills.length - 3} more</Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-2xl font-bold text-[#173104]">€{course.price}</div>
                      <div className="text-sm text-gray-500">{course.level}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Starting from</div>
                      <div className="text-lg font-semibold text-gray-700">
                        €
                        {course.id === "cybersecurity-professional"
                          ? "409"
                          : course.id === "cybersecurity-vulnerability"
                            ? "398"
                            : course.id === "uiux-design"
                              ? "398"
                              : course.id === "iam-specialist"
                                ? "433"
                                : course.id === "kyc-compliance"
                                  ? "398"
                                  : "100"}
                        /month
                      </div>
                    </div>
                  </div>

                  <Link href={`/courses/${course.id}`}>
                    <Button className="w-full bg-gradient-to-r from-[#173104] to-[#2d5a1a] text-white hover:shadow-lg transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {sortedCourses.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
              <p className="text-gray-600">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose GITB */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50/50 to-blue-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-[#173104]">GITB Courses?</span>
            </h2>
            <p className="text-lg text-gray-600">What sets our programs apart</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-[#173104]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Industry-Recognized Certifications</h3>
                <p className="text-gray-600">
                  Earn certifications from CompTIA, Google, and other leading organizations that employers value across
                  Europe.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-[#173104]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Instructors</h3>
                <p className="text-gray-600">
                  Learn from industry professionals with real-world experience at leading European tech companies.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-[#173104]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Career Support</h3>
                <p className="text-gray-600">
                  Get lifetime access to our career services, including job placement assistance and professional
                  networking.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#173104] to-[#2d5a1a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of professionals who have transformed their careers with GITB's industry-focused programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/application">
              <Button className="bg-[#b9ee44] text-[#173104] hover:bg-[#a8d93a] px-8 py-4 text-lg rounded-xl shadow-xl font-semibold">
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#173104] px-8 py-4 text-lg rounded-xl bg-transparent"
              >
                How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#173104] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/">
                <Image
                  src="/images/gitb-logo-simple.png"
                  alt="GITB Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto mb-6 cursor-pointer"
                />
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
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </p>
                <p>
                  <Link href="/how-it-works" className="hover:text-white transition-colors">
                    How It Works
                  </Link>
                </p>
                <p>
                  <Link href="/faq" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Programs</h4>
              <div className="space-y-3 text-green-100">
                <p>
                  <Link href="/courses/cybersecurity-professional" className="hover:text-white transition-colors">
                    Cybersecurity
                  </Link>
                </p>
                <p>
                  <Link href="/courses/uiux-design" className="hover:text-white transition-colors">
                    UI/UX Design
                  </Link>
                </p>
                <p>
                  <Link href="/courses/european-languages" className="hover:text-white transition-colors">
                    Languages
                  </Link>
                </p>
                <p>
                  <Link href="/courses/kyc-compliance" className="hover:text-white transition-colors">
                    Compliance
                  </Link>
                </p>
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
