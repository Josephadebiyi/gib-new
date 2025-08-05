import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function TermsConditionsPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-12">Terms and Conditions</h1>

      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Introduction</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Welcome to Codel (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). These Terms and Conditions (&quot;Terms&quot;) govern your use of our website <a href="https://www.codel.com" className="text-primary hover:underline">www.codel.com</a> and the services provided through it (collectively, the &quot;Service&quot;). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Service.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-8" />

      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Eligibility</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              You must be at least 18 years old to use our Service. By using the Service, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into these Terms.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-8" />

      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Account Registration</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              To access certain features of the Service, you may be required to register for an account. You agree to:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Provide accurate, current, and complete information during the registration process.</li>
              <li>Maintain the security of your password and identification.</li>
              <li>Maintain and promptly update the registration data, and any other information you provide to us, to keep it accurate, current, and complete.</li>
              <li>Be responsible for all activities that occur under your account.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-8" />

      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Course Enrollment and Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When you enroll in a course, you agree to pay the applicable fees. All fees are stated in Euros (€) unless otherwise specified. Payment methods accepted will be displayed during the enrollment process.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Refund Policy:</strong> Our refund policy is detailed on our website and may vary by course. Generally, refunds are available within a specified period after enrollment, provided you have not accessed a significant portion of the course content. Please review the specific course details or contact our support for more information.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-8" />

      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Intellectual Property</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              All content on the Service, including text, graphics, logos, images, course materials, and software, is the property of Codel or its content suppliers and protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works of any content without our express written permission.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-8" />

      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Limitation of Liability</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              To the fullest extent permitted by applicable law, Codel shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the Service; (b) any conduct or content of any third party on the Service; or (c) unauthorized access, use, or alteration of your transmissions or content.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-8" />

      <section>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Governing Law</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              These Terms shall be governed and construed in accordance with the laws of Lithuania, without regard to its conflict of law provisions.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-8" />

      <section>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Changes to Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-8" />

      <section>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              If you have any questions about these Terms, please contact us at: <a href="mailto:info@codel.com" className="text-primary hover:underline">info@codel.com</a>
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
