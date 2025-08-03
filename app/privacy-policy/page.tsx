"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Shield, Eye, Lock, FileText, Phone, Mail, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "@/hooks/useTranslation"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"

export default function PrivacyPolicyPage() {
  const { t } = useTranslation()

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
      <section className="bg-gradient-to-br from-purple-100/30 via-blue-50/40 to-green-50/30 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-[#1a5f3f] hover:text-[#145033] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="text-center">
            <div className="bg-gradient-to-br from-[#1a5f3f]/10 to-[#daff7d]/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-[#1a5f3f]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-4">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-500">Last updated: January 2024</p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Information We Collect */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/20 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-[#1a5f3f]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
                </div>
                <div className="space-y-4 text-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                  <p>When you apply to GITB or use our services, we may collect:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Name, email address, phone number, and postal address</li>
                    <li>Educational background and work experience</li>
                    <li>Payment information for application fees and tuition</li>
                    <li>Government-issued identification for verification purposes</li>
                    <li>Academic transcripts and certificates</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 mt-6">Technical Information</h3>
                  <p>We automatically collect certain information when you visit our website:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>IP address, browser type, and operating system</li>
                    <li>Pages visited, time spent on pages, and click patterns</li>
                    <li>Device information and screen resolution</li>
                    <li>Referral sources and search terms used</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-green-500/10 to-green-600/20 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                    <FileText className="w-6 h-6 text-[#1a5f3f]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
                </div>
                <div className="space-y-4 text-gray-600">
                  <p>We use your information for the following purposes:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Educational Services:</strong> Processing applications, delivering courses, and providing
                      student support
                    </li>
                    <li>
                      <strong>Communication:</strong> Sending course updates, important announcements, and responding to
                      inquiries
                    </li>
                    <li>
                      <strong>Payment Processing:</strong> Handling application fees, tuition payments, and financial
                      transactions
                    </li>
                    <li>
                      <strong>Career Services:</strong> Connecting graduates with job opportunities and providing career
                      support
                    </li>
                    <li>
                      <strong>Website Improvement:</strong> Analyzing usage patterns to enhance user experience
                    </li>
                    <li>
                      <strong>Legal Compliance:</strong> Meeting regulatory requirements and protecting our legal
                      interests
                    </li>
                    <li>
                      <strong>Marketing:</strong> Sending promotional materials about new courses and programs (with
                      your consent)
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/20 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                    <Lock className="w-6 h-6 text-[#1a5f3f]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Data Protection & Security</h2>
                </div>
                <div className="space-y-4 text-gray-600">
                  <p>We implement comprehensive security measures to protect your personal information:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Encryption:</strong> All sensitive data is encrypted in transit and at rest using
                      industry-standard protocols
                    </li>
                    <li>
                      <strong>Access Controls:</strong> Strict access controls ensure only authorized personnel can
                      access your information
                    </li>
                    <li>
                      <strong>Regular Audits:</strong> We conduct regular security audits and vulnerability assessments
                    </li>
                    <li>
                      <strong>Staff Training:</strong> All employees receive data protection and privacy training
                    </li>
                    <li>
                      <strong>Secure Infrastructure:</strong> Our systems are hosted on secure, compliant cloud
                      platforms
                    </li>
                    <li>
                      <strong>Incident Response:</strong> We have procedures in place to respond quickly to any security
                      incidents
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/20 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-[#1a5f3f]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
                </div>
                <div className="space-y-4 text-gray-600">
                  <p>Under GDPR and other applicable privacy laws, you have the following rights:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Right to Access:</strong> Request a copy of the personal information we hold about you
                    </li>
                    <li>
                      <strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete
                      information
                    </li>
                    <li>
                      <strong>Right to Erasure:</strong> Request deletion of your personal information under certain
                      circumstances
                    </li>
                    <li>
                      <strong>Right to Restrict Processing:</strong> Request limitation of how we process your
                      information
                    </li>
                    <li>
                      <strong>Right to Data Portability:</strong> Request transfer of your data to another organization
                    </li>
                    <li>
                      <strong>Right to Object:</strong> Object to processing of your information for certain purposes
                    </li>
                    <li>
                      <strong>Right to Withdraw Consent:</strong> Withdraw consent for processing where consent is the
                      legal basis
                    </li>
                  </ul>
                  <p className="mt-4">To exercise any of these rights, please contact us at privacy@gitb.eu</p>
                </div>
              </CardContent>
            </Card>

            {/* Cookies and Tracking */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies and Tracking Technologies</h2>
                <div className="space-y-4 text-gray-600">
                  <p>We use cookies and similar technologies to enhance your experience on our website:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Essential Cookies:</strong> Required for basic website functionality and security
                    </li>
                    <li>
                      <strong>Analytics Cookies:</strong> Help us understand how visitors use our website
                    </li>
                    <li>
                      <strong>Preference Cookies:</strong> Remember your settings and preferences
                    </li>
                    <li>
                      <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with your consent)
                    </li>
                  </ul>
                  <p>
                    You can manage your cookie preferences through your browser settings or our cookie consent tool.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* International Transfers */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">International Data Transfers</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    As an international education provider, we may transfer your personal information to countries
                    outside the European Economic Area (EEA). When we do so, we ensure appropriate safeguards are in
                    place:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Transfers to countries with adequate data protection laws as recognized by the European Commission
                    </li>
                    <li>Use of Standard Contractual Clauses approved by the European Commission</li>
                    <li>Transfers to organizations certified under approved certification schemes</li>
                    <li>Implementation of appropriate technical and organizational measures</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Retention</h2>
                <div className="space-y-4 text-gray-600">
                  <p>We retain your personal information for different periods depending on the purpose:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Student Records:</strong> Maintained for 7 years after graduation for academic
                      verification
                    </li>
                    <li>
                      <strong>Application Data:</strong> Kept for 2 years for unsuccessful applications, permanently for
                      enrolled students
                    </li>
                    <li>
                      <strong>Financial Records:</strong> Retained for 7 years for tax and accounting purposes
                    </li>
                    <li>
                      <strong>Marketing Data:</strong> Kept until you withdraw consent or request deletion
                    </li>
                    <li>
                      <strong>Website Analytics:</strong> Anonymized data may be retained indefinitely for statistical
                      purposes
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-[#1a5f3f]/5 to-[#daff7d]/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <div className="space-y-4 text-gray-600">
                  <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-[#1a5f3f] mr-3" />
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <p>privacy@gitb.eu</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-[#1a5f3f] mr-3" />
                      <div>
                        <p className="font-semibold text-gray-900">Phone</p>
                        <p>+370 600 12345</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Globe className="w-5 h-5 text-[#1a5f3f] mr-3" />
                      <div>
                        <p className="font-semibold text-gray-900">Address</p>
                        <p>
                          Global Institute of Tech and Business
                          <br />
                          Vilnius, Lithuania
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
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
              <Link href="/privacy-policy" className="text-[#daff7d] font-semibold">
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
