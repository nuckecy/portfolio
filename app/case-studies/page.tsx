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

// Helper function to get brand text color class (light) with dark mode fallback
function getBrandTextClass(brandColor: string): string {
  const brandTextColors: { [key: string]: string } = {
    "zalando": "text-brand-zalando dark:text-gray-400",
    "uba": "text-brand-uba dark:text-gray-400",
    "cashamm": "text-brand-cashamm dark:text-gray-400",
    "modus": "text-brand-modus dark:text-gray-400",
    "sterling": "text-brand-sterling dark:text-gray-400"
  }
  return brandTextColors[brandColor] || "text-gray-500 dark:text-gray-400"
}

// Helper function to get card border color (brand in light, gray in dark)
function getCardBorderDarkClass(brandColor: string): string {
  const brandBorderColors: { [key: string]: string } = {
    "zalando": "border-brand-zalando dark:border-gray-500",
    "uba": "border-brand-uba dark:border-gray-500",
    "cashamm": "border-brand-cashamm dark:border-gray-500",
    "modus": "border-brand-modus dark:border-gray-500",
    "sterling": "border-brand-sterling dark:border-gray-500"
  }
  return brandBorderColors[brandColor] || "border-gray-200 dark:border-gray-500"
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
              <Link key={index} href={study.href} className={`${getGradientBorderClass(study.brandColor || study.company)} rounded-[8px] p-[1px] opacity-75 dark:opacity-100 dark:bg-gray-500 h-full`}>
                <div className="bg-white dark:bg-gray-800 rounded-[8px] h-full flex flex-col justify-between">
                  <div className={`${styles.studies.card.className} rounded-[8px] border-0 flex-grow`}>
                    <div className={styles.studies.cardHeader.className}>
                  {/* Company */}
                  <div className={styles.studies.topRow.className}>
                    <span className={`${styles.studies.company.className} ${getBrandTextClass(study.brandColor || study.company)}`}>
                      {study.company}
                    </span>
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

                  {/* Skills Pills (Bottom of Card) */}
                  <div className={styles.studies.skills.className} role="region" aria-label="Case study skills">
                    {study.skills.map((skill: string, skillIndex: number) => (
                      <span key={skillIndex} className={styles.studies.skill.className} tabIndex={-1}>
                        {skill}
                      </span>
                    ))}
                  </div>
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
