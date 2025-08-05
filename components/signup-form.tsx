"use client"

import { CardContent } from "@/components/ui/card"

import { Card } from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Phone, ArrowRight } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"
import Link from "next/link"

export function SignupForm() {
  const { t } = useTranslation()

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-[#daff7d]/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-r from-[#daff7d]/5 via-transparent to-[#daff7d]/5"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,_#daff7d_0.1px,_transparent_0.1px)] bg-[length:60px_60px]"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">{t("signupForm.title")}</h2>
          <p className="text-lg sm:text-xl text-gray-600">{t("signupForm.description")}</p>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0 rounded-2xl">
          <CardContent className="p-8">
            <form className="grid sm:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                  {t("signupForm.fullName")}
                </Label>
                <Input type="text" id="name" placeholder="Enter your full name" className="mt-1 block w-full text-sm" />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  {t("signupForm.email")}
                </Label>
                <Input type="email" id="email" placeholder="Enter your email" className="mt-1 block w-full text-sm" />
              </div>
              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700 flex items-center">
                  {t("signupForm.phoneNumber")}
                  <Phone className="w-4 h-4 ml-1 text-gray-500" />
                </Label>
                <Input type="tel" id="phone" placeholder="+370 600 12345" className="mt-1 block w-full text-sm" />
              </div>
              <div className="flex items-center mt-6">
                <Checkbox id="terms" className="mr-2" />
                <Label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                  {t("signupForm.termsAgreement")}
                  <Link href="/privacy-policy" className="text-[#1a5f3f] hover:underline">
                    Privacy Policy
                  </Link>
                </Label>
              </div>
              <div className="sm:col-span-2">
                <Button className="w-full bg-gradient-to-r from-[#1a5f3f] to-[#2d7a5a] text-white hover:from-[#145033] hover:to-[#246647] text-sm font-semibold py-3 rounded-xl shadow-lg transition-all">
                  {t("signupForm.signUpNow")}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
