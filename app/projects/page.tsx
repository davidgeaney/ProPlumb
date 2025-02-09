import { ProjectsHero } from "@/components/projects-hero"
import { ProjectsGrid } from "@/components/projects-grid"
import { ProjectsTimeline } from "@/components/projects-timeline"
import { Testimonials } from "@/components/testimonials"
import { ContactCTA } from "@/components/contact-cta"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <ProjectsHero />
      <ProjectsGrid />
      <ProjectsTimeline />
      <Testimonials />
      <ContactCTA />
    </main>
  )
}

