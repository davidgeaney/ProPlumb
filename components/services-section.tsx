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

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary/10" ref={ref} id="services">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive plumbing solutions for all your needs, backed by years of experience and expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-background/50 backdrop-blur-sm border border-primary/10 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  <div className="mt-4 border-t border-primary/10 pt-4 text-sm text-muted-foreground">
                    Available for residential and commercial properties
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

