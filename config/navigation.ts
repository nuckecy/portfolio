/**
 * Navigation Configuration
 * Global navigation that appears on all pages
 */

export const navigationConfig = {
  // Logo/Brand
  brand: {
    name: "Otobong O.",
    initials: "OO",
    logoUrl: "/", // Home link
  },
  
  // Navigation Links
  links: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Case Study",
      href: "/case-studies",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Resume",
      href: "/resume",
    },
    {
      label: "Linkedin",
      href: "https://www.linkedin.com/in/otobong/",
      external: true,
      showIcon: true,
    }
  ],
  
  // Settings
  settings: {
    sticky: false, // Set to true if you want sticky navigation
    showThemeToggle: true,
  }
}

export type NavigationConfig = typeof navigationConfig
