"use client"

import ReactMarkdown from 'react-markdown'

interface LinkedInResumeProps {
  content: string
}

function cleanText(text: any): string {
  // Handle objects that might be rendered as [object Object]
  if (typeof text === 'object' && text !== null) {
    return ''
  }
  const str = String(text || '')
  // Remove citation markers and content within square brackets
  return str.replace(/\[cite[^\]]*\]/g, '').replace(/\[cite_start[^\]]*\]/g, '').trim()
}

// Helper to extract text from children safely
function extractText(children: any): string {
  if (!children) return ''
  if (typeof children === 'string') return children
  if (Array.isArray(children)) {
    return children.map(c => extractText(c)).join('')
  }
  if (typeof children === 'object' && children.props && children.props.children) {
    return extractText(children.props.children)
  }
  return ''
}

export function LinkedInResume({ content }: LinkedInResumeProps) {
  // Filter out the experience section from markdown (we'll use the structured ExperienceSection component instead)
  const lines = content.split('\n')
  const experienceStartIndex = lines.findIndex(line => 
    line.includes('EXPERIENCE: DETAILS & PROJECTS') || line.includes('---') && lines[lines.indexOf(line) + 1]?.includes('EXPERIENCE')
  )
  
  const filteredContent = experienceStartIndex > 0 
    ? lines.slice(0, experienceStartIndex).join('\n')
    : content
  
  return (
    <div className="space-y-8">
      <ReactMarkdown
        components={{
          h1: ({ children }) => null, // Skip the main title as we have it in header
          h2: ({ children }) => {
            const rawText = extractText(children)
            const text = cleanText(rawText)
            if (!text) return null
            if (text.includes('EXPERIENCE') || text.includes('Professional Journey') || text.includes('Design Philosophy')) {
              return (
                <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {text.replace('EXPERIENCE: DETAILS & PROJECTS', 'Experience').replace('Professional Journey', 'About')}
                  </h2>
                </div>
              )
            }
            return (
              <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-6 mt-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{text}</h2>
              </div>
            )
          },
          h3: ({ children }) => {
            const rawText = extractText(children)
            const text = cleanText(rawText)
            if (!text) return null
            // Company headers
            if (text.includes('|') && (text.includes('Berlin') || text.includes('Lagos') || text.includes('Nigeria'))) {
              const [company, location] = text.split('|').map(s => s.trim())
              return (
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{company}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{location}</p>
                </div>
              )
            }
            // Position headers
            if (text.includes('Senior Product Designer') || text.includes('Design Lead') || text.includes('Product Designer')) {
              return (
                <div className="mb-3">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">{text}</h4>
                </div>
              )
            }
            return (
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">{text}</h3>
            )
          },
          h4: ({ children }) => {
            const rawText = extractText(children)
            const text = cleanText(rawText)
            if (!text) return null
            if (text.includes('**') || text.includes('Problem:') || text.includes('Solution:') || text.includes('Impact:')) {
              return (
                <h4 className="text-base font-semibold text-blue-600 dark:text-blue-400 mt-4 mb-2">
                  {text.replace(/\*\*/g, '').replace(/"/g, '')}
                </h4>
              )
            }
            return (
              <h4 className="text-base font-medium text-gray-900 dark:text-white mb-2">
                {text}
              </h4>
            )
          },
          p: ({ children }) => {
            const rawText = extractText(children)
            const text = cleanText(rawText)
            if (!text) return null
            // Handle contact info and dates
            if (text.includes('Portfolio') || text.includes('LinkedIn') || text.includes('@') || text.includes('+')) {
              return null // Skip contact info as it's in header
            }
            if (text.includes('Nov 2021 - Present') || text.includes('Jan 2020 - Nov 2021') || text.includes('Jan 2014 - Jan 2020')) {
              return (
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{text.replace(/"/g, '')}</p>
              )
            }
            return (
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">{text.replace(/"/g, '')}</p>
            )
          },
          ul: ({ children }) => (
            <div className="space-y-1 mb-4">{children}</div>
          ),
          li: ({ children }) => {
            const rawText = extractText(children)
            const text = cleanText(rawText)
            if (!text) return null
            // Achievement items - remove bullets and quotes
            if (text.includes('*') || text.startsWith('We ') || text.startsWith('Improved') || text.startsWith('Reduced') || text.startsWith('Increased')) {
              return (
                <div className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {text.replace(/^\*\s*/, '').replace(/"/g, '')}
                </div>
              )
            }
            // Skills/competencies - remove bullets and quotes
            return (
              <div className="text-gray-700 dark:text-gray-300 text-sm">
                {text.replace(/^\*\s*/, '').replace(/"/g, '')}
              </div>
            )
          },
          strong: ({ children }) => {
            const rawText = extractText(children)
            const text = cleanText(rawText)
            if (!text) return null
            return (
              <strong className="font-semibold text-gray-900 dark:text-white">{text.replace(/"/g, '')}</strong>
            )
          },
          em: ({ children }) => {
            const rawText = extractText(children)
            const text = cleanText(rawText)
            if (!text) return null
            return (
              <em className="text-gray-600 dark:text-gray-400">{text.replace(/"/g, '')}</em>
            )
          },
        }}
      >
        {filteredContent}
      </ReactMarkdown>
    </div>
  )
}