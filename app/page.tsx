"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  Mail,
  Globe,
  Award,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Play,
  Code,
  Database,
  Shield,
  Cloud,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "@/hooks/useTranslation"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#1a5f3f]/90 to-[#2d7a5a]/90 backdrop-blur-sm text-white px-4 py-4 relative z-50">
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
              <Link href="/" className="text-[#daff7d] font-semibold">
                {t("nav.home")}
              </Link>
              <Link href="/courses" className="hover:text-[#daff7d] transition-colors">
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
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="w-4 h-4" />
              <span>+370 600 12345</span>
            </div>
            <Link href="/application">
              <Button className="bg-[#daff7d] text-[#1a5f3f] hover:bg-[#c5e86a] text-sm px-4 py-2 sm:px-6 font-semibold shadow-lg transition-all">
                {t("nav.applyNow")}
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section with Cloudy Background */}
      <section className="relative min-h-screen bg-gradient-to-br from-purple-100/30 via-blue-50/40 to-green-50/30 px-4 py-20 overflow-hidden">
        {/* Floating Tech Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 animate-float">
            <div className="bg-[#daff7d]/20 p-4 rounded-full backdrop-blur-sm">
              <Code className="w-8 h-8 text-[#1a5f3f]/70" />
            </div>
          </div>
          <div className="absolute top-40 right-20 animate-float-delayed">
            <div className="bg-[#1a5f3f]/10 p-4 rounded-full backdrop-blur-sm">
              <Database className="w-8 h-8 text-[#1a5f3f]/70" />
            </div>
          </div>
          <div className="absolute bottom-40 left-20 animate-float">
            <div className="bg-purple-200/30 p-4 rounded-full backdrop-blur-sm">
              <Shield className="w-8 h-8 text-[#1a5f3f]/70" />
            </div>
          </div>
          <div className="absolute top-60 right-40 animate-float-delayed">
            <div className="bg-blue-200/30 p-4 rounded-full backdrop-blur-sm">
              <Cloud className="w-8 h-8 text-[#1a5f3f]/70" />
            </div>
          </div>
        </div>

        {/* Cloud Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-1/4 w-64 h-32 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-1/4 w-80 h-40 bg-[#daff7d]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-96 h-48 bg-purple-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-[#daff7d]/20 backdrop-blur-sm px-4 py-2 rounded-full text-[#1a5f3f] font-medium">
                  <Star className="w-4 h-4 mr-2" />
                  {t("hero.euRecognized")}
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {t("hero.title").split(" ").slice(0, -2).join(" ")}{" "}
                  <span className="bg-gradient-to-r from-[#1a5f3f] to-[#2d7a5a] bg-clip-text text-transparent">
                    {t("hero.title").split(" ").slice(-2).join(" ")}
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">{t("hero.subtitle")}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/application">
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-[#1a5f3f] to-[#2d7a5a] hover:from-[#145033] hover:to-[#246647] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl shadow-xl transition-all">
                    {t("hero.startJourney")}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/courses">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-[#1a5f3f]/30 text-[#1a5f3f] hover:bg-[#daff7d]/20 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl bg-white/80 backdrop-blur-sm transition-all"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    {t("hero.exploreCourses")}
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#1a5f3f]">5,000+</div>
                  <div className="text-xs sm:text-sm text-gray-600">{t("stats.graduates")}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#1a5f3f]">92%</div>
                  <div className="text-xs sm:text-sm text-gray-600">{t("stats.jobPlacement")}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#1a5f3f]">15</div>
                  <div className="text-xs sm:text-sm text-gray-600">{t("stats.euCountries")}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/images/cybersecurity-course.jpg"
                  alt="Tech education"
                  width={500}
                  height={500}
                  className="mx-auto rounded-2xl shadow-2xl"
                />
              </div>
              {/* Floating certification badges */}
              <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg animate-float">
                <Award className="w-8 h-8 text-[#daff7d]" />
                <div className="text-xs font-semibold text-[#1a5f3f] mt-1">AWS Certified</div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg animate-float-delayed">
                <Globe className="w-8 h-8 text-[#1a5f3f]" />
                <div className="text-xs font-semibold text-[#1a5f3f] mt-1">EU Recognized</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-gradient-to-r from-[#daff7d]/5 via-transparent to-[#daff7d]/5"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,_#daff7d_0.1px,_transparent_0.1px)] bg-[length:60px_60px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">{t("stepByStep.title")}</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">{t("stepByStep.subtitle")}</p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1a5f3f]/20 via-[#daff7d]/40 to-[#1a5f3f]/20 transform -translate-y-1/2 hidden lg:block"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
              {[
                {
                  step: "01",
                  title: t("stepByStep.steps.explore.title"),
                  description: t("stepByStep.steps.explore.desc"),
                  icon: <Globe className="w-6 sm:w-8 h-6 sm:h-8" />,
                  color: "from-blue-400/20 to-blue-600/20",
                },
                {
                  step: "02",
                  title: t("stepByStep.steps.apply.title"),
                  description: t("stepByStep.steps.apply.desc"),
                  icon: <Users className="w-6 sm:w-8 h-6 sm:h-8" />,
                  color: "from-green-400/20 to-green-600/20",
                },
                {
                  step: "03",
                  title: t("stepByStep.steps.accepted.title"),
                  description: t("stepByStep.steps.accepted.desc"),
                  icon: <CheckCircle className="w-6 sm:w-8 h-6 sm:h-8" />,
                  color: "from-purple-400/20 to-purple-600/20",
                },
                {
                  step: "04",
                  title: t("stepByStep.steps.learn.title"),
                  description: t("stepByStep.steps.learn.desc"),
                  icon: <Code className="w-6 sm:w-8 h-6 sm:h-8" />,
                  color: "from-orange-400/20 to-orange-600/20",
                },
                {
                  step: "05",
                  title: t("stepByStep.steps.certified.title"),
                  description: t("stepByStep.steps.certified.desc"),
                  icon: <Award className="w-6 sm:w-8 h-6 sm:h-8" />,
                  color: "from-pink-400/20 to-pink-600/20",
                },
                {
                  step: "06",
                  title: t("stepByStep.steps.job.title"),
                  description: t("stepByStep.steps.job.desc"),
                  icon: <Star className="w-6 sm:w-8 h-6 sm:h-8" />,
                  color: "from-indigo-400/20 to-indigo-600/20",
                },
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="text-center">
                    <div
                      className={`relative mx-auto w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${item.color} backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <div className="text-[#1a5f3f]">{item.icon}</div>
                      <div className="absolute -top-2 -right-2 bg-[#daff7d] text-[#1a5f3f] text-xs font-bold w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center">
                        {item.step}
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/how-it-works">
              <Button className="bg-gradient-to-r from-[#1a5f3f] to-[#2d7a5a] text-white px-6 sm:px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                Learn More About Our Process
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Courses Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Featured <span className="text-[#1a5f3f]">Programs</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Explore our most popular courses designed for today's digital economy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm group overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/uiux-design-course.jpg"
                  alt="UI/UX Design Course"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">UI/UX & Webflow Design</h3>
                <p className="text-gray-600 mb-4">
                  Master modern design principles and create stunning user experiences
                </p>
                <Link href="/courses/uiux-design">
                  <Button className="w-full bg-gradient-to-r from-[#1a5f3f] to-[#2d7a5a] text-white hover:shadow-lg transition-all">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm group overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/language-courses.jpg"
                  alt="Language Courses"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Language Programs</h3>
                <p className="text-gray-600 mb-4">French, Spanish, Lithuanian - Open doors across Europe</p>
                <Link href="/courses/languages">
                  <Button className="w-full bg-gradient-to-r from-[#1a5f3f] to-[#2d7a5a] text-white hover:shadow-lg transition-all">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm group overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/iam-course.jpg"
                  alt="Identity & Access Management"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Identity & Access Management</h3>
                <p className="text-gray-600 mb-4">Secure digital identities and manage access controls</p>
                <Link href="/courses/iam">
                  <Button className="w-full bg-gradient-to-r from-[#1a5f3f] to-[#2d7a5a] text-white hover:shadow-lg transition-all">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/courses">
              <Button className="bg-gradient-to-r from-[#1a5f3f] to-[#2d7a5a] text-white px-6 sm:px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                View All Courses
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#1a5f3f] to-[#2d7a5a] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#daff7d]/10 via-transparent to-[#daff7d]/10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#daff7d_0.5px,_transparent_0.5px)] bg-[length:60px_60px] opacity-20"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Transform Your Career?</h2>
          <p className="text-lg sm:text-xl text-green-100 mb-8 leading-relaxed">
            Join thousands of students who have launched successful tech careers with industry-recognized skills and
            EU-wide opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/application">
              <Button className="w-full sm:w-auto bg-[#daff7d] text-[#1a5f3f] hover:bg-[#c5e86a] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl shadow-lg font-semibold transition-all">
                Start Your Application
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/courses">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl bg-transparent backdrop-blur-sm transition-all"
              >
                Explore All Courses
              </Button>
            </Link>
          </div>

          <div className="mt-12 text-sm text-green-200">
            <p>✓ EU-Recognized Programs ✓ Industry Partnerships ✓ 92% Job Placement Rate</p>
          </div>
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
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center hover:bg-green-500 cursor-pointer transition-colors">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-500 cursor-pointer transition-colors">
                  <Globe className="w-5 h-5 text-white" />
                </div>
              </div>
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
                    Full Stack Development
                  </Link>
                </p>
                <p>
                  <Link href="/courses" className="hover:text-white transition-colors">
                    Data Analytics
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
                  <span className="text-green-100">info@gitb.eu</span>
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

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
