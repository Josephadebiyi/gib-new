"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, ArrowRight, CheckCircle, Users, BookOpen, Award, Briefcase, Clock, Target, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HowItWorksPage() {
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
              <Link href="/about" className="hover:text-[#b9ee44] transition-colors">
                About Us
              </Link>
              <Link href="/how-it-works" className="text-[#b9ee44] font-semibold">
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
          <Badge className="bg-[#b9ee44]/20 text-[#173104] mb-4">How It Works</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Journey to <span className="text-[#173104]">Tech Success</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From application to career placement, we guide you through every step of your transformation into a tech
            professional.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#173104] to-[#2d5a1a] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Apply & Assess</h3>
                <p className="text-gray-600 mb-6">
                  Submit your application and complete our skills assessment to determine the best program for your
                  goals.
                </p>
                <Card className="border-2 border-[#173104]/20 shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 text-sm text-[#173104]">
                      <Clock className="w-4 h-4" />
                      <span>15 minutes</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              {/* Connector Line */}
              <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[#173104] to-transparent"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#173104] to-[#2d5a1a] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Learn & Practice</h3>
                <p className="text-gray-600 mb-6">
                  Engage in hands-on learning with industry experts, real projects, and cutting-edge tools.
                </p>
                <Card className="border-2 border-[#173104]/20 shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 text-sm text-[#173104]">
                      <BookOpen className="w-4 h-4" />
                      <span>2-4 months</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              {/* Connector Line */}
              <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[#173104] to-transparent"></div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#173104] to-[#2d5a1a] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Certify & Validate</h3>
                <p className="text-gray-600 mb-6">
                  Earn industry-recognized certifications and build a portfolio that showcases your new skills.
                </p>
                <Card className="border-2 border-[#173104]/20 shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 text-sm text-[#173104]">
                      <Award className="w-4 h-4" />
                      <span>Certification</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              {/* Connector Line */}
              <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[#173104] to-transparent"></div>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#173104] to-[#2d5a1a] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Launch Career</h3>
              <p className="text-gray-600 mb-6">
                Get connected with our partner companies and launch your new career with ongoing support.
              </p>
              <Card className="border-2 border-[#173104]/20 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2 text-sm text-[#173104]">
                    <Briefcase className="w-4 h-4" />
                    <span>Job placement</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Experience */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50/50 to-blue-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The GITB <span className="text-[#173104]">Learning Experience</span>
            </h2>
            <p className="text-lg text-gray-600">What makes our approach different</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-[#173104]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Small Class Sizes</h3>
                <p className="text-gray-600">
                  Maximum 25 students per cohort ensures personalized attention and meaningful peer connections.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-[#173104]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Project-Based Learning</h3>
                <p className="text-gray-600">
                  Work on real-world projects that mirror actual industry challenges and build your portfolio.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-[#173104]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Mentorship</h3>
                <p className="text-gray-600">
                  Get guidance from working professionals at leading European tech companies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support System */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Comprehensive <span className="text-[#173104]">Support System</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We don't just teach you skills – we support your entire career transformation journey.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#b9ee44] rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#173104]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Academic Support</h3>
                    <p className="text-gray-600">One-on-one tutoring, study groups, and flexible scheduling options.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#b9ee44] rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#173104]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Career Services</h3>
                    <p className="text-gray-600">
                      Resume building, interview prep, and direct connections to employers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#b9ee44] rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#173104]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Alumni Network</h3>
                    <p className="text-gray-600">Lifetime access to our growing network of successful graduates.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#b9ee44] rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#173104]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Continued Learning</h3>
                    <p className="text-gray-600">Access to updated course materials and new program offerings.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/tech-business-courses.jpg"
                alt="GITB Support System"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#173104] to-[#2d5a1a] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Proven Results</h2>
            <p className="text-xl text-green-100">Our students' success speaks for itself</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="text-4xl font-bold text-[#b9ee44] mb-2">92%</div>
              <div className="text-green-100">Job Placement Rate</div>
              <div className="text-sm text-green-200 mt-2">Within 6 months</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="text-4xl font-bold text-[#b9ee44] mb-2">€45K</div>
              <div className="text-green-100">Average Starting Salary</div>
              <div className="text-sm text-green-200 mt-2">Above market average</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="text-4xl font-bold text-[#b9ee44] mb-2">4.8/5</div>
              <div className="text-green-100">Student Satisfaction</div>
              <div className="text-sm text-green-200 mt-2">Based on 500+ reviews</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="text-4xl font-bold text-[#b9ee44] mb-2">500+</div>
              <div className="text-green-100">Partner Companies</div>
              <div className="text-sm text-green-200 mt-2">Across 15 EU countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of professionals who have transformed their careers with GITB.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/application">
              <Button className="bg-gradient-to-r from-[#173104] to-[#2d5a1a] text-white px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/courses">
              <Button
                variant="outline"
                className="border-2 border-[#173104] text-[#173104] hover:bg-[#b9ee44]/10 px-8 py-4 text-lg rounded-xl bg-transparent"
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
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
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
