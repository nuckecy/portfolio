/**
 * SLIDE COMPONENT STUBS
 *
 * Each slide is exported as a named component.
 * All content data is inline (extracted from the working prototype).
 * Layout instructions are in comments above each component.
 *
 * To implement: reference presentation-v2.jsx (the working prototype)
 * for the exact JSX structure of each slide.
 *
 * Every slide uses:
 *   - slidePadding for consistent margins
 *   - height: "100%" with boxSizing: "border-box"
 *   - display: "flex", flexDirection: "column"
 */

import React from 'react';
import { STYLE, typeStyle, slidePadding } from '../../styles/tokens';
import { Card, BentoCard, IconBox, ImagePlaceholder } from '../primitives';
import { SectionLabel } from '../ui/SectionLabel';
import { icons } from '../../styles/icons';

const slideBase = {
  ...slidePadding,
  height: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
};

// ─────────────────────────────────────────────────────────
// SLIDE 0: Hero
// Layout: Title bottom-anchored, 2×2 metrics grid, footer
// ─────────────────────────────────────────────────────────

export const SlideHero = () => (
  <div style={slideBase}>
    <div style={typeStyle('pageCaption', STYLE.colors.gray700)}>Case study</div>
    <div style={{ marginTop: 'auto' }}>
      <h1 style={typeStyle('title1')}>Transforming<br/>Customer Support</h1>
      <p style={{ ...typeStyle('title2', STYLE.colors.gray500), marginTop: 24 }}>
        Context-aware self-help platform at Zalando
      </p>
    </div>
    {/* 2×2 metrics grid */}
    <div style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr', marginTop: 56,
      border: `1px solid ${STYLE.colors.border}`, borderRadius: STYLE.radius.card,
      overflow: 'hidden', width: 'fit-content',
    }}>
      {[
        ['42% fewer inquiries', '28% CSAT lift'],
        ['€3.2M saved', '67% faster resolution'],
      ].map((row, ri) => row.map((cell, ci) => (
        <div key={`${ri}-${ci}`} style={{
          ...typeStyle('title3', STYLE.colors.gray300),
          padding: '28px 56px',
          borderRight: ci === 0 ? `1px solid ${STYLE.colors.border}` : 'none',
          borderTop: ri === 1 ? `1px solid ${STYLE.colors.border}` : 'none',
        }}>{cell}</div>
      )))}
    </div>
    <div style={{ marginTop: 'auto' }}>
      <span style={typeStyle('pageFooter', STYLE.colors.accent)}>
        Otobong Okoko &nbsp;·&nbsp; Senior Product Designer &nbsp;·&nbsp; Zalando SE
      </span>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────
// SLIDE 1: About the project
// Layout: 4-col × 3-row bento grid (first 2 cols 0.8fr)
// Cards: Zalando (gradientWhite, 2×2), Platform, Markets,
//        Focus, Duration, The Project (orangeGradient, full row)
// ─────────────────────────────────────────────────────────

export const SlideAbout = () => {
  // TODO: Implement bento grid layout
  // See prototype lines 278-385
  return (
    <div style={slideBase}>
      <SectionLabel section="About the project" />
      <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap }}>
        Redesigning self-service for<br/>Europe's largest fashion platform
      </h2>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={typeStyle('paragraph1', STYLE.colors.gray500)}>
          [Bento grid: Zalando card, Platform, Markets, Focus, Duration, The Project]
        </p>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SLIDE 2: The cost of failed self-service
// Layout: 35/65 split — left bento (€3.5, 2M, €7M), right image
// ─────────────────────────────────────────────────────────

export const SlideCost = () => {
  // TODO: Implement 35/65 split layout
  // See prototype lines 387-456
  const stats = {
    costPerContact: { value: '€3.5', label: 'cost per contact', sub: 'across email, phone, and chat' },
    repeatContacts: { value: '2M', label: 'repeat contacts', sub: 'per year' },
    annualCost: { value: '€7M', label: 'annual cost', sub: 'CSAT: 3.1/5  ·  Resolution: 24hrs' },
  };
  return (
    <div style={slideBase}>
      <SectionLabel section="The challenge" subSection="Context & Background" />
      <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap }}>
        The cost of failed self-service
      </h2>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={typeStyle('paragraph1', STYLE.colors.gray500)}>
          [35/65 split: stat bento grid + image placeholder]
        </p>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SLIDE 3: Why customers contacted repeatedly
// Layout: 3-column cards with icons + image placeholders
// ─────────────────────────────────────────────────────────

export const SlideWhyRepeats = () => {
  const reasons = [
    { icon: icons.search, title: 'Generic FAQ', body: 'Same static page for every customer regardless of order, parcel status, or return stage' },
    { icon: icons.repeat, title: 'Channel hopping', body: 'Unresolved via email, try phone, then chat. Fragmented ticket histories increased workload' },
    { icon: icons.headphones, title: 'Agent dependency', body: 'Without personalized context, customers abandoned self-service and contacted support directly' },
  ];
  // TODO: Implement 3-col card layout
  // See prototype lines 458-483
  return (
    <div style={slideBase}>
      <SectionLabel section="The challenge" subSection="Context & Background" />
      <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap }}>
        Why customers contacted repeatedly
      </h2>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={typeStyle('paragraph1', STYLE.colors.gray500)}>[3-column reason cards]</p>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SLIDE 4: Top five reasons customers contacted support
// Layout: 5 horizontal card rows (icon + quote + description)
// ─────────────────────────────────────────────────────────

export const SlideTopFive = () => {
  const reasons = [
    { icon: icons.wallet, q: '"Where is my refund?"', desc: 'No visibility into refund amount, timeline, or payment method' },
    { icon: icons.truck, q: '"Where is my package?"', desc: 'Delivery status unavailable in self-service tied to their actual parcel' },
    { icon: icons.rotateCcw, q: '"How do I return this?"', desc: 'Return process lacked step-by-step contextual guidance' },
    { icon: icons.activity, q: '"What is the latest status?"', desc: 'Parcel tracking required contacting an agent for real-time updates' },
    { icon: icons.mapPinOff, q: '"Where do I drop this off?"', desc: 'Drop-off and pickup logistics buried in generic instructions' },
  ];
  // TODO: See prototype lines 485-510
  return (
    <div style={slideBase}>
      <SectionLabel section="The challenge" subSection="Problem Statement" />
      <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap }}>
        Top five reasons customers<br/>contacted support
      </h2>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={typeStyle('paragraph1', STYLE.colors.gray500)}>[5 horizontal card rows]</p>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SLIDE 5: Research methods
// Layout: 3-col × 2-row bento (stat cards + orange banner + scope card)
// See prototype lines 516-552
// ─────────────────────────────────────────────────────────

export const SlideResearch = () => {
  const stats = [
    { num: '12', label: 'User interviews', desc: 'Across multiple European markets, scenario-based methodology' },
    { num: '8', label: 'Stakeholder interviews', desc: 'Product, engineering, customer care operations leadership' },
    { num: '50K+', label: 'Support transcripts', desc: 'Analyzed for conversation patterns and failure points' },
  ];
  return (
    <div style={slideBase}>
      <SectionLabel section="Research & Discovery" />
      <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap }}>How we built understanding</h2>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={typeStyle('paragraph1', STYLE.colors.gray500)}>[Research bento grid]</p>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SLIDE 6: Customers scan, they don't read
// Layout: Power statement (title1) + 2 image placeholders
// See prototype lines 558-578
// ─────────────────────────────────────────────────────────

export const SlideInsight1 = () => (
  <div style={slideBase}>
    <SectionLabel section="Research & Discovery" subSection="Key Insights" />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 1400 }}>
      <h2 style={typeStyle('title1')}>Customers scan.<br/>They don't read.</h2>
      <p style={{ ...typeStyle('paragraph1', STYLE.colors.gray500), marginTop: 40, maxWidth: 900 }}>
        Detailed FAQ pages with comprehensive information caused information overload and abandonment. Customers wanted the one piece of information relevant to their specific situation, immediately visible.
      </p>
    </div>
    <div style={{ display: 'flex', gap: 32, marginTop: 'auto' }}>
      <ImagePlaceholder label="📷 FAQ page heatmap / scroll depth" style={{ flex: 1, height: 200, borderRadius: 12 }} />
      <ImagePlaceholder label="📷 Before: wall of text FAQ" style={{ flex: 1, height: 200, borderRadius: 12 }} />
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────
// SLIDE 7: Images are the primary identifier
// Layout: 2-col comparison (system default vs peachGradient)
// See prototype lines 584-621
// ─────────────────────────────────────────────────────────

export const SlideInsight2 = () => {
  // TODO: Implement 2-col comparison
  return (
    <div style={slideBase}>
      <SectionLabel section="Research & Discovery" subSection="Key Insights" />
      <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap }}>Images are the primary identifier</h2>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={typeStyle('paragraph1', STYLE.colors.gray500)}>[System default vs Research finding comparison]</p>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SLIDE 8: Context beats comprehensiveness
// Layout: Power statement + 2 insight cards at bottom
// See prototype lines 627-654
// ─────────────────────────────────────────────────────────

export const SlideInsight3 = () => {
  const insights = [
    { label: 'Repeat contacts signal system failure', desc: "2M repeat contacts weren't a customer behavior problem. They were a system design problem." },
    { label: 'Customers think in journeys', desc: 'Delivery, returns, and refunds are one continuous experience, not three help categories.' },
  ];
  return (
    <div style={slideBase}>
      <SectionLabel section="Research & Discovery" subSection="Key Insights" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2 style={typeStyle('title1')}>Context beats<br/>comprehensiveness.</h2>
        <p style={{ ...typeStyle('paragraph1', STYLE.colors.gray500), marginTop: 40, maxWidth: 1000 }}>
          The initial assumption was that customers needed more information. Research proved they needed the right information at the right moment.
        </p>
      </div>
      <div style={{ display: 'flex', gap: 24 }}>
        {insights.map((c, i) => (
          <Card key={i} style={{ flex: 1, padding: '28px 36px', borderRadius: 12 }}>
            <div style={typeStyle('header2')}>{c.label}</div>
            <div style={{ ...typeStyle('paragraph2', STYLE.colors.gray500), marginTop: 8 }}>{c.desc}</div>
          </Card>
        ))}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SLIDE 9: Four entry points
// Layout: 4-col cards (icon + tag + title + description)
// See prototype lines 660-691
// ─────────────────────────────────────────────────────────

export const SlideEntryPoints = () => {
  const entries = [
    { icon: icons.search, title: 'Google search', desc: 'Highest volume. Customers searched specific questions.', tag: 'Primary' },
    { icon: icons.globe, title: 'Website navigation', desc: 'Header/footer links to FAQ from the main site.', tag: 'Secondary' },
    { icon: icons.target, title: 'Account navigation', desc: 'From order history, direct path to relevant help.', tag: 'Secondary' },
    { icon: icons.rotateCcw, title: 'Returns page', desc: 'Direct access to help from within the returns flow.', tag: 'Contextual' },
  ];
  // TODO: See prototype lines 660-691
  return (
    <div style={slideBase}>
      <SectionLabel section="Research & Discovery" subSection="Entry Points" />
      <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap }}>Four paths to self-service</h2>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={typeStyle('paragraph1', STYLE.colors.gray500)}>[4-column entry point cards]</p>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SLIDE 10: Guiding principles
// Layout: 3 numbered cards (01/02/03) with evidence tags
// See prototype lines 697-729
// ─────────────────────────────────────────────────────────

export const SlidePrinciples = () => {
  const principles = [
    { num: '01', title: 'Progressive disclosure over information overload', body: 'Reveal only what matters at each step.', evidence: "Minimal cards over detailed pages, drill-down architecture" },
    { num: '02', title: 'Design for existing mental models', body: "Users prefer your product to work like ones they already know.", evidence: "Jakob's Law, FAQ-embedded over standalone help center" },
    { num: '03', title: 'Transparent system status builds trust', body: 'Only communicate what you can verify.', evidence: "Nielsen's Heuristic #1, confirmed over declared data" },
  ];
  // TODO: See prototype lines 697-729
  return (
    <div style={slideBase}>
      <SectionLabel section="Guiding Principles" />
      <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap }}>Three principles guided every decision</h2>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={typeStyle('paragraph1', STYLE.colors.gray500)}>[3 numbered principle cards]</p>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SLIDE 11: Design decisions
// Layout: 3 rows — Considered → Chosen → Reason
// See prototype lines 736-774
// ─────────────────────────────────────────────────────────

export const SlideDecisions = () => {
  const decisions = [
    { rejected: 'Standalone help center', chosen: 'Embedded in existing FAQ', reason: 'Customers already had 4 established paths.' },
    { rejected: 'Comprehensive information upfront', chosen: 'Progressive disclosure', reason: 'Testing showed detailed first-screens created overload.' },
    { rejected: 'Order IDs as identifiers', chosen: 'Product images', reason: "Customers couldn't recall system codes." },
  ];
  // TODO: See prototype lines 736-774
  return (
    <div style={slideBase}>
      <SectionLabel section="Design Process" subSection="Ideation & Exploration" />
      <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap }}>Three decisions shaped the direction</h2>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={typeStyle('paragraph1', STYLE.colors.gray500)}>[3-row decision comparison]</p>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SLIDE 12: Usability testing
// Layout: 1:2 split — big stat (8/12) + findings list + image
// See prototype lines 780-816
// ─────────────────────────────────────────────────────────

export const SlideTesting = () => {
  const findings = [
    { title: 'Unclear escalation entry points', fix: 'Increased escalation trigger visibility', status: 'Fixed' },
    { title: 'Confusion between return stages', fix: 'Refined return status terminology', status: 'Fixed' },
    { title: 'Card layout differentiation', fix: 'Returns: vertical. Refunds: horizontal. Emerged from testing.', status: 'Insight' },
  ];
  // TODO: See prototype lines 780-816
  return (
    <div style={slideBase}>
      <SectionLabel section="Design Process" subSection="Prototyping & Iteration" />
      <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap }}>Testing and iterating</h2>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={typeStyle('paragraph1', STYLE.colors.gray500)}>[8/12 stat + findings + image]</p>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SLIDE 13: Stakeholder navigation
// Layout: 2-col — FAQ pushback + Carrier API (nested dark cards)
// See prototype lines 822-871
// ─────────────────────────────────────────────────────────

export const SlideStakeholders = () => {
  // TODO: See prototype lines 822-871
  return (
    <div style={slideBase}>
      <SectionLabel section="Design Process" subSection="Stakeholder Navigation" />
      <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap }}>Navigating organizational complexity</h2>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={typeStyle('paragraph1', STYLE.colors.gray500)}>[2-col stakeholder cards]</p>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SLIDE 14: System architecture
// Layout: 5-step flow + image placeholder
// See prototype lines 877-919
// ─────────────────────────────────────────────────────────

export const SlideArchitecture = () => {
  const steps = [
    { step: 'Entry', desc: '4 paths adapt display based on arrival context' },
    { step: 'Identify', desc: 'Product images for instant visual recognition' },
    { step: 'Context', desc: 'Real-time data from carrier APIs, warehouse, payments' },
    { step: 'Resolve', desc: 'Tailored flow per journey: delivery, returns, refund' },
    { step: 'Escalate', desc: 'Full context attached, timeline confirmed' },
  ];
  // TODO: See prototype lines 877-919
  return (
    <div style={slideBase}>
      <SectionLabel section="Solution" subSection="System Architecture" />
      <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap }}>How the system works</h2>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={typeStyle('paragraph1', STYLE.colors.gray500)}>[5-step architecture flow]</p>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SLIDE 15: Entry-point-adaptive display
// Layout: 2-col — stacked text cards + image
// See prototype lines 925-952
// ─────────────────────────────────────────────────────────

export const SlideIdentification = () => {
  // TODO: See prototype lines 925-952
  return (
    <div style={slideBase}>
      <SectionLabel section="Solution" subSection="Core Experience" />
      <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap }}>Entry-point-adaptive display</h2>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={typeStyle('paragraph1', STYLE.colors.gray500)}>[2-col adaptive display]</p>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SLIDE 16: Resolution paths
// Layout: 3-col BentoCards (Delivery/Returns/Refund) with steps
// See prototype lines 958-1010
// ─────────────────────────────────────────────────────────

export const SlideFlows = () => {
  const flows = [
    { icon: icons.truck, title: 'Delivery', variant: 'gradientDark', items: ['Purchase date & promised delivery', 'Current shipping status', 'Delivery details', 'Escalate if delayed/missing'], note: 'Progressive: status at a glance, drill down for details' },
    { icon: icons.rotateCcw, title: 'Returns', variant: 'orangeGradient', items: ['Drop-off confirmation', 'Courier pickup', 'Warehouse arrival', 'Issue resolution'], note: 'Staged vertical flow. Confirmed data only' },
    { icon: icons.wallet, title: 'Refund', variant: 'gradientDark', items: ['Refund amount', 'Expected timeline', 'Payment method', 'Flag discrepancies'], note: 'Horizontal cards. Static info with escalation triggers' },
  ];
  // TODO: See prototype lines 958-1010
  return (
    <div style={slideBase}>
      <SectionLabel section="Solution" subSection="Resolution Paths" />
      <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap }}>Tailored flow per journey type</h2>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={typeStyle('paragraph1', STYLE.colors.gray500)}>[3-col resolution path cards]</p>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SLIDE 17: Escalation & edge cases
// Layout: 2-col — escalation + edge case stack
// See prototype lines 1016-1057
// ─────────────────────────────────────────────────────────

export const SlideEscalation = () => {
  // TODO: See prototype lines 1016-1057
  return (
    <div style={slideBase}>
      <SectionLabel section="Solution" subSection="Escalation & Edge Cases" />
      <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap }}>When self-service isn't enough</h2>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={typeStyle('paragraph1', STYLE.colors.gray500)}>[Escalation + edge cases]</p>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SLIDE 18: Before / After
// Layout: 3-col — before image → arrow → after image
// See prototype lines 1063-1092
// ─────────────────────────────────────────────────────────

export const SlideBeforeAfter = () => {
  // TODO: See prototype lines 1063-1092
  return (
    <div style={slideBase}>
      <SectionLabel section="Solution" subSection="Transformation" />
      <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap }}>From generic to contextual</h2>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={typeStyle('paragraph1', STYLE.colors.gray500)}>[Before → After comparison]</p>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SLIDE 19: Customer impact
// Layout: 2×2 grid (42%, 33%, 28%, 67%) — first = orangeGradient
// See prototype lines 1098-1124
// ─────────────────────────────────────────────────────────

export const SlideResultsCustomer = () => {
  const metrics = [
    { num: '42%', label: 'reduction in yearly inquiries', desc: 'Across delivery and returns categories' },
    { num: '33%', label: 'fewer returns inquiries', desc: 'Exceeded 25% target set at kickoff' },
    { num: '28%', label: 'CSAT improvement', desc: '3.1 → 4.2 out of 5' },
    { num: '67%', label: 'faster resolution', desc: '24 hours → under 3 hours' },
  ];
  // TODO: See prototype lines 1098-1124
  return (
    <div style={slideBase}>
      <SectionLabel section="Results & Impact" />
      <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap }}>Customer impact</h2>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={typeStyle('paragraph1', STYLE.colors.gray500)}>[2×2 metrics grid]</p>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SLIDE 20: Business results
// Layout: 2:1:1 grid — €3.2M (peachGradient) + 52% + 8% + context bar
// See prototype lines 1130-1165
// ─────────────────────────────────────────────────────────

export const SlideResultsBusiness = () => {
  // TODO: See prototype lines 1130-1165
  return (
    <div style={slideBase}>
      <SectionLabel section="Results & Impact" />
      <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap }}>Business results</h2>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={typeStyle('paragraph1', STYLE.colors.gray500)}>[€3.2M + 52% + 8% grid]</p>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SLIDE 21: Transformation in numbers
// Layout: 4 rows — metric + before → after + change
// See prototype lines 1171-1197
// ─────────────────────────────────────────────────────────

export const SlideMetricsComparison = () => {
  const rows = [
    { metric: 'Resolution time', before: '24 hours', after: 'Under 3 hours', change: '67% faster' },
    { metric: 'Customer satisfaction', before: '3.1 / 5', after: '4.2 / 5', change: '28% improvement' },
    { metric: 'Repeat contacts', before: '2M per year', after: '1.1M per year', change: '45% reduction' },
    { metric: 'Annual cost', before: '€7M', after: '€3.8M', change: '€3.2M saved' },
  ];
  // TODO: See prototype lines 1171-1197
  return (
    <div style={slideBase}>
      <SectionLabel section="Results & Impact" />
      <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap }}>The transformation in numbers</h2>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={typeStyle('paragraph1', STYLE.colors.gray500)}>[Before → After metrics comparison]</p>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SLIDE 22: Key lesson
// Layout: Power statement — Comprehensive → Contextual
// See prototype lines 1203-1220
// ─────────────────────────────────────────────────────────

export const SlideKeyLesson = () => (
  <div style={{ ...slideBase, justifyContent: 'center' }}>
    <div style={typeStyle('pageCaption', STYLE.colors.gray700)}>Reflection</div>
    <div style={{ marginTop: 48 }}>
      <h2 style={{ ...typeStyle('title1'), maxWidth: 1400 }}>
        <span style={{ color: STYLE.colors.gray600 }}>Comprehensive</span> →{' '}
        <span style={{ color: STYLE.colors.accent }}>Contextual</span>
      </h2>
      <p style={{ ...typeStyle('paragraph1', STYLE.colors.gray500), marginTop: 48, maxWidth: 1100 }}>
        The most important shift was moving from "comprehensive" to "contextual." Research proved customers needed the right information at the right moment.
      </p>
      <p style={{ ...typeStyle('paragraph1', STYLE.colors.gray500), marginTop: 24, maxWidth: 1100 }}>
        Comprehensive help pages gave customers everything. Contextual cards gave them exactly what they needed.
      </p>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────
// SLIDE 23: Reflection & closing
// Layout: 3 numbered cards + contact footer
// See prototype lines 1226-1265
// ─────────────────────────────────────────────────────────

export const SlideClosing = () => {
  const takeaways = [
    { title: 'Push for technical discovery earlier', body: 'The carrier API investigation happened mid-project.' },
    { title: 'Invest in content strategy from day one', body: 'Content design became critical for card labels and messaging.' },
    { title: 'Establish unified architecture first', body: 'Mapping constraints upfront would have reduced rework.' },
  ];
  // TODO: See prototype lines 1226-1265
  return (
    <div style={slideBase}>
      <SectionLabel section="Reflection" />
      <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap }}>What I would do differently</h2>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={typeStyle('paragraph1', STYLE.colors.gray500)}>[3 numbered reflection cards]</p>
      </div>
      <div style={{ marginTop: 'auto', paddingTop: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <span style={typeStyle('pageFooter', STYLE.colors.accent)}>Otobong Okoko</span>
          <div style={{ ...typeStyle('paragraph2', STYLE.colors.gray600), marginTop: 4 }}>
            Senior Product Designer &nbsp;·&nbsp; Designer Who Codes
          </div>
        </div>
        <div style={{ ...typeStyle('paragraph2', STYLE.colors.gray600), textAlign: 'right' }}>otobong.com</div>
      </div>
    </div>
  );
};
