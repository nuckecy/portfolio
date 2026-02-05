# PROMPT: Build Zalando Case Study Presentation App

You are building a 24-slide interactive presentation app for a UX design portfolio case study. The case study is about a Zalando Contextual Self-Help project. Build this as a Vite + React app with inline styles (CSS-in-JS).

## Setup

Create a Vite + React project. Use these Google Fonts in index.html:
```
Oswald (weights: 300, 400, 500, 600, 700)
Source Sans 3 (weights: 200, 300, 400, 600, 700; italics: 300, 400)
```

No external UI libraries. No Tailwind. No CSS modules. Everything is inline styles driven by design tokens.

---

## DESIGN TOKENS

Create `src/styles/tokens.js` with this exact design system:

### Canvas
1920 × 1080px fixed (this is a slide deck, not a responsive page)

### Spacing
```
slide padding: top 100, right 120, bottom 100, left 120
sectionGap: 32, titleGap: 48, cardGap: 24
cardPadding: 44, cardPaddingLg: 52
inlineGap: 16, rowGap: 16
```

### Typography (15 tokens)
| Token | Size | Weight | LH | LS | Font | Transform |
|---|---|---|---|---|---|---|
| pageCaption | 24 | 700 | 1.2 | 8px | Oswald | uppercase |
| pageFooter | 24 | 600 | 1.2 | 0.5px | Source Sans 3 | — |
| title1 | 120 | 700 | 0.95 | -2px | Oswald | — |
| title2 | 42 | 300 | 1.4 | 0 | Source Sans 3 | — |
| title3 | 28 | 600 | 1.3 | 0 | Source Sans 3 | — |
| header1 | 64 | 700 | 1.05 | -1px | Oswald | — |
| header2 | 32 | 700 | 1.2 | 0 | Oswald | — |
| header3 | 160 | 700 | 1.0 | -2px | Oswald | — |
| paragraph1 | 32 | 300 | 1.6 | 0 | Source Sans 3 | — |
| paragraph2 | 24 | 300 | 1.5 | 0 | Source Sans 3 | — |
| paragraph3 | 24 | 400 | 1.4 | 0 | Source Sans 3 | — |
| statLabel | 36 | 300 | 1.2 | 0 | Source Sans 3 | — |
| emphasis | 48 | 700 | 1.2 | 0 | Oswald | — |
| tag | 20 | 700 | 1.2 | 2px | Oswald | uppercase |
| subCaption | 32 | 300 | 1.3 | 0 | Source Sans 3 | — |

Create a `typeStyle(tokenKey, colorOverride?)` helper that returns a complete inline style object from a token, defaulting color to white.

### Colors
```
bg: #111111, surface: #1A1A1A, border: #2A2A2A, borderLight: #333333
white: #FFFFFF
gray300: #BBBBBB, gray400: #AAAAAA, gray500: #999999
gray600: #777777, gray700: #666666, gray800: #444444
accent: #E8932F, accentDim: rgba(232,147,47,0.12)
```

### Card gradient variants (5 variants, all WCAG AA compliant)
| Variant | Background | Border | Text | TextSecondary |
|---|---|---|---|---|
| gradientDark | linear-gradient(160deg, #1A1A1A, #252525) | #2A2A2A | #FFFFFF | #AAAAAA |
| gradientWhite | linear-gradient(160deg, #FFFFFF, #F0F0F0) | #E0E0E0 | #111111 | #666666 |
| whiteGradient | linear-gradient(160deg, #F8F8F8, #FFFFFF) | #E8E8E8 | #111111 | #666666 |
| peachGradient | linear-gradient(160deg, #F4A574, #E8932F) | #D4823A | #1A1A1A | #4A3000 |
| orangeGradient | linear-gradient(160deg, #E8932F, #D07518) | #B86815 | #111111 | #2A1A08 |

### Radius
card: 12px, small: 6px (BentoCards use borderRadius: 20px)

### Icon sizing
standard: 44px, large: 56px

---

## PRIMITIVES

Create `src/components/primitives/index.jsx`:

### Card
Dark surface background (#1A1A1A), 1px border (#2A2A2A), borderRadius 12px. Accepts `style` override.

### BentoCard
Accepts `variant` prop (one of 5 gradient variants). Critical pattern: children can be a **function** receiving `(textColor, textSecondaryColor)` so content can use variant-aware colors:
```jsx
<BentoCard variant="peachGradient">
  {(text, textSecondary) => (
    <>
      <h3 style={{ color: text }}>Title</h3>
      <p style={{ color: textSecondary }}>Body</p>
    </>
  )}
</BentoCard>
```
Uses borderRadius: 20px.

### IconBox
Wraps SVG icons. Color: gray500. Accepts `size` prop.

### ImagePlaceholder
Diagonal stripe pattern with dashed border. Shows centered label text. Used for all image slots.

---

## ICONS

Create `src/styles/icons.jsx` with stroke-based SVGs (24×24 viewBox, 1.5px stroke).

Content icons (44px default, some 56px large): globe, target, mapPin, calendar, search, repeat, headphones, wallet, truck, rotateCcw, activity, mapPinOff.

Nav icons (20px except rotate at 48px): expand, shrink, chevLeft, chevRight, notes, rotate.

Use standard Lucide-style paths for these icons.

---

## PRESENTATION ENGINE

Create `src/hooks/usePresentation.js` with all navigation logic:
- State: currentSlide, isPresenting, showNotes, isMobilePortrait, windowSize
- Keyboard: ArrowRight/Space → next, ArrowLeft → prev, F → toggle fullscreen, N → toggle notes, Escape → exit
- Touch: Swipe left/right (60px threshold)
- Fullscreen API with orientation lock on mobile
- Mobile portrait detection → show rotate prompt
- Click navigation: left half of slide → prev, right half → next

Create `src/components/PresentationApp.jsx`:

**Normal mode:**
- Fixed 1920×1080 canvas, centered, horizontally scrollable if viewport narrower
- Click left/right half to navigate
- Collapsible notes panel below slide (max-height 240px)
- Progress bar (white on dark, 3px)
- Controls bar (56px): slide counter, 24 dot indicators (active = 24px wide white, inactive = 8px gray800), prev/next/notes/present buttons

**Present mode:**
- Fullscreen via Fullscreen API
- Scale-to-fit: `transform: scale(Math.min(vw/1920, (vh-59)/1080))`
- Controls always visible at bottom (not auto-hiding)
- Dot navigation + exit button
- Mobile portrait: show rotate device prompt

---

## SLIDE DATA

Create `src/data/slides.js` — an array of 24 objects with: id, componentName, title, section, subSection (optional), notes (speaker notes string).

---

## 24 SLIDES

Create all slide components in `src/components/slides/index.jsx`.

Every slide:
- Renders at 1920×1080 with slidePadding
- Uses height: 100%, boxSizing: border-box, display: flex, flexDirection: column
- Most slides start with a SectionLabel component: "SECTION | Sub Section" (using pageCaption + subCaption tokens with a pipe separator)

### Slide 0: Hero
- pageCaption "Case study" at top
- Title "Transforming Customer Support" (title1) bottom-anchored with marginTop: auto
- Subtitle "Context-aware self-help platform at Zalando" (title2, gray500)
- 2×2 metrics grid: "42% fewer inquiries", "28% CSAT lift", "€3.2M saved", "67% faster resolution" (title3, gray300, bordered cells)
- Footer: "Otobong Okoko · Senior Product Designer · Zalando SE" (pageFooter, accent)

### Slide 1: About the project
- Section: "About the project"
- Header: "Redesigning self-service for Europe's largest fashion platform" (header1)
- Bento grid: 4-col × 3-row (first 2 cols 0.8fr, rest 1fr)
  - Zalando card (gradientWhite, spans col 1-2, row 1-2): "What is Zalando" + description of 50M+ customers
  - Platform card (col 3, row 1): "Web-based FAQ" + "Embedded within existing help pages"
  - Markets card (col 4, row 1): "25 European" + "Excluding cash-on-delivery regions"
  - Focus card (col 3, row 2): "Delivery, returns, refunds" + "Highest-volume contact categories"
  - Duration card (col 4, row 2): "11 months" + "100% dedicated, sole designer"
  - The Project card (orangeGradient, spans col 1-4, row 3): Description of strategic initiative

### Slide 2: The cost of failed self-service
- Section: "The challenge | Context & Background"
- Header: "The cost of failed self-service" (header1)
- 35/65 split: left = bento grid with 3 stats, right = image placeholder
  - €3.5 stat card (header3 number, statLabel labels): "cost per contact / across email, phone, and chat"
  - 2M stat card: "repeat contacts / per year"
  - €7M emphasis bar (spans both cols, horizontal layout): "annual cost / CSAT: 3.1/5 · Resolution: 24hrs"

### Slide 3: Why customers contacted repeatedly
- Section: "The challenge | Context & Background"
- 3 column cards with large icons (search, repeat, headphones), titles, body text, and image placeholders

### Slide 4: Top five reasons
- Section: "The challenge | Problem Statement"
- 5 horizontal card rows, each with: icon (44px), quoted question (header2, 420px wide), description (paragraph1, gray500)
- Questions: "Where is my refund?", "Where is my package?", "How do I return this?", "What is the latest status?", "Where do I drop this off?"

### Slide 5: Research methods
- Section: "Research & Discovery"
- 3×2 bento grid: top row = 3 stat cards (12 user interviews, 8 stakeholder interviews, 50K+ transcripts), bottom left = orangeGradient spanning 2 cols (first-hand testing), bottom right = scope card

### Slide 6: Customers scan, they don't read
- Section: "Research & Discovery | Key Insights"
- Power statement: "Customers scan. They don't read." (title1, centered vertically)
- Body text about information overload
- 2 image placeholders at bottom

### Slide 7: Images are the primary identifier
- Section: "Research & Discovery | Key Insights"
- 2-column comparison: left Card "System default" (order IDs), right BentoCard peachGradient "Research finding" (product images)

### Slide 8: Context beats comprehensiveness
- Section: "Research & Discovery | Key Insights"
- Power statement: "Context beats comprehensiveness." (title1)
- 2 insight cards at bottom

### Slide 9: Four entry points
- Section: "Research & Discovery | Entry Points"
- 4-column cards: Google search (Primary), Website navigation (Secondary), Account navigation (Secondary), Returns page (Contextual)

### Slide 10: Guiding principles
- Section: "Guiding Principles"
- 3 tall cards with large numbers (01, 02, 03 in header3 at 80px, gray800), titles, body text, accent-colored evidence tags

### Slide 11: Design decisions
- Section: "Design Process | Ideation & Exploration"
- 3 rows, each: Considered card (gray) → arrow → Chosen card (gradientDark, accent tag) → reason text
- Decisions: Standalone→Embedded, Comprehensive→Progressive, Order IDs→Product images

### Slide 12: Usability testing
- Section: "Design Process | Prototyping & Iteration"
- 1:2 split: left = big stat "8/12" (header3 at 140px), right = 3 finding cards + image placeholder

### Slide 13: Stakeholder navigation
- Section: "Design Process | Stakeholder Navigation"
- 2 column cards: FAQ pushback (with nested gradientDark resolution card) + Carrier API collaboration (with nested gradientDark outcome card)

### Slide 14: System architecture
- Section: "Solution | System Architecture"
- 5-step horizontal flow: Entry (orangeGradient) → Identify → Context → Resolve → Escalate (all gradientDark except first)
- Image placeholder below

### Slide 15: Entry-point-adaptive display
- Section: "Solution | Core Experience"
- 2-column: left = 2 stacked text cards (Google search vs other paths), right = image placeholder

### Slide 16: Resolution paths
- Section: "Solution | Resolution Paths"
- 3 BentoCards: Delivery (gradientDark), Returns (orangeGradient), Refund (gradientDark)
- Each has icon, title, 4 numbered steps, and a note at bottom with a top border

### Slide 17: Escalation & edge cases
- Section: "Solution | Escalation & Edge Cases"
- 2-column: left = contextual escalation card with 3 tag pills, right = 2 stacked cards (duplicate detection + empty states)

### Slide 18: Before / After
- Section: "Solution | Transformation"
- 3-column grid (1fr 80px 1fr): before image + description, accent arrow, after image + description

### Slide 19: Customer impact
- Section: "Results & Impact"
- 2×2 grid of BentoCards: 42% (orangeGradient), 33%, 28%, 67% (all gradientDark)

### Slide 20: Business results
- Section: "Results & Impact"
- 2:1:1 grid: €3.2M (peachGradient), 52% card, 8% card + context paragraph below

### Slide 21: Transformation in numbers
- Section: "Results & Impact"
- 4 rows: metric label (header2) + before Card (emphasis, gray600) → arrow → after BentoCard (emphasis) + change tag (accent)
- Metrics: Resolution time, Customer satisfaction, Repeat contacts, Annual cost

### Slide 22: Key lesson
- Section: "Reflection"
- Power statement: "Comprehensive → Contextual" where Comprehensive is gray600 and Contextual is accent
- 2 paragraphs of reflection

### Slide 23: Reflection & closing
- Section: "Reflection"
- 3 numbered cards (01/02/03): Push for technical discovery earlier, Invest in content strategy, Establish unified architecture
- Footer: "Otobong Okoko" + "Senior Product Designer · Designer Who Codes" + "otobong.com"

---

## SPEAKER NOTES

Each slide has speaker notes. Here they are by slide id:

0: "Open with the headline and let the metrics speak. Pause on each metric briefly.\n\n42% fewer inquiries, 28% CSAT lift, €3.2M saved, 67% faster resolution.\n\nThese are the outcomes. The rest of the presentation explains how we got there."

1: "Zalando is Europe's largest online fashion platform with 50M+ active customers across 25 markets.\n\nThis was an 11-month strategic initiative to redesign self-service for delivery, returns, and refund issues. Sponsored by the Director of Customer Care with VP-level visibility. I was the sole designer, 100% dedicated."

2: "Every customer contact cost €3.5 across email, phone, and chat. There were 2 million repeat contacts per year.\n\nThat's €7 million annually in avoidable support costs. CSAT was 3.1/5 and average resolution took 24 hours."

3: "Three root causes drove repeat contacts:\n\n1. Generic FAQ: same static page regardless of customer context\n2. Channel hopping: unresolved in one channel, try another\n3. Agent dependency: self-service trained customers to bypass it"

4: "Five questions dominated support volume: Where is my refund? Where is my package? How do I return this? What is the latest status? Where do I drop this off?\n\nEvery one pointed to the same root issue: zero awareness of the customer's actual situation."

5: "I conducted 12 user interviews across multiple European markets and 8 stakeholder interviews spanning product, engineering, and customer care leadership.\n\nWe analyzed 50,000+ support transcripts for conversation patterns and failure points."

6: "This was the foundational insight. Detailed FAQ pages caused information overload and abandonment. Customers wanted the one piece of information relevant to their specific situation.\n\nThis directly informed the move to contextual cards over comprehensive pages."

7: "When managing multiple parcels, customers recognized products by their photos, not by order numbers or reference IDs. This fundamentally changed the identification layer of the design."

8: "The initial assumption was that customers needed more information. Research proved they needed the right information at the right moment.\n\nRepeat contacts signaled system failure, not customer behavior problems."

9: "Research revealed four distinct paths to the FAQ: Google search (highest volume), website navigation, account navigation, and the returns page.\n\nThe solution needed to adapt its display based on arrival context."

10: "Three design principles emerged from research:\n\n1. Progressive disclosure: reveal only what matters at each step\n2. Design for existing mental models (Jakob's Law)\n3. Transparent system status (Nielsen's Heuristic #1): only show confirmed, verified data"

11: "Three fundamental decisions shaped the direction:\n\nEmbedded over standalone. Progressive disclosure over comprehensive. Product images over order IDs.\n\nEach decision was validated through research, not assumption."

12: "8 out of 12 participants completed the primary task flow in the first round. Card layout differentiation emerged from testing: returns needed vertical staged flows, refunds used horizontal cards."

13: "FAQ redesign pushback was resolved by proposing a phased strategy: embed first, evolve later.\n\nCarrier API fragmentation was addressed by partnering with backend engineers market by market."

14: "Five-step flow: Entry → Identify → Context → Resolve → Escalate. The system identifies authenticated customers through API integration and surfaces contextual information based on journey stage."

15: "Via Google search: see only relevant contextual cards. Via other paths: see FAQ homepage with all active cards displayed."

16: "Delivery: progressive disclosure. Returns: staged vertical flow with confirmed data only. Refund: horizontal cards with escalation triggers."

17: "When self-service can't resolve: ticket created with full context attached. Duplicate detection shows reassurance. Empty states fall back to standard FAQ."

18: "Before: same static page for everyone. After: entry-point-adaptive display with product images, real-time status, and progressive disclosure."

19: "42% reduction in inquiries. 33% fewer returns inquiries (exceeded 25% target). 28% CSAT improvement. 67% faster resolution."

20: "€3.2M annual savings from eliminating ~900,000 repeat contacts. 52% agent productivity increase. Results influenced broader automation strategy."

21: "Resolution time: 24hrs → under 3hrs. CSAT: 3.1 → 4.2. Repeat contacts: 2M → 1.1M. Annual cost: €7M → €3.8M."

22: "The most important shift was from comprehensive to contextual. This distinction unlocked every major outcome."

23: "Three things I'd do differently: push for technical discovery earlier, invest in content strategy from day one, map constraints before designing IA."

---

## BUILD INSTRUCTIONS

1. Scaffold the Vite + React project
2. Create the design tokens file first
3. Create primitives (Card, BentoCard, IconBox, ImagePlaceholder)
4. Create icons
5. Create the usePresentation hook
6. Build all 24 slides with full content and layouts as described
7. Wire everything in PresentationApp.jsx
8. Test: `npm run dev` and verify all 24 slides render correctly, keyboard navigation works, present mode scales properly

Focus on pixel-perfect execution of the design tokens. The visual quality of this presentation directly impacts job interview outcomes.
