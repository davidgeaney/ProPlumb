"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white" ref={ref} id="contact">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a question or need assistance? We're here to help. Reach out to our team of experts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Send us a message</h3>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input type="text" placeholder="First name" className="bg-white" />
                    <Input type="text" placeholder="Last name" className="bg-white" />
                  </div>
                  <Input type="email" placeholder="Email" className="bg-white" />
                  <Input type="tel" placeholder="Phone number" className="bg-white" />
                  <Textarea placeholder="How can we help?" className="min-h-[120px] bg-white" />
                  <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90">
                    Send message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="h-full shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Contact information</h3>
                <div className="space-y-4">
                  {[
                    { icon: Phone, text: "(074) 912 3456", label: "Phone number" },
                    { icon: Mail, text: "info@proplumb.com", label: "Email address" },
                    { icon: MapPin, text: "Unit 5, Pearse Road, Letterkenny, Co.Donegal", label: "Office address" },
                    { icon: Clock, text: "Monday - Friday: 8am - 6pm", label: "Business hours" },
                  ].map((item, index) => (
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
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">
                    Call Now for Emergency Service
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

