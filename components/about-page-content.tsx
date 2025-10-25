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
