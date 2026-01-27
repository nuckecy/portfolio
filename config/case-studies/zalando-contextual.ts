/**
 * Zalando Contextual Case Study Configuration
 * Theme: Amber/Yellow/Lime - Unique warm/bright theme for contextual commerce
 * Layout: No sidebar, wide (max-w-5xl), medium hero (45vh)
 * Metrics: Card style (unique presentation)
 */

export const zalandoContextualConfig = {
  metadata: {
    title: "Zalando Contextual Commerce Case Study - Product Designer Portfolio",
    description: "Personalizing Fashion Discovery Through Context-Aware Recommendations",
  },

  // Card information from case studies page
  cardInfo: {
    title: "Contextual Self-Help Platform",
    subtitle: "Transforming Customer Support Through Predictive Design",
    description: "Cut 20M yearly inquiries by 42% and slashed resolution time from 24 hours to under 3.",
  },

  hero: {
    projectName: "Contextual Self-Help",
    company: "ZALANDO",
    year: "2025",
    title: "Context-Aware Customer Support",
    titleSize: "text-3xl md:text-4xl lg:text-5xl",
    titleWeight: "font-light",
    description: "Transforming Customer Support Through Predictive Design. Cut 20M yearly inquiries by 42% and slashed resolution time from 24 hours to under 3.",
    descriptionSize: "text-lg md:text-xl",
    skills: ["Product Design", "Personalization", "Data Science"],
    centered: true,
    maxWidth: "lg:max-w-[55%]",
  },

  heroImage: {
    url: "/images/return-refund.png?v=2",
    alt: "Return and refund customer support interface",
  },

  carouselImages: [
    {
      url: "/images/return-refund.png?v=2",
      alt: "Return and refund customer support interface",
    },
    {
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80",
      alt: "Online customer support and assistance",
    },
    {
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80",
      alt: "Personalized shopping experience and analytics",
    },
  ],

  metrics: {
    style: "cards", // UNIQUE: Card style
    items: [
      { value: "34%", label: "Higher Engagement" },
      { value: "28%", label: "More Conversions" },
      { value: "2.1x", label: "Click-Through Rate" },
      { value: "€8.2M", label: "Revenue Impact" },
    ],
    fontSize: {
      value: "text-2xl md:text-3xl lg:text-4xl",
      label: "text-sm",
    },
  },

  layout: {
    imagesFullWidth: true,
    imageBackground: "bg-muted/50",
    sidebarSticky: true,
    sidebarTop: "top-24",
    hasSidebar: false, // DIFFERENT: No sidebar
    maxWidth: "lg:max-w-5xl", // DIFFERENT: 5xl (second widest, between 4xl and 6xl)
  },

  // Amber/Yellow/Lime theme - UNIQUE warm/bright feel for contextual discovery
  colors: {
    gradients: {
      hero: "from-amber-500/10 via-yellow-500/10 to-lime-500/10",
    },
    challengeCards: [],
    impactMetrics: [],
  },

  sections: [
    { id: "overview", title: "Overview" },
    { id: "problem", title: "Problem" },
    { id: "approach", title: "Approach" },
    { id: "impact", title: "Impact" },
  ],

  navigation: {
    prev: { url: "/case-study/zalando-chatbot", label: "Zalando Chatbot" },
    next: { url: "/case-study/cashamm", label: "CashAmm" },
  },

  project: {
    company: "Zalando",
    year: "2024",
    role: "Lead Designer",
    roleDetails: "Personalization, ML/AI Design, User Research",
    team: "Data Science, Product, Engineering",
    teamDetails: "10-person cross-functional team",
    market: "Europe",
    marketDetails: "E-Commerce, Fashion, Personalization",
  },
}

export type ZalandoContextualConfig = typeof zalandoContextualConfig

