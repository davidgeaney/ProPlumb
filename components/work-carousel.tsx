"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

const projects = [
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/workcarouselimg1.jpg-2TdvOVsiDk5Y8Ucr2Jou9DLEG9mUyT.jpeg",
    title: "Luxury Vanity Installation",
    description: "Custom marble and chrome finishes",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/workcarouselimg2.jpg-7yXWbMe9fjCu9JicWnZ15HuIkCXq8F.jpeg",
    title: "Modern Shower Room",
    description: "Contemporary design with premium fixtures",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/workcarouselimg3.jpg-wrPeZALcZ3Y2udC3yBZ3HnwIdNlQdJ.jpeg",
    title: "Coastal Bathroom Renovation",
    description: "Complete bathroom makeover with style",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/workcarouselimg4.jpg-Qljtmjj7kcTxmuU3T65WCQp9txmEvh.jpeg",
    title: "Premium Fixture Installation",
    description: "High-quality plumbing solutions",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/workcarouselimg5.jpg-RyI3Kl1ozz6hQr238Rpvgxl2mmoMFl.jpeg",
    title: "Minimalist Bathroom Design",
    description: "Clean lines with modern functionality",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/workcarouselimg6.jpg-rxXD665rKWBJFoEz9a644R9s7FAxl4.jpeg",
    title: "Contemporary Bath Suite",
    description: "Floating vanity and glass enclosure",
  },
]

export function WorkCarousel() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="relative w-full overflow-hidden carousel-mask">
      <motion.div
        animate={{
          x: [0, -1035],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="flex gap-4"
      >
        {[...projects, ...projects].map((project, i) => (
          <div key={i} className="relative flex-shrink-0 w-[300px] h-[400px] rounded-2xl overflow-hidden">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="text-white font-medium">{project.title}</div>
              <div className="text-gray-300 text-sm">{project.description}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

