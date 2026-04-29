"use client"

import { LazyMotion, domMax, MotionConfig } from "framer-motion"

export function MotionConfigProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domMax} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  )
}
