import Link from "next/link"
import { Metadata } from "next"
import { getPageData } from "@/lib/load-json"
import { caseStudiesPageConfig } from "@/config/case-studies-page"
import { caseStudiesPageStyles } from "@/config/styles/case-studies-page"

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Featured case studies showcasing user-centered design solutions across fintech, e-commerce, and enterprise platforms.",
}

export default function CaseStudiesPage() {
  const jsonData = getPageData('case-studies')
  
  // Use JSON data with fallback to TypeScript config
  const { hero, studies } = jsonData || caseStudiesPageConfig
  const styles = caseStudiesPageStyles

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className={styles.hero.section.className}>
        <div className={styles.hero.content.className}>
          <h1 className={styles.hero.title.className}>
            {hero.title}
          </h1>
          <p className={styles.hero.description.className}>
            {hero.description}
          </p>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className={styles.studies.section.className}>
        <div className={styles.studies.container.className}>
          <div className={styles.studies.grid.className}>
            {studies.map((study: any, index: number) => (
              <div key={index} className={styles.studies.card.className}>
                <div className={styles.studies.cardHeader.className}>
                  {/* Company & Skills Top Row */}
                  <div className={styles.studies.topRow.className}>
                    <span className={styles.studies.company.className}>
                      {study.company}
                    </span>
                    
                    {/* Skills Pills (Top Right) */}
                    <div className={styles.studies.skills.className}>
                      {study.skills.map((skill: string, skillIndex: number) => (
                        <span key={skillIndex} className={styles.studies.skill.className}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={styles.studies.title.className}>
                    {study.title}
                  </h3>

                  {/* Combined Description */}
                  <p className={styles.studies.combinedDescription.className}>
                    <span className={styles.studies.subtitleBold.className}>
                      {study.subtitle}.
                    </span>
                    {' '}
                    {study.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className={styles.studies.metrics.className}>
                  {study.metrics.map((metric: string, metricIndex: number) => (
                    <div key={metricIndex} className={styles.studies.metric.className}>
                      {metricIndex > 0 && (
                        <span className={styles.studies.metricBullet.className} />
                      )}
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>

                {/* View Case Study Button */}
                <Link href={study.href} className={styles.studies.viewButton.className}>
                  View Case Study
                  <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
