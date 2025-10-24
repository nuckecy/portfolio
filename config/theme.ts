/**
 * Global Theme Configuration
 * Shared design tokens that maintain brand consistency across all pages
 * Changes here will affect the entire portfolio
 */

export const theme = {
  // Color Tokens (CSS Variables from globals.css)
  colors: {
    background: "hsl(var(--background))",
    foreground: "hsl(var(--foreground))",
    card: "hsl(var(--card))",
    cardForeground: "hsl(var(--card-foreground))",
    primary: "hsl(var(--primary))",
    primaryForeground: "hsl(var(--primary-foreground))",
    secondary: "hsl(var(--secondary))",
    secondaryForeground: "hsl(var(--secondary-foreground))",
    muted: "hsl(var(--muted))",
    mutedForeground: "hsl(var(--muted-foreground))",
    accent: "hsl(var(--accent))",
    accentForeground: "hsl(var(--accent-foreground))",
    border: "hsl(var(--border))",
    input: "hsl(var(--input))",
    ring: "hsl(var(--ring))",
  },

  // Typography
  fonts: {
    sans: "'Neue Montreal', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    serif: "serif", // Can be customized for headings
  },

  // Base Spacing Units (Tailwind scale)
  spacing: {
    xs: "0.5rem",   // 8px
    sm: "1rem",     // 16px
    md: "1.5rem",   // 24px
    lg: "2rem",     // 32px
    xl: "3rem",     // 48px
    "2xl": "4rem",  // 64px
    "3xl": "6rem",  // 96px
  },

  // Border Radius
  radius: {
    sm: "calc(var(--radius) - 4px)",
    md: "calc(var(--radius) - 2px)",
    lg: "var(--radius)",
    full: "9999px",
  },

  // Breakpoints (Tailwind defaults)
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  // Container
  container: {
    maxWidth: "1400px",
    padding: {
      mobile: "1rem",      // px-4
      tablet: "2rem",      // px-8
    }
  },

  // Transitions
  transitions: {
    fast: "150ms ease-out",
    normal: "200ms ease-out",
    slow: "300ms ease-out",
  },
}

export type Theme = typeof theme
