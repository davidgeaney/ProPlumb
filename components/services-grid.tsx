"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Droplet, Home, Building2, Wrench, Shield, Clock } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Residential Plumbing",
    description: "Complete home plumbing solutions with attention to detail",
  },
  {
    icon: Building2,
    title: "Commercial Services",
    description: "Specialized solutions for businesses and industrial facilities",
  },
  {
    icon: Wrench,
    title: "Emergency Repairs",
    description: "Fast response times for urgent plumbing emergencies",
  },
  {
    icon: Droplet,
    title: "Leak Detection",
    description: "Advanced technology to locate and repair hidden leaks",
  },
  {
    icon: Shield,
    title: "Preventive Maintenance",
    description: "Regular inspections to prevent costly repairs",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock service for peace of mind",
  },
]

export function ServicesGrid() {
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
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CardContent className="p-6">
                  <service.icon className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </motion.div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

