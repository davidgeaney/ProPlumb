"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ContactCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-gradient-to-b from-primary/20 to-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6 text-foreground">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and let our expert team handle all your plumbing needs.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

