"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const contactInfo = [
  { icon: Phone, text: "(074) 912 3456", label: "Phone number" },
  { icon: Mail, text: "info@proplumb.ie", label: "Email address" },
  { icon: MapPin, text: "Unit 5, Pearse Road, Letterkenny, Co. Donegal", label: "Office address" },
  { icon: Clock, text: "Monday - Friday: 8am - 6pm", label: "Business hours" },
]

export function ContactInfo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Card className="h-full shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Contact information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium">{item.text}</p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 bg-primary/5 rounded-lg">
            <h4 className="text-lg font-semibold mb-2 text-foreground">Emergency Service</h4>
            <p className="text-muted-foreground mb-4">Available 24/7 for urgent plumbing issues</p>
            <p className="font-semibold text-primary">(074) 912 3457</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

