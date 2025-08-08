"use client"

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Download, Mail, Home } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function PaymentSuccessPage() {
  const [paymentDetails, setPaymentDetails] = useState({
    transactionId: '',
    amount: '€50.00',
    date: '',
  })

  useEffect(() => {
    // Generate mock payment details
    const now = new Date()
    setPaymentDetails({
      transactionId: `GITB-${Date.now()}`,
      amount: '€50.00',
      date: now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    })
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#173104]/90 to-[#2d5a1a]/90 backdrop-blur-sm text-white px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Image
              src="/images/gitb-logo-simple.png"
              alt="GITB Logo"
              width={120}
              height={40}
              className="h-10 w-auto cursor-pointer brightness-0 invert"
            />
          </Link>
        </div>
      </header>

      {/* Success Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          <Badge className="bg-green-100 text-green-800 mb-4">Payment Successful</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Application Fee Paid Successfully!
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Thank you for your payment. Your application has been submitted and our admissions team will review it within 24 hours.
          </p>

          {/* Payment Details Card */}
          <Card className="border-2 border-green-200 shadow-xl mb-12 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Details</h2>
              <div className="space-y-4 text-left">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Transaction ID:</span>
                  <span className="font-mono text-sm bg-gray-100 px-3 py-1 rounded">
                    {paymentDetails.transactionId}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Amount Paid:</span>
                  <span className="font-bold text-[#173104] text-lg">{paymentDetails.amount}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Payment Date:</span>
                  <span className="font-semibold">{paymentDetails.date}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">Status:</span>
                  <Badge className="bg-green-100 text-green-800">Completed</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-[#173104]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Check Your Email</h3>
                <p className="text-gray-600 text-sm">
                  A confirmation email with your receipt and next steps has been sent to your email address.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-[#173104]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Application Review</h3>
                <p className="text-gray-600 text-sm">
                  Our admissions team will review your application and contact you within 24 hours.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#173104]/10 to-[#b9ee44]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-[#173104]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Download Receipt</h3>
                <p className="text-gray-600 text-sm">
                  Download your payment receipt for your records and tax purposes.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-[#173104] to-[#2d5a1a] text-white px-8 py-3 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
              <Download className="w-5 h-5 mr-2" />
              Download Receipt
            </Button>
            <Button variant="outline" className="border-[#173104] text-[#173104] hover:bg-[#173104] hover:text-white px-8 py-3 text-lg rounded-xl">
              <Home className="w-5 h-5 mr-2" />
              <Link href="/">Return to Home</Link>
            </Button>
          </div>

          {/* Contact Support */}
          <div className="mt-16 p-6 bg-gray-50 rounded-xl">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Need Help?</h3>
            <p className="text-gray-600 mb-4">
              If you have any questions about your application or payment, our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#173104]" />
                <span>admissions@gitb.lt</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span>+370 600 12345</span>
              </div>
            </div>
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
