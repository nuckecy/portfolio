/**
 * UBA REDD Case Study Configuration
 * UNIQUE: Cyan/Teal theme, sidebar enabled, compact hero, bordered metrics
 */

export const ubaReddConfig = {
  metadata: {
    title: "UBA REDD+ Case Study - Product Designer Portfolio",
    description: "Environmental Impact Platform for Climate Action",
  },

  cardInfo: {
    title: "UBA Redd App (Mobile Banking)",
    subtitle: "Pan-African Banking with Mood-Based Personalization",
    description: "Transformed satisfaction from 33% to 85% across 20 countries, driving €15M revenue and 43% digital growth.",
  },

  // Compact hero - smallest of all
  hero: {
    company: "UBA GROUP",
    year: "2020",
    title: "Environmental Impact Platform for Climate Action",
    titleSize: "text-3xl md:text-4xl lg:text-5xl",
    titleWeight: "font-light",
    description: "Designing Africa's first bank-led REDD+ carbon credit platform, connecting forest conservation with financial services.",
    descriptionSize: "text-base md:text-lg",
    skills: ["Product Design", "Impact Design", "Sustainability"],
    centered: true,
    maxWidth: "lg:max-w-[55%]",
  },

  // Bordered metrics - UNIQUE style
  metrics: {
    position: "in-content",
    style: "bordered", // DIFFERENT: Bordered style (unique to this case study)
    background: "bg-transparent",
    items: [
      { value: "500k", label: "Trees Protected" },
      { value: "₦2B", label: "Carbon Credits" },
      { value: "10k", label: "Farmers Impacted" },
      { value: "18 Mo", label: "Timeline" },
    ],
    fontSize: {
      value: "text-2xl md:text-3xl",
      label: "text-xs", // Smallest label size
    },
  },

  // Sidebar enabled, narrow layout
  layout: {
    hasSidebar: true,
    imagesFullWidth: false,
    imageBackground: "bg-transparent",
    sidebarSticky: true,
    sidebarTop: "top-24",
    maxWidth: "lg:max-w-2xl", // DIFFERENT: Narrowest layout (2xl)
  },

  // Cyan/Teal theme - UNIQUE for environmental/sustainability feel
  colors: {
    gradients: {
      hero: "from-cyan-500/10 via-teal-500/10 to-emerald-500/10",
    },
    challengeCards: [],
    impactMetrics: [],
  },

  sections: [
    { id: "overview", title: "Overview" },
    { id: "problem", title: "Problem" },
    { id: "solution", title: "Solution" },
    { id: "impact", title: "Impact" },
  ],

  navigation: {
    prev: { url: "/case-study/uba-hcm-connect", label: "UBA HCM Connect" },
    next: { url: "/case-study/cashamm", label: "Cashamm" },
  },

  project: {
    company: "UBA Group",
    year: "2021",
    role: "UX Lead",
    roleDetails: "Product Design, Research, Strategy",
    team: "Sustainability, Tech, Operations",
    teamDetails: "8-person cross-functional team",
    market: "Africa",
    marketDetails: "Climate Tech, Sustainable Finance",
  },
}

export type UbaReddConfig = typeof ubaReddConfig
