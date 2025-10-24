export const caseStudiesPageStyles = {
  hero: {
    section: {
      className: "container mx-auto px-4 md:px-8 py-16 md:py-24"
    },
    content: {
      className: "max-w-4xl mx-auto text-center space-y-6"
    },
    title: {
      className: "text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-gray-900 dark:text-gray-100"
    },
    description: {
      className: "text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto"
    }
  },

  studies: {
    section: {
      className: "container mx-auto px-4 md:px-8 pb-16 md:pb-24"
    },
    container: {
      className: "max-w-7xl mx-auto"
    },
    heading: {
      className: "text-xs md:text-sm font-medium tracking-wider uppercase mb-8 md:mb-12 text-gray-500 dark:text-gray-400"
    },
    grid: {
      className: "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
    },
    card: {
      className: "group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 md:p-8 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300"
    },
    cardHeader: {
      className: "mb-6"
    },
    topRow: {
      className: "flex items-start justify-between mb-3 gap-4"
    },
    company: {
      className: "text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
    },
    skills: {
      className: "flex flex-wrap gap-1 justify-end"
    },
    skill: {
      className: "px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600"
    },
    title: {
      className: "text-xl md:text-2xl font-normal text-gray-900 dark:text-gray-100 mb-4"
    },
    combinedDescription: {
      className: "text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
    },
    subtitleBold: {
      className: "font-semibold"
    },
    metrics: {
      className: "flex flex-wrap gap-2 md:gap-4 mb-6 mt-6"
    },
    metric: {
      className: "flex items-center gap-1 text-xs md:text-sm text-gray-700 dark:text-gray-300"
    },
    metricBullet: {
      className: "w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full"
    },
    viewButton: {
      className: "inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-full text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors"
    }
  }
}

export type CaseStudiesPageStyles = typeof caseStudiesPageStyles
