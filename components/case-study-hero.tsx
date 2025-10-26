"use client"

import { useEffect, useRef, useState } from "react"

interface CaseStudyHeroConfig {
  projectName?: string
  company?: string
  year?: string
  title: string
  titleSize?: string
  titleWeight?: string
  description: string
  descriptionSize?: string
  skills?: string[]
  centered?: boolean
  maxWidth?: string
  image?: {
    url: string
    alt: string
    height?: string
  }
  overlay?: {
    gradient?: string
  }
}

interface MetricsConfig {
  background?: string
  items: Array<{
    value: string
    label: string
  }>
  fontSize?: {
    value: string
    label: string
  }
}

interface OverviewConfig {
  title: string
  paragraphs: string[]
}

interface RolesResponsibilitiesConfig {
  title: string
  role: { title: string; subtitle: string }
  team: { title: string; subtitle: string }
  market: { title: string; subtitle: string }
}

interface CaseStudyHeroProps {
  hero: CaseStudyHeroConfig
  overview?: OverviewConfig
  metrics?: MetricsConfig
  rolesResponsibilities?: RolesResponsibilitiesConfig
}

export function CaseStudyHero({ hero, overview, metrics, rolesResponsibilities }: CaseStudyHeroProps) {
  const overviewRef = useRef<HTMLDivElement>(null)
  const [wordVisibility, setWordVisibility] = useState<boolean[]>([])

  useEffect(() => {
    const handleScroll = () => {
      if (overviewRef.current) {
        const words = overviewRef.current.querySelectorAll('.fade-word')
        const windowHeight = window.innerHeight
        
        const newVisibility = Array.from(words).map((word) => {
          const rect = word.getBoundingClientRect()
          // Word is visible when it's in the middle portion of the viewport
          return rect.top < windowHeight * 0.7 && rect.bottom > windowHeight * 0.3
        })
        
        setWordVisibility(newVisibility)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const {
    projectName,
    company,
    year,
    title,
    titleSize = "text-3xl md:text-5xl lg:text-6xl",
    titleWeight = "font-light",
    description,
    descriptionSize = "text-lg md:text-xl",
    skills = [],
    centered = true,
    maxWidth = "lg:max-w-[55%]",
    image,
    overlay,
  } = hero

  return (
    <>
      {/* Hero Section - Large Text */}
      <section className="w-full border-b border-border py-12 md:py-16 lg:py-20">
        <div className={`w-full px-4 md:px-8 lg:px-12 max-w-7xl mx-auto ${centered ? 'flex justify-center' : ''}`}>
          <div className={`space-y-6 md:space-y-8 max-w-none ${maxWidth} ${centered ? 'text-center' : ''}`}>
            {/* Project Name, Year, and Company - Plain text */}
            {(projectName || company || year) && (
              <div className={`flex items-center gap-3 text-xs font-light text-muted-foreground uppercase tracking-wider animate-in fade-in slide-in-from-bottom-4 duration-700 ${centered ? 'justify-center' : ''}`}>
                {projectName && <span>{projectName}</span>}
                {projectName && (year || company) && <span>•</span>}
                {year && <span>{year}</span>}
                {year && company && <span>•</span>}
                {company && <span>{company}</span>}
              </div>
            )}

            {/* Large Title */}
            <h1 className={`${titleSize} ${titleWeight} leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150`}>
              {title}
            </h1>

            {/* Description - Full width */}
            <div className="max-w-none animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
              <p className={`${descriptionSize} text-muted-foreground leading-relaxed`}>
                {description}
              </p>
            </div>

            {/* Skills - Pills with light weight */}
            {skills.length > 0 && (
              <div className={`flex flex-wrap items-center gap-2 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 ${centered ? 'justify-center' : ''}`}>
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-muted/30 backdrop-blur-sm border border-border/50 rounded-full text-sm font-light"
                    style={{ color: 'hsl(0, 0%, 0%)' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}

            {/* Impact Stats - Inline with centered dots */}
            <div className={`flex flex-wrap items-center justify-center gap-3 text-sm font-light text-green-700 dark:text-green-600 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700`}>
              <span>33% reduction in inquiries</span>
              <span className="text-xs">•</span>
              <span>€3.2M annual savings</span>
              <span className="text-xs">•</span>
              <span>28% satisfaction improvement</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image - Full Width */}
      {image && (
        <section className={`relative w-full overflow-hidden animate-in fade-in duration-1000 delay-700`} style={{ height: image.height || '525px' }}>
          <img 
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          {overlay?.gradient && (
            <div className={`absolute inset-0 ${overlay.gradient}`} />
          )}
        </section>
      )}

      {/* Overview + Impact Metrics Section */}
      {(overview || metrics) && (
        <section className={`border-b border-border ${metrics?.background || 'bg-muted/50'}`}>
          <div className="w-full px-4 md:px-8 lg:px-12 py-8 md:py-12 max-w-6xl mx-auto">
            {/* Overview Text */}
            {overview && (
              <div ref={overviewRef} className="mb-12">
                <h2 className="text-sm font-medium uppercase tracking-wider mb-8">
                  {overview.title.split(' ').map((word, index) => (
                    <span
                      key={index}
                      className="fade-word inline-block transition-colors duration-500"
                      style={{ 
                        color: wordVisibility[index] ? 'hsl(0, 0%, 0%)' : 'hsl(0, 0%, 70%)',
                        marginRight: '0.25em'
                      }}
                    >
                      {word}
                    </span>
                  ))}
                </h2>
                <div className="space-y-6">
                  {overview.paragraphs.map((paragraph, pIndex) => {
                    const words = paragraph.split(' ')
                    const titleWordCount = overview.title.split(' ').length
                    const previousWordsCount = overview.paragraphs
                      .slice(0, pIndex)
                      .reduce((acc, p) => acc + p.split(' ').length, 0)
                    
                    return (
                      <p key={pIndex} className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-normal">
                        {words.map((word, wIndex) => {
                          const globalIndex = titleWordCount + previousWordsCount + wIndex
                          return (
                            <span
                              key={wIndex}
                              className="fade-word inline-block transition-colors duration-500"
                              style={{ 
                                color: wordVisibility[globalIndex] ? 'hsl(0, 0%, 0%)' : 'hsl(0, 0%, 70%)',
                                marginRight: '0.25em'
                              }}
                            >
                              {word}
                            </span>
                          )
                        })}
                      </p>
                    )
                  })}
                </div>
              </div>
            )}
            
            {/* Metrics Grid */}
            {metrics && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {metrics.items.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className={`${metrics.fontSize?.value || 'text-3xl md:text-4xl lg:text-5xl'} font-normal mb-2 text-foreground`}>
                      {metric.value}
                    </div>
                    <div className={`${metrics.fontSize?.label || 'text-sm'} font-medium`} style={{ color: 'hsl(0, 0%, 0%)' }}>
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Roles & Responsibilities Section */}
      {rolesResponsibilities && (
        <section className="border-b border-border bg-background">
          <div className="w-full px-4 md:px-8 lg:px-12 py-8 md:py-12 max-w-6xl mx-auto">
            <h2 className="text-sm font-medium uppercase tracking-wider mb-8 text-foreground">{rolesResponsibilities.title}</h2>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wider mb-3 text-muted-foreground">Role</h3>
                <p className="text-base font-medium text-foreground">{rolesResponsibilities.role.title}</p>
                <p className="text-sm mt-1 text-muted-foreground">{rolesResponsibilities.role.subtitle}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wider mb-3 text-muted-foreground">Team</h3>
                <p className="text-base font-medium text-foreground">{rolesResponsibilities.team.title}</p>
                <p className="text-sm mt-1 text-muted-foreground">{rolesResponsibilities.team.subtitle}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wider mb-3 text-muted-foreground">Market</h3>
                <p className="text-base font-medium text-foreground">{rolesResponsibilities.market.title}</p>
                <p className="text-sm mt-1 text-muted-foreground">{rolesResponsibilities.market.subtitle}</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
