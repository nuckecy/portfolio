/**
 * Specta Case Study Configuration
 * DIFFERENT from Fraud Analytics - traditional sidebar layout, different colors
 */

export const spectaConfig = {
  metadata: {
    title: "Specta Digital Lending Case Study - Product Designer Portfolio",
    description: "From Weeks to Minutes: Nigeria's Digital Lending Revolution",
  },

  cardInfo: {
    title: "Specta Digital Lending Platform",
    subtitle: "Pioneering Nigeria's First Digital Lending Platform",
    description: "5-minute loan approvals that processed $263M with zero non-performing loans and grew customers by 75%.",
  },

  // Different hero - SMALLER height, sidebar layout, different image
  hero: {
    company: "STERLING BANK",
    year: "2016",
    title: "From Weeks to Minutes: Nigeria's Digital Lending Revolution",
    titleSize: "text-3xl md:text-4xl lg:text-5xl",
    titleWeight: "font-light",
    description: "Pioneering Nigeria's First Digital Lending Platform. 5-minute loan approvals that processed $263M with zero non-performing loans and grew customers by 75%.",
    descriptionSize: "text-xl md:text-2xl",
    skills: ["Product Design", "UX Research", "Fintech"],
    centered: true,
    maxWidth: "lg:max-w-[55%]",
    // No image for Specta
  },

  // Metrics IN content, not below hero
  metrics: {
    position: "in-content", // DIFFERENT: Inside hero card, not separate section
    style: "pills", // DIFFERENT: Pill style instead of clean
    background: "bg-muted/50", // Lighter background
    items: [
      { value: "5 min", label: "Approval Time" },
      { value: "11,000+", label: "Customers (Year 1)" },
      { value: "$263M", label: "Total Disbursed" },
      { value: "0%", label: "Default Rate" },
    ],
    fontSize: {
      value: "text-2xl md:text-3xl", // SMALLER than Fraud Analytics
      label: "text-sm",
    },
  },

  // SIDEBAR ENABLED - major difference
  layout: {
    hasSidebar: true, // KEY DIFFERENCE: Has sidebar
    imagesFullWidth: false, // DIFFERENT: Images stay in container
    imageBackground: "bg-transparent",
    sidebarSticky: true,
    sidebarTop: "top-24",
    maxWidth: "lg:max-w-3xl", // DIFFERENT: Narrower content
  },

  // DIFFERENT color scheme - green/teal vs Fraud's blue/purple
  colors: {
    gradients: {
      hero: "from-emerald-500/10 via-teal-500/10 to-green-500/10", // Green theme
    },
    challengeCards: [],
    impactMetrics: [],
  },

  sections: [
    { id: "overview", title: "Project Summary" },
    { id: "goals", title: "Goals" },
    { id: "approach", title: "Approach" },
    { id: "results", title: "Results" },
    { id: "reflection", title: "Reflection" },
  ],

  navigation: {
    prev: { url: "/case-study/fraud-analytics", label: "Fraud Analytics" },
    next: { url: "/case-study/uba-hcm-connect", label: "UBA HCM Connect" },
  },

  project: {
    company: "Sterling Bank",
    year: "2016-2018",
    role: "Lead Product Designer",
    roleDetails: "End-to-end design, research, prototyping",
    team: "Design, Engineering, Retail/Sales, Financial Analysis, Credit",
    teamDetails: "5-person cross-functional squad",
    market: "Nigeria",
    marketDetails: "Consumer Lending, Fintech",
  },
}

export type SpectaConfig = typeof spectaConfig
