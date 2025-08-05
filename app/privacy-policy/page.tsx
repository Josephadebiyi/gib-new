import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-12">Privacy Policy</h1>

      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Introduction</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Codel (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://www.codel.com" className="text-primary hover:underline">www.codel.com</a>, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the &quot;Site&quot;). Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Site.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-8" />

      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Information We Collect</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We may collect information about you in a variety of ways. The information we may collect on the Site includes:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>
                <strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.
              </li>
              <li>
                <strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
              </li>
              <li>
                <strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-8" />

      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Use of Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Create and manage your account.</li>
              <li>Process your transactions and send you related information.</li>
              <li>Email you regarding your account or order.</li>
              <li>Enable user-to-user communications.</li>
              <li>Generate a personal profile about you to make your visit to the Site more personalized.</li>
              <li>Increase the efficiency and operation of the Site.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-8" />

      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Disclosure of Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mt-4">
              <li>
                <strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, or safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
              </li>
              <li>
                <strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-8" />

      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Security of Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-8" />

      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Your GDPR Rights (for EU Residents)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you are a resident of the European Union, you have certain data protection rights. We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data. If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please contact us.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              In certain circumstances, you have the following data protection rights:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mt-4">
              <li>The right to access, update or to delete the information we have on you.</li>
              <li>The right of rectification.</li>
              <li>The right to object.</li>
              <li>The right of restriction.</li>
              <li>The right to data portability.</li>
              <li>The right to withdraw consent.</li>
            </ul>
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
              If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:info@codel.com" className="text-primary hover:underline">info@codel.com</a>
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
