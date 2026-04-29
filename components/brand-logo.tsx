"use client"

import Image from "next/image"
import { m, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"
import {
  brandLogoHasTransparentBackground,
  brandLogoPlateBlend,
  brandLogoSrc,
} from "@/lib/site-brand"

const plateSizes = {
  sm: { frame: "min-h-12 px-2 py-1.5", imgH: 44, imgW: 56 },
  md: {
    frame: "min-h-[3.75rem] px-2 py-2 sm:min-h-16 sm:px-2.5 sm:py-2",
    imgH: 64,
    imgW: 82,
  },
  lg: {
    frame: "min-h-[4.5rem] px-2.5 py-2 sm:min-h-[5rem] sm:px-3 sm:py-2.5",
    imgH: 80,
    imgW: 102,
  },
  responsive: {
    frame: "min-h-12 px-2 py-1.5 sm:min-h-16 sm:px-2.5 sm:py-2 md:min-h-[4.5rem] md:px-2.5 md:py-2",
    imgH: 0, // Handled via CSS classes
    imgW: 0,
  },
} as const

/** Icon-only mark — no glass plate (e.g. header over video) */
const markSizes = {
  sm: { imgH: 72, imgW: 78 },
  md: { imgH: 140, imgW: 151 },
  lg: { imgH: 160, imgW: 173 },
  responsive: { imgH: 0, imgW: 0 }, // Handled via CSS classes
} as const

type BrandLogoProps = {
  className?: string
  size?: keyof typeof plateSizes
  /** `mark` = emblem only, larger, no rounded square frame */
  variant?: "default" | "mark"
}

export function BrandLogo({ className, size = "md", variant = "default" }: BrandLogoProps) {
  const reduce = useReducedMotion()

  if (variant === "mark") {
    const { imgH, imgW } = markSizes[size]
    const blend = brandLogoHasTransparentBackground ? "none" : brandLogoPlateBlend

    return (
      <m.div
        className={cn("shrink-0", className)}
        animate={reduce ? false : { y: [0, -1.5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{
          scale: 1.04,
          transition: { type: "spring", stiffness: 400, damping: 24 },
        }}
        whileTap={{ scale: 0.98 }}
      >
        <Image
          src={brandLogoSrc}
          alt=""
          width={size === "responsive" ? 151 : imgW}
          height={size === "responsive" ? 140 : imgH}
          style={size === "responsive" ? undefined : { width: "auto", height: "auto", maxWidth: imgW, maxHeight: imgH }}
          className={cn(
            "object-contain drop-shadow-[0_2px_12px_oklch(0_0_0/0.55)] transition-all duration-300",
            size === "responsive" && "h-12 w-auto sm:h-16 md:h-20 lg:h-24 xl:h-28",
            blend === "multiply" && "mix-blend-multiply",
            blend === "screen" && "mix-blend-screen"
          )}
          priority
          sizes="(max-width: 640px) 176px, 208px"
        />
      </m.div>
    )
  }

  const { frame, imgH, imgW } = plateSizes[size]
  const blend = brandLogoHasTransparentBackground ? "none" : brandLogoPlateBlend

  return (
    <m.div
      className={cn("shrink-0", className)}
      animate={reduce ? false : { y: [0, -1.5, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{
        scale: 1.03,
        transition: { type: "spring", stiffness: 400, damping: 24 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className={cn(
          "relative flex items-center justify-center rounded-2xl",
          "border border-primary/40 bg-background/60 backdrop-blur-md",
          "shadow-md shadow-black/15 isolation-isolate",
          frame
        )}
      >
        <Image
          src={brandLogoSrc}
          alt="Master Hearts Marketing"
          width={size === "responsive" ? 102 : imgW}
          height={size === "responsive" ? 80 : imgH}
          style={size === "responsive" ? undefined : { width: "auto", height: "auto", maxWidth: imgW, maxHeight: imgH }}
          className={cn(
            "object-contain transition-all duration-300",
            size === "responsive" && "h-10 w-auto sm:h-12 md:h-16 lg:h-20",
            blend === "multiply" && "mix-blend-multiply",
            blend === "screen" && "mix-blend-screen",
            blend === "none" && "drop-shadow-[0_1px_8px_oklch(0_0_0/0.45)]"
          )}
          priority
          sizes="(max-width: 640px) 200px, 240px"
        />
      </div>
    </m.div>
  )
}
