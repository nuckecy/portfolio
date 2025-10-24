/**
 * Contact Page Configuration
 */

export const contactConfig = {
  metadata: {
    title: "Contact",
    description: "Get in touch.",
  },
  
  pageTitle: "Contact",
  
  // Contact Information
  contact: {
    email: "your.email@example.com",
    phone: "+1 (123) 456-7890", // Optional
    location: "Your City, Country",
  },
  
  // Social Links
  social: {
    linkedin: "https://linkedin.com/in/otobong-okoko",
    twitter: "https://twitter.com/yourusername", // Optional
    github: "https://github.com/yourusername", // Optional
    dribbble: "https://dribbble.com/yourusername", // Optional
    behance: "https://behance.net/yourusername", // Optional
  },
  
  // Contact Form (if you want to add one later)
  form: {
    enabled: false,
    fields: {
      name: { label: "Name", placeholder: "Your name", required: true },
      email: { label: "Email", placeholder: "your@email.com", required: true },
      subject: { label: "Subject", placeholder: "What's this about?", required: false },
      message: { label: "Message", placeholder: "Your message...", required: true }
    },
    submitButton: "Send Message",
    successMessage: "Thanks for reaching out! I'll get back to you soon.",
    errorMessage: "Something went wrong. Please try again."
  },
  
  // Intro Text
  intro: {
    heading: "Let's Connect",
    description: "I'm always open to discussing product design work or partnership opportunities."
  }
}

export type ContactConfig = typeof contactConfig
