"use client"

import Link from "next/link"
import { m } from "framer-motion"
import { Mail, MapPin, Phone, Atom } from "lucide-react"
import { BrandLogo } from "@/components/brand-logo"
import { SocialMediaBar } from "@/components/social-media-bar"
import { siteContact } from "@/lib/site-contact"
import {
  defaultViewport,
  fadeUp,
  staggerContainer,
  staggerItem,
} from "@/lib/motion"

export function Footer() {
  return (
    <footer className="relative bg-background/20 backdrop-blur-2xl border-t border-primary/10">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-full bg-primary/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <m.div
          className="grid grid-cols-1 md:grid-cols-4 gap-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {/* Brand */}
          <m.div className="md:col-span-2" variants={staggerItem}>
            <div className="flex items-center gap-4 mb-6">
              <BrandLogo size="lg" />
              <span className="font-extrabold text-2xl tracking-tighter text-foreground">
                MASTER HEARTS
              </span>
            </div>
            <p className="text-muted-foreground/80 max-w-md text-lg leading-relaxed mb-8">
              We craft beautiful, high-performance websites and digital experiences that
              help businesses grow and succeed in the digital landscape.
            </p>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
                Connect With Us
              </p>
              <SocialMediaBar />
            </div>
          </m.div>

          {/* Quick Links */}
          <m.div variants={staggerItem}>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-primary">Explorer</h4>
            <ul className="space-y-4">
              {(
                [
                  { label: "Home", href: "/" },
                  { label: "About", href: "/about" },
                  { label: "Services", href: "/services" },
                  { label: "Works", href: "/work" },
                  { label: "Contact", href: "/contact" },
                ] as const
              ).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base font-medium text-muted-foreground transition-all duration-300 hover:text-primary hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </m.div>

          {/* Contact Info */}
          <m.div variants={staggerItem}>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-primary">Inquiries</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground/80 hover:text-primary transition-colors group">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 transition-colors group-hover:bg-primary/20">
                  <Mail size={18} className="text-primary" />
                </div>
                <a
                  href={`mailto:${siteContact.email}`}
                  className="text-sm font-medium"
                >
                  {siteContact.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground/80 hover:text-primary transition-colors group">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 transition-colors group-hover:bg-primary/20">
                  <Phone size={18} className="text-primary" />
                </div>
                <a
                  href={`tel:${siteContact.phoneTel}`}
                  className="text-sm font-medium"
                >
                  {siteContact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground/80 hover:text-primary transition-colors group">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 transition-colors group-hover:bg-primary/20 mt-1">
                  <MapPin size={18} className="text-primary" />
                </div>
                <a
                  href={siteContact.mapsShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium leading-relaxed"
                >
                  {siteContact.addressLine1}
                  <br />
                  {siteContact.addressLine2}
                </a>
              </li>
            </ul>
          </m.div>
        </m.div>

        <m.div
          className="border-t border-primary/10 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <p className="text-muted-foreground/60 text-xs tracking-wide">
              &copy; {new Date().getFullYear()} Master Hearts Marketing. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-8">
            <Link
              href="#"
              className="text-muted-foreground/60 hover:text-primary transition-colors text-xs font-medium uppercase tracking-widest"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-muted-foreground/60 hover:text-primary transition-colors text-xs font-medium uppercase tracking-widest"
            >
              Terms
            </Link>
          </div>
        </m.div>
      </div>
    </footer>
  )
}
