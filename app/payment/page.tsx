"use client"

import { useState, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, CreditCard, Shield, ArrowLeft } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useRouter, useSearchParams } from 'next/navigation'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface PaymentFormProps {
  applicationData: any
}

function PaymentForm({ applicationData }: PaymentFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [clientSecret, setClientSecret] = useState<string>('')

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: 50, // 50 euros application fee
        currency: 'eur',
        metadata: {
          applicantName: applicationData?.name || 'Unknown',
          course: applicationData?.course || 'Unknown',
          email: applicationData?.email || 'Unknown',
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret)
      })
      .catch((err) => {
        setError('Failed to initialize payment')
        console.error('Payment initialization error:', err)
      })
  }, [applicationData])

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsLoading(true)
    setError(null)

    const cardElement = elements.getElement(CardElement)

    if (!cardElement) {
      setError('Card element not found')
      setIsLoading(false)
      return
    }

    const { error: submitError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: applicationData?.name || '',
          email: applicationData?.email || '',
        },
      },
    })

    if (submitError) {
      setError(submitError.message || 'Payment failed')
      setIsLoading(false)
    } else {
      // Payment succeeded
      router.push('/payment/success')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="p-4 border border-gray-200 rounded-lg">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
            },
          }}
        />
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      )}

      <Button
        type="submit"
        disabled={!stripe || isLoading}
        className="w-full bg-gradient-to-r from-[#173104] to-[#2d5a1a] text-white py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-shadow"
      >
        {isLoading ? (
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Processing Payment...</span>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <CreditCard className="w-5 h-5" />
            <span>Pay €50 Application Fee</span>
          </div>
        )}
      </Button>
    </form>
  )
}

export default function PaymentPage() {
  const searchParams = useSearchParams()
  const [applicationData, setApplicationData] = useState<any>(null)

  useEffect(() => {
    // In a real application, you would fetch the application data
    // based on a session ID or application ID from the URL params
    const mockData = {
      name: searchParams.get('name') || 'John Doe',
      email: searchParams.get('email') || 'john@example.com',
      course: searchParams.get('course') || 'Cybersecurity Professional',
    }
    setApplicationData(mockData)
  }, [searchParams])

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
          <Link href="/application" className="flex items-center space-x-2 text-sm hover:text-[#b9ee44] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Application</span>
          </Link>
        </div>
      </header>

      {/* Payment Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-[#b9ee44]/20 text-[#173104] mb-4">Secure Payment</Badge>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Complete Your Application</h1>
            <p className="text-lg text-gray-600">
              Pay the application fee to finalize your enrollment process
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Payment Form */}
            <div>
              <Card className="border-2 border-[#173104]/20 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-[#173104]" />
                    <span>Secure Payment</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Elements stripe={stripePromise}>
                    <PaymentForm applicationData={applicationData} />
                  </Elements>
                </CardContent>
              </Card>

              {/* Security Features */}
              <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>SSL Encrypted</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>PCI Compliant</span>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <Card className="border-2 border-[#173104]/20 shadow-lg">
                <CardHeader>
                  <CardTitle>Application Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {applicationData && (
                    <>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Applicant:</span>
                        <span className="font-semibold">{applicationData.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Email:</span>
                        <span className="font-semibold">{applicationData.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Program:</span>
                        <span className="font-semibold">{applicationData.course}</span>
                      </div>
                    </>
                  )}
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-bold text-[#173104]">
                      <span>Application Fee:</span>
                      <span>€50.00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#173104]/20 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4">What happens next?</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#b9ee44] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-[#173104]">1</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Payment Confirmation</p>
                        <p className="text-sm text-gray-600">You'll receive an email confirmation immediately</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#b9ee44] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-[#173104]">2</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Application Review</p>
                        <p className="text-sm text-gray-600">Our team will review your application within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#b9ee44] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-[#173104]">3</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Enrollment Decision</p>
                        <p className="text-sm text-gray-600">You'll receive your admission decision and next steps</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
