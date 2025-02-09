"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
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

export function ProcessTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-gradient-to-b from-primary/10 to-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our simple and efficient process ensures quality service every time
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{index + 1}</div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

