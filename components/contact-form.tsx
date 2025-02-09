"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <Card className="h-full shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Send us a message</CardTitle>
        </CardHeader>
        <CardContent>
          {isSubmitted ? (
            <div className="text-center py-8">
              <h3 className="text-2xl font-semibold mb-2">Thank you for your message!</h3>
              <p className="text-muted-foreground">We'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input type="text" placeholder="First name" required />
                <Input type="text" placeholder="Last name" required />
              </div>
              <Input type="email" placeholder="Email" required />
              <Input type="tel" placeholder="Phone number" />
              <Textarea placeholder="How can we help?" className="min-h-[120px]" required />
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

