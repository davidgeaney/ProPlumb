"use client"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { WorkCarousel } from "./work-carousel"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-background text-foreground overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-blue-600/20" />

      {/* Radial gradient for subtle lighting effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Expert Plumbing Solutions
              <span className="block mt-2 text-primary">for Your Home</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Experience reliable plumbing services that keep your systems running smoothly. Available 24/7 for all your
              emergency needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-black/20 bg-transparent text-black hover:bg-white/50 text-lg"
              >
                <Link href="/contact">View Services</Link>
              </Button>
            </div>

            <div className="pt-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {["/avatar1.jpg", "/avatar2.jpg", "/avatar3.jpg", "/avatar4.jpg"].map((avatar, i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white relative">
                      <Image
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`}
                        alt="Customer avatar"
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="font-medium">Trusted by 100+ customers</div>
                  <div className="text-sm text-muted-foreground">Across County Donegal</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 backdrop-blur-sm border border-primary/10">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div className="flex-1">
                  <div className="font-medium">4.9/5 average rating</div>
                  <div className="text-sm text-muted-foreground">Based on 500+ reviews</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] mt-8 lg:mt-0">
            <WorkCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}

