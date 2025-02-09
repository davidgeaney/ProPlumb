"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Twitter, Linkedin, Facebook, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="flex flex-col gap-8">
          <div className="grid gap-8 md:grid-cols-[1fr,2fr,1fr]">
            {/* Logo and tagline */}
            <div>
              <Link href="/" className="text-xl font-semibold">
                ProPlumb
              </Link>
              <p className="mt-2 text-sm text-gray-500">There is no leak-free plumbing without professional service</p>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="text-sm font-medium">Company</div>
                <nav className="flex flex-col space-y-2 text-sm text-gray-500">
                  <Link href="/about">About</Link>
                  <Link href="/services">Services</Link>
                  <Link href="/pricing">Pricing</Link>
                  <Link href="/contact">Contact</Link>
                </nav>
              </div>
              <div className="space-y-3">
                <div className="text-sm font-medium">Resources</div>
                <nav className="flex flex-col space-y-2 text-sm text-gray-500">
                  <Link href="/blog">Blog</Link>
                  <Link href="/faq">FAQ</Link>
                  <Link href="/support">Support</Link>
                </nav>
              </div>
              <div className="space-y-3">
                <div className="text-sm font-medium">Legal</div>
                <nav className="flex flex-col space-y-2 text-sm text-gray-500">
                  <Link href="/privacy">Privacy</Link>
                  <Link href="/terms">Terms</Link>
                </nav>
              </div>
            </div>

            {/* Status */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm">24/7 Emergency Service</span>
              </div>
              <Button variant="outline" className="w-full">
                <Link href="/contact">Request Service</Link>
              </Button>
            </div>
          </div>

          <Separator />

          {/* Bottom section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="text-sm text-gray-500">© 2024 ProPlumb. All rights reserved</div>
              <div className="text-sm text-gray-500">
                Designed & Built by{" "}
                <Link href="https://davidgeaney.com" className="text-primary hover:text-primary/80 font-medium">
                  David Geaney
                </Link>
              </div>
            </div>
            <div className="flex gap-4">
              <Link href="https://twitter.com" className="text-gray-400 hover:text-gray-600">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="https://linkedin.com" className="text-gray-400 hover:text-gray-600">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="https://facebook.com" className="text-gray-400 hover:text-gray-600">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="https://youtube.com" className="text-gray-400 hover:text-gray-600">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

