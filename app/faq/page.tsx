"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, HelpCircle, CreditCard, Award, Globe, Users, BookOpen, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "@/hooks/useTranslation"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"

export default function FAQPage() {
  const { t } = useTranslation()

  const faqCategories = [
    {
      title: "General Information",
      icon: <HelpCircle className="w-6 h-6" />,
      questions: [
        {
          question: "What is GITB and what makes it different?",
          answer:
            "GITB (Global Institute of Tech and Business) is Europe's leading provider of industry-focused technology education. We bridge the gap between academic learning and real-world professional demands with EU-recognized programs, industry partnerships, and a 92% job placement rate.",
        },
        {
          question: "Are GITB programs recognized across the European Union?",
          answer:
            "Yes, all GITB programs are officially recognized across the EU through our compliance with the European Qualifications Framework (EQF), ECTS Credit Transfer System, and Bologna Process. Our certifications are valued by employers throughout Europe.",
        },
        {
          question: "What languages are courses offered in?",
          answer:
            "Most of our tech and business courses are conducted in English. We also offer specialized language programs in French, Spanish, and Lithuanian. All instructors are fluent in English and many speak additional European languages.",
        },
        {
          question: "Can I study while working full-time?",
          answer:
            "Yes! Our programs are designed for working professionals. Classes are scheduled in the evenings and weekends, with flexible online learning options. Most students successfully complete their programs while maintaining their current employment.",
        },
      ],
    },
    {
      title: "Admissions & Applications",
      icon: <Users className="w-6 h-6" />,
      questions: [
        {
          question: "What are the admission requirements?",
          answer:
            "Requirements vary by program, but generally include: completion of secondary education, basic English proficiency, motivation statement, and relevant work experience (preferred but not required). We evaluate each application holistically.",
        },
        {
          question: "How long does the application process take?",
          answer:
            "Our streamlined process takes just 48 hours from submission to decision. You'll submit your application online, pay the €50 fee, and receive confirmation within 2 business days.",
        },
        {
          question: "What is the €50 application fee for?",
          answer:
            "The €50 application fee covers administrative costs and ensures serious applications. This fee is fully deducted from your tuition upon enrollment, making it essentially risk-free to apply.",
        },
        {
          question: "Can I apply for multiple programs?",
          answer:
            "Yes, you can apply for multiple programs, but we recommend focusing on one that best aligns with your career goals. Our admissions counselors can help you choose the most suitable program during your consultation.",
        },
      ],
    },
    {
      title: "Programs & Curriculum",
      icon: <BookOpen className="w-6 h-6" />,
      questions: [
        {
          question: "How long are the programs?",
          answer:
            "Program duration varies: KYC Compliance (2 months), UI/UX Design (3 months), IAM (3 months), Language Programs (3-6 months), Cybersecurity (4 months). Each program is intensive and focused on practical skills.",
        },
        {
          question: "What certifications will I earn?",
          answer:
            "You'll earn a GITB diploma plus industry certifications like CompTIA Security+, CompTIA PenTest+, Google UX Design Certificate, CIAM, CKYCA, and language certifications (DELF, DELE, LKI) depending on your program.",
        },
        {
          question: "Are classes live or pre-recorded?",
          answer:
            "Classes are primarily live and interactive, allowing real-time engagement with instructors and peers. All sessions are recorded for review, and you'll have 24/7 access to learning materials and resources.",
        },
        {
          question: "What kind of projects will I work on?",
          answer:
            "You'll work on real-world projects that mirror actual industry scenarios. Examples include security assessments, UI/UX design portfolios, compliance frameworks, and language proficiency demonstrations for real companies.",
        },
      ],
    },
    {
      title: "Costs & Payment",
      icon: <CreditCard className="w-6 h-6" />,
      questions: [
        {
          question: "How much do programs cost?",
          answer:
            "Program costs vary by duration and specialization. Contact our admissions team for detailed pricing. We offer flexible payment plans and the €50 application fee is deducted from your tuition upon enrollment.",
        },
        {
          question: "Do you offer payment plans?",
          answer:
            "Yes, we offer flexible payment options including monthly installments, employer sponsorship programs, and early-bird discounts. Our financial advisors will work with you to find a suitable payment structure.",
        },
        {
          question: "Are there any hidden fees?",
          answer:
            "No hidden fees. The program cost includes all learning materials, certification exam fees, career coaching, and job placement support. The only additional cost is the €50 application fee (which is deducted from tuition).",
        },
        {
          question: "Do you offer scholarships or financial aid?",
          answer:
            "We offer merit-based scholarships for exceptional candidates and need-based financial assistance for qualifying students. Additionally, many employers sponsor their employees' education at GITB.",
        },
      ],
    },
    {
      title: "Career Support & Job Placement",
      icon: <Award className="w-6 h-6" />,
      questions: [
        {
          question: "What is your job placement rate?",
          answer:
            "We maintain a 92% job placement rate within 6 months of graduation. Our extensive network of 500+ partner companies across Europe actively recruits our graduates for high-demand positions.",
        },
        {
          question: "What kind of career support do you provide?",
          answer:
            "Comprehensive career support including: resume optimization, interview preparation, LinkedIn profile enhancement, salary negotiation coaching, direct introductions to hiring managers, and lifetime alumni network access.",
        },
        {
          question: "What is the average salary increase after graduation?",
          answer:
            "Our graduates see an average salary increase of 40-60% within the first year. Starting salaries typically range from €35,000-€65,000 depending on the program, location, and experience level.",
        },
        {
          question: "Can you help me find remote work opportunities?",
          answer:
            "Many of our partner companies offer remote and hybrid positions. We specifically prepare students for the remote work environment and connect them with companies embracing distributed teams.",
        },
      ],
    },
    {
      title: "Technical Requirements",
      icon: <Globe className="w-6 h-6" />,
      questions: [
        {
          question: "What equipment do I need?",
          answer:
            "You'll need a reliable computer (Windows, Mac, or Linux), stable internet connection, webcam, and microphone. Specific software requirements vary by program and are provided upon enrollment. We can recommend suitable hardware if needed.",
        },
        {
          question: "Do you provide software licenses?",
          answer:
            "Yes, we provide access to all necessary software, cloud platforms, and development tools. This includes licenses for professional software like Adobe Creative Suite, Microsoft Office, and specialized industry tools.",
        },
        {
          question: "What if I have technical difficulties?",
          answer:
            "We provide 24/7 technical support through our dedicated IT helpdesk. Additionally, each cohort has technical mentors available during class hours to assist with any software or connectivity issues.",
        },
        {
          question: "Can I access course materials after graduation?",
          answer:
            "Yes, graduates maintain lifetime access to course materials, recorded sessions, and our alumni resource library. You'll also receive updates when curriculum is refreshed to keep your knowledge current.",
        },
      ],
    },
  ]

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
              <Link href="/faq" className="text-[#b9ee44] font-semibold">
                {t("nav.faq")}
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <LanguageSwitcher />
            <Link href="/application">
              <Button className="bg-gradient-to-r from-[#b9ee44] to-[#a8d93f] text-[#173104] hover:from-[#a8d93f] hover:to-[#97c73a] text-sm px-6 py-2 font-bold rounded-lg shadow-lg transition-all">
                {t("nav.registerNow")}
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#b9ee44] to-[#a8d93f] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#173104] mb-6">
            Frequently Asked <span className="text-white">Questions</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#173104]/80 max-w-3xl mx-auto mb-8">
            Find answers to common questions about GITB programs, admissions, and career support
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-white/20 text-[#173104] px-4 py-2 border-0">Instant Answers</Badge>
            <Badge className="bg-white/20 text-[#173104] px-4 py-2 border-0">Expert Support</Badge>
            <Badge className="bg-white/20 text-[#173104] px-4 py-2 border-0">24/7 Help Available</Badge>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                      <div className="text-[#173104]">{category.icon}</div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                  </div>

                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`${categoryIndex}-${faqIndex}`}
                        className="border border-gray-200 rounded-lg px-6"
                      >
                        <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-[#173104] transition-colors">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pt-4">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              GITB by the <span className="text-[#173104]">Numbers</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">Our track record speaks for itself</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <div className="text-3xl sm:text-4xl font-bold text-[#173104] mb-2">5,000+</div>
              <div className="text-sm sm:text-base text-gray-600">Graduates</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <div className="text-3xl sm:text-4xl font-bold text-[#173104] mb-2">92%</div>
              <div className="text-sm sm:text-base text-gray-600">Job Placement Rate</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <div className="text-3xl sm:text-4xl font-bold text-[#173104] mb-2">500+</div>
              <div className="text-sm sm:text-base text-gray-600">Partner Companies</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <div className="text-3xl sm:text-4xl font-bold text-[#173104] mb-2">15</div>
              <div className="text-sm sm:text-base text-gray-600">EU Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#173104] to-[#2d5a1a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-lg sm:text-xl text-green-100 mb-12">
            Our admissions team is here to help you find the perfect program for your career goals
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-[#b9ee44]/30 shadow-lg hover:shadow-xl transition-shadow bg-white/10 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-[#b9ee44] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-[#173104]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Schedule a Call</h3>
                <p className="text-green-100 mb-6">Speak with our admissions counselors for personalized guidance</p>
                <Button className="w-full bg-[#b9ee44] text-[#173104] hover:bg-[#a8d93f] transition-all font-bold">
                  <Phone className="w-4 h-4 mr-2" />
                  +370 600 12345
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#b9ee44]/30 shadow-lg hover:shadow-xl transition-shadow bg-white/10 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-[#b9ee44] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-[#173104]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Send an Email</h3>
                <p className="text-green-100 mb-6">Get detailed information about programs and requirements</p>
                <Button className="w-full bg-[#b9ee44] text-[#173104] hover:bg-[#a8d93f] transition-all font-bold">
                  <Mail className="w-4 h-4 mr-2" />
                  admissions@gitb.lt
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-green-100 mb-6">
              Join thousands of students who have transformed their careers with GITB
            </p>
            <Link href="/application">
              <Button className="bg-gradient-to-r from-[#b9ee44] to-[#a8d93f] text-[#173104] px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-shadow font-bold">
                Start Your Application
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
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
