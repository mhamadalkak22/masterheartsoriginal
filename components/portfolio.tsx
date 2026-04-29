"use client"

import Image from "next/image"
import Link from "next/link"
import { m } from "framer-motion"
import { ExternalLink, Monitor, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  defaultViewport,
  fadeUp,
  staggerContainer,
  staggerItem,
} from "@/lib/motion"
import { portfolioItems, type PortfolioItem } from "@/lib/portfolio-items"
import { Reveal } from "@/components/reveal"

export { portfolioItems, type PortfolioItem } from "@/lib/portfolio-items"

interface PortfolioProps {
  showAll?: boolean
}

export function Portfolio({ showAll = false }: PortfolioProps) {
  const webItems = portfolioItems
    .filter((item) => item.category === "web")
    .slice(0, showAll ? undefined : 4)

  const mobileItems = portfolioItems
    .filter((item) => item.category === "mobile")
    .slice(0, showAll ? undefined : 4)

  const renderGrid = (items: PortfolioItem[]) => (
    <m.div
      className="grid gap-10 md:grid-cols-2"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    >
      {items.map((item, index) => (
        <m.div
          key={item.title + index}
          variants={staggerItem}
          className="group relative flex flex-col rounded-[2.5rem] border border-primary/10 bg-background/20 backdrop-blur-2xl transition-all duration-700 hover:border-primary/30 hover:bg-background/40 hover:shadow-[0_20px_50px_rgba(var(--primary),0.1)]"
        >
          {/* Top-Right Glowing Light Leak */}
          <div className="absolute -top-12 -right-12 z-0 h-40 w-40 rounded-full bg-primary/10 blur-[60px] transition-all duration-700 group-hover:bg-primary/20 group-hover:blur-[80px]" />

          {/* Image Container */}
          <div className="relative aspect-16/10 w-full overflow-hidden p-3 pb-0">
            <div className="relative h-full w-full overflow-hidden rounded-4xl bg-secondary/50">
              <Image
                src={item.image}
                alt={item.title}
                fill
                loading="lazy"
                className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-110 group-hover:rotate-1"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay Gradients */}
              <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-40" />
              <div className="absolute inset-0 bg-primary/0 mix-blend-overlay transition-colors duration-700 group-hover:bg-primary/10" />

              {/* Floating Link Icon */}
              <m.a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 12 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-6 right-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-background/80 text-primary backdrop-blur-xl shadow-2xl transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                aria-label={`Visit ${item.title}`}
              >
                <ExternalLink size={24} />
              </m.a>
            </div>
          </div>

          {/* Content Section */}
          <div className="relative z-10 p-10 pt-8">
            <div className="mb-6 flex flex-wrap gap-2">
              {item.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80 transition-all duration-500 group-hover:border-primary/30 group-hover:bg-primary/10 group-hover:text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="mb-4 text-3xl font-extrabold tracking-tighter text-foreground transition-colors duration-500 group-hover:text-primary md:text-4xl">
              {item.title}
            </h3>

            <p className="mb-8 text-lg leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-foreground line-clamp-3">
              {item.description}
            </p>

            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary opacity-0 transition-all duration-500 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
              Explore Project
              <div className="h-0.5 w-12 bg-primary/40 transition-all duration-500 group-hover:w-20 group-hover:bg-primary" />
            </div>
          </div>

          {/* Subtle bottom light bar */}
          <div className="absolute bottom-0 left-10 right-10 h-1 bg-linear-to-r from-transparent via-primary/20 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
        </m.div>
      ))}
    </m.div>
  )

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <m.div
            className="text-center mb-16"
            variants={fadeUp}
          >
            <span className="text-primary text-sm font-bold tracking-[0.3em] uppercase">
              Curated Work
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mt-4 mb-6 text-balance">
              Recent Case Studies
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A selection of premium digital products and web experiences crafted with meticulous attention to detail.
            </p>
          </m.div>
        </Reveal>

        <Reveal delay={0}>
          <Tabs defaultValue="web" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-background/40 backdrop-blur-md p-1.5 border border-border/50 rounded-2xl h-auto shadow-xl">
                <TabsTrigger
                  value="web"
                  className="px-8 py-3 text-sm font-semibold rounded-xl gap-2 transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-[0_0_20px_rgba(var(--primary),0.3)]"
                >
                  <Monitor className="size-4" />
                  Web Projects
                </TabsTrigger>
                <TabsTrigger
                  value="mobile"
                  className="px-8 py-3 text-sm font-semibold rounded-xl gap-2 transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-[0_0_20px_rgba(var(--primary),0.3)]"
                >
                  <Smartphone className="size-4" />
                  Mobile Apps
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="web" className="mt-0 outline-none">
              {renderGrid(webItems)}
            </TabsContent>

            <TabsContent value="mobile" className="mt-0 outline-none">
              {renderGrid(mobileItems)}
            </TabsContent>
          </Tabs>
        </Reveal>

        {!showAll && (
          <m.div
            className="text-center mt-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <Button size="lg" variant="outline" asChild>
              <Link href="/work">View All Projects</Link>
            </Button>
          </m.div>
        )}
      </div>
    </section>
  )
}
