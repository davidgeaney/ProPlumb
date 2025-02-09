import { Droplet, Home, Building2, Wrench, Shield, Clock } from "lucide-react"

const serviceDetails = [
  {
    icon: Home,
    title: "Residential Plumbing",
    description:
      "Our residential plumbing services cover everything from minor repairs to major installations. We handle faucet repairs, toilet installations, pipe replacements, and more. Our team is equipped to tackle any plumbing issue in your home, ensuring your comfort and peace of mind.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Building2,
    title: "Commercial Services",
    description:
      "For businesses and industrial facilities, we offer specialized plumbing solutions. Our commercial services include large-scale installations, maintenance of complex plumbing systems, and quick response to emergencies. We understand the importance of minimizing downtime for your business.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Wrench,
    title: "Emergency Repairs",
    description:
      "Plumbing emergencies don't wait, and neither do we. Our emergency repair service is available 24/7. Whether it's a burst pipe, severe leak, or any other urgent plumbing issue, our team will be there quickly to assess and resolve the problem, minimizing damage to your property.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Droplet,
    title: "Leak Detection",
    description:
      "Using state-of-the-art technology, we can locate even the most hidden leaks in your plumbing system. Our non-invasive leak detection methods save time and prevent unnecessary damage to your property. We'll find and fix the leak efficiently, saving you water and money.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Shield,
    title: "Preventive Maintenance",
    description:
      "Regular maintenance is key to preventing costly plumbing issues. Our preventive maintenance services include thorough inspections, cleaning, and tune-ups of your plumbing system. We'll help you avoid unexpected breakdowns and extend the life of your plumbing infrastructure.",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Our commitment to your satisfaction means we're always here when you need us. With round-the-clock availability, you can rest assured that help is just a phone call away, any time of day or night. We pride ourselves on quick response times and reliable service.",
    color: "bg-indigo-100 text-indigo-600",
  },
]

export function ServiceDetails() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Detailed Service Offerings</h2>
        <div className="space-y-12">
          {serviceDetails.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className={`p-6 ${service.color}`}>
                <service.icon className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

