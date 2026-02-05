import { useState, useEffect, useCallback, useRef } from "react";

// ═══════════════════════════════════════════════════════════════════
// DESIGN STYLE GUIDE v2
// All visual decisions live here. Change once, applies everywhere.
// Canvas: 1920 × 1080 (fixed, no auto-scaling in normal view)
// ═══════════════════════════════════════════════════════════════════

const STYLE = {
  // ─── Canvas ───
  canvas: {
    width: 1920,
    height: 1080,
  },

  // ─── Spacing ───
  spacing: {
    slide: {
      top: 100,
      right: 120,
      bottom: 100,
      left: 120,
    },
    sectionGap: 32,
    titleGap: 48,
    cardGap: 24,
    cardPadding: 44,
    cardPaddingLg: 52,
    inlineGap: 16,
    rowGap: 16,
  },

  // ─── Typography ───
  fonts: {
    heading: "'Oswald', sans-serif",
    body: "'Source Sans 3', 'Source Sans Pro', sans-serif",
  },

  type: {
    // ─── Core Typography System ───

    // Page-level labels
    pageCaption:  { size: 24,  weight: 700, lineHeight: 1.2,  letterSpacing: "8px",   font: "heading", textTransform: "uppercase" },
    pageFooter:   { size: 24,  weight: 600, lineHeight: 1.2,  letterSpacing: "0.5px", font: "body" },

    // Titles (hero / cover slide scale)
    title1:       { size: 120, weight: 700, lineHeight: 0.95, letterSpacing: "-2px",  font: "heading" },
    title2:       { size: 42,  weight: 300, lineHeight: 1.4,  letterSpacing: "0",     font: "body" },
    title3:       { size: 28,  weight: 600, lineHeight: 1.3,  letterSpacing: "0",     font: "body" },

    // Headers (content slide headings)
    header1:      { size: 64,  weight: 700, lineHeight: 1.05, letterSpacing: "-1px",  font: "heading" },
    header2:      { size: 32,  weight: 700, lineHeight: 1.2,  letterSpacing: "0",     font: "heading" },
    header3:      { size: 160, weight: 700, lineHeight: 1.0,  letterSpacing: "-2px",  font: "heading" },

    // Paragraphs (body text at different scales)
    paragraph1:   { size: 32,  weight: 300, lineHeight: 1.6,  letterSpacing: "0",     font: "body" },
    paragraph2:   { size: 24,  weight: 300, lineHeight: 1.5,  letterSpacing: "0",     font: "body" },
    paragraph3:   { size: 24,  weight: 400, lineHeight: 1.4,  letterSpacing: "0",     font: "body" },

    // ─── Specialized (data / UI elements) ───
    statLabel:    { size: 36,  weight: 300, lineHeight: 1.2,  letterSpacing: "0",     font: "body" },
    emphasis:     { size: 48,  weight: 700, lineHeight: 1.2,  letterSpacing: "0",     font: "heading" },
    tag:          { size: 20,  weight: 700, lineHeight: 1.2,  letterSpacing: "2px",   font: "heading", textTransform: "uppercase" },
    subCaption:   { size: 32,  weight: 300, lineHeight: 1.3,  letterSpacing: "0",     font: "body" },
  },

  // ─── Card Gradients ───
  cardStyles: {
    gradientDark: {
      background: "linear-gradient(160deg, #1A1A1A 0%, #252525 100%)",
      border: "#2A2A2A",
      text: "#FFFFFF",
      textSecondary: "#AAAAAA",
    },
    gradientWhite: {
      background: "linear-gradient(160deg, #FFFFFF 0%, #F0F0F0 100%)",
      border: "#E0E0E0",
      text: "#111111",
      textSecondary: "#666666",
    },
    whiteGradient: {
      background: "linear-gradient(160deg, #F8F8F8 0%, #FFFFFF 100%)",
      border: "#E8E8E8",
      text: "#111111",
      textSecondary: "#666666",
    },
    peachGradient: {
      background: "linear-gradient(160deg, #F4A574 0%, #E8932F 100%)",
      border: "#D4823A",
      text: "#1A1A1A",
      textSecondary: "#4A3000",
    },
    orangeGradient: {
      background: `linear-gradient(160deg, #E8932F 0%, #D07518 100%)`,
      border: "#B86815",
      text: "#111111",
      textSecondary: "#2A1A08",
    },
  },

  // ─── Colors ───
  colors: {
    bg:         "#111111",
    surface:    "#1A1A1A",
    border:     "#2A2A2A",
    borderLight:"#333333",
    white:      "#FFFFFF",
    gray300:    "#BBBBBB",
    gray400:    "#AAAAAA",
    gray500:    "#999999",
    gray600:    "#777777",
    gray700:    "#666666",
    gray800:    "#444444",
    accent:     "#E8932F",
    accentDim:  "rgba(232,147,47,0.12)",
  },

  // ─── Radius ───
  radius: {
    card: "12px",
    small: "6px",
  },

  // ─── Icons ───
  icon: {
    size: 44,
    sizeL: 56,
  },
};

// ═══════════════════════════════════════════════════════════════════
// STYLE HELPERS
// ═══════════════════════════════════════════════════════════════════

const typeStyle = (key, colorOverride) => {
  const t = STYLE.type[key];
  return {
    fontFamily: STYLE.fonts[t.font],
    fontSize: `${t.size}px`,
    fontWeight: t.weight,
    lineHeight: t.lineHeight,
    letterSpacing: t.letterSpacing,
    ...(t.textTransform && { textTransform: t.textTransform }),
    ...(t.fontStyle && { fontStyle: t.fontStyle }),
    color: colorOverride || STYLE.colors.white,
    margin: 0,
  };
};

const slidePadding = {
  paddingTop: STYLE.spacing.slide.top,
  paddingRight: STYLE.spacing.slide.right,
  paddingBottom: STYLE.spacing.slide.bottom,
  paddingLeft: STYLE.spacing.slide.left,
};

// ═══════════════════════════════════════════════════════════════════
// SVG ICONS
// ═══════════════════════════════════════════════════════════════════

const makeIcon = (paths, s = STYLE.icon.size) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {paths}
  </svg>
);
const makeLIcon = (paths) => makeIcon(paths, STYLE.icon.sizeL);

const icons = {
  globe:      makeIcon(<><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></>),
  target:     makeIcon(<><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></>),
  mapPin:     makeIcon(<><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></>),
  calendar:   makeIcon(<><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></>),
  search:     makeLIcon(<><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></>),
  repeat:     makeLIcon(<><path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/></>),
  headphones: makeLIcon(<><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></>),
  wallet:     makeIcon(<><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></>),
  truck:      makeIcon(<><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></>),
  rotateCcw:  makeIcon(<><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></>),
  activity:   makeIcon(<><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></>),
  mapPinOff:  makeIcon(<><path d="M5.43 5.43A8.06 8.06 0 0 0 4 10c0 6 8 12 8 12a29.94 29.94 0 0 0 5-5"/><path d="M19.18 13.52A8.66 8.66 0 0 0 20 10a8 8 0 0 0-8-8 7.88 7.88 0 0 0-3.52.82"/><path d="M9.13 9.13A2.78 2.78 0 0 0 9 10a3 3 0 0 0 3 3 2.78 2.78 0 0 0 .87-.13"/><path d="M14.9 9.25a3 3 0 0 0-2.15-2.16"/><line x1="2" x2="22" y1="2" y2="22"/></>),
};

const navIcons = {
  expand:    makeIcon(<><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></>, 20),
  shrink:    makeIcon(<><path d="M4 14h6v6"/><path d="M20 10h-6V4"/><path d="M14 10l7-7"/><path d="M3 21l7-7"/></>, 20),
  chevLeft:  makeIcon(<><path d="m15 18-6-6 6-6"/></>, 20),
  chevRight: makeIcon(<><path d="m9 18 6-6-6-6"/></>, 20),
  notes:     makeIcon(<><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><path d="M14 2v6h6"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></>, 20),
  rotate:    makeIcon(<><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></>, 48),
};

// ═══════════════════════════════════════════════════════════════════
// PRIMITIVES
// ═══════════════════════════════════════════════════════════════════

const Card = ({ children, style = {} }) => (
  <div style={{
    background: STYLE.colors.surface,
    border: `1px solid ${STYLE.colors.border}`,
    borderRadius: STYLE.radius.card,
    ...style,
  }}>{children}</div>
);

const IconBox = ({ icon, size }) => (
  <div style={{ color: STYLE.colors.gray500, width: size || STYLE.icon.size, height: size || STYLE.icon.size, flexShrink: 0 }}>{icon}</div>
);

const BentoCard = ({ variant = "gradientDark", children, style = {} }) => {
  const cs = STYLE.cardStyles[variant];
  return (
    <div style={{
      background: cs.background,
      border: `1px solid ${cs.border}`,
      borderRadius: 20,
      color: cs.text,
      ...style,
    }}>
      {typeof children === "function" ? children(cs.text, cs.textSecondary) : children}
    </div>
  );
};

const ImagePlaceholder = ({ label = "Image placeholder", style = {} }) => (
  <div style={{
    background: `repeating-linear-gradient(45deg, ${STYLE.colors.border}, ${STYLE.colors.border} 1px, transparent 1px, transparent 16px)`,
    backgroundColor: STYLE.colors.surface,
    border: `2px dashed ${STYLE.colors.gray800}`,
    borderRadius: STYLE.radius.card,
    display: "flex", alignItems: "center", justifyContent: "center",
    ...typeStyle("paragraph3", STYLE.colors.gray600),
    ...style,
  }}>{label}</div>
);

// ═══════════════════════════════════════════════════════════════════
// SLIDE LAYOUTS
// Rendered at true 1920×1080 pixel size
// ═══════════════════════════════════════════════════════════════════

const SlideHero = () => (
  <div style={{ ...slidePadding, height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
    <div style={typeStyle("pageCaption", STYLE.colors.gray700)}>Case study</div>

    <div style={{ marginTop: "auto" }}>
      <h1 style={typeStyle("title1")}>Transforming<br/>Customer Support</h1>
      <p style={{ ...typeStyle("title2", STYLE.colors.gray500), marginTop: 24 }}>Context-aware self-help platform at Zalando</p>
    </div>

    {/* Metrics 2x2 grid */}
    <div style={{
      display: "grid", gridTemplateColumns: "1fr 1fr", marginTop: 56,
      border: `1px solid ${STYLE.colors.border}`, borderRadius: STYLE.radius.card, overflow: "hidden",
      width: "fit-content",
    }}>
      {[
        ["42% fewer inquiries", "28% CSAT lift"],
        ["€3.2M saved", "67% faster resolution"],
      ].map((row, ri) => row.map((cell, ci) => (
        <div key={`${ri}-${ci}`} style={{
          ...typeStyle("title3", STYLE.colors.gray300),
          padding: "28px 56px",
          borderRight: ci === 0 ? `1px solid ${STYLE.colors.border}` : "none",
          borderTop: ri === 1 ? `1px solid ${STYLE.colors.border}` : "none",
        }}>{cell}</div>
      )))}
    </div>

    <div style={{ marginTop: "auto" }}>
      <span style={typeStyle("pageFooter", STYLE.colors.accent)}>
        Otobong Okoko &nbsp;·&nbsp; Senior Product Designer &nbsp;·&nbsp; Zalando SE
      </span>
    </div>
  </div>
);

const SlideAbout = () => (
  <div style={{ ...slidePadding, height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
    <div style={typeStyle("pageCaption", STYLE.colors.gray700)}>About the project</div>
    <h2 style={{ ...typeStyle("header1"), marginTop: STYLE.spacing.sectionGap }}>
      Redesigning self-service for<br/>Europe's largest fashion platform
    </h2>

    {/* Bento grid */}
    <div style={{
      display: "grid",
      gridTemplateColumns: "0.8fr 0.8fr 1fr 1fr",
      gridTemplateRows: "1fr 1fr 1fr",
      gap: 16,
      marginTop: STYLE.spacing.titleGap,
      flex: 1,
      minHeight: 0,
    }}>
      {/* Zalando card: spans 2 cols, 2 rows */}
      <BentoCard variant="gradientWhite" style={{
        gridColumn: "1 / 3", gridRow: "1 / 3",
        padding: 48, borderRadius: 20,
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
      }}>
        {(text, textSecondary) => (
          <>
            <div style={{ marginBottom: 20 }}>
              <span style={{ ...typeStyle("header2"), textTransform: "uppercase", color: text }}>What is Zalando</span>
            </div>
            <p style={{ ...typeStyle("paragraph1"), color: textSecondary }}>
              Europe's leading online fashion and lifestyle platform, operating across 25 markets with over 50 million active customers. Customer Care handles millions of contacts annually.
            </p>
          </>
        )}
      </BentoCard>

      {/* Platform card */}
      <Card style={{
        gridColumn: "3 / 4", gridRow: "1 / 2",
        padding: 36, borderRadius: 20,
        display: "flex", flexDirection: "column", justifyContent: "space-between",
      }}>
        <span style={typeStyle("tag", STYLE.colors.gray600)}>Platform</span>
        <div>
          <div style={typeStyle("header2")}>Web-based FAQ</div>
          <div style={{ ...typeStyle("paragraph3", STYLE.colors.gray500), marginTop: 6 }}>Embedded within existing help pages</div>
        </div>
      </Card>

      {/* Markets card */}
      <Card style={{
        gridColumn: "4 / 5", gridRow: "1 / 2",
        padding: 36, borderRadius: 20,
        display: "flex", flexDirection: "column", justifyContent: "space-between",
      }}>
        <span style={typeStyle("tag", STYLE.colors.gray600)}>Markets</span>
        <div>
          <div style={typeStyle("header2")}>25 European</div>
          <div style={{ ...typeStyle("paragraph3", STYLE.colors.gray500), marginTop: 6 }}>Excluding cash-on-delivery regions</div>
        </div>
      </Card>

      {/* Focus card */}
      <Card style={{
        gridColumn: "3 / 4", gridRow: "2 / 3",
        padding: 36, borderRadius: 20,
        display: "flex", flexDirection: "column", justifyContent: "space-between",
      }}>
        <span style={typeStyle("tag", STYLE.colors.gray600)}>Focus</span>
        <div>
          <div style={typeStyle("header2")}>Delivery, returns, refunds</div>
          <div style={{ ...typeStyle("paragraph3", STYLE.colors.gray500), marginTop: 6 }}>Highest-volume contact categories</div>
        </div>
      </Card>

      {/* Duration card */}
      <Card style={{
        gridColumn: "4 / 5", gridRow: "2 / 3",
        padding: 36, borderRadius: 20,
        display: "flex", flexDirection: "column", justifyContent: "space-between",
      }}>
        <span style={typeStyle("tag", STYLE.colors.gray600)}>Duration</span>
        <div>
          <div style={typeStyle("header2")}>11 months</div>
          <div style={{ ...typeStyle("paragraph3", STYLE.colors.gray500), marginTop: 6 }}>100% dedicated, sole designer</div>
        </div>
      </Card>

      {/* The project card: spans full bottom row */}
      <BentoCard variant="orangeGradient" style={{
        gridColumn: "1 / 5", gridRow: "3 / 4",
        padding: "36px 48px", borderRadius: 20,
        display: "flex", alignItems: "center", gap: 48,
      }}>
        {(text, textSecondary) => (
          <>
            <div style={{ flexShrink: 0 }}>
              <span style={{ ...typeStyle("header2"), textTransform: "uppercase", color: text }}>The project</span>
            </div>
            <div style={{ width: 1, height: 48, background: "rgba(0,0,0,0.15)", flexShrink: 0 }} />
            <p style={{ ...typeStyle("paragraph1"), color: textSecondary }}>
              A strategic initiative within Customer Care to redesign how customers self-serve for delivery, returns, and refund issues. Sponsored by the Director of Customer Care with VP-level visibility.
            </p>
          </>
        )}
      </BentoCard>
    </div>
  </div>
);

const SlideCost = () => (
  <div style={{ ...slidePadding, height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
      <span style={typeStyle("pageCaption", STYLE.colors.gray700)}>The challenge</span>
      <span style={{ ...typeStyle("pageCaption", STYLE.colors.gray800), letterSpacing: "0" }}>|</span>
      <span style={{ ...typeStyle("subCaption", STYLE.colors.gray500) }}>Context & Background</span>
    </div>
    <h2 style={{ ...typeStyle("header1"), marginTop: STYLE.spacing.sectionGap }}>The cost of failed self-service</h2>

    {/* Two-column layout: left bento 35%, right image 65% */}
    <div style={{
      display: "grid",
      gridTemplateColumns: "35fr 65fr",
      gap: 24,
      marginTop: STYLE.spacing.titleGap,
      flex: 1,
      minHeight: 0,
    }}>
      {/* Left: bento grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr auto",
        gap: 16,
      }}>
        {/* €3.5 stat card */}
        <Card style={{
          padding: 44, borderRadius: 20,
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
        }}>
          <div style={{ ...typeStyle("header3"), width: "100%" }}>€3.5</div>
          <div style={{ ...typeStyle("statLabel", STYLE.colors.gray400), marginTop: 8 }}>cost per contact</div>
          <div style={{ ...typeStyle("statLabel", STYLE.colors.gray700), marginTop: 4 }}>across email, phone, and chat</div>
        </Card>

        {/* 2M stat card */}
        <Card style={{
          padding: 44, borderRadius: 20,
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
        }}>
          <div style={{ ...typeStyle("header3"), display: "inline-block", width: "100%" }}>2M</div>
          <div style={{ ...typeStyle("statLabel", STYLE.colors.gray400), marginTop: 8 }}>repeat contacts</div>
          <div style={{ ...typeStyle("statLabel", STYLE.colors.gray700), marginTop: 4 }}>per year</div>
        </Card>

        {/* €7M emphasis bar - spans both columns */}
        <Card style={{
          gridColumn: "1 / 3",
          padding: "28px 44px", borderRadius: 20,
          display: "flex", alignItems: "center", gap: 24,
          background: `linear-gradient(90deg, ${STYLE.colors.surface} 0%, #1E1E1E 100%)`,
        }}>
          <div style={typeStyle("header3")}>€7M</div>
          <div>
            <div style={{ ...typeStyle("statLabel", STYLE.colors.gray400) }}>annual cost</div>
            <div style={{ ...typeStyle("statLabel", STYLE.colors.gray700), marginTop: 4 }}>
              CSAT: 3.1/5 &nbsp;·&nbsp; Resolution: 24hrs
            </div>
          </div>
        </Card>
      </div>

      {/* Right: image */}
      <ImagePlaceholder
        label="📷 Self-service experience visual"
        style={{ borderRadius: 20, minHeight: 0 }}
      />
    </div>
  </div>
);

const SlideWhyRepeats = () => (
  <div style={{ ...slidePadding, height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
      <span style={typeStyle("pageCaption", STYLE.colors.gray700)}>The challenge</span>
      <span style={{ ...typeStyle("pageCaption", STYLE.colors.gray800), letterSpacing: "0" }}>|</span>
      <span style={{ ...typeStyle("subCaption", STYLE.colors.gray500) }}>Context & Background</span>
    </div>
    <h2 style={{ ...typeStyle("header1"), marginTop: STYLE.spacing.sectionGap }}>Why customers contacted repeatedly</h2>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: STYLE.spacing.cardGap, marginTop: STYLE.spacing.titleGap, flex: 1, minHeight: 0 }}>
      {[
        { icon: icons.search, title: "Generic FAQ", body: "Same static page for every customer regardless of order, parcel status, or return stage" },
        { icon: icons.repeat, title: "Channel hopping", body: "Unresolved via email, try phone, then chat. Fragmented ticket histories increased workload" },
        { icon: icons.headphones, title: "Agent dependency", body: "Without personalized context, customers abandoned self-service and contacted support directly" },
      ].map((c, i) => (
        <Card key={i} style={{ padding: STYLE.spacing.cardPaddingLg, display: "flex", flexDirection: "column" }}>
          <IconBox icon={c.icon} size={STYLE.icon.sizeL} />
          <div style={{ ...typeStyle("header2"), marginTop: 24 }}>{c.title}</div>
          <p style={{ ...typeStyle("paragraph1", STYLE.colors.gray500), marginTop: 20 }}>{c.body}</p>
          <div style={{ flex: 1 }} />
          <ImagePlaceholder label={`📷 ${c.title} visual`} style={{ height: 120, marginTop: 24 }} />
        </Card>
      ))}
    </div>
  </div>
);

const SlideTopFive = () => (
  <div style={{ ...slidePadding, height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
      <span style={typeStyle("pageCaption", STYLE.colors.gray700)}>The challenge</span>
      <span style={{ ...typeStyle("pageCaption", STYLE.colors.gray800), letterSpacing: "0" }}>|</span>
      <span style={{ ...typeStyle("subCaption", STYLE.colors.gray500) }}>Problem Statement</span>
    </div>
    <h2 style={{ ...typeStyle("header1"), marginTop: STYLE.spacing.sectionGap }}>Top five reasons customers<br/>contacted support</h2>

    <div style={{ display: "flex", flexDirection: "column", gap: STYLE.spacing.rowGap, marginTop: STYLE.spacing.titleGap }}>
      {[
        { icon: icons.wallet, q: '"Where is my refund?"', desc: "No visibility into refund amount, timeline, or payment method" },
        { icon: icons.truck, q: '"Where is my package?"', desc: "Delivery status unavailable in self-service tied to their actual parcel" },
        { icon: icons.rotateCcw, q: '"How do I return this?"', desc: "Return process lacked step-by-step contextual guidance" },
        { icon: icons.activity, q: '"What is the latest status?"', desc: "Parcel tracking required contacting an agent for real-time updates" },
        { icon: icons.mapPinOff, q: '"Where do I drop this off?"', desc: "Drop-off and pickup logistics buried in generic instructions" },
      ].map((p, i) => (
        <Card key={i} style={{ padding: "22px 36px", display: "flex", alignItems: "center", gap: 28 }}>
          <IconBox icon={p.icon} />
          <div style={{ ...typeStyle("header2"), width: 420, flexShrink: 0 }}>{p.q}</div>
          <div style={typeStyle("paragraph1", STYLE.colors.gray500)}>{p.desc}</div>
        </Card>
      ))}
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════
// SLIDE 6 — Research methods
// ═══════════════════════════════════════════════════════════════════

const SlideResearch = () => (
  <div style={{ ...slidePadding, height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
      <span style={typeStyle("pageCaption", STYLE.colors.gray700)}>Research & Discovery</span>
    </div>
    <h2 style={{ ...typeStyle("header1"), marginTop: STYLE.spacing.sectionGap }}>How we built understanding</h2>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 16, marginTop: STYLE.spacing.titleGap, flex: 1, minHeight: 0 }}>
      {[
        { num: "12", label: "User interviews", desc: "Across multiple European markets, scenario-based methodology" },
        { num: "8", label: "Stakeholder interviews", desc: "Product, engineering, customer care operations leadership" },
        { num: "50K+", label: "Support transcripts", desc: "Analyzed for conversation patterns and failure points" },
      ].map((s, i) => (
        <Card key={i} style={{ padding: 44, borderRadius: 20, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
          <div style={typeStyle("header3")}>{s.num}</div>
          <div style={{ ...typeStyle("statLabel", STYLE.colors.gray400), marginTop: 8 }}>{s.label}</div>
          <div style={{ ...typeStyle("paragraph3", STYLE.colors.gray600), marginTop: 4 }}>{s.desc}</div>
        </Card>
      ))}
      <BentoCard variant="orangeGradient" style={{ gridColumn: "1 / 3", padding: 44, borderRadius: 20, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        {(text, textSecondary) => (
          <>
            <div style={{ ...typeStyle("header2"), color: text }}>First-hand testing of existing channels</div>
            <div style={{ ...typeStyle("paragraph1"), color: textSecondary, marginTop: 12 }}>
              Usability studies, A/B testing during rollout, support channel analysis to identify inquiry patterns
            </div>
          </>
        )}
      </BentoCard>
      <Card style={{ padding: 44, borderRadius: 20, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={typeStyle("tag", STYLE.colors.gray600)}>Scope</div>
        <div style={{ ...typeStyle("header2"), marginTop: 16 }}>Multi-market</div>
        <div style={{ ...typeStyle("paragraph3", STYLE.colors.gray500), marginTop: 8 }}>Regional differences in carrier infrastructure and customer behavior</div>
      </Card>
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════
// SLIDE 7 — Insight: Customers scan
// ═══════════════════════════════════════════════════════════════════

const SlideInsight1 = () => (
  <div style={{ ...slidePadding, height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
      <span style={typeStyle("pageCaption", STYLE.colors.gray700)}>Research & Discovery</span>
      <span style={{ ...typeStyle("pageCaption", STYLE.colors.gray800), letterSpacing: "0" }}>|</span>
      <span style={{ ...typeStyle("subCaption", STYLE.colors.gray500) }}>Key Insights</span>
    </div>

    <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: 1400 }}>
      <h2 style={typeStyle("title1")}>Customers scan.<br/>They don't read.</h2>
      <p style={{ ...typeStyle("paragraph1", STYLE.colors.gray500), marginTop: 40, maxWidth: 900 }}>
        Detailed FAQ pages with comprehensive information caused information overload and abandonment. Customers wanted the one piece of information relevant to their specific situation, immediately visible.
      </p>
    </div>

    <div style={{ display: "flex", gap: 32, marginTop: "auto" }}>
      <ImagePlaceholder label="📷 FAQ page heatmap / scroll depth" style={{ flex: 1, height: 200, borderRadius: 12 }} />
      <ImagePlaceholder label="📷 Before: wall of text FAQ" style={{ flex: 1, height: 200, borderRadius: 12 }} />
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════
// SLIDE 8 — Insight: Images are the primary identifier
// ═══════════════════════════════════════════════════════════════════

const SlideInsight2 = () => (
  <div style={{ ...slidePadding, height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
      <span style={typeStyle("pageCaption", STYLE.colors.gray700)}>Research & Discovery</span>
      <span style={{ ...typeStyle("pageCaption", STYLE.colors.gray800), letterSpacing: "0" }}>|</span>
      <span style={{ ...typeStyle("subCaption", STYLE.colors.gray500) }}>Key Insights</span>
    </div>
    <h2 style={{ ...typeStyle("header1"), marginTop: STYLE.spacing.sectionGap }}>Images are the primary identifier</h2>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: STYLE.spacing.titleGap, flex: 1, minHeight: 0 }}>
      {/* Before */}
      <Card style={{ padding: 48, borderRadius: 20, display: "flex", flexDirection: "column" }}>
        <span style={typeStyle("tag", STYLE.colors.gray600)}>System default</span>
        <div style={{ ...typeStyle("header2"), marginTop: 24 }}>Order IDs & reference numbers</div>
        <p style={{ ...typeStyle("paragraph1", STYLE.colors.gray500), marginTop: 16 }}>
          "ZAL-2024-8847291" means nothing to a customer with 5 active orders. They can't recall system-generated codes.
        </p>
        <div style={{ flex: 1 }} />
        <ImagePlaceholder label="📷 Order list with IDs" style={{ height: 200, marginTop: 24, borderRadius: 12 }} />
      </Card>

      {/* After */}
      <BentoCard variant="peachGradient" style={{ padding: 48, borderRadius: 20, display: "flex", flexDirection: "column" }}>
        {(text, textSecondary) => (
          <>
            <span style={{ ...typeStyle("tag"), color: textSecondary }}>Research finding</span>
            <div style={{ ...typeStyle("header2"), color: text, marginTop: 24 }}>Product images</div>
            <p style={{ ...typeStyle("paragraph1"), color: textSecondary, marginTop: 16 }}>
              Customers think in "the blue jacket" or "the running shoes." Product photos became the primary identifier; order IDs reserved for agent escalation.
            </p>
            <div style={{ flex: 1 }} />
            <ImagePlaceholder label="📷 Card with product image" style={{ height: 200, marginTop: 24, borderRadius: 12 }} />
          </>
        )}
      </BentoCard>
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════
// SLIDE 9 — Insight: Context beats comprehensiveness
// ═══════════════════════════════════════════════════════════════════

const SlideInsight3 = () => (
  <div style={{ ...slidePadding, height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
      <span style={typeStyle("pageCaption", STYLE.colors.gray700)}>Research & Discovery</span>
      <span style={{ ...typeStyle("pageCaption", STYLE.colors.gray800), letterSpacing: "0" }}>|</span>
      <span style={{ ...typeStyle("subCaption", STYLE.colors.gray500) }}>Key Insights</span>
    </div>

    <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <h2 style={typeStyle("title1")}>Context beats<br/>comprehensiveness.</h2>
      <p style={{ ...typeStyle("paragraph1", STYLE.colors.gray500), marginTop: 40, maxWidth: 1000 }}>
        The initial assumption was that customers needed more information. Research proved they needed the right information at the right moment. This shift from "comprehensive" to "contextual" became the design principle that unlocked every major outcome.
      </p>
    </div>

    <div style={{ display: "flex", gap: 24 }}>
      {[
        { label: "Repeat contacts signal system failure", desc: "2M repeat contacts weren't a customer behavior problem. They were a system design problem." },
        { label: "Customers think in journeys", desc: "Delivery, returns, and refunds are one continuous experience, not three help categories." },
      ].map((c, i) => (
        <Card key={i} style={{ flex: 1, padding: "28px 36px", borderRadius: 12 }}>
          <div style={typeStyle("header2")}>{c.label}</div>
          <div style={{ ...typeStyle("paragraph2", STYLE.colors.gray500), marginTop: 8 }}>{c.desc}</div>
        </Card>
      ))}
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════
// SLIDE 10 — Entry points discovery
// ═══════════════════════════════════════════════════════════════════

const SlideEntryPoints = () => (
  <div style={{ ...slidePadding, height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
      <span style={typeStyle("pageCaption", STYLE.colors.gray700)}>Research & Discovery</span>
      <span style={{ ...typeStyle("pageCaption", STYLE.colors.gray800), letterSpacing: "0" }}>|</span>
      <span style={{ ...typeStyle("subCaption", STYLE.colors.gray500) }}>Entry Points</span>
    </div>
    <h2 style={{ ...typeStyle("header1"), marginTop: STYLE.spacing.sectionGap }}>Four paths to self-service</h2>
    <p style={{ ...typeStyle("paragraph1", STYLE.colors.gray500), marginTop: 16, maxWidth: 1000 }}>
      The solution needed to adapt its display based on arrival context. A customer via Google search sees only relevant cards; one from the homepage sees all active cards.
    </p>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 16, marginTop: STYLE.spacing.titleGap, flex: 1, minHeight: 0 }}>
      {[
        { icon: icons.search, title: "Google search", desc: "Highest volume. Customers searched specific questions and landed on relevant FAQ sections.", tag: "Primary" },
        { icon: icons.globe, title: "Website navigation", desc: "Header/footer links to FAQ from the main site.", tag: "Secondary" },
        { icon: icons.target, title: "Account navigation", desc: "From order history, direct path to relevant help.", tag: "Secondary" },
        { icon: icons.rotateCcw, title: "Returns page", desc: "Direct access to help from within the returns flow.", tag: "Contextual" },
      ].map((ep, i) => (
        <Card key={i} style={{ padding: 36, borderRadius: 20, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <IconBox icon={ep.icon} size={STYLE.icon.sizeL} />
            <span style={typeStyle("tag", STYLE.colors.gray700)}>{ep.tag}</span>
          </div>
          <div style={{ ...typeStyle("header2"), marginTop: 24 }}>{ep.title}</div>
          <p style={{ ...typeStyle("paragraph2", STYLE.colors.gray500), marginTop: 12 }}>{ep.desc}</p>
          <div style={{ flex: 1 }} />
        </Card>
      ))}
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════
// SLIDE 11 — Guiding principles
// ═══════════════════════════════════════════════════════════════════

const SlidePrinciples = () => (
  <div style={{ ...slidePadding, height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
    <div style={typeStyle("pageCaption", STYLE.colors.gray700)}>Guiding Principles</div>
    <h2 style={{ ...typeStyle("header1"), marginTop: STYLE.spacing.sectionGap }}>Three principles guided every decision</h2>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, marginTop: STYLE.spacing.titleGap, flex: 1, minHeight: 0 }}>
      {[
        {
          num: "01", title: "Progressive disclosure over information overload",
          body: "Reveal only what matters at each step. Customers abandoned comprehensive pages but engaged with contextual cards that layered complexity: identify first, then status, then escalation.",
          evidence: "Minimal cards over detailed pages, drill-down architecture",
        },
        {
          num: "02", title: "Design for existing mental models",
          body: "Users prefer your product to work like ones they already know. Embedded inside the existing FAQ, honoring established navigation paths. Product images replaced order IDs.",
          evidence: "Jakob's Law, FAQ-embedded over standalone help center",
        },
        {
          num: "03", title: "Transparent system status builds trust",
          body: "Only communicate what you can verify. Confirmed data only: carrier-verified delivery, warehouse-scanned returns, processed refund amounts. No optimistic estimates.",
          evidence: "Nielsen's Heuristic #1, confirmed over declared data",
        },
      ].map((p, i) => (
        <Card key={i} style={{ padding: 44, borderRadius: 20, display: "flex", flexDirection: "column" }}>
          <span style={{ ...typeStyle("header3"), fontSize: 80, color: STYLE.colors.gray800 }}>{p.num}</span>
          <div style={{ ...typeStyle("header2"), marginTop: 16 }}>{p.title}</div>
          <p style={{ ...typeStyle("paragraph2", STYLE.colors.gray500), marginTop: 16 }}>{p.body}</p>
          <div style={{ flex: 1 }} />
          <div style={{ ...typeStyle("tag", STYLE.colors.accent), marginTop: 24 }}>{p.evidence}</div>
        </Card>
      ))}
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════
// SLIDE 12 — Design decisions (rejected vs chosen)
// ═══════════════════════════════════════════════════════════════════

const SlideDecisions = () => (
  <div style={{ ...slidePadding, height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
      <span style={typeStyle("pageCaption", STYLE.colors.gray700)}>Design Process</span>
      <span style={{ ...typeStyle("pageCaption", STYLE.colors.gray800), letterSpacing: "0" }}>|</span>
      <span style={{ ...typeStyle("subCaption", STYLE.colors.gray500) }}>Ideation & Exploration</span>
    </div>
    <h2 style={{ ...typeStyle("header1"), marginTop: STYLE.spacing.sectionGap }}>Three decisions shaped the direction</h2>

    <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: STYLE.spacing.titleGap, flex: 1 }}>
      {[
        { rejected: "Standalone help center", chosen: "Embedded in existing FAQ", reason: "Customers already had 4 established paths. New destination = new behavior to learn." },
        { rejected: "Comprehensive information upfront", chosen: "Progressive disclosure", reason: "Usability testing showed detailed first-screens created the same overload problem." },
        { rejected: "Order IDs as identifiers", chosen: "Product images", reason: "Customers couldn't recall system codes. They identified purchases visually." },
      ].map((d, i) => (
        <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 24px 1fr 2fr", gap: 0, alignItems: "center", flex: 1 }}>
          <Card style={{ padding: "24px 32px", borderRadius: 12, height: "100%", display: "flex", alignItems: "center" }}>
            <div>
              <span style={typeStyle("tag", STYLE.colors.gray700)}>Considered</span>
              <div style={{ ...typeStyle("header2", STYLE.colors.gray500), marginTop: 8 }}>{d.rejected}</div>
            </div>
          </Card>
          <div style={{ textAlign: "center", color: STYLE.colors.gray600, fontSize: 28 }}>→</div>
          <BentoCard variant="gradientDark" style={{ padding: "24px 32px", height: "100%", display: "flex", alignItems: "center" }}>
            {(text) => (
              <div>
                <span style={{ ...typeStyle("tag"), color: STYLE.colors.accent }}>Chosen</span>
                <div style={{ ...typeStyle("header2"), color: text, marginTop: 8 }}>{d.chosen}</div>
              </div>
            )}
          </BentoCard>
          <div style={{ paddingLeft: 32 }}>
            <p style={typeStyle("paragraph2", STYLE.colors.gray500)}>{d.reason}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════
// SLIDE 13 — Usability testing
// ═══════════════════════════════════════════════════════════════════

const SlideTesting = () => (
  <div style={{ ...slidePadding, height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
      <span style={typeStyle("pageCaption", STYLE.colors.gray700)}>Design Process</span>
      <span style={{ ...typeStyle("pageCaption", STYLE.colors.gray800), letterSpacing: "0" }}>|</span>
      <span style={{ ...typeStyle("subCaption", STYLE.colors.gray500) }}>Prototyping & Iteration</span>
    </div>
    <h2 style={{ ...typeStyle("header1"), marginTop: STYLE.spacing.sectionGap }}>Testing and iterating</h2>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 24, marginTop: STYLE.spacing.titleGap, flex: 1, minHeight: 0 }}>
      {/* Left: big stat */}
      <Card style={{ padding: 48, borderRadius: 20, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <div style={{ ...typeStyle("header3"), fontSize: 140 }}>8<span style={{ color: STYLE.colors.gray600 }}>/12</span></div>
        <div style={{ ...typeStyle("statLabel", STYLE.colors.gray400), marginTop: 8 }}>participants completed primary flow</div>
        <div style={{ ...typeStyle("paragraph3", STYLE.colors.gray600), marginTop: 4 }}>first round success rate</div>
      </Card>

      {/* Right: findings */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {[
          { title: "Unclear escalation entry points", fix: "Increased escalation trigger visibility and positioning", status: "Fixed" },
          { title: "Confusion between return stages", fix: "Refined return status terminology and visual indicators", status: "Fixed" },
          { title: "Card layout differentiation", fix: "Returns: vertical staged flow. Refunds: horizontal cards. Emerged from testing, not upfront design.", status: "Insight" },
        ].map((f, i) => (
          <Card key={i} style={{ padding: "28px 36px", borderRadius: 12, flex: 1, display: "flex", alignItems: "center", gap: 24 }}>
            <div style={{ flex: 1 }}>
              <div style={typeStyle("header2")}>{f.title}</div>
              <p style={{ ...typeStyle("paragraph2", STYLE.colors.gray500), marginTop: 8 }}>{f.fix}</p>
            </div>
            <span style={{ ...typeStyle("tag", f.status === "Insight" ? STYLE.colors.accent : STYLE.colors.gray500), flexShrink: 0 }}>{f.status}</span>
          </Card>
        ))}
        <ImagePlaceholder label="📷 Card layout iterations: V1 → V2 → Final" style={{ height: 180, borderRadius: 12 }} />
      </div>
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════
// SLIDE 14 — Stakeholder navigation
// ═══════════════════════════════════════════════════════════════════

const SlideStakeholders = () => (
  <div style={{ ...slidePadding, height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
      <span style={typeStyle("pageCaption", STYLE.colors.gray700)}>Design Process</span>
      <span style={{ ...typeStyle("pageCaption", STYLE.colors.gray800), letterSpacing: "0" }}>|</span>
      <span style={{ ...typeStyle("subCaption", STYLE.colors.gray500) }}>Stakeholder Navigation</span>
    </div>
    <h2 style={{ ...typeStyle("header1"), marginTop: STYLE.spacing.sectionGap }}>Navigating organizational complexity</h2>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: STYLE.spacing.titleGap, flex: 1, minHeight: 0 }}>
      <Card style={{ padding: 48, borderRadius: 20, display: "flex", flexDirection: "column" }}>
        <span style={typeStyle("tag", STYLE.colors.accent)}>Challenge</span>
        <div style={{ ...typeStyle("header2"), marginTop: 20 }}>FAQ redesign pushback</div>
        <p style={{ ...typeStyle("paragraph1", STYLE.colors.gray500), marginTop: 16 }}>
          A proposed FAQ redesign faced pushback from teams who saw it as scope creep beyond the self-help mandate.
        </p>
        <div style={{ flex: 1 }} />
        <BentoCard variant="gradientDark" style={{ padding: 24, marginTop: 24 }}>
          {(text, textSecondary) => (
            <>
              <div style={{ ...typeStyle("tag"), color: textSecondary }}>Resolution</div>
              <div style={{ ...typeStyle("paragraph2"), color: text, marginTop: 8 }}>
                Phased strategy: embed contextual cards first (core project), evolve FAQ in subsequent phases. Preserved momentum while acknowledging the broader opportunity.
              </div>
            </>
          )}
        </BentoCard>
      </Card>

      <Card style={{ padding: 48, borderRadius: 20, display: "flex", flexDirection: "column" }}>
        <span style={typeStyle("tag", STYLE.colors.accent)}>Collaboration</span>
        <div style={{ ...typeStyle("header2"), marginTop: 20 }}>Carrier API investigation</div>
        <p style={{ ...typeStyle("paragraph1", STYLE.colors.gray500), marginTop: 16 }}>
          Carrier data was fragmented across European markets: different data structures, status codes, update frequencies.
        </p>
        <div style={{ flex: 1 }} />
        <BentoCard variant="gradientDark" style={{ padding: 24, marginTop: 24 }}>
          {(text, textSecondary) => (
            <>
              <div style={{ ...typeStyle("tag"), color: textSecondary }}>Outcome</div>
              <div style={{ ...typeStyle("paragraph2"), color: text, marginTop: 8 }}>
                Partnered with backend engineers market by market. Revealed more data was available than assumed. The carrier data map became a resource for other initiatives.
              </div>
            </>
          )}
        </BentoCard>
      </Card>
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════
// SLIDE 15 — System architecture
// ═══════════════════════════════════════════════════════════════════

const SlideArchitecture = () => (
  <div style={{ ...slidePadding, height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
      <span style={typeStyle("pageCaption", STYLE.colors.gray700)}>Solution</span>
      <span style={{ ...typeStyle("pageCaption", STYLE.colors.gray800), letterSpacing: "0" }}>|</span>
      <span style={{ ...typeStyle("subCaption", STYLE.colors.gray500) }}>System Architecture</span>
    </div>
    <h2 style={{ ...typeStyle("header1"), marginTop: STYLE.spacing.sectionGap }}>How the system works</h2>
    <p style={{ ...typeStyle("paragraph1", STYLE.colors.gray500), marginTop: 16, maxWidth: 1200 }}>
      The solution identifies authenticated customers through API integration, pulling order and parcel data from their profile. Based on journey stage, it surfaces relevant contextual information driven by real-time data.
    </p>

    {/* Flow steps */}
    <div style={{ display: "flex", gap: 12, marginTop: STYLE.spacing.titleGap, alignItems: "stretch" }}>
      {[
        { step: "Entry", desc: "4 paths adapt display based on arrival context" },
        { step: "Identify", desc: "Product images for instant visual recognition" },
        { step: "Context", desc: "Real-time data from carrier APIs, warehouse, payments" },
        { step: "Resolve", desc: "Tailored flow per journey: delivery, returns, refund" },
        { step: "Escalate", desc: "Full context attached, timeline confirmed" },
      ].map((s, i) => (
        <div key={i} style={{ display: "flex", alignItems: "stretch", gap: 12, flex: 1 }}>
          <BentoCard variant={i === 0 ? "orangeGradient" : "gradientDark"} style={{
            padding: 28, flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between",
          }}>
            {(text, textSecondary) => (
              <>
                <span style={{ ...typeStyle("tag"), color: textSecondary }}>{String(i + 1).padStart(2, "0")}</span>
                <div style={{ marginTop: "auto" }}>
                  <div style={{ ...typeStyle("header2"), color: text }}>{s.step}</div>
                  <div style={{ ...typeStyle("paragraph3"), color: textSecondary, marginTop: 8 }}>{s.desc}</div>
                </div>
              </>
            )}
          </BentoCard>
          {i < 4 && <div style={{ color: STYLE.colors.gray700, display: "flex", alignItems: "center", fontSize: 24 }}>→</div>}
        </div>
      ))}
    </div>

    <ImagePlaceholder label="📷 System architecture flow diagram" style={{ flex: 1, minHeight: 0, marginTop: 24, borderRadius: 12 }} />
  </div>
);

// ═══════════════════════════════════════════════════════════════════
// SLIDE 16 — Solution: Identification
// ═══════════════════════════════════════════════════════════════════

const SlideIdentification = () => (
  <div style={{ ...slidePadding, height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
      <span style={typeStyle("pageCaption", STYLE.colors.gray700)}>Solution</span>
      <span style={{ ...typeStyle("pageCaption", STYLE.colors.gray800), letterSpacing: "0" }}>|</span>
      <span style={{ ...typeStyle("subCaption", STYLE.colors.gray500) }}>Core Experience</span>
    </div>
    <h2 style={{ ...typeStyle("header1"), marginTop: STYLE.spacing.sectionGap }}>Entry-point-adaptive display</h2>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: STYLE.spacing.titleGap, flex: 1, minHeight: 0 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Card style={{ padding: 36, borderRadius: 20, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={typeStyle("header2")}>Via Google search</div>
          <p style={{ ...typeStyle("paragraph1", STYLE.colors.gray500), marginTop: 12 }}>
            Land on specific FAQ section. See only contextual cards related to that query. Immediate relevance.
          </p>
        </Card>
        <Card style={{ padding: 36, borderRadius: 20, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={typeStyle("header2")}>Via website, account, or returns</div>
          <p style={{ ...typeStyle("paragraph1", STYLE.colors.gray500), marginTop: 12 }}>
            See FAQ homepage with all active cards displayed. Product images for instant visual recognition across multiple orders.
          </p>
        </Card>
      </div>
      <ImagePlaceholder label="📷 FAQ homepage with contextual cards (annotated)" style={{ borderRadius: 20, minHeight: 0 }} />
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════
// SLIDE 17 — Resolution paths (Delivery, Returns, Refund)
// ═══════════════════════════════════════════════════════════════════

const SlideFlows = () => (
  <div style={{ ...slidePadding, height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
      <span style={typeStyle("pageCaption", STYLE.colors.gray700)}>Solution</span>
      <span style={{ ...typeStyle("pageCaption", STYLE.colors.gray800), letterSpacing: "0" }}>|</span>
      <span style={{ ...typeStyle("subCaption", STYLE.colors.gray500) }}>Resolution Paths</span>
    </div>
    <h2 style={{ ...typeStyle("header1"), marginTop: STYLE.spacing.sectionGap }}>Tailored flow per journey type</h2>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, marginTop: STYLE.spacing.titleGap, flex: 1, minHeight: 0 }}>
      {[
        {
          icon: icons.truck, title: "Delivery", variant: "gradientDark",
          items: ["Purchase date & promised delivery", "Current shipping status", "Delivery details", "Escalate if delayed/missing"],
          note: "Progressive: status at a glance, drill down for details",
        },
        {
          icon: icons.rotateCcw, title: "Returns", variant: "orangeGradient",
          items: ["Drop-off confirmation", "Courier pickup", "Warehouse arrival", "Issue resolution"],
          note: "Staged vertical flow. Confirmed data only (carrier/warehouse scan)",
        },
        {
          icon: icons.wallet, title: "Refund", variant: "gradientDark",
          items: ["Refund amount", "Expected timeline", "Payment method", "Flag discrepancies"],
          note: "Horizontal cards. Static info with escalation triggers",
        },
      ].map((f, i) => (
        <BentoCard key={i} variant={f.variant} style={{ padding: 44, display: "flex", flexDirection: "column" }}>
          {(text, textSecondary) => (
            <>
              <div style={{ color: textSecondary }}><IconBox icon={f.icon} size={STYLE.icon.sizeL} /></div>
              <div style={{ ...typeStyle("header2"), color: text, marginTop: 20 }}>{f.title}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 24 }}>
                {f.items.map((item, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 28, height: 28, borderRadius: 14, border: `1px solid ${textSecondary}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ ...typeStyle("tag"), color: textSecondary, fontSize: 12 }}>{j + 1}</span>
                    </div>
                    <span style={{ ...typeStyle("paragraph2"), color: text }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ flex: 1 }} />
              <div style={{ ...typeStyle("paragraph3"), color: textSecondary, marginTop: 24, borderTop: `1px solid ${textSecondary}33`, paddingTop: 16 }}>
                {f.note}
              </div>
            </>
          )}
        </BentoCard>
      ))}
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════
// SLIDE 18 — Escalation & edge cases
// ═══════════════════════════════════════════════════════════════════

const SlideEscalation = () => (
  <div style={{ ...slidePadding, height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
      <span style={typeStyle("pageCaption", STYLE.colors.gray700)}>Solution</span>
      <span style={{ ...typeStyle("pageCaption", STYLE.colors.gray800), letterSpacing: "0" }}>|</span>
      <span style={{ ...typeStyle("subCaption", STYLE.colors.gray500) }}>Escalation & Edge Cases</span>
    </div>
    <h2 style={{ ...typeStyle("header1"), marginTop: STYLE.spacing.sectionGap }}>When self-service isn't enough</h2>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: STYLE.spacing.titleGap, flex: 1, minHeight: 0 }}>
      <Card style={{ padding: 44, borderRadius: 20, display: "flex", flexDirection: "column" }}>
        <div style={typeStyle("header2")}>Contextual escalation</div>
        <p style={{ ...typeStyle("paragraph1", STYLE.colors.gray500), marginTop: 16 }}>
          Support ticket created with full context already attached: order details, parcel status, customer actions taken. Agents follow up with case context in hand.
        </p>
        <div style={{ flex: 1 }} />
        <div style={{ display: "flex", gap: 16, marginTop: 24 }}>
          {["Review timeline shown", "Email confirmation", "24hr agent follow-up"].map((item, i) => (
            <div key={i} style={{ ...typeStyle("tag", STYLE.colors.gray500), padding: "8px 16px", border: `1px solid ${STYLE.colors.border}`, borderRadius: 8 }}>{item}</div>
          ))}
        </div>
      </Card>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <Card style={{ padding: 36, borderRadius: 20, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <span style={typeStyle("tag", STYLE.colors.accent)}>Edge case</span>
          <div style={{ ...typeStyle("header2"), marginTop: 12 }}>Duplicate escalation detection</div>
          <p style={{ ...typeStyle("paragraph2", STYLE.colors.gray500), marginTop: 12 }}>
            Recognizes existing cases for the same issue. Shows reassurance messaging: case acknowledged, status displayed, timeline confirmed. No silent blocking.
          </p>
        </Card>
        <Card style={{ padding: 36, borderRadius: 20, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <span style={typeStyle("tag", STYLE.colors.gray700)}>Graceful fallback</span>
          <div style={{ ...typeStyle("header2"), marginTop: 12 }}>Empty states</div>
          <p style={{ ...typeStyle("paragraph2", STYLE.colors.gray500), marginTop: 12 }}>
            No active orders, returns, or refunds? Gracefully falls back to standard FAQ content rather than showing empty or confusing interface.
          </p>
        </Card>
      </div>
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════
// SLIDE 19 — Before / After transformation
// ═══════════════════════════════════════════════════════════════════

const SlideBeforeAfter = () => (
  <div style={{ ...slidePadding, height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
      <span style={typeStyle("pageCaption", STYLE.colors.gray700)}>Solution</span>
      <span style={{ ...typeStyle("pageCaption", STYLE.colors.gray800), letterSpacing: "0" }}>|</span>
      <span style={{ ...typeStyle("subCaption", STYLE.colors.gray500) }}>Transformation</span>
    </div>
    <h2 style={{ ...typeStyle("header1"), marginTop: STYLE.spacing.sectionGap }}>From generic to contextual</h2>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 80px 1fr", gap: 0, marginTop: STYLE.spacing.titleGap, flex: 1, minHeight: 0, alignItems: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, height: "100%" }}>
        <span style={typeStyle("tag", STYLE.colors.gray600)}>Before</span>
        <ImagePlaceholder label="📷 Old generic FAQ page" style={{ flex: 1, borderRadius: 20 }} />
        <div style={{ ...typeStyle("paragraph2", STYLE.colors.gray600) }}>
          Same static page for every customer. Text-heavy, no personalization, no real-time data.
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", color: STYLE.colors.accent, fontSize: 48 }}>→</div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16, height: "100%" }}>
        <span style={typeStyle("tag", STYLE.colors.accent)}>After</span>
        <ImagePlaceholder label="📷 New contextual self-help with cards" style={{ flex: 1, borderRadius: 20 }} />
        <div style={{ ...typeStyle("paragraph2", STYLE.colors.gray400) }}>
          Personalized contextual cards. Product images, real-time status, entry-point-adaptive display.
        </div>
      </div>
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════
// SLIDE 20 — Results: Customer impact
// ═══════════════════════════════════════════════════════════════════

const SlideResultsCustomer = () => (
  <div style={{ ...slidePadding, height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
    <div style={typeStyle("pageCaption", STYLE.colors.gray700)}>Results & Impact</div>
    <h2 style={{ ...typeStyle("header1"), marginTop: STYLE.spacing.sectionGap }}>Customer impact</h2>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 16, marginTop: STYLE.spacing.titleGap, flex: 1, minHeight: 0 }}>
      {[
        { num: "42%", label: "reduction in yearly inquiries", desc: "Across delivery and returns categories" },
        { num: "33%", label: "fewer returns inquiries", desc: "Exceeded 25% target set at kickoff" },
        { num: "28%", label: "CSAT improvement", desc: "3.1 → 4.2 out of 5" },
        { num: "67%", label: "faster resolution", desc: "24 hours → under 3 hours" },
      ].map((m, i) => (
        <BentoCard key={i} variant={i === 0 ? "orangeGradient" : "gradientDark"} style={{
          padding: 44, borderRadius: 20, display: "flex", flexDirection: "column", justifyContent: "flex-end",
        }}>
          {(text, textSecondary) => (
            <>
              <div style={{ ...typeStyle("header3"), color: text }}>{m.num}</div>
              <div style={{ ...typeStyle("statLabel"), color: text, marginTop: 8 }}>{m.label}</div>
              <div style={{ ...typeStyle("paragraph3"), color: textSecondary, marginTop: 4 }}>{m.desc}</div>
            </>
          )}
        </BentoCard>
      ))}
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════
// SLIDE 21 — Results: Business impact
// ═══════════════════════════════════════════════════════════════════

const SlideResultsBusiness = () => (
  <div style={{ ...slidePadding, height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
    <div style={typeStyle("pageCaption", STYLE.colors.gray700)}>Results & Impact</div>
    <h2 style={{ ...typeStyle("header1"), marginTop: STYLE.spacing.sectionGap }}>Business results</h2>

    <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 16, marginTop: STYLE.spacing.titleGap, flex: 1, minHeight: 0 }}>
      <BentoCard variant="peachGradient" style={{ padding: 48, borderRadius: 20, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
        {(text, textSecondary) => (
          <>
            <div style={{ ...typeStyle("header3"), color: text }}>€3.2M</div>
            <div style={{ ...typeStyle("statLabel"), color: text, marginTop: 8 }}>annual cost savings</div>
            <div style={{ ...typeStyle("paragraph2"), color: textSecondary, marginTop: 8 }}>
              ~900,000 repeat contacts eliminated per year
            </div>
          </>
        )}
      </BentoCard>
      <Card style={{ padding: 44, borderRadius: 20, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
        <div style={typeStyle("header3")}>52%</div>
        <div style={{ ...typeStyle("statLabel", STYLE.colors.gray400), marginTop: 8 }}>agent productivity increase</div>
        <div style={{ ...typeStyle("paragraph3", STYLE.colors.gray600), marginTop: 4 }}>Shifted to complex interactions</div>
      </Card>
      <Card style={{ padding: 44, borderRadius: 20, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
        <div style={typeStyle("header3")}>8%</div>
        <div style={{ ...typeStyle("statLabel", STYLE.colors.gray400), marginTop: 8 }}>automation rate increase</div>
        <div style={{ ...typeStyle("paragraph3", STYLE.colors.gray600), marginTop: 4 }}>Intelligent routing of routine inquiries</div>
      </Card>
    </div>

    <Card style={{ padding: "24px 36px", borderRadius: 12, marginTop: 16 }}>
      <p style={typeStyle("paragraph2", STYLE.colors.gray500)}>
        Results shared with Director and VP of Customer Care. Solution influenced Zalando's broader self-service and automation strategy. Confirmed carrier data approach became a reference model.
      </p>
    </Card>
  </div>
);

// ═══════════════════════════════════════════════════════════════════
// SLIDE 22 — Before → After metrics comparison
// ═══════════════════════════════════════════════════════════════════

const SlideMetricsComparison = () => (
  <div style={{ ...slidePadding, height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
    <div style={typeStyle("pageCaption", STYLE.colors.gray700)}>Results & Impact</div>
    <h2 style={{ ...typeStyle("header1"), marginTop: STYLE.spacing.sectionGap }}>The transformation in numbers</h2>

    <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: STYLE.spacing.titleGap, flex: 1 }}>
      {[
        { metric: "Resolution time", before: "24 hours", after: "Under 3 hours", change: "67% faster" },
        { metric: "Customer satisfaction", before: "3.1 / 5", after: "4.2 / 5", change: "28% improvement" },
        { metric: "Repeat contacts", before: "2M per year", after: "1.1M per year", change: "45% reduction" },
        { metric: "Annual cost", before: "€7M", after: "€3.8M", change: "€3.2M saved" },
      ].map((r, i) => (
        <div key={i} style={{ display: "grid", gridTemplateColumns: "200px 1fr 80px 1fr 200px", gap: 0, alignItems: "center", flex: 1 }}>
          <div style={typeStyle("header2")}>{r.metric}</div>
          <Card style={{ padding: "20px 28px", borderRadius: 12, textAlign: "center" }}>
            <div style={typeStyle("emphasis", STYLE.colors.gray600)}>{r.before}</div>
          </Card>
          <div style={{ textAlign: "center", color: STYLE.colors.gray600, fontSize: 28 }}>→</div>
          <BentoCard variant="gradientDark" style={{ padding: "20px 28px", textAlign: "center" }}>
            {(text) => <div style={{ ...typeStyle("emphasis"), color: text }}>{r.after}</div>}
          </BentoCard>
          <div style={{ ...typeStyle("tag", STYLE.colors.accent), textAlign: "right" }}>{r.change}</div>
        </div>
      ))}
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════
// SLIDE 23 — Key lesson
// ═══════════════════════════════════════════════════════════════════

const SlideKeyLesson = () => (
  <div style={{ ...slidePadding, height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "center" }}>
    <div style={typeStyle("pageCaption", STYLE.colors.gray700)}>Reflection</div>

    <div style={{ marginTop: 48 }}>
      <h2 style={{ ...typeStyle("title1"), maxWidth: 1400 }}>
        <span style={{ color: STYLE.colors.gray600 }}>Comprehensive</span> →{" "}
        <span style={{ color: STYLE.colors.accent }}>Contextual</span>
      </h2>
      <p style={{ ...typeStyle("paragraph1", STYLE.colors.gray500), marginTop: 48, maxWidth: 1100 }}>
        The most important shift was moving from "comprehensive" to "contextual." The initial assumption was that customers needed more information. Research proved they needed the right information at the right moment.
      </p>
      <p style={{ ...typeStyle("paragraph1", STYLE.colors.gray500), marginTop: 24, maxWidth: 1100 }}>
        Comprehensive help pages gave customers everything. Contextual cards gave them exactly what they needed. That distinction unlocked every major outcome.
      </p>
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════
// SLIDE 24 — Closing / Reflection
// ═══════════════════════════════════════════════════════════════════

const SlideClosing = () => (
  <div style={{ ...slidePadding, height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
    <div style={typeStyle("pageCaption", STYLE.colors.gray700)}>Reflection</div>
    <h2 style={{ ...typeStyle("header1"), marginTop: STYLE.spacing.sectionGap }}>What I would do differently</h2>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, marginTop: STYLE.spacing.titleGap, flex: 1, minHeight: 0 }}>
      {[
        {
          title: "Push for technical discovery earlier",
          body: "The carrier API investigation happened mid-project. Starting in the first weeks would have surfaced data availability and constraints sooner.",
        },
        {
          title: "Invest in content strategy from day one",
          body: "Content design became critical for card labels, status descriptions, and escalation messaging. Earlier involvement would have reduced iteration cycles.",
        },
        {
          title: "Establish unified architecture first",
          body: "The pivot from combined dashboard to connected journey model was driven by API constraints found during implementation. Mapping constraints upfront would have reduced rework.",
        },
      ].map((t, i) => (
        <Card key={i} style={{ padding: 44, borderRadius: 20, display: "flex", flexDirection: "column" }}>
          <span style={{ ...typeStyle("header3"), fontSize: 80, color: STYLE.colors.gray800 }}>{String(i + 1).padStart(2, "0")}</span>
          <div style={{ ...typeStyle("header2"), marginTop: 16 }}>{t.title}</div>
          <p style={{ ...typeStyle("paragraph2", STYLE.colors.gray500), marginTop: 16 }}>{t.body}</p>
          <div style={{ flex: 1 }} />
        </Card>
      ))}
    </div>

    <div style={{ marginTop: "auto", paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
      <div>
        <span style={typeStyle("pageFooter", STYLE.colors.accent)}>Otobong Okoko</span>
        <div style={{ ...typeStyle("paragraph2", STYLE.colors.gray600), marginTop: 4 }}>Senior Product Designer &nbsp;·&nbsp; Designer Who Codes</div>
      </div>
      <div style={{ ...typeStyle("paragraph2", STYLE.colors.gray600), textAlign: "right" }}>
        otobong.com
      </div>
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════
// SLIDE DATA
// ═══════════════════════════════════════════════════════════════════

const slides = [
  { id: 0, component: SlideHero, title: "Hero", notes: "Open with the headline and let the metrics speak. Pause on each metric briefly.\n\n42% fewer inquiries, 28% CSAT lift, €3.2M saved, 67% faster resolution.\n\nThese are the outcomes. The rest of the presentation explains how we got there." },
  { id: 1, component: SlideAbout, title: "About the project", notes: "Zalando is Europe's largest online fashion platform with 50M+ active customers across 25 markets.\n\nThis was an 11-month strategic initiative to redesign self-service for delivery, returns, and refund issues. Sponsored by the Director of Customer Care with VP-level visibility. I was the sole designer, 100% dedicated." },
  { id: 2, component: SlideCost, title: "The cost of failed self-service", notes: "Every customer contact cost €3.5 across email, phone, and chat. There were 2 million repeat contacts per year.\n\nThat's €7 million annually in avoidable support costs. CSAT was 3.1/5 and average resolution took 24 hours." },
  { id: 3, component: SlideWhyRepeats, title: "Why customers contacted repeatedly", notes: "Three root causes drove repeat contacts:\n\n1. Generic FAQ: same static page regardless of customer context\n2. Channel hopping: unresolved in one channel, try another\n3. Agent dependency: self-service trained customers to bypass it" },
  { id: 4, component: SlideTopFive, title: "Top five reasons", notes: "Five questions dominated support volume: Where is my refund? Where is my package? How do I return this? What is the latest status? Where do I drop this off?\n\nEvery one pointed to the same root issue: zero awareness of the customer's actual situation." },
  { id: 5, component: SlideResearch, title: "Research methods", notes: "I conducted 12 user interviews across multiple European markets and 8 stakeholder interviews spanning product, engineering, and customer care leadership.\n\nWe analyzed 50,000+ support transcripts for conversation patterns and failure points. The research also included first-hand testing of existing channels, usability studies, and A/B testing during rollout." },
  { id: 6, component: SlideInsight1, title: "Customers scan, they don't read", notes: "This was the foundational insight. Detailed FAQ pages caused information overload and abandonment. Customers weren't looking for thorough documentation. They wanted the one piece of information relevant to their specific situation.\n\nThis directly informed the move to contextual cards over comprehensive pages." },
  { id: 7, component: SlideInsight2, title: "Images are the primary identifier", notes: "When managing multiple parcels, customers recognized products by their photos, not by order numbers or reference IDs. This fundamentally changed the identification layer of the design.\n\nOrder IDs only became relevant during escalation, when agents needed them for ticket processing." },
  { id: 8, component: SlideInsight3, title: "Context beats comprehensiveness", notes: "The initial assumption was that customers needed more information. Research proved they needed the right information at the right moment.\n\nTwo supporting insights: repeat contacts signaled system failure, not customer behavior problems, and customers experienced delivery-returns-refund as one continuous journey." },
  { id: 9, component: SlideEntryPoints, title: "Four entry points", notes: "Research revealed four distinct paths to the FAQ: Google search (highest volume), website navigation, account navigation, and the returns page.\n\nThis was critical because it meant the solution needed to adapt its display based on arrival context." },
  { id: 10, component: SlidePrinciples, title: "Guiding principles", notes: "Three design principles emerged from research:\n\n1. Progressive disclosure: reveal only what matters at each step\n2. Design for existing mental models (Jakob's Law): embed in existing FAQ, use product images\n3. Transparent system status (Nielsen's Heuristic #1): only show confirmed, verified data" },
  { id: 11, component: SlideDecisions, title: "Design decisions", notes: "Three fundamental decisions shaped the direction:\n\nEmbedded over standalone (customers already had 4 paths). Progressive disclosure over comprehensive (testing confirmed overload). Product images over order IDs (customers think visually).\n\nEach decision was validated through research, not assumption." },
  { id: 12, component: SlideTesting, title: "Usability testing", notes: "8 out of 12 participants completed the primary task flow in the first round. Key friction points: unclear escalation entry points and confusion between return stages.\n\nCard layout differentiation emerged from testing: returns needed vertical staged flows, refunds used horizontal cards. This wasn't an upfront decision." },
  { id: 13, component: SlideStakeholders, title: "Stakeholder navigation", notes: "Two key stakeholder challenges:\n\nThe FAQ redesign pushback was resolved by proposing a phased strategy: embed first, evolve later.\n\nCarrier API fragmentation was addressed by partnering with backend engineers market by market. We discovered more data was available than assumed, and the carrier data map became a resource for other teams." },
  { id: 14, component: SlideArchitecture, title: "System architecture", notes: "The system identifies authenticated customers through API integration, pulls order and parcel data, and surfaces contextual information based on journey stage.\n\nFive-step flow: Entry (4 adaptive paths) → Identify (product images) → Context (real-time carrier/warehouse/payment data) → Resolve (tailored per journey) → Escalate (full context attached)." },
  { id: 15, component: SlideIdentification, title: "Entry-point-adaptive display", notes: "Via Google search: land on specific FAQ section, see only relevant contextual cards.\n\nVia website, account, or returns page: see FAQ homepage with all active cards displayed. Product images ensure instant visual recognition across multiple active orders." },
  { id: 16, component: SlideFlows, title: "Resolution paths", notes: "Three journey types, each with tailored information architecture:\n\nDelivery: progressive disclosure from status glance to full details. Returns: staged vertical flow with confirmed data only (carrier scan, warehouse scan). Refund: horizontal cards with amount, timeline, payment method." },
  { id: 17, component: SlideEscalation, title: "Escalation & edge cases", notes: "When self-service can't resolve: ticket created with full context already attached. Agent follows up within 24 hours with case context in hand.\n\nDuplicate detection shows reassurance rather than silent blocking. Empty states gracefully fall back to standard FAQ." },
  { id: 18, component: SlideBeforeAfter, title: "Before / After", notes: "The transformation from generic, text-heavy FAQ pages to personalized, contextual self-help cards.\n\nBefore: same static page for everyone. After: entry-point-adaptive display with product images, real-time status, and progressive disclosure." },
  { id: 19, component: SlideResultsCustomer, title: "Customer impact", notes: "42% reduction in overall yearly inquiries. 33% fewer returns inquiries, exceeding the 25% target.\n\n28% CSAT improvement from 3.1 to 4.2 out of 5. 67% faster resolution from 24 hours to under 3 hours. 45% reduction in repeat contacts." },
  { id: 20, component: SlideResultsBusiness, title: "Business results", notes: "€3.2M in annual cost savings from eliminating approximately 900,000 repeat contacts per year.\n\n52% increase in agent productivity as agents shifted to complex interactions. 8% automation rate increase. Results validated the strategic investment and influenced broader automation strategy." },
  { id: 21, component: SlideMetricsComparison, title: "Transformation in numbers", notes: "Resolution time: 24 hours to under 3 hours. Customer satisfaction: 3.1 to 4.2. Repeat contacts: 2M to 1.1M per year. Annual cost: €7M to €3.8M.\n\nEvery metric improved significantly, validating the contextual approach." },
  { id: 22, component: SlideKeyLesson, title: "Key lesson", notes: "The most important shift was from comprehensive to contextual. Research proved customers needed the right information at the right moment, not all information at once.\n\nThis distinction unlocked every major outcome, from the 42% inquiry reduction to the 28% CSAT improvement." },
  { id: 23, component: SlideClosing, title: "Reflection & closing", notes: "Three things I'd do differently:\n\n1. Push for technical discovery earlier (carrier API investigation happened mid-project)\n2. Invest in content strategy from day one (content design became critical)\n3. Map technical constraints before designing information architecture (the dashboard pivot was costly)\n\nThese principles are now foundational to how I approach complex service design." },
];

// ═══════════════════════════════════════════════════════════════════
// PRESENTATION ENGINE
// Normal: fixed 1920×1080, scrollable
// Present: scale-to-fit, no scroll, mobile orientation lock
// ═══════════════════════════════════════════════════════════════════

export default function PresentationApp() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPresenting, setIsPresenting] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [isMobilePortrait, setIsMobilePortrait] = useState(false);
  const [windowSize, setWindowSize] = useState({ w: window.innerWidth, h: window.innerHeight });
  const controlsTimeout = useRef(null);
  const touchStartX = useRef(null);

  const { width: BASE_W, height: BASE_H } = STYLE.canvas;

  const goNext = useCallback(() => setCurrentSlide((s) => Math.min(s + 1, slides.length - 1)), []);
  const goPrev = useCallback(() => setCurrentSlide((s) => Math.max(s - 1, 0)), []);

  // Keyboard
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); goNext(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); goPrev(); }
      if (e.key === "f" || e.key === "F") togglePresent();
      if (e.key === "n" || e.key === "N") setShowNotes((v) => !v);
      if (e.key === "Escape" && isPresenting) exitPresent();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev, isPresenting]);

  // Track window size for present mode scaling
  useEffect(() => {
    const resize = () => setWindowSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // Mobile orientation detection
  useEffect(() => {
    const check = () => {
      const isMobile = window.innerWidth < 768 || ("ontouchstart" in window);
      const isPortrait = window.innerHeight > window.innerWidth;
      setIsMobilePortrait(isMobile && isPortrait && isPresenting);
    };
    check();
    window.addEventListener("resize", check);
    window.addEventListener("orientationchange", check);
    return () => {
      window.removeEventListener("resize", check);
      window.removeEventListener("orientationchange", check);
    };
  }, [isPresenting]);

  const togglePresent = async () => {
    if (!isPresenting) {
      try { await document.documentElement.requestFullscreen?.(); } catch {}
      // Try locking orientation on mobile
      try { await screen.orientation?.lock?.("landscape"); } catch {}
      setIsPresenting(true);
      setShowNotes(false);
    } else {
      exitPresent();
    }
  };

  const exitPresent = async () => {
    try { await document.exitFullscreen?.(); } catch {}
    try { screen.orientation?.unlock?.(); } catch {}
    setIsPresenting(false);
  };

  useEffect(() => {
    const h = () => { if (!document.fullscreenElement) setIsPresenting(false); };
    document.addEventListener("fullscreenchange", h);
    return () => document.removeEventListener("fullscreenchange", h);
  }, []);

  // Touch swipe for mobile
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 60) { diff < 0 ? goNext() : goPrev(); }
    touchStartX.current = null;
  };

  const CurrentSlideComponent = slides[currentSlide].component;
  const progress = ((currentSlide + 1) / slides.length) * 100;

  const btnStyle = (active = false, disabled = false) => ({
    background: active ? STYLE.colors.surface : "none",
    border: `1px solid ${active ? STYLE.colors.gray700 : STYLE.colors.border}`,
    borderRadius: STYLE.radius.small, padding: "6px 10px",
    cursor: disabled ? "not-allowed" : "pointer",
    color: disabled ? STYLE.colors.gray800 : active ? STYLE.colors.white : STYLE.colors.gray500,
    display: "flex", alignItems: "center", gap: "6px",
    fontFamily: STYLE.fonts.body, fontSize: "12px", fontWeight: 300, transition: "all 0.15s ease",
  });

  const CONTROLS_H = 56;
  const PROGRESS_H = 3;
  const BOTTOM_H = CONTROLS_H + PROGRESS_H;

  // ─── PRESENT MODE ───
  if (isPresenting) {
    // Mobile portrait: show rotate prompt
    if (isMobilePortrait) {
      return (
        <div style={{
          width: "100vw", height: "100vh", background: "#000",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 24,
        }}>
          <div style={{ color: STYLE.colors.gray500, animation: "spin 2s ease-in-out infinite" }}>{navIcons.rotate}</div>
          <p style={{ ...typeStyle("meta", STYLE.colors.gray500), textAlign: "center", padding: "0 40px" }}>
            Rotate your device to landscape for the best viewing experience
          </p>
          <button onClick={exitPresent} style={{ ...btnStyle(), marginTop: 16, padding: "10px 20px" }}>
            Exit presentation
          </button>
          <style>{`@keyframes spin { 0%,100% { transform: rotate(0deg); } 50% { transform: rotate(-90deg); } }`}</style>
        </div>
      );
    }

    const availH = windowSize.h - BOTTOM_H;
    const fitScale = Math.min(windowSize.w / BASE_W, availH / BASE_H);

    return (
      <div style={{ width: "100vw", height: "100vh", background: "#000", display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Source+Sans+3:ital,wght@0,200;0,300;0,400;0,600;0,700;1,300;1,400&display=swap');
          * { box-sizing: border-box; margin: 0; padding: 0; }
          button:hover:not(:disabled) { filter: brightness(1.2); }
        `}</style>

        {/* Slide area: fills space above controls */}
        <div
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onClick={(e) => { const r = e.currentTarget.getBoundingClientRect(); if (e.clientX - r.left > r.width / 2) goNext(); else goPrev(); }}
          style={{
            flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
            overflow: "hidden", cursor: "pointer",
          }}
        >
          <div style={{
            width: BASE_W, height: BASE_H,
            transform: `scale(${fitScale})`,
            transformOrigin: "center center",
            background: STYLE.colors.bg,
            flexShrink: 0,
          }}>
            <CurrentSlideComponent />
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ height: PROGRESS_H, background: "rgba(255,255,255,0.1)", flexShrink: 0 }}>
          <div style={{ height: "100%", width: `${progress}%`, background: STYLE.colors.white, transition: "width 0.3s ease" }} />
        </div>

        {/* Controls: always visible at bottom */}
        <div style={{
          height: CONTROLS_H, background: "#0A0A0A", flexShrink: 0,
          display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px",
        }}>
          <span style={{ fontFamily: STYLE.fonts.heading, fontSize: 14, fontWeight: 400, color: STYLE.colors.gray500 }}>
            {currentSlide + 1} / {slides.length}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {slides.map((_, i) => (
              <button key={i} onClick={(e) => { e.stopPropagation(); setCurrentSlide(i); }} style={{
                width: i === currentSlide ? 24 : 8, height: 8, borderRadius: 4,
                background: i === currentSlide ? STYLE.colors.white : STYLE.colors.gray800,
                border: "none", cursor: "pointer", transition: "all 0.3s ease", padding: 0,
              }} />
            ))}
          </div>
          <button onClick={(e) => { e.stopPropagation(); exitPresent(); }} style={btnStyle()}>
            {navIcons.shrink}<span>Exit</span>
          </button>
        </div>
      </div>
    );
  }

  // ─── NORMAL MODE (fixed canvas, scrollable) ───
  return (
    <div style={{
      width: "100%", minHeight: "100vh", background: "#0A0A0A",
      display: "flex", flexDirection: "column",
      fontFamily: STYLE.fonts.body, userSelect: "none",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Source+Sans+3:ital,wght@0,200;0,300;0,400;0,600;0,700;1,300;1,400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        button:hover:not(:disabled) { filter: brightness(1.2); }
        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-track { background: #111; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
      `}</style>

      {/* Scrollable slide area */}
      <div style={{ flex: 1, overflow: "auto" }}>
        <div style={{
          width: BASE_W,
          height: BASE_H,
          background: STYLE.colors.bg,
          position: "relative",
          cursor: "pointer",
          margin: "0 auto",
        }}
          onClick={(e) => { const r = e.currentTarget.getBoundingClientRect(); if (e.clientX - r.left > r.width / 2) goNext(); else goPrev(); }}
        >
          <CurrentSlideComponent />
        </div>
      </div>

      {/* Notes */}
      {showNotes && (
        <div style={{ maxHeight: 240, background: "#0D0D0D", borderTop: `1px solid ${STYLE.colors.border}`, padding: "16px 32px", overflowY: "auto", flexShrink: 0 }}>
          <span style={{ fontFamily: STYLE.fonts.heading, fontSize: 12, fontWeight: 700, color: STYLE.colors.gray700, letterSpacing: "2px", textTransform: "uppercase" }}>Speaker Notes</span>
          <p style={{ fontFamily: STYLE.fonts.body, fontSize: 15, fontWeight: 300, color: STYLE.colors.gray400, lineHeight: 1.7, margin: "8px 0 0 0", whiteSpace: "pre-wrap" }}>
            {slides[currentSlide].notes}
          </p>
        </div>
      )}

      {/* Progress */}
      <div style={{ height: 3, background: STYLE.colors.border, flexShrink: 0 }}>
        <div style={{ height: "100%", width: `${progress}%`, background: STYLE.colors.white, transition: "width 0.3s ease" }} />
      </div>

      {/* Controls */}
      <div style={{
        height: 56, background: "#0A0A0A", flexShrink: 0,
        display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontFamily: STYLE.fonts.heading, fontSize: 14, fontWeight: 400, color: STYLE.colors.gray500 }}>
            {currentSlide + 1} / {slides.length}
          </span>
          <span style={{ fontFamily: STYLE.fonts.body, fontSize: 13, fontWeight: 300, color: STYLE.colors.gray700 }}>
            {slides[currentSlide].title}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {slides.map((_, i) => (
            <button key={i} onClick={(e) => { e.stopPropagation(); setCurrentSlide(i); }} style={{
              width: i === currentSlide ? 24 : 8, height: 8, borderRadius: 4,
              background: i === currentSlide ? STYLE.colors.white : STYLE.colors.gray800,
              border: "none", cursor: "pointer", transition: "all 0.3s ease", padding: 0,
            }} />
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button onClick={(e) => { e.stopPropagation(); goPrev(); }} disabled={currentSlide === 0} style={btnStyle(false, currentSlide === 0)}>{navIcons.chevLeft}</button>
          <button onClick={(e) => { e.stopPropagation(); goNext(); }} disabled={currentSlide === slides.length - 1} style={btnStyle(false, currentSlide === slides.length - 1)}>{navIcons.chevRight}</button>
          <div style={{ width: 1, height: 24, background: STYLE.colors.border, margin: "0 4px" }} />
          <button onClick={(e) => { e.stopPropagation(); setShowNotes((v) => !v); }} style={btnStyle(showNotes)}>{navIcons.notes}<span>Notes</span></button>
          <button onClick={(e) => { e.stopPropagation(); togglePresent(); }} style={btnStyle()}>{navIcons.expand}<span>Present</span></button>
        </div>
      </div>
    </div>
  );
}
