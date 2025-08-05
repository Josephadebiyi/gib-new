"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, ArrowRight, FileText, Scale, AlertTriangle, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TermsConditionsPage() {
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
            Terms & <span className="text-[#173104]">Conditions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Please read these terms and conditions carefully before using our services or enrolling in our programs.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: January 2024</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Acceptance of Terms */}
            <Card className="border-2 border-[#173104]/20 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-lg flex items-center justify-center mr-4">
                    <Scale className="w-6 h-6 text-[#173104]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Acceptance of Terms</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  By accessing our website, enrolling in our programs, or using our services, you agree to be bound by
                  these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms,
                  you may not use our services. These terms apply to all visitors, users, students, and others who
                  access or use our services.
                </p>
              </CardContent>
            </Card>

            {/* Educational Services */}
            <Card className="border-2 border-[#173104]/20 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-lg flex items-center justify-center mr-4">
                    <FileText className="w-6 h-6 text-[#173104]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Educational Services</h2>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Course Enrollment</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Enrollment is subject to availability and admission requirements</li>
                    <li>Students must complete the application process and pay required fees</li>
                    <li>Course schedules and content may be modified to improve educational outcomes</li>
                    <li>Minimum enrollment numbers may be required for courses to proceed</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 mt-6">Student Responsibilities</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Attend classes regularly and participate actively in coursework</li>
                    <li>Complete assignments and assessments within specified deadlines</li>
                    <li>Maintain professional conduct and respect for instructors and peers</li>
                    <li>Provide accurate information during enrollment and throughout the program</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card className="border-2 border-[#173104]/20 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Terms</h2>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Tuition and Fees</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>All fees must be paid according to the agreed payment schedule</li>
                    <li>Payment plans are available for qualifying students</li>
                    <li>Late payment fees may apply for overdue accounts</li>
                    <li>Prices are subject to change with 30 days' notice</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 mt-6">Refund Policy</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Full refund available within 14 days of enrollment (cooling-off period)</li>
                    <li>Partial refunds may be available based on course completion percentage</li>
                    <li>No refunds for courses completed beyond 50% of the program duration</li>
                    <li>Certification exam fees are non-refundable once vouchers are issued</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="border-2 border-[#173104]/20 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    All course materials, content, trademarks, and intellectual property remain the property of GITB or
                    our licensors. Students are granted a limited, non-exclusive license to use materials for
                    educational purposes only.
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900">Restrictions</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Materials may not be reproduced, distributed, or sold without permission</li>
                    <li>Recording of classes or sharing login credentials is prohibited</li>
                    <li>Commercial use of course content is strictly forbidden</li>
                    <li>Students retain rights to their own work and projects created during courses</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Code of Conduct */}
            <Card className="border-2 border-[#173104]/20 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-lg flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-[#173104]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Code of Conduct</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    All students are expected to maintain professional standards and contribute to a positive learning
                    environment.
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900">Expected Behavior</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Treat all participants with respect and professionalism</li>
                    <li>Engage constructively in discussions and group activities</li>
                    <li>Maintain confidentiality of sensitive information shared in class</li>
                    <li>Report any concerns or issues to instructors or administration</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 mt-6">Prohibited Conduct</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Harassment, discrimination, or disruptive behavior</li>
                    <li>Academic dishonesty, plagiarism, or cheating</li>
                    <li>Sharing course materials without authorization</li>
                    <li>Any illegal activities or violation of applicable laws</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="border-2 border-[#173104]/20 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-lg flex items-center justify-center mr-4">
                    <AlertTriangle className="w-6 h-6 text-[#173104]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Limitation of Liability</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    While we strive to provide high-quality education and career support, we cannot guarantee specific
                    employment outcomes or salary levels. Our liability is limited to the fees paid for our services.
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900">Disclaimers</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Job placement statistics are based on historical data and may vary</li>
                    <li>Certification exam success depends on individual preparation and effort</li>
                    <li>Market conditions and employer requirements may affect job prospects</li>
                    <li>We are not liable for indirect, consequential, or punitive damages</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="border-2 border-[#173104]/20 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Termination</h2>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Either party may terminate the educational agreement under certain circumstances:
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900">Student Termination</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Students may withdraw from programs with appropriate notice</li>
                    <li>Refunds will be calculated according to our refund policy</li>
                    <li>Access to course materials will be revoked upon withdrawal</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 mt-6">GITB Termination</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>We may terminate enrollment for violation of terms or code of conduct</li>
                    <li>Non-payment of fees may result in suspension or termination</li>
                    <li>Programs may be cancelled due to insufficient enrollment</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="border-2 border-[#173104]/20 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Governing Law and Disputes</h2>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    These terms are governed by the laws of Lithuania and the European Union. Any disputes will be
                    resolved through mediation or arbitration in Vilnius, Lithuania.
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900">Contact for Disputes</h3>
                  <p className="text-gray-600">
                    For any concerns or disputes, please contact us first at <strong>legal@gitb.eu</strong> or +370 600
                    12345. We are committed to resolving issues fairly and promptly.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card className="border-2 border-[#173104]/20 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be posted on our website and
                  students will be notified via email. Continued use of our services after changes constitutes
                  acceptance of the new terms. For significant changes, we will provide 30 days' notice.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-2 border-[#173104]/20 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-4">
                  If you have questions about these Terms and Conditions, please contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <strong>Global Institute of Tech and Business</strong>
                  </p>
                  <p>Email: legal@gitb.eu</p>
                  <p>Phone: +370 600 12345</p>
                  <p>Address: Vilnius, Lithuania</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#173104] to-[#2d5a1a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Tech Career?</h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of professionals who have transformed their careers with GITB's industry-focused programs.
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
