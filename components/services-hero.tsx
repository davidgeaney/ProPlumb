"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function ServicesHero() {
  return (
    <section className="relative py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Comprehensive plumbing solutions for residential and commercial needs
          </p>
          <Button href="/contact" size="lg">Request a Quote</Button>
        </motion.div>
      </div>
    </section>
  )
}

