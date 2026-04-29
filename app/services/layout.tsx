import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Social media management, paid advertising, branding, content production, and customized marketing packages tailored to your business.",
}

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
