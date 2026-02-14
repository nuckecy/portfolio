/**
 * Zalando Chatbot Case Study Configuration
 * Theme: Indigo/Violet/Purple - Unique AI/tech theme
 * Layout: Sidebar enabled, narrow (max-w-3xl), compact hero (auto)
 * Metrics: Pills style (unique presentation)
 */

export const zalandoChatbotConfig = {
  metadata: {
    title: "Zalando AI Chatbot Case Study - Product Designer Portfolio",
    description: "Transforming Customer Service with AI-Powered Conversations",
  },

  cardInfo: {
    title: "Guided Conversational Chatbot",
    subtitle: "Reimagining Automated Support with Empathy",
    description: "Transformed a 23% automation rate into 48% by redesigning guided conversational flows across delivery, returns, and refund use cases.",
  },

  hero: {
    company: "ZALANDO",
    year: "2022-2023",
    title: "Transforming Customer Service with AI",
    titleSize: "text-3xl md:text-4xl lg:text-5xl",
    titleWeight: "font-light",
    description: "Reimagining Automated Support with Empathy. Transformed a 23% automation rate into 48% by redesigning guided conversational flows across delivery, returns, and refund use cases.",
    descriptionSize: "text-lg md:text-xl",
    skills: ["Product Design", "AI/ML", "Conversational UX"],
    centered: true,
    maxWidth: "lg:max-w-[55%]",
  },

  metrics: {
    style: "pills", // UNIQUE: Pills style (like Specta but different colors)
    items: [
      { value: "48%", label: "Automation Rate" },
      { value: "€0.18", label: "Cost per Bot Contact" },
      { value: "1.6M+", label: "Monthly Interactions" },
      { value: "€4.11M", label: "Annualized Savings" },
    ],
    fontSize: {
      value: "text-2xl md:text-3xl",
      label: "text-xs",
    },
  },

  layout: {
    imagesFullWidth: false,
    imageBackground: "bg-muted/50",
    sidebarSticky: true,
    sidebarTop: "top-24",
    hasSidebar: true, // DIFFERENT: Has sidebar
    maxWidth: "lg:max-w-3xl", // DIFFERENT: 3xl narrow layout
  },

  // Indigo/Violet/Purple theme - UNIQUE for AI/tech feel
  colors: {
    gradients: {
      hero: "from-indigo-500/10 via-violet-500/10 to-purple-500/10",
    },
    challengeCards: [],
    impactMetrics: [],
  },

  sections: [
    { id: "overview", title: "Overview" },
    { id: "challenge", title: "Challenge" },
    { id: "approach", title: "Approach" },
    { id: "results", title: "Results" },
  ],

  navigation: {
    prev: { url: "/case-study/cashamm", label: "Cashamm" },
    next: { url: "/case-study/zalando-contextual", label: "Zalando Contextual" },
  },

  project: {
    company: "Zalando",
    year: "2022-2023",
    role: "Senior UX Designer",
    roleDetails: "Conversational Design, AI UX, User Research",
    team: "AI, Product, Engineering",
    teamDetails: "12-person cross-functional team",
    market: "Europe",
    marketDetails: "E-Commerce, Fashion, Customer Service",
  },
}

export type ZalandoChatbotConfig = typeof zalandoChatbotConfig

