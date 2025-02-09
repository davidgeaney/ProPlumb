"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Users, CheckCircle, Award, Clock } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "1,500+",
    label: "Happy Clients",
  },
  {
    icon: CheckCircle,
    value: "15,000+",
    label: "Projects Completed",
  },
  {
    icon: Award,
    value: "20+",
    label: "Years Experience",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Emergency Service",
  },
]

export function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-blue-950" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-900 mb-6">
                <stat.icon className="w-8 h-8 text-blue-200" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-200">{stat.label}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

