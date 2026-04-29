import dynamic from "next/dynamic"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"

const Portfolio = dynamic(() => import("@/components/portfolio").then(mod => mod.Portfolio))
const Team = dynamic(() => import("@/components/team").then(mod => mod.Team))
const CTA = dynamic(() => import("@/components/cta").then(mod => mod.CTA))
const Footer = dynamic(() => import("@/components/footer").then(mod => mod.Footer))

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <Team />
      <CTA />
      <Footer />
    </main>
  )
}
