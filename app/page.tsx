"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  Globe,
  ArrowRight,
  Clock,
  Award,
  Building2,
  TrendingUp,
  CheckCircle,
  Star,
  Target,
  Briefcase,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "@/hooks/useTranslation"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50/30 via-lime-50/20 to-yellow-50/10 overflow-hidden">
      {/* Header */}
      <header className="bg-[#173104] text-white px-4 py-4 relative z-50">
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
              <Link href="/about" className="hover:text-[#b9ee44] transition-colors">
                {t("nav.about")}
              </Link>
              <Link href="/courses" className="hover:text-[#b9ee44] transition-colors">
                {t("nav.courses")}
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
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="w-4 h-4" />
              <span>+370 600 12345</span>
            </div>
            <Link href="/application">
              <Button className="bg-gradient-to-r from-[#b9ee44] to-[#a8d93f] text-[#173104] hover:from-[#a8d93f] hover:to-[#97c73a] text-sm px-6 py-2 font-bold rounded-lg shadow-lg transition-all">
                {t("nav.registerNow")}
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Promotional Banner */}
      <section className="bg-gradient-to-r from-[#b9ee44] to-[#a8d93f] py-3 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center space-x-4 text-[#173104] font-bold text-sm">
            <span>🎯 {t("banner.action")}</span>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>00:15:34</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {t("hero.gatewayToExcellence")}{" "}
                  <span className="bg-gradient-to-r from-[#173104] to-[#2d5a1a] bg-clip-text text-transparent">
                    {t("hero.techBusiness")}
                  </span>{" "}
                  {t("hero.andLanguage")}
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">{t("hero.jobReadySkills")}</p>

                <div className="flex flex-wrap gap-4 text-sm">
                  <Badge className="bg-[#173104]/10 text-[#173104] border-[#173104]/20 px-4 py-2">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {t("hero.euRecognized")}
                  </Badge>
                  <Badge className="bg-[#173104]/10 text-[#173104] border-[#173104]/20 px-4 py-2">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    {t("hero.jobPlacement")}
                  </Badge>
                  <Badge className="bg-[#173104]/10 text-[#173104] border-[#173104]/20 px-4 py-2">
                    <Globe className="w-4 h-4 mr-2" />
                    {t("hero.europeAccess")}
                  </Badge>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/application">
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-[#173104] to-[#2d5a1a] hover:from-[#145033] hover:to-[#246647] text-white px-8 py-4 text-lg rounded-xl shadow-xl transition-all">
                    {t("hero.startJourney")}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/courses">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-[#173104]/30 text-[#173104] hover:bg-[#b9ee44]/20 px-8 py-4 text-lg rounded-xl bg-white/80 backdrop-blur-sm transition-all"
                  >
                    {t("hero.exploreCourses")}
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/tech-business-courses.jpg"
                alt="GITB Tech & Business Courses"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {t("courses.industryReady")} <span className="text-[#173104]">{t("courses.programs")}</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">{t("courses.designedForSuccess")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm group overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/cybersecurity-flyer.jpg"
                  alt="Cybersecurity Course"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cybersecurity Professional</h3>
                <p className="text-gray-600 mb-4">4 months intensive program with CompTIA Security+ certification</p>
                <div className="flex items-center justify-between">
                  <Badge className="bg-[#b9ee44]/20 text-[#173104]">4 Months</Badge>
                  <Link href="/courses/cybersecurity">
                    <Button className="bg-gradient-to-r from-[#173104] to-[#2d5a1a] text-white hover:shadow-lg transition-all text-sm">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm group overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/uiux-flyer.jpg"
                  alt="UI/UX Design Course"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">UI/UX & Webflow Design</h3>
                <p className="text-gray-600 mb-4">3 months program with Google UX Design Certificate</p>
                <div className="flex items-center justify-between">
                  <Badge className="bg-[#b9ee44]/20 text-[#173104]">3 Months</Badge>
                  <Link href="/courses/uiux">
                    <Button className="bg-gradient-to-r from-[#173104] to-[#2d5a1a] text-white hover:shadow-lg transition-all text-sm">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm group overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/languages-flyer.jpg"
                  alt="Language Courses"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">European Languages</h3>
                <p className="text-gray-600 mb-4">French, Spanish, Lithuanian - Open doors across Europe</p>
                <div className="flex items-center justify-between">
                  <Badge className="bg-[#b9ee44]/20 text-[#173104]">3-6 Months</Badge>
                  <Link href="/courses/languages">
                    <Button className="bg-gradient-to-r from-[#173104] to-[#2d5a1a] text-white hover:shadow-lg transition-all text-sm">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/courses">
              <Button className="bg-gradient-to-r from-[#173104] to-[#2d5a1a] text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                View All Courses
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Job Market & Success Stats */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#173104] to-[#2d5a1a] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">{t("jobMarket.europeOpportunity")}</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">{t("jobMarket.demandGrowing")}</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center mb-16">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-4xl font-bold text-[#b9ee44] mb-2">92%</div>
              <div className="text-green-100">{t("stats.jobPlacement")}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-4xl font-bold text-[#b9ee44] mb-2">€45K</div>
              <div className="text-green-100">{t("stats.avgSalary")}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-4xl font-bold text-[#b9ee44] mb-2">15</div>
              <div className="text-green-100">{t("stats.euCountries")}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-4xl font-bold text-[#b9ee44] mb-2">500+</div>
              <div className="text-green-100">{t("stats.partnerCompanies")}</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">{t("jobMarket.whyChooseGitb")}</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-[#b9ee44] mr-3" />
                  <span>{t("jobMarket.industryAligned")}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-[#b9ee44] mr-3" />
                  <span>{t("jobMarket.euRecognition")}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-[#b9ee44] mr-3" />
                  <span>{t("jobMarket.careerSupport")}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-[#b9ee44] mr-3" />
                  <span>{t("jobMarket.networkAccess")}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image src="/images/iam-flyer.jpg" alt="IAM Course" width={200} height={200} className="rounded-lg" />
              <Image src="/images/kyc-flyer.jpg" alt="KYC Course" width={200} height={200} className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Where Our Students Work */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {t("students.whereTheyWork")} <span className="text-[#173104]">{t("students.graduates")}</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">{t("students.leadingCompanies")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm p-6 text-center">
              <Building2 className="w-12 h-12 text-[#173104] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t("students.techGiants")}</h3>
              <p className="text-gray-600 text-sm">Google, Microsoft, Amazon, Meta, Apple</p>
            </Card>
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm p-6 text-center">
              <Briefcase className="w-12 h-12 text-[#173104] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t("students.consulting")}</h3>
              <p className="text-gray-600 text-sm">Deloitte, Accenture, McKinsey, PwC, EY</p>
            </Card>
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm p-6 text-center">
              <Target className="w-12 h-12 text-[#173104] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t("students.startups")}</h3>
              <p className="text-gray-600 text-sm">Fintech, HealthTech, EdTech, GreenTech</p>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-[#b9ee44]/10 to-[#a8d93f]/10 p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t("students.successStories")}</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-[#b9ee44] mt-1" />
                    <div>
                      <p className="font-semibold">Sarah M. - Cybersecurity Analyst</p>
                      <p className="text-sm text-gray-600">"Landed a €55K role at a major bank in Frankfurt"</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-[#b9ee44] mt-1" />
                    <div>
                      <p className="font-semibold">Marcus K. - UX Designer</p>
                      <p className="text-sm text-gray-600">"Now working remotely for a Silicon Valley startup"</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-[#b9ee44] mt-1" />
                    <div>
                      <p className="font-semibold">Elena R. - Compliance Officer</p>
                      <p className="text-sm text-gray-600">"Promoted to senior role within 6 months"</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/cybersecurity-vuln-flyer.jpg"
                  alt="Success Stories"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Partners */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {t("partners.trustedBy")} <span className="text-[#173104]">{t("partners.industry")}</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">{t("partners.collaboration")}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-70 hover:opacity-100 transition-opacity">
            {[
              "Microsoft",
              "Google",
              "Amazon",
              "CompTIA",
              "Cisco",
              "Oracle",
              "SAP",
              "Salesforce",
              "Adobe",
              "IBM",
              "VMware",
              "Red Hat",
            ].map((partner, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Award className="w-6 h-6 text-[#173104]" />
                </div>
                <span className="text-xs font-semibold text-gray-700">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#173104]/5 to-[#b9ee44]/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("newsletter.stayUpdated")}</h2>
          <p className="text-lg text-gray-600 mb-8">{t("newsletter.getLatest")}</p>

          <Card className="bg-white/90 backdrop-blur-sm shadow-lg border-0 rounded-2xl">
            <CardContent className="p-8">
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="text"
                  placeholder={t("newsletter.fullName")}
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-[#173104] focus:ring-2 focus:ring-[#173104]/20 outline-none transition-all"
                />
                <input
                  type="email"
                  placeholder={t("newsletter.email")}
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-[#173104] focus:ring-2 focus:ring-[#173104]/20 outline-none transition-all"
                />
                <Button className="bg-gradient-to-r from-[#173104] to-[#2d5a1a] text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  {t("newsletter.subscribe")}
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
              <p className="text-green-100 mb-6 leading-relaxed">{t("footer.description")}</p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-[#b9ee44] rounded-lg flex items-center justify-center hover:bg-[#a8d93f] cursor-pointer transition-colors">
                  <Mail className="w-5 h-5 text-[#173104]" />
                </div>
                <div className="w-10 h-10 bg-[#b9ee44] rounded-lg flex items-center justify-center hover:bg-[#a8d93f] cursor-pointer transition-colors">
                  <Globe className="w-5 h-5 text-[#173104]" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">{t("footer.quickLinks")}</h4>
              <div className="space-y-3 text-green-100">
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
              <h4 className="font-bold text-lg mb-6">{t("footer.contact")}</h4>
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
