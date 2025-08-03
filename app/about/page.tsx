import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Globe, Users, Target, Eye, Heart, MapPin, Building2, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#1a5f3f] text-white px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="bg-white text-[#1a5f3f] px-3 py-1 rounded font-bold text-lg">GITB</div>
            <nav className="hidden md:flex space-x-6 text-sm">
              <a href="/" className="hover:opacity-80">
                Home
              </a>
              <a href="/courses" className="hover:opacity-80">
                Courses
              </a>
              <a href="/about" className="text-[#daff7d] font-semibold">
                About Us
              </a>
              <a href="/how-it-works" className="hover:opacity-80">
                How It Works
              </a>
              <a href="/faq" className="hover:opacity-80">
                FAQ
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <span>EN | LT</span>
            </div>
            <Button className="bg-[#daff7d] text-black hover:bg-[#c5e86a] text-sm px-4 py-2">APPLY NOW</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-[#1a5f3f]">GITB</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The Global Institute of Tech and Business is Europe's leading provider of industry-focused technology
            education, bridging the gap between academic learning and real-world professional demands.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2018 in Vilnius, Lithuania, GITB emerged from a simple yet powerful vision: to democratize
                  access to high-quality technology education across Europe. Our founders, seasoned tech professionals
                  and educators, recognized the growing skills gap in the European tech industry.
                </p>
                <p>
                  What started as a small coding bootcamp has evolved into a comprehensive institute offering
                  industry-recognized certifications and hands-on training programs. Today, we serve students from over
                  15 EU countries and maintain partnerships with leading technology companies.
                </p>
                <p>
                  Our commitment to excellence has earned us recognition from the European Commission and accreditation
                  from multiple EU educational bodies, making us a trusted name in tech education.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="GITB Campus"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#1a5f3f] text-white p-4 rounded-lg">
                <div className="text-2xl font-bold">2018</div>
                <div className="text-sm">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-[#1a5f3f] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide world-class, industry-aligned technology education that empowers individuals to build
                  successful careers in the digital economy while contributing to Europe's technological advancement.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-[#daff7d] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-[#1a5f3f]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be Europe's most trusted and innovative technology education institute, recognized for producing
                  job-ready professionals who drive digital transformation across industries.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-[#1a5f3f] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                <p className="text-gray-600">
                  Excellence in education, integrity in partnerships, innovation in methodology, and inclusivity in
                  opportunity. We believe technology education should be accessible to all Europeans.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* EU Recognition & Accreditations */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="text-[#1a5f3f]">EU Recognition</span> & Accreditations
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our programs are officially recognized and accredited across the European Union, ensuring your
              qualifications are valued throughout Europe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-[#1a5f3f] shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-[#1a5f3f] p-3 rounded-full mr-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">EU Educational Framework</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#1a5f3f] mr-3" />
                    <span>European Qualifications Framework (EQF) Level 5-7</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#1a5f3f] mr-3" />
                    <span>ECTS Credit Transfer System</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#1a5f3f] mr-3" />
                    <span>Bologna Process Compliance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#daff7d] shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-[#daff7d] p-3 rounded-full mr-4">
                    <Globe className="w-6 h-6 text-[#1a5f3f]" />
                  </div>
                  <h3 className="text-xl font-bold">International Recognition</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#1a5f3f] mr-3" />
                    <span>ISO 21001:2018 Educational Management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#1a5f3f] mr-3" />
                    <span>European Commission Digital Skills Recognition</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#1a5f3f] mr-3" />
                    <span>UNESCO Global Education Coalition Member</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* EU Countries Recognition */}
          <div className="bg-gradient-to-r from-[#1a5f3f] to-green-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold text-center mb-8">Recognized Across the European Union</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              {[
                { flag: "🇱🇹", country: "Lithuania", status: "Headquarters" },
                { flag: "🇩🇪", country: "Germany", status: "Full Recognition" },
                { flag: "🇫🇷", country: "France", status: "Full Recognition" },
                { flag: "🇳🇱", country: "Netherlands", status: "Full Recognition" },
                { flag: "🇸🇪", country: "Sweden", status: "Full Recognition" },
                { flag: "🇩🇰", country: "Denmark", status: "Full Recognition" },
                { flag: "🇫🇮", country: "Finland", status: "Full Recognition" },
                { flag: "🇪🇸", country: "Spain", status: "Full Recognition" },
                { flag: "🇮🇹", country: "Italy", status: "Full Recognition" },
                { flag: "🇵🇱", country: "Poland", status: "Full Recognition" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-2">{item.flag}</div>
                  <div className="font-semibold text-sm">{item.country}</div>
                  <div className="text-xs text-green-200">{item.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Partnerships */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industry <span className="text-[#1a5f3f]">Partnerships</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We collaborate with leading technology companies and organizations to ensure our curriculum remains
              current and our graduates are job-ready.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Technology Partners</h3>
                <div className="space-y-3">
                  {["Amazon Web Services", "Microsoft Azure", "Google Cloud", "IBM", "Oracle"].map((partner) => (
                    <div key={partner} className="flex items-center">
                      <Building2 className="w-4 h-4 text-[#1a5f3f] mr-3" />
                      <span className="text-gray-700">{partner}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Certification Bodies</h3>
                <div className="space-y-3">
                  {["CompTIA", "Cisco Systems", "(ISC)² - CISSP", "PMI", "ISACA"].map((cert) => (
                    <div key={cert} className="flex items-center">
                      <Award className="w-4 h-4 text-[#1a5f3f] mr-3" />
                      <span className="text-gray-700">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Hiring Partners</h3>
                <div className="space-y-3">
                  {["Accenture", "Deloitte Digital", "Capgemini", "TietoEVRY", "Cognizant"].map((company) => (
                    <div key={company} className="flex items-center">
                      <Users className="w-4 h-4 text-[#1a5f3f] mr-3" />
                      <span className="text-gray-700">{company}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-[#1a5f3f]">Leadership Team</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Led by industry veterans and education experts with decades of combined experience in technology and
              European education systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Elena Vasquez",
                role: "Founder & CEO",
                background: "Former Microsoft Europe Education Director",
                image: "professional woman in business attire",
              },
              {
                name: "Prof. Marcus Weber",
                role: "Academic Director",
                background: "20+ years in EU Higher Education",
                image: "professional man with glasses",
              },
              {
                name: "Sarah Chen",
                role: "Industry Relations Director",
                background: "Former AWS Solutions Architect",
                image: "professional woman with tech background",
              },
            ].map((member, index) => (
              <Card key={index} className="shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <Image
                    src={`/placeholder.svg?height=200&width=200&query=${member.image}`}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-[#1a5f3f] font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.background}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats & Achievements */}
      <section className="py-16 px-4 bg-[#1a5f3f] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-green-100 max-w-3xl mx-auto">Six years of excellence in European tech education</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#daff7d] mb-2">5,000+</div>
              <div className="text-green-100">Graduates</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#daff7d] mb-2">15</div>
              <div className="text-green-100">EU Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#daff7d] mb-2">92%</div>
              <div className="text-green-100">Job Placement Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#daff7d] mb-2">50+</div>
              <div className="text-green-100">Industry Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 via-blue-50 to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join Europe's Leading Tech Institute?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Become part of a community that's shaping the future of technology across Europe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#1a5f3f] hover:bg-[#145033] text-white px-8 py-3 text-lg">Apply Now</Button>
            <Button
              variant="outline"
              className="border-[#1a5f3f] text-[#1a5f3f] hover:bg-[#1a5f3f] hover:text-white px-8 py-3 text-lg bg-transparent"
            >
              Explore Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a5f3f] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="bg-white text-[#1a5f3f] px-3 py-1 rounded font-bold text-lg mb-4 inline-block">GITB</div>
              <p className="text-green-100 mb-4">
                Global Institute of Tech and Business - Empowering careers through technology education.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-green-100">
                <p>
                  <a href="/" className="hover:text-white">
                    Home
                  </a>
                </p>
                <p>
                  <a href="/courses" className="hover:text-white">
                    Courses
                  </a>
                </p>
                <p>
                  <a href="/about" className="hover:text-white">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="/how-it-works" className="hover:text-white">
                    How It Works
                  </a>
                </p>
                <p>
                  <a href="/faq" className="hover:text-white">
                    FAQ
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-green-100">
                <p>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </p>
                <p>
                  <a href="#" className="hover:text-white">
                    Student Portal
                  </a>
                </p>
                <p>
                  <a href="#" className="hover:text-white">
                    Technical Support
                  </a>
                </p>
                <p>
                  <a href="#" className="hover:text-white">
                    Career Services
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-green-100">Vilnius, Lithuania</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-100">info@gitb.eu</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-green-600 mt-8 pt-8 text-center">
            <p className="text-sm text-green-100">© 2024 Global Institute of Tech and Business. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
