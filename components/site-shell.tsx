"use client"

import { AmbientMotion } from "@/components/ambient-motion"
import { MovingBackground } from "@/components/moving-background"

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/*
        Single fixed stack at z-0 so layers paint *above* the body background.
        Negative z-index was hiding everything behind body bg.
      */}
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden
      >
        <div className="relative h-full w-full">
          <MovingBackground />
          <AmbientMotion />
        </div>
      </div>
      <div className="relative z-10 min-h-screen">{children}</div>
    </>
  )
}
