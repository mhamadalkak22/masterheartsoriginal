"use client"

import { m } from "framer-motion"
import { ReactNode } from "react"
import { fadeUp, defaultViewport } from "@/lib/motion"

interface RevealProps {
  children: ReactNode
  width?: "fit-content" | "100%"
  className?: string
  delay?: number
}

export function Reveal({ children, width = "100%", className, delay = 0 }: RevealProps) {
  return (
    <m.div
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      transition={{ duration: 0.25, delay, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ width }}
      className={className}
    >
      {children}
    </m.div>
  )
}
