'use client';

import React from 'react';
import { STYLE, typeStyle, slidePadding } from '../styles/tokens';
import { Card, BentoCard, IconBox, ImagePlaceholder } from '../primitives';
import { SectionLabel } from '../ui/SectionLabel';
import { icons } from '../styles/icons';

const slideBase: React.CSSProperties = {
  ...slidePadding,
  height: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
};

// ─────────────────────────────────────────────────────────
// SLIDE 0: Hero
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
// ─────────────────────────────────────────────────────────

export const SlideAbout = () => {
  return (
    <div style={slideBase}>
      <SectionLabel section="About the project" />
      <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap }}>
        Redesigning self-service for<br/>Europe&apos;s largest fashion platform
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
// ─────────────────────────────────────────────────────────

export const SlideCost = () => {
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
// ─────────────────────────────────────────────────────────

export const SlideWhyRepeats = () => {
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
// SLIDE 4: Top five reasons
// ─────────────────────────────────────────────────────────

export const SlideTopFive = () => {
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
// ─────────────────────────────────────────────────────────

export const SlideResearch = () => {
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
// ─────────────────────────────────────────────────────────

export const SlideInsight1 = () => (
  <div style={slideBase}>
    <SectionLabel section="Research & Discovery" subSection="Key Insights" />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 1400 }}>
      <h2 style={typeStyle('title1')}>Customers scan.<br/>They don&apos;t read.</h2>
      <p style={{ ...typeStyle('paragraph1', STYLE.colors.gray500), marginTop: 40, maxWidth: 900 }}>
        Detailed FAQ pages with comprehensive information caused information overload and abandonment. Customers wanted the one piece of information relevant to their specific situation, immediately visible.
      </p>
    </div>
    <div style={{ display: 'flex', gap: 32, marginTop: 'auto' }}>
      <ImagePlaceholder label="FAQ page heatmap / scroll depth" style={{ flex: 1, height: 200, borderRadius: 12 }} />
      <ImagePlaceholder label="Before: wall of text FAQ" style={{ flex: 1, height: 200, borderRadius: 12 }} />
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────
// SLIDE 7: Images are the primary identifier
// ─────────────────────────────────────────────────────────

export const SlideInsight2 = () => {
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
// ─────────────────────────────────────────────────────────

export const SlideEntryPoints = () => {
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
// ─────────────────────────────────────────────────────────

export const SlidePrinciples = () => {
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
// ─────────────────────────────────────────────────────────

export const SlideDecisions = () => {
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
// ─────────────────────────────────────────────────────────

export const SlideTesting = () => {
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
// ─────────────────────────────────────────────────────────

export const SlideStakeholders = () => {
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
// ─────────────────────────────────────────────────────────

export const SlideArchitecture = () => {
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
// ─────────────────────────────────────────────────────────

export const SlideIdentification = () => {
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
// ─────────────────────────────────────────────────────────

export const SlideFlows = () => {
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
// ─────────────────────────────────────────────────────────

export const SlideEscalation = () => {
  return (
    <div style={slideBase}>
      <SectionLabel section="Solution" subSection="Escalation & Edge Cases" />
      <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap }}>When self-service isn&apos;t enough</h2>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={typeStyle('paragraph1', STYLE.colors.gray500)}>[Escalation + edge cases]</p>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SLIDE 18: Before / After
// ─────────────────────────────────────────────────────────

export const SlideBeforeAfter = () => {
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
// ─────────────────────────────────────────────────────────

export const SlideResultsCustomer = () => {
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
// ─────────────────────────────────────────────────────────

export const SlideResultsBusiness = () => {
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
// ─────────────────────────────────────────────────────────

export const SlideMetricsComparison = () => {
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
        The most important shift was moving from &quot;comprehensive&quot; to &quot;contextual.&quot; Research proved customers needed the right information at the right moment.
      </p>
      <p style={{ ...typeStyle('paragraph1', STYLE.colors.gray500), marginTop: 24, maxWidth: 1100 }}>
        Comprehensive help pages gave customers everything. Contextual cards gave them exactly what they needed.
      </p>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────
// SLIDE 23: Reflection & closing
// ─────────────────────────────────────────────────────────

export const SlideClosing = () => {
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
