'use client';

import React from 'react';
import ReactDOM from 'react-dom';
import { STYLE, typeStyle, slidePadding } from '../styles/tokens';
import { Card, BentoCard, IconBox, ImagePlaceholder } from '../primitives';
import { SectionLabel } from '../ui/SectionLabel';
import { ImageModal } from '../ui/ImageModal';
import { icons, navIcons } from '../styles/icons';

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
  <div style={{ ...slideBase, position: 'relative', overflow: 'hidden' }}>
    <div style={typeStyle('pageCaption', STYLE.colors.gray600)}>Case study</div>
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', marginTop: 40 }}>
      <h1 style={typeStyle('title1')}>Transforming<br/>Customer Support</h1>
      <p style={{ ...typeStyle('title2', STYLE.colors.gray500), marginTop: 24 }}>
        Context-aware self-help platform at Zalando
      </p>
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', marginTop: 56,
        gap: 16, width: 'fit-content',
      }}>
        {[
          { number: '42%', text: 'drop in recontact cases' },
          { number: '€3.2M', text: 'operational cost saved' },
          { number: '67%', text: 'faster resolution' },
          { number: '28%', text: 'increase in CSAT' },
        ].map((item, i) => (
          <Card key={i} style={{
            padding: '24px 40px',
            borderRadius: STYLE.radius.bento,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}>
            <div style={{ ...typeStyle('header3'), fontSize: '72px' }}>{item.number}</div>
            <div style={{ fontSize: '18px', fontWeight: 300, color: STYLE.colors.gray500, fontFamily: STYLE.fonts.body }}>{item.text}</div>
          </Card>
        ))}
      </div>
    </div>
    
    {/* Phone mockup image - absolutely positioned */}
    <img
      src="/images/presentation-assets/mobile-returns.png?v=2"
      alt="Zalando self-help returns interface on mobile"
      style={{
        position: 'absolute',
        right: 180,
        top: '50%',
        transform: 'translateY(-50%)',
        height: 943,
        width: 'auto',
        display: 'block',
        pointerEvents: 'none',
      }}
    />
    
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
      <div style={typeStyle('pageCaption', STYLE.colors.gray600)}>About the project</div>
      <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap }}>
        Redesigning self-service for<br/>Europe&apos;s largest fashion platform
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr 0.6fr',
        gap: 16,
        flex: 1,
        minHeight: 0,
        marginTop: STYLE.spacing.titleGap,
      }}>
        {/* Cell 1: Zalando Logo + Company info [R1-2, C1] */}
        <BentoCard variant="gradientWhite" style={{
          gridColumn: '1',
          gridRow: '1 / 3',
          padding: 48,
          borderRadius: STYLE.radius.bento,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <img
            src="/images/presentation-assets/zalando-logo.svg"
            alt="Zalando"
            style={{ width: 280, height: 'auto' }}
          />
          <div>
            <p style={{ ...typeStyle('paragraph2', '#444444'), margin: 0, marginBottom: 16 }}>
              Europe&apos;s leading online fashion and lifestyle platform
            </p>
            <div style={{ display: 'flex', gap: 24 }}>
              <div>
                <div style={{ ...typeStyle('header2', '#111111'), fontSize: 36, margin: 0 }}>50M+</div>
                <div style={{ ...typeStyle('paragraph3', '#666666'), fontSize: 16 }}>active customers</div>
              </div>
              <div>
                <div style={{ ...typeStyle('header2', '#111111'), fontSize: 36, margin: 0 }}>25</div>
                <div style={{ ...typeStyle('paragraph3', '#666666'), fontSize: 16 }}>markets</div>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Cell 2: Platform [R1, C2] */}
        <Card style={{ padding: 32, borderRadius: STYLE.radius.bento, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <span style={typeStyle('tag', STYLE.colors.gray600)} aria-label="Category: Platform">PLATFORM</span>
          <div>
            <h4 style={{ ...typeStyle('header2'), margin: 0 }}>Web-based FAQ</h4>
            <p style={{ ...typeStyle('paragraph3', STYLE.colors.gray500), margin: '6px 0 0 0' }}>
              Embedded within existing help pages
            </p>
          </div>
        </Card>

        {/* Cell 3: Focus [R1, C3] */}
        <Card style={{ padding: 32, borderRadius: STYLE.radius.bento, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <span style={typeStyle('tag', STYLE.colors.gray600)} aria-label="Category: Focus">FOCUS</span>
          <div>
            <h4 style={{ ...typeStyle('header2'), margin: 0 }}>Delivery, returns, refunds</h4>
            <p style={{ ...typeStyle('paragraph3', STYLE.colors.gray500), margin: '6px 0 0 0' }}>
              Highest-volume contact categories
            </p>
          </div>
        </Card>

        {/* Cell 4: Duration [R2, C2] */}
        <BentoCard variant="orangeGradient" style={{ padding: 32, borderRadius: STYLE.radius.bento, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <span style={{ ...typeStyle('tag', '#1A1A1A'), opacity: 0.7 }} aria-label="Category: Duration">DURATION</span>
          <div>
            <h4 style={{ ...typeStyle('header2', '#111111'), fontSize: 48, margin: 0 }}>11 months</h4>
            <p style={{ ...typeStyle('paragraph3', '#2A1A08'), margin: '6px 0 0 0' }}>
              100% dedicated, sole designer
            </p>
          </div>
        </BentoCard>

        {/* Cell 5: Role [R2, C3] */}
        <Card style={{ padding: 32, borderRadius: STYLE.radius.bento, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <span style={typeStyle('tag', STYLE.colors.gray600)} aria-label="Category: Role">ROLE</span>
          <div>
            <h4 style={{ ...typeStyle('header2'), margin: 0 }}>Lead Product Designer</h4>
            <p style={{ ...typeStyle('paragraph3', STYLE.colors.gray500), margin: '6px 0 0 0' }}>
              End-to-end ownership
            </p>
          </div>
        </Card>

        {/* Cell 6: The Project [R3, C1-3] */}
        <Card style={{
          gridColumn: '1 / 4',
          padding: '28px 40px',
          borderRadius: STYLE.radius.bento,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 40,
        }}>
          <h3 style={{ ...typeStyle('header2', STYLE.colors.accent), textTransform: 'uppercase', flexShrink: 0, margin: 0 }}>
            THE PROJECT
          </h3>
          <div style={{ width: 1, height: 40, background: STYLE.colors.border, flexShrink: 0 }} aria-hidden="true" />
          <p style={{ ...typeStyle('paragraph2', STYLE.colors.gray400), margin: 0 }}>
            A strategic initiative within Customer Care to redesign how customers self-serve for delivery, returns, and refund issues. Sponsored by the Director of Customer Care with VP-level visibility.
          </p>
        </Card>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SLIDE 2: The cost of failed self-service
// ─────────────────────────────────────────────────────────

export const SlideCost = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div style={slideBase}>
      <SectionLabel section="The challenge" subSection="Context & Background" />
      <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap }}>
        The cost of failed self-service
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '25fr 75fr',
        gap: 24,
        flex: 1,
        minHeight: 0,
        marginTop: STYLE.spacing.titleGap,
      }}>
        {/* Left column: Stats stacked vertically */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}>
          {/* Top stat card */}
          <Card style={{
            padding: 32,
            borderRadius: STYLE.radius.bento,
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '120px', fontWeight: 700, fontFamily: STYLE.fonts.heading, color: STYLE.colors.white, lineHeight: 0.85 }}>€3.5</div>
            <div style={{ fontSize: '24px', fontWeight: 300, color: STYLE.colors.gray400, fontFamily: STYLE.fonts.body, lineHeight: 1.5, marginTop: 12 }}>
              cost per contact across email, phone, and chat
            </div>
          </Card>

          {/* Middle stat card */}
          <Card style={{
            padding: 32,
            borderRadius: STYLE.radius.bento,
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '120px', fontWeight: 700, fontFamily: STYLE.fonts.heading, color: STYLE.colors.white, lineHeight: 0.85 }}>2M</div>
            <div style={{ fontSize: '24px', fontWeight: 300, color: STYLE.colors.gray400, fontFamily: STYLE.fonts.body, lineHeight: 1.5, marginTop: 12 }}>
              repeat contacts per year
            </div>
          </Card>

          {/* Bottom stat card */}
          <Card style={{
            padding: 32,
            borderRadius: STYLE.radius.bento,
            flex: 1,
            background: 'linear-gradient(90deg, ' + STYLE.colors.surface + ' 0%, #1E1E1E 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '120px', fontWeight: 700, fontFamily: STYLE.fonts.heading, color: STYLE.colors.white, lineHeight: 0.85 }}>€7M</div>
            <div style={{ fontSize: '24px', fontWeight: 300, color: STYLE.colors.gray400, fontFamily: STYLE.fonts.body, lineHeight: 1.5, marginTop: 12 }}>
              annual operations cost
            </div>
          </Card>

          {/* Footer note */}
          <div style={{ fontSize: '16px', fontWeight: 300, color: STYLE.colors.gray700, fontFamily: STYLE.fonts.body, textAlign: 'center', marginTop: 8 }}>
            CSAT: 3.1/5 · Resolution: 24hrs
          </div>
        </div>

        {/* Right column: Image placeholder */}
        <div style={{ 
          borderRadius: STYLE.radius.bento, 
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          background: '#D8D8D8',
          position: 'relative',
        }}>
          {/* Expand icon */}
          <button
            onClick={() => setIsModalOpen(true)}
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
              width: 40,
              height: 40,
              borderRadius: 8,
              background: 'rgba(0, 0, 0, 0.6)',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.6)'}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          </button>
          <img
            src="/images/presentation-assets/Dashboard - Returns and Refunds.png"
            alt="Zalando self-service returns and refunds desktop interface"
            style={{
              width: '130%',
              height: 'auto',
              display: 'block',
              transform: 'translateX(15%) translateY(38%)',
            }}
          />
        </div>
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        src="/images/presentation-assets/Dashboard - Returns and Refunds.png"
        alt="Zalando self-service returns and refunds desktop interface"
      />
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SLIDE 3: Why customers contacted repeatedly
// ─────────────────────────────────────────────────────────

export const SlideWhyRepeats = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const reasons = [
    {
      icon: icons.search,
      title: 'Generic FAQ',
      body: 'Same static page for every customer regardless of order, parcel status, or return stage',
    },
    {
      icon: icons.repeat,
      title: 'Channel hopping',
      body: 'Unresolved via email, try phone, then chat. Fragmented ticket histories increased workload',
    },
    {
      icon: icons.headphones,
      title: 'Agent dependency',
      body: 'Without personalized context, customers abandoned self-service and contacted support directly',
    },
  ];

  return (
    <div style={slideBase}>
      <SectionLabel section="The challenge" subSection="Context & Background" />
      <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap, marginBottom: 24 }}>
        Why customers contacted repeatedly
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '35fr 65fr',
        gap: 24,
        flex: 1,
        minHeight: 0,
      }}>
        {/* Left: Stacked cards */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}>
          {reasons.map((r, i) => (
            <Card key={i} style={{
              padding: 28,
              borderRadius: STYLE.radius.card,
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              flex: 1,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <IconBox icon={r.icon} size={32} />
                <div style={typeStyle('header2')}>{r.title}</div>
              </div>
              <div style={typeStyle('paragraph2', STYLE.colors.gray400)}>{r.body}</div>
            </Card>
          ))}
        </div>
        {/* Right: Image */}
        <div style={{
          borderRadius: STYLE.radius.bento,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          background: '#D8D8D8',
          position: 'relative',
        }}>
          {/* Expand icon */}
          <button
            onClick={() => setIsModalOpen(true)}
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
              width: 40,
              height: 40,
              borderRadius: 8,
              background: 'rgba(0, 0, 0, 0.6)',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.6)'}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          </button>
          <img
            src="/images/presentation-assets/FAQ - Orders - Dark Mode.png"
            alt="Zalando FAQ orders interface showing generic self-service"
            style={{
              width: '130%',
              height: 'auto',
              display: 'block',
              transform: 'translateX(15%) translateY(35%)',
            }}
          />
        </div>
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        src="/images/presentation-assets/FAQ - Orders - Dark Mode.png"
        alt="Zalando FAQ orders interface showing generic self-service"
      />
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SLIDE 4: Top five reasons
// ─────────────────────────────────────────────────────────

export const SlideTopFive = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const questions = [
    { icon: icons.wallet, q: '"Where is my refund?"', desc: 'No visibility into refund amount, timeline, or payment method' },
    { icon: icons.truck, q: '"Where is my package?"', desc: 'Delivery status unavailable in self-service tied to their actual parcel' },
    { icon: icons.rotateCcw, q: '"How do I return this?"', desc: 'Return process lacked step-by-step contextual guidance' },
    { icon: icons.mapPinOff, q: '"Where do I drop this off?"', desc: 'Drop-off and pickup logistics buried in generic instructions' },
  ];

  return (
    <div style={slideBase}>
      <SectionLabel section="The challenge" subSection="Problem Statement" />
      <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap }}>
        Top five reasons customers contacted support
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '35fr 65fr',
        gap: 32,
        flex: 1,
        minHeight: 0,
        marginTop: STYLE.spacing.titleGap,
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          justifyContent: 'center',
        }}>
          {questions.map((item, i) => (
            <Card key={i} style={{
              padding: '22px 36px',
              borderRadius: STYLE.radius.card,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <IconBox icon={item.icon} size={32} />
                <div style={typeStyle('header2')}>{item.q}</div>
              </div>
              <div style={typeStyle('paragraph2', STYLE.colors.gray400)}>{item.desc}</div>
            </Card>
          ))}
        </div>
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: STYLE.radius.bento,
          background: STYLE.colors.surface,
          border: `1px solid ${STYLE.colors.border}`,
          height: '100%',
        }}>
          <button
            onClick={() => setIsModalOpen(true)}
            aria-label="Expand image"
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
              zIndex: 10,
              width: 36,
              height: 36,
              borderRadius: 8,
              background: 'rgba(0, 0, 0, 0.6)',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.6)'}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          </button>
          <img
            src="/images/presentation-assets/Contextual Self Help Home.png"
            alt="Zalando contextual self-help home interface"
            style={{
              width: '130%',
              height: 'auto',
              display: 'block',
              transform: 'translateX(15%) translateY(8%)',
            }}
          />
        </div>
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        src="/images/presentation-assets/Contextual Self Help Home.png"
        alt="Zalando contextual self-help home interface"
      />
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
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: '1fr 1fr',
        gap: 24,
        flex: 1,
        minHeight: 0,
        marginTop: STYLE.spacing.titleGap,
      }}>
        <Card style={{ padding: 36, borderRadius: STYLE.radius.bento, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div style={typeStyle('header3')}>12</div>
          <div style={{ ...typeStyle('statLabel', STYLE.colors.gray400), marginTop: 8 }}>User interviews</div>
          <div style={{ ...typeStyle('paragraph3', STYLE.colors.gray600), marginTop: 4 }}>Across multiple European markets</div>
        </Card>
        <Card style={{ padding: 36, borderRadius: STYLE.radius.bento, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div style={typeStyle('header3')}>8</div>
          <div style={{ ...typeStyle('statLabel', STYLE.colors.gray400), marginTop: 8 }}>Stakeholder interviews</div>
          <div style={{ ...typeStyle('paragraph3', STYLE.colors.gray600), marginTop: 4 }}>Product, engineering, operations</div>
        </Card>
        <Card style={{ padding: 36, borderRadius: STYLE.radius.bento, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div style={typeStyle('header3')}>50K+</div>
          <div style={{ ...typeStyle('statLabel', STYLE.colors.gray400), marginTop: 8 }}>Support transcripts</div>
          <div style={{ ...typeStyle('paragraph3', STYLE.colors.gray600), marginTop: 4 }}>Analyzed for patterns and issues</div>
        </Card>

        <BentoCard variant="orangeGradient" style={{
          gridColumn: '1 / 4',
          padding: 44,
          borderRadius: STYLE.radius.bento,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
          <div style={{ ...typeStyle('header2'), marginBottom: 16 }}>First-hand testing</div>
          <div style={typeStyle('paragraph1')}>
            Extensive usability studies, A/B testing throughout the rollout, and direct observation of customer support interactions
          </div>
        </BentoCard>
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
    <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap }}>Customers scan. They don&apos;t read.</h2>
    <p style={{ ...typeStyle('paragraph1', STYLE.colors.gray400), marginTop: 16, maxWidth: 1000 }}>
      Detailed FAQ pages with comprehensive information caused information overload and abandonment. Customers wanted the one piece of information relevant to their specific situation, immediately visible.
    </p>
    <div style={{ display: 'flex', gap: 24, flex: 1, minHeight: 0, marginTop: STYLE.spacing.titleGap }}>
      <ImagePlaceholder label="FAQ page heatmap / scroll depth" style={{ flex: 1, borderRadius: STYLE.radius.bento }} />
      <ImagePlaceholder label="Before: wall of text FAQ" style={{ flex: 1, borderRadius: STYLE.radius.bento }} />
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────
// SLIDE 7: Images are the primary identifier
// ─────────────────────────────────────────────────────────

export const SlideInsight2 = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Custom dual-image modal
  const DualImageModal = () => {
    if (!isModalOpen || typeof document === 'undefined') return null;

    return ReactDOM.createPortal(
      <div
        onClick={() => setIsModalOpen(false)}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 9999,
        }}
      >
        {/* Top control bar */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 24px',
            background: 'rgba(0, 0, 0, 0.5)',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              color: 'white',
              fontFamily: STYLE.fonts.body,
              fontSize: 16,
              fontWeight: 500,
              padding: '8px 16px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 20,
            }}
          >
            Order Card Comparison
          </div>

          <button
            onClick={() => setIsModalOpen(false)}
            style={{
              width: 40,
              height: 40,
              borderRadius: 8,
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Images container */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            gap: 40,
            padding: 40,
          }}
        >
          {/* System default */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '45%' }}>
            <div
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontFamily: STYLE.fonts.body,
                fontSize: 14,
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: 1,
              }}
            >
              Delivery Card Version 1
            </div>
            <img
              src="/images/presentation-assets/Delivery Card Version 1.png?v=3"
              alt="Order card showing order ID and reference number"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: 12,
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              }}
            />
          </div>

          {/* Research finding */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '45%' }}>
            <div
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontFamily: STYLE.fonts.body,
                fontSize: 14,
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: 1,
              }}
            >
              Delivery Card - Current
            </div>
            <img
              src="/images/presentation-assets/Delivery Card - Current.png?v=3"
              alt="Order card with product images as primary identifier"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: 12,
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              }}
            />
          </div>
        </div>
      </div>,
      document.body
    );
  };

  return (
    <div style={slideBase}>
      <SectionLabel section="Research & Discovery" subSection="Key Insights" />
      <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap }}>Images are the primary identifier</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 24,
        flex: 1,
        minHeight: 0,
        marginTop: STYLE.spacing.titleGap,
      }}>
        {/* Left: System default */}
        <Card style={{
          padding: 44,
          borderRadius: STYLE.radius.bento,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}>
          <div style={typeStyle('tag', STYLE.colors.gray600)}>SYSTEM DEFAULT</div>
          <div style={typeStyle('header2')}>Order IDs & reference numbers</div>
          <div style={{ ...typeStyle('paragraph2', STYLE.colors.gray400), fontSize: 24, lineHeight: 1.5 }}>
            &quot;1019234205367&quot; means nothing to a customer with 5 active orders. They can&apos;t recall system-generated codes.
          </div>
          <div style={{ flex: 1, borderRadius: 12, background: '#3a3a3a', border: '2px solid #3a3a3a', overflow: 'hidden', position: 'relative', minHeight: 0 }}>
            <button
              onClick={() => setIsModalOpen(true)}
              style={{
                position: 'absolute',
                top: 12,
                right: 12,
                width: 40,
                height: 40,
                borderRadius: 8,
                background: 'rgba(0, 0, 0, 0.6)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.6)'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 3 21 3 21 9"></polyline>
                <polyline points="9 21 3 21 3 15"></polyline>
                <line x1="21" y1="3" x2="14" y2="10"></line>
                <line x1="3" y1="21" x2="10" y2="14"></line>
              </svg>
            </button>
            <img
              src="/images/presentation-assets/Delivery Card Version 1.png?v=3"
              alt="Order card showing order ID and reference number"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-40%, -30%)',
                width: '120%',
                height: 'auto',
                display: 'block',
              }}
            />
          </div>
        </Card>

        {/* Right: Research finding */}
        <Card style={{
          padding: 44,
          borderRadius: STYLE.radius.bento,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          border: '1px solid rgba(255,255,255,0.15)',
        }}>
          <div style={typeStyle('tag', STYLE.colors.gray600)}>RESEARCH FINDING</div>
          <div style={typeStyle('header2')}>Product images</div>
          <div style={{ ...typeStyle('paragraph2', STYLE.colors.gray400), fontSize: 24, lineHeight: 1.5 }}>
            Customers think in &quot;the blue jacket&quot; or &quot;the running shoes.&quot; Product photos became the primary identifier.
          </div>
          <div style={{ flex: 1, borderRadius: 12, background: '#3a3a3a', border: '2px solid #3a3a3a', overflow: 'hidden', position: 'relative', minHeight: 0 }}>
            <button
              onClick={() => setIsModalOpen(true)}
              style={{
                position: 'absolute',
                top: 12,
                right: 12,
                width: 40,
                height: 40,
                borderRadius: 8,
                background: 'rgba(0, 0, 0, 0.6)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.6)'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 3 21 3 21 9"></polyline>
                <polyline points="9 21 3 21 3 15"></polyline>
                <line x1="21" y1="3" x2="14" y2="10"></line>
                <line x1="3" y1="21" x2="10" y2="14"></line>
              </svg>
            </button>
            <img
              src="/images/presentation-assets/Delivery Card - Current.png?v=3"
              alt="Order card with product images as primary identifier"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-40%, -26%)',
                width: '120%',
                height: 'auto',
                display: 'block',
              }}
            />
          </div>
        </Card>
      </div>

      <DualImageModal />
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
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start', marginTop: STYLE.spacing.sectionGap, paddingTop: 80 }}>
        {/* Left: Text content */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
          <h2 style={typeStyle('title1')}>Context beats<br/>comprehensiveness.</h2>
          <p style={{ ...typeStyle('paragraph1', STYLE.colors.gray500), marginTop: 40 }}>
            The initial assumption was that customers needed more information. Research proved they needed the right information at the right moment.
          </p>
        </div>

        {/* Right: Image */}
        <div style={{
          height: '80%',
          borderRadius: STYLE.radius.bento,
          background: '#F7A35C',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <img
            src="/images/presentation-assets/Tech Life - Blockchain.png"
            alt="Illustration showing context-aware information delivery"
            style={{
              width: '105%',
              height: 'auto',
              display: 'block',
            }}
          />
        </div>
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
  const entryPoints = [
    { icon: icons.search, title: 'Google search', tag: 'PRIMARY', desc: 'Highest volume. Customers searched specific questions and landed on relevant FAQ sections.' },
    { icon: icons.globe, title: 'Website navigation', tag: 'SECONDARY', desc: 'Header/footer links to FAQ from the main site.' },
    { icon: icons.target, title: 'Account navigation', tag: 'SECONDARY', desc: 'From order history, direct path to relevant help.' },
    { icon: icons.rotateCcw, title: 'Returns page', tag: 'CONTEXTUAL', desc: 'Direct access to help from within the returns flow.' },
  ];

  return (
    <div style={slideBase}>
      <SectionLabel section="Research & Discovery" subSection="Entry Points" />
      <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap }}>Four paths to self-service</h2>
      <p style={{ ...typeStyle('paragraph1', STYLE.colors.gray400), marginTop: 16, maxWidth: 1200 }}>
        The solution needed to adapt its display based on arrival context. A customer via Google search sees only relevant cards; one from the homepage sees all active cards.
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 24,
        flex: 1,
        minHeight: 0,
        marginTop: STYLE.spacing.titleGap,
      }}>
        {/* Left: Entry point cards in 2x2 grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          gap: 16,
        }}>
          {entryPoints.map((ep, i) => (
            <Card key={i} style={{
              padding: 24,
              borderRadius: STYLE.radius.bento,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <IconBox icon={ep.icon} size={44} />
                <div style={{ ...typeStyle('header2'), fontSize: 24 }}>{ep.title}</div>
              </div>
              <div style={{ ...typeStyle('tag', i === 0 ? STYLE.colors.accent : STYLE.colors.gray600) }}>{ep.tag}</div>
              <div style={{ ...typeStyle('paragraph2', STYLE.colors.gray400), fontSize: 18, flex: 1 }}>{ep.desc}</div>
            </Card>
          ))}
        </div>

        {/* Right: Image holder */}
        <div style={{
          borderRadius: STYLE.radius.bento,
          background: '#3a3a3a',
          border: '2px solid #3a3a3a',
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <ImagePlaceholder label="Entry points diagram" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SLIDE 10: Guiding principles
// ─────────────────────────────────────────────────────────

export const SlidePrinciples = () => {
  const principles = [
    {
      num: '01',
      title: 'Progressive disclosure over more information',
      body: 'Reveal only what matters at each step. Customers abandoned comprehensive pages but engaged with contextual cards that layered complexity: identify first, then status, then escalation.',
      tag: 'Minimal cards over detailed pages, drill-down architecture',
    },
    {
      num: '02',
      title: 'Design for existing mental models',
      body: 'Users prefer your product to work like ones they already know. Embedded inside the existing FAQ, honoring established navigation paths. Product images replaced order IDs.',
      tag: "Jakob's Law, FAQ-embedded over standalone help center",
    },
    {
      num: '03',
      title: 'Transparent system status builds trust',
      body: 'Only communicate what you can verify. Confirmed data only: carrier-verified delivery, warehouse-scanned returns, processed refund amounts. No optimistic estimates.',
      tag: "Nielsen's Heuristic #1, confirmed over declared data",
    },
  ];

  return (
    <div style={slideBase}>
      <SectionLabel section="Guiding Principles" />
      <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap }}>Three principles guided every decision</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 24,
        flex: 1,
        minHeight: 0,
        marginTop: STYLE.spacing.titleGap,
      }}>
        {principles.map((p, i) => (
          <Card key={i} style={{
            padding: 44,
            borderRadius: STYLE.radius.bento,
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div style={{ ...typeStyle('header3'), color: STYLE.colors.gray700, fontSize: 120, lineHeight: 0.8, marginBottom: 32 }}>{p.num}</div>
            <div style={{ ...typeStyle('header2'), fontSize: 48, lineHeight: 1.2, color: STYLE.colors.accent, marginBottom: 20 }}>{p.title}</div>
            <div style={{ ...typeStyle('paragraph2', STYLE.colors.gray300), fontSize: 22, lineHeight: 1.6, flex: 1 }}>{p.body}</div>
            <div style={{
              ...typeStyle('paragraph3', STYLE.colors.white),
              fontSize: 24,
              letterSpacing: '0.5px',
              fontWeight: 600,
              textTransform: 'none' as const,
              marginTop: 24,
            }}>{p.tag}</div>
          </Card>
        ))}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SLIDE 11: Design decisions
// ─────────────────────────────────────────────────────────

export const SlideDecisions = () => {
  const decisions = [
    {
      considered: 'Standalone help center',
      chosen: 'Embedded in existing FAQ',
      reason: 'Customers already had 4 established paths. New destination = new behavior to learn.',
    },
    {
      considered: 'Comprehensive information upfront',
      chosen: 'Progressive disclosure',
      reason: 'Usability testing showed detailed first-screens created the same overload problem.',
    },
    {
      considered: 'Order IDs as identifiers',
      chosen: 'Product images',
      reason: "Customers couldn't recall system codes. They identified purchases visually.",
    },
  ];

  return (
    <div style={slideBase}>
      <SectionLabel section="Design Process" subSection="Ideation & Exploration" />
      <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap }}>Three decisions shaped the direction</h2>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        flex: 1,
        minHeight: 0,
        marginTop: STYLE.spacing.titleGap,
        justifyContent: 'center',
      }}>
        {decisions.map((d, i) => (
          <div key={i} style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr 1.2fr',
            gap: 24,
            alignItems: 'center',
          }}>
            <Card style={{ padding: '28px 36px', borderRadius: STYLE.radius.card }}>
              <div style={typeStyle('tag', STYLE.colors.gray600)}>CONSIDERED</div>
              <div style={{ ...typeStyle('header2'), marginTop: 8 }}>{d.considered}</div>
            </Card>
            <div style={{ ...typeStyle('header2', STYLE.colors.gray600), fontSize: 32 }}>→</div>
            <Card style={{ padding: '28px 36px', borderRadius: STYLE.radius.card, background: STYLE.colors.accentDim, borderColor: STYLE.colors.accent }}>
              <div style={typeStyle('tag', STYLE.colors.accent)}>CHOSEN</div>
              <div style={{ ...typeStyle('header2'), marginTop: 8 }}>{d.chosen}</div>
            </Card>
            <div style={typeStyle('paragraph2', STYLE.colors.gray400)}>{d.reason}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SLIDE 12: Usability testing
// ─────────────────────────────────────────────────────────

export const SlideTesting = () => {
  const findings = [
    { finding: 'Unclear escalation entry points', resolution: 'Increased escalation trigger visibility and positioning', status: 'Fixed' },
    { finding: 'Confusion between return stages', resolution: 'Refined return status terminology and visual indicators', status: 'Fixed' },
    { finding: 'Card layout differentiation', resolution: 'Returns: vertical staged flow. Refunds: horizontal cards. Emerged from testing, not upfront design.', status: 'Insight' },
  ];

  return (
    <div style={slideBase}>
      <SectionLabel section="Design Process" subSection="Prototyping & Iteration" />
      <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap }}>Testing and iterating</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: 32,
        flex: 1,
        minHeight: 0,
        marginTop: STYLE.spacing.titleGap,
      }}>
        {/* Left: Big stat */}
        <Card style={{
          padding: 48,
          borderRadius: STYLE.radius.bento,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}>
          <div style={{ ...typeStyle('header3'), fontSize: 180, lineHeight: 0.9 }}>8<span style={{ color: STYLE.colors.gray600 }}>/12</span></div>
          <div style={{ ...typeStyle('statLabel', STYLE.colors.gray400), marginTop: 24 }}>participants completed primary flow</div>
          <div style={{ ...typeStyle('paragraph3', STYLE.colors.gray600), marginTop: 8 }}>(first round success rate)</div>
        </Card>

        {/* Right: Findings + image */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Stack Fixed cards horizontally */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {findings.filter(f => f.status === 'Fixed').map((f, i) => (
              <Card key={i} style={{
                padding: '20px 24px',
                borderRadius: STYLE.radius.card,
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}>
                <div style={{
                  padding: '6px 12px',
                  borderRadius: STYLE.radius.small,
                  background: STYLE.colors.surface,
                  border: `1px solid ${STYLE.colors.border}`,
                  ...typeStyle('tag', STYLE.colors.gray500),
                  fontSize: 12,
                  width: 'fit-content',
                }}>{f.status}</div>
                <div style={{ flex: 1 }}>
                  <div style={typeStyle('paragraph3')}>{f.finding}</div>
                  <div style={{ ...typeStyle('paragraph3', STYLE.colors.gray500), marginTop: 4 }}>{f.resolution}</div>
                </div>
              </Card>
            ))}
          </div>
          {/* Insight card */}
          {findings.filter(f => f.status === 'Insight').map((f, i) => (
            <Card key={i} style={{
              padding: '20px 28px',
              borderRadius: STYLE.radius.card,
              display: 'flex',
              alignItems: 'center',
              gap: 24,
            }}>
              <div style={{
                padding: '6px 12px',
                borderRadius: STYLE.radius.small,
                background: STYLE.colors.accentDim,
                border: `1px solid ${STYLE.colors.accent}`,
                ...typeStyle('tag', STYLE.colors.accent),
                fontSize: 12,
                flexShrink: 0,
              }}>{f.status}</div>
              <div style={{ flex: 1 }}>
                <div style={typeStyle('paragraph3')}>{f.finding}</div>
                <div style={{ ...typeStyle('paragraph3', STYLE.colors.gray500), marginTop: 4 }}>{f.resolution}</div>
              </div>
            </Card>
          ))}
          <ImagePlaceholder label="Card layout iterations: V1 → V2 → Final" style={{ flex: 1, minHeight: 180, borderRadius: 12 }} />
        </div>
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
      <div style={{
        display: 'grid',
        gridTemplateColumns: '35fr 65fr',
        gap: 24,
        flex: 1,
        minHeight: 0,
        marginTop: STYLE.spacing.titleGap,
      }}>
        {/* Left column: Image */}
        <div style={{
          border: `1px solid ${STYLE.colors.white}`,
          borderRadius: STYLE.radius.bento,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}>
          <img
            src="/images/presentation-assets/handshake-deal.svg?v=2"
            alt="Handshake illustration"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </div>

        {/* Right column: 2 rows */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
        }}>
          {/* Row 1: Challenge → Resolution */}
          <div style={{
            flex: 1,
            display: 'flex',
            alignItems: 'stretch',
            gap: 12,
          }}>
            {/* Challenge */}
            <div style={{
              flex: 1,
              background: STYLE.colors.white,
              borderRadius: 12,
              padding: 32,
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{ ...typeStyle('tag', STYLE.colors.gray700), fontSize: 18, marginBottom: 16, padding: '16px 0' }}>CHALLENGE</div>
              <div style={{ ...typeStyle('header2', STYLE.colors.bg), fontSize: 32 }}>FAQ redesign pushback</div>
              <div style={{ ...typeStyle('paragraph2', '#444444'), fontSize: 22, lineHeight: 1.5, marginTop: 12 }}>
                I proposed redesigning the FAQ as part of improving self-service, but other member teams saw it as scope creep outside the core self-help mandate.
              </div>
            </div>

            {/* Chevron */}
            <div style={{ display: 'flex', alignItems: 'center', color: STYLE.colors.gray600 }}>
              <svg width="20" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" preserveAspectRatio="none">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>

            {/* Resolution */}
            <div style={{
              flex: 1,
              background: STYLE.colors.accent,
              borderRadius: 12,
              padding: 32,
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{ ...typeStyle('tag', '#1A1A1A'), fontSize: 18, marginBottom: 16, padding: '16px 0' }}>RESOLUTION</div>
              <div style={{ ...typeStyle('header2', STYLE.colors.bg), fontSize: 32 }}>Strategic compromise</div>
              <div style={{ ...typeStyle('paragraph2', '#2A1A08'), fontSize: 22, lineHeight: 1.5, marginTop: 12 }}>
                Agreed to phase the work: deliver contextual help cards first (the core deliverable), with FAQ improvements planned for a future phase. This preserved momentum while keeping the door open.
              </div>
            </div>
          </div>

          {/* Row 2: Challenge → Outcome */}
          <div style={{
            flex: 1,
            display: 'flex',
            alignItems: 'stretch',
            gap: 12,
          }}>
            {/* Challenge */}
            <div style={{
              flex: 1,
              background: STYLE.colors.white,
              borderRadius: 12,
              padding: 32,
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{ ...typeStyle('tag', STYLE.colors.gray700), fontSize: 18, marginBottom: 16, padding: '16px 0' }}>CHALLENGE</div>
              <div style={{ ...typeStyle('header2', STYLE.colors.bg), fontSize: 32 }}>Missing carrier data</div>
              <div style={{ ...typeStyle('paragraph2', '#444444'), fontSize: 22, lineHeight: 1.5, marginTop: 12 }}>
                Engineering said the data I needed for the cards didn&apos;t exist because carriers weren&apos;t providing it. But I&apos;d seen similar data from other carriers, so I asked them to investigate further.
              </div>
            </div>

            {/* Chevron */}
            <div style={{ display: 'flex', alignItems: 'center', color: STYLE.colors.gray600 }}>
              <svg width="20" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" preserveAspectRatio="none">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>

            {/* Outcome */}
            <div style={{
              flex: 1,
              background: STYLE.colors.accent,
              borderRadius: 12,
              padding: 32,
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{ ...typeStyle('tag', '#1A1A1A'), fontSize: 18, marginBottom: 16, padding: '16px 0' }}>OUTCOME</div>
              <div style={{ ...typeStyle('header2', STYLE.colors.bg), fontSize: 32 }}>Collaborative discovery</div>
              <div style={{ ...typeStyle('paragraph2', '#2A1A08'), fontSize: 22, lineHeight: 1.5, marginTop: 12 }}>
                Engineering partnered with me to audit carrier APIs across markets. We found more data existed than assumed. The investigation became a shared resource for future projects.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SLIDE 14: System architecture
// ─────────────────────────────────────────────────────────

export const SlideArchitecture = () => {
  const steps = [
    { num: '01', title: 'Entry', desc: '4 paths adapt display based on arrival context' },
    { num: '02', title: 'Identify', desc: 'Product images for instant visual recognition' },
    { num: '03', title: 'Context', desc: 'Real-time data from carrier APIs, warehouse, payments' },
    { num: '04', title: 'Resolve', desc: 'Tailored flow per journey: delivery, returns, refund' },
    { num: '05', title: 'Escalate', desc: 'Full context attached, timeline confirmed' },
  ];

  return (
    <div style={slideBase}>
      <SectionLabel section="Solution" subSection="System Architecture" />
      <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap }}>How the system works</h2>
      <p style={{ ...typeStyle('paragraph1', STYLE.colors.gray400), marginTop: 16, maxWidth: 1400 }}>
        The solution identifies authenticated customers through API integration, pulling order and parcel data from their profile. Based on journey stage, it surfaces relevant contextual information driven by real-time data.
      </p>
      <div style={{
        display: 'flex',
        gap: 16,
        marginTop: STYLE.spacing.titleGap,
        alignItems: 'stretch',
      }}>
        {steps.map((s, i) => (
          <React.Fragment key={i}>
            <Card style={{
              flex: 1,
              padding: '28px 24px',
              borderRadius: STYLE.radius.card,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}>
              <div style={{ ...typeStyle('header2', STYLE.colors.accent), fontSize: 24 }}>{s.num}</div>
              <div style={typeStyle('header2')}>{s.title}</div>
              <div style={{ ...typeStyle('paragraph3', STYLE.colors.gray500) }}>{s.desc}</div>
            </Card>
            {i < steps.length - 1 && (
              <div style={{ display: 'flex', alignItems: 'center', color: STYLE.colors.gray600, fontSize: 24 }}>→</div>
            )}
          </React.Fragment>
        ))}
      </div>
      <ImagePlaceholder label="System architecture flow diagram" style={{ flex: 1, minHeight: 300, marginTop: 24, borderRadius: STYLE.radius.bento }} />
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
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.5fr',
        gap: 32,
        flex: 1,
        minHeight: 0,
        marginTop: STYLE.spacing.titleGap,
      }}>
        {/* Left: Text cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Card style={{
            padding: 36,
            borderRadius: STYLE.radius.bento,
            flex: 1,
          }}>
            <div style={typeStyle('header2')}>Via Google search</div>
            <div style={{ ...typeStyle('paragraph1', STYLE.colors.gray400), marginTop: 16 }}>
              Land on specific FAQ section. See only contextual cards related to that query. Immediate relevance.
            </div>
          </Card>
          <Card style={{
            padding: 36,
            borderRadius: STYLE.radius.bento,
            flex: 1,
          }}>
            <div style={typeStyle('header2')}>Via website, account, or returns</div>
            <div style={{ ...typeStyle('paragraph1', STYLE.colors.gray400), marginTop: 16 }}>
              See FAQ homepage with all active cards displayed. Product images for instant visual recognition across multiple orders.
            </div>
          </Card>
        </div>

        {/* Right: Image */}
        <ImagePlaceholder label="FAQ homepage with contextual cards (annotated)" style={{ borderRadius: STYLE.radius.bento }} />
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SLIDE 16: Resolution paths
// ─────────────────────────────────────────────────────────

export const SlideFlows = () => {
  const flows = [
    {
      variant: 'gradientDark' as const,
      icon: icons.truck,
      title: 'Delivery',
      steps: ['Purchase date & promised delivery', 'Current shipping status', 'Delivery details', 'Escalate if delayed/missing'],
      note: 'Progressive: status at a glance, drill down for details',
    },
    {
      variant: 'orangeGradient' as const,
      icon: icons.rotateCcw,
      title: 'Returns',
      steps: ['Drop-off confirmation', 'Courier pickup', 'Warehouse arrival', 'Issue resolution'],
      note: 'Staged vertical flow. Confirmed data only (carrier/warehouse scan)',
    },
    {
      variant: 'gradientDark' as const,
      icon: icons.wallet,
      title: 'Refund',
      steps: ['Refund amount', 'Expected timeline', 'Payment method', 'Flag discrepancies'],
      note: 'Horizontal cards. Static info with escalation triggers',
    },
  ];

  return (
    <div style={slideBase}>
      <SectionLabel section="Solution" subSection="Resolution Paths" />
      <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap }}>Tailored flow per journey type</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 24,
        flex: 1,
        minHeight: 0,
        marginTop: STYLE.spacing.titleGap,
      }}>
        {flows.map((f, i) => (
          <BentoCard key={i} variant={f.variant} style={{
            padding: 40,
            borderRadius: STYLE.radius.bento,
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}>
            {(textColor, textSecondary) => (
              <>
                <div style={{ color: textSecondary }}>{f.icon}</div>
                <div style={{ ...typeStyle('header2'), color: textColor }}>{f.title}</div>
                <div style={{ flex: 1 }}>
                  {f.steps.map((step, si) => (
                    <div key={si} style={{
                      display: 'flex', gap: 12, alignItems: 'flex-start',
                      marginBottom: 12,
                    }}>
                      <div style={{
                        ...typeStyle('tag'),
                        color: textSecondary,
                        fontSize: 14,
                        width: 24,
                        flexShrink: 0,
                      }}>{si + 1}.</div>
                      <div style={{ ...typeStyle('paragraph2'), color: textColor }}>{step}</div>
                    </div>
                  ))}
                </div>
                <div style={{
                  padding: '12px 16px',
                  background: 'rgba(0,0,0,0.15)',
                  borderRadius: STYLE.radius.small,
                  ...typeStyle('paragraph3'),
                  color: textSecondary,
                  fontSize: 14,
                }}>{f.note}</div>
              </>
            )}
          </BentoCard>
        ))}
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
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr',
        gap: 24,
        flex: 1,
        minHeight: 0,
        marginTop: STYLE.spacing.titleGap,
      }}>
        {/* Left: Contextual escalation */}
        <Card style={{
          padding: 44,
          borderRadius: STYLE.radius.bento,
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
        }}>
          <div style={typeStyle('header2')}>Contextual escalation</div>
          <div style={{ ...typeStyle('paragraph1', STYLE.colors.gray400), flex: 1 }}>
            Support ticket created with full context already attached: order details, parcel status, customer actions taken. Agents follow up with case context in hand.
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
            {['Review timeline shown', 'Email confirmation', '24hr agent follow-up'].map((tag, i) => (
              <div key={i} style={{
                padding: '5px 12px',
                borderRadius: STYLE.radius.small,
                background: STYLE.colors.accent,
                ...typeStyle('paragraph3'),
                fontSize: 14,
              }}>{tag}</div>
            ))}
          </div>
        </Card>

        {/* Right: Edge cases */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Card style={{
            padding: 36,
            borderRadius: STYLE.radius.bento,
            flex: 1,
          }}>
            <div style={typeStyle('tag', STYLE.colors.gray600)}>EDGE CASE</div>
            <div style={{ ...typeStyle('header2'), marginTop: 12 }}>Duplicate escalation detection</div>
            <div style={{ ...typeStyle('paragraph2', STYLE.colors.gray400), marginTop: 12 }}>
              Recognizes existing cases for the same issue. Shows reassurance messaging: case acknowledged, status displayed, timeline confirmed. No silent blocking.
            </div>
          </Card>
          <Card style={{
            padding: 36,
            borderRadius: STYLE.radius.bento,
            flex: 1,
          }}>
            <div style={typeStyle('tag', STYLE.colors.gray600)}>GRACEFUL FALLBACK</div>
            <div style={{ ...typeStyle('header2'), marginTop: 12 }}>Empty states</div>
            <div style={{ ...typeStyle('paragraph2', STYLE.colors.gray400), marginTop: 12 }}>
              No active orders, returns, or refunds? Gracefully falls back to standard FAQ content rather than showing empty or confusing interface.
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SLIDE 18: Before / After
// ─────────────────────────────────────────────────────────

export const SlideBeforeAfter = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const sliderImages = [
    { src: '/images/presentation-assets/Old FAQ - Delivery.png', label: 'Old FAQ - Delivery' },
    { src: '/images/presentation-assets/Old FAQ - Where is my Order.png', label: 'Old FAQ - Where is my Order' },
    { src: '/images/presentation-assets/New FAQ [Mobile] - Delivery Status.png', label: 'New FAQ Mobile - Delivery Status' },
    { src: '/images/presentation-assets/New FAQ [Web] - Delivery Status.png', label: 'New FAQ Web - Delivery Status' },
    { src: '/images/presentation-assets/New FAQ - Delivery Status (Mobile & Web).png', label: 'Delivery Status Comparison' },
    { src: '/images/presentation-assets/New FAQ - Where is my Order (Mobile & Web).png', label: 'Where is my Order Comparison' },
    { src: '/images/presentation-assets/New FAQ [Mobile] - Where is my Order.png', label: 'New FAQ Mobile - Where is my Order' },
    { src: '/images/presentation-assets/New FAQ [Web] - Where is my Order.png', label: 'New FAQ Web - Where is my Order' },
  ];

  const goNextImage = () => setCurrentImageIndex((i) => Math.min(i + 1, sliderImages.length - 1));
  const goPrevImage = () => setCurrentImageIndex((i) => Math.max(i - 1, 0));

  // Keyboard navigation for slider
  React.useEffect(() => {
    if (!isModalOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
      if (e.key === 'ArrowRight') goNextImage();
      if (e.key === 'ArrowLeft') goPrevImage();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isModalOpen]);

  // SliderModal component
  const SliderModal = () => {
    if (!isModalOpen || typeof document === 'undefined') return null;
    return ReactDOM.createPortal(
      <div
        onClick={() => setIsModalOpen(false)}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.95)',
          zIndex: 10000,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 24px',
            borderBottom: `1px solid ${STYLE.colors.border}`,
          }}
        >
          <span style={{ ...typeStyle('paragraph1', STYLE.colors.gray400), fontFamily: STYLE.fonts.body }}>
            {sliderImages[currentImageIndex].label}
          </span>
          <span style={{ ...typeStyle('paragraph2', STYLE.colors.gray500) }}>
            {currentImageIndex + 1} / {sliderImages.length}
          </span>
          <button
            onClick={() => setIsModalOpen(false)}
            style={{
              background: 'none',
              border: 'none',
              color: STYLE.colors.gray400,
              cursor: 'pointer',
              padding: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Image area with navigation */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px 80px',
            position: 'relative',
            minHeight: 0,
          }}
        >
          {/* Prev button */}
          <button
            onClick={goPrevImage}
            disabled={currentImageIndex === 0}
            style={{
              position: 'absolute',
              left: 24,
              top: '50%',
              transform: 'translateY(-50%)',
              background: STYLE.colors.surface,
              border: `1px solid ${STYLE.colors.border}`,
              borderRadius: '50%',
              width: 48,
              height: 48,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: currentImageIndex === 0 ? 'not-allowed' : 'pointer',
              opacity: currentImageIndex === 0 ? 0.3 : 1,
              color: STYLE.colors.white,
            }}
          >
            {navIcons.chevLeft}
          </button>

          {/* Current image */}
          <img
            src={sliderImages[currentImageIndex].src}
            alt={sliderImages[currentImageIndex].label}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              borderRadius: STYLE.radius.bento,
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            }}
          />

          {/* Next button */}
          <button
            onClick={goNextImage}
            disabled={currentImageIndex === sliderImages.length - 1}
            style={{
              position: 'absolute',
              right: 24,
              top: '50%',
              transform: 'translateY(-50%)',
              background: STYLE.colors.surface,
              border: `1px solid ${STYLE.colors.border}`,
              borderRadius: '50%',
              width: 48,
              height: 48,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: currentImageIndex === sliderImages.length - 1 ? 'not-allowed' : 'pointer',
              opacity: currentImageIndex === sliderImages.length - 1 ? 0.3 : 1,
              color: STYLE.colors.white,
            }}
          >
            {navIcons.chevRight}
          </button>
        </div>

        {/* Dot indicators */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            padding: '16px 24px',
            borderTop: `1px solid ${STYLE.colors.border}`,
          }}
        >
          {sliderImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImageIndex(i)}
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: i === currentImageIndex ? STYLE.colors.accent : STYLE.colors.gray700,
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'background 0.2s ease',
              }}
            />
          ))}
        </div>
      </div>,
      document.body
    );
  };

  return (
    <div style={slideBase}>
      <SectionLabel section="Solution" subSection="Transformation" />
      <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap }}>From generic to contextual</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        gap: 32,
        flex: 1,
        minHeight: 0,
        marginTop: STYLE.spacing.titleGap,
        alignItems: 'center',
      }}>
        {/* Before */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, height: '100%', paddingTop: '10%' }}>
          <div style={{
            padding: '10px 20px',
            background: STYLE.colors.surface,
            border: `1px solid ${STYLE.colors.border}`,
            borderRadius: STYLE.radius.small,
            ...typeStyle('tag', STYLE.colors.gray500),
            width: 'fit-content',
          }}>BEFORE</div>
          <div
            onClick={() => setIsModalOpen(true)}
            style={{
              position: 'relative',
              flex: 1,
              borderRadius: STYLE.radius.bento,
              overflow: 'hidden',
              background: '#2a2a2a',
              cursor: 'pointer',
            }}
          >
            {/* Base image */}
            <img
              src="/images/presentation-assets/Old FAQ - Delivery.png"
              alt="Old FAQ - Delivery"
              style={{
                position: 'absolute',
                width: '85%',
                height: 'auto',
                top: '5%',
                left: '5%',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                borderRadius: 8,
              }}
            />
            {/* Overlaid image */}
            <img
              src="/images/presentation-assets/Old FAQ - Where is my Order.png"
              alt="Old FAQ - Where is my Order"
              style={{
                position: 'absolute',
                width: '85%',
                height: 'auto',
                top: '15%',
                left: '15%',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                borderRadius: 8,
              }}
            />
            {/* Expand button */}
            <button
              onClick={(e) => { e.stopPropagation(); setIsModalOpen(true); }}
              style={{
                position: 'absolute',
                top: 12,
                right: 12,
                background: 'rgba(0,0,0,0.6)',
                border: 'none',
                borderRadius: 6,
                padding: 8,
                cursor: 'pointer',
                color: STYLE.colors.white,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {navIcons.expand}
            </button>
          </div>
          <div style={{ ...typeStyle('paragraph2', STYLE.colors.gray500), textAlign: 'center' }}>
            Same static page for every customer. Text-heavy, no personalization, no real-time data.
          </div>
        </div>

        {/* Arrow */}
        <div style={{ ...typeStyle('header1', STYLE.colors.accent), fontSize: 72 }}>→</div>

        {/* After */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, height: '100%', paddingTop: '10%' }}>
          <div style={{
            padding: '10px 20px',
            background: STYLE.colors.accentDim,
            border: `1px solid ${STYLE.colors.accent}`,
            borderRadius: STYLE.radius.small,
            ...typeStyle('tag', STYLE.colors.accent),
            width: 'fit-content',
          }}>AFTER</div>
          <div
            onClick={() => { setCurrentImageIndex(2); setIsModalOpen(true); }}
            style={{
              position: 'relative',
              flex: 1,
              borderRadius: STYLE.radius.bento,
              overflow: 'hidden',
              background: '#2a2a2a',
              cursor: 'pointer',
            }}
          >
            {/* Base image - Mobile */}
            <img
              src="/images/presentation-assets/New FAQ [Mobile] - Delivery Status.png"
              alt="New FAQ Mobile - Delivery Status"
              style={{
                position: 'absolute',
                width: '40%',
                height: 'auto',
                top: '5%',
                left: '5%',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                borderRadius: 8,
              }}
            />
            {/* Overlaid image - Web */}
            <img
              src="/images/presentation-assets/New FAQ [Web] - Delivery Status.png"
              alt="New FAQ Web - Delivery Status"
              style={{
                position: 'absolute',
                width: '70%',
                height: 'auto',
                top: '10%',
                left: '30%',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                borderRadius: 8,
              }}
            />
            {/* Expand button */}
            <button
              onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(2); setIsModalOpen(true); }}
              style={{
                position: 'absolute',
                top: 12,
                right: 12,
                background: 'rgba(0,0,0,0.6)',
                border: 'none',
                borderRadius: 6,
                padding: 8,
                cursor: 'pointer',
                color: STYLE.colors.white,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {navIcons.expand}
            </button>
          </div>
          <div style={{ ...typeStyle('paragraph2', STYLE.colors.gray400), textAlign: 'center' }}>
            Personalized contextual cards. Product images, real-time status, entry-point-adaptive display.
          </div>
        </div>
      </div>
      <SliderModal />
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SLIDE 19: Customer impact
// ─────────────────────────────────────────────────────────

export const SlideResultsCustomer = () => {
  const metrics = [
    { value: '42%', label: 'reduction in yearly inquiries', desc: 'Across delivery and returns categories', variant: 'orangeGradient' as const },
    { value: '33%', label: 'fewer returns inquiries', desc: 'Exceeded 25% target set at kickoff', variant: 'gradientDark' as const },
    { value: '28%', label: 'CSAT improvement', desc: '3.1 → 4.2 out of 5', variant: 'gradientDark' as const },
    { value: '67%', label: 'faster resolution', desc: '24 hours → under 3 hours', variant: 'gradientDark' as const },
  ];

  return (
    <div style={slideBase}>
      <SectionLabel section="Results & Impact" />
      <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap }}>Customer impact</h2>
      <div style={{
        display: 'flex',
        gap: 24,
        flex: 1,
        minHeight: 0,
        marginTop: STYLE.spacing.titleGap,
      }}>
        {/* Left: Cards container - 65% */}
        <div style={{
          width: '65%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr',
          gap: 24,
        }}>
          {metrics.map((m, i) => (
            <BentoCard key={i} variant={m.variant} style={{
              padding: 32,
              borderRadius: STYLE.radius.bento,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}>
              {(textColor, textSecondary) => (
                <>
                  <div style={{ ...typeStyle('header3'), color: textColor, fontSize: 80, lineHeight: 0.9 }}>{m.value}</div>
                  <div style={{ ...typeStyle('statLabel'), color: textColor, marginTop: 12 }}>{m.label}</div>
                  <div style={{ ...typeStyle('paragraph3'), color: textSecondary, marginTop: 6 }}>{m.desc}</div>
                </>
              )}
            </BentoCard>
          ))}
        </div>

        {/* Right: Image placeholder - 35% */}
        <div style={{ width: '35%' }}>
          <ImagePlaceholder label="Customer impact visual" style={{ height: '100%', borderRadius: STYLE.radius.bento }} />
        </div>
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
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr',
        gap: 24,
        marginTop: STYLE.spacing.titleGap,
      }}>
        {/* Main stat */}
        <BentoCard variant="peachGradient" style={{
          padding: 48,
          borderRadius: STYLE.radius.bento,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
          {(textColor, textSecondary) => (
            <>
              <div style={{ ...typeStyle('header3'), color: textColor, fontSize: 140, lineHeight: 0.85 }}>€3.2M</div>
              <div style={{ ...typeStyle('statLabel'), color: textColor, marginTop: 16 }}>annual cost savings</div>
              <div style={{ ...typeStyle('paragraph2'), color: textSecondary, marginTop: 8 }}>~900,000 repeat contacts eliminated per year</div>
            </>
          )}
        </BentoCard>

        {/* Secondary stats */}
        <Card style={{
          padding: 36,
          borderRadius: STYLE.radius.bento,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
          <div style={{ ...typeStyle('header3'), fontSize: 100, lineHeight: 0.9 }}>52%</div>
          <div style={{ ...typeStyle('statLabel', STYLE.colors.gray400), marginTop: 12 }}>agent productivity increase</div>
          <div style={{ ...typeStyle('paragraph3', STYLE.colors.gray600), marginTop: 4 }}>Shifted to complex interactions</div>
        </Card>
        <Card style={{
          padding: 36,
          borderRadius: STYLE.radius.bento,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
          <div style={{ ...typeStyle('header3'), fontSize: 100, lineHeight: 0.9 }}>8%</div>
          <div style={{ ...typeStyle('statLabel', STYLE.colors.gray400), marginTop: 12 }}>automation rate increase</div>
          <div style={{ ...typeStyle('paragraph3', STYLE.colors.gray600), marginTop: 4 }}>Intelligent routing of routine inquiries</div>
        </Card>
      </div>

      {/* Summary card */}
      <Card style={{
        padding: '28px 36px',
        borderRadius: STYLE.radius.bento,
        marginTop: 24,
        flex: 1,
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={typeStyle('paragraph1', STYLE.colors.gray400)}>
          Results shared with Director and VP of Customer Care. Solution influenced Zalando&apos;s broader self-service and automation strategy. Confirmed carrier data approach became a reference model.
        </div>
      </Card>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SLIDE 21: Transformation in numbers
// ─────────────────────────────────────────────────────────

export const SlideMetricsComparison = () => {
  const comparisons = [
    { metric: 'Resolution time', before: '24 hours', after: 'Under 3 hours', change: '67% faster' },
    { metric: 'Customer satisfaction', before: '3.1 / 5', after: '4.2 / 5', change: '28% improvement' },
    { metric: 'Repeat contacts', before: '2M per year', after: '1.1M per year', change: '45% reduction' },
    { metric: 'Annual cost', before: '€7M', after: '€3.8M', change: '€3.2M saved' },
  ];

  return (
    <div style={slideBase}>
      <SectionLabel section="Results & Impact" />
      <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap }}>The transformation in numbers</h2>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        flex: 1,
        minHeight: 0,
        marginTop: STYLE.spacing.titleGap,
        justifyContent: 'center',
      }}>
        {comparisons.map((c, i) => (
          <div key={i} style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr auto 1fr 1fr',
            gap: 24,
            alignItems: 'center',
          }}>
            <div style={typeStyle('header2')}>{c.metric}</div>
            <Card style={{ padding: '20px 28px', borderRadius: STYLE.radius.card, textAlign: 'center' }}>
              <div style={typeStyle('paragraph3', STYLE.colors.gray500)}>{c.before}</div>
            </Card>
            <div style={{ ...typeStyle('header2', STYLE.colors.gray600), fontSize: 24 }}>→</div>
            <Card style={{
              padding: '20px 28px',
              borderRadius: STYLE.radius.card,
              textAlign: 'center',
              background: STYLE.colors.accentDim,
              borderColor: STYLE.colors.accent,
            }}>
              <div style={typeStyle('paragraph3')}>{c.after}</div>
            </Card>
            <div style={{
              padding: '12px 20px',
              background: STYLE.colors.surface,
              borderRadius: STYLE.radius.small,
              ...typeStyle('tag', STYLE.colors.accent),
              fontSize: 14,
              textAlign: 'center',
            }}>{c.change}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SLIDE 22: Key lesson
// ─────────────────────────────────────────────────────────

export const SlideKeyLesson = () => (
  <div style={slideBase}>
    <SectionLabel section="Reflection" />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
  const reflections = [
    {
      num: '01',
      title: 'Push for technical discovery earlier',
      body: 'The carrier API investigation happened mid-project. Starting in the first weeks would have surfaced data availability and constraints sooner.',
    },
    {
      num: '02',
      title: 'Invest in content strategy from day one',
      body: 'Content design became critical for card labels, status descriptions, and escalation messaging. Earlier involvement would have reduced iteration cycles.',
    },
    {
      num: '03',
      title: 'Establish unified architecture first',
      body: 'The pivot from combined dashboard to connected journey model was driven by API constraints found during implementation. Mapping constraints upfront would have reduced rework.',
    },
  ];

  return (
    <div style={slideBase}>
      <SectionLabel section="Reflection" />
      <h2 style={{ ...typeStyle('header1'), marginTop: STYLE.spacing.sectionGap }}>What I would do differently</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 24,
        flex: 1,
        minHeight: 0,
        marginTop: STYLE.spacing.titleGap,
      }}>
        {reflections.map((r, i) => (
          <Card key={i} style={{
            padding: 44,
            borderRadius: STYLE.radius.bento,
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}>
            <div style={{ ...typeStyle('header3'), color: STYLE.colors.accent }}>{r.num}</div>
            <div style={typeStyle('header2')}>{r.title}</div>
            <div style={{ ...typeStyle('paragraph2', STYLE.colors.gray400), flex: 1 }}>{r.body}</div>
          </Card>
        ))}
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
