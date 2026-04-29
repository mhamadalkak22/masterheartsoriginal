"use client"

import { m } from "framer-motion"
import { defaultEase } from "@/lib/motion"

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.38, ease: defaultEase }}
    >
      {children}
    </m.div>
  )
}
