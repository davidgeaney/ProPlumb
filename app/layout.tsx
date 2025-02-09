import { Sora } from "next/font/google"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import "./globals.css"

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={sora.variable}>
      <body className={sora.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

