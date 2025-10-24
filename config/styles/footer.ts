/**
 * Footer Styles Configuration
 * Global footer component styling
 */

export const footerStyles = {
  // Footer wrapper
  footer: {
    className: "w-full border-t border-border bg-background",
    borderTop: true,
  },

  // Container
  container: {
    className: "container mx-auto px-4 md:px-8 py-12 md:py-16",
    padding: {
      x: {
        mobile: "1rem",
        desktop: "2rem",
      },
      y: {
        mobile: "3rem",
        desktop: "4rem",
      }
    }
  },

  // Main grid layout
  grid: {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12",
    columns: {
      mobile: 1,
      tablet: 2,
      desktop: 4,
    },
    gap: {
      mobile: "2rem",
      desktop: "3rem",
    }
  },

  // Column sections
  column: {
    className: "space-y-4",
    spacing: "1rem",
  },

  // Section titles
  sectionTitle: {
    className: "text-sm font-medium uppercase tracking-wider text-muted-foreground",
    fontSize: "0.875rem",
    fontWeight: "medium",
    textTransform: "uppercase",
    letterSpacing: "wider",
  },

  // Links
  links: {
    wrapper: {
      className: "space-y-3",
      spacing: "0.75rem",
    },
    link: {
      className: "block text-sm text-foreground hover:text-muted-foreground transition-colors",
      fontSize: "0.875rem",
      display: "block",
      transition: "colors 200ms ease-out",
    }
  },

  // Social links
  social: {
    wrapper: {
      className: "flex gap-4",
      gap: "1rem",
    },
    link: {
      className: "w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors",
      size: "2.5rem",
      borderRadius: "9999px",
      transition: "colors 200ms ease-out",
    },
    icon: {
      className: "w-5 h-5",
      size: "1.25rem",
    }
  },

  // Copyright section
  copyright: {
    wrapper: {
      className: "mt-12 pt-8 border-t border-border",
      marginTop: "3rem",
      paddingTop: "2rem",
    },
    text: {
      className: "text-sm text-center text-muted-foreground",
      fontSize: "0.875rem",
      textAlign: "center",
    }
  },

  // Visibility toggles
  visibility: {
    showSocial: true,
    showLinks: true,
    showCopyright: true,
  }
}

export type FooterStyles = typeof footerStyles
