import dynamic from "next/dynamic"

const DynamicHomeContent = dynamic(() => import("@/components/home-content").then((mod) => mod.HomeContent), {
  ssr: false,
})

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <DynamicHomeContent />
    </main>
  )
}

