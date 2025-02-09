import { ServicesHero } from "@/components/services-hero"
import { ServicesGrid } from "@/components/services-grid"
import { ServiceProcess } from "@/components/service-process"
import { Testimonials } from "@/components/testimonials"
import { ContactCTA } from "@/components/contact-cta"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <ServicesHero />
      <ServicesGrid />
      <ServiceProcess />
      <Testimonials />
      <ContactCTA />
    </main>
  )
}

