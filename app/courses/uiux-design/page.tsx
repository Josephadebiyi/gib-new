"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Clock,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Target,
  Palette,
  Download,
  Calendar,
  Euro,
  Phone,
  Figma,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function UIUXDesignPage() {
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

      {/* Course Hero */}
      <section className="bg-gradient-to-br from-purple-100/30 via-blue-50/40 to-green-50/30 py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-gradient-to-r from-[#b9ee44]/5 via-transparent to-[#b9ee44]/5"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,_#b9ee44_0.1px,_transparent_0.1px)] bg-[length:60px_60px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#b9ee44]/20 text-[#173104] mb-4">Design</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Become a Certified <span className="text-[#173104]">UI/UX Designer</span>
              </h1>
              <h2 className="text-2xl font-semibold text-[#173104] mb-6">
                Master user experience design with Google UX Design Certificate in just 3 months
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Tailored to European design standards. Create stunning, user-centered digital experiences with
                industry-leading tools and Google's globally recognized certification program.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/application">
                  <Button className="bg-gradient-to-r from-[#173104] to-[#2d5a1a] text-white px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
                    Apply Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-2 border-[#173104] text-[#173104] hover:bg-[#b9ee44]/10 px-8 py-4 text-lg rounded-xl bg-transparent"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Call
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-[#173104] text-[#173104] hover:bg-[#b9ee44]/10 px-8 py-4 text-lg rounded-xl bg-transparent"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Curriculum
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/uiux-flyer.jpg"
                alt="UI/UX Design Course"
                width={500}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#b9ee44] p-4 rounded-xl shadow-lg">
                <Palette className="w-8 h-8 text-[#173104]" />
                <div className="text-sm font-bold text-[#173104] mt-1">Google UX</div>
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
                What You'll <span className="text-[#173104]">Create</span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#173104] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">User Experience Research & Strategy</h3>
                    <p className="text-gray-600 text-sm">Master user interviews, personas, and journey mapping</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#173104] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Visual Design & Prototyping</h3>
                    <p className="text-gray-600 text-sm">
                      Create stunning interfaces with Figma and advanced prototyping
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#173104] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Webflow Development</h3>
                    <p className="text-gray-600 text-sm">Build responsive websites without coding</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#173104] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Design Systems & Accessibility</h3>
                    <p className="text-gray-600 text-sm">Create scalable design systems and inclusive experiences</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Job <span className="text-[#173104]">Outcomes</span>
              </h2>
              <div className="space-y-4">
                <Card className="border-l-4 border-l-[#173104] shadow-sm">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg text-gray-900">UX/UI Designer</h3>
                    <p className="text-[#173104] font-semibold">Average Salary: €40-55K</p>
                    <p className="text-gray-600 text-sm">
                      Design user interfaces and experiences for web and mobile apps
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-[#173104] shadow-sm">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg text-gray-900">Product Designer</h3>
                    <p className="text-[#173104] font-semibold">Average Salary: €45-65K</p>
                    <p className="text-gray-600 text-sm">
                      Lead product design strategy and user experience optimization
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-[#173104] shadow-sm">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg text-gray-900">Webflow Developer</h3>
                    <p className="text-[#173104] font-semibold">Average Salary: €38-52K</p>
                    <p className="text-gray-600 text-sm">Build custom websites and web applications using Webflow</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Enroll */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50/50 to-blue-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Who Should <span className="text-[#173104]">Enroll</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-[#173104]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Creative Beginners</h3>
                <p className="text-gray-600">
                  No design experience required. Perfect for those starting their creative journey.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#173104]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Career Switchers</h3>
                <p className="text-gray-600">
                  Professionals from marketing, business, or other fields entering design.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-[#173104]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Freelancers & Entrepreneurs</h3>
                <p className="text-gray-600">
                  Build design skills to create your own products or offer design services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications & Course Details */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                <span className="text-[#173104]">Certifications</span> Awarded
              </h2>
              <div className="space-y-6">
                <Card className="border-2 border-[#173104]/20 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-lg flex items-center justify-center mr-4">
                        <Award className="w-6 h-6 text-[#173104]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Google UX Design Certificate</h3>
                        <p className="text-[#173104] font-semibold">Industry Gold Standard</p>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      Globally recognized certification from Google, accepted by top employers worldwide.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-[#173104]/20 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-lg flex items-center justify-center mr-4">
                        <Figma className="w-6 h-6 text-[#173104]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Webflow Expert Certification</h3>
                        <p className="text-[#173104] font-semibold">No-Code Development</p>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      Advanced Webflow certification for building professional websites without coding.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Course <span className="text-[#173104]">Details</span>
              </h2>
              <div className="space-y-6">
                <Card className="border-l-4 border-l-[#173104] shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Clock className="w-6 h-6 text-[#173104] mr-3" />
                      <h3 className="font-bold text-lg">Duration</h3>
                    </div>
                    <p className="text-gray-700">3 months intensive program</p>
                    <p className="text-sm text-gray-600">Part-time evening classes, 3 days per week</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-[#173104] shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Euro className="w-6 h-6 text-[#173104] mr-3" />
                      <h3 className="font-bold text-lg">Investment</h3>
                    </div>
                    <p className="text-2xl font-bold text-[#173104]">€1,350</p>
                    <p className="text-sm text-gray-600">
                      €1,250 course fee + €50 registration + €50 Google UX certification fee
                    </p>
                    <p className="text-sm text-[#173104] font-semibold mt-2">Payment plans available</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-[#173104] shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Calendar className="w-6 h-6 text-[#173104] mr-3" />
                      <h3 className="font-bold text-lg">Next Cohort</h3>
                    </div>
                    <p className="text-gray-700">March 8, 2024</p>
                    <p className="text-sm text-gray-600">Limited to 18 students per cohort</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EU Market Focus */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#173104] to-[#2d5a1a] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#b9ee44]/10 via-transparent to-[#b9ee44]/10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#b9ee44_0.5px,_transparent_0.5px)] bg-[length:60px_60px] opacity-20"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Europe's Design Revolution</h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            European companies are investing heavily in user experience as digital transformation accelerates. Design
            roles are expanding beyond traditional agencies into fintech, healthcare, and enterprise software.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="font-bold text-white mb-2">Fintech & Banking</h3>
              <p className="text-green-100 text-sm">Digital banking and payment apps need exceptional UX</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="font-bold text-white mb-2">E-commerce & Retail</h3>
              <p className="text-green-100 text-sm">Online shopping experiences drive business success</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="font-bold text-white mb-2">SaaS & Enterprise</h3>
              <p className="text-green-100 text-sm">B2B software companies prioritize user experience</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/application">
              <Button className="bg-[#b9ee44] text-[#173104] hover:bg-[#a8d93a] px-8 py-4 text-lg rounded-xl shadow-xl font-semibold">
                Start Creating
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#173104] px-8 py-4 text-lg rounded-xl bg-transparent"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Call
            </Button>
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
                <p>UI/UX Design</p>
                <p>Cybersecurity</p>
                <p>Compliance</p>
                <p>Languages</p>
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
