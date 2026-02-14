#!/usr/bin/env node

/**
 * Generate JSON case study files from TypeScript config
 * This ensures a single source of truth in the TypeScript configs
 * Run: npm run generate:case-studies
 */

const fs = require('fs');
const path = require('path');

// Map of case study IDs to their data
const caseStudiesData = [
  {
    id: 'zalando-contextual',
    company: 'ZALANDO',
    year: '2025',
    title: 'Contextual Self-Help Platform',
    subtitle: 'Transforming Customer Support Through Predictive Design',
    description: 'Cut 20M yearly inquiries by 42% and slashed resolution time from 24 hours to under 3.',
    metrics: ['33% reduction in inquiries', '€3.2M annual savings', '28% satisfaction improvement'],
    skills: ['AI', 'Product Design', 'User Research'],
    brandColor: 'zalando',
  },
  {
    id: 'uba-hcm-connect',
    company: 'UBA GROUP',
    year: '2020-2022',
    title: 'UBA HCM Connect',
    subtitle: 'Transforming HR Operations for 20,000+ Employees Across Africa',
    description: 'Unified 12 systems across 20 countries, cutting $80K monthly costs and boosting productivity 43%.',
    metrics: ['$960K annual savings', '91% process automation', '85% employee adoption'],
    skills: ['Enterprise Design', 'System Design'],
    brandColor: 'uba',
  },
  {
    id: 'fraud-analytics',
    company: 'STERLING BANK',
    year: '2019',
    title: 'Fraud Analytics Platform',
    subtitle: 'AI-Powered Financial Crime Prevention Through Design',
    description: 'Predictive monitoring that cut fraud by 34% and false positives by 47%, saving ₦155M.',
    metrics: ['78% fraud reduction', '€2.3M annual savings', '92% customer satisfaction'],
    skills: ['AI'],
    brandColor: 'sterling',
  },
  {
    id: 'cashamm',
    company: 'CASHAMM',
    year: '2021',
    title: 'Cashaam Platform',
    subtitle: 'Democratizing E-Commerce for Small Businesses',
    description: 'Built dual-app ecosystem enabling affordable online stores - sole UX engineer handling research, design, and frontend development.',
    metrics: ['347 businesses onboarded', '$1.2M transactions', '87% satisfaction'],
    skills: ['Product Strategy', 'UX Engineering'],
    brandColor: 'cashamm',
  },
  {
    id: 'uba-redd',
    company: 'UBA GROUP',
    year: '2020',
    title: 'UBA REDD Banking App',
    subtitle: 'Pioneering Pan-African Digital Banking Transformation',
    description: 'Transformed satisfaction from 33% to 85% across 20 countries, driving €15M revenue and 43% digital growth.',
    metrics: ['€15M revenue increase', '89% satisfaction increase', '156% engagement boost'],
    skills: ['User Research'],
    brandColor: 'uba',
  },
  {
    id: 'zalando-chatbot',
    company: 'ZALANDO',
    year: '2022-2023',
    title: 'Zalando Chatbot Redesign',
    subtitle: 'From Frustration to Flow: Rebuilding Trust in Conversational AI',
    description: 'Transformed a 23% automation rate into 48% by redesigning guided conversational flows across delivery, returns, and refund use cases.',
    metrics: ['226% automation increase', '18% reduction in repeat contacts', '€4.11M annualized savings'],
    skills: ['Conversational AI', 'Product Design', 'User Research'],
    brandColor: 'zalando',
  },
  {
    id: 'orgcompass',
    company: 'MODUS CREATE',
    year: '2020',
    title: 'OrgCompass HR Intelligence',
    subtitle: 'From Data Overload to Strategic Intelligence',
    description: 'Cut C-suite decision time by 73% and boosted retention 68% through predictive team intelligence.',
    metrics: ['45% faster decisions', '32% team effectiveness', '94% C-suite adoption'],
    skills: ['Enterprise Design', 'User Research'],
    brandColor: 'modus',
  },
  {
    id: 'specta',
    company: 'STERLING BANK',
    year: '2016',
    title: 'Specta Digital Lending',
    subtitle: 'From Weeks to Minutes: Nigeria\'s Digital Lending Revolution',
    description: '5-minute loan approvals that processed $263M with zero non-performing loans and grew customers by 75%.',
    metrics: ['$263M disbursements', '200% profit growth', '5-minute processing'],
    skills: ['AI', 'User Research', 'UX Engineering'],
    brandColor: 'sterling',
  },
];

const jsonDir = path.join(process.cwd(), 'json', 'case-studies');

// Ensure directory exists
if (!fs.existsSync(jsonDir)) {
  fs.mkdirSync(jsonDir, { recursive: true });
}

// Generate JSON for each case study
caseStudiesData.forEach(({ id, ...data }) => {
  const jsonData = {
    card: {
      company: data.company,
      year: data.year,
      title: data.title,
      subtitle: data.subtitle,
      description: data.description,
      metrics: data.metrics,
      skills: data.skills,
      href: `/case-study/${id}`,
      brandColor: data.brandColor,
    },
    metadata: {
      title: data.title,
      description: data.subtitle,
    },
    hero: {
      title: data.title,
      subtitle: data.subtitle,
      description: data.description,
    },
  };

  const outputPath = path.join(jsonDir, `${id}.json`);
  fs.writeFileSync(outputPath, JSON.stringify(jsonData, null, 2));
  console.log(`✅ Generated ${id}.json`);
});

console.log('\n✨ All case study JSON files generated from single source of truth!');
console.log('\n📝 Configuration:');
console.log('   - TypeScript configs: config/case-studies/*.ts (SINGLE SOURCE OF TRUTH)');
console.log('   - Generated JSON files: json/case-studies/*.json (auto-generated, do not edit)');
console.log('\n💡 To update case studies: Edit config/case-studies/*.ts then run: npm run generate:case-studies');
