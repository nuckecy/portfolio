/**
 * CashAmm Case Study Configuration
 * Theme: Red/Rose/Pink - Unique financial security theme
 * Layout: No sidebar, medium-wide (max-w-4xl), medium hero (60vh)
 * Metrics: Clean style with subtle background
 */

export const cashAmmConfig = {
  metadata: {
    title: "CashAmm Payment Platform Case Study - Product Designer Portfolio",
    description: "Revolutionizing Digital Payments with Enhanced Security",
  },

  cardInfo: {
    title: "Cashaam Platform",
    subtitle: "Democratizing E-Commerce for Small Businesses",
    description: "Built dual-app ecosystem enabling affordable online stores - sole UX engineer handling research, design, and frontend development.",
  },

  hero: {
    company: "CASHAMM",
    year: "2021",
    title: "Cashaam Platform",
    titleSize: "text-3xl md:text-4xl lg:text-5xl",
    titleWeight: "font-light",
    description: "Democratizing E-Commerce for Small Businesses. Built dual-app ecosystem enabling affordable online stores - sole UX engineer handling research, design, and frontend development.",
    descriptionSize: "text-lg md:text-xl",
    skills: ["Product Design", "Payment UX", "Security"],
    centered: true,
    maxWidth: "lg:max-w-[55%]",
  },

  metrics: {
    style: "clean", // UNIQUE: Clean with subtle background
    items: [
      { value: "2M+", label: "Daily Transactions" },
      { value: "99.9%", label: "Uptime" },
      { value: "45%", label: "Faster Checkout" },
      { value: "92%", label: "User Satisfaction" },
    ],
    fontSize: {
      value: "text-2xl md:text-3xl lg:text-4xl", // Medium-large
      label: "text-sm",
    },
  },

  layout: {
    imagesFullWidth: true,
    imageBackground: "bg-muted/50",
    sidebarSticky: true,
    sidebarTop: "top-24",
    hasSidebar: false, // DIFFERENT: No sidebar
    maxWidth: "lg:max-w-4xl", // DIFFERENT: 4xl (between 3xl and 5xl)
  },

  // Red/Rose/Pink theme - UNIQUE for security/finance feel
  colors: {
    gradients: {
      hero: "from-red-500/10 via-rose-500/10 to-pink-500/10",
    },
    challengeCards: [],
    impactMetrics: [],
  },

  sections: [
    { id: "overview", title: "Overview" },
    { id: "challenge", title: "Challenge" },
    { id: "solution", title: "Solution" },
    { id: "impact", title: "Impact" },
  ],

  navigation: {
    prev: { url: "/case-study/uba-redd", label: "UBA REDD" },
    next: { url: "/case-study/zalando-chatbot", label: "Zalando Chatbot" },
  },

  project: {
    company: "CashAmm",
    year: "2022",
    role: "Lead Product Designer",
    roleDetails: "UX/UI Design, User Research, Prototyping",
    team: "Product, Engineering, Security",
    teamDetails: "6-person cross-functional team",
    market: "Global",
    marketDetails: "Digital Payments, Fintech",
  },
}

export type CashAmmConfig = typeof cashAmmConfig

