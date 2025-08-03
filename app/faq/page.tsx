"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, ArrowRight, ChevronDown, ChevronUp, HelpCircle, Clock, Euro, Award, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What is GITB and what makes it different?",
          answer:
            "GITB (Global Institute of Tech and Business) is Lithuania's premier technology education provider. We focus exclusively on job-ready skills with industry-recognized certifications, small class sizes, and direct connections to European employers. Our 92% job placement rate speaks to our effectiveness.",
        },
        {
          question: "Are your programs recognized across Europe?",
          answer:
            "Yes! Our certifications are industry-standard and recognized across all EU countries. We partner with major certification bodies like CompTIA, Google, and others to ensure your credentials are valued by employers throughout Europe.",
        },
        {
          question: "Do I need prior experience to enroll?",
          answer:
            "No prior experience is required for most of our programs. We design our courses for complete beginners, career switchers, and professionals looking to upskill. Our assessment process helps us recommend the best program for your current skill level.",
        },
      ],
    },
    {
      category: "Courses & Curriculum",
      questions: [
        {
          question: "How long are the programs?",
          answer:
            "Program lengths vary: Cybersecurity (4 months), UI/UX Design (3 months), IAM Specialist (3 months), KYC Compliance (2 months), and European Languages (3 months per language). All programs are part-time to accommodate working professionals.",
        },
        {
          question: "What's included in the course fees?",
          answer:
            "Course fees include all learning materials, lab access, certification exam vouchers, career support, and lifetime access to our alumni network. The only additional cost is the €50 registration fee.",
        },
        {
          question: "Can I take multiple courses?",
          answer:
            "Many students combine technical courses with language training. We offer discounts for multiple course enrollments and can create custom learning paths based on your career goals.",
        },
      ],
    },
    {
      category: "Pricing & Payment",
      questions: [
        {
          question: "What are the course prices?",
          answer:
            "Technical courses range from €1,350-€1,400 total (including certification fees). European Languages are €300 per language. We offer flexible payment plans and a 15% discount with code SUPERTECH for new enrollments.",
        },
        {
          question: "Do you offer payment plans?",
          answer:
            "Yes! We offer flexible monthly payment options. Technical courses can be split into 2-4 monthly payments, and language courses are €100/month for 3 months. No interest or additional fees for payment plans.",
        },
        {
          question: "Is there financial aid available?",
          answer:
            "We offer several financial assistance options including early bird discounts, multi-course discounts, and payment deferrals for qualifying students. Contact our admissions team to discuss your specific situation.",
        },
      ],
    },
    {
      category: "Career Support",
      questions: [
        {
          question: "What kind of job support do you provide?",
          answer:
            "We provide comprehensive career support including resume optimization, interview preparation, portfolio development, and direct introductions to our 500+ partner companies across Europe. Our career services are available for life.",
        },
        {
          question: "What's your job placement rate?",
          answer:
            "We maintain a 92% job placement rate within 6 months of graduation. Our graduates work at companies like Google, Microsoft, major European banks, consulting firms, and growing startups across 15 EU countries.",
        },
        {
          question: "What salaries can I expect?",
          answer:
            "Starting salaries vary by role and location: Cybersecurity (€45-60K), UI/UX Design (€40-55K), IAM Specialist (€48-65K), KYC Compliance (€42-58K). These are above-market averages due to our industry focus and certification requirements.",
        },
      ],
    },
  ]

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
              <Link href="/faq" className="text-[#b9ee44] font-semibold">
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
          <Badge className="bg-[#b9ee44]/20 text-[#173104] mb-4">FAQ</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-[#173104]">Questions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about our programs, pricing, and career support services.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-lg flex items-center justify-center mr-4">
                  {categoryIndex === 0 && <HelpCircle className="w-6 h-6 text-[#173104]" />}
                  {categoryIndex === 1 && <Clock className="w-6 h-6 text-[#173104]" />}
                  {categoryIndex === 2 && <Euro className="w-6 h-6 text-[#173104]" />}
                  {categoryIndex === 3 && <Award className="w-6 h-6 text-[#173104]" />}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
              </div>

              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 10 + faqIndex
                  return (
                    <Card
                      key={faqIndex}
                      className="border-2 border-gray-100 hover:border-[#173104]/20 transition-colors"
                    >
                      <CardContent className="p-0">
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                          {openFAQ === globalIndex ? (
                            <ChevronUp className="w-5 h-5 text-[#173104] flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-[#173104] flex-shrink-0" />
                          )}
                        </button>
                        {openFAQ === globalIndex && (
                          <div className="px-6 pb-6">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50/50 to-blue-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              GITB by the <span className="text-[#173104]">Numbers</span>
            </h2>
            <p className="text-lg text-gray-600">Key facts about our programs and outcomes</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-[#173104] mb-2">92%</div>
                <div className="text-gray-600">Job Placement Rate</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-[#173104] mb-2">€45K</div>
                <div className="text-gray-600">Average Starting Salary</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-[#173104] mb-2">500+</div>
                <div className="text-gray-600">Partner Companies</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-[#173104] mb-2">15</div>
                <div className="text-gray-600">EU Countries</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our admissions team is here to help you find the perfect program for your career goals.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-[#173104]/20 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-[#173104]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Call Us</h3>
                <p className="text-gray-600 mb-4">Speak directly with our admissions counselors</p>
                <p className="text-[#173104] font-semibold">+370 600 12345</p>
                <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM CET</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#173104]/20 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-[#173104]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Schedule a Call</h3>
                <p className="text-gray-600 mb-4">Book a personalized consultation session</p>
                <Button className="bg-gradient-to-r from-[#173104] to-[#2d5a1a] text-white px-6 py-2 rounded-lg">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/application">
              <Button className="bg-gradient-to-r from-[#173104] to-[#2d5a1a] text-white px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/courses">
              <Button
                variant="outline"
                className="border-2 border-[#173104] text-[#173104] hover:bg-[#b9ee44]/10 px-8 py-4 text-lg rounded-xl bg-transparent"
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
