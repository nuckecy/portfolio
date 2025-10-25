/**
 * About Page Configuration
 */

export const aboutConfig = {
  metadata: {
    title: "About",
    description: "Learn more about me and my work.",
  },
  
  // Hero Section
  hero: {
    greeting: "Hello!",
    introduction: "My name is",
    name: "Otobong Okoko",
    mission: "and I'm reimagining customer experience for Europe's leading fashion platform.",
    story: [
      "Throughout my UX career, I've been a non-profit founder of a design education group, marketing non-profit chairman, event speaker, hackathon winner, certified scrum master, and team lead. Most importantly, I've been a life-long learner.",
      "Like many of us, I have a story of someone who was forced to prioritize finances over health and are no longer with us as a consequence.",
      "My mission is to prioritize health over cost by making affordable healthcare accessible to everyone."
    ],
    image: "/images/Otobong_Okoko_Sketched_.png",
    imageAlt: "Otobong Okoko Portrait"
  },

  // Core Skills (Horizontal Scroll Pills)
  coreSkills: [
    "User Research",
    "Design Systems",
    "Frontend Development",
    "Prototyping",
    "Usability Testing",
    "Visual Design",
    "A/B Testing",
    "Accessibility (WCAG)",
    "Workshop Facilitation",
    "AI/Vibe Coding/Prompt Engineering"
  ],

  // Design Principles Section
  principles: {
    title: "My Design Principles",
    description: "<strong>Design principles aren't aspirational statements. They're decision-making frameworks.</strong> The best ones create productive tension, forcing you to choose what matters most when trade-offs become inevitable. They acknowledge constraints rather than ignore them. And they're only valuable if they actually shape how you work.",
    items: [
      {
        icon: "🎯",
        title: "Show, Don't Overwhelm",
        description: "Complexity should be revealed gradually, not dumped on users all at once. <strong>Start simple.</strong> Demonstrate competence step by step. Users gain confidence through progressive discovery - not by seeing everything upfront."
      },
      {
        icon: "🌍",
        title: "Include, Don't Retrofit",
        description: "Accessibility and cultural diversity shape the foundation - they don't get added later. <strong>Design for different thinking styles, communication preferences, and interaction needs from day one.</strong> Compliance is the baseline. True inclusion is the goal."
      },
      {
        icon: "🔧",
        title: "Fix Systems, Not Symptoms",
        description: "Surface problems usually point to deeper issues. <strong>Address root causes</strong> through interconnected solutions rather than patching individual pain points. Sustainable design solves for the system, not just the screen."
      },
      {
        icon: "✓",
        title: "Validate, Then Build",
        description: "Every significant design decision should be backed by evidence - user insights, behavioral data, or tested assumptions. <strong>Intuition starts the conversation, but research validates the direction.</strong> Make design choices defensible."
      }
    ]
  },

  // Connect Section
  connect: {
    title: "Let's connect!",
    links: [
      {
        label: "Résumé",
        sublabel: "View Otobong's Résumé",
        href: "/resume",
        icon: "📄",
        external: false
      },
      {
        label: "LinkedIn",
        sublabel: "Let's connect on LinkedIn",
        href: "https://www.linkedin.com/in/otobong/",
        icon: "/images/linkedin.svg",
        external: true,
        iconType: "svg"
      },
      {
        label: "ADPList Mentor",
        sublabel: "Book a Mentor Session",
        href: "https://adplist.org/mentors/otobong-okoko",
        icon: "https://upload.wikimedia.org/wikipedia/commons/f/f0/ADPList_Logo.png",
        external: true,
        iconType: "svg"
      },
      {
        label: "Case Studies",
        sublabel: "View my work",
        href: "/case-studies",
        icon: "💼",
        external: false
      }
    ]
  }
}

export type AboutConfig = typeof aboutConfig

