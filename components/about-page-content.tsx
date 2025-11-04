"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { aboutConfig } from "@/config/about"
import { aboutStyles } from "@/config/styles/about"
import { SkillsMarquee } from "@/components/skills-marquee"
import { SkillsRadarOverlay } from "@/components/skills-radar-overlay"

interface AboutPageContentProps {
  data?: any
}

export function AboutPageContent({ data }: AboutPageContentProps) {
  const [isRadarOpen, setIsRadarOpen] = useState(false)

  // Use JSON data with fallback to TypeScript config
  const heroData = data?.hero || aboutConfig.hero
  const coreSkillsData = data?.coreSkills || aboutConfig.coreSkills
  const principlesData = data?.principles || aboutConfig.principles
  const connectData = data?.connect || aboutConfig.connect

  return (
    <div className={aboutStyles.page.className}>
      {/* Hero Section */}
      <section className={aboutStyles.hero.section.className}>
        <div className={aboutStyles.hero.container.className}>
          <div className={aboutStyles.hero.grid.className}>
            {/* Left Column - Text */}
            <div className={aboutStyles.hero.textColumn.className}>
              <h1 className={aboutStyles.hero.greeting.className}>
                {heroData.greeting}
              </h1>
              <p className={aboutStyles.hero.introduction.className}>
                {heroData.introduction}{" "}
                <span className={aboutStyles.hero.name.className}>
                  {heroData.name}
                </span>{" "}
                <span className={aboutStyles.hero.mission.className}>
                  {heroData.mission}
                </span>
              </p>
              <div className={aboutStyles.hero.story.className}>
                {heroData.story.map((paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-3 mt-8 flex-wrap">
                {/* Contact Button */}
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors font-medium"
                >
                  Get in touch
                </Link>
                
                {/* LinkedIn Icon */}
                <a
                  href="https://www.linkedin.com/in/otobong/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                
                {/* Resume */}
                <Link
                  href="/resume"
                  className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Resume"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className={aboutStyles.hero.imageColumn.className}>
              <div className={aboutStyles.hero.imageWrapper.className}>
                <Image
                  src={heroData.image}
                  alt={heroData.imageAlt}
                  width={400}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Skills Section */}
      <section className={aboutStyles.coreSkills.section.className}>
        <div className={aboutStyles.coreSkills.container.className}>
          <SkillsMarquee
            skills={coreSkillsData}
            pillClassName={aboutStyles.coreSkills.pill.className}
            onSkillClick={() => setIsRadarOpen(true)}
          />
        </div>
      </section>

      {/* Skills Radar Overlay */}
      <SkillsRadarOverlay
        isOpen={isRadarOpen}
        onClose={() => setIsRadarOpen(false)}
      />

      {/* Design Principles Section */}
      <section className={aboutStyles.principles.section.className}>
        <div className={aboutStyles.principles.container.className}>
          <div className={aboutStyles.principles.wrapper.className}>
            <div className={aboutStyles.principles.header.className}>
              <h2 className={aboutStyles.principles.title.className}>
                {principlesData.title}
              </h2>
              <p
                className={aboutStyles.principles.description.className}
                dangerouslySetInnerHTML={{ __html: principlesData.description }}
              />
            </div>

            <div className={aboutStyles.principles.grid.className}>
              {principlesData.items.map((item: any, index: number) => (
                <div key={index} className={aboutStyles.principles.item.className}>
                  <div className={aboutStyles.principles.icon.className}>
                    {item.icon}
                  </div>
                  <h3 className={aboutStyles.principles.itemTitle.className}>
                    {item.title}
                  </h3>
                  <p
                    className={aboutStyles.principles.itemDescription.className}
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className={aboutStyles.connect.section.className}>
        <div className={aboutStyles.connect.container.className}>
          <h2 className={aboutStyles.connect.title.className}>
            {connectData.title}
          </h2>

          <div className={aboutStyles.connect.grid.className}>
            {connectData.links.map((link: any, index: number) => (
              <Link
                key={index}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={aboutStyles.connect.card.className}
              >
                <div className={aboutStyles.connect.iconWrapper.className}>
                  {link.iconType === "svg" ? (
                    <Image
                      src={link.icon}
                      alt={link.label}
                      width={60}
                      height={60}
                      className={aboutStyles.connect.svgIcon.className}
                    />
                  ) : (
                    <span className={aboutStyles.connect.icon.className}>
                      {link.icon}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className={aboutStyles.connect.label.className}>
                    {link.label}
                  </h3>
                  <p className={aboutStyles.connect.sublabel.className}>
                    {link.sublabel}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
