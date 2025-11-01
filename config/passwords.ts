/**
 * Password Configuration File
 *
 * This file contains passwords for protected case studies.
 * You can add or modify passwords here.
 *
 * Security Note: These are simple access passwords, not for sensitive data.
 */

export const caseStudyPasswords = {
  // Zalando case studies (use same password for both)
  "zalando-contextual": "P@33W0rD",
  "zalando-chatbot": "P@33W0rD",

  // Add more case study passwords here if needed
  // "case-study-slug": "YourPasswordHere",
}

/**
 * Get password for a specific case study
 * @param slug - The case study slug (e.g., "zalando-contextual")
 * @returns The password for that case study, or null if not protected
 */
export function getCaseStudyPassword(slug: string): string | null {
  return caseStudyPasswords[slug as keyof typeof caseStudyPasswords] || null
}

/**
 * Check if a case study is password protected
 * @param slug - The case study slug
 * @returns true if the case study requires a password
 */
export function isProtected(slug: string): boolean {
  return slug in caseStudyPasswords
}
