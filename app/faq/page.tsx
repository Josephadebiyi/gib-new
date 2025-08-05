import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function FAQPage() {
  const faqs = [
    {
      question: "What kind of courses do you offer?",
      answer: "We offer a wide range of courses in high-demand fields such as Cybersecurity, UI/UX Design, European Languages, and Finance (KYC Compliance). Our curriculum is designed to be practical and industry-relevant.",
    },
    {
      question: "Are your courses suitable for beginners?",
      answer: "Many of our courses are designed for beginners with no prior experience required. Specific prerequisites are listed on each course's detail page. We also offer foundational modules to get you up to speed.",
    },
    {
      question: "How are the courses delivered?",
      answer: "Our courses are primarily delivered online through a blend of live virtual classes, pre-recorded video lectures, interactive exercises, and hands-on projects. Some programs may include optional in-person workshops.",
    },
    {
      question: "What kind of support do students receive?",
      answer: "Students receive comprehensive support including dedicated instructors, teaching assistants, peer learning groups, and access to our online community forum. We also offer career guidance and job placement assistance for eligible programs.",
    },
    {
      question: "Do you offer certifications upon completion?",
      answer: "Yes, upon successful completion of a course, students receive a certificate of completion from Codel. Many of our courses also prepare you for industry-recognized certifications.",
    },
    {
      question: "What are the payment options for courses?",
      answer: "We offer various payment options, including full upfront payment, installment plans, and partnerships with financing providers. Please check the specific course page or contact our admissions team for details.",
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "We have a clear refund policy. Typically, a full refund is available within a certain period after enrollment, provided you have not accessed a significant portion of the course content. Please refer to our Terms and Conditions for detailed information.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h1>

      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">General Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section>
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Still Have Questions?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              If you couldn&apos;t find the answer to your question, please don&apos;t hesitate to reach out to our support team.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              You can contact us via email at <a href="mailto:support@codel.com" className="text-primary hover:underline">support@codel.com</a> or visit our <Link href="/contact" className="text-primary hover:underline">Contact Us</Link> page.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
