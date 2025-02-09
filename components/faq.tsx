"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What services are included in each plan?",
    answer:
      "Each plan includes a set number of plumbing inspections per year, 24/7 emergency support, discounts on repairs, and free estimates. Higher-tier plans include additional services like priority scheduling, water quality testing, and annual drain cleaning.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. The change will take effect at the start of your next billing cycle.",
  },
  {
    question: "Is there a contract or commitment period?",
    answer:
      "Our plans are billed annually, but there's no long-term contract. You can cancel at any time, and we'll refund you for the unused portion of your plan.",
  },
  {
    question: "How quickly can I expect service in an emergency?",
    answer:
      "All our plans include 24/7 emergency support. We aim to respond to all emergency calls within 1 hour and be on-site within 3 hours.",
  },
  {
    question: "Are there any additional fees not covered by the plan?",
    answer:
      "The plan covers all listed services. Any additional work or parts required will be quoted separately, but you'll receive the discount associated with your plan level on these additional services.",
  },
]

export function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Find answers to common questions about our service plans.</p>
        </motion.div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

