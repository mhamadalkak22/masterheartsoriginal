"use client"

import { useCallback, useEffect, useRef } from "react"
import { useReducedMotion, AnimatePresence, m, useScroll, useTransform } from "framer-motion"
import type { Swiper as SwiperType } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { heroVideos } from "@/lib/hero-videos"
import { ArrowDown, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { fadeUp, defaultViewport } from "@/lib/motion"

import "swiper/css"

export function Hero() {
  const reduce = useReducedMotion()
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const syncPlayback = useCallback(
    (swiper: SwiperType) => {
      const i = swiper.activeIndex
      videoRefs.current.forEach((el, idx) => {
        if (!el) return
        if (idx === i) {
          if (!reduce) void el.play().catch(() => {})
        } else {
          el.pause()
        }
      })
    },
    [reduce]
  )

  useEffect(() => {
    if (reduce) {
      videoRefs.current.forEach((el) => el?.pause())
    }
  }, [reduce])

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden">
      <div className="relative min-h-svh w-full bg-background">
        {/* Parallax Video Background */}
        <m.div style={{ y: videoY }} className="absolute inset-0 z-0">
          <Swiper
            loop={heroVideos.length > 1}
            allowTouchMove={heroVideos.length > 1}
            slidesPerView={1}
            speed={900}
            className="h-full w-full"
            onSlideChange={syncPlayback}
            onSwiper={syncPlayback}
          >
            {heroVideos.map((src, index) => (
              <SwiperSlide key={src} className="relative h-full overflow-hidden">
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el
                  }}
                  className="absolute inset-0 h-full w-full object-cover transform-[translateZ(0)] brightness-[0.4]"
                  src={src}
                  muted
                  playsInline
                  preload={index === 0 ? "auto" : "none"}
                  loop={heroVideos.length <= 1 && !reduce}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </m.div>

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 z-1 bg-linear-to-b from-background/80 via-transparent to-background" />
        
        {/* Content Section */}
        <m.div 
          style={{ opacity }}
          className="relative z-10 flex min-h-svh flex-col items-center justify-center px-6 pt-20 pb-32 text-center"
        >
          <h1 className="mb-6 max-w-5xl text-5xl font-extrabold leading-[1.1] tracking-tight text-white md:text-7xl lg:text-8xl">
            <m.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.4 }}
              className="inline-block"
            >
              Elevating
            </m.span>{" "}
            <m.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.4 }}
              className="inline-block bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
            >
              Digital Heartbeats
            </m.span>
          </h1>

          <m.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="mb-12 max-w-2xl text-lg text-zinc-300 md:text-xl"
          >
            We craft premium, high-performance digital experiences that breathe life into your brand and engage your audience like never before.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <Button 
              size="xl" 
              className="h-16 rounded-2xl px-10 text-lg font-bold shadow-[0_0_30px_rgba(var(--primary),0.3)] transition-all duration-300 hover:scale-105 hover:shadow-primary/40 active:scale-95"
              asChild
            >
              <Link href="/work">View Our Work</Link>
            </Button>
            
            <button className="group flex h-16 items-center gap-4 rounded-2xl border border-white/20 bg-white/10 px-8 text-lg font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-primary/30">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Play className="ml-1 size-4 fill-current" />
              </span>
              Our Story
            </button>
          </m.div>
        </m.div>

        {/* Scroll Indicator */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2"
        >
          <m.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 text-zinc-400"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest">Scroll</span>
            <ArrowDown size={16} />
          </m.div>
        </m.div>
      </div>
    </section>
  )
}
