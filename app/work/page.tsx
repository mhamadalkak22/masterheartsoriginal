"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/cta"
import { portfolioItems } from "@/lib/portfolio-items"
import { ExternalLink, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  defaultEase,
  defaultViewport,
  fadeUp,
  staggerContainer,
  staggerItem,
} from "@/lib/motion"

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "We learn about your business, goals, and vision for the project.",
  },
  {
    step: "02",
    title: "Design",
    description: "Creating beautiful mockups and prototypes for your approval.",
  },
  {
    step: "03",
    title: "Development",
    description: "Building your website with clean code and best practices.",
  },
  {
    step: "04",
    title: "Launch",
    description: "Testing, optimizing, and deploying your new website.",
  },
]

export default function WorkPage() {
  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <motion.section
        className="pt-32 pb-16"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
              Projects That Speak for Themselves
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our portfolio of successful projects. Each website is built with passion,
              precision, and a focus on delivering real results.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={defaultViewport}
                transition={{ duration: 0.5, ease: defaultEase, delay: index * 0.05 }}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <motion.div
                    className="aspect-video rounded-2xl bg-card border border-border overflow-hidden relative group"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.25, ease: defaultEase }}
                  >
                    <Image
                      src={item.image}
                      alt={`${item.title} website preview`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center bg-background/0 group-hover:bg-background/50 transition-all duration-300"
                    >
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                          <ArrowUpRight className="text-primary-foreground" size={24} />
                        </div>
                      </div>
                    </a>
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 rounded-full bg-primary/10 text-xs text-primary font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{item.title}</h2>

                  <p className="text-muted-foreground leading-relaxed mb-6">{item.description}</p>

                  <Button asChild>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      Visit Website
                      <ExternalLink className="ml-2" size={16} />
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              How We Bring Your Vision to Life
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            {processSteps.map((item, index) => (
              <motion.div key={index} variants={staggerItem} className="relative">
                <div className="text-5xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  )
}
