/**
 * Generate JSON case study files from TypeScript config
 * This ensures a single source of truth in the TypeScript configs
 * Run: npm run generate:case-studies
 */

import { writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

// Import all case study configs
import { zalandoContextualConfig } from '../config/case-studies/zalando-contextual'
import { ubaHcmConnectConfig } from '../config/case-studies/uba-hcm-connect'
import { fraudAnalyticsConfig } from '../config/case-studies/fraud-analytics'
import { cashAmmConfig } from '../config/case-studies/cashamm'
import { ubaReddConfig } from '../config/case-studies/uba-redd'
import { zalandoChatbotConfig } from '../config/case-studies/zalando-chatbot'
import { orgcompassConfig } from '../config/case-studies/orgcompass'
import { spectaConfig } from '../config/case-studies/specta'

interface CaseStudyConfig {
  cardInfo: { title: string; subtitle: string; description: string }
  hero: { company?: string; year?: string; skills?: string[]; description?: string; title?: string }
  metrics?: { items?: Array<{ value: string; label: string }> }
  metadata?: { title?: string; description?: string }
}

const caseStudies = [
  { id: 'zalando-contextual', config: zalandoContextualConfig as CaseStudyConfig },
  { id: 'uba-hcm-connect', config: ubaHcmConnectConfig as CaseStudyConfig },
  { id: 'fraud-analytics', config: fraudAnalyticsConfig as CaseStudyConfig },
  { id: 'cashamm', config: cashAmmConfig as CaseStudyConfig },
  { id: 'uba-redd', config: ubaReddConfig as CaseStudyConfig },
  { id: 'zalando-chatbot', config: zalandoChatbotConfig as CaseStudyConfig },
  { id: 'orgcompass', config: orgcompassConfig as CaseStudyConfig },
  { id: 'specta', config: spectaConfig as CaseStudyConfig },
]

const brandColorMap: { [key: string]: string } = {
  'ZALANDO': 'zalando',
  'UBA GROUP': 'uba',
  'STERLING BANK': 'sterling',
  'CASHAMM': 'cashamm',
  'MODUS CREATE': 'modus',
}

const jsonDir = join(process.cwd(), 'json', 'case-studies')

// Ensure directory exists
mkdirSync(jsonDir, { recursive: true })

// Generate JSON for each case study
caseStudies.forEach(({ id, config }) => {
  const company = config.hero?.company || 'Company'
  const year = config.hero?.year || new Date().getFullYear().toString()
  const brandColor = brandColorMap[company] || 'gray'

  const metrics = config.metrics?.items?.map((m: { value: string; label: string }) => `${m.value} ${m.label}`) || []

  const jsonData = {
    card: {
      company,
      year,
      title: config.cardInfo.title,
      subtitle: config.cardInfo.subtitle,
      description: config.cardInfo.description,
      metrics,
      skills: config.hero?.skills || [],
      href: `/case-study/${id}`,
      brandColor,
    },
    metadata: {
      title: config.metadata?.title || config.cardInfo.title,
      description: config.metadata?.description || config.cardInfo.subtitle,
    },
    hero: {
      title: config.hero?.title || '',
      subtitle: config.hero?.description?.split('.')[0] || '',
      description: config.hero?.description || '',
    },
  }

  const outputPath = join(jsonDir, `${id}.json`)
  writeFileSync(outputPath, JSON.stringify(jsonData, null, 2))
  console.log(`✅ Generated ${id}.json`)
})

console.log('\n✨ All case study JSON files generated from TypeScript configs!')
