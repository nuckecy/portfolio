import 'server-only'

import { readFileSync } from "fs"
import { join } from "path"

// Server-side only - reads directly from filesystem
// This allows real-time updates without rebuilding

export async function getComponentDataServer(componentName: string) {
  try {
    const filePath = join(process.cwd(), "json", "components", `${componentName}.json`)
    const fileContent = readFileSync(filePath, "utf-8")
    return JSON.parse(fileContent)
  } catch (error) {
    console.warn(`Failed to load component JSON for ${componentName}:`, error)
    return null
  }
}

export async function getPageDataServer(pageName: string) {
  try {
    const filePath = join(process.cwd(), "json", "pages", `${pageName}.json`)
    const fileContent = readFileSync(filePath, "utf-8")
    return JSON.parse(fileContent)
  } catch (error) {
    console.warn(`Failed to load page JSON for ${pageName}:`, error)
    return null
  }
}

export async function getCaseStudyDataServer(caseStudyId: string) {
  try {
    const filePath = join(process.cwd(), "json", "case-studies", `${caseStudyId}.json`)
    const fileContent = readFileSync(filePath, "utf-8")
    return JSON.parse(fileContent)
  } catch (error) {
    console.warn(`Failed to load case study JSON for ${caseStudyId}:`, error)
    return null
  }
}

export async function getAllCaseStudyCardsServer() {
  try {
    const caseStudyIds = [
      'zalando-contextual',
      'uba-hcm-connect',
      'fraud-analytics',
      'cashamm',
      'uba-redd',
      'zalando-chatbot',
      'orgcompass',
      'specta'
    ]

    const cards = []
    for (const id of caseStudyIds) {
      const data = await getCaseStudyDataServer(id)
      if (data?.card) {
        cards.push(data.card)
      }
    }

    return cards
  } catch (error) {
    console.warn(`Failed to load case study cards:`, error)
    return []
  }
}
