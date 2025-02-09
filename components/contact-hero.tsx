"use client"

import { motion } from "framer-motion"

export function ContactHero() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-primary/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
            We're here to help with all your plumbing needs. Reach out to us for expert advice and service.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

