"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { AnimatePresence, m } from "framer-motion"
import { Menu, Phone, X } from "lucide-react"
import { BrandLogo } from "@/components/brand-logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { siteContact } from "@/lib/site-contact"
import { defaultEase } from "@/lib/motion"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Works" },
  { href: "/contact", label: "Contact" },
] as const

/** Reuse in sections that should read like the main menu (Inter, heavy weight, tight tracking). */
export const menuBarFontClass =
  "font-extrabold tracking-tighter"

const navLinkClass = cn(
  menuBarFontClass,
  "text-[0.8125rem] transition-all duration-300 hover:text-primary hover:tracking-widest focus-visible:text-primary focus-visible:outline-none sm:text-sm md:text-[0.9375rem]",
)

const SCROLL_TOP = 12

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_TOP)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const solidBar = scrolled || isOpen

  return (
    <m.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: defaultEase }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        solidBar
          ? "border-b border-border/50 bg-background/80 backdrop-blur-xl py-3 shadow-lg"
          : "border-b border-transparent bg-transparent py-5"
      )}
    >
      <nav className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className={cn(
              "shrink-0 rounded-xl outline-none ring-offset-2 transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary",
              solidBar ? "ring-offset-background" : "ring-offset-transparent"
            )}
            aria-label="Master Hearts — Home"
          >
            <BrandLogo variant="mark" size="responsive" />
          </Link>

          <div className="hidden min-w-0 flex-1 justify-center gap-8 px-2 lg:flex xl:gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  navLinkClass,
                  solidBar ? "text-foreground/80" : "text-white/90"
                )}
              >
                <m.span
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="inline-block"
                >
                  {link.label}
                </m.span>
              </Link>
            ))}
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-4 sm:gap-6">
            <a
              href={`tel:${siteContact.phoneTel}`}
              className="hidden flex-col items-end leading-none md:flex group"
            >
              <span className="mb-1 flex items-center gap-1.5 text-primary">
                <Phone className="size-3.5 shrink-0 transition-transform duration-300 group-hover:rotate-12" aria-hidden />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em]">
                  Get In Touch
                </span>
              </span>
              <span className="font-extrabold tracking-tight transition-colors duration-300 group-hover:text-primary tabular-nums text-foreground">
                {solidBar ? (
                  <span className="text-foreground">{siteContact.phoneDisplay}</span>
                ) : (
                  <span className="text-white">{siteContact.phoneDisplay}</span>
                )}
              </span>
            </a>

            <ThemeToggle
              className={cn(
                "border-border/50 bg-secondary/50 text-foreground hover:bg-primary hover:text-primary-foreground shadow-sm transition-all duration-300"
              )}
            />

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "rounded-xl p-2.5 border transition-all duration-300 hover:bg-primary hover:text-primary-foreground lg:hidden",
                solidBar
                  ? "text-foreground bg-secondary/50 border-border/50"
                  : "text-white bg-white/10 border-white/20"
              )}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <m.div
              className="mt-4 overflow-hidden border-t border-border/50 pt-4 lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: defaultEase }}
            >
              <m.div
                className="flex flex-col gap-4 pb-4"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22, ease: defaultEase }}
              >
                <a
                  href={`tel:${siteContact.phoneTel}`}
                  className="flex flex-col rounded-2xl border border-border/50 bg-secondary/50 px-5 py-4 md:hidden group"
                >
                  <span className="mb-1 flex items-center gap-2 text-primary">
                    <Phone className="size-4 shrink-0 transition-transform duration-300 group-hover:rotate-12" aria-hidden />
                    <span className="text-[10px] font-extrabold uppercase tracking-widest">
                      Get In Touch
                    </span>
                  </span>
                  <span className="font-extrabold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 tabular-nums">
                    {siteContact.phoneDisplay}
                  </span>
                </a>

                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(navLinkClass, "py-1")}
                  >
                    {link.label}
                  </Link>
                ))}
              </m.div>
            </m.div>
          )}
        </AnimatePresence>
      </nav>
    </m.header>
  )
}
