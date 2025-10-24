/**
 * Home Page Configuration
 */

export const homeConfig = {
  hero: {
    badge: "HI. I'M A SENIOR",
    title: "Product Designer.",
    description: "Currently, I'm reimagining CX for Europe's leading fashion e-commerce platform.",
    // Rotating bio descriptions - cycles on each page refresh
    rotatingBios: [
      "Currently, I'm reimagining CX for Europe's leading fashion e-commerce platform.",
      "Right now, I'm working to transform the customer care experience at Zalando.",
      "Right now, I'm fixing the way customers get help at Zalando.",
      "Right now, I'm working to make customer support at Zalando as seamless.",
      "Currently, I'm focused on redesigning how millions of customers get help with Zalando.",
      "Right now, I'm helping make Zalando's customer support easier and more enjoyable.",
      "Right now, I'm working on improving customer care experiences at Zalando.",
    ],
    portraitImage: "/images/Otobong_Okoko_Sketched_.png?v=2",
    portraitAlt: "Otobong Okoko Portrait",
  },

  // Core Skills (Horizontal Scroll Pills)
  coreSkills: [
    "User Research",
    "Design Systems",
    "Prototyping",
    "Usability Testing",
    "Information Architecture",
    "Interaction Design",
    "Visual Design",
    "Design Thinking",
    "Wireframing",
    "User Flows",
    "A/B Testing",
    "Accessibility (WCAG)",
    "Responsive Design",
    "Design Sprint Facilitation",
    "Stakeholder Management",
    "AI-Powered Design",
    "Conversational AI/UX",
    "Generative AI Tools",
    "AI Prompt Engineering",
    "Machine Learning UX"
  ],

  // NEW: Hero Extras (social links, availability, location)
  heroExtras: {
    availability: {
      show: true,
      status: "Available for work",
      statusColor: "success", // success, warning, info
    },
    location: {
      show: true,
      city: "Berlin",
      country: "Germany",
      icon: "📍",
    },
    socialLinks: [
      {
        platform: "LinkedIn",
        href: "https://www.linkedin.com/in/otobong/",
        icon: "linkedin",
        ariaLabel: "Connect with me on LinkedIn"
      },
      {
        platform: "Dribbble",
        href: "https://dribbble.com/yourusername",
        icon: "dribbble",
      },
      {
        platform: "Twitter",
        href: "https://twitter.com/yourusername",
        icon: "twitter",
      },
    ],
  },
  
  achievements: [
    {
      icon: "CSM",
      title: "Certified",
      subtitle: "Scrum Master"
    },
    {
      icon: "📊",
      title: "Design Sprint",
      subtitle: "Facilitator"
    },
    {
      icon: "🎓",
      title: "Non-Profit",
      subtitle: "Founder"
    },
    {
      icon: "🏆",
      title: "Hackathon",
      subtitle: "Winner"
    },
    {
      icon: "📢",
      title: "Event",
      subtitle: "Speaker"
    }
  ],

  // Top Case Studies
  topCaseStudies: {
    heading: "Selected Work",
    viewAllText: "View All Case Studies",
    viewAllHref: "/case-studies",
    studies: [
      {
        title: "Contextual Self-Help Platform",
        subtitle: "Transforming Customer Support Through Predictive Design.",
        description: "Cut 20M yearly inquiries by 42% and slashed resolution time from 24 hours to under 3.",
        tags: ["Product Design", "User Research"],
        image: "/images/contextual_help_image_thumb.svg",
        imageAlt: "contextual_help_image_thumb",
        href: "/case-study/contextual-help"
      },
      {
        title: "Fraud Analytics Platform",
        subtitle: "Real-Time Fraud Detection Dashboard.",
        description: "Predictive monitoring that cut fraud by 34% and false positives by 47%, saving ₦155M.",
        tags: ["Data Visualization", "Enterprise Design"],
        image: "/images/fraud_analytics_image_thumb.svg",
        imageAlt: "fraud_analytics_image_thumb",
        href: "/case-study/fraud-analytics"
      },
      {
        title: "UBA HCM Connect",
        subtitle: "Enterprise HR Management System.",
        description: "Unified 7 systems across 20 countries, cutting $80K monthly costs and boosting productivity 43%.",
        tags: ["Enterprise Design", "HR Tech"],
        image: "/images/uba_hcm_image_thumb.svg",
        imageAlt: "uba_hcm_image_thumb",
        href: "/case-study/uba-hcm"
      },
      {
        title: "Guided Conversational Chatbot",
        subtitle: "Reimagining Automated Support with Empathy.",
        description: "Transformed a 78% abandonment rate into 34% higher automation by redesigning from 100+ user journeys.",
        tags: ["Conversational AI", "Product Design"],
        image: "/images/cashamm_image_thumb.svg",
        imageAlt: "cashamm_image_thumb",
        href: "/case-study/cashamm"
      }
    ]
  },

  // NEW: Call to Action Buttons
  callToAction: {
    show: true,
    buttons: [
      {
        label: "View Case Studies",
        href: "/case-studies",
        variant: "primary", // primary, secondary, outline
        icon: "arrow-right",
      },
      {
        label: "Contact Me",
        href: "/contact",
        variant: "secondary",
        icon: "mail",
      },
      {
        label: "Download Resume",
        href: "/resume/Otobong_Okoko_Resume.pdf",
        variant: "outline",
        icon: "download",
        download: true,
      },
    ],
  },

  // NEW: Featured Work
  featuredWork: {
    show: true,
    heading: "Featured Work",
    description: "Selected projects that showcase my approach to solving complex design challenges.",
    projects: [
      {
        title: "Zalando Chatbot Redesign",
        subtitle: "Conversational AI that increased automation by 226%",
        description: "Rebuilding trust in AI through guided conversational experiences.",
        image: "/images/zalando-chatbot-preview.jpg",
        tags: ["Conversational AI", "Service Design", "UX Research"],
        metrics: ["226% automation increase", "€1.34M+ savings"],
        href: "/case-study/zalando-chatbot",
      },
      {
        title: "UBA HCM Connect",
        subtitle: "Enterprise platform serving 20,000+ employees",
        description: "Transforming HR operations across Africa with a comprehensive digital platform.",
        image: "/images/uba-hcm-preview.jpg",
        tags: ["Enterprise Design", "HR Tech", "System Design"],
        metrics: ["$960K annual savings", "94% adoption"],
        href: "/case-study/uba-hcm-connect",
      },
      {
        title: "Contextual Self-Help Platform",
        subtitle: "Predictive support that anticipates customer needs",
        description: "Reducing support inquiries by 33% through intelligent, context-aware assistance.",
        image: "/images/contextual-preview.jpg",
        tags: ["AI/ML", "Customer Support", "Predictive Design"],
        metrics: ["33% inquiry reduction", "€3.2M savings"],
        href: "/case-study/zalando-contextual",
      },
    ],
  },

  // NEW: Skills & Expertise
  skills: {
    show: true,
    heading: "Skills & Expertise",
    description: "Tools and methodologies I use to deliver exceptional design solutions.",
    categories: [
      {
        category: "Design",
        skills: ["Figma", "Adobe Creative Suite", "Sketch", "Prototyping", "Design Systems"],
      },
      {
        category: "Research",
        skills: ["User Interviews", "Usability Testing", "A/B Testing", "Analytics", "Journey Mapping"],
      },
      {
        category: "Strategy",
        skills: ["Product Strategy", "Design Thinking", "Agile/Scrum", "Workshop Facilitation", "Stakeholder Management"],
      },
      {
        category: "Technical",
        skills: ["HTML/CSS", "React Basics", "Design Tokens", "APIs", "Accessibility (WCAG)"],
      },
    ],
  },

  // NEW: Testimonials
  testimonials: {
    show: true,
    heading: "What People Say",
    description: "Feedback from colleagues and clients I've worked with.",
    items: [
      {
        quote: "Otobong's ability to balance user needs with business goals is exceptional. His work on the chatbot redesign transformed our customer service operations.",
        author: "Jane Smith",
        role: "Product Manager",
        company: "Zalando",
        avatar: "/images/testimonial-1.jpg",
      },
      {
        quote: "A true design leader who brings both strategic thinking and meticulous execution. His UBA HCM platform work set new standards for enterprise design in Africa.",
        author: "Michael Johnson",
        role: "CTO",
        company: "UBA Group",
        avatar: "/images/testimonial-2.jpg",
      },
      {
        quote: "Working with Otobong was a masterclass in user-centered design. He has an incredible ability to simplify complex problems.",
        author: "Sarah Williams",
        role: "Head of Design",
        company: "Cashamm",
        avatar: "/images/testimonial-3.jpg",
      },
    ],
  },
}

export type HomeConfig = typeof homeConfig
