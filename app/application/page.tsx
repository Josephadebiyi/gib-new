import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, CreditCard, Shield, Award, CheckCircle, FileText, User, GraduationCap } from "lucide-react"
import Link from "next/link"

export default function ApplicationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#1a5f3f]/90 to-[#2d7a5a]/90 backdrop-blur-sm text-white px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/">
              <div className="bg-white/95 text-[#1a5f3f] px-4 py-2 rounded-lg font-bold text-xl shadow-lg cursor-pointer">
                GITB
              </div>
            </Link>
            <nav className="hidden md:flex space-x-8 text-sm font-medium">
              <Link href="/" className="hover:text-[#daff7d] transition-colors">
                Home
              </Link>
              <Link href="/courses" className="hover:text-[#daff7d] transition-colors">
                Courses
              </Link>
              <Link href="/about" className="hover:text-[#daff7d] transition-colors">
                About Us
              </Link>
              <Link href="/how-it-works" className="hover:text-[#daff7d] transition-colors">
                How It Works
              </Link>
              <Link href="/faq" className="hover:text-[#daff7d] transition-colors">
                FAQ
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <span className="bg-white/20 px-2 py-1 rounded">EN | LT</span>
            </div>
          </div>
        </div>
      </header>

      {/* Application Hero */}
      <section className="bg-gradient-to-br from-purple-100/30 via-blue-50/40 to-green-50/30 py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-gradient-to-r from-[#daff7d]/5 via-transparent to-[#daff7d]/5"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,_#daff7d_0.1px,_transparent_0.1px)] bg-[length:60px_60px]"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Start Your <span className="text-[#1a5f3f]">Tech Journey</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Complete your application to join Europe's leading tech education institute
          </p>
          <div className="flex justify-center space-x-8 text-sm">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-[#1a5f3f] mr-2" />
              <span>EU Recognized</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-[#1a5f3f] mr-2" />
              <span>92% Job Placement</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-[#1a5f3f] mr-2" />
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
              <Card className="shadow-xl border-0">
                <CardHeader className="bg-gradient-to-r from-[#1a5f3f]/5 to-[#daff7d]/10">
                  <CardTitle className="text-2xl text-[#1a5f3f] flex items-center">
                    <User className="w-6 h-6 mr-3" />
                    Application Form
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <User className="w-5 h-5 mr-2 text-[#1a5f3f]" />
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
                      <GraduationCap className="w-5 h-5 mr-2 text-[#1a5f3f]" />
                      Course Selection
                    </h3>
                    <div>
                      <Label htmlFor="course">Preferred Course *</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select your preferred course" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="aws-cloud">AWS Cloud Practitioner Certification</SelectItem>
                          <SelectItem value="cybersecurity">CISSP Cybersecurity Professional</SelectItem>
                          <SelectItem value="full-stack">Full Stack JavaScript Developer</SelectItem>
                          <SelectItem value="data-analytics">Data Analytics & Visualization</SelectItem>
                          <SelectItem value="mobile-dev">React Native Mobile Development</SelectItem>
                          <SelectItem value="database-admin">Database Administration & Design</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Education Background */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <GraduationCap className="w-5 h-5 mr-2 text-[#1a5f3f]" />
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
                      <FileText className="w-5 h-5 mr-2 text-[#1a5f3f]" />
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
                      <Upload className="w-5 h-5 mr-2 text-[#1a5f3f]" />
                      Required Documents
                    </h3>
                    <div className="space-y-4">
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#1a5f3f] transition-colors">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-2">Upload your CV/Resume *</p>
                        <Button variant="outline" size="sm">
                          Choose File
                        </Button>
                      </div>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#1a5f3f] transition-colors">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-2">Upload ID/Passport *</p>
                        <Button variant="outline" size="sm">
                          Choose File
                        </Button>
                      </div>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#1a5f3f] transition-colors">
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
                        <Link href="#" className="text-[#1a5f3f] hover:underline">
                          Terms & Conditions
                        </Link>{" "}
                        and{" "}
                        <Link href="#" className="text-[#1a5f3f] hover:underline">
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
              <Card className="shadow-lg border-2 border-[#1a5f3f]/20">
                <CardHeader className="bg-gradient-to-r from-[#1a5f3f]/5 to-[#daff7d]/10">
                  <CardTitle className="text-lg text-[#1a5f3f] flex items-center">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Application Fee
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-[#1a5f3f] mb-2">€50</div>
                    <p className="text-sm text-gray-600">Non-refundable application fee</p>
                  </div>
                  <div className="space-y-3 text-sm text-gray-600 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#1a5f3f] mr-2" />
                      <span>Deducted from tuition upon enrollment</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#1a5f3f] mr-2" />
                      <span>Secure payment processing</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#1a5f3f] mr-2" />
                      <span>Instant application review</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-[#1a5f3f] to-[#2d7a5a] text-white hover:shadow-lg transition-shadow">
                    <Shield className="w-4 h-4 mr-2" />
                    Pay Securely with Stripe
                  </Button>
                </CardContent>
              </Card>

              {/* Certification Preview */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-lg text-[#1a5f3f] flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    Certifications Available
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {[
                      "AWS Certified",
                      "Microsoft Azure",
                      "CompTIA Security+",
                      "Google Cloud",
                      "CISSP",
                      "Cisco CCNA",
                    ].map((cert, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#1a5f3f]/10 to-[#daff7d]/20 rounded-lg flex items-center justify-center mr-3">
                          <Award className="w-5 h-5 text-[#1a5f3f]" />
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
                    <p className="font-medium">📧 admissions@gitb.eu</p>
                    <p className="font-medium">📞 +370 600 12345</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a5f3f] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/">
                <div className="bg-white text-[#1a5f3f] px-4 py-2 rounded-lg font-bold text-xl mb-6 inline-block cursor-pointer">
                  GITB
                </div>
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
                <p>Cloud Computing</p>
                <p>Cybersecurity</p>
                <p>Full Stack Development</p>
                <p>Data Analytics</p>
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
