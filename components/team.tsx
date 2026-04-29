"use client"

import { m } from "framer-motion"
import {
  defaultViewport,
  fadeUp,
  staggerContainer,
  staggerItem,
} from "@/lib/motion"
import { teamMembers } from "@/lib/team-members"

export function Team() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <m.div
          className="mb-16 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Our Team
          </span>
          <h2 className="mt-3 mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
            The People Behind Master Hearts
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Strategy, design, accounts, and engineering — one team focused on your growth.
          </p>
        </m.div>

        <m.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {teamMembers.map((member) => (
            <m.div
              key={member.name}
              variants={staggerItem}
              whileHover={{ y: -3 }}
              className="group rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <member.icon className="text-primary" size={28} aria-hidden />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{member.role}</p>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  )
}
