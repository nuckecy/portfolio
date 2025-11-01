/**
 * Home Page Styles Configuration
 * Layout, spacing, typography, and responsive settings specific to home page
 */

export const homeStyles = {
  // Page wrapper - Responsive background with dark mode support
  page: {
    className: "min-h-screen bg-background",
  },

  // Hero Section - White container on gray background with dark mode
  hero: {
    section: {
      className: "container mx-auto px-4 md:px-8 pt-20 md:pt-24 pb-6 md:pb-8",
    },
    container: {
      className: "max-w-7xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-sm dark:shadow-gray-800/50 px-4 sm:px-8 md:px-12 lg:px-[100px] py-0",
    },
    grid: {
      className: "grid lg:grid-cols-2 gap-x-8 sm:gap-x-12 lg:gap-x-16 xl:gap-x-20 gap-y-8 lg:gap-y-0 items-center",
      columns: {
        mobile: 1,
        desktop: 2,
      }
    },
    
    // Left Column - Text Content
    textColumn: {
      className: "space-y-4 md:space-y-6 order-2 lg:order-1 flex flex-col justify-end pb-0 text-center lg:text-left",
    },
    textContent: {
      className: "space-y-3 md:space-y-4",
    },
    badge: {
      className: "text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground uppercase tracking-[0.2em] font-light flex items-center gap-3 md:gap-4 justify-center lg:justify-start",
      fontSize: {
        mobile: "1.25rem",
        desktop: "1.5rem",
      }
    },
    badgeLine: {
      className: "w-8 sm:w-10 md:w-12 lg:w-16 h-[2px] bg-gray-400 dark:bg-gray-600",
    },
    title: {
      className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-serif leading-[0.9] text-foreground",
      fontSize: {
        mobile: "4.5rem",
        tablet: "6rem",
        desktop: "8rem",
      },
      fontFamily: "serif",
      lineHeight: "0.9",
    },
    description: {
      className: "text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-muted-foreground max-w-2xl leading-relaxed font-light pb-6 lg:pb-0",
      fontSize: {
        mobile: "1.25rem",
        desktop: "1.875rem",
      },
      maxWidth: "42rem",
    },
    
    // Right Column - Portrait
    portraitColumn: {
      className: "flex justify-center lg:justify-end order-1 lg:order-2 items-end pb-0",
    },
    portraitWrapper: {
      className: "w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg",
      maxWidth: "32rem",
    },
    portraitImage: {
      className: "w-full h-auto rounded-lg bg-white dark:bg-gray-800",
      width: 600,
      height: 600,
      priority: true,
    }
  },

  // Core Skills Section (Horizontal Scroll)
  coreSkills: {
    section: {
      className: "bg-background pt-6 md:pt-8 pb-12 md:pb-16 relative",
    },
    container: {
      className: "overflow-hidden relative max-w-7xl mx-auto",
    },
    scrollContainer: {
      className: "flex gap-3 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4",
    },
    pill: {
      className: "px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex-shrink-0 cursor-pointer",
    }
  },

  // Achievements Section
  achievements: {
    section: {
      className: "bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800",
      padding: {
        top: 0,
        bottom: {
          mobile: "0",
          desktop: "0",
        }
      }
    },
    container: {
      className: "max-w-7xl mx-auto px-4 md:px-8",
    },
    grid: {
      className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 divide-x divide-y lg:divide-y-0 divide-gray-100 dark:divide-gray-800",
      columns: {
        mobile: 2,
        tablet: 3,
        desktop: 6,
      },
      gap: {
        mobile: "0",
        desktop: "0",
      }
    },
    item: {
      className: "text-center py-6 sm:py-8 md:py-10 px-3 sm:px-4 md:px-6 space-y-2",
      textAlign: "center",
      spacing: "0.5rem",
    },
    icon: {
      className: "text-2xl sm:text-3xl md:text-4xl mb-2 md:mb-3 text-gray-700 dark:text-gray-300",
      fontSize: {
        mobile: "1.875rem",
        desktop: "2.25rem",
      }
    },
    title: {
      className: "text-xs sm:text-sm md:text-base font-medium text-gray-900 dark:text-gray-100",
      fontSize: {
        mobile: "0.875rem",
        desktop: "1rem",
      }
    },
    subtitle: {
      className: "text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400",
      fontSize: {
        mobile: "0.875rem",
        desktop: "1rem",
      }
    }
  },

  // Responsive breakpoints specific to home page
  responsive: {
    hero: {
      gridBreakpoint: "lg",  // Switch to 2 columns at lg
      portraitAlign: {
        mobile: "center",
        desktop: "end",
      }
    },
    achievements: {
      gridBreakpoints: {
        mobile: "2 columns",
        md: "3 columns",
        lg: "6 columns",
      }
    }
  },

  // NEW: Hero Extras (availability, location, social links)
  heroExtras: {
    wrapper: {
      className: "mt-8 space-y-4",
      marginTop: "2rem",
      spacing: "1rem",
    },
    availability: {
      className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium",
      fontSize: "0.875rem",
    },
    location: {
      className: "flex items-center gap-2 text-sm text-muted-foreground",
      fontSize: "0.875rem",
    },
    socialLinks: {
      wrapper: {
        className: "flex items-center gap-4",
        gap: "1rem",
      },
      link: {
        className: "text-foreground hover:text-primary transition-colors",
        iconSize: "1.25rem", // w-5 h-5
      }
    }
  },

  // NEW: Call to Action Section
  callToAction: {
    section: {
      className: "container mx-auto px-4 md:px-8 pb-16 md:pb-24",
    },
    container: {
      className: "max-w-7xl mx-auto",
    },
    wrapper: {
      className: "flex flex-wrap gap-4 justify-center lg:justify-start",
      gap: "1rem",
    },
    button: {
      primary: {
        className: "inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-base",
        padding: { x: "1.5rem", y: "0.75rem" },
      },
      secondary: {
        className: "inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors font-medium text-base",
        padding: { x: "1.5rem", y: "0.75rem" },
      },
      outline: {
        className: "inline-flex items-center gap-2 px-6 py-3 border-2 border-border rounded-lg hover:bg-accent transition-colors font-medium text-base",
        padding: { x: "1.5rem", y: "0.75rem" },
      },
      icon: {
        className: "w-4 h-4",
        size: "1rem",
      }
    }
  },

  // NEW: Featured Work Section
  featuredWork: {
    section: {
      className: "container mx-auto px-4 md:px-8 py-16 md:py-24 bg-muted/30",
    },
    container: {
      className: "max-w-7xl mx-auto",
    },
    header: {
      className: "text-center mb-12 md:mb-16 space-y-4",
      marginBottom: { mobile: "3rem", desktop: "4rem" },
    },
    heading: {
      className: "text-3xl md:text-4xl lg:text-5xl font-normal",
      fontSize: { mobile: "1.875rem", tablet: "2.25rem", desktop: "3rem" },
    },
    description: {
      className: "text-lg text-muted-foreground max-w-2xl mx-auto",
      fontSize: "1.125rem",
    },
    grid: {
      className: "grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12",
      columns: { mobile: 1, desktop: 3 },
      gap: { mobile: "2rem", desktop: "3rem" },
    },
    card: {
      wrapper: {
        className: "group bg-background rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300",
      },
      imageWrapper: {
        className: "aspect-video bg-muted overflow-hidden",
      },
      image: {
        className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
      },
      content: {
        className: "p-6 space-y-4",
        padding: "1.5rem",
      },
      title: {
        className: "text-xl md:text-2xl font-medium",
        fontSize: { mobile: "1.25rem", desktop: "1.5rem" },
      },
      subtitle: {
        className: "text-sm text-muted-foreground",
        fontSize: "0.875rem",
      },
      description: {
        className: "text-base leading-relaxed",
      },
      tags: {
        wrapper: {
          className: "flex flex-wrap gap-2",
          gap: "0.5rem",
        },
        tag: {
          className: "px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs",
          fontSize: "0.75rem",
        }
      },
      metrics: {
        wrapper: {
          className: "flex flex-wrap gap-4 text-sm",
          gap: "1rem",
        },
        item: {
          className: "text-primary font-medium",
        }
      }
    }
  },

  // NEW: Skills Section
  skills: {
    section: {
      className: "container mx-auto px-4 md:px-8 py-16 md:py-24",
    },
    container: {
      className: "max-w-7xl mx-auto",
    },
    header: {
      className: "text-center mb-12 md:mb-16 space-y-4",
    },
    heading: {
      className: "text-3xl md:text-4xl lg:text-5xl font-normal",
    },
    description: {
      className: "text-lg text-muted-foreground max-w-2xl mx-auto",
    },
    grid: {
      className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
      columns: { mobile: 1, tablet: 2, desktop: 4 },
      gap: "2rem",
    },
    category: {
      wrapper: {
        className: "space-y-4",
      },
      title: {
        className: "text-lg font-medium",
        fontSize: "1.125rem",
      },
      list: {
        className: "space-y-2",
      },
      item: {
        className: "text-sm text-muted-foreground",
        fontSize: "0.875rem",
      }
    }
  },

  // NEW: Testimonials Section
  testimonials: {
    section: {
      className: "container mx-auto px-4 md:px-8 py-16 md:py-24 bg-muted/30",
    },
    container: {
      className: "max-w-7xl mx-auto",
    },
    header: {
      className: "text-center mb-12 md:mb-16 space-y-4",
    },
    heading: {
      className: "text-3xl md:text-4xl lg:text-5xl font-normal",
    },
    description: {
      className: "text-lg text-muted-foreground max-w-2xl mx-auto",
    },
    grid: {
      className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
      columns: { mobile: 1, tablet: 2, desktop: 3 },
      gap: "2rem",
    },
    card: {
      wrapper: {
        className: "bg-background p-6 md:p-8 rounded-lg space-y-6",
      },
      quote: {
        className: "text-base md:text-lg leading-relaxed",
      },
      author: {
        wrapper: {
          className: "flex items-center gap-4",
        },
        avatar: {
          className: "w-12 h-12 rounded-full bg-muted flex items-center justify-center text-lg font-medium",
          size: "3rem",
        },
        info: {
          wrapper: {
            className: "flex-1",
          },
          name: {
            className: "font-medium text-base",
          },
          role: {
            className: "text-sm text-muted-foreground",
          }
        }
      }
    }
  },

  // Top Case Studies Section
  topCaseStudies: {
    section: {
      className: "bg-white dark:bg-gray-900 py-16 md:py-20",
    },
    container: {
      className: "max-w-7xl mx-auto px-4 md:px-8",
    },
    header: {
      className: "mb-12 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0",
    },
    heading: {
      className: "text-3xl md:text-4xl font-serif text-gray-900 dark:text-gray-100 text-center md:text-left",
    },
    viewAll: {
      className: "px-4 py-2 md:px-6 md:py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-full text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors flex items-center gap-2",
    },
    grid: {
      className: "grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12",
    },
    card: {
      className: "group space-y-5",
    },
    imageWrapper: {
      className: "relative aspect-[16/10] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800",
    },
    image: {
      className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
    },
    content: {
      className: "space-y-3",
    },
    title: {
      className: "text-xl md:text-2xl font-light text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors",
    },
    subtitle: {
      className: "text-sm text-gray-500 dark:text-gray-400",
    },
    description: {
      className: "text-sm text-gray-700 dark:text-gray-300 leading-relaxed",
    },
    tags: {
      className: "flex flex-wrap gap-2",
    },
    tag: {
      className: "px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring transition-colors",
    }
  }
}

export type HomeStyles = typeof homeStyles

