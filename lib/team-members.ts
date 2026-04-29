import type { LucideIcon } from "lucide-react"
import {
  Briefcase,
  Palette,
  PenTool,
  Handshake,
  Headphones,
  MonitorSmartphone,
} from "lucide-react"

export type TeamMember = {
  name: string
  role: string
  icon: LucideIcon
}

/** Master Hearts — leadership & roles with matching icons */
export const teamMembers: readonly TeamMember[] = [
  {
    name: "Majeda Alzoubi",
    role: "General Manager (G.M.)",
    icon: Briefcase,
  },
  {
    name: "Shahed Alali",
    role: "Senior Designer",
    icon: Palette,
  },
  {
    name: "Raghad Ahmad",
    role: "Senior Designer",
    icon: PenTool,
  },
  {
    name: "Tala Mohammad",
    role: "Account Manager",
    icon: Handshake,
  },
  {
    name: "Nawras Yousef",
    role: "Account Manager",
    icon: Headphones,
  },
  {
    name: "Mhamad Alkak",
    role: "Web & Mobile Full-Stack Developer",
    icon: MonitorSmartphone,
  },
]
