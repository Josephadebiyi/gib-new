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
  Code,
  Database,
  Smartphone,
  BarChart,
  Palette,
  Languages,
  BookOpen,
  Briefcase,
  Target,
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
    // Technology Courses
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
      image: "/images/cybersecurity-course.jpg",
    },
    {
      id: "cybersecurity",
      category: "Cybersecurity",
      title: "Cybersecurity Vulnerability Tester",
      description: "Comprehensive cybersecurity training with ethical hacking and penetration testing skills.",
      duration: "4 months",
      students: "1,800+",
      rating: 4.8,
      level: "Advanced",
      icon: <Shield className="w-8 h-8" />,
      gradient: "from-red-500/10 to-red-600/20",
      skills: ["Ethical Hacking", "Penetration Testing", "Security Assessment", "Compliance"],
      image: "/images/cybersecurity-course.jpg",
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
      image: "/images/uiux-design-course.jpg",
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
      image: "/images/iam-course.jpg",
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
      image: "/images/language-courses.jpg",
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
      image: "/images/kyc-compliance-course.jpg",
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
      image: "/images/iam-course.jpg",
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
      image: "/images/kyc-compliance-course.jpg",
    },

    // Design Courses
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
      image: "/images/uiux-design-course.jpg",
    },
    {
      id: "graphics-design",
      category: "Design",
      title: "Graphics Design & Branding",
      description: "Create stunning visual designs, logos, and brand identities using industry-standard tools.",
      duration: "3 months",
      students: "1,100+",
      rating: 4.7,
      level: "Beginner",
      icon: <Palette className="w-8 h-8" />,
      gradient: "from-rose-500/10 to-rose-600/20",
      skills: ["Adobe Creative Suite", "Logo Design", "Brand Identity", "Print Design"],
      image: "/images/uiux-design-course.jpg",
    },

    // Business & Management Courses
    {
      id: "project-management",
      category: "Management",
      title: "Project Management Professional",
      description: "Learn agile methodologies, project planning, and team leadership skills.",
      duration: "6 weeks",
      students: "2,000+",
      rating: 4.8,
      level: "Intermediate",
      icon: <Target className="w-8 h-8" />,
      gradient: "from-blue-500/10 to-blue-600/20",
      skills: ["Agile & Scrum", "Project Planning", "Risk Management", "Team Leadership"],
      image: "/images/kyc-compliance-course.jpg",
    },
    {
      id: "product-management",
      category: "Management",
      title: "Product Management Essentials",
      description: "Master product strategy, roadmap planning, and user-centered product development.",
      duration: "8 weeks",
      students: "1,600+",
      rating: 4.9,
      level: "Intermediate",
      icon: <Briefcase className="w-8 h-8" />,
      gradient: "from-violet-500/10 to-violet-600/20",
      skills: ["Product Strategy", "Roadmap Planning", "User Research", "Analytics"],
      image: "/images/iam-course.jpg",
    },
    {
      id: "business-leadership",
      category: "Leadership",
      title: "Business Leadership Program",
      description: "Intensive 3-week program covering strategic thinking, team management, and executive skills.",
      duration: "3 weeks",
      students: "800+",
      rating: 4.9,
      level: "Advanced",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-amber-500/10 to-amber-600/20",
      skills: ["Strategic Thinking", "Team Management", "Decision Making", "Communication"],
      image: "/images/kyc-compliance-course.jpg",
    },

    // Language Courses
    {
      id: "french-language",
      category: "Languages",
      title: "French Language Mastery",
      description: "From beginner to advanced French proficiency with business communication focus.",
      duration: "3-6 months",
      students: "1,800+",
      rating: 4.7,
      level: "All Levels",
      icon: <Languages className="w-8 h-8" />,
      gradient: "from-blue-500/10 to-blue-600/20",
      skills: ["Conversational French", "Business French", "DELF Preparation", "Cultural Insights"],
      image: "/images/language-courses.jpg",
    },
    {
      id: "spanish-language",
      category: "Languages",
      title: "Spanish Language Excellence",
      description: "Comprehensive Spanish program from basics to professional proficiency.",
      duration: "3-6 months",
      students: "2,200+",
      rating: 4.8,
      level: "All Levels",
      icon: <Languages className="w-8 h-8" />,
      gradient: "from-red-500/10 to-red-600/20",
      skills: ["Conversational Spanish", "Business Spanish", "DELE Preparation", "Latin Culture"],
      image: "/images/language-courses.jpg",
    },
    {
      id: "lithuanian-language",
      category: "Languages",
      title: "Lithuanian Language Program",
      description: "Learn Lithuanian for living and working in the Baltic region.",
      duration: "3-6 months",
      students: "600+",
      rating: 4.6,
      level: "All Levels",
      icon: <Languages className="w-8 h-8" />,
      gradient: "from-green-500/10 to-green-600/20",
      skills: ["Basic Lithuanian", "Business Lithuanian", "LKI Certification", "Baltic Culture"],
      image: "/images/language-courses.jpg",
    },
    {
      id: "ielts-preparation",
      category: "English Exams",
      title: "IELTS Preparation Course",
      description: "Comprehensive IELTS preparation for academic and general training modules.",
      duration: "8 weeks",
      students: "3,500+",
      rating: 4.9,
      level: "Intermediate",
      icon: <BookOpen className="w-8 h-8" />,
      gradient: "from-indigo-500/10 to-indigo-600/20",
      skills: ["Reading Skills", "Writing Tasks", "Speaking Practice", "Listening Comprehension"],
      image: "/images/language-courses.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#1a5f3f]/90 to-[#2d7a5a]/90 backdrop-blur-sm text-white px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/">
              <Image
                src="/images/gitb-logo-white.png"
                alt="GITB Logo"
                width={120}
                height={40}
                className="h-10 w-auto cursor-pointer"
              />
            </Link>
            <nav className="hidden md:flex space-x-8 text-sm font-medium">
              <Link href="/courses" className="text-[#daff7d] font-semibold">
                {t("nav.courses")}
              </Link>
              <Link href="/about" className="hover:text-[#daff7d] transition-colors">
                {t("nav.about")}
              </Link>
              <Link href="/how-it-works" className="hover:text-[#daff7d] transition-colors">
                {t("nav.howItWorks")}
              </Link>
              <Link href="/faq" className="hover:text-[#daff7d] transition-colors">
                {t("nav.faq")}
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <LanguageSwitcher />
            <Link href="/application">
              <Button className="bg-[#daff7d] text-[#1a5f3f] hover:bg-[#c5e86a] text-sm px-4 py-2 sm:px-6 font-semibold shadow-lg transition-all">
                {t("nav.applyNow")}
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Announcement Banner */}
      <section className="bg-[#daff7d] py-3 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#1a5f3f] font-semibold text-sm sm:text-base">
            🎉 <span className="font-bold">ENROLL NOW</span> and get <span className="font-bold">15% OFF</span> with
            code:
            <span className="bg-[#1a5f3f] text-[#daff7d] px-2 py-1 rounded ml-2 font-mono">SUPERTECH</span>
            <span className="ml-2">- Limited Time Offer!</span>
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-100/30 via-blue-50/40 to-green-50/30 py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-gradient-to-r from-[#daff7d]/5 via-transparent to-[#daff7d]/5"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,_#daff7d_0.1px,_transparent_0.1px)] bg-[length:60px_60px]"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Industry-Focused <span className="text-[#1a5f3f]">Tech Courses</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose from our comprehensive catalog of EU-recognized programs designed to prepare you for high-demand
            careers
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-[#daff7d]/20 text-[#1a5f3f] px-4 py-2">EU Recognized</Badge>
            <Badge className="bg-blue-100/50 text-blue-700 px-4 py-2">Industry Partnerships</Badge>
            <Badge className="bg-green-100/50 text-green-700 px-4 py-2">Job Placement Support</Badge>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["All", "Technology", "Design", "Management", "Languages", "English Exams"].map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={`px-4 py-2 sm:px-6 sm:py-2 text-sm sm:text-base transition-all ${
                  category === "All"
                    ? "bg-[#1a5f3f] text-white"
                    : "border-[#1a5f3f]/30 text-[#1a5f3f] hover:bg-[#daff7d]/20"
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
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm group"
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#daff7d]/90 text-[#1a5f3f]">{course.level}</Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`bg-gradient-to-br ${course.gradient} p-3 rounded-xl mr-3`}>
                      <div className="text-[#1a5f3f]">{course.icon}</div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1a5f3f] mb-1">{course.category}</p>
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
                      <Star className="w-3 h-3 mr-1 text-[#daff7d] fill-current" />
                      {course.rating}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs font-semibold text-gray-700 mb-2">Key Skills:</p>
                    <div className="flex flex-wrap gap-1">
                      {course.skills.slice(0, 3).map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs px-2 py-1">
                          {skill}
                        </Badge>
                      ))}
                      {course.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs px-2 py-1">
                          +{course.skills.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Link href={`/courses/${course.id}`}>
                    <Button className="w-full bg-gradient-to-r from-[#1a5f3f] to-[#2d7a5a] text-white hover:from-[#145033] hover:to-[#246647] group-hover:shadow-lg transition-all text-sm sm:text-base py-2 sm:py-3">
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Prepare for <span className="text-[#1a5f3f]">Industry Certifications</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center opacity-70 hover:opacity-100 transition-opacity">
            {["AWS", "Microsoft", "Google Cloud", "CompTIA", "CISSP", "Cisco"].map((cert, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#1a5f3f]/10 to-[#daff7d]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-[#1a5f3f]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#1a5f3f] to-[#2d7a5a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Start Learning?</h2>
          <p className="text-lg sm:text-xl text-green-100 mb-8">
            Join thousands of students who have transformed their careers with our industry-focused programs
          </p>
          <Link href="/application">
            <Button className="bg-[#daff7d] text-[#1a5f3f] hover:bg-[#c5e86a] px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-xl shadow-xl font-semibold transition-all">
              Apply Now - €50 Application Fee
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a5f3f] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="/">
                <Image
                  src="/images/gitb-logo-white.png"
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
                    Cloud Computing
                  </Link>
                </p>
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
                    Language Programs
                  </Link>
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#daff7d]" />
                  <span className="text-green-100">+370 600 12345</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#daff7d]" />
                  <span className="text-green-100">admissions@gitb.eu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-[#daff7d]" />
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
