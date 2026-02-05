/**
 * Design tokens for the Zalando case study presentation.
 * All visual decisions live here. Change once, applies everywhere.
 * Canvas: 1920 × 1080 (fixed, no auto-scaling in normal view)
 */

export const STYLE = {
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
    // Page-level labels
    pageCaption:  { size: 24,  weight: 700, lineHeight: 1.2,  letterSpacing: '8px',   font: 'heading', textTransform: 'uppercase' },
    pageFooter:   { size: 24,  weight: 600, lineHeight: 1.2,  letterSpacing: '0.5px', font: 'body' },

    // Titles (hero / cover slide scale)
    title1:       { size: 120, weight: 700, lineHeight: 0.95, letterSpacing: '-2px',  font: 'heading' },
    title2:       { size: 42,  weight: 300, lineHeight: 1.4,  letterSpacing: '0',     font: 'body' },
    title3:       { size: 28,  weight: 600, lineHeight: 1.3,  letterSpacing: '0',     font: 'body' },

    // Headers (content slide headings)
    header1:      { size: 64,  weight: 700, lineHeight: 1.05, letterSpacing: '-1px',  font: 'heading' },
    header2:      { size: 32,  weight: 700, lineHeight: 1.2,  letterSpacing: '0',     font: 'heading' },
    header3:      { size: 160, weight: 700, lineHeight: 1.0,  letterSpacing: '-2px',  font: 'heading' },

    // Paragraphs (body text at different scales)
    paragraph1:   { size: 32,  weight: 300, lineHeight: 1.6,  letterSpacing: '0',     font: 'body' },
    paragraph2:   { size: 24,  weight: 300, lineHeight: 1.5,  letterSpacing: '0',     font: 'body' },
    paragraph3:   { size: 24,  weight: 400, lineHeight: 1.4,  letterSpacing: '0',     font: 'body' },

    // Specialized (data / UI elements)
    statLabel:    { size: 36,  weight: 300, lineHeight: 1.2,  letterSpacing: '0',     font: 'body' },
    emphasis:     { size: 48,  weight: 700, lineHeight: 1.2,  letterSpacing: '0',     font: 'heading' },
    tag:          { size: 20,  weight: 700, lineHeight: 1.2,  letterSpacing: '2px',   font: 'heading', textTransform: 'uppercase' },
    subCaption:   { size: 32,  weight: 300, lineHeight: 1.3,  letterSpacing: '0',     font: 'body' },
  },

  // ─── Card Gradient Variants (WCAG AA compliant) ───
  cardStyles: {
    gradientDark: {
      background: 'linear-gradient(160deg, #1A1A1A 0%, #252525 100%)',
      border: '#2A2A2A',
      text: '#FFFFFF',
      textSecondary: '#AAAAAA',
    },
    gradientWhite: {
      background: 'linear-gradient(160deg, #FFFFFF 0%, #F0F0F0 100%)',
      border: '#E0E0E0',
      text: '#111111',
      textSecondary: '#666666',
    },
    whiteGradient: {
      background: 'linear-gradient(160deg, #F8F8F8 0%, #FFFFFF 100%)',
      border: '#E8E8E8',
      text: '#111111',
      textSecondary: '#666666',
    },
    peachGradient: {
      background: 'linear-gradient(160deg, #F4A574 0%, #E8932F 100%)',
      border: '#D4823A',
      text: '#1A1A1A',
      textSecondary: '#4A3000',
    },
    orangeGradient: {
      background: 'linear-gradient(160deg, #E8932F 0%, #D07518 100%)',
      border: '#B86815',
      text: '#111111',
      textSecondary: '#2A1A08',
    },
  },

  // ─── Colors ───
  colors: {
    bg:          '#111111',
    surface:     '#1A1A1A',
    border:      '#2A2A2A',
    borderLight: '#333333',
    white:       '#FFFFFF',
    gray300:     '#BBBBBB',
    gray400:     '#AAAAAA',
    gray500:     '#999999',
    gray600:     '#777777',
    gray700:     '#666666',
    gray800:     '#444444',
    accent:      '#E8932F',
    accentDim:   'rgba(232,147,47,0.12)',
  },

  // ─── Radius ───
  radius: {
    card: '12px',
    small: '6px',
  },

  // ─── Icons ───
  icon: {
    size: 44,
    sizeL: 56,
  },
};

// ─── Style Helpers ───

export const typeStyle = (key, colorOverride) => {
  const t = STYLE.type[key];
  if (!t) {
    console.warn(`Unknown type token: ${key}`);
    return {};
  }
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

export const slidePadding = {
  paddingTop: STYLE.spacing.slide.top,
  paddingRight: STYLE.spacing.slide.right,
  paddingBottom: STYLE.spacing.slide.bottom,
  paddingLeft: STYLE.spacing.slide.left,
};
