export const caseStudiesPageStyles = {
  hero: {
    section: {
      className: "container mx-auto px-4 md:px-8 pt-20 md:pt-28 pb-16 md:pb-24 bg-white dark:bg-gray-900"
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
      className: "px-4 md:px-8 pt-16 md:pt-24 pb-16 md:pb-24 bg-background"
    },
    container: {
      className: "max-w-7xl mx-auto"
    },
    heading: {
      className: "text-xs md:text-sm font-medium tracking-wider uppercase mb-8 md:mb-12 text-gray-500 dark:text-gray-400"
    },
    grid: {
      className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 items-stretch"
    },
    card: {
      className: "group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 md:p-5 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 h-full flex flex-col"
    },
    cardHeader: {
      className: "mb-4 flex-grow"
    },
    topRow: {
      className: "flex flex-wrap items-start justify-between mb-2 gap-2"
    },
    company: {
      className: "text-xs font-semibold uppercase tracking-wider"
    },
    skills: {
      className: "flex flex-wrap gap-1 justify-start mt-4"
    },
    skill: {
      className: "px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring transition-colors"
    },
    title: {
      className: "text-lg md:text-xl font-normal text-black dark:text-white mb-2"
    },
    combinedDescription: {
      className: "text-xs md:text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
    },
    subtitleBold: {
      className: "font-semibold"
    },
    metrics: {
      className: "flex flex-wrap gap-2 md:gap-3 mb-4 mt-4"
    },
    metric: {
      className: "flex items-center gap-1 text-xs text-black dark:text-gray-200"
    },
    metricBullet: {
      className: "w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full"
    },
    viewButton: {
      className: "ml-auto w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
    }
  }
}

export type CaseStudiesPageStyles = typeof caseStudiesPageStyles
