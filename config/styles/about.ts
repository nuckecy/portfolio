/**
 * About Page Styles Configuration
 * Layout and spacing specific to about page
 */

export const aboutStyles = {
  // Page wrapper
  page: {
    className: "min-h-screen bg-background",
  },

  // Hero Section
  hero: {
    section: {
      className: "bg-background pt-20 md:pt-24 pb-4",
    },
    container: {
      className: "container mx-auto px-4 md:px-8 max-w-6xl",
    },
    grid: {
      className: "grid md:grid-cols-2 gap-8 md:gap-12 items-start",
    },
    // Left Column - Text
    textColumn: {
      className: "space-y-6",
    },
    greeting: {
      className: "text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-foreground",
    },
    introduction: {
      className: "text-base md:text-lg text-muted-foreground",
    },
    name: {
      className: "font-semibold text-foreground",
    },
    mission: {
      className: "font-semibold text-foreground",
    },
    story: {
      className: "space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed",
    },
    // Right Column - Image
    imageColumn: {
      className: "flex justify-center md:justify-end",
    },
    imageWrapper: {
      className: "w-full max-w-sm rounded-2xl overflow-hidden",
    }
  },

  // Core Skills Section (Horizontal Scroll)
  coreSkills: {
    section: {
      className: "bg-background py-4 relative",
    },
    container: {
      className: "overflow-hidden relative max-w-7xl mx-auto",
    },
    scrollContainer: {
      className: "flex gap-3 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4",
    },
    pill: {
      className: "px-4 py-2 bg-card text-card-foreground rounded-full text-sm font-medium whitespace-nowrap hover:bg-secondary transition-colors flex-shrink-0 border border-border cursor-pointer",
    }
  },

  // Design Principles Section
  principles: {
    section: {
      className: "pt-32 pb-16 md:pb-24 bg-background",
    },
    container: {
      className: "container mx-auto px-4 md:px-8",
    },
    wrapper: {
      className: "bg-card rounded-3xl p-8 md:p-12 lg:p-16",
    },
    header: {
      className: "mb-12 max-w-3xl",
    },
    title: {
      className: "text-3xl md:text-4xl font-normal text-foreground mb-4",
    },
    description: {
      className: "text-base md:text-lg text-muted-foreground leading-relaxed",
    },
    grid: {
      className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12",
    },
    item: {
      className: "space-y-3",
    },
    icon: {
      className: "text-5xl md:text-6xl mb-4",
    },
    itemTitle: {
      className: "text-lg md:text-xl font-medium text-foreground",
    },
    itemDescription: {
      className: "text-sm md:text-base text-muted-foreground leading-relaxed",
    }
  },

  // Connect Section
  connect: {
    section: {
      className: "py-16 md:py-20 bg-background",
    },
    container: {
      className: "container mx-auto px-4 md:px-8 max-w-6xl",
    },
    title: {
      className: "text-3xl md:text-4xl font-serif font-normal text-center text-foreground mb-12 md:mb-16",
    },
    grid: {
      className: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6",
    },
    card: {
      className: "flex flex-col items-center text-center bg-card border border-border rounded-xl p-6 md:p-8 hover:border-border hover:shadow-lg transition-all duration-300 group",
    },
    iconWrapper: {
      className: "mb-4",
    },
    icon: {
      className: "text-3xl md:text-4xl",
    },
    svgIcon: {
      className: "w-12 h-12 md:w-16 md:h-16 dark:invert object-contain",
    },
    label: {
      className: "text-sm md:text-base font-semibold text-foreground mb-1",
    },
    sublabel: {
      className: "text-xs md:text-sm text-muted-foreground",
    },
    link: {
      className: "text-red-500 dark:text-red-400 underline hover:text-red-600 dark:hover:text-red-300 transition-colors",
    }
  }
}

export type AboutStyles = typeof aboutStyles
