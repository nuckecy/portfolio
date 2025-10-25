/**
 * Utility function to load JSON content files
 * This allows for dynamic content loading from JSON instead of TypeScript configs
 */

// Synchronous version for client-side usage
export function getPageData(pageName: string) {
  try {
    return require(`@/json/pages/${pageName}.json`);
  } catch (error) {
    console.warn(`Failed to load page JSON for ${pageName}`);
    return null;
  }
}

export function getCaseStudyData(caseStudyId: string) {
  try {
    return require(`@/json/case-studies/${caseStudyId}.json`);
  } catch (error) {
    console.warn(`Failed to load case study JSON for ${caseStudyId}`);
    return null;
  }
}

export function getComponentData(componentName: string) {
  try {
    return require(`@/json/components/${componentName}.json`);
  } catch (error) {
    console.warn(`Failed to load component JSON for ${componentName}`);
    return null;
  }
}
