"use client"

import { m, useReducedMotion } from "framer-motion"
import { defaultEase } from "@/lib/motion"

/**
 * Lives inside SiteShell’s fixed z-0 layer — use absolute, not fixed, so it stacks with mesh/grid.
 */
export function AmbientMotion() {
  const reduce = useReducedMotion()

  if (reduce) {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-primary/12 blur-3xl" />
        <div className="absolute -right-24 bottom-1/4 h-[24rem] w-[24rem] rounded-full bg-primary/10 blur-3xl" />
      </div>
    )
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <m.div
        className="absolute -left-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-primary/14 blur-3xl"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, 28, -18, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: defaultEase }}
      />
      <m.div
        className="absolute -right-24 bottom-1/3 h-[26rem] w-[26rem] rounded-full bg-primary/12 blur-3xl"
        animate={{
          x: [0, -36, 22, 0],
          y: [0, -32, 18, 0],
          scale: [1, 1.1, 1, 1],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: defaultEase, delay: 1 }}
      />
      <m.div
        className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
        animate={{ opacity: [0.45, 0.75, 0.5], scale: [0.88, 1.08, 0.92] }}
        transition={{ duration: 12, repeat: Infinity, ease: defaultEase, delay: 0.5 }}
      />
    </div>
  )
}
