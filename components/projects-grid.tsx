"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "Luxury Bathroom Renovation",
    description: "Complete overhaul with marble walls, gold fixtures, and patterned flooring",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project1.jpg-Ks3niqdNdvTEukAPnpRfxipxpYqUQ5.jpeg",
  },
  {
    title: "High-End Kitchen Remodel",
    description: "Installation of premium fixtures and appliances with elegant lighting",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project2.jpg-D6eudfPqzhselGi1yyTvHpflRSNSDe.jpeg",
  },
  {
    title: "Radiator Maintenance",
    description: "Precision measurement and adjustment for optimal heating efficiency",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project3.jpg-okG5UVNHiCJ19n4UOfbLE2leyOSA4A.jpeg",
  },
  {
    title: "Precision Pipework",
    description: "Expert handling of complex pipe systems in tight spaces",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project4.jpg-nbR7ZJ0rdoIjvuHMt4hggaKi2Z7yay.jpeg",
  },
  {
    title: "Commercial Pipe Installation",
    description: "Large-scale piping project for industrial applications",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project5.jpg-F2PXuctFugmRAukYwVR29q2Q0zWWoV.jpeg",
  },
  {
    title: "Fixture Repair and Installation",
    description: "Detailed work on various plumbing fixtures with specialized tools",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project6.jpg-trLEpQja4DGtHRc0SapDFEhNt7Rxpl.jpeg",
  },
]

export function ProjectsGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </motion.div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

