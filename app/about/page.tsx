"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/cta"
import { Users, Target, Award, Clock } from "lucide-react"
import { Team } from "@/components/team"
import {
  defaultViewport,
  fadeUp,
  staggerContainer,
  staggerItem,
} from "@/lib/motion"

const stats = [
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Target, value: "100+", label: "Projects Completed" },
  { icon: Award, value: "5+", label: "Years Experience" },
  { icon: Clock, value: "24/7", label: "Support Available" },
]

const values = [
  {
    title: "Quality First",
    description:
      "We never compromise on quality. Every line of code and every pixel is crafted with care and attention to detail.",
  },
  {
    title: "Client-Focused",
    description:
      "Your success is our success. We work closely with you to understand your goals and deliver solutions that exceed expectations.",
  },
  {
    title: "Innovation Driven",
    description:
      "We stay ahead of the curve, using the latest technologies and best practices to build future-proof websites.",
  },
  {
    title: "Transparent Process",
    description:
      "Clear communication and honest pricing. You'll always know what's happening with your project.",
  },
]

export default function AboutPage() {
  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <motion.section
        className="pt-32 pb-16"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
              We&apos;re a Team of Passionate Digital Creators
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Master Hearts Marketing was founded with a simple mission: to help businesses
              succeed online through beautiful, functional, and high-performance websites.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="text-center p-6 rounded-xl bg-card border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-primary" size={24} />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Building Digital Excellence Since Day One
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  What started as a small freelance operation has grown into a full-service web
                  development agency. Over the years, we&apos;ve had the privilege of working with
                  businesses of all sizes, from startups to established enterprises.
                </p>
                <p>
                  Our team brings together diverse skills in web development, design, and digital
                  strategy. We believe that great websites are built on a foundation of
                  understanding our clients&apos; unique needs and goals.
                </p>
                <p>
                  Today, we continue to push the boundaries of what&apos;s possible on the web,
                  staying ahead of trends while focusing on what matters most: delivering results
                  for our clients.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <motion.div
                variants={staggerItem}
                className="aspect-square rounded-2xl bg-secondary flex items-center justify-center"
              >
                <div className="text-6xl font-bold text-primary/20">MH</div>
              </motion.div>
              <motion.div
                variants={staggerItem}
                className="aspect-square rounded-2xl bg-primary/10 flex items-center justify-center mt-8"
              >
                <div className="text-4xl font-bold text-primary/30">♡</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              What Drives Us Forward
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -2 }}
                className="p-8 rounded-xl bg-card border border-border"
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="bg-card">
        <Team />
      </div>

      <CTA />
      <Footer />
    </main>
  )
}
