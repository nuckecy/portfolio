# Zalando Case Study Presentation — Design Specification

> **For:** Claude Code implementation
> **Prototype reference:** `presentation-v2.jsx` (1569-line React component, working in Claude.ai artifacts)
> **Target:** Production Next.js or Vite + React app

---

## 1. Project overview

A 24-slide interactive presentation for Otobong Okoko's Zalando Contextual Self-Help case study. Dark theme, fixed 1920×1080 canvas, two viewing modes (normal + fullscreen present), speaker notes panel, keyboard/touch navigation.

### Tech requirements
- React 18+ with hooks (useState, useEffect, useCallback, useRef)
- Google Fonts: Oswald (300–700) + Source Sans 3 (200–700, italic 300/400)
- No external component libraries (custom primitives only)
- No localStorage/sessionStorage needed
- CSS-in-JS via inline styles (prototype pattern) OR extract to CSS modules/Tailwind

---

## 2. Design tokens

### 2.1 Canvas
```
width:  1920px
height: 1080px
```

### 2.2 Spacing
```
slide.top:      100px
slide.right:    120px
slide.bottom:   100px
slide.left:     120px
sectionGap:     32px
titleGap:       48px
cardGap:        24px
cardPadding:    44px
cardPaddingLg:  52px
inlineGap:      16px
rowGap:         16px
```

### 2.3 Typography system (11 tokens)

| Token | Size | Weight | Line-height | Letter-spacing | Font | Transform |
|-------|------|--------|-------------|----------------|------|-----------|
| `pageCaption` | 24px | 700 | 1.2 | 8px | Oswald | uppercase |
| `pageFooter` | 24px | 600 | 1.2 | 0.5px | Source Sans 3 | — |
| `title1` | 120px | 700 | 0.95 | -2px | Oswald | — |
| `title2` | 42px | 300 | 1.4 | 0 | Source Sans 3 | — |
| `title3` | 28px | 600 | 1.3 | 0 | Source Sans 3 | — |
| `header1` | 64px | 700 | 1.05 | -1px | Oswald | — |
| `header2` | 32px | 700 | 1.2 | 0 | Oswald | — |
| `header3` | 160px | 700 | 1.0 | -2px | Oswald | — |
| `paragraph1` | 32px | 300 | 1.6 | 0 | Source Sans 3 | — |
| `paragraph2` | 24px | 300 | 1.5 | 0 | Source Sans 3 | — |
| `paragraph3` | 24px | 400 | 1.4 | 0 | Source Sans 3 | — |
| `statLabel` | 36px | 300 | 1.2 | 0 | Source Sans 3 | — |
| `emphasis` | 48px | 700 | 1.2 | 0 | Oswald | — |
| `tag` | 20px | 700 | 1.2 | 2px | Oswald | uppercase |
| `subCaption` | 32px | 300 | 1.3 | 0 | Source Sans 3 | — |

### 2.4 Colors
```
bg:          #111111
surface:     #1A1A1A
border:      #2A2A2A
borderLight: #333333
white:       #FFFFFF
gray300:     #BBBBBB
gray400:     #AAAAAA
gray500:     #999999
gray600:     #777777
gray700:     #666666
gray800:     #444444
accent:      #E8932F
accentDim:   rgba(232,147,47,0.12)
```

### 2.5 Card gradient variants (WCAG AA compliant)

| Variant | Background | Border | Text | Text Secondary |
|---------|-----------|--------|------|----------------|
| `gradientDark` | `linear-gradient(160deg, #1A1A1A 0%, #252525 100%)` | #2A2A2A | #FFFFFF | #AAAAAA |
| `gradientWhite` | `linear-gradient(160deg, #FFFFFF 0%, #F0F0F0 100%)` | #E0E0E0 | #111111 | #666666 |
| `whiteGradient` | `linear-gradient(160deg, #F8F8F8 0%, #FFFFFF 100%)` | #E8E8E8 | #111111 | #666666 |
| `peachGradient` | `linear-gradient(160deg, #F4A574 0%, #E8932F 100%)` | #D4823A | #1A1A1A | #4A3000 |
| `orangeGradient` | `linear-gradient(160deg, #E8932F 0%, #D07518 100%)` | #B86815 | #111111 | #2A1A08 |

### 2.6 Radius
```
card:  12px
small: 6px
```
Note: BentoCards and many inner cards use `borderRadius: 20px` as a common override.

### 2.7 Icons
```
size:  44px (standard)
sizeL: 56px (large)
```
Icons are inline SVGs (24×24 viewBox, stroke-based, 1.5px stroke). Defined: globe, target, mapPin, calendar, search, repeat, headphones, wallet, truck, rotateCcw, activity, mapPinOff. Navigation icons: expand, shrink, chevLeft, chevRight, notes, rotate.

---

## 3. Component architecture

### 3.1 Primitives

#### `Card`
- Default background: `surface` color
- Border: 1px solid `border`
- Border-radius: `card` token (12px)
- Accepts `style` override prop

#### `BentoCard`
- Accepts `variant` prop (one of the 5 gradient variants)
- Renders `children` as function: `(textColor, textSecondaryColor) => JSX`
- OR renders children directly
- Border-radius: 20px (hardcoded in component)
- Applies background gradient, border, and base text color from variant

#### `IconBox`
- Wraps an SVG icon
- Color: `gray500`
- Accepts `size` prop (default: icon.size)

#### `ImagePlaceholder`
- Diagonal stripe pattern background
- Dashed border (2px, gray800)
- Centered label text
- Used for all image slots (will be replaced with real images later)

### 3.2 Style helpers

#### `typeStyle(tokenKey, colorOverride?)`
Returns a complete inline style object from a typography token. Includes fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, textTransform (if defined), color (default: white), margin: 0.

#### `slidePadding`
Constant object with paddingTop/Right/Bottom/Left from spacing.slide tokens.

### 3.3 Slide components (24 total)

Each slide is a stateless React component rendering at exactly 1920×1080. All use `slidePadding` and `height: "100%"` with `boxSizing: "border-box"`.

### 3.4 Presentation engine (`PresentationApp`)

State:
- `currentSlide` (number, 0-indexed)
- `isPresenting` (boolean)
- `showNotes` (boolean)
- `isMobilePortrait` (boolean)
- `windowSize` ({ w, h })

Features:
- **Normal mode:** Fixed 1920×1080 canvas, horizontally scrollable if viewport narrower, centered. Click left/right half to navigate.
- **Present mode:** Fullscreen API, scale-to-fit with `transform: scale()`, controls bar always visible at bottom (56px height + 3px progress bar). Mobile portrait shows rotate prompt.
- **Keyboard:** ArrowRight/Space = next, ArrowLeft = prev, F = toggle fullscreen, N = toggle notes, Escape = exit present
- **Touch:** Swipe left/right with 60px threshold
- **Progress bar:** White bar on dark track, width = percentage of slides viewed
- **Dot navigation:** 24 dots, active dot = 24px wide white, inactive = 8px wide gray800
- **Speaker notes panel:** Collapsible, max-height 240px, shows below slide in normal mode

---

## 4. Slide data schema

Each slide entry:
```typescript
interface SlideData {
  id: number;          // 0-indexed
  component: FC;       // React component
  title: string;       // Shown in controls bar
  notes: string;       // Speaker notes (newline-separated paragraphs)
}
```

---

## 5. Complete slide map (24 slides)

### Section: Opening
| # | Component | Title | Layout |
|---|-----------|-------|--------|
| 0 | SlideHero | Hero | Title bottom-anchored, 2×2 metrics grid, footer |
| 1 | SlideAbout | About the project | 4-col × 3-row bento grid (first 2 cols 0.8fr) |

### Section: The Challenge
| # | Component | Title | Layout |
|---|-----------|-------|--------|
| 2 | SlideCost | The cost of failed self-service | 35/65 split: left bento (2 stats + emphasis bar), right image |
| 3 | SlideWhyRepeats | Why customers contacted repeatedly | 3-col cards with icons + image placeholders |
| 4 | SlideTopFive | Top five reasons | 5 horizontal card rows with icon + quote + description |

### Section: Research & Discovery
| # | Component | Title | Layout |
|---|-----------|-------|--------|
| 5 | SlideResearch | Research methods | 3-col × 2-row bento: 3 stat cards, orange banner, scope card |
| 6 | SlideInsight1 | Customers scan, they don't read | Power statement (title1) + 2 image placeholders |
| 7 | SlideInsight2 | Images are the primary identifier | 2-col comparison: system default vs research finding (peachGradient) |
| 8 | SlideInsight3 | Context beats comprehensiveness | Power statement + 2 insight cards at bottom |
| 9 | SlideEntryPoints | Four entry points | 4-col cards with icons + tags |

### Section: Design Process
| # | Component | Title | Layout |
|---|-----------|-------|--------|
| 10 | SlidePrinciples | Guiding principles | 3 numbered cards (01/02/03) with evidence tags |
| 11 | SlideDecisions | Design decisions | 3 rows: Considered → Chosen → Reason |
| 12 | SlideTesting | Usability testing | 1:2 split: big stat (8/12) + findings list + image |
| 13 | SlideStakeholders | Stakeholder navigation | 2-col: FAQ pushback + Carrier API (nested dark cards) |

### Section: Solution
| # | Component | Title | Layout |
|---|-----------|-------|--------|
| 14 | SlideArchitecture | System architecture | 5-step flow (Entry→Identify→Context→Resolve→Escalate) + image |
| 15 | SlideIdentification | Entry-point-adaptive display | 2-col: stacked text cards + image |
| 16 | SlideFlows | Resolution paths | 3-col BentoCards (Delivery/Returns/Refund) with numbered steps |
| 17 | SlideEscalation | Escalation & edge cases | 2-col: contextual escalation + edge cases stack |
| 18 | SlideBeforeAfter | Before / After | 3-col: before image → arrow → after image |

### Section: Results & Impact
| # | Component | Title | Layout |
|---|-----------|-------|--------|
| 19 | SlideResultsCustomer | Customer impact | 2×2 grid: 42%, 33%, 28%, 67% (first = orangeGradient) |
| 20 | SlideResultsBusiness | Business results | 2:1:1 grid: €3.2M (peachGradient) + 52% + 8%, plus context bar |
| 21 | SlideMetricsComparison | Transformation in numbers | 4 rows: metric + before card → after card + change tag |

### Section: Reflection
| # | Component | Title | Layout |
|---|-----------|-------|--------|
| 22 | SlideKeyLesson | Key lesson | Power statement: ~~Comprehensive~~ → Contextual |
| 23 | SlideClosing | Reflection & closing | 3 numbered cards + contact footer |

---

## 6. Section label pattern

Most slides use an inline section label at top:
```
pageCaption  |  subCaption
```
Example: "The challenge | Context & Background"

The pipe separator uses `pageCaption` styling with `letterSpacing: "0"` and `gray800` color.

Slides 0, 1, 5, 10, 19, 20, 21, 22, 23 use single `pageCaption` only (no sub-label).

---

## 7. Speaker notes (complete)

```json
[
  { "id": 0, "notes": "Open with the headline and let the metrics speak. Pause on each metric briefly.\n\n42% fewer inquiries, 28% CSAT lift, €3.2M saved, 67% faster resolution.\n\nThese are the outcomes. The rest of the presentation explains how we got there." },
  { "id": 1, "notes": "Zalando is Europe's largest online fashion platform with 50M+ active customers across 25 markets.\n\nThis was an 11-month strategic initiative to redesign self-service for delivery, returns, and refund issues. Sponsored by the Director of Customer Care with VP-level visibility. I was the sole designer, 100% dedicated." },
  { "id": 2, "notes": "Every customer contact cost €3.5 across email, phone, and chat. There were 2 million repeat contacts per year.\n\nThat's €7 million annually in avoidable support costs. CSAT was 3.1/5 and average resolution took 24 hours." },
  { "id": 3, "notes": "Three root causes drove repeat contacts:\n\n1. Generic FAQ: same static page regardless of customer context\n2. Channel hopping: unresolved in one channel, try another\n3. Agent dependency: self-service trained customers to bypass it" },
  { "id": 4, "notes": "Five questions dominated support volume: Where is my refund? Where is my package? How do I return this? What is the latest status? Where do I drop this off?\n\nEvery one pointed to the same root issue: zero awareness of the customer's actual situation." },
  { "id": 5, "notes": "I conducted 12 user interviews across multiple European markets and 8 stakeholder interviews spanning product, engineering, and customer care leadership.\n\nWe analyzed 50,000+ support transcripts for conversation patterns and failure points. The research also included first-hand testing of existing channels, usability studies, and A/B testing during rollout." },
  { "id": 6, "notes": "This was the foundational insight. Detailed FAQ pages caused information overload and abandonment. Customers weren't looking for thorough documentation. They wanted the one piece of information relevant to their specific situation.\n\nThis directly informed the move to contextual cards over comprehensive pages." },
  { "id": 7, "notes": "When managing multiple parcels, customers recognized products by their photos, not by order numbers or reference IDs. This fundamentally changed the identification layer of the design.\n\nOrder IDs only became relevant during escalation, when agents needed them for ticket processing." },
  { "id": 8, "notes": "The initial assumption was that customers needed more information. Research proved they needed the right information at the right moment.\n\nTwo supporting insights: repeat contacts signaled system failure, not customer behavior problems, and customers experienced delivery-returns-refund as one continuous journey." },
  { "id": 9, "notes": "Research revealed four distinct paths to the FAQ: Google search (highest volume), website navigation, account navigation, and the returns page.\n\nThis was critical because it meant the solution needed to adapt its display based on arrival context." },
  { "id": 10, "notes": "Three design principles emerged from research:\n\n1. Progressive disclosure: reveal only what matters at each step\n2. Design for existing mental models (Jakob's Law): embed in existing FAQ, use product images\n3. Transparent system status (Nielsen's Heuristic #1): only show confirmed, verified data" },
  { "id": 11, "notes": "Three fundamental decisions shaped the direction:\n\nEmbedded over standalone (customers already had 4 paths). Progressive disclosure over comprehensive (testing confirmed overload). Product images over order IDs (customers think visually).\n\nEach decision was validated through research, not assumption." },
  { "id": 12, "notes": "8 out of 12 participants completed the primary task flow in the first round. Key friction points: unclear escalation entry points and confusion between return stages.\n\nCard layout differentiation emerged from testing: returns needed vertical staged flows, refunds used horizontal cards. This wasn't an upfront decision." },
  { "id": 13, "notes": "Two key stakeholder challenges:\n\nThe FAQ redesign pushback was resolved by proposing a phased strategy: embed first, evolve later.\n\nCarrier API fragmentation was addressed by partnering with backend engineers market by market. We discovered more data was available than assumed, and the carrier data map became a resource for other teams." },
  { "id": 14, "notes": "The system identifies authenticated customers through API integration, pulls order and parcel data, and surfaces contextual information based on journey stage.\n\nFive-step flow: Entry (4 adaptive paths) → Identify (product images) → Context (real-time carrier/warehouse/payment data) → Resolve (tailored per journey) → Escalate (full context attached)." },
  { "id": 15, "notes": "Via Google search: land on specific FAQ section, see only relevant contextual cards.\n\nVia website, account, or returns page: see FAQ homepage with all active cards displayed. Product images ensure instant visual recognition across multiple active orders." },
  { "id": 16, "notes": "Three journey types, each with tailored information architecture:\n\nDelivery: progressive disclosure from status glance to full details. Returns: staged vertical flow with confirmed data only (carrier scan, warehouse scan). Refund: horizontal cards with amount, timeline, payment method." },
  { "id": 17, "notes": "When self-service can't resolve: ticket created with full context already attached. Agent follows up within 24 hours with case context in hand.\n\nDuplicate detection shows reassurance rather than silent blocking. Empty states gracefully fall back to standard FAQ." },
  { "id": 18, "notes": "The transformation from generic, text-heavy FAQ pages to personalized, contextual self-help cards.\n\nBefore: same static page for everyone. After: entry-point-adaptive display with product images, real-time status, and progressive disclosure." },
  { "id": 19, "notes": "42% reduction in overall yearly inquiries. 33% fewer returns inquiries, exceeding the 25% target.\n\n28% CSAT improvement from 3.1 to 4.2 out of 5. 67% faster resolution from 24 hours to under 3 hours. 45% reduction in repeat contacts." },
  { "id": 20, "notes": "€3.2M in annual cost savings from eliminating approximately 900,000 repeat contacts per year.\n\n52% increase in agent productivity as agents shifted to complex interactions. 8% automation rate increase. Results validated the strategic investment and influenced broader automation strategy." },
  { "id": 21, "notes": "Resolution time: 24 hours to under 3 hours. Customer satisfaction: 3.1 to 4.2. Repeat contacts: 2M to 1.1M per year. Annual cost: €7M to €3.8M.\n\nEvery metric improved significantly, validating the contextual approach." },
  { "id": 22, "notes": "The most important shift was from comprehensive to contextual. Research proved customers needed the right information at the right moment, not all information at once.\n\nThis distinction unlocked every major outcome, from the 42% inquiry reduction to the 28% CSAT improvement." },
  { "id": 23, "notes": "Three things I'd do differently:\n\n1. Push for technical discovery earlier (carrier API investigation happened mid-project)\n2. Invest in content strategy from day one (content design became critical)\n3. Map technical constraints before designing information architecture (the dashboard pivot was costly)\n\nThese principles are now foundational to how I approach complex service design." }
]
```

---

## 8. Feature requirements

### Must-have
- [x] 24 slides rendering at 1920×1080
- [x] Keyboard navigation (arrows, space, F, N, Escape)
- [x] Present mode with scale-to-fit and fullscreen API
- [x] Speaker notes panel (toggleable)
- [x] Progress bar + dot navigation
- [x] Touch swipe support
- [x] Mobile portrait rotation prompt
- [x] Click-to-navigate (left half = prev, right half = next)

### Should-have (production enhancements)
- [ ] Slide transitions/animations (fade or slide)
- [ ] Image asset loading (replace ImagePlaceholder components)
- [ ] URL hash routing (e.g., `#slide=5`)
- [ ] Thumbnail sidebar / slide overview grid
- [ ] PDF/image export
- [ ] Responsive scaling in normal mode (not just present mode)
- [ ] Print stylesheet

### Nice-to-have
- [ ] Presenter view (dual-screen: slides on one, notes + preview on another)
- [ ] Timer/clock in controls
- [ ] Annotation mode
- [ ] Slide transition configuration per slide

---

## 9. Implementation notes

### Font loading
```html
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Source+Sans+3:ital,wght@0,200;0,300;0,400;0,600;0,700;1,300;1,400&display=swap" rel="stylesheet">
```

### BentoCard children-as-function pattern
This is the key pattern for variant-aware color propagation:
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

### Scale-to-fit formula (present mode)
```js
const availH = windowSize.h - BOTTOM_H; // BOTTOM_H = 59 (56 controls + 3 progress)
const fitScale = Math.min(windowSize.w / 1920, availH / 1080);
```
Applied via `transform: scale(fitScale)` with `transformOrigin: "center center"`.

---

## 10. File reference

The complete working prototype is in `presentation-v2.jsx`. It is a single-file React component that works in Claude.ai's artifact renderer. For production, extract into the component structure described above.
