/**
 * UBA HCM Connect Case Study Configuration
 * UNIQUE: Purple/Pink theme, NO sidebar, medium full-width hero, gradient metrics
 */

export const ubaHcmConnectConfig = {
  metadata: {
    title: "UBA HCM Connect Case Study - Product Designer Portfolio",
    description: "Employee Self-Service Revolution: From Paper to Digital",
  },

  // Medium full-width hero - UNIQUE combination
  hero: {
    company: "UBA GROUP",
    year: "2019-2020",
    title: "Employee Self-Service Revolution: From Paper to Digital",
    titleSize: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
    titleWeight: "font-light",
    description: "Transforming 20,000 employees' HR experience from paper-based bureaucracy to instant digital self-service.",
    descriptionSize: "text-lg md:text-xl",
    skills: ["Product Design", "Enterprise UX", "Change Management"],
    centered: true,
    maxWidth: "lg:max-w-[55%]",
    image: {
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
      alt: "Modern Office Workspace",
      height: "450px",
    },
    overlay: {
      gradient: "bg-gradient-to-b from-background/70 via-background/50 to-background/90",
    },
  },

  // Gradient metrics style - UNIQUE
  metrics: {
    position: "below-hero",
    style: "gradient", // DIFFERENT: Gradient backgrounds (unique to this case study)
    background: "bg-transparent",
    items: [
      { value: "20k", label: "Employees", gradient: "from-purple-500/20 to-pink-500/20" },
      { value: "85%", label: "Adoption Rate", gradient: "from-pink-500/20 to-rose-500/20" },
      { value: "60%", label: "Time Saved", gradient: "from-rose-500/20 to-red-500/20" },
      { value: "8 Mo", label: "Timeline", gradient: "from-red-500/20 to-orange-500/20" },
    ],
    fontSize: {
      value: "text-3xl md:text-4xl",
      label: "text-sm",
    },
  },

  // NO sidebar - like Fraud Analytics
  layout: {
    hasSidebar: false, // DIFFERENT: No sidebar (vs Specta and OrgCompass)
    imagesFullWidth: true, // Full-width images like Fraud
    imageBackground: "bg-muted/50",
    sidebarSticky: false,
    sidebarTop: "",
    maxWidth: "max-w-5xl", // DIFFERENT: 5xl (vs 6xl Fraud, 3xl Specta/OrgCompass)
  },

  // Purple/Pink theme - UNIQUE
  colors: {
    gradients: {
      hero: "from-purple-500/10 via-pink-500/10 to-rose-500/10",
    },
    challengeCards: [],
    impactMetrics: [],
  },

  sections: [
    { id: "overview", title: "Overview" },
    { id: "challenge", title: "The Challenge" },
    { id: "solution", title: "Solution" },
    { id: "impact", title: "Impact" },
  ],

  navigation: {
    prev: { url: "/case-study/specta", label: "Specta" },
    next: { url: "/case-study/uba-redd", label: "UBA REDD" },
  },

  project: {
    company: "UBA Group",
    year: "2019-2020",
    role: "Lead Product Designer",
    roleDetails: "UX/UI Design, User Research, Prototyping",
    team: "Product, Engineering, HR",
    teamDetails: "6-person cross-functional team",
    market: "Nigeria, Africa",
    marketDetails: "Enterprise HR Technology",
  },
}

export type UbaHcmConnectConfig = typeof ubaHcmConnectConfig
