/**
 * Navigation Styles Configuration
 * Global navigation component styling
 */

export const navigationStyles = {
  // Header wrapper
  header: {
    className: "sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60",
    position: "sticky",           // Can be "sticky" or "static"
    top: 0,
    zIndex: 50,
  },

  // Container
  container: {
    className: "w-full px-0 mx-0",
    padding: {
      x: {
        mobile: "0",
        desktop: "0",
      }
    }
  },

  // Inner flex wrapper
  wrapper: {
    className: "flex h-20 items-center justify-between px-4 md:px-8 max-w-7xl mx-auto w-full",
    height: "5rem",              // h-20
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  // Logo/Brand
  brand: {
    link: {
      className: "flex items-center gap-3 hover:opacity-80 transition-opacity",
      gap: "0.75rem",
      transition: "opacity 200ms ease-out",
    },
    logo: {
      className: "w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium text-sm",
      size: "2.5rem",
      borderRadius: "9999px",
      gradient: {
        from: "blue-500",
        to: "purple-600",
      },
      text: {
        color: "white",
        fontSize: "0.875rem",
        fontWeight: "medium",
      }
    },
    name: {
      className: "text-lg font-medium",
      fontSize: "1.125rem",
      fontWeight: "medium",
    }
  },

  // Navigation
  nav: {
    wrapper: {
      className: "hidden md:flex items-center gap-8",
      gap: "2rem",
      alignItems: "center",
    },
    link: {
      className: "flex items-center gap-1 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors",
      fontSize: "0.875rem",
      fontWeight: "medium",
      gap: "0.25rem",
      transition: "colors 200ms ease-out",
    },
    externalIcon: {
      className: "w-3.5 h-3.5",
      size: "0.875rem",
    }
  },

  // Mobile Menu
  mobileMenu: {
    button: {
      className: "md:hidden fixed bottom-6 right-6 z-50 bg-foreground text-background p-4 rounded-full shadow-lg hover:opacity-90 transition-opacity border border-border",
    },
    overlay: {
      className: "md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40",
    },
    panel: {
      className: "md:hidden fixed bottom-24 right-6 z-50 bg-background border border-border rounded-2xl shadow-xl p-6 min-w-[280px] max-w-sm",
    },
    nav: {
      className: "flex flex-col gap-4",
    },
    link: {
      className: "flex items-center justify-between gap-2 text-base font-medium text-foreground hover:text-muted-foreground transition-colors py-2",
    }
  },

  // Theme Toggle
  themeToggle: {
    show: true,
  },

  // Responsive behavior
  responsive: {
    mobileBreakpoint: "md",
    collapsible: false,          // Set to true if you want mobile menu
  }
}

export type NavigationStyles = typeof navigationStyles
