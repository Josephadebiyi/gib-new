"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useState, useEffect } from "react"
import { submitApplication } from "@/lib/api"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { getCourses } from "@/lib/api"
import type { Course } from "@/lib/supabase"

export default function ApplicationPage() {
  const { toast } = useToast()
  const [courses, setCourses] = useState<Course[]>([])
  const [loadingCourses, setLoadingCourses] = useState(true)
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    education_level: "",
    field_of_study: "",
    work_experience: "",
    current_role: "",
    preferred_course_id: "",
    motivation: "",
  })

  useEffect(() => {
    const fetchCourses = async () => {
      setLoadingCourses(true)
      const result = await getCourses()
      if (result.success) {
        setCourses(result.data)
      } else {
        toast({
          title: "Error fetching courses",
          description: result.error,
          variant: "destructive",
        })
      }
      setLoadingCourses(false)
    }
    fetchCourses()
  }, [toast])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const result = await submitApplication(formData)

    if (result.success) {
      toast({
        title: "Application Submitted!",
        description: "Your application has been successfully submitted. We will get back to you shortly.",
      })
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        education_level: "",
        field_of_study: "",
        work_experience: "",
        current_role: "",
        preferred_course_id: "",
        motivation: "",
      })
    } else {
      toast({
        title: "Application Failed",
        description: result.error,
        variant: "destructive",
      })
    }
  }

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
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Course <span className="text-[#173104]">Application</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fill out the form below to apply for your desired course.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Your Application Details</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="full_name" className="mb-1 block">Full Name</Label>
                  <Input
                    id="full_name"
                    type="text"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="mb-1 block">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="mb-1 block">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="country" className="mb-1 block">Country</Label>
                  <Input
                    id="country"
                    type="text"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="city" className="mb-1 block">City</Label>
                  <Input
                    id="city"
                    type="text"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Educational & Professional Background */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Educational & Professional Background</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="education_level" className="mb-1 block">Highest Education Level</Label>
                  <Select
                    value={formData.education_level}
                    onValueChange={(value) => handleSelectChange("education_level", value)}
                    required
                  >
                    <SelectTrigger id="education_level">
                      <SelectValue placeholder="Select education level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high_school">High School</SelectItem>
                      <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                      <SelectItem value="master">Master's Degree</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="field_of_study" className="mb-1 block">Field of Study</Label>
                  <Input
                    id="field_of_study"
                    type="text"
                    value={formData.field_of_study}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="work_experience" className="mb-1 block">Years of Work Experience</Label>
                  <Input
                    id="work_experience"
                    type="number"
                    value={formData.work_experience}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div>
                  <Label htmlFor="current_role" className="mb-1 block">Current Role (Optional)</Label>
                  <Input
                    id="current_role"
                    type="text"
                    value={formData.current_role}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Course Selection & Motivation */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Course Selection & Motivation</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="preferred_course_id" className="mb-1 block">Preferred Course</Label>
                  <Select
                    value={formData.preferred_course_id}
                    onValueChange={(value) => handleSelectChange("preferred_course_id", value)}
                    required
                    disabled={loadingCourses}
                  >
                    <SelectTrigger id="preferred_course_id">
                      <SelectValue placeholder={loadingCourses ? "Loading courses..." : "Select a course"} />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map((course) => (
                        <SelectItem key={course.id} value={course.id}>
                          {course.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="motivation" className="mb-1 block">Motivation for Applying</Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us why you want to join this course and what you hope to achieve."
                    required
                  />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#173104] to-[#2d5a1a] text-white hover:shadow-lg transition-all py-3 text-lg"
            >
              Submit Application
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </form>
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
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Programs</h4>
              <div className="space-y-3 text-green-100">
                <p>
                  <Link href="/courses/cybersecurity-professional" className="hover:text-white transition-colors">
                    Cybersecurity
                  </Link>
                </p>
                <p>
                  <Link href="/courses/uiux-design" className="hover:text-white transition-colors">
                    UI/UX Design
                  </Link>
                </p>
                <p>
                  <Link href="/courses/european-languages" className="hover:text-white transition-colors">
                    Languages
                  </Link>
                </p>
                <p>
                  <Link href="/courses/kyc-compliance" className="hover:text-white transition-colors">
                    Compliance
                  </Link>
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Contact</h4>
              <div className="space-y-3 text-green-100">
                <p>+370 600 12345</p>
                <p>admissions@gitb.lt</p>
                <p>Vilnius, Lithuania</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
