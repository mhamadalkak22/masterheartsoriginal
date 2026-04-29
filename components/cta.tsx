"use client"

import Link from "next/link"
import { m, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { defaultEase, defaultViewport, scaleIn } from "@/lib/motion"

export function CTA() {
  const reduce = useReducedMotion()

  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <m.div
          className="relative rounded-3xl bg-background border border-border p-12 md:p-16 overflow-hidden"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {/* Background decorations */}
          {reduce ? (
            <>
              <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
            </>
          ) : (
            <>
              <m.div
                className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
                animate={{ x: [0, 12, -6, 0], y: [0, 8, -4, 0] }}
                transition={{ duration: 16, repeat: Infinity, ease: defaultEase }}
              />
              <m.div
                className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
                animate={{ x: [0, -10, 6, 0], y: [0, -8, 5, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: defaultEase, delay: 0.5 }}
              />
            </>
          )}

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {
                "Let's collaborate to create a website that not only looks great but also drives real results for your business. Get in touch today!"
              }
            </p>
            <m.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={defaultViewport}
              transition={{ delay: 0.12, duration: 0.4 }}
            >
              <Button size="lg" asChild>
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/work">See Our Work</Link>
              </Button>
            </m.div>
          </div>
        </m.div>
      </div>
    </section>
  )
}
