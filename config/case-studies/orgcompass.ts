/**
 * OrgCompass Case Study Configuration
 * UNIQUE: Orange/Amber theme, medium hero, sidebar enabled, cards layout
 */

export const orgcompassConfig = {
  metadata: {
    title: "OrgCompass Case Study - Product Designer Portfolio",
    description: "From Data Overload to Strategic Intelligence: Transforming HR Decision-Making",
  },

  cardInfo: {
    title: "OrgCompass (HR Intelligence)",
    subtitle: "Executive Decision Intelligence Platform",
    description: "Cut C-suite decision time by 73% and boosted retention 68% through predictive team intelligence.",
  },

  // Medium hero - between Fraud's full-width and Specta's traditional
  hero: {
    company: "MODUS CREATE",
    year: "2020",
    title: "From Data Overload to Strategic Intelligence: Transforming HR Decision-Making",
    titleSize: "text-3xl md:text-4xl lg:text-5xl",
    titleWeight: "font-light",
    description: "Executive Decision Intelligence Platform. Cut C-suite decision time by 73% and boosted retention 68% through predictive team intelligence.",
    descriptionSize: "text-lg md:text-xl",
    skills: ["Product Design", "Data Visualization", "Strategy"],
    centered: true,
    maxWidth: "lg:max-w-[55%]",
  },

  // Metrics with cards style (different from Fraud's clean and Specta's pills)
  metrics: {
    position: "in-content",
    style: "cards", // DIFFERENT: Card style (vs clean for Fraud, pills for Specta)
    background: "bg-card",
    items: [
      { value: "45%", label: "Faster Decisions" },
      { value: "32%", label: "Team Effectiveness" },
      { value: "500+", label: "Executives Enabled" },
      { value: "12 Mo", label: "Timeline" },
    ],
    fontSize: {
      value: "text-2xl md:text-3xl lg:text-4xl", // Medium size
      label: "text-sm",
    },
  },

  // Sidebar enabled, card-based images
  layout: {
    hasSidebar: true, // Like Specta
    imagesFullWidth: false, // Images in cards
    imageBackground: "bg-card",
    sidebarSticky: true,
    sidebarTop: "top-24",
    maxWidth: "lg:max-w-3xl",
  },

  // Orange/Amber theme - COMPLETELY DIFFERENT from Fraud (blue) and Specta (green)
  colors: {
    gradients: {
      hero: "from-orange-500/10 via-amber-500/10 to-yellow-500/10",
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
    prev: { url: "/", label: "Home" },
    next: { url: "/case-study/fraud-analytics", label: "Fraud Analytics" },
  },

  project: {
    company: "UBA Group",
    year: "2020",
    role: "Product Strategy Consultant",
    roleDetails: "Research, Strategy, UX Design",
    team: "HR Leadership, IT",
    teamDetails: "3-person consulting team",
    market: "Nigeria",
    marketDetails: "Enterprise HR Analytics",
  },
}

export type OrgcompassConfig = typeof orgcompassConfig
