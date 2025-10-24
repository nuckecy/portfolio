"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { homeConfig } from "@/config/home"
import { homeStyles } from "@/config/styles/home"
import { SkillsMarquee } from "@/components/skills-marquee"
import { SkillsRadarOverlay } from "@/components/skills-radar-overlay"

export default function Home() {
  // Select a random bio on mount
  const [currentBio, setCurrentBio] = useState("")
  const [isRadarOpen, setIsRadarOpen] = useState(false)

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * homeConfig.hero.rotatingBios.length)
    setCurrentBio(homeConfig.hero.rotatingBios[randomIndex])
  }, [])

  return (
    <div className={homeStyles.page.className}>
      {/* Hero Section */}
      <section className={homeStyles.hero.section.className}>
        <div className={homeStyles.hero.container.className}>
          <div className={homeStyles.hero.grid.className}>
            {/* Left Column - Text */}
            <div className={homeStyles.hero.textColumn.className}>
              <div className={homeStyles.hero.textContent.className}>
                <div className={homeStyles.hero.badge.className}>
                  <div className={homeStyles.hero.badgeLine.className}></div>
                  <span>{homeConfig.hero.badge}</span>
                </div>
                <h1 className={homeStyles.hero.title.className}>
                  {homeConfig.hero.title}
                </h1>
                <p className={homeStyles.hero.description.className}>
                  {currentBio || homeConfig.hero.description}
                </p>
              </div>
            </div>

            {/* Right Column - Portrait */}
            <div className={homeStyles.hero.portraitColumn.className}>
              <Image
                src={homeConfig.hero.portraitImage}
                alt={homeConfig.hero.portraitAlt}
                width={homeStyles.hero.portraitImage.width}
                height={homeStyles.hero.portraitImage.height}
                priority={homeStyles.hero.portraitImage.priority}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Skills Section */}
      <section className={homeStyles.coreSkills.section.className}>
        <div className={homeStyles.coreSkills.container.className}>
          <SkillsMarquee 
            skills={homeConfig.coreSkills} 
            pillClassName={homeStyles.coreSkills.pill.className}
            onSkillClick={() => setIsRadarOpen(true)}
          />
        </div>
      </section>

      {/* Skills Radar Overlay */}
      <SkillsRadarOverlay 
        isOpen={isRadarOpen} 
        onClose={() => setIsRadarOpen(false)} 
      />

      {/* Top Case Studies Section */}
      <section className={homeStyles.topCaseStudies.section.className}>
        <div className={homeStyles.topCaseStudies.container.className}>
          <div className={homeStyles.topCaseStudies.header.className}>
            <h2 className={homeStyles.topCaseStudies.heading.className}>
              {homeConfig.topCaseStudies.heading}
            </h2>
            <Link 
              href={homeConfig.topCaseStudies.viewAllHref}
              className={homeStyles.topCaseStudies.viewAll.className}
            >
              {homeConfig.topCaseStudies.viewAllText}
              <span>→</span>
            </Link>
          </div>

          <div className={homeStyles.topCaseStudies.grid.className}>
            {homeConfig.topCaseStudies.studies.map((study, index) => (
              <Link 
                key={index} 
                href={study.href}
                className={homeStyles.topCaseStudies.card.className}
              >
                <div className={homeStyles.topCaseStudies.imageWrapper.className}>
                  <Image
                    src={study.image}
                    alt={study.imageAlt}
                    fill
                    className={homeStyles.topCaseStudies.image.className}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className={homeStyles.topCaseStudies.content.className}>
                  <h3 className={homeStyles.topCaseStudies.title.className}>
                    {study.title}
                  </h3>
                  <p className={homeStyles.topCaseStudies.description.className}>
                    <strong>{study.subtitle}</strong> {study.description}
                  </p>
                  <div className={homeStyles.topCaseStudies.tags.className}>
                    {study.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className={homeStyles.topCaseStudies.tag.className}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
