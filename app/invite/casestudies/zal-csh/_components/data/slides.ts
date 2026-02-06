/**
 * Slide data for the Zalando case study presentation.
 * Each entry maps to a slide component and contains metadata.
 */

export interface SlideData {
  id: number;
  componentName: string;
  title: string;
  section: string;
  subSection?: string;
  notes: string;
  hidden?: boolean;
}

export const slideData: SlideData[] = [
  {
    id: 0,
    componentName: 'SlideHero',
    title: 'Introduction',
    section: 'Opening',
    notes: 'Open with the headline and let the metrics speak. Pause on each metric briefly.\n\n45% drop in recontact cases, 28% CSAT lift, €3.2M annual savings, 67% faster resolution.\n\nThese are the outcomes. The rest of the presentation explains how we got there.',
  },
  {
    id: 1,
    componentName: 'SlideAbout',
    title: 'About the project',
    section: 'Opening',
    notes: "Zalando is Europe's largest online fashion platform with 50M+ active customers across 25 markets.\n\nThis was an 11-month strategic initiative to redesign self-service for delivery, returns, and refund issues. Sponsored by the Director of Customer Care with VP-level visibility. I was the sole designer, 100% dedicated.",
  },
  {
    id: 2,
    componentName: 'SlideCost',
    title: 'The cost of failed self-service',
    section: 'The Challenge',
    subSection: 'Context & Background',
    notes: 'Every customer contact cost €3.5 across email, phone, and chat. There were 2 million repeat contacts per year.\n\nThat\'s €7 million annually in avoidable support costs. CSAT was 3.1/5 and average resolution took 24 hours.',
  },
  {
    id: 3,
    componentName: 'SlideWhyRepeats',
    title: 'Why customers contacted repeatedly',
    section: 'The Challenge',
    subSection: 'Context & Background',
    notes: 'Three root causes drove repeat contacts:\n\n1. Generic FAQ: same static page regardless of customer context\n2. Channel hopping: unresolved in one channel, try another\n3. Agent dependency: self-service trained customers to bypass it',
  },
  {
    id: 4,
    componentName: 'SlideTopFive',
    title: 'Top four reasons',
    section: 'The Challenge',
    subSection: 'Problem Statement',
    notes: "Four questions dominated support volume: Where is my refund? Where is my package? How do I return this? Where do I drop this off?\n\nEvery one pointed to the same root issue: zero awareness of the customer's actual situation.",
  },
  {
    id: 5,
    componentName: 'SlideResearch',
    title: 'How I built understanding',
    section: 'Research & Discovery',
    notes: 'I conducted 12 user interviews across multiple European markets and 8 stakeholder interviews spanning product, engineering, and customer care leadership.\n\nI analyzed 100+ support transcripts for conversation patterns and failure points. The research also included first-hand testing of existing channels, usability studies, and A/B testing during rollout.',
  },
  {
    id: 6,
    componentName: 'SlideInsight1',
    title: "Customers scan, they don't read",
    section: 'Research & Discovery',
    subSection: 'Key Insights',
    notes: "This was the foundational insight. Detailed FAQ pages caused information overload and abandonment. Customers weren't looking for thorough documentation. They wanted the one piece of information relevant to their specific situation.\n\nThis directly informed the move to contextual cards over comprehensive pages.",
  },
  {
    id: 7,
    componentName: 'SlideInsight2',
    title: 'Images are the primary identifier',
    section: 'Research & Discovery',
    subSection: 'Key Insights',
    notes: 'When managing multiple parcels, customers recognized products by their photos, not by order numbers or reference IDs. This fundamentally changed the identification layer of the design.\n\nOrder IDs only became relevant during escalation, when agents needed them for ticket processing.',
  },
  {
    id: 8,
    componentName: 'SlideInsight3',
    title: 'Context beats comprehensiveness',
    section: 'Research & Discovery',
    subSection: 'Key Insights',
    notes: 'The initial assumption was that customers needed more information. Research proved they needed the right information at the right moment.\n\nTwo supporting insights: repeat contacts signaled system failure, not customer behavior problems, and customers experienced delivery-returns-refund as one continuous journey.',
  },
  {
    id: 9,
    componentName: 'SlideEntryPoints',
    title: 'Four entry points',
    section: 'Research & Discovery',
    subSection: 'Entry Points',
    notes: 'Research revealed four distinct paths to the FAQ: Google search (highest volume), website navigation, account navigation, and the returns page.\n\nThis was critical because it meant the solution needed to adapt its display based on arrival context.',
  },
  {
    id: 10,
    componentName: 'SlidePrinciples',
    title: 'Guiding principles',
    section: 'Guiding Principles',
    notes: "Three design principles emerged from research:\n\n1. Progressive disclosure: reveal only what matters at each step\n2. Design for existing mental models (Jakob's Law): embed in existing FAQ, use product images\n3. Confirmed data builds trust (Error prevention - Heuristic #5): only show confirmed, verified data",
  },
  {
    id: 11,
    componentName: 'SlideDecisions',
    title: 'Design decisions',
    section: 'Design Process',
    subSection: 'Ideation & Exploration',
    notes: 'Three fundamental decisions shaped the direction:\n\nEmbedded over standalone (customers already had 4 paths). Progressive disclosure over comprehensive (testing confirmed overload). Product images over order IDs (customers think visually).\n\nEach decision was validated through research, not assumption.',
  },
  {
    id: 12,
    componentName: 'SlideTesting',
    title: 'Usability testing',
    section: 'Design Process',
    subSection: 'Prototyping & Iteration',
    notes: "8 out of 12 participants completed the primary task flow in the first round. Key friction points: unclear escalation entry points and confusion between return stages.\n\nCard layout differentiation emerged from testing: returns needed vertical staged flows, refunds used horizontal cards. This wasn't an upfront decision.",
  },
  {
    id: 13,
    componentName: 'SlideStakeholders',
    title: 'Stakeholder navigation',
    section: 'Design Process',
    subSection: 'Stakeholder Navigation',
    notes: 'Two key stakeholder challenges:\n\nThe FAQ redesign pushback was resolved by proposing a phased strategy: embed first, evolve later.\n\nCarrier API fragmentation was addressed by partnering with backend engineers market by market. I discovered more data was available than assumed, and the carrier data map became a resource for other teams.',
  },
  {
    id: 14,
    componentName: 'SlideArchitecture',
    title: 'System architecture',
    section: 'Solution',
    subSection: 'System Architecture',
    notes: 'The system identifies authenticated customers through API integration, pulls order and parcel data, and surfaces contextual information based on journey stage.\n\nFive-step flow: Entry (4 adaptive paths) → Identify (product images) → Context (real-time carrier/warehouse/payment data) → Resolve (tailored per journey) → Escalate (full context attached).',
  },
  {
    id: 15,
    componentName: 'SlideIdentification',
    title: 'Entry-point-adaptive display',
    section: 'Solution',
    subSection: 'Core Experience',
    notes: 'Via Google search: land on specific FAQ section, see only relevant contextual cards.\n\nVia website, account, or returns page: see FAQ homepage with all active cards displayed. Product images ensure instant visual recognition across multiple active orders.',
    hidden: true,
  },
  {
    id: 16,
    componentName: 'SlideFlows',
    title: 'Resolution paths',
    section: 'Solution',
    subSection: 'Resolution Paths',
    notes: 'Three journey types, each with tailored information architecture:\n\nDelivery: progressive disclosure from status glance to full details. Returns: staged vertical flow with confirmed data only (carrier scan, warehouse scan). Refund: horizontal cards with amount, timeline, payment method.',
  },
  {
    id: 17,
    componentName: 'SlideEscalation',
    title: 'Escalation & edge cases',
    section: 'Solution',
    subSection: 'Escalation & Edge Cases',
    notes: "When self-service can't resolve: ticket created with full context already attached. Agent follows up within 24 hours with case context in hand.\n\nDuplicate detection shows reassurance rather than silent blocking. Empty states gracefully fall back to standard FAQ.",
  },
  {
    id: 18,
    componentName: 'SlideBeforeAfter',
    title: 'Before / After',
    section: 'Solution',
    subSection: 'Transformation',
    notes: 'The transformation from generic, text-heavy FAQ pages to personalized, contextual self-help cards.\n\nBefore: same static page for everyone. After: entry-point-adaptive display with product images, real-time status, and progressive disclosure.',
  },
  {
    id: 19,
    componentName: 'SlideResultsCustomer',
    title: 'Customer impact',
    section: 'Results & Impact',
    notes: '45% drop in recontact cases across delivery and returns. 33% fewer returns inquiries, exceeding the 25% target.\n\n28% CSAT improvement from 3.1 to 4.2 out of 5. 67% faster resolution from 24 hours to under 3 hours.',
  },
  {
    id: 20,
    componentName: 'SlideResultsBusiness',
    title: 'Business results',
    section: 'Results & Impact',
    notes: '€3.2M in annual cost savings from eliminating approximately 900,000 repeat contacts per year.\n\n52% increase in agent productivity as agents shifted to complex interactions. 8% automation rate increase. Results validated the strategic investment and influenced broader automation strategy.',
  },
  {
    id: 21,
    componentName: 'SlideMetricsComparison',
    title: 'Transformation in numbers',
    section: 'Results & Impact',
    notes: 'Resolution time: 24 hours to under 3 hours. Customer satisfaction: 3.1 to 4.2. Repeat contacts: 2M to 1.1M per year. Annual cost: €7M to €3.8M.\n\nEvery metric improved significantly, validating the contextual approach.',
  },
  {
    id: 22,
    componentName: 'SlideKeyLesson',
    title: 'Key lesson',
    section: 'Reflection',
    notes: 'The most important shift was from comprehensive to contextual. Research proved customers needed the right information at the right moment, not all information at once.\n\nThis distinction unlocked every major outcome, from the 45% drop in recontact cases to the 28% CSAT improvement.',
  },
  {
    id: 23,
    componentName: 'SlideClosing',
    title: 'Reflection & closing',
    section: 'Reflection',
    notes: "Three things I'd do differently:\n\n1. Push for technical discovery earlier (carrier API investigation happened mid-project)\n2. Invest in content strategy from day one (content design became critical)\n3. Map technical constraints before designing information architecture (the dashboard pivot was costly)\n\nThese principles are now foundational to how I approach complex service design.",
  },
  {
    id: 24,
    componentName: 'SlideThankYou',
    title: 'Thank you & About Otobong',
    section: 'Closing',
    notes: 'Thank you for viewing this case study. Otobong Okoko is a Senior Product Designer who combines deep user research with technical fluency to deliver measurable business outcomes.',
  },
];
