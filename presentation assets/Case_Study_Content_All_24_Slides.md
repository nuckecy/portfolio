# Zalando Case Study Content
## All 24 Slides — Text, Data, and Layout Descriptions

---

## SECTION: Opening

### Slide 1: Hero
**Layout:** Full-bleed dark with content anchored to left, phone mockup on right

**Page caption:** Case study

**Title:** Transforming Customer Support

**Subtitle:** Context-aware self-help platform at Zalando

**Metrics grid (2×2):**
| 42% drop in recontact cases | €3.2M operational cost saved |
| 67% faster resolution | 28% increase in CSAT |

**Visual:** Phone mockup (`mobile-returns.png`) showing Zalando self-help returns interface, absolutely positioned on right side

**Footer:** Otobong Okoko · Senior Product Designer · Zalando SE

**Speaker notes:** Open with the headline and let the metrics speak. Pause on each metric briefly. 42% drop in recontact cases, €3.2M operational cost saved, 67% faster resolution, 28% increase in CSAT. These are the outcomes. The rest of the presentation explains how we got there.

---

### Slide 2: About the Project
**Layout:** 3-column × 3-row bento grid (`1.2fr 1fr 1fr` columns, `1fr 1fr 0.6fr` rows)

**Page caption:** About the project

**Header:** Redesigning self-service for Europe's largest fashion platform

**Grid cells:**

| Position | Card Type | Content |
|----------|-----------|---------|
| R1-2, C1 (span 2 rows) | BentoCard gradientWhite | **Zalando logo** (`zalando-logo.svg`) + **Company info**: Europe's leading online fashion and lifestyle platform. Stats: **50M+** active customers, **25** markets |
| R1, C2 | Card | **Tag:** PLATFORM · **Header:** Web-based FAQ · **Subtitle:** Embedded within existing help pages |
| R1, C3 | Card | **Tag:** FOCUS · **Header:** Delivery, returns, refunds · **Subtitle:** Highest-volume contact categories |
| R2, C2 | BentoCard orangeGradient | **Tag:** DURATION · **Header:** 11 months · **Subtitle:** 100% dedicated, sole designer |
| R2, C3 | Card | **Tag:** ROLE · **Header:** Lead Product Designer · **Subtitle:** End-to-end ownership |
| R3, C1-3 (full row) | Card horizontal | **THE PROJECT** (accent color, uppercase) + divider + A strategic initiative within Customer Care to redesign how customers self-serve for delivery, returns, and refund issues. Sponsored by the Director of Customer Care with VP-level visibility. |

**Speaker notes:** Zalando is Europe's largest online fashion platform with 50M+ active customers across 25 markets. This was an 11-month strategic initiative to redesign self-service for delivery, returns, and refund issues. Sponsored by the Director of Customer Care with VP-level visibility. I was the sole designer, 100% dedicated, with end-to-end ownership.

---

## SECTION: The Challenge

### Slide 3: The Cost of Failed Self-Service
**Layout:** Two-column split (25% left, 75% right)

**Section label:** The challenge | Context & Background

**Header:** The cost of failed self-service

**Left column — Vertical stack of 3 stat cards:**
1. **€3.5** — cost per contact across email, phone, and chat
2. **2M** — repeat contacts per year
3. **€7M** — annual operations cost (with gradient background)

**Footer text below cards:** CSAT: 3.1/5 · Resolution: 24hrs

**Right column:** Image with expand button (`Dashboard - Returns and Refunds.png`) — Zalando self-service returns and refunds desktop interface, with ImageModal for full-screen view

**Speaker notes:** Every customer contact cost €3.5 across email, phone, and chat. There were 2 million repeat contacts per year. That's €7 million annually in avoidable support costs. CSAT was 3.1/5 and average resolution took 24 hours.

---

### Slide 4: Why Customers Contacted Repeatedly
**Layout:** Two-column split (35% left, 65% right)

**Section label:** The challenge | Context & Background

**Header:** Why customers contacted repeatedly

**Left column — Vertical stack of 3 cards:**

1. **Icon:** search · **Title:** Generic FAQ · **Body:** Same static page for every customer regardless of order, parcel status, or return stage

2. **Icon:** repeat · **Title:** Channel hopping · **Body:** Unresolved via email, try phone, then chat. Fragmented ticket histories increased workload

3. **Icon:** headphones · **Title:** Agent dependency · **Body:** Without personalized context, customers abandoned self-service and contacted support directly

**Right column:** Image with expand button (`FAQ - Orders - Dark Mode.png`) — Zalando FAQ orders interface showing generic self-service, with ImageModal for full-screen view

**Speaker notes:** Three root causes drove repeat contacts: 1. Generic FAQ: same static page regardless of customer context 2. Channel hopping: unresolved in one channel, try another 3. Agent dependency: self-service trained customers to bypass it

---

### Slide 5: Top Five Reasons
**Layout:** Two-column split (35% left, 65% right)

**Section label:** The challenge | Problem Statement

**Header:** Top five reasons customers contacted support

**Left column — Vertical stack of 4 cards:**

| Icon | Question | Description |
|------|----------|-------------|
| wallet | "Where is my refund?" | No visibility into refund amount, timeline, or payment method |
| truck | "Where is my package?" | Delivery status unavailable in self-service tied to their actual parcel |
| rotateCcw | "How do I return this?" | Return process lacked step-by-step contextual guidance |
| mapPinOff | "Where do I drop this off?" | Drop-off and pickup logistics buried in generic instructions |

**Right column:** Image with expand button (`Contextual Self Help Home.png`) — Zalando contextual self-help home interface, with ImageModal for full-screen view

**Speaker notes:** Four questions dominated support volume: Where is my refund? Where is my package? How do I return this? Where do I drop this off? Every one pointed to the same root issue: zero awareness of the customer's actual situation.

---

## SECTION: Research & Discovery

### Slide 6: Research Methods
**Layout:** 3×2 bento grid

**Section label:** Research & Discovery

**Header:** How we built understanding

**Grid cells:**

| Position | Content |
|----------|---------|
| R1, C1 | Card: **12** User interviews — Across multiple European markets |
| R1, C2 | Card: **8** Stakeholder interviews — Product, engineering, operations |
| R1, C3 | Card: **50K+** Support transcripts — Analyzed for patterns and issues |
| R2, C1-3 (full span) | BentoCard orangeGradient: **First-hand testing** — Extensive usability studies, A/B testing throughout the rollout, and direct observation of customer support interactions |

**Speaker notes:** I conducted 12 user interviews across multiple European markets and 8 stakeholder interviews spanning product, engineering, and customer care leadership. We analyzed 50,000+ support transcripts for conversation patterns and failure points. The research also included first-hand testing of existing channels, usability studies, and A/B testing during rollout.

---

### Slide 7: Insight — Customers Scan
**Layout:** Power statement with evidence strip

**Section label:** Research & Discovery | Key Insights

**Title (massive):** Customers scan. They don't read.

**Body:** Detailed FAQ pages with comprehensive information caused information overload and abandonment. Customers wanted the one piece of information relevant to their specific situation, immediately visible.

**Evidence images:** 
- FAQ page heatmap / scroll depth
- Before: wall of text FAQ

**Speaker notes:** This was the foundational insight. Detailed FAQ pages caused information overload and abandonment. Customers weren't looking for thorough documentation. They wanted the one piece of information relevant to their specific situation. This directly informed the move to contextual cards over comprehensive pages.

---

### Slide 8: Insight — Images Are the Primary Identifier
**Layout:** Two-column comparison

**Section label:** Research & Discovery | Key Insights

**Header:** Images are the primary identifier

**Left column — Card:**
- **Tag:** System default
- **Header:** Order IDs & reference numbers
- **Body:** "ZAL-2024-8847291" means nothing to a customer with 5 active orders. They can't recall system-generated codes.
- **Image placeholder:** Order list with IDs

**Right column — BentoCard peachGradient:**
- **Tag:** Research finding
- **Header:** Product images
- **Body:** Customers think in "the blue jacket" or "the running shoes." Product photos became the primary identifier; order IDs reserved for agent escalation.
- **Image placeholder:** Card with product image

**Speaker notes:** When managing multiple parcels, customers recognized products by their photos, not by order numbers or reference IDs. This fundamentally changed the identification layer of the design. Order IDs only became relevant during escalation, when agents needed them for ticket processing.

---

### Slide 9: Insight — Context Beats Comprehensiveness
**Layout:** Power statement with supporting cards

**Section label:** Research & Discovery | Key Insights

**Title (massive):** Context beats comprehensiveness.

**Body:** The initial assumption was that customers needed more information. Research proved they needed the right information at the right moment. This shift from "comprehensive" to "contextual" became the design principle that unlocked every major outcome.

**Supporting cards:**

1. **Repeat contacts signal system failure** — 2M repeat contacts weren't a customer behavior problem. They were a system design problem.

2. **Customers think in journeys** — Delivery, returns, and refunds are one continuous experience, not three help categories.

**Speaker notes:** The initial assumption was that customers needed more information. Research proved they needed the right information at the right moment. Two supporting insights: repeat contacts signaled system failure, not customer behavior problems, and customers experienced delivery-returns-refund as one continuous journey.

---

### Slide 10: Four Entry Points
**Layout:** Four-column cards

**Section label:** Research & Discovery | Entry Points

**Header:** Four paths to self-service

**Subheader:** The solution needed to adapt its display based on arrival context. A customer via Google search sees only relevant cards; one from the homepage sees all active cards.

**Cards:**

| Icon | Title | Tag | Description |
|------|-------|-----|-------------|
| search | Google search | Primary | Highest volume. Customers searched specific questions and landed on relevant FAQ sections. |
| globe | Website navigation | Secondary | Header/footer links to FAQ from the main site. |
| target | Account navigation | Secondary | From order history, direct path to relevant help. |
| rotateCcw | Returns page | Contextual | Direct access to help from within the returns flow. |

**Speaker notes:** Research revealed four distinct paths to the FAQ: Google search (highest volume), website navigation, account navigation, and the returns page. This was critical because it meant the solution needed to adapt its display based on arrival context.

---

## SECTION: Guiding Principles

### Slide 11: Three Principles
**Layout:** Three-column numbered cards

**Section label:** Guiding Principles

**Header:** Three principles guided every decision

**Cards:**

**01 — Progressive disclosure over information overload**
Body: Reveal only what matters at each step. Customers abandoned comprehensive pages but engaged with contextual cards that layered complexity: identify first, then status, then escalation.
Evidence tag: Minimal cards over detailed pages, drill-down architecture

**02 — Design for existing mental models**
Body: Users prefer your product to work like ones they already know. Embedded inside the existing FAQ, honoring established navigation paths. Product images replaced order IDs.
Evidence tag: Jakob's Law, FAQ-embedded over standalone help center

**03 — Transparent system status builds trust**
Body: Only communicate what you can verify. Confirmed data only: carrier-verified delivery, warehouse-scanned returns, processed refund amounts. No optimistic estimates.
Evidence tag: Nielsen's Heuristic #1, confirmed over declared data

**Speaker notes:** Three design principles emerged from research: 1. Progressive disclosure: reveal only what matters at each step 2. Design for existing mental models (Jakob's Law): embed in existing FAQ, use product images 3. Transparent system status (Nielsen's Heuristic #1): only show confirmed, verified data

---

## SECTION: Design Process

### Slide 12: Design Decisions
**Layout:** Three-row comparison (rejected → chosen)

**Section label:** Design Process | Ideation & Exploration

**Header:** Three decisions shaped the direction

**Rows:**

| Considered | → | Chosen | Reason |
|------------|---|--------|--------|
| Standalone help center | → | Embedded in existing FAQ | Customers already had 4 established paths. New destination = new behavior to learn. |
| Comprehensive information upfront | → | Progressive disclosure | Usability testing showed detailed first-screens created the same overload problem. |
| Order IDs as identifiers | → | Product images | Customers couldn't recall system codes. They identified purchases visually. |

**Speaker notes:** Three fundamental decisions shaped the direction: Embedded over standalone (customers already had 4 paths). Progressive disclosure over comprehensive (testing confirmed overload). Product images over order IDs (customers think visually). Each decision was validated through research, not assumption.

---

### Slide 13: Usability Testing
**Layout:** Two-column (stat left, findings right)

**Section label:** Design Process | Prototyping & Iteration

**Header:** Testing and iterating

**Left column — Big stat:**
**8/12** participants completed primary flow (first round success rate)

**Right column — Findings:**

| Finding | Resolution | Status |
|---------|------------|--------|
| Unclear escalation entry points | Increased escalation trigger visibility and positioning | Fixed |
| Confusion between return stages | Refined return status terminology and visual indicators | Fixed |
| Card layout differentiation | Returns: vertical staged flow. Refunds: horizontal cards. Emerged from testing, not upfront design. | Insight |

**Image placeholder:** Card layout iterations: V1 → V2 → Final

**Speaker notes:** 8 out of 12 participants completed the primary task flow in the first round. Key friction points: unclear escalation entry points and confusion between return stages. Card layout differentiation emerged from testing: returns needed vertical staged flows, refunds used horizontal cards. This wasn't an upfront decision.

---

### Slide 14: Stakeholder Navigation
**Layout:** Two-column split (35% left, 65% right)

**Section label:** Design Process | Stakeholder Navigation

**Header:** Navigating organizational complexity

**Left column:** Handshake illustration (`handshake-deal.svg`) with white border, centered

**Right column — Two rows of Challenge → Resolution pairs:**

**Row 1:**
| Challenge (white card) | → | Resolution (accent card) |
|------------------------|---|--------------------------|
| **FAQ redesign pushback** | | **Strategic compromise** |
| I proposed redesigning the FAQ as part of improving self-service, but other member teams saw it as scope creep outside the core self-help mandate. | | Agreed to phase the work: deliver contextual help cards first (the core deliverable), with FAQ improvements planned for a future phase. This preserved momentum while keeping the door open. |

**Row 2:**
| Challenge (white card) | → | Outcome (accent card) |
|------------------------|---|----------------------|
| **Missing carrier data** | | **Collaborative discovery** |
| Engineering said the data I needed for the cards didn't exist because carriers weren't providing it. But I'd seen similar data from other carriers, so I asked them to investigate further. | | Engineering partnered with me to audit carrier APIs across markets. We found more data existed than assumed. The investigation became a shared resource for future projects. |

**Speaker notes:** Two key stakeholder challenges: The FAQ redesign pushback was resolved by proposing a phased strategy: deliver contextual cards first, evolve FAQ later. Missing carrier data challenge was addressed by partnering with engineering to audit carrier APIs market by market. We discovered more data was available than assumed, and the carrier data map became a shared resource for other teams.

---

## SECTION: Solution

### Slide 15: System Architecture
**Layout:** Five-step flow + diagram placeholder

**Section label:** Solution | System Architecture

**Header:** How the system works

**Subheader:** The solution identifies authenticated customers through API integration, pulling order and parcel data from their profile. Based on journey stage, it surfaces relevant contextual information driven by real-time data.

**Flow steps:**

| Step | Title | Description |
|------|-------|-------------|
| 01 | Entry | 4 paths adapt display based on arrival context |
| 02 | Identify | Product images for instant visual recognition |
| 03 | Context | Real-time data from carrier APIs, warehouse, payments |
| 04 | Resolve | Tailored flow per journey: delivery, returns, refund |
| 05 | Escalate | Full context attached, timeline confirmed |

**Image placeholder:** System architecture flow diagram

**Speaker notes:** The system identifies authenticated customers through API integration, pulls order and parcel data, and surfaces contextual information based on journey stage. Five-step flow: Entry (4 adaptive paths) → Identify (product images) → Context (real-time carrier/warehouse/payment data) → Resolve (tailored per journey) → Escalate (full context attached).

---

### Slide 16: Entry-Point-Adaptive Display
**Layout:** Two-column (text left, image right)

**Section label:** Solution | Core Experience

**Header:** Entry-point-adaptive display

**Left column cards:**

**Via Google search**
Land on specific FAQ section. See only contextual cards related to that query. Immediate relevance.

**Via website, account, or returns**
See FAQ homepage with all active cards displayed. Product images for instant visual recognition across multiple orders.

**Right column:** Image placeholder — FAQ homepage with contextual cards (annotated)

**Speaker notes:** Via Google search: land on specific FAQ section, see only relevant contextual cards. Via website, account, or returns page: see FAQ homepage with all active cards displayed. Product images ensure instant visual recognition across multiple active orders.

---

### Slide 17: Resolution Paths
**Layout:** Three-column BentoCards

**Section label:** Solution | Resolution Paths

**Header:** Tailored flow per journey type

**Cards:**

**Delivery (gradientDark):**
- Icon: truck
- Steps: 1. Purchase date & promised delivery → 2. Current shipping status → 3. Delivery details → 4. Escalate if delayed/missing
- Note: Progressive: status at a glance, drill down for details

**Returns (orangeGradient):**
- Icon: rotateCcw
- Steps: 1. Drop-off confirmation → 2. Courier pickup → 3. Warehouse arrival → 4. Issue resolution
- Note: Staged vertical flow. Confirmed data only (carrier/warehouse scan)

**Refund (gradientDark):**
- Icon: wallet
- Steps: 1. Refund amount → 2. Expected timeline → 3. Payment method → 4. Flag discrepancies
- Note: Horizontal cards. Static info with escalation triggers

**Speaker notes:** Three journey types, each with tailored information architecture: Delivery: progressive disclosure from status glance to full details. Returns: staged vertical flow with confirmed data only (carrier scan, warehouse scan). Refund: horizontal cards with amount, timeline, payment method.

---

### Slide 18: Escalation & Edge Cases
**Layout:** Two-column (wide left, stacked right)

**Section label:** Solution | Escalation & Edge Cases

**Header:** When self-service isn't enough

**Left card:**
- **Header:** Contextual escalation
- **Body:** Support ticket created with full context already attached: order details, parcel status, customer actions taken. Agents follow up with case context in hand.
- **Tags:** Review timeline shown · Email confirmation · 24hr agent follow-up

**Right column cards:**

**Edge case — Duplicate escalation detection**
Recognizes existing cases for the same issue. Shows reassurance messaging: case acknowledged, status displayed, timeline confirmed. No silent blocking.

**Graceful fallback — Empty states**
No active orders, returns, or refunds? Gracefully falls back to standard FAQ content rather than showing empty or confusing interface.

**Speaker notes:** When self-service can't resolve: ticket created with full context already attached. Agent follows up within 24 hours with case context in hand. Duplicate detection shows reassurance rather than silent blocking. Empty states gracefully fall back to standard FAQ.

---

### Slide 19: Before / After
**Layout:** Three-column comparison (before → arrow → after)

**Section label:** Solution | Transformation

**Header:** From generic to contextual

**Before column:**
- **Tag:** Before
- **Image placeholder:** Old generic FAQ page
- **Caption:** Same static page for every customer. Text-heavy, no personalization, no real-time data.

**Arrow:** →

**After column:**
- **Tag:** After
- **Image placeholder:** New contextual self-help with cards
- **Caption:** Personalized contextual cards. Product images, real-time status, entry-point-adaptive display.

**Speaker notes:** The transformation from generic, text-heavy FAQ pages to personalized, contextual self-help cards. Before: same static page for everyone. After: entry-point-adaptive display with product images, real-time status, and progressive disclosure.

---

## SECTION: Results & Impact

### Slide 20: Customer Impact
**Layout:** 2×2 metric grid

**Section label:** Results & Impact

**Header:** Customer impact

**Metrics:**

| Metric | Value | Description |
|--------|-------|-------------|
| 42% | reduction in yearly inquiries | Across delivery and returns categories |
| 33% | fewer returns inquiries | Exceeded 25% target set at kickoff |
| 28% | CSAT improvement | 3.1 → 4.2 out of 5 |
| 67% | faster resolution | 24 hours → under 3 hours |

First card (42%) uses orangeGradient variant; others use gradientDark.

**Speaker notes:** 42% reduction in overall yearly inquiries. 33% fewer returns inquiries, exceeding the 25% target. 28% CSAT improvement from 3.1 to 4.2 out of 5. 67% faster resolution from 24 hours to under 3 hours. 45% reduction in repeat contacts.

---

### Slide 21: Business Results
**Layout:** 3-column stats (wide left, two right)

**Section label:** Results & Impact

**Header:** Business results

**Cards:**

**€3.2M (peachGradient, wide):**
annual cost savings — ~900,000 repeat contacts eliminated per year

**52%:**
agent productivity increase — Shifted to complex interactions

**8%:**
automation rate increase — Intelligent routing of routine inquiries

**Bottom summary card:**
Results shared with Director and VP of Customer Care. Solution influenced Zalando's broader self-service and automation strategy. Confirmed carrier data approach became a reference model.

**Speaker notes:** €3.2M in annual cost savings from eliminating approximately 900,000 repeat contacts per year. 52% increase in agent productivity as agents shifted to complex interactions. 8% automation rate increase. Results validated the strategic investment and influenced broader automation strategy.

---

### Slide 22: Metrics Comparison
**Layout:** Four-row before → after comparison

**Section label:** Results & Impact

**Header:** The transformation in numbers

**Rows:**

| Metric | Before | → | After | Change |
|--------|--------|---|-------|--------|
| Resolution time | 24 hours | → | Under 3 hours | 67% faster |
| Customer satisfaction | 3.1 / 5 | → | 4.2 / 5 | 28% improvement |
| Repeat contacts | 2M per year | → | 1.1M per year | 45% reduction |
| Annual cost | €7M | → | €3.8M | €3.2M saved |

**Speaker notes:** Resolution time: 24 hours to under 3 hours. Customer satisfaction: 3.1 to 4.2. Repeat contacts: 2M to 1.1M per year. Annual cost: €7M to €3.8M. Every metric improved significantly, validating the contextual approach.

---

## SECTION: Reflection

### Slide 23: Key Lesson
**Layout:** Centered power statement

**Section label:** Reflection

**Title (massive):** Comprehensive → Contextual

("Comprehensive" in gray, "Contextual" in accent color)

**Body paragraph 1:** The most important shift was moving from "comprehensive" to "contextual." The initial assumption was that customers needed more information. Research proved they needed the right information at the right moment.

**Body paragraph 2:** Comprehensive help pages gave customers everything. Contextual cards gave them exactly what they needed. That distinction unlocked every major outcome.

**Speaker notes:** The most important shift was from comprehensive to contextual. Research proved customers needed the right information at the right moment, not all information at once. This distinction unlocked every major outcome, from the 42% inquiry reduction to the 28% CSAT improvement.

---

### Slide 24: Closing / What I Would Do Differently
**Layout:** Three-column numbered cards + footer

**Section label:** Reflection

**Header:** What I would do differently

**Cards:**

**01 — Push for technical discovery earlier**
The carrier API investigation happened mid-project. Starting in the first weeks would have surfaced data availability and constraints sooner.

**02 — Invest in content strategy from day one**
Content design became critical for card labels, status descriptions, and escalation messaging. Earlier involvement would have reduced iteration cycles.

**03 — Establish unified architecture first**
The pivot from combined dashboard to connected journey model was driven by API constraints found during implementation. Mapping constraints upfront would have reduced rework.

**Footer:**
- **Left:** Otobong Okoko · Senior Product Designer · Designer Who Codes
- **Right:** otobong.com

**Speaker notes:** Three things I'd do differently: 1. Push for technical discovery earlier (carrier API investigation happened mid-project) 2. Invest in content strategy from day one (content design became critical) 3. Map technical constraints before designing information architecture (the dashboard pivot was costly). These principles are now foundational to how I approach complex service design.

---

## IMAGE ASSETS SUMMARY

### Actual Images (in `/public/images/presentation-assets/`)

| Slide | Filename | Description |
|-------|----------|-------------|
| 1 | `mobile-returns.png` | Phone mockup showing Zalando self-help returns interface |
| 2 | `zalando-logo.svg` | Zalando company logo |
| 3 | `Dashboard - Returns and Refunds.png` | Self-service returns and refunds desktop interface |
| 4 | `FAQ - Orders - Dark Mode.png` | FAQ orders interface showing generic self-service |
| 5 | `Contextual Self Help Home.png` | Contextual self-help home interface |
| 14 | `handshake-deal.svg` | Handshake illustration for stakeholder navigation |

### Remaining Placeholders (need actual visuals)

| Slide | Placeholder Label |
|-------|-------------------|
| 7 | FAQ page heatmap / scroll depth |
| 7 | Before: wall of text FAQ |
| 8 | Order list with IDs |
| 8 | Card with product image |
| 13 | Card layout iterations: V1 → V2 → Final |
| 15 | System architecture flow diagram |
| 16 | FAQ homepage with contextual cards (annotated) |
| 19 | Old generic FAQ page |
| 19 | New contextual self-help with cards |
