/**
 * Contact Page Styles Configuration
 * Layout and spacing specific to contact page
 */

export const contactStyles = {
  // Page wrapper
  page: {
    className: "min-h-screen bg-background",
  },

  // Header Section
  header: {
    section: {
      className: "container mx-auto px-4 md:px-8 py-16 md:py-24",
      padding: {
        x: {
          mobile: "1rem",
          desktop: "2rem",
        },
        y: {
          mobile: "4rem",
          desktop: "6rem",
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
        mobile: "2.25rem",
        tablet: "3rem",
        desktop: "3.75rem",
      },
      marginBottom: "1rem",
    },
    description: {
      className: "text-lg md:text-xl text-muted-foreground",
      fontSize: {
        mobile: "1.125rem",
        desktop: "1.25rem",
      }
    }
  },

  // Content Section
  content: {
    section: {
      className: "container mx-auto px-4 md:px-8 pb-16 md:pb-24",
    },
    container: {
      className: "max-w-4xl mx-auto",
      maxWidth: "56rem",
    },
    grid: {
      className: "grid grid-cols-1 md:grid-cols-2 gap-12",
      columns: {
        mobile: 1,
        desktop: 2,
      },
      gap: "3rem",
    }
  },

  // Contact Info
  contactInfo: {
    wrapper: {
      className: "space-y-8",
      spacing: "2rem",
    },
    section: {
      className: "space-y-4",
      spacing: "1rem",
    },
    sectionTitle: {
      className: "text-xl font-medium",
      fontSize: "1.25rem",
      fontWeight: "medium",
    },
    item: {
      className: "flex items-start gap-3",
      gap: "0.75rem",
    },
    icon: {
      className: "w-5 h-5 text-primary mt-0.5 flex-shrink-0",
      size: "1.25rem",
    },
    label: {
      className: "text-sm text-muted-foreground",
      fontSize: "0.875rem",
    },
    value: {
      className: "text-base",
      fontSize: "1rem",
    },
    link: {
      className: "text-base text-primary hover:text-primary/80 transition-colors",
      fontSize: "1rem",
    }
  },

  // Contact Form
  form: {
    wrapper: {
      className: "space-y-6",
      spacing: "1.5rem",
    },
    field: {
      className: "space-y-2",
      spacing: "0.5rem",
    },
    label: {
      className: "text-sm font-medium",
      fontSize: "0.875rem",
      fontWeight: "medium",
    },
    input: {
      className: "w-full px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring",
      padding: {
        x: "1rem",
        y: "0.5rem",
      }
    },
    textarea: {
      className: "w-full px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring min-h-[150px]",
      minHeight: "150px",
    },
    button: {
      className: "w-full px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium",
      padding: {
        x: "1.5rem",
        y: "0.75rem",
      },
      fontWeight: "medium",
    }
  },

  // Social Links
  social: {
    wrapper: {
      className: "flex gap-4 justify-center md:justify-start",
      gap: "1rem",
    },
    link: {
      className: "w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors",
      size: "2.5rem",
    },
    icon: {
      className: "w-5 h-5",
      size: "1.25rem",
    }
  }
}

export type ContactStyles = typeof contactStyles
