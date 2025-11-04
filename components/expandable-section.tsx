"use client"

import { useState, ReactNode } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface ExpandableSectionProps {
  title: string
  children: ReactNode
  defaultExpanded?: boolean
  className?: string
}

export function ExpandableSection({ 
  title, 
  children, 
  defaultExpanded = false,
  className = "" 
}: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  return (
    <div className={`border-b border-gray-200 dark:border-gray-700 ${className}`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors px-2 -mx-2 rounded"
      >
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white text-left">
          {title}
        </h2>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
        )}
      </button>
      
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-[2000px] opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pt-2">
          {children}
        </div>
      </div>
    </div>
  )
}
