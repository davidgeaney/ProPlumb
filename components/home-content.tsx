"use client"

import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { Stats } from "@/components/stats"
import { ProcessTimeline } from "@/components/process-timeline"
import { EmergencyCallout } from "@/components/emergency-callout"
import { Testimonials } from "@/components/testimonials"
import { ServiceAreas } from "@/components/service-areas"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { useEffect, useState } from "react"

export function HomeContent() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <Stats />
      <ProcessTimeline />
      <EmergencyCallout />
      <Testimonials />
      <ServiceAreas />
      <ContactSection />
      <Footer />
    </>
  )
}

