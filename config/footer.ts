/**
 * Footer Configuration
 * Global footer that appears on all pages
 */

export const footerConfig = {
  // Copyright
  copyright: {
    year: new Date().getFullYear(),
    name: "Otobong Okoko",
    text: "All rights reserved.",
  },
  
  // Social Links
  social: [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/otobong-okoko",
      icon: "linkedin", // You can use this to reference icons
    },
    {
      name: "Twitter",
      href: "https://twitter.com/yourusername",
      icon: "twitter",
    },
    {
      name: "GitHub",
      href: "https://github.com/yourusername",
      icon: "github",
    },
    {
      name: "Dribbble",
      href: "https://dribbble.com/yourusername",
      icon: "dribbble",
    },
  ],
  
  // Footer Links (optional columns)
  links: {
    work: {
      title: "Work",
      items: [
        { label: "Case Studies", href: "/case-studies" },
        { label: "Resume", href: "/resume" },
      ]
    },
    about: {
      title: "About",
      items: [
        { label: "About Me", href: "/about" },
        { label: "Contact", href: "/contact" },
      ]
    }
  },
  
  // Settings
  settings: {
    showSocial: true,
    showLinks: true,
    showCopyright: true,
  }
}

export type FooterConfig = typeof footerConfig
