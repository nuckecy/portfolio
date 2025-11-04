"use client"

import { useState } from 'react'

interface ExpandableTextProps {
  text: string
  maxLength?: number
  className?: string
}

export function ExpandableText({ text, maxLength = 200, className = "" }: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  // If text is shorter than maxLength, just display it
  if (text.length <= maxLength) {
    return <div className={className}>{text}</div>
  }

  // Find a good breaking point (end of sentence or word)
  const findBreakPoint = (str: string, max: number): number => {
    // Try to break at sentence end
    const sentenceEnd = str.substring(0, max).lastIndexOf('. ')
    if (sentenceEnd > max * 0.7) return sentenceEnd + 1

    // Otherwise break at word boundary
    const wordEnd = str.substring(0, max).lastIndexOf(' ')
    return wordEnd > 0 ? wordEnd : max
  }

  const breakPoint = findBreakPoint(text, maxLength)
  const truncatedText = text.substring(0, breakPoint)

  // Split text into paragraphs for better formatting when expanded
  const formatText = (str: string) => {
    // Split on double newlines or very long runs of text
    const paragraphs = str.split(/\n\n+/).filter(p => p.trim())
    
    if (paragraphs.length > 1) {
      return paragraphs.map((para, idx) => (
        <p key={idx} className="mb-4 last:mb-0">
          {para.trim()}
        </p>
      ))
    }
    
    // For single paragraph, split long text intelligently
    if (str.length > 400) {
      const sentences = str.match(/[^.!?]+[.!?]+/g) || [str]
      const midPoint = Math.floor(sentences.length / 2)
      return (
        <>
          <p className="mb-4">
            {sentences.slice(0, midPoint).join(' ')}
          </p>
          <p>
            {sentences.slice(midPoint).join(' ')}
          </p>
        </>
      )
    }
    
    return <p>{str}</p>
  }

  return (
    <div className={className}>
      {isExpanded ? (
        <div className="space-y-0">
          {formatText(text)}
          <button
            onClick={() => setIsExpanded(false)}
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm mt-2 inline-block"
          >
            Show less
          </button>
        </div>
      ) : (
        <div>
          <span>{truncatedText}</span>
          <span>... </span>
          <button
            onClick={() => setIsExpanded(true)}
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm"
          >
            Read more
          </button>
        </div>
      )}
    </div>
  )
}
