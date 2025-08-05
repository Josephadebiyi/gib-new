import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-12">Cookie Policy</h1>

      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">What are Cookies?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide reporting information.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-8" />

      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">How We Use Cookies</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We use cookies for several reasons, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>To enable certain functions of the Service.</li>
              <li>To provide analytics.</li>
              <li>To store your preferences.</li>
              <li>To enable advertisements delivery, including behavioral advertising.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-8" />

      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Types of Cookies We Use</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We use both session and persistent cookies on the Service and we use different types of cookies to run the Service:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>
                <strong>Essential cookies:</strong> These cookies are essential to provide you with services available through our Website and to enable you to use some of its features.
              </li>
              <li>
                <strong>Analytics cookies:</strong> These cookies allow us to collect information about how visitors use our Website, for instance, which pages visitors go to most often, and if they get error messages from web pages.
              </li>
              <li>
                <strong>Advertising cookies:</strong> These cookies are used to make advertising messages more relevant to you and your interests.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-8" />

      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Your Choices Regarding Cookies</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you&apos;d like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-8" />

      <section>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">More Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              If you have any questions about our Cookie Policy, please contact us at: <a href="mailto:info@codel.com" className="text-primary hover:underline">info@codel.com</a>
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
