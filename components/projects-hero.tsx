"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ProjectsHero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/projectscover%20(1).jpg-bqrhih6XDyfa2FxQ97JQ0NZhtuF56a.jpeg"
        alt="Professional plumbing tools"
        fill
        className="object-cover object-center brightness-75"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-white"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Our Projects</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto">
          Delivering excellence in residential and commercial plumbing solutions across Donegal
        </p>
      </motion.div>
    </section>
  )
}

