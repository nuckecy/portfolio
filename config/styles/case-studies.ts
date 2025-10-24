/**
 * Case Studies Page Styles Configuration
 * Layout, spacing, grid, and card styles specific to case studies page
 */

export const caseStudiesStyles = {
  // Page wrapper
  page: {
    className: "min-h-screen bg-background",
  },

  // Hero Section
  hero: {
    section: {
      className: "container mx-auto px-4 md:px-8 py-16 md:py-24",
      padding: {
        x: {
          mobile: "1rem",     // px-4
          desktop: "2rem",    // px-8
        },
        y: {
          mobile: "4rem",     // py-16
          desktop: "6rem",    // py-24
        }
      }
    },
    container: {
      className: "max-w-4xl mx-auto text-center",
      maxWidth: "56rem",
      textAlign: "center",
    },
    title: {
      className: "text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-4",
      fontSize: {
        mobile: "2.25rem",   // text-4xl
        tablet: "3rem",      // text-5xl
        desktop: "3.75rem",  // text-6xl
      },
      fontWeight: "normal",
      lineHeight: "tight",
      marginBottom: "1rem",
    },
    description: {
      className: "text-lg md:text-xl text-muted-foreground",
      fontSize: {
        mobile: "1.125rem",  // text-lg
        desktop: "1.25rem",  // text-xl
      }
    }
  },

  // Case Studies Grid
  grid: {
    section: {
      className: "container mx-auto px-4 md:px-8 pb-16 md:pb-24",
      padding: {
        x: {
          mobile: "1rem",
          desktop: "2rem",
        },
        bottom: {
          mobile: "4rem",
          desktop: "6rem",
        }
      }
    },
    container: {
      className: "max-w-7xl mx-auto",
      maxWidth: "80rem",
    },
    layout: {
      className: "grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12",
      columns: {
        mobile: 1,
        desktop: 2,
      },
      gap: {
        mobile: "2rem",      // gap-8
        desktop: "3rem",     // gap-12
      }
    }
  },

  // Card Component Styles
  card: {
    wrapper: {
      className: "group hover:shadow-xl transition-all duration-300 h-full",
      transition: "all 300ms ease-out",
    },
    header: {
      className: "space-y-2",
      spacing: "0.5rem",     // space-y-2
    },
    company: {
      className: "text-sm text-muted-foreground uppercase tracking-wider",
      fontSize: "0.875rem",
      textTransform: "uppercase",
      letterSpacing: "wider",
    },
    title: {
      className: "text-2xl md:text-3xl font-normal leading-tight",
      fontSize: {
        mobile: "1.5rem",    // text-2xl
        desktop: "1.875rem", // text-3xl
      },
      fontWeight: "normal",
      lineHeight: "tight",
    },
    subtitle: {
      className: "text-base md:text-lg text-muted-foreground leading-snug",
      fontSize: {
        mobile: "1rem",      // text-base
        desktop: "1.125rem", // text-lg
      },
      lineHeight: "snug",
    },
    content: {
      className: "space-y-6",
      spacing: "1.5rem",     // space-y-6
    },
    description: {
      className: "text-sm md:text-base leading-relaxed",
      fontSize: {
        mobile: "0.875rem",  // text-sm
        desktop: "1rem",     // text-base
      },
      lineHeight: "relaxed",
    },
    metrics: {
      wrapper: {
        className: "space-y-2",
        spacing: "0.5rem",
      },
      list: {
        className: "space-y-1.5",
        spacing: "0.375rem",
      },
      item: {
        className: "text-sm text-muted-foreground flex items-start gap-2",
        fontSize: "0.875rem",
      },
      icon: {
        className: "text-primary mt-0.5 flex-shrink-0",
        size: "1rem",
      }
    },
    footer: {
      className: "pt-4 border-t border-border",
      paddingTop: "1rem",
    },
    link: {
      className: "inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group-hover:gap-3 transition-all",
      fontSize: "0.875rem",
      fontWeight: "medium",
      hoverGap: "0.75rem",
    },
    arrow: {
      className: "transition-transform group-hover:translate-x-1",
    }
  },

  // Responsive behavior
  responsive: {
    grid: {
      breakpoint: "lg",
      columnsAtBreakpoint: 2,
    },
    card: {
      titleFontSize: {
        breakpoint: "md",
        before: "1.5rem",
        after: "1.875rem",
      }
    }
  }
}

export type CaseStudiesStyles = typeof caseStudiesStyles
