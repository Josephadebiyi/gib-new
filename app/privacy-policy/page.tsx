"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, ArrowRight, Shield, Eye, Lock, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PrivacyPolicyPage() {
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-100/30 via-blue-50/40 to-green-50/30 py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-gradient-to-r from-[#b9ee44]/5 via-transparent to-[#b9ee44]/5"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,_#b9ee44_0.1px,_transparent_0.1px)] bg-[length:60px_60px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <Badge className="bg-[#b9ee44]/20 text-[#173104] mb-4">Legal</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Privacy <span className="text-[#173104]">Policy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal
            information.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: January 2024</p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Overview */}
            <Card className="border-2 border-[#173104]/20 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-lg flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-[#173104]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Global Institute of Tech and Business ("GITB," "we," "us," or "our") is committed to protecting your
                  privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                  when you visit our website, enroll in our programs, or interact with our services. This policy
                  complies with the General Data Protection Regulation (GDPR) and other applicable privacy laws.
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card className="border-2 border-[#173104]/20 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-lg flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-[#173104]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
                    <p className="text-gray-600 mb-3">We may collect the following personal information:</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Name, email address, phone number, and postal address</li>
                      <li>Educational background and professional experience</li>
                      <li>Payment information (processed securely through third-party providers)</li>
                      <li>Course preferences and career goals</li>
                      <li>Communication preferences and marketing consent</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Information</h3>
                    <p className="text-gray-600 mb-3">We automatically collect certain technical information:</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>IP address, browser type, and operating system</li>
                      <li>Website usage data and navigation patterns</li>
                      <li>Device information and screen resolution</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card className="border-2 border-[#173104]/20 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-lg flex items-center justify-center mr-4">
                    <FileText className="w-6 h-6 text-[#173104]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">We use your information for the following purposes:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      <strong>Educational Services:</strong> To provide courses, assessments, certifications, and career
                      support
                    </li>
                    <li>
                      <strong>Communication:</strong> To send course updates, important announcements, and respond to
                      inquiries
                    </li>
                    <li>
                      <strong>Payment Processing:</strong> To process tuition payments and manage billing
                    </li>
                    <li>
                      <strong>Marketing:</strong> To send promotional materials about new courses and opportunities
                      (with your consent)
                    </li>
                    <li>
                      <strong>Website Improvement:</strong> To analyze usage patterns and improve our services
                    </li>
                    <li>
                      <strong>Legal Compliance:</strong> To comply with applicable laws and regulations
                    </li>
                    <li>
                      <strong>Career Services:</strong> To connect you with potential employers and job opportunities
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data Sharing and Disclosure */}
            <Card className="border-2 border-[#173104]/20 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-lg flex items-center justify-center mr-4">
                    <Lock className="w-6 h-6 text-[#173104]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Data Sharing and Disclosure</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">We may share your information in the following circumstances:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      <strong>Service Providers:</strong> With trusted third-party vendors who assist in providing our
                      services
                    </li>
                    <li>
                      <strong>Partner Companies:</strong> With potential employers for job placement purposes (with your
                      consent)
                    </li>
                    <li>
                      <strong>Certification Bodies:</strong> With organizations like CompTIA, Google, etc., for
                      certification purposes
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> When required by law or to protect our rights and safety
                    </li>
                    <li>
                      <strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales
                    </li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    We never sell your personal information to third parties for marketing purposes.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights (GDPR) */}
            <Card className="border-2 border-[#173104]/20 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights Under GDPR</h2>
                <div className="space-y-4">
                  <p className="text-gray-600">As an EU resident, you have the following rights:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      <strong>Right to Access:</strong> Request copies of your personal data
                    </li>
                    <li>
                      <strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data
                    </li>
                    <li>
                      <strong>Right to Erasure:</strong> Request deletion of your personal data
                    </li>
                    <li>
                      <strong>Right to Restrict Processing:</strong> Request limitation of how we use your data
                    </li>
                    <li>
                      <strong>Right to Data Portability:</strong> Request transfer of your data to another organization
                    </li>
                    <li>
                      <strong>Right to Object:</strong> Object to processing of your data for marketing purposes
                    </li>
                    <li>
                      <strong>Right to Withdraw Consent:</strong> Withdraw consent for data processing at any time
                    </li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    To exercise these rights, contact us at <strong>privacy@gitb.eu</strong> or +370 600 12345.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="border-2 border-[#173104]/20 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Security</h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction. These measures
                  include encryption, secure servers, access controls, and regular security assessments. However, no
                  method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </CardContent>
            </Card>

            {/* Cookies and Tracking */}
            <Card className="border-2 border-[#173104]/20 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies and Tracking Technologies</h2>
                <div className="space-y-4">
                  <p className="text-gray-600">We use cookies and similar technologies to:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Provide personalized content and advertisements</li>
                    <li>Improve website functionality and user experience</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    You can control cookies through your browser settings. For more information, see our
                    <Link href="/cookie-policy" className="text-[#173104] hover:underline ml-1">
                      Cookie Policy
                    </Link>
                    .
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-2 border-[#173104]/20 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <strong>Global Institute of Tech and Business</strong>
                  </p>
                  <p>Email: privacy@gitb.eu</p>
                  <p>Phone: +370 600 12345</p>
                  <p>Address: Vilnius, Lithuania</p>
                </div>
                <p className="text-gray-600 mt-4">
                  We will respond to your inquiry within 30 days as required by GDPR.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#173104] to-[#2d5a1a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-green-100 mb-8">
            Your privacy is protected. Join thousands of professionals advancing their careers with GITB.
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
                View Courses
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
                  <Link href="/how-it-works" className="hover:text-white transition-colors">
                    How It Works
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
