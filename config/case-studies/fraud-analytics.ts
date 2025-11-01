/**
 * Fraud Analytics Case Study Configuration
 * All styling and layout preferences specific to this case study
 */

export const fraudAnalyticsConfig = {
  // Page metadata
  metadata: {
    title: "Fraud Analytics Platform Case Study",
    description: "AI-Powered Financial Crime Prevention Through Design",
  },

  cardInfo: {
    title: "Fraud Analytics Platform",
    subtitle: "Real-Time Fraud Detection Dashboard",
    description: "Predictive monitoring that cut fraud by 34% and false positives by 47%, saving ₦155M.",
  },

  // Hero section configuration
  hero: {
    height: "87vh",
    minHeight: "650px",
    image: {
      url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1920&q=80",
      alt: "Security and Fraud Detection",
      height: "525px", // Image height
    },
    overlay: {
      gradient: "bg-gradient-to-b from-background/60 via-background/40 to-background/80",
    },
    company: "STERLING BANK",
    year: "2019",
    title: "AI-Powered Financial Crime Prevention",
    titleSize: "text-3xl md:text-5xl lg:text-6xl",
    titleWeight: "font-light",
    description: "Designing an intelligent fraud detection platform that reduced successful fraud attempts by 78% and saved €2.3M annually.",
    descriptionSize: "text-lg md:text-xl",
    // Skills/tags displayed as pills
    skills: ["Product Design", "AI", "UX Engineering"],
    // Layout options
    centered: true, // Center the hero content
    maxWidth: "lg:max-w-[55%]", // Width constraint
  },

  // Overview section (text content)
  overview: {
    title: "Overview",
    paragraphs: [
      "Sterling Bank faced mounting financial losses from sophisticated fraud attacks. Their reactive approach meant fraud was only investigated after customer funds were compromised, resulting in significant legal costs, customer dissatisfaction, and regulatory scrutiny.",
      "I designed and developed an AI-powered fraud detection platform that monitors customer behavior patterns in real-time, transforming the bank's approach from reactive investigation to proactive prevention—all while maintaining a seamless customer experience."
    ]
  },

  // Impact metrics configuration
  metrics: {
    position: "below-hero", // or "in-hero" or "none"
    style: "clean", // or "pills" or "cards"
    background: "bg-muted/30",
    items: [
      { value: "78%", label: "Fraud Reduction" },
      { value: "€2.3M", label: "Annual Savings" },
      { value: "92%", label: "Satisfaction" },
      { value: "6 Mo", label: "Timeline" },
    ],
    fontSize: {
      value: "text-3xl md:text-4xl lg:text-5xl",
      label: "text-sm",
    },
  },

  // Roles & Responsibilities section
  rolesResponsibilities: {
    title: "Roles & Responsibilities",
    role: {
      title: "Solo UX Engineer",
      subtitle: "Research, Design, Frontend Development"
    },
    team: {
      title: "Cross-functional (5)",
      subtitle: "Data analytics, fraud specialists, engineers"
    },
    market: {
      title: "Nigeria",
      subtitle: "Fintech, Banking Security"
    }
  },

  // Layout configuration
  layout: {
    imagesFullWidth: true, // Images break out of container
    imageBackground: "bg-muted/50", // Grey background for full-width images
    sidebarSticky: true,
    sidebarTop: "top-24",
  },

  // Color scheme
  colors: {
    gradients: {
      hero: "from-blue-500/10 via-purple-500/10 to-pink-500/10",
      solution: "from-green-500/10 via-emerald-500/10 to-teal-500/10",
      research: "from-blue-500/10 to-cyan-500/10",
      wireframes1: "from-purple-500/10 to-pink-500/10",
      wireframes2: "from-pink-500/10 to-red-500/10",
      feature1: "from-indigo-500/10 to-purple-500/10",
      feature2: "from-cyan-500/10 to-blue-500/10",
      feature3: "from-green-500/10 to-emerald-500/10",
    },
    challengeCards: [
      { border: "border-red-500/20", bg: "bg-red-500/5", iconColor: "text-red-500" },
      { border: "border-orange-500/20", bg: "bg-orange-500/5", iconColor: "text-orange-500" },
      { border: "border-yellow-500/20", bg: "bg-yellow-500/5", iconColor: "text-yellow-500" },
      { border: "border-blue-500/20", bg: "bg-blue-500/5", iconColor: "text-blue-500" },
    ],
    impactMetrics: [
      { gradient: "from-green-500/10 to-emerald-500/10", border: "border-green-500/20" },
      { gradient: "from-blue-500/10 to-cyan-500/10", border: "border-blue-500/20" },
      { gradient: "from-purple-500/10 to-pink-500/10", border: "border-purple-500/20" },
      { gradient: "from-orange-500/10 to-red-500/10", border: "border-orange-500/20" },
    ],
  },

  // Navigation sections
  sections: [
    { id: "overview", title: "Overview" },
    { id: "challenge", title: "The Challenge" },
    { id: "solution", title: "Solution" },
    { id: "design-process", title: "Design Process" },
    { id: "key-features", title: "Key Features" },
    { id: "impact", title: "Impact" },
    { id: "learnings", title: "Key Learnings" },
  ],

  // Navigation links
  navigation: {
    prev: { url: "/case-study/orgcompass", label: "OrgCompass" },
    next: { url: "/case-study/specta", label: "Specta" },
  },

  // Project metadata
  project: {
    company: "Sterling Bank",
    year: "2019",
    role: "Solo UX Engineer",
    roleDetails: "Research, Design, Frontend Development",
    team: "Cross-functional (5)",
    teamDetails: "Data analytics, fraud specialists, engineers",
    market: "Nigeria",
    marketDetails: "Fintech, Banking Security",
  },
}

export type FraudAnalyticsConfig = typeof fraudAnalyticsConfig
