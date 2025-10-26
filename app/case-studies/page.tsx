import Link from "next/link"
import { Metadata } from "next"
import { getPageDataServer, getAllCaseStudyCardsServer } from "@/lib/load-json-server"
import { caseStudiesPageConfig } from "@/config/case-studies-page"
import { caseStudiesPageStyles } from "@/config/styles/case-studies-page"

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Featured case studies showcasing user-centered design solutions across fintech, e-commerce, and enterprise platforms.",
}

// Helper function to get gradient border class based on brand color
function getGradientBorderClass(brandColor: string): string {
  const brandColors: { [key: string]: string } = {
    "zalando": "bg-brand-zalando",
    "uba": "bg-brand-uba",
    "cashamm": "bg-brand-cashamm",
    "modus": "bg-brand-modus",
    "sterling": "bg-brand-sterling"
  }
  return brandColors[brandColor] || "bg-gray-400"
}

// Helper function to get brand text color class
function getBrandTextClass(brandColor: string): string {
  const brandTextColors: { [key: string]: string } = {
    "zalando": "text-brand-zalando",
    "uba": "text-brand-uba",
    "cashamm": "text-brand-cashamm",
    "modus": "text-brand-modus",
    "sterling": "text-brand-sterling"
  }
  return brandTextColors[brandColor] || "text-gray-500"
}

export default async function CaseStudiesPage() {
  const jsonData = await getPageDataServer('case-studies')
  const studiesFromJson = await getAllCaseStudyCardsServer()

  // Use JSON data with fallback to TypeScript config
  const { hero } = jsonData || caseStudiesPageConfig
  const studies = studiesFromJson.length > 0 ? studiesFromJson : caseStudiesPageConfig.studies
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
              <div key={index} className={`${getGradientBorderClass(study.brandColor || study.company)} rounded-[8px] p-[1px] opacity-75`}>
                <div className="bg-white dark:bg-gray-800 rounded-[8px]">
                  <div className={`${styles.studies.card.className} rounded-[8px] border-0`}>
                    <div className={styles.studies.cardHeader.className}>
                  {/* Company & Skills Top Row */}
                  <div className={styles.studies.topRow.className}>
                    <span className={`${styles.studies.company.className} ${getBrandTextClass(study.brandColor || study.company)}`}>
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
                      <span className="hidden">View Case Study</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
