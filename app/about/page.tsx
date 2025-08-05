"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Globe,
  ArrowRight,
  Users,
  Award,
  Building2,
  Target,
  CheckCircle,
  Star,
  BookOpen,
  Briefcase,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
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
              <Link href="/courses" className="hover:text-[#b9ee44] transition-colors">
                Courses
              </Link>
              <Link href="/about" className="text-[#b9ee44] font-semibold">
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

      {/* About Hero */}
      <section className="bg-gradient-to-br from-purple-100/30 via-blue-50/40 to-green-50/30 py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-gradient-to-r from-[#b9ee44]/5 via-transparent to-[#b9ee44]/5"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,_#b9ee44_0.1px,_transparent_0.1px)] bg-[length:60px_60px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-[#b9ee44]/20 text-[#173104] mb-4">About GITB</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Empowering Careers Through <span className="text-[#173104]">Technology Education</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Global Institute of Tech and Business is Lithuania's premier destination for career-focused technology
              education, preparing students for success in Europe's competitive job market.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/tech-business-courses.jpg"
                alt="GITB Campus"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#173104]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To bridge the skills gap in Europe's tech industry by providing world-class education that directly
                    translates to career success.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-[#173104]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    To be Europe's leading institute for practical technology education, recognized for excellence in
                    student outcomes and industry partnerships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our <span className="text-[#173104]">Story</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Founded in 2020 in Vilnius, Lithuania, GITB emerged from a simple observation: Europe's tech industry was
              growing rapidly, but there was a significant gap between what universities taught and what employers
              needed.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-[#173104]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">2020 - Foundation</h3>
                <p className="text-gray-600">
                  GITB was established with a focus on practical, industry-aligned education in emerging technologies.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-[#173104]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">2021-2022 - Growth</h3>
                <p className="text-gray-600">
                  Expanded our program offerings and established partnerships with leading European tech companies.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-[#173104]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">2023-2024 - Recognition</h3>
                <p className="text-gray-600">
                  Achieved 92% job placement rate and recognition as Lithuania's leading tech education provider.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50/50 to-blue-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our <span className="text-[#173104]">Values</span>
            </h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#173104] to-[#2d5a1a] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">We strive for the highest standards in education and student outcomes.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#173104] to-[#2d5a1a] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600">We build lasting relationships between students, faculty, and industry.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#173104] to-[#2d5a1a] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">We continuously evolve our programs to meet industry demands.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#173104] to-[#2d5a1a] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Impact</h3>
              <p className="text-gray-600">We prepare students for success in the global technology marketplace.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Leadership <span className="text-[#173104]">Team</span>
            </h2>
            <p className="text-lg text-gray-600">Meet the experts driving GITB's mission forward</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-12 h-12 text-[#173104]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Elena Vasquez</h3>
                <p className="text-[#173104] font-semibold mb-3">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  Former Microsoft executive with 15 years in tech education and workforce development across Europe.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-12 h-12 text-[#173104]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Marcus Thompson</h3>
                <p className="text-[#173104] font-semibold mb-3">Head of Curriculum</p>
                <p className="text-gray-600 text-sm">
                  Former Google engineer and curriculum designer, specializing in practical tech education
                  methodologies.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-12 h-12 text-[#173104]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Chen</h3>
                <p className="text-[#173104] font-semibold mb-3">Director of Industry Relations</p>
                <p className="text-gray-600 text-sm">
                  20+ years building partnerships between educational institutions and leading European tech companies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#173104] to-[#2d5a1a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of professionals who have launched successful careers with GITB's industry-focused programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/application">
              <Button className="bg-[#b9ee44] text-[#173104] hover:bg-[#a8d93a] px-8 py-4 text-lg rounded-xl shadow-xl font-semibold">
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/courses">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#173104] px-8 py-4 text-lg rounded-xl bg-transparent"
              >
                Explore Courses
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
                  <Link href="/courses" className="hover:text-white transition-colors">
                    Courses
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
                <p>Cybersecurity</p>
                <p>UI/UX Design</p>
                <p>Languages</p>
                <p>Compliance</p>
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
