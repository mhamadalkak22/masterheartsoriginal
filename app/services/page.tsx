"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import {
  BarChart3,
  Bot,
  CheckCircle2,
  Clapperboard,
  Lightbulb,
  Megaphone,
  Palette,
  Share2,
  Sparkles,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/cta"
import {
  defaultViewport,
  fadeUp,
  staggerContainer,
  staggerItem,
} from "@/lib/motion"
import { cn } from "@/lib/utils"

const goldBorder = "border-amber-500/25"
const goldIconWrap =
  "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-amber-500/35 bg-amber-500/[0.07] text-amber-400 shadow-[0_0_32px_-8px_rgba(251,191,36,0.25)]"

const services: {
  icon: LucideIcon
  title: string
  items: string[]
  footnote?: string
  audiences?: string[]
}[] = [
  {
    icon: Share2,
    title: "Social media management",
    items: [
      "Content creation",
      "Posting & scheduling",
      "Content strategy",
      "Community management",
      "Monthly performance reports",
    ],
  },
  {
    icon: Megaphone,
    title: "Paid advertising (Meta & Google)",
    items: [
      "Advertising strategy",
      "Optimization & scaling",
      "Campaign setup",
      "Detailed reporting",
    ],
  },
  {
    icon: Palette,
    title: "Visual identity & branding",
    items: [
      "Brand strategy",
      "Color palette & typography",
      "Visual identity design",
      "Brand guidelines",
    ],
  },
  {
    icon: Clapperboard,
    title: "Content production",
    items: [
      "Market analysis",
      "Growth planning",
      "Competitor analysis",
      "Actionable recommendations",
    ],
  },
  {
    icon: Lightbulb,
    title: "Customized marketing packages",
    items: [],
    footnote:
      "Packages designed around your project’s size and goals—clear scope, aligned channels, and measurable outcomes.",
    audiences: [
      "Startups",
      "Medium-sized companies",
      "SMEs",
      "Established brands",
    ],
  },
  {
    icon: Bot,
    title: "AI-Powered Marketing",
    items: [
      "Optimize content based on real audience data",
      "Target the right customers with higher accuracy",
      "Enhance creatives and streamline production",
      "Analyze performance to improve results continuously",
    ],
    footnote:
      "Smarter campaigns, better performance, and scalable growth\u2014without losing your brand\u2019s identity.",
  },
]

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen">
      {/* Ambient backdrop — navy + subtle gold dust */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(251,191,36,0.08),transparent_50%),radial-gradient(ellipse_80%_50%_at_100%_50%,rgba(59,130,246,0.06),transparent_45%),linear-gradient(to_bottom,oklch(0.12_0.01_240),oklch(0.1_0.02_250)_40%,oklch(0.12_0.01_240))]"
        aria-hidden
      />

      <Navigation />

      <motion.section
        className="relative pt-32 pb-12"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-amber-400/90">
              What we offer
            </span>
            <h1 className="mt-4 text-balance bg-gradient-to-br from-foreground via-foreground to-muted-foreground bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
              Our services
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              End-to-end digital marketing support—from organic social and paid media to
              brand systems, content, and packaged programs built for your stage and goals.
            </p>
          </div>
        </div>
      </motion.section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-3xl space-y-6 px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="flex flex-col gap-6"
          >
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                variants={staggerItem}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  "rounded-2xl border bg-card/40 p-6 shadow-sm backdrop-blur-sm md:p-8",
                  goldBorder,
                )}
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                  <div className={goldIconWrap}>
                    <service.icon className="h-7 w-7" strokeWidth={1.75} aria-hidden />
                  </div>
                  <div className="min-w-0 flex-1 space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                        {service.title}
                      </h2>
                      {index === 1 && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/20 bg-amber-500/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-amber-500/90">
                          <BarChart3 className="h-3 w-3" aria-hidden />
                          Meta · Google
                        </span>
                      )}
                      {index === 5 && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/20 bg-amber-500/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-amber-500/90">
                          <Bot className="h-3 w-3" aria-hidden />
                          AI
                        </span>
                      )}
                    </div>

                    {service.items.length > 0 && (
                      <ul className="grid gap-2.5 sm:grid-cols-1">
                        {service.items.map((item) => (
                          <li key={item} className="flex gap-3 text-muted-foreground">
                            <CheckCircle2
                              className="mt-0.5 h-5 w-5 shrink-0 text-amber-500/80"
                              aria-hidden
                            />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {service.footnote && (
                      <p className="leading-relaxed text-muted-foreground">{service.footnote}</p>
                    )}

                    {service.audiences && service.audiences.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-1">
                        {service.audiences.map((label) => (
                          <span
                            key={label}
                            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium text-foreground/90"
                          >
                            <Sparkles className="h-3 w-3 text-amber-500/70" aria-hidden />
                            {label}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  )
}
