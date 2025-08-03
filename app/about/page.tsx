"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Globe, Users, Target, Eye, Heart, MapPin, Building2, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "@/hooks/useTranslation"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"

export default function AboutPage() {
  const { t } = useTranslation()

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
              <Link href="/courses" className="hover:text-[#b9ee44] transition-colors">
                {t("nav.courses")}
              </Link>
              <Link href="/about" className="text-[#b9ee44] font-semibold">
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
      <section className="bg-gradient-to-r from-[#b9ee44] to-[#a8d93f] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#173104] mb-6">
            About <span className="text-white">GITB</span>
          </h1>
          <p className="text-xl text-[#173104]/80 max-w-3xl mx-auto leading-relaxed">
            The Global Institute of Tech and Business is Europe's leading provider of industry-focused technology
            education, bridging the gap between academic learning and real-world professional demands.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2018 in Vilnius, Lithuania, GITB emerged from a simple yet powerful vision: to democratize
                  access to high-quality technology education across Europe. Our founders, seasoned tech professionals
                  and educators, recognized the growing skills gap in the European tech industry.
                </p>
                <p>
                  What started as a small coding bootcamp has evolved into a comprehensive institute offering
                  industry-recognized certifications and hands-on training programs. Today, we serve students from over
                  15 EU countries and maintain partnerships with leading technology companies.
                </p>
                <p>
                  Our commitment to excellence has earned us recognition from the European Commission and accreditation
                  from multiple EU educational bodies, making us a trusted name in tech education.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/tech-business-courses.jpg"
                alt="GITB Campus"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#173104] text-white p-4 rounded-lg">
                <div className="text-2xl font-bold">2018</div>
                <div className="text-sm">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-[#173104] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide world-class, industry-aligned technology education that empowers individuals to build
                  successful careers in the digital economy while contributing to Europe's technological advancement.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-[#b9ee44] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-[#173104]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be Europe's most trusted and innovative technology education institute, recognized for producing
                  job-ready professionals who drive digital transformation across industries.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-[#173104] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                <p className="text-gray-600">
                  Excellence in education, integrity in partnerships, innovation in methodology, and inclusivity in
                  opportunity. We believe technology education should be accessible to all Europeans.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* EU Recognition & Accreditations */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#173104] to-[#2d5a1a] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#b9ee44]">EU Recognition</span> & Accreditations
            </h2>
            <p className="text-green-100 max-w-3xl mx-auto">
              Our programs are officially recognized and accredited across the European Union, ensuring your
              qualifications are valued throughout Europe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-[#b9ee44]/30 shadow-lg bg-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-[#b9ee44] p-3 rounded-full mr-4">
                    <Award className="w-6 h-6 text-[#173104]" />
                  </div>
                  <h3 className="text-xl font-bold">EU Educational Framework</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#b9ee44] mr-3" />
                    <span>European Qualifications Framework (EQF) Level 5-7</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#b9ee44] mr-3" />
                    <span>ECTS Credit Transfer System</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#b9ee44] mr-3" />
                    <span>Bologna Process Compliance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#b9ee44]/30 shadow-lg bg-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-[#b9ee44] p-3 rounded-full mr-4">
                    <Globe className="w-6 h-6 text-[#173104]" />
                  </div>
                  <h3 className="text-xl font-bold">International Recognition</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#b9ee44] mr-3" />
                    <span>ISO 21001:2018 Educational Management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#b9ee44] mr-3" />
                    <span>European Commission Digital Skills Recognition</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#b9ee44] mr-3" />
                    <span>UNESCO Global Education Coalition Member</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* EU Countries Recognition */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Recognized Across the European Union</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              {[
                { flag: "🇱🇹", country: "Lithuania", status: "Headquarters" },
                { flag: "🇩🇪", country: "Germany", status: "Full Recognition" },
                { flag: "🇫🇷", country: "France", status: "Full Recognition" },
                { flag: "🇳🇱", country: "Netherlands", status: "Full Recognition" },
                { flag: "🇸🇪", country: "Sweden", status: "Full Recognition" },
                { flag: "🇩🇰", country: "Denmark", status: "Full Recognition" },
                { flag: "🇫🇮", country: "Finland", status: "Full Recognition" },
                { flag: "🇪🇸", country: "Spain", status: "Full Recognition" },
                { flag: "🇮🇹", country: "Italy", status: "Full Recognition" },
                { flag: "🇵🇱", country: "Poland", status: "Full Recognition" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-2">{item.flag}</div>
                  <div className="font-semibold text-sm">{item.country}</div>
                  <div className="text-xs text-[#b9ee44]">{item.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Partnerships */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industry <span className="text-[#173104]">Partnerships</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We collaborate with leading technology companies and organizations to ensure our curriculum remains
              current and our graduates are job-ready.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Technology Partners</h3>
                <div className="space-y-3">
                  {["Amazon Web Services", "Microsoft Azure", "Google Cloud", "IBM", "Oracle"].map((partner) => (
                    <div key={partner} className="flex items-center">
                      <Building2 className="w-4 h-4 text-[#173104] mr-3" />
                      <span className="text-gray-700">{partner}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Certification Bodies</h3>
                <div className="space-y-3">
                  {["CompTIA", "Cisco Systems", "(ISC)² - CISSP", "PMI", "ISACA"].map((cert) => (
                    <div key={cert} className="flex items-center">
                      <Award className="w-4 h-4 text-[#173104] mr-3" />
                      <span className="text-gray-700">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Hiring Partners</h3>
                <div className="space-y-3">
                  {["Accenture", "Deloitte Digital", "Capgemini", "TietoEVRY", "Cognizant"].map((company) => (
                    <div key={company} className="flex items-center">
                      <Users className="w-4 h-4 text-[#173104] mr-3" />
                      <span className="text-gray-700">{company}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats & Achievements */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#b9ee44] to-[#a8d93f]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#173104] mb-4">Our Impact</h2>
            <p className="text-[#173104]/80 max-w-3xl mx-auto">Six years of excellence in European tech education</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-4xl font-bold text-[#173104] mb-2">5,000+</div>
              <div className="text-[#173104]/80">Graduates</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-4xl font-bold text-[#173104] mb-2">15</div>
              <div className="text-[#173104]/80">EU Countries</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-4xl font-bold text-[#173104] mb-2">92%</div>
              <div className="text-[#173104]/80">Job Placement Rate</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-4xl font-bold text-[#173104] mb-2">50+</div>
              <div className="text-[#173104]/80">Industry Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#173104]/5 to-[#b9ee44]/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated with GITB</h2>
          <p className="text-lg text-gray-600 mb-8">
            Get the latest news about courses, job opportunities, and industry insights
          </p>

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
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/images/gitb-logo.png"
                alt="GITB Logo"
                width={120}
                height={40}
                className="h-10 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-green-100 mb-4 leading-relaxed">
                Global Institute of Tech and Business - Empowering careers through technology education.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-green-100">
                <p>
                  <Link href="/" className="hover:text-white">
                    {t("nav.home")}
                  </Link>
                </p>
                <p>
                  <Link href="/courses" className="hover:text-white">
                    {t("nav.courses")}
                  </Link>
                </p>
                <p>
                  <Link href="/about" className="hover:text-white">
                    {t("nav.about")}
                  </Link>
                </p>
                <p>
                  <Link href="/how-it-works" className="hover:text-white">
                    {t("nav.howItWorks")}
                  </Link>
                </p>
                <p>
                  <Link href="/faq" className="hover:text-white">
                    {t("nav.faq")}
                  </Link>
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-green-100">
                <p>
                  <Link href="#" className="hover:text-white">
                    Contact Us
                  </Link>
                </p>
                <p>
                  <Link href="#" className="hover:text-white">
                    Student Portal
                  </Link>
                </p>
                <p>
                  <Link href="#" className="hover:text-white">
                    Technical Support
                  </Link>
                </p>
                <p>
                  <Link href="#" className="hover:text-white">
                    Career Services
                  </Link>
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-green-100">Vilnius, Lithuania</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-100">admissions@gitb.lt</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-green-600 mt-8 pt-8 text-center">
            <p className="text-sm text-green-100">© 2024 Global Institute of Tech and Business. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
