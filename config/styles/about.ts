/**
 * About Page Styles Configuration
 * Layout and spacing specific to about page
 */

export const aboutStyles = {
  // Page wrapper
  page: {
    className: "min-h-screen bg-gray-50 dark:bg-gray-950",
  },

  // Hero Section
  hero: {
    section: {
      className: "bg-gray-50 dark:bg-gray-950 pt-12 md:pt-16 pb-4",
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
      className: "text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-gray-900 dark:text-gray-100",
    },
    introduction: {
      className: "text-base md:text-lg text-gray-700 dark:text-gray-300",
    },
    name: {
      className: "font-semibold text-gray-900 dark:text-gray-100",
    },
    mission: {
      className: "font-semibold text-gray-900 dark:text-gray-100",
    },
    story: {
      className: "space-y-4 text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed",
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
      className: "bg-gray-50 dark:bg-gray-950 py-4 relative",
    },
    container: {
      className: "overflow-hidden relative max-w-7xl mx-auto",
    },
    scrollContainer: {
      className: "flex gap-3 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4",
    },
    pill: {
      className: "px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex-shrink-0 border border-gray-200 dark:border-gray-700 cursor-pointer",
    }
  },

  // Design Principles Section
  principles: {
    section: {
      className: "pt-32 pb-16 md:pb-24 bg-gray-50 dark:bg-gray-950",
    },
    container: {
      className: "container mx-auto px-4 md:px-8",
    },
    wrapper: {
      className: "bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 lg:p-16",
    },
    header: {
      className: "mb-12 max-w-3xl",
    },
    title: {
      className: "text-3xl md:text-4xl font-normal text-gray-900 dark:text-gray-100 mb-4",
    },
    description: {
      className: "text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed",
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
      className: "text-lg md:text-xl font-medium text-gray-900 dark:text-gray-100",
    },
    itemDescription: {
      className: "text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed",
    }
  },

  // Connect Section
  connect: {
    section: {
      className: "py-12 md:py-16 bg-white dark:bg-gray-900",
    },
    container: {
      className: "container mx-auto px-4 md:px-8 max-w-7xl",
    },
    title: {
      className: "text-3xl md:text-4xl lg:text-5xl font-normal text-center text-gray-900 dark:text-gray-100 mb-10 md:mb-12",
    },
    grid: {
      className: "grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8",
    },
    card: {
      className: "block text-center space-y-2 p-3 md:p-6 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 group",
    },
    iconWrapper: {
      className: "flex justify-center mb-3 md:mb-6",
    },
    icon: {
      className: "text-4xl md:text-6xl dark:invert dark:brightness-0 dark:contrast-100 dark:filter",
    },
    svgIcon: {
      className: "w-14 h-14 md:w-24 md:h-24 dark:invert dark:brightness-0 dark:contrast-100 dark:filter object-contain",
    },
    label: {
      className: "text-base md:text-2xl font-medium text-gray-900 dark:text-gray-100 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors",
    },
    sublabel: {
      className: "text-xs md:text-lg text-gray-600 dark:text-gray-400",
    },
    link: {
      className: "text-red-500 dark:text-red-400 underline hover:text-red-600 dark:hover:text-red-300 transition-colors",
    }
  }
}

export type AboutStyles = typeof aboutStyles
