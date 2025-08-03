"use client"

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
  Palette,
  Languages,
  BookOpen,
  Phone,
  Mail,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "@/hooks/useTranslation"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"

export default function CoursesPage() {
  const { t } = useTranslation()

  const courses = [
    {
      id: "cybersecurity",
      category: "Cybersecurity",
      title: "Cybersecurity Professional",
      description: "Master ethical hacking, penetration testing, and security vulnerability assessment.",
      duration: "4 months",
      students: "2,500+",
      rating: 4.9,
      level: "Advanced",
      icon: <Shield className="w-8 h-8" />,
      gradient: "from-red-500/10 to-red-600/20",
      skills: ["Ethical Hacking", "Penetration Testing", "Security Assessment", "Compliance"],
      image: "/images/cybersecurity-flyer.jpg",
      certificates: ["CompTIA Security+", "CompTIA Network+"],
    },
    {
      id: "cybersecurity-vuln",
      category: "Cybersecurity",
      title: "Cybersecurity Vulnerability Tester",
      description: "Specialized program focusing on vulnerability testing and penetration testing techniques.",
      duration: "4 months",
      students: "1,800+",
      rating: 4.8,
      level: "Advanced",
      icon: <Shield className="w-8 h-8" />,
      gradient: "from-red-500/10 to-red-600/20",
      skills: ["Vulnerability Assessment", "Penetration Testing", "Risk Management", "Compliance"],
      image: "/images/cybersecurity-vuln-flyer.jpg",
      certificates: ["CompTIA PenTest+"],
    },
    {
      id: "uiux-design",
      category: "Design",
      title: "UI/UX & Webflow Design",
      description: "Master modern design principles, user experience, and Webflow development.",
      duration: "3 months",
      students: "1,400+",
      rating: 4.8,
      level: "Beginner",
      icon: <Palette className="w-8 h-8" />,
      gradient: "from-pink-500/10 to-pink-600/20",
      skills: ["UI/UX Principles", "Wireframing", "Webflow", "User Research"],
      image: "/images/uiux-flyer.jpg",
      certificates: ["Google UX Design Certificate"],
    },
    {
      id: "iam",
      category: "Security",
      title: "Identity & Access Management (IAM)",
      description: "Master IAM frameworks, RBAC, SSO, and multi-factor authentication systems.",
      duration: "3 months",
      students: "800+",
      rating: 4.7,
      level: "Intermediate",
      icon: <Shield className="w-8 h-8" />,
      gradient: "from-teal-500/10 to-teal-600/20",
      skills: ["IAM Frameworks", "RBAC", "SSO & MFA", "Compliance"],
      image: "/images/iam-flyer.jpg",
      certificates: ["Certified Identity & Access Manager (CIAM)"],
    },
    {
      id: "kyc-compliance",
      category: "Compliance",
      title: "KYC & Compliance Specialist",
      description: "Learn KYC regulations, customer due diligence, and fraud detection techniques.",
      duration: "2 months",
      students: "600+",
      rating: 4.6,
      level: "Beginner",
      icon: <BookOpen className="w-8 h-8" />,
      gradient: "from-emerald-500/10 to-emerald-600/20",
      skills: ["KYC & AML", "Due Diligence", "Risk Assessment", "Fraud Prevention"],
      image: "/images/kyc-flyer.jpg",
      certificates: ["Certified KYC Analyst (CKYCA)"],
    },
    {
      id: "languages",
      category: "Languages",
      title: "European Languages Program",
      description: "French, Spanish, Lithuanian - Open doors across Europe with professional language skills.",
      duration: "3-6 months",
      students: "2,200+",
      rating: 4.7,
      level: "All Levels",
      icon: <Languages className="w-8 h-8" />,
      gradient: "from-blue-500/10 to-blue-600/20",
      skills: ["Business Communication", "Cultural Insights", "Professional Proficiency", "Certification Prep"],
      image: "/images/languages-flyer.jpg",
      certificates: ["DELF", "DELE", "LKI"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50/30 via-lime-50/20 to-yellow-50/10">
      {/* Header */}
      <header className="bg-[#173104] text-white px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/">
              <Image
                src="/images/gitb-logo.png"
                alt="GITB Logo"
                width={120}
                height={40}
                className="h-10 w-auto cursor-pointer brightness-0 invert"
              />
            </Link>
            <nav className="hidden md:flex space-x-8 text-sm font-medium">
              <Link href="/" className="hover:text-[#b9ee44] transition-colors">
                {t("nav.home")}
              </Link>
              <Link href="/courses" className="text-[#b9ee44] font-semibold">
                {t("nav.courses")}
              </Link>
              <Link href="/about" className="hover:text-[#b9ee44] transition-colors">
                {t("nav.about")}
              </Link>
              <Link href="/how-it-works" className="hover:text-[#b9ee44] transition-colors">
                {t("nav.howItWorks")}
              </Link>
              <Link href="/faq" className="hover:text-[#b9ee44] transition-colors">
                {t("nav.faq")}
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <LanguageSwitcher />
            <Link href="/application">
              <Button className="bg-gradient-to-r from-[#b9ee44] to-[#a8d93f] text-[#173104] hover:from-[#a8d93f] hover:to-[#97c73a] text-sm px-6 py-2 font-bold rounded-lg shadow-lg transition-all">
                {t("nav.registerNow")}
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#b9ee44] to-[#a8d93f] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#173104] mb-6">
            Industry-Focused <span className="text-white">Tech Courses</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#173104]/80 max-w-3xl mx-auto mb-8">
            Choose from our comprehensive catalog of EU-recognized programs designed to prepare you for high-demand
            careers in Europe's thriving job market.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-white/20 text-[#173104] px-4 py-2 border-0">EU Recognized</Badge>
            <Badge className="bg-white/20 text-[#173104] px-4 py-2 border-0">Industry Partnerships</Badge>
            <Badge className="bg-white/20 text-[#173104] px-4 py-2 border-0">Job Placement Support</Badge>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-12 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["All", "Cybersecurity", "Design", "Compliance", "Languages"].map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={`px-4 py-2 sm:px-6 sm:py-2 text-sm sm:text-base transition-all ${
                  category === "All"
                    ? "bg-[#173104] text-white hover:bg-[#2d5a1a]"
                    : "border-[#173104]/30 text-[#173104] hover:bg-[#b9ee44]/20"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm group overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#b9ee44]/90 text-[#173104] border-0">{course.level}</Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`bg-gradient-to-br ${course.gradient} p-3 rounded-xl mr-3`}>
                      <div className="text-[#173104]">{course.icon}</div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#173104] mb-1">{course.category}</p>
                      <h3 className="text-lg font-bold text-gray-900 leading-tight">{course.title}</h3>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">{course.description}</p>

                  <div className="flex items-center space-x-4 mb-4 text-xs text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      {course.students}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 mr-1 text-[#b9ee44] fill-current" />
                      {course.rating}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs font-semibold text-gray-700 mb-2">Certificates:</p>
                    <div className="flex flex-wrap gap-1">
                      {course.certificates.map((cert, certIndex) => (
                        <Badge key={certIndex} variant="outline" className="text-xs px-2 py-1 border-[#173104]/30">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Link href={`/courses/${course.id}`}>
                    <Button className="w-full bg-gradient-to-r from-[#173104] to-[#2d5a1a] text-white hover:from-[#145033] hover:to-[#246647] group-hover:shadow-lg transition-all text-sm sm:text-base py-2 sm:py-3">
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
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Prepare for <span className="text-[#173104]">Industry Certifications</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center opacity-70 hover:opacity-100 transition-opacity">
            {["CompTIA", "Google", "Microsoft", "Cisco", "AWS", "Oracle"].map((cert, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-[#173104]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#173104] to-[#2d5a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Start Learning?</h2>
          <p className="text-lg sm:text-xl text-green-100 mb-8">
            Join thousands of students who have transformed their careers with our industry-focused programs
          </p>
          <Link href="/application">
            <Button className="bg-gradient-to-r from-[#b9ee44] to-[#a8d93f] text-[#173104] hover:from-[#a8d93f] hover:to-[#97c73a] px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-xl shadow-xl font-bold transition-all">
              Apply Now - €50 Application Fee
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#173104]/5 to-[#b9ee44]/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated with New Courses</h2>
          <p className="text-lg text-gray-600 mb-8">Be the first to know about new programs and special offers</p>

          <Card className="bg-white/90 backdrop-blur-sm shadow-lg border-0 rounded-2xl">
            <CardContent className="p-8">
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-[#173104] focus:ring-2 focus:ring-[#173104]/20 outline-none transition-all"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-[#173104] focus:ring-2 focus:ring-[#173104]/20 outline-none transition-all"
                />
                <Button className="bg-gradient-to-r from-[#173104] to-[#2d5a1a] text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  Subscribe
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#173104] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/images/gitb-logo.png"
                alt="GITB Logo"
                width={120}
                height={40}
                className="h-10 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-green-100 mb-6 leading-relaxed">
                Global Institute of Tech and Business - Empowering careers through technology education.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <div className="space-y-3 text-green-100">
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
                  <Link href="/how-it-works" className="hover:text-white transition-colors">
                    How It Works
                  </Link>
                </p>
                <p>
                  <Link href="/faq" className="hover:text-white transition-colors">
                    FAQ
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
                <p>
                  <Link href="/courses" className="hover:text-white transition-colors">
                    Cybersecurity
                  </Link>
                </p>
                <p>
                  <Link href="/courses" className="hover:text-white transition-colors">
                    UI/UX Design
                  </Link>
                </p>
                <p>
                  <Link href="/courses" className="hover:text-white transition-colors">
                    Languages
                  </Link>
                </p>
                <p>
                  <Link href="/courses" className="hover:text-white transition-colors">
                    Compliance
                  </Link>
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#b9ee44]" />
                  <span className="text-green-100">+370 600 12345</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#b9ee44]" />
                  <span className="text-green-100">admissions@gitb.lt</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-[#b9ee44]" />
                  <span className="text-green-100">Vilnius, Lithuania</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-green-600/30 mt-12 pt-8 text-center">
            <p className="text-green-100">© 2024 Global Institute of Tech and Business. All rights reserved.</p>
            <div className="flex flex-wrap justify-center space-x-4 sm:space-x-8 mt-4 text-sm text-green-200">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/cookie-policy" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
