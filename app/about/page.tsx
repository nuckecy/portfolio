"use client"

import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { aboutConfig } from "@/config/about"
import { aboutStyles } from "@/config/styles/about"
import { SkillsMarquee } from "@/components/skills-marquee"
import { SkillsRadarOverlay } from "@/components/skills-radar-overlay"

export default function AboutPage() {
  const [isRadarOpen, setIsRadarOpen] = useState(false)

  return (
    <div className={aboutStyles.page.className}>
      {/* Hero Section */}
      <section className={aboutStyles.hero.section.className}>
        <div className={aboutStyles.hero.container.className}>
          <div className={aboutStyles.hero.grid.className}>
            {/* Left Column - Text */}
            <div className={aboutStyles.hero.textColumn.className}>
              <h1 className={aboutStyles.hero.greeting.className}>
                {aboutConfig.hero.greeting}
              </h1>
              <p className={aboutStyles.hero.introduction.className}>
                {aboutConfig.hero.introduction}{" "}
                <span className={aboutStyles.hero.name.className}>
                  {aboutConfig.hero.name}
                </span>{" "}
                <span className={aboutStyles.hero.mission.className}>
                  {aboutConfig.hero.mission}
                </span>
              </p>
              <div className={aboutStyles.hero.story.className}>
                {aboutConfig.hero.story.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className={aboutStyles.hero.imageColumn.className}>
              <div className={aboutStyles.hero.imageWrapper.className}>
                <Image
                  src={aboutConfig.hero.image}
                  alt={aboutConfig.hero.imageAlt}
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
            skills={aboutConfig.coreSkills} 
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
                {aboutConfig.principles.title}
              </h2>
              <p 
                className={aboutStyles.principles.description.className}
                dangerouslySetInnerHTML={{ __html: aboutConfig.principles.description }}
              />
            </div>

            <div className={aboutStyles.principles.grid.className}>
              {aboutConfig.principles.items.map((item, index) => (
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
            {aboutConfig.connect.title}
          </h2>

          <div className={aboutStyles.connect.grid.className}>
            {aboutConfig.connect.links.map((link, index) => (
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
