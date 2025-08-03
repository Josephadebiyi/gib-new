"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Users, Award, Globe, BookOpen, Briefcase, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "@/hooks/useTranslation"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"

export default function HowItWorksPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#1a5f3f]/90 to-[#2d7a5a]/90 backdrop-blur-sm text-white px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/">
              <Image
                src="/images/gitb-logo.png"
                alt="GITB Logo"
                width={120}
                height={40}
                className="h-10 w-auto cursor-pointer"
              />
            </Link>
            <nav className="hidden md:flex space-x-8 text-sm font-medium">
              <Link href="/" className="hover:text-[#daff7d] transition-colors">
                {t("nav.home")}
              </Link>
              <Link href="/courses" className="hover:text-[#daff7d] transition-colors">
                {t("nav.courses")}
              </Link>
              <Link href="/about" className="hover:text-[#daff7d] transition-colors">
                {t("nav.about")}
              </Link>
              <Link href="/how-it-works" className="text-[#daff7d] font-semibold">
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
              <Button className="bg-[#daff7d] text-[#1a5f3f] hover:bg-[#c5e86a] text-sm px-4 py-2 sm:px-6 font-semibold shadow-lg">
                {t("nav.applyNow")}
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
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            How <span className="text-[#1a5f3f]">GITB Works</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Your complete guide to joining Europe's leading tech education institute and transforming your career
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-[#daff7d]/20 text-[#1a5f3f] px-4 py-2">6-Step Process</Badge>
            <Badge className="bg-blue-100/50 text-blue-700 px-4 py-2">48-Hour Response</Badge>
            <Badge className="bg-green-100/50 text-green-700 px-4 py-2">Job Placement Support</Badge>
          </div>
        </div>
      </section>

      {/* Detailed Process */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-blue-400/20 to-blue-600/20 w-16 h-16 rounded-2xl flex items-center justify-center mr-4">
                    <Globe className="w-8 h-8 text-[#1a5f3f]" />
                  </div>
                  <div>
                    <Badge className="bg-[#daff7d]/20 text-[#1a5f3f] mb-2">Step 1</Badge>
                    <h3 className="text-2xl font-bold text-gray-900">Explore Our Programs</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Browse our comprehensive catalog of EU-recognized programs. Each course is designed with industry
                  input to ensure you learn the most in-demand skills. From cloud computing to cybersecurity, UI/UX
                  design to business leadership - find the perfect program for your career goals.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#1a5f3f] mr-3" />
                    <span>50+ specialized programs across tech and business</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#1a5f3f] mr-3" />
                    <span>Industry-aligned curriculum with real-world projects</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#1a5f3f] mr-3" />
                    <span>Flexible duration from 3 weeks to 16 weeks</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <Image
                  src="/images/kyc-compliance-course.jpg"
                  alt="Explore Programs"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <Image
                  src="/images/uiux-design-course.jpg"
                  alt="Apply Online"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-xl"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-green-400/20 to-green-600/20 w-16 h-16 rounded-2xl flex items-center justify-center mr-4">
                    <Users className="w-8 h-8 text-[#1a5f3f]" />
                  </div>
                  <div>
                    <Badge className="bg-[#daff7d]/20 text-[#1a5f3f] mb-2">Step 2</Badge>
                    <h3 className="text-2xl font-bold text-gray-900">Submit Your Application</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Complete our streamlined online application form. Upload your documents, share your career goals, and
                  pay the €50 application fee. This fee is fully deducted from your tuition upon enrollment, making it
                  risk-free to apply.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#1a5f3f] mr-3" />
                    <span>Simple online application form</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#1a5f3f] mr-3" />
                    <span>€50 application fee (deducted from tuition)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#1a5f3f] mr-3" />
                    <span>Secure document upload system</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-purple-400/20 to-purple-600/20 w-16 h-16 rounded-2xl flex items-center justify-center mr-4">
                    <CheckCircle className="w-8 h-8 text-[#1a5f3f]" />
                  </div>
                  <div>
                    <Badge className="bg-[#daff7d]/20 text-[#1a5f3f] mb-2">Step 3</Badge>
                    <h3 className="text-2xl font-bold text-gray-900">Get Accepted</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our admissions team reviews your application within 48 hours. We evaluate your background, motivation,
                  and career goals to ensure the best fit. Upon acceptance, you'll receive your enrollment package with
                  all the details you need to start your journey.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#1a5f3f] mr-3" />
                    <span>48-hour application review process</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#1a5f3f] mr-3" />
                    <span>Personal admissions counselor assigned</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#1a5f3f] mr-3" />
                    <span>Complete enrollment package provided</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <Image
                  src="/images/language-courses.jpg"
                  alt="Get Accepted"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <Image
                  src="/images/iam-course.jpg"
                  alt="Start Learning"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-xl"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-orange-400/20 to-orange-600/20 w-16 h-16 rounded-2xl flex items-center justify-center mr-4">
                    <BookOpen className="w-8 h-8 text-[#1a5f3f]" />
                  </div>
                  <div>
                    <Badge className="bg-[#daff7d]/20 text-[#1a5f3f] mb-2">Step 4</Badge>
                    <h3 className="text-2xl font-bold text-gray-900">Start Learning</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Join live online classes with expert instructors and fellow students from across Europe. Work on
                  hands-on projects, participate in group discussions, and build a portfolio that showcases your new
                  skills to potential employers.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#1a5f3f] mr-3" />
                    <span>Live interactive classes with industry experts</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#1a5f3f] mr-3" />
                    <span>Hands-on projects and real-world scenarios</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#1a5f3f] mr-3" />
                    <span>24/7 access to learning materials and resources</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 5 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-pink-400/20 to-pink-600/20 w-16 h-16 rounded-2xl flex items-center justify-center mr-4">
                    <Award className="w-8 h-8 text-[#1a5f3f]" />
                  </div>
                  <div>
                    <Badge className="bg-[#daff7d]/20 text-[#1a5f3f] mb-2">Step 5</Badge>
                    <h3 className="text-2xl font-bold text-gray-900">Earn Certifications</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Prepare for and earn industry-recognized certifications from leading organizations like AWS,
                  Microsoft, CompTIA, and more. Our certification preparation includes practice exams, study guides, and
                  one-on-one coaching to ensure your success.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#1a5f3f] mr-3" />
                    <span>Industry-recognized certifications included</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#1a5f3f] mr-3" />
                    <span>Comprehensive exam preparation and practice tests</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#1a5f3f] mr-3" />
                    <span>GITB diploma recognized across the EU</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <Image
                  src="/images/cybersecurity-course.jpg"
                  alt="Earn Certifications"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>

            {/* Step 6 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 p-8 rounded-2xl">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-[#1a5f3f] mb-2">92%</div>
                      <div className="text-sm text-gray-600">Job Placement Rate</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-[#1a5f3f] mb-2">€45K</div>
                      <div className="text-sm text-gray-600">Average Starting Salary</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-[#1a5f3f] mb-2">15</div>
                      <div className="text-sm text-gray-600">EU Countries</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-[#1a5f3f] mb-2">500+</div>
                      <div className="text-sm text-gray-600">Partner Companies</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-indigo-400/20 to-indigo-600/20 w-16 h-16 rounded-2xl flex items-center justify-center mr-4">
                    <Briefcase className="w-8 h-8 text-[#1a5f3f]" />
                  </div>
                  <div>
                    <Badge className="bg-[#daff7d]/20 text-[#1a5f3f] mb-2">Step 6</Badge>
                    <h3 className="text-2xl font-bold text-gray-900">Land Your Dream Job</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Access our exclusive job placement network with over 500 partner companies across Europe. Get
                  personalized career coaching, interview preparation, and direct introductions to hiring managers. Our
                  92% job placement rate speaks for itself.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#1a5f3f] mr-3" />
                    <span>Exclusive access to 500+ partner companies</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#1a5f3f] mr-3" />
                    <span>Personal career coaching and interview prep</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#1a5f3f] mr-3" />
                    <span>Lifetime alumni network and career support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50/50 to-blue-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Your <span className="text-[#1a5f3f]">Journey Timeline</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              From application to career success - here's what to expect
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#1a5f3f] to-[#daff7d] hidden lg:block"></div>

            <div className="space-y-12">
              {[
                { time: "Day 1", title: "Application Submitted", desc: "Complete online form and pay €50 fee" },
                { time: "Day 2-3", title: "Application Review", desc: "Our team evaluates your application" },
                { time: "Day 3", title: "Acceptance Notification", desc: "Receive enrollment package and next steps" },
                { time: "Week 1", title: "Program Begins", desc: "Start your learning journey with orientation" },
                { time: "Throughout", title: "Active Learning", desc: "Live classes, projects, and skill building" },
                { time: "Final Week", title: "Certification Prep", desc: "Intensive exam preparation and practice" },
                { time: "Post-Graduation", title: "Job Placement", desc: "Career coaching and job placement support" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right lg:pr-8" : "lg:text-left lg:pl-8"}`}>
                    <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <Badge className="bg-[#daff7d]/20 text-[#1a5f3f] mb-3">{item.time}</Badge>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden lg:flex w-4 h-4 bg-[#1a5f3f] rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Need Help Getting Started?</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Our admissions team is here to guide you through every step of the process
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-[#1a5f3f]/20 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-[#1a5f3f]/10 to-[#daff7d]/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-[#1a5f3f]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Speak directly with our admissions counselors</p>
                <p className="text-[#1a5f3f] font-semibold">+370 600 12345</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#1a5f3f]/20 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-[#1a5f3f]/10 to-[#daff7d]/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-[#1a5f3f]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">Get detailed information about our programs</p>
                <p className="text-[#1a5f3f] font-semibold">admissions@gitb.eu</p>
              </CardContent>
            </Card>
          </div>

          <Link href="/application">
            <Button className="bg-gradient-to-r from-[#1a5f3f] to-[#2d7a5a] text-white px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
              Start Your Application Now
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
              <Image
                src="/images/gitb-logo.png"
                alt="GITB Logo"
                width={120}
                height={40}
                className="h-10 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-green-100 mb-6 leading-relaxed">{t("footer.description")}</p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">{t("footer.quickLinks")}</h4>
              <div className="space-y-3 text-green-100">
                <p>
                  <Link href="/" className="hover:text-white transition-colors">
                    {t("nav.home")}
                  </Link>
                </p>
                <p>
                  <Link href="/courses" className="hover:text-white transition-colors">
                    {t("nav.courses")}
                  </Link>
                </p>
                <p>
                  <Link href="/about" className="hover:text-white transition-colors">
                    {t("nav.about")}
                  </Link>
                </p>
                <p>
                  <Link href="/how-it-works" className="hover:text-white transition-colors">
                    {t("nav.howItWorks")}
                  </Link>
                </p>
                <p>
                  <Link href="/faq" className="hover:text-white transition-colors">
                    {t("nav.faq")}
                  </Link>
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">{t("footer.programs")}</h4>
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
              <h4 className="font-bold text-lg mb-6">{t("footer.contact")}</h4>
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
