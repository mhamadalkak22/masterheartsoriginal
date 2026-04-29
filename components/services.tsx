"use client"

import React, { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { m, AnimatePresence, useReducedMotion } from "framer-motion"
import {
  Paintbrush,
  Smartphone,
  Globe,
  Gauge,
  Headphones,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Megaphone,
  Palette,
  Video,
  BotMessageSquare,
} from "lucide-react"
import { defaultViewport, fadeUp } from "@/lib/motion"
import { menuBarFontClass } from "@/components/navigation"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces designed to engage users and enhance their experience.",
    image: "/services/ui-ux.png",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Websites that look and function perfectly across all devices and screen sizes.",
    image: "/services/responsive-design.png",
  },
  {
    icon: Globe,
    title: "E-Commerce",
    description:
      "Full-featured online stores with secure payments and inventory management.",
    image: "/services/ecommerce.png",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description:
      "Speed optimization and SEO to ensure your website ranks high and loads fast.",
    image: "/services/performance.png",
  },
  {
    icon: ShieldCheck,
    title: "Ongoing Support",
    description:
      "Continuous maintenance and support to keep your website running smoothly.",
    image: "/services/support.png",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description:
      "Crafting unique visual identities and brand stories that resonate with your target audience.",
    image: "/services/brand-identity.jpg",
  },
  {
    icon: Video,
    title: "Content Creation",
    description:
      "High-quality photography, videography, and copy designed to elevate your brand presence.",
    image: "/services/content-creation.jpg",
  },
  {
    icon: Megaphone,
    title: "Paid Ads Management",
    description:
      "Data-driven advertising campaigns across Google, Meta, and LinkedIn to drive growth.",
    image: "/services/paid-ads.jpg",
  },
  {
    icon: BotMessageSquare,
    title: "AI-Powered Marketing",
    description:
      "Smarter campaigns powered by AI — precise targeting, optimized creatives, and continuous performance improvement without losing your brand's identity.",
    image: "/services/ai-marketing.jpg",
  },
]

export function Services() {
  const reduceMotion = useReducedMotion()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [cardsToShow, setCardsToShow] = useState(1)
  const [isMounted, setIsMounted] = useState(false)

  // Avoid hydration mismatch by waiting for mount to check screen size
  useEffect(() => {
    setIsMounted(true)
    const checkScreen = () => {
      if (window.innerWidth >= 1024) setCardsToShow(3)
      else if (window.innerWidth >= 768) setCardsToShow(2)
      else setCardsToShow(1)
    }
    checkScreen()
    window.addEventListener("resize", checkScreen)
    return () => window.removeEventListener("resize", checkScreen)
  }, [])

  const maxIndex = Math.max(0, services.length - cardsToShow)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  // Autoplay
  useEffect(() => {
    if (reduceMotion || isHovered || !isMounted) return
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide, isHovered, reduceMotion, isMounted])

  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = offset.x
    const swipeThreshold = 50
    if (swipe < -swipeThreshold) {
      nextSlide()
    } else if (swipe > swipeThreshold) {
      prevSlide()
    }
  }

  const getTranslateX = () => {
    if (!isMounted) return 0
    const gap = 24 // 1.5rem (gap-6)
    // Width of one card in px: container is split equally among cardsToShow
    // We express as a negative pixel offset so Framer can animate it natively
    // This is calculated at render time; the actual container width is handled via
    // CSS calc so we derive a percentage string for correctness
    const cardWidthPercentage = 100 / cardsToShow
    return `calc(-${currentIndex * cardWidthPercentage}% - ${currentIndex * (gap / cardsToShow)}px)`
  }

  return (
    <section className="relative bg-card py-24 overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] translate-y-1/3 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <Reveal>
          <m.div
            className="mb-14 text-center md:mb-20"
            variants={fadeUp}
          >
            <p
              className={cn(
                menuBarFontClass,
                "text-balance text-2xl text-primary md:text-3xl lg:text-4xl uppercase tracking-[0.2em]",
              )}
            >
              Our Expertise
            </p>
            <p
              className={cn(
                menuBarFontClass,
                "mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg",
              )}
            >
              Crafting premium digital experiences through data-driven design and cutting-edge technology.
            </p>
          </m.div>
        </Reveal>

        <Reveal delay={0}>
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Main Carousel Track */}
            <div className="overflow-hidden px-2 py-4 -mx-2">
              <m.div
                className="flex gap-6 cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={handleDragEnd}
                animate={{ x: getTranslateX() }}
                transition={{ type: "spring", stiffness: 350, damping: 35, mass: 0.6 }}
              >
                {services.map((service, index) => {
                  const isActive = index >= currentIndex && index < currentIndex + cardsToShow

                  return (
                    <m.div
                      key={service.title}
                      className="shrink-0"
                      style={{
                        width: isMounted ? `calc(${100 / cardsToShow}% - ${(24 * (cardsToShow - 1)) / cardsToShow}px)` : "100%"
                      }}
                      animate={{
                        opacity: isMounted ? (isActive ? 1 : 0.4) : 1,
                        scale: isMounted ? (isActive ? 1 : 0.95) : 1,
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <Link
                        href="/services"
                        className="group relative flex h-full min-h-[460px] flex-col rounded-[2.5rem] border border-primary/10 bg-background/20 backdrop-blur-2xl transition-all duration-700 hover:border-primary/30 hover:bg-background/40 hover:shadow-[0_20px_50px_rgba(var(--primary),0.1)]"
                      >
                        {/* Top-Right Glowing Light Leak */}
                        <div className="absolute -top-12 -right-12 z-0 h-40 w-40 rounded-full bg-primary/10 blur-[60px] transition-all duration-700 group-hover:bg-primary/20 group-hover:blur-[80px]" />

                        {/* Service Image at Top */}
                        <div className="relative aspect-16/10 w-full overflow-hidden p-3 pb-0">
                          <div className="relative h-full w-full overflow-hidden rounded-4xl bg-secondary/50">
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              loading="lazy"
                              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-40" />

                            {/* Icon Badge Overlay */}
                            <div className="absolute bottom-6 left-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-background/80 text-primary backdrop-blur-xl shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                              <service.icon className="transition-transform duration-500 group-hover:-rotate-6" size={28} aria-hidden />
                            </div>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="relative z-10 p-10 pt-8 flex flex-col flex-1">
                          <h3
                            className={cn(
                              menuBarFontClass,
                              "mb-4 text-3xl font-extrabold tracking-tighter text-foreground group-hover:text-primary transition-colors duration-500 md:text-4xl",
                            )}
                          >
                            {service.title}
                          </h3>

                          <p className="mb-8 flex-1 text-lg leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-foreground line-clamp-3">
                            {service.description}
                          </p>

                          <div className="mt-auto flex items-center">
                            <span
                              className={cn(
                                menuBarFontClass,
                                "inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary transition-all duration-300",
                              )}
                            >
                              Explore Service
                              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-primary group-hover:text-primary-foreground">
                                <ArrowRight className="size-4" />
                              </span>
                            </span>
                          </div>
                        </div>

                        {/* Subtle bottom light bar */}
                        <div className="absolute bottom-0 left-10 right-10 h-1 bg-linear-to-r from-transparent via-primary/20 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                      </Link>
                    </m.div>
                  )
                })}
              </m.div>
            </div>

            {/* Navigation & Pagination Controls */}
            <div className="mt-12 flex items-center justify-between md:mt-16">
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className="group relative flex h-6 items-center justify-center px-1"
                    aria-label={`Go to slide ${idx + 1}`}
                  >
                    <m.div
                      className={cn(
                        "h-2 rounded-full transition-colors duration-300",
                        currentIndex === idx ? "bg-primary" : "bg-primary/20 group-hover:bg-primary/40"
                      )}
                      initial={false}
                      animate={{
                        width: currentIndex === idx ? 24 : 8
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  </button>
                ))}
              </div>

              {/* Prev/Next Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevSlide}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/50 backdrop-blur-sm text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary hover:text-primary-foreground"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/50 backdrop-blur-sm text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary hover:text-primary-foreground"
                  aria-label="Next slide"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
