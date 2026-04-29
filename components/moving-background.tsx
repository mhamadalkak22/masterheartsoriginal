"use client"

import { useReducedMotion } from "framer-motion"

/**
 * Extra slow CSS-driven background motion (mesh + grid).
 * Sits behind {@link AmbientMotion} orbs. Hidden when reduced motion is preferred.
 */
export function MovingBackground() {
  const reduce = useReducedMotion()

  if (reduce) return null

  return (
    <>
      <div className="bg-motion-mesh" aria-hidden />
      <div className="bg-motion-grid" aria-hidden />
    </>
  )
}
