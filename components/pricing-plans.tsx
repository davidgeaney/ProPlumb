"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Basic",
    price: "$99",
    description: "Perfect for small homes and apartments",
    features: ["Annual plumbing inspection", "24/7 emergency support", "10% discount on repairs", "Free estimates"],
  },
  {
    name: "Pro",
    price: "$199",
    description: "Ideal for larger homes and small businesses",
    features: [
      "Bi-annual plumbing inspection",
      "24/7 emergency support",
      "20% discount on repairs",
      "Free estimates",
      "Priority scheduling",
      "Water quality testing",
    ],
  },
  {
    name: "Premium",
    price: "$299",
    description: "Comprehensive coverage for estates and businesses",
    features: [
      "Quarterly plumbing inspection",
      "24/7 emergency support",
      "30% discount on repairs",
      "Free estimates",
      "Priority scheduling",
      "Water quality testing",
      "Leak detection service",
      "Annual drain cleaning",
    ],
  },
]

export function PricingPlans() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-4xl font-bold mb-4">
                    {plan.price}
                    <span className="text-lg font-normal">/year</span>
                  </div>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="w-5 h-5 text-primary mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Link href="/contact">Request Quote</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

