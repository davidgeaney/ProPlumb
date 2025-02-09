import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Clock, ArrowRight, Droplet, CheckCircle } from "lucide-react"

export default function Page() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">Need Help with a Plumbing Emergency?</h1>
              <p className="text-lg opacity-90">24/7 Emergency Service Available</p>
              <Button size="lg" variant="secondary">
                Call Now
                <Phone className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plumberinspiration.PNG-uXM87ENLKWzPt7v6PclJk9MWyujg0t.png"
                alt="Plumbing Service"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-2">From Leading Faucet to Gushing Pipes</h2>
        <p className="text-gray-600 mb-8">We handle all your plumbing needs with expertise and care</p>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="relative h-64 group overflow-hidden rounded-lg">
              <Image src="/placeholder.svg" alt={service.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/50 flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-bold text-lg">{service.title}</h3>
                  <p className="text-sm opacity-90">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Nobody Wows Clients Like We Do</h2>
              <p className="text-gray-600 mb-6">Trust our experienced team to handle all your plumbing needs</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-blue-600">1300+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-blue-600">600+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="relative h-[300px]">
              <Image src="/placeholder.svg" alt="Plumber illustration" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Efficient Residential & Commercial Plumbing Services!</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Button variant="secondary" size="lg">
              Pre Approve
            </Button>
            <Button variant="secondary" size="lg">
              Why Choose Us?
            </Button>
            <Button variant="secondary" size="lg">
              Moving Water
            </Button>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Our Approach</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <div key={index} className="flex gap-4">
              <div className="bg-blue-100 p-3 rounded-full h-fit">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold mb-2">{approach.title}</h3>
                <p className="text-gray-600">{approach.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Additional Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Droplet className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Easier Than You Think */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Easier than You Can Think!</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative h-48 mb-4">
                <Image src="/placeholder.svg" alt={step.title} fill className="object-contain" />
              </div>
              <h3 className="font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Emergency Plumbing Service</h2>
          <p className="text-xl mb-8">24 Hours / 7 Days a Week</p>
          <Button size="lg" variant="secondary">
            Request a Quote
          </Button>
        </div>
      </section>
    </main>
  )
}

const services = [
  {
    title: "Residential",
    description: "Complete home plumbing solutions",
  },
  {
    title: "Commercial",
    description: "Business plumbing services",
  },
  {
    title: "Emergency",
    description: "24/7 emergency response",
  },
]

const approaches = [
  {
    title: "Plumbing Specialists",
    description: "Our team consists of certified professionals with years of experience",
  },
  {
    title: "24 Hours/7 Days",
    description: "Available round the clock for emergency services",
  },
  {
    title: "Modern Leaders",
    description: "Using the latest technology and best practices",
  },
]

const additionalServices = [
  {
    title: "Drain Cleaning",
    description: "Professional drain cleaning services for all types of clogs",
  },
  {
    title: "Water Line Repair",
    description: "Expert water line repair and replacement services",
  },
  {
    title: "Water Heater Repair",
    description: "Comprehensive water heater maintenance and repair",
  },
]

const steps = [
  {
    title: "Inspect & Analysis",
    description: "Thorough inspection of your plumbing system",
  },
  {
    title: "Quote & Expert Service",
    description: "Transparent pricing and professional service",
  },
  {
    title: "Clean Up & Done",
    description: "Complete cleanup after job completion",
  },
]

