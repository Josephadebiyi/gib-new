"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, FileText, Scale, AlertTriangle, CreditCard, Phone, Mail, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "@/hooks/useTranslation"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"

export default function TermsConditionsPage() {
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
              <Scale className="w-10 h-10 text-[#1a5f3f]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-4">
              Please read these terms carefully before using our services or enrolling in our programs.
            </p>
            <p className="text-sm text-gray-500">Last updated: January 2024</p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Acceptance of Terms */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/20 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                    <FileText className="w-6 h-6 text-[#1a5f3f]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Acceptance of Terms</h2>
                </div>
                <div className="space-y-4 text-gray-600">
                  <p>
                    By accessing and using the Global Institute of Tech and Business (GITB) website, services, or
                    enrolling in our programs, you agree to be bound by these Terms and Conditions. If you do not agree
                    to these terms, please do not use our services.
                  </p>
                  <p>
                    These terms constitute a legally binding agreement between you and GITB. We reserve the right to
                    modify these terms at any time, and such modifications will be effective immediately upon posting on
                    our website.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Educational Services */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Educational Services</h2>
                <div className="space-y-4 text-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900">Program Enrollment</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>All applications are subject to review and approval by GITB admissions team</li>
                    <li>Enrollment is confirmed only upon payment of required fees and acceptance of these terms</li>
                    <li>Program availability is subject to minimum enrollment requirements</li>
                    <li>GITB reserves the right to cancel or reschedule programs with reasonable notice</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 mt-6">Student Responsibilities</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Attend scheduled classes and complete assignments on time</li>
                    <li>Maintain professional conduct during all interactions</li>
                    <li>Provide accurate and complete information in applications</li>
                    <li>Comply with all program requirements and deadlines</li>
                    <li>Respect intellectual property rights of course materials</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-green-500/10 to-green-600/20 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                    <CreditCard className="w-6 h-6 text-[#1a5f3f]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Payment Terms</h2>
                </div>
                <div className="space-y-4 text-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900">Application Fee</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>A non-refundable application fee of €50 is required with all applications</li>
                    <li>This fee is deducted from your tuition upon enrollment</li>
                    <li>Application fees are processed securely through our payment partners</li>
                    <li>Fees are non-transferable between programs or applicants</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 mt-6">Tuition and Fees</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Tuition fees vary by program and are specified in your enrollment agreement</li>
                    <li>Payment plans are available and must be arranged prior to program start</li>
                    <li>Late payment fees may apply for overdue balances</li>
                    <li>All fees are quoted in Euros and subject to applicable taxes</li>
                    <li>Price changes may occur with 30 days written notice</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 mt-6">Refund Policy</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Full refund available if program is cancelled by GITB</li>
                    <li>Partial refunds may be available within 14 days of program start</li>
                    <li>No refunds after 25% of program completion</li>
                    <li>Refund requests must be submitted in writing</li>
                    <li>Processing time for approved refunds is 14-21 business days</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Property Rights</h2>
                <div className="space-y-4 text-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900">GITB Content</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>All course materials, videos, and content are proprietary to GITB</li>
                    <li>Students may access materials for personal educational use only</li>
                    <li>Sharing, copying, or distributing course materials is strictly prohibited</li>
                    <li>GITB trademarks and logos may not be used without written permission</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 mt-6">Student Work</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Students retain ownership of their original work and projects</li>
                    <li>GITB may use student work for promotional purposes with consent</li>
                    <li>Students grant GITB license to use work for educational examples</li>
                    <li>Plagiarism or academic dishonesty may result in program termination</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/20 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                    <AlertTriangle className="w-6 h-6 text-[#1a5f3f]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Limitation of Liability</h2>
                </div>
                <div className="space-y-4 text-gray-600">
                  <p>
                    GITB provides educational services "as is" and makes no warranties regarding employment outcomes,
                    certification success, or specific career results. While we maintain high standards and provide
                    career support, individual results may vary.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>GITB's liability is limited to the amount of tuition paid</li>
                    <li>We are not liable for indirect, consequential, or punitive damages</li>
                    <li>Students are responsible for their own career decisions and outcomes</li>
                    <li>Technical issues or service interruptions may occur without liability</li>
                    <li>Third-party certification exam results are not guaranteed</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Code of Conduct */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Code of Conduct</h2>
                <div className="space-y-4 text-gray-600">
                  <p>All students are expected to maintain professional standards:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Treat instructors, staff, and fellow students with respect</li>
                    <li>Participate constructively in class discussions and activities</li>
                    <li>Submit original work and properly cite sources</li>
                    <li>Maintain confidentiality of proprietary course materials</li>
                    <li>Report any violations of academic integrity</li>
                    <li>Follow all applicable laws and regulations</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 mt-6">Disciplinary Actions</h3>
                  <p>Violations may result in:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Warning and counseling</li>
                    <li>Temporary suspension from classes</li>
                    <li>Program termination without refund</li>
                    <li>Withholding of certificates or credentials</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Privacy and Data Protection */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy and Data Protection</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Your privacy is important to us. Our collection and use of personal information is governed by our
                    Privacy Policy, which is incorporated into these terms by reference.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>We collect information necessary for educational services</li>
                    <li>Student records are maintained according to EU data protection laws</li>
                    <li>Information may be shared with certification bodies and employers (with consent)</li>
                    <li>You have rights regarding your personal data as outlined in our Privacy Policy</li>
                  </ul>
                  <p>
                    For detailed information about our data practices, please review our{" "}
                    <Link href="/privacy-policy" className="text-[#1a5f3f] hover:underline font-semibold">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Governing Law and Disputes</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    These terms are governed by the laws of Lithuania and the European Union. Any disputes will be
                    resolved through the following process:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li>Initial attempt at informal resolution through direct communication</li>
                    <li>Formal mediation through an agreed-upon mediator</li>
                    <li>Binding arbitration under Lithuanian arbitration rules</li>
                    <li>Legal proceedings in Lithuanian courts as a last resort</li>
                  </ol>
                  <p className="mt-4">
                    Students in other EU countries may also have rights under their local consumer protection laws.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-[#1a5f3f]/5 to-[#daff7d]/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions About These Terms</h2>
                <div className="space-y-4 text-gray-600">
                  <p>If you have any questions about these Terms and Conditions, please contact us:</p>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-[#1a5f3f] mr-3" />
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <p>legal@gitb.eu</p>
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
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="text-[#daff7d] font-semibold">
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
