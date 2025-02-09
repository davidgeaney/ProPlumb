import { PricingHero } from "@/components/pricing-hero"
import { PricingPlans } from "@/components/pricing-plans"
import { FAQ } from "@/components/faq"
import { ContactCTA } from "@/components/contact-cta"

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <PricingHero />
      <PricingPlans />
      <FAQ />
      <ContactCTA />
    </main>
  )
}

