"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const timelineEvents = [
  {
    year: "2023",
    title: "SEAI Registered",
    description: "Became a Sustainable Energy Authority of Ireland registered contractor for heat pump installations",
  },
  {
    year: "2022",
    title: "Donegal Business Award",
    description: "Recognized as Donegal's Best Trade Service Provider at the Local Enterprise Awards",
  },
  {
    year: "2021",
    title: "Team Expansion",
    description: "Expanded our team to cover all of County Donegal with 24/7 emergency service",
  },
  {
    year: "2020",
    title: "RGI Certification",
    description: "Achieved Registered Gas Installer certification from the RGII",
  },
  {
    year: "2019",
    title: "Business Founded",
    description: "Established our plumbing services in Letterkenny, Co. Donegal",
  },
]

export function ProjectsTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Our Journey
        </motion.h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20" />
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex items-center mb-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="flex-1 md:w-1/2" />
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary border-4 border-background z-10" />
              <div className="flex-1 md:w-1/2 p-4">
                <div className="bg-background p-6 rounded-lg shadow-md">
                  <span className="text-primary font-bold">{event.year}</span>
                  <h3 className="text-xl font-semibold mt-2">{event.title}</h3>
                  <p className="text-muted-foreground mt-2">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

