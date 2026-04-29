"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SocialMediaBar } from "@/components/social-media-bar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { siteContact } from "@/lib/site-contact"
import {
  defaultViewport,
  fadeUp,
  staggerContainer,
  staggerItem,
} from "@/lib/motion"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useState } from "react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: siteContact.email,
    href: `mailto:${siteContact.email}`,
  },
  {
    icon: Phone,
    title: "Phone",
    value: siteContact.phoneDisplay,
    href: `tel:${siteContact.phoneTel}`,
  },
  {
    icon: MapPin,
    title: "Office",
    value: `${siteContact.addressLine1}, ${siteContact.addressLine2}`,
    href: siteContact.mapsShareUrl,
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", company: "", message: "" })
  }

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
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
              Let&apos;s Start a Conversation
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have a project in mind? We&apos;d love to hear about it. Get in touch and let&apos;s
              discuss how we can help bring your vision to life.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              className="order-2 lg:order-1"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <div className="bg-card rounded-2xl border border-border p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Send className="text-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Your Name *
                        </label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Your Message *
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="ml-2" size={18} />
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <div className="order-1 lg:order-2">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
              >
                <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                <SocialMediaBar className="mb-10" />
              </motion.div>

              <motion.div
                className="space-y-6 mb-10"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
              >
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    variants={staggerItem}
                    whileHover={{ y: -2 }}
                    href={item.href}
                    target={item.icon === MapPin ? "_blank" : undefined}
                    rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>

              <motion.div
                className="mb-12 rounded-2xl border border-border overflow-hidden bg-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
              >
                <div className="aspect-[16/10] w-full min-h-[220px]">
                  <iframe
                    title="Master Hearts office on Google Maps"
                    src={siteContact.mapsEmbedSrc}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-4 py-3">
                  <p className="text-sm text-muted-foreground">
                    King Hussein Business Park, Amman
                  </p>
                  <a
                    href={siteContact.mapsShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </motion.div>

              {/* FAQ */}
              <motion.div
                className="space-y-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
              >
                <motion.h3
                  variants={staggerItem}
                  className="text-xl font-bold text-foreground"
                >
                  Frequently Asked Questions
                </motion.h3>
                {[
                  {
                    q: "How long does a typical project take?",
                    a: "Project timelines vary based on complexity, but most websites take 4-8 weeks from start to launch."
                  },
                  {
                    q: "What is your pricing structure?",
                    a: "We offer competitive fixed-price packages and custom quotes based on your specific needs."
                  },
                  {
                    q: "Do you provide ongoing support?",
                    a: "Yes! We offer maintenance packages to keep your website updated, secure, and running smoothly."
                  }
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="p-4 rounded-xl bg-card border border-border"
                  >
                    <h4 className="font-semibold text-foreground mb-2">{faq.q}</h4>
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
