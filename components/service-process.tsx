"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { PhoneCall, ClipboardCheck, Wrench, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: PhoneCall,
    title: "Contact Us",
    description: "Reach out via phone or our online form",
  },
  {
    icon: ClipboardCheck,
    title: "Assessment",
    description: "We evaluate your plumbing needs",
  },
  {
    icon: Wrench,
    title: "Service Delivery",
    description: "Our experts carry out the required work",
  },
  {
    icon: CheckCircle,
    title: "Quality Check",
    description: "We ensure your complete satisfaction",
  },
]

export function ServiceProcess() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Our Service Process
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-4 inline-flex p-4 rounded-full bg-primary/10">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

