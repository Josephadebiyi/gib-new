"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Cookie, Settings, BarChart, Target, Phone, Mail, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "@/hooks/useTranslation"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"

export default function CookiePolicyPage() {
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
              <Cookie className="w-10 h-10 text-[#1a5f3f]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Cookie Policy</h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-4">
              Learn about how we use cookies and similar technologies to improve your experience on our website.
            </p>
            <p className="text-sm text-gray-500">Last updated: January 2024</p>
          </div>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* What Are Cookies */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/20 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                    <Cookie className="w-6 h-6 text-[#1a5f3f]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">What Are Cookies?</h2>
                </div>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Cookies are small text files that are stored on your device when you visit our website. They help us
                    provide you with a better experience by remembering your preferences and understanding how you use
                    our site.
                  </p>
                  <p>
                    We use both first-party cookies (set by GITB) and third-party cookies (set by our partners) to
                    enhance functionality, analyze usage, and provide personalized content.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Types of Cookies */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
                <div className="space-y-6">
                  {/* Essential Cookies */}
                  <div className="border-l-4 border-[#1a5f3f] pl-6">
                    <div className="flex items-center mb-3">
                      <Settings className="w-5 h-5 text-[#1a5f3f] mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900">Essential Cookies</h3>
                    </div>
                    <p className="text-gray-600 mb-3">
                      These cookies are necessary for the website to function properly and cannot be disabled.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Session management and user authentication</li>
                      <li>Security features and fraud prevention</li>
                      <li>Language preferences and accessibility settings</li>
                      <li>Shopping cart functionality for course enrollment</li>
                    </ul>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-center mb-3">
                      <BarChart className="w-5 h-5 text-blue-500 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900">Analytics Cookies</h3>
                    </div>
                    <p className="text-gray-600 mb-3">
                      These cookies help us understand how visitors interact with our website.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Google Analytics for website traffic analysis</li>
                      <li>Page views, bounce rates, and user journey tracking</li>
                      <li>Performance monitoring and error reporting</li>
                      <li>A/B testing for website improvements</li>
                    </ul>
                  </div>

                  {/* Functional Cookies */}
                  <div className="border-l-4 border-green-500 pl-6">
                    <div className="flex items-center mb-3">
                      <Settings className="w-5 h-5 text-green-500 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900">Functional Cookies</h3>
                    </div>
                    <p className="text-gray-600 mb-3">
                      These cookies enable enhanced functionality and personalization.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Remember your login status and preferences</li>
                      <li>Save your course interests and application progress</li>
                      <li>Customize content based on your location</li>
                      <li>Enable social media sharing features</li>
                    </ul>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="border-l-4 border-purple-500 pl-6">
                    <div className="flex items-center mb-3">
                      <Target className="w-5 h-5 text-purple-500 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900">Marketing Cookies</h3>
                    </div>
                    <p className="text-gray-600 mb-3">
                      These cookies are used to deliver relevant advertisements and track campaign effectiveness.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Facebook Pixel for targeted advertising</li>
                      <li>Google Ads conversion tracking</li>
                      <li>LinkedIn advertising and remarketing</li>
                      <li>Email marketing campaign tracking</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Third-Party Cookies */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Third-Party Services</h2>
                <div className="space-y-4 text-gray-600">
                  <p>We use several third-party services that may set their own cookies:</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Google Services</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Google Analytics</li>
                        <li>• Google Ads</li>
                        <li>• Google Tag Manager</li>
                        <li>• reCAPTCHA</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Social Media</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Facebook Pixel</li>
                        <li>• LinkedIn Insight Tag</li>
                        <li>• YouTube embedded videos</li>
                        <li>• Social sharing buttons</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Payment & Support</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Stripe payment processing</li>
                        <li>• Intercom chat support</li>
                        <li>• Calendly scheduling</li>
                        <li>• Zoom webinar integration</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Analytics & Testing</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Hotjar user behavior</li>
                        <li>• Optimizely A/B testing</li>
                        <li>• Mixpanel event tracking</li>
                        <li>• Segment data platform</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Managing Cookies */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Managing Your Cookie Preferences</h2>
                <div className="space-y-4 text-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900">Cookie Consent Tool</h3>
                  <p>
                    When you first visit our website, you'll see a cookie consent banner. You can choose which types of
                    cookies to accept or reject. You can change your preferences at any time by clicking the "Cookie
                    Settings" link in our footer.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mt-6">Browser Settings</h3>
                  <p>You can also manage cookies through your browser settings:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data
                    </li>
                    <li>
                      <strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data
                    </li>
                    <li>
                      <strong>Safari:</strong> Preferences → Privacy → Manage Website Data
                    </li>
                    <li>
                      <strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 mt-6">Opt-Out Links</h3>
                  <p>You can opt out of specific tracking services:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Google Analytics:{" "}
                      <a
                        href="https://tools.google.com/dlpage/gaoptout"
                        className="text-[#1a5f3f] hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Google Analytics Opt-out
                      </a>
                    </li>
                    <li>
                      Facebook:{" "}
                      <a
                        href="https://www.facebook.com/settings?tab=ads"
                        className="text-[#1a5f3f] hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Facebook Ad Preferences
                      </a>
                    </li>
                    <li>
                      LinkedIn:{" "}
                      <a
                        href="https://www.linkedin.com/psettings/advertising"
                        className="text-[#1a5f3f] hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn Ad Settings
                      </a>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Impact of Disabling Cookies */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Impact of Disabling Cookies</h2>
                <div className="space-y-4 text-gray-600">
                  <p>While you can disable cookies, please note that this may affect your experience on our website:</p>
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
                    <h4 className="font-semibold text-amber-800 mb-2">Potential Issues:</h4>
                    <ul className="list-disc list-inside space-y-1 text-amber-700 text-sm">
                      <li>You may need to log in repeatedly</li>
                      <li>Your preferences won't be saved</li>
                      <li>Some features may not work properly</li>
                      <li>You may see less relevant content</li>
                      <li>Application forms may not function correctly</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Updates to Policy */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We may update this Cookie Policy from time to time to reflect changes in our practices or for legal,
                    operational, or regulatory reasons. When we make changes, we will:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Update the "Last updated" date at the top of this policy</li>
                    <li>Notify you through our website or email if changes are significant</li>
                    <li>Request new consent if required by law</li>
                    <li>Provide clear information about what has changed</li>
                  </ul>
                  <p>
                    We encourage you to review this policy periodically to stay informed about our cookie practices.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-[#1a5f3f]/5 to-[#daff7d]/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions About Cookies</h2>
                <div className="space-y-4 text-gray-600">
                  <p>If you have any questions about our use of cookies or this policy, please contact us:</p>
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
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/cookie-policy" className="text-[#daff7d] font-semibold">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
