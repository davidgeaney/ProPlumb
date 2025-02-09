"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"

const areas = [
  "Letterkenny",
  "Bundoran",
  "Buncrana",
  "Ballybofey",
  "Donegal Town",
  "Ballyshannon",
  "Killybegs",
  "Ardara",
]

export function ServiceAreas() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary/10" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">Service Areas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide our expert plumbing services across County Donegal
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{area}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

