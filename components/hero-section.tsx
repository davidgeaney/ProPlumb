"use client"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { WorkCarousel } from "./work-carousel"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-blue-600/20" />
      {/* Radial gradient for subtle lighting effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 pt-16 sm:pt-20 lg:pt-80 pb-8 relative z-10">
        <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left">
          <div className="lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Expert Plumbing
              <div className="text-primary mt-4 lg:text-7xl">Solutions</div>
              <div className="text-primary mt-2 lg:text-7xl">for Your Home</div>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl lg:pt-5 max-w-full break-words mb-16">
              Experience reliable plumbing services that keep your systems running smoothly. Available 24/7 for all your emergency needs.
            </p>

            <div className="flex flex-col gap-4 mt-4 lg:flex-row lg:gap-4">
              <Button 
                size="default" 
                className="px-10 py-8 bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base lg:text-lg"
              >
                <Link href="/contact" className="px-4">Get Started</Link>
              </Button>
              <Button
                size="default"
                variant="outline"
                className="px-10 py-8 border-black/20 bg-transparent text-black hover:bg-white/50 text-sm sm:text-base lg:text-lg"
              >
                <Link href="/contact" className="px-4">View Services</Link>
              </Button>
            </div>
          </div>

          {/* Carousel for medium and large screens */}
          <div className="block md:hidden lg:w-1/2 mt-8 lg:mt-0">
            <WorkCarousel>
              {/* Ensure your carousel items are properly set up */}
              <div className="carousel-item">Item 1</div>
              <div className="carousel-item">Item 2</div>
              <div className="carousel-item">Item 3</div>
            </WorkCarousel>
          </div>
          {/* Carousel for medium and large screens */}
          <div className="hidden md:block lg:w-1/2 mt-8 lg:mt-0">
            <WorkCarousel>
              {/* Ensure your carousel items are properly set up */}
              <div className="carousel-item">Item 1</div>
              <div className="carousel-item">Item 2</div>
              <div className="carousel-item">Item 3</div>
            </WorkCarousel>
          </div>
        </div>
      </div>
    </section>
  )
}