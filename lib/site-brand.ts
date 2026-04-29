/** Logo lives in `public/goo/` (transparent PNG recommended). */
export const brandLogoSrc = "/goo/logo.png" as const

/** Short line under the wordmark in the header */
export const brandTagline = "Empowering brands through digital excellence." as const

/** Set from your remove.bg export — true skips blend modes */
export const brandLogoHasTransparentBackground = true

export const brandLogoPlateBlend: "none" | "multiply" | "screen" = "none"
