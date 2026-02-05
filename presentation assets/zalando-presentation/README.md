# Zalando Case Study Presentation

Interactive 24-slide case study presentation for Otobong Okoko's Zalando Contextual Self-Help project.

## Quick start

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`

## Project structure

```
src/
├── main.jsx                          # Entry point
├── components/
│   ├── PresentationApp.jsx           # Main app (engine + controls)
│   ├── primitives/index.jsx          # Card, BentoCard, IconBox, ImagePlaceholder
│   ├── slides/index.jsx              # All 24 slide components (STUBS - need implementation)
│   └── ui/SectionLabel.jsx           # Reusable section label
├── data/slides.js                    # Slide metadata, titles, speaker notes
├── hooks/usePresentation.js          # Navigation, keyboard, touch, fullscreen logic
├── styles/
│   ├── tokens.js                     # Design tokens (colors, type, spacing, card variants)
│   └── icons.jsx                     # SVG icon definitions
└── assets/images/                    # Place slide images here
```

## For Claude Code

### What's done
- Design system (tokens, primitives, icons) is complete
- Presentation engine (navigation, fullscreen, notes) is complete
- Slide data (titles, notes, sections) is complete
- 3 slides are fully implemented (Hero, Insight1, KeyLesson)
- All other slides have content data and layout comments as stubs

### What needs implementation
Each stub slide in `src/components/slides/index.jsx` has:
- The exact content/data inline
- A comment pointing to the prototype line numbers
- A TODO marker

**Reference file:** `presentation-v2.jsx` is the working single-file prototype.
Each slide's comment says which lines to reference (e.g., "See prototype lines 278-385").

### Implementation approach
1. Open `presentation-v2.jsx` as reference
2. For each TODO slide, find the referenced line range
3. Port the JSX layout using the already-imported primitives and tokens
4. Test in browser at `localhost:3000`

### Key patterns
- `typeStyle('tokenName', optionalColor)` for all typography
- `slidePadding` constant for slide margins
- `BentoCard` with children-as-function for gradient-aware text colors
- `Card` for standard dark surface cards
- `ImagePlaceholder` for all image slots (replace later with real images)
- `SectionLabel` for the "SECTION | Sub Section" pattern at slide tops

### Keyboard shortcuts
- Arrow keys / Space: Navigate slides
- F: Toggle fullscreen presentation
- N: Toggle speaker notes
- Escape: Exit presentation mode
