/**
 * Resume Page Styles Configuration
 * Layout and spacing specific to resume page
 */

export const resumeStyles = {
  // Page wrapper
  page: {
    className: "min-h-screen bg-background",
  },

  // Header Section
  header: {
    section: {
      className: "container mx-auto px-4 md:px-8 pt-20 md:pt-28 pb-16 md:pb-24",
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
      className: "max-w-5xl mx-auto",
      maxWidth: "64rem",
    },
    title: {
      className: "text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-8",
      fontSize: {
        mobile: "2.25rem",
        tablet: "3rem",
        desktop: "3.75rem",
      },
      marginBottom: "2rem",
    },
    downloadButton: {
      className: "inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors",
      padding: {
        x: "1.5rem",
        y: "0.75rem",
      }
    }
  },

  // Resume Content
  content: {
    wrapper: {
      className: "container mx-auto px-4 md:px-8 pb-16 md:pb-24",
    },
    container: {
      className: "max-w-5xl mx-auto space-y-12",
      maxWidth: "64rem",
      spacing: "3rem",
    },
    section: {
      className: "space-y-6",
      spacing: "1.5rem",
    },
    sectionTitle: {
      className: "text-2xl md:text-3xl font-medium border-b border-border pb-2",
      fontSize: {
        mobile: "1.5rem",
        desktop: "1.875rem",
      },
      paddingBottom: "0.5rem",
    },
    item: {
      className: "space-y-2",
      spacing: "0.5rem",
    },
    itemHeader: {
      className: "flex flex-col md:flex-row md:justify-between md:items-start gap-2",
    },
    itemTitle: {
      className: "text-lg md:text-xl font-medium",
      fontSize: {
        mobile: "1.125rem",
        desktop: "1.25rem",
      },
    },
    itemSubtitle: {
      className: "text-base text-muted-foreground",
      fontSize: "1rem",
    },
    itemDate: {
      className: "text-sm text-muted-foreground",
      fontSize: "0.875rem",
    },
    itemDescription: {
      className: "text-base leading-relaxed",
      lineHeight: "relaxed",
    },
    skillsList: {
      className: "flex flex-wrap gap-2",
      gap: "0.5rem",
    },
    skillTag: {
      className: "px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm",
      fontSize: "0.875rem",
      padding: {
        x: "0.75rem",
        y: "0.25rem",
      }
    }
  }
}

export type ResumeStyles = typeof resumeStyles
