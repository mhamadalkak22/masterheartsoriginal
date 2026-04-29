/**
 * All client projects for the site. Used by:
 * - Homepage “Our Recent Work” (`components/portfolio.tsx`, first 4 items)
 * - Full list at `/work` (`app/work/page.tsx`)
 *
 * Images live under `public/` (e.g. `public/work/p8.jpeg` → `/work/p8.jpeg`).
 */
export type PortfolioItem = {
  title: string
  description: string
  url: string
  tags: string[]
  category: "web" | "mobile"
  /** Path under `public/` */
  image: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Hoover Hotspot",
    description:
      "Modern restaurant website featuring a dynamic full menu catalog, seamless ordering integration, and an elegant responsive design.",
    url: "https://restaurent-website-tau.vercel.app/",
    tags: ["Restaurant", "Food", "React.js"],
    category: "web",
    image: "/work/hoover-hotspot.jpg",
  },
  {
    title: "HH Tech Hub",
    description:
      "A dedicated tech hub platform offering comprehensive technology solutions, professional services, and innovative digital products.",
    url: "https://hhtechhub.com/",
    tags: ["Technology", "Corporate", "Services"],
    category: "web",
    image: "/work/hhtechhub.png",
  },
  {
    title: "Alpha International",
    description:
      "Corporate site for an Amman-based aviation and travel group—General Sales Agent (GSA) services, freight forwarding, cargo and passenger charter, and travel & tourism, with services, news, and contact.",
    url: "https://alpha-intern.com/",
    tags: ["Corporate", "Aviation", "Travel"],
    category: "web",
    image: "/work/p9.jpeg",
  },
  {
    title: "Dahab Travel & Tourism",
    description:
      "Full-service travel agency site—tickets, hotels, insurance, visas, and Ethiopian Airlines offers—with destination network, business travel, and contact details.",
    url: "https://dahabtt.com/",
    tags: ["Travel", "Tourism", "Multi-page"],
    category: "web",
    image: "/work/p10.jpeg",
  },
  {
    title: "Sola Rosette",
    description:
      "Arabic-first e-commerce for natural skincare and haircare—product categories, bundles, ingredients, blog, and customer stories—with currency and language switching.",
    url: "https://solarosette.com/",
    tags: ["E-Commerce", "Beauty", "Arabic"],
    category: "web",
    image: "/work/p11.jpeg",
  },
  {
    title: "UTC Decoration",
    description:
      "Corporate site for a Kuwait-based decor company—aluminum, steel, stainless steel, glass, mirrors, carports, railings, and interior decoration, with services, projects, and contact.",
    url: "https://www.utc-decoration.com/",
    tags: ["Corporate", "Construction", "Multi-page"],
    category: "web",
    image: "/work/p8.jpeg",
  },
  {
    title: "Vendom",
    description:
      "Designer appliance storefront with rich editorial layouts, promotions, and a polished shopping experience.",
    url: "https://vendom-frontend.vercel.app/",
    tags: ["E-Commerce", "Retail", "React.js"],
    category: "web",
    image: "/work/p6.jpeg",
  },
  {
    title: "Town of Luxury",
    description:
      "Corporate site for premier construction and fit-out solutions in KSA—services, portfolio, certifications, and partnerships.",
    url: "https://www.townofluxurysa.com/en",
    tags: ["Corporate", "Construction", "Multi-page"],
    category: "web",
    image: "/work/p7.jpeg",
  },
  {
    title: "Anwar Hashem",
    description:
      "Professional portfolio website showcasing creative work and services with modern design aesthetics.",
    url: "https://anwarhashem.com/index.html",
    tags: ["Portfolio", "Design", "Personal Brand"],
    category: "web",
    image: "/work/p4.png",
  },
  {
    title: "Baalbeck Tourism Shop",
    description:
      "E-commerce platform for a tourism shop featuring local products and cultural items from the historic city of Baalbeck.",
    url: "https://www.baalbecktourismshop.com/en",
    tags: ["E-Commerce", "Tourism", "Multi-language"],
    category: "web",
    image: "/work/p5.png",
  },
  {
    title: "Asia Bragonzi",
    description:
      "Elegant personal website with sophisticated design and smooth animations for a professional presence.",
    url: "https://asia-bragonzi-two.vercel.app/",
    tags: ["Personal", "Elegant", "Animations"],
    category: "web",
    image: "/work/img-0.png",
  },
  {
    title: "GogoCash: Watch & Earn",
    description:
      "Watch shorts, earn points & gems, spin daily, invite friends & withdraw rewards.",
    url: "https://play.google.com/store/apps/details?id=com.shahrukh.gogoapp",
    tags: ["Mobile", "Rewards", "Entertainment"],
    category: "mobile",
    image: "/work/gogocash.png",
  },
  {
    title: "Clova-Wellness AI",
    description:
      "Metabolic health coaching with AI from continuous glucose monitoring (CGM).",
    url: "https://play.google.com/store/apps/details?id=com.iwell",
    tags: ["Mobile", "Health", "AI"],
    category: "mobile",
    image: "/work/clova-wellness.png",
  },
  {
    title: "CG2Plus",
    description:
      "iWel advanced mobile continuous glucose monitoring (CGM) system.",
    url: "https://play.google.com/store/apps/details?id=com.iwelhealth.android_cg2",
    tags: ["Mobile", "Health", "Tracking"],
    category: "mobile",
    image: "/work/cg2plus.png",
  },
  {
    title: "CGMPlus2",
    description:
      "Health and wellness tracking - CGM, calories and nutrients.",
    url: "https://play.google.com/store/apps/details?id=com.iwelhealth.cgmplus2",
    tags: ["Mobile", "Wellness", "CGM"],
    category: "mobile",
    image: "/work/cgmplus2.png",
  }
]
