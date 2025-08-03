"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Upload,
  CreditCard,
  Shield,
  Award,
  CheckCircle,
  FileText,
  User,
  GraduationCap,
  Phone,
  Mail,
  Globe,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "@/hooks/useTranslation"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"

export default function ApplicationPage() {
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
              <Link href="/about" className="hover:text-[#b9ee44] transition-colors">
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
            <div className="flex items-center space-x-2 text-sm">
              <span className="bg-white/20 px-2 py-1 rounded">EN | LT</span>
            </div>
          </div>
        </div>
      </header>

      {/* Application Hero */}
      <section className="bg-gradient-to-r from-[#b9ee44] to-[#a8d93f] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#173104] mb-6">
            Start Your <span className="text-white">Tech Journey</span>
          </h1>
          <p className="text-xl text-[#173104]/80 mb-8">
            Complete your application to join Europe's leading tech education institute
          </p>
          <div className="flex justify-center space-x-8 text-sm">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-[#173104] mr-2" />
              <span>EU Recognized</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-[#173104] mr-2" />
              <span>92% Job Placement</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-[#173104] mr-2" />
              <span>Industry Partnerships</span>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-[#173104]/5 to-[#b9ee44]/10">
                  <CardTitle className="text-2xl text-[#173104] flex items-center">
                    <User className="w-6 h-6 mr-3" />
                    Application Form
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <User className="w-5 h-5 mr-2 text-[#173104]" />
                      Personal Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="Enter your first name" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Enter your last name" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="your.email@example.com" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" placeholder="+370 600 12345" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="country">Country *</Label>
                        <Select>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select your country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="lt">Lithuania</SelectItem>
                            <SelectItem value="de">Germany</SelectItem>
                            <SelectItem value="fr">France</SelectItem>
                            <SelectItem value="nl">Netherlands</SelectItem>
                            <SelectItem value="se">Sweden</SelectItem>
                            <SelectItem value="other">Other EU Country</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="age">Age *</Label>
                        <Input id="age" type="number" placeholder="25" className="mt-1" />
                      </div>
                    </div>
                  </div>

                  {/* Course Selection */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <GraduationCap className="w-5 h-5 mr-2 text-[#173104]" />
                      Course Selection
                    </h3>
                    <div>
                      <Label htmlFor="course">Preferred Course *</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select your preferred course" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cybersecurity">Cybersecurity Professional (4 months)</SelectItem>
                          <SelectItem value="cybersecurity-vuln">
                            Cybersecurity Vulnerability Tester (4 months)
                          </SelectItem>
                          <SelectItem value="uiux-design">UI/UX & Webflow Design (3 months)</SelectItem>
                          <SelectItem value="iam">Identity & Access Management (3 months)</SelectItem>
                          <SelectItem value="kyc-compliance">KYC & Compliance Specialist (2 months)</SelectItem>
                          <SelectItem value="languages">European Languages Program (3-6 months)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Education Background */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <GraduationCap className="w-5 h-5 mr-2 text-[#173104]" />
                      Education Background
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="education">Highest Education Level *</Label>
                        <Select>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select your education level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high-school">High School</SelectItem>
                            <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                            <SelectItem value="master">Master's Degree</SelectItem>
                            <SelectItem value="phd">PhD</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="field">Field of Study</Label>
                        <Input
                          id="field"
                          placeholder="e.g., Computer Science, Engineering, Business"
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Professional Experience */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-[#173104]" />
                      Professional Experience
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="experience">Years of Professional Experience</Label>
                        <Select>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select your experience level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-1">0-1 years</SelectItem>
                            <SelectItem value="2-5">2-5 years</SelectItem>
                            <SelectItem value="6-10">6-10 years</SelectItem>
                            <SelectItem value="10+">10+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="currentRole">Current Role/Position</Label>
                        <Input
                          id="currentRole"
                          placeholder="e.g., Software Developer, Student, Manager"
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Motivation */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Motivation & Goals</h3>
                    <div>
                      <Label htmlFor="motivation">Why do you want to join this program? *</Label>
                      <Textarea
                        id="motivation"
                        placeholder="Tell us about your career goals and why you're interested in this program..."
                        className="mt-1 min-h-[120px]"
                      />
                    </div>
                  </div>

                  {/* Document Uploads */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <Upload className="w-5 h-5 mr-2 text-[#173104]" />
                      Required Documents
                    </h3>
                    <div className="space-y-4">
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#173104] transition-colors">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-2">Upload your CV/Resume *</p>
                        <Button variant="outline" size="sm">
                          Choose File
                        </Button>
                      </div>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#173104] transition-colors">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-2">Upload ID/Passport *</p>
                        <Button variant="outline" size="sm">
                          Choose File
                        </Button>
                      </div>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#173104] transition-colors">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-2">Educational Certificates (Optional)</p>
                        <Button variant="outline" size="sm">
                          Choose File
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox id="terms" className="mt-1" />
                      <Label htmlFor="terms" className="text-sm leading-relaxed">
                        I agree to the{" "}
                        <Link href="/terms-conditions" className="text-[#173104] hover:underline">
                          Terms & Conditions
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy-policy" className="text-[#173104] hover:underline">
                          Privacy Policy
                        </Link>{" "}
                        *
                      </Label>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Checkbox id="marketing" className="mt-1" />
                      <Label htmlFor="marketing" className="text-sm leading-relaxed">
                        I would like to receive updates about courses and opportunities from GITB
                      </Label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Payment & Summary */}
            <div className="space-y-6">
              {/* Application Fee */}
              <Card className="shadow-lg border-2 border-[#173104]/20 bg-white/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-[#173104]/5 to-[#b9ee44]/10">
                  <CardTitle className="text-lg text-[#173104] flex items-center">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Application Fee
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-[#173104] mb-2">€50</div>
                    <p className="text-sm text-gray-600">Non-refundable application fee</p>
                  </div>
                  <div className="space-y-3 text-sm text-gray-600 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#173104] mr-2" />
                      <span>Deducted from tuition upon enrollment</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#173104] mr-2" />
                      <span>Secure payment processing</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#173104] mr-2" />
                      <span>Instant application review</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-[#173104] to-[#2d5a1a] text-white hover:shadow-lg transition-shadow">
                    <Shield className="w-4 h-4 mr-2" />
                    Pay Securely with Stripe
                  </Button>
                </CardContent>
              </Card>

              {/* Certification Preview */}
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-[#173104] flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    Certifications Available
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {[
                      "CompTIA Security+",
                      "CompTIA PenTest+",
                      "Google UX Design",
                      "CIAM Certified",
                      "CKYCA Certified",
                      "DELF/DELE/LKI",
                    ].map((cert, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-lg flex items-center justify-center mr-3">
                          <Award className="w-5 h-5 text-[#173104]" />
                        </div>
                        <span className="text-sm font-medium">{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Support */}
              <Card className="shadow-lg border-0 bg-gradient-to-br from-gray-50 to-blue-50/30">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-3">Need Help?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Our admissions team is here to assist you with your application.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="font-medium">📧 admissions@gitb.lt</p>
                    <p className="font-medium">📞 +370 600 12345</p>
                  </div>
                </CardContent>
              </Card>
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
              <p className="text-green-100 mb-6 leading-relaxed">
                Global Institute of Tech and Business - Empowering careers through technology education.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
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
