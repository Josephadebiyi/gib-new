"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, ArrowRight, User, Mail, GraduationCap, Briefcase, Target, CheckCircle, Percent } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function ApplicationPage() {
  const router = useRouter()
  const [promoCode, setPromoCode] = useState("")
  const [discount, setDiscount] = useState(0)
  const [selectedCourse, setSelectedCourse] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    education: "",
    field: "",
    experience: "",
    currentRole: "",
    motivation: "",
    terms: false,
    marketing: false,
  })

  const courses = [
    { id: "cybersecurity-professional", name: "Cybersecurity Professional", price: 1635, duration: "4 months" },
    { id: "cybersecurity-vulnerability", name: "Vulnerability Tester", price: 1590, duration: "4 months" },
    { id: "uiux-design", name: "UI/UX & Webflow Design", price: 1590, duration: "4 months" },
    { id: "iam-specialist", name: "IAM Specialist", price: 1730, duration: "4 months" },
    { id: "kyc-compliance", name: "KYC Compliance Specialist", price: 1590, duration: "4 months" },
    { id: "european-languages", name: "European Languages Program", price: 300, duration: "3 months" },
  ]

  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === "SUPERTECH") {
      setDiscount(15)
    } else {
      setDiscount(0)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !selectedCourse || !formData.terms) {
      alert("Please fill in all required fields and accept the terms and conditions.")
      return
    }

    // Redirect to payment page with application data
    const params = new URLSearchParams({
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      course: courses.find(c => c.id === selectedCourse)?.name || selectedCourse,
    })
    
    router.push(`/payment?${params.toString()}`)
  }

  const selectedCourseData = courses.find((course) => course.id === selectedCourse)
  const originalPrice = selectedCourseData?.price || 0
  const discountAmount = (originalPrice * discount) / 100
  const finalPrice = originalPrice - discountAmount

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
            <Button className="bg-[#b9ee44] text-[#173104] hover:bg-[#a8d93a] text-sm px-6 py-2 font-semibold shadow-lg">
              APPLY NOW
            </Button>
          </div>
        </div>
      </header>

      {/* Promotional Banner */}
      <section className="bg-gradient-to-r from-[#b9ee44] to-[#a8d93f] py-3 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center space-x-4 text-[#173104] font-bold text-sm">
            <Percent className="w-4 h-4" />
            <span>🎯 Use code SUPERTECH for 15% off your enrollment!</span>
          </div>
        </div>
      </section>

      {/* Application Hero */}
      <section className="bg-gradient-to-br from-purple-100/30 via-blue-50/40 to-green-50/30 py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-gradient-to-r from-[#b9ee44]/5 via-transparent to-[#b9ee44]/5"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,_#b9ee44_0.1px,_transparent_0.1px)] bg-[length:60px_60px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <Badge className="bg-[#b9ee44]/20 text-[#173104] mb-4">Application</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Start Your <span className="text-[#173104]">Tech Career Journey</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take the first step towards a rewarding career in technology. Our admissions team will guide you through the
            process and help you choose the perfect program.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Application Form */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-[#173104]/20 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">Application Form</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <User className="w-5 h-5 mr-2 text-[#173104]" />
                        Personal Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input 
                            type="text" 
                            id="firstName" 
                            placeholder="Enter your first name" 
                            className="mt-1"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input 
                            type="text" 
                            id="lastName" 
                            placeholder="Enter your last name" 
                            className="mt-1"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input 
                            type="email" 
                            id="email" 
                            placeholder="your.email@example.com" 
                            className="mt-1"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input 
                            type="tel" 
                            id="phone" 
                            placeholder="+370 600 12345" 
                            className="mt-1"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="country">Country *</Label>
                          <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select your country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="lt">Lithuania</SelectItem>
                              <SelectItem value="lv">Latvia</SelectItem>
                              <SelectItem value="ee">Estonia</SelectItem>
                              <SelectItem value="pl">Poland</SelectItem>
                              <SelectItem value="de">Germany</SelectItem>
                              <SelectItem value="fr">France</SelectItem>
                              <SelectItem value="es">Spain</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="city">City *</Label>
                          <Input 
                            type="text" 
                            id="city" 
                            placeholder="Enter your city" 
                            className="mt-1"
                            value={formData.city}
                            onChange={(e) => handleInputChange('city', e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Educational Background */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <GraduationCap className="w-5 h-5 mr-2 text-[#173104]" />
                        Educational Background
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="education">Highest Education Level *</Label>
                          <Select value={formData.education} onValueChange={(value) => handleInputChange('education', value)}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select education level" />
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
                            type="text"
                            id="field"
                            placeholder="e.g., Computer Science, Business"
                            className="mt-1"
                            value={formData.field}
                            onChange={(e) => handleInputChange('field', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Professional Experience */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Briefcase className="w-5 h-5 mr-2 text-[#173104]" />
                        Professional Experience
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="experience">Years of Work Experience *</Label>
                          <Select value={formData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select experience level" />
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
                          <Label htmlFor="currentRole">Current Role/Industry</Label>
                          <Input
                            type="text"
                            id="currentRole"
                            placeholder="e.g., Marketing Manager, Student"
                            className="mt-1"
                            value={formData.currentRole}
                            onChange={(e) => handleInputChange('currentRole', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Course Selection */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Target className="w-5 h-5 mr-2 text-[#173104]" />
                        Course Selection
                      </h3>
                      <div>
                        <Label htmlFor="course">Preferred Program *</Label>
                        <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select your preferred program" />
                          </SelectTrigger>
                          <SelectContent>
                            {courses.map((course) => (
                              <SelectItem key={course.id} value={course.id}>
                                {course.name} - €{course.price} ({course.duration})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Promo Code Section */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Percent className="w-5 h-5 mr-2 text-[#173104]" />
                        Promo Code
                      </h3>
                      <div className="flex gap-2">
                        <Input
                          type="text"
                          placeholder="Enter promo code (e.g., SUPERTECH)"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          className="flex-1"
                        />
                        <Button
                          type="button"
                          onClick={applyPromoCode}
                          className="bg-[#173104] text-white hover:bg-[#2d5a1a]"
                        >
                          Apply
                        </Button>
                      </div>
                      {discount > 0 && (
                        <div className="mt-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                          <p className="text-green-800 font-semibold">
                            ✅ Promo code applied! You save {discount}% (€{discountAmount.toFixed(2)})
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Motivation */}
                    <div>
                      <Label htmlFor="motivation">Why are you interested in this program? *</Label>
                      <Textarea
                        id="motivation"
                        placeholder="Tell us about your career goals and why you chose this program..."
                        className="mt-1 min-h-[100px]"
                        value={formData.motivation}
                        onChange={(e) => handleInputChange('motivation', e.target.value)}
                        required
                      />
                    </div>

                    {/* Terms and Conditions */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <Checkbox 
                          id="terms" 
                          className="mt-1"
                          checked={formData.terms}
                          onCheckedChange={(checked) => handleInputChange('terms', checked as boolean)}
                          required
                        />
                        <Label htmlFor="terms" className="text-sm leading-relaxed">
                          I agree to the{" "}
                          <Link href="/terms-conditions" className="text-[#173104] hover:underline">
                            Terms & Conditions
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy-policy" className="text-[#173104] hover:underline">
                            Privacy Policy
                          </Link>
                        </Label>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox 
                          id="marketing" 
                          className="mt-1"
                          checked={formData.marketing}
                          onCheckedChange={(checked) => handleInputChange('marketing', checked as boolean)}
                        />
                        <Label htmlFor="marketing" className="text-sm leading-relaxed">
                          I would like to receive updates about courses, events, and career opportunities
                        </Label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#173104] to-[#2d5a1a] text-white py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-shadow"
                    >
                      Continue to Payment (€50 Application Fee)
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Application Fee Notice */}
              <Card className="border-2 border-[#173104]/20 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Application Fee</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-lg font-bold text-[#173104]">
                      <span>Application Fee:</span>
                      <span>€50.00</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      One-time application processing fee. This fee is separate from course tuition and covers application review and administrative costs.
                    </p>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm text-blue-800 font-semibold">
                        💳 Secure payment processing with Stripe
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Price Summary */}
              {selectedCourse && (
                <Card className="border-2 border-[#173104]/20 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Course Price Summary</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Course Fee:</span>
                        <span className="font-semibold">€{originalPrice}</span>
                      </div>
                      {discount > 0 && (
                        <div className="flex justify-between text-green-600">
                          <span>Discount ({discount}%):</span>
                          <span>-€{discountAmount.toFixed(2)}</span>
                        </div>
                      )}
                      <div className="border-t pt-3 flex justify-between text-lg font-bold text-[#173104]">
                        <span>Course Total:</span>
                        <span>€{finalPrice.toFixed(2)}</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
                        Includes all materials, certification fees, and career support
                      </p>
                      <p className="text-sm text-[#173104] font-semibold">Payment plans available after admission</p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* What Happens Next */}
              <Card className="border-2 border-[#173104]/20 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">What Happens Next?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#b9ee44] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-[#173104]">1</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Pay Application Fee</p>
                        <p className="text-sm text-gray-600">Secure €50 payment to process your application</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#b9ee44] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-[#173104]">2</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Application Review</p>
                        <p className="text-sm text-gray-600">We'll review your application within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#b9ee44] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-[#173104]">3</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Skills Assessment</p>
                        <p className="text-sm text-gray-600">Complete a brief online assessment</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#b9ee44] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-[#173104]">4</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Admission Decision</p>
                        <p className="text-sm text-gray-600">Receive your admission decision and next steps</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Support */}
              <Card className="border-2 border-[#173104]/20 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Need Help?</h3>
                  <p className="text-gray-600 mb-4">
                    Our admissions team is here to help you with any questions about the application process.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-[#173104]" />
                      <span>+370 600 12345</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-[#173104]" />
                      <span>admissions@gitb.lt</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50/50 to-blue-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Join Our <span className="text-[#173104]">Success Stories</span>
            </h2>
            <p className="text-lg text-gray-600">See what our graduates have achieved</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-[#173104]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Sarah M.</h3>
                <p className="text-[#173104] font-semibold mb-2">Cybersecurity Analyst</p>
                <p className="text-gray-600 text-sm">
                  "GITB's program got me a €55K role at a major Frankfurt bank within 3 months of graduation."
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-[#173104]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Marcus K.</h3>
                <p className="text-[#173104] font-semibold mb-2">UX Designer</p>
                <p className="text-gray-600 text-sm">
                  "The hands-on approach and industry connections helped me land my dream job at a tech startup."
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-[#173104]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Elena R.</h3>
                <p className="text-[#173104] font-semibold mb-2">Compliance Officer</p>
                <p className="text-gray-600 text-sm">
                  "The KYC program opened doors I never thought possible. I was promoted within 6 months."
                </p>
              </CardContent>
            </Card>
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
                  className="h-10 w-auto mb-6 cursor-pointer brightness-0 invert"
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
                <p>admissions@gitb.lt</p>
                <p>Eduardo, E. Andrė g. 14-5, 02231 Vilnius, Lithuania</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
