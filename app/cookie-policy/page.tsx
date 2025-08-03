"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, ArrowRight, Cookie, Settings, Eye, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CookiePolicyPage() {
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
            Cookie <span className="text-[#173104]">Policy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Learn about how we use cookies and similar technologies to improve your experience on our website.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: January 2024</p>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* What Are Cookies */}
            <Card className="border-2 border-[#173104]/20 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-lg flex items-center justify-center mr-4">
                    <Cookie className="w-6 h-6 text-[#173104]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">What Are Cookies?</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Cookies are small text files that are stored on your device when you visit our website. They help us
                  provide you with a better browsing experience by remembering your preferences, analyzing how you use
                  our site, and enabling certain functionality. Cookies do not contain any information that personally
                  identifies you, but personal information we store about you may be linked to the information stored in
                  and obtained from cookies.
                </p>
              </CardContent>
            </Card>

            {/* Types of Cookies */}
            <Card className="border-2 border-[#173104]/20 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-lg flex items-center justify-center mr-4">
                    <Settings className="w-6 h-6 text-[#173104]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Types of Cookies We Use</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Essential Cookies</h3>
                    <p className="text-gray-600 mb-3">
                      These cookies are necessary for the website to function properly and cannot be disabled.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Session management and user authentication</li>
                      <li>Security and fraud prevention</li>
                      <li>Load balancing and website functionality</li>
                      <li>Form submission and data validation</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Performance Cookies</h3>
                    <p className="text-gray-600 mb-3">
                      These cookies help us understand how visitors interact with our website.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Google Analytics for website traffic analysis</li>
                      <li>Page load times and performance monitoring</li>
                      <li>Error tracking and debugging information</li>
                      <li>User behavior and navigation patterns</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Functional Cookies</h3>
                    <p className="text-gray-600 mb-3">
                      These cookies enable enhanced functionality and personalization.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Language preferences and localization</li>
                      <li>User interface customization</li>
                      <li>Remember login status and preferences</li>
                      <li>Course progress and bookmarks</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Marketing Cookies</h3>
                    <p className="text-gray-600 mb-3">
                      These cookies are used to deliver relevant advertisements and track campaign effectiveness.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Google Ads and Facebook Pixel tracking</li>
                      <li>Retargeting and remarketing campaigns</li>
                      <li>Social media integration and sharing</li>
                      <li>Conversion tracking and attribution</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Third-Party Cookies */}
            <Card className="border-2 border-[#173104]/20 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-lg flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-[#173104]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Third-Party Cookies</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">We use several third-party services that may set their own cookies:</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Google Services</h3>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Google Analytics</li>
                        <li>• Google Ads</li>
                        <li>• Google Tag Manager</li>
                        <li>• reCAPTCHA</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Social Media</h3>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Facebook Pixel</li>
                        <li>• LinkedIn Insight Tag</li>
                        <li>• YouTube embedded videos</li>
                        <li>• Social sharing buttons</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mt-4">
                    These third parties have their own privacy policies and cookie practices. We recommend reviewing
                    their policies to understand how they use your data.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Managing Cookies */}
            <Card className="border-2 border-[#173104]/20 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-lg flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-[#173104]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Managing Your Cookie Preferences</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Browser Settings</h3>
                    <p className="text-gray-600 mb-3">
                      You can control cookies through your browser settings. Here's how to manage cookies in popular
                      browsers:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
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
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Cookie Consent</h3>
                    <p className="text-gray-600 mb-3">
                      When you first visit our website, you'll see a cookie consent banner where you can:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Accept all cookies for the full website experience</li>
                      <li>Customize your preferences by cookie category</li>
                      <li>Reject non-essential cookies (some features may be limited)</li>
                      <li>Change your preferences at any time using our cookie settings</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Opt-Out Options</h3>
                    <p className="text-gray-600 mb-3">You can opt out of specific tracking services:</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>
                        Google Analytics:{" "}
                        <a href="https://tools.google.com/dlpage/gaoptout" className="text-[#173104] hover:underline">
                          Google Analytics Opt-out
                        </a>
                      </li>
                      <li>
                        Google Ads:{" "}
                        <a href="https://adssettings.google.com" className="text-[#173104] hover:underline">
                          Ad Settings
                        </a>
                      </li>
                      <li>
                        Facebook:{" "}
                        <a href="https://www.facebook.com/settings?tab=ads" className="text-[#173104] hover:underline">
                          Facebook Ad Preferences
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Impact of Disabling Cookies */}
            <Card className="border-2 border-[#173104]/20 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Impact of Disabling Cookies</h2>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    While you can disable cookies, doing so may affect your experience on our website:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Essential Cookies Disabled</h3>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Login functionality may not work</li>
                        <li>• Forms may not submit properly</li>
                        <li>• Security features may be compromised</li>
                        <li>• Website may not function correctly</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Non-Essential Cookies Disabled</h3>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Preferences won't be remembered</li>
                        <li>• Less relevant content and ads</li>
                        <li>• Limited analytics and improvements</li>
                        <li>• Reduced personalization</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Updates to Cookie Policy */}
            <Card className="border-2 border-[#173104]/20 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other
                  operational, legal, or regulatory reasons. We will notify you of any material changes by posting the
                  updated policy on our website and updating the "Last updated" date. We encourage you to review this
                  policy periodically to stay informed about our use of cookies.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-2 border-[#173104]/20 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  If you have questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <strong>Global Institute of Tech and Business</strong>
                  </p>
                  <p>Email: privacy@gitb.eu</p>
                  <p>Phone: +370 600 12345</p>
                  <p>Address: Vilnius, Lithuania</p>
                </div>
                <p className="text-gray-600 mt-4">We will respond to your inquiry within 30 days.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#173104] to-[#2d5a1a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl text-green-100 mb-8">
            Your privacy matters to us. Join thousands of professionals advancing their careers with GITB.
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
