# Case Study Page - Visual Reference

## 🎨 Design System

### Color Scheme
**Light Mode:**
- Background: White (`#FFFFFF`)
- Foreground: Near Black (`#0A0A0A`)
- Muted Text: Gray (`#737373`)
- Borders: Light Gray (`#E5E5E5`)

**Dark Mode:**
- Background: Near Black (`#0A0A0A`)
- Foreground: White (`#FAFAFA`)
- Muted Text: Medium Gray (`#A3A3A3`)
- Borders: Dark Gray (`#262626`)

### Typography Scale
- **Hero Title**: 48px / 3rem (desktop), 36px / 2.25rem (mobile)
- **Section Headings**: 30px / 1.875rem
- **Subsection Headings**: 24px / 1.5rem
- **Card Titles**: 20px / 1.25rem
- **Body Text**: 18px / 1.125rem
- **Metric Values**: 36-48px / 2.25-3rem
- **Sidebar Links**: 14px / 0.875rem

### Spacing
- Section margins: 64px / 4rem
- Card spacing: 32px / 2rem
- Content padding: 24px / 1.5rem
- Sidebar top position: 32px / 2rem

## 📐 Layout Structure

### Desktop (≥1024px)
```
┌─────────────────────────────────────────────┐
│  Header (Sticky)                    [Toggle]│
├─────────────────────────────────────────────┤
│                                              │
│  ┌─────────┐  ┌──────────────────────────┐ │
│  │Contents │  │  Hero Title              │ │
│  │         │  │  Subtitle                │ │
│  │  • Link │  │                          │ │
│  │  • Link │  │  ──────────────────────  │ │
│  │  • Link │  │                          │ │
│  │  • Link │  │  Section Content         │ │
│  │  • Link │  │                          │ │
│  │         │  │  [Card]                  │ │
│  │ (Sticky)│  │  [Card]                  │ │
│  │         │  │  [Card]                  │ │
│  │         │  │                          │ │
│  └─────────┘  └──────────────────────────┘ │
│   256px               768px max            │
└─────────────────────────────────────────────┘
```

### Mobile (<1024px)
```
┌──────────────────────┐
│ Header      [Toggle] │
├──────────────────────┤
│                      │
│  Hero Title          │
│  Subtitle            │
│                      │
│  ────────────────    │
│                      │
│  Section Content     │
│                      │
│  [Card]              │
│  [Card]              │
│  [Card]              │
│                      │
│                      │
│            [Menu 🍔] │ ← Floating button
└──────────────────────┘
```

## 🎯 Key Components

### 1. Floating Sidebar (Desktop)
- Position: `sticky top-8`
- Width: `256px`
- Active state: Bold text, full opacity
- Inactive state: Muted color
- Hover: Full opacity transition

### 2. Mobile Menu
- Floating Action Button (FAB)
- Position: Fixed bottom-right
- Opens bottom sheet with links
- Backdrop overlay with blur
- Smooth slide-up animation

### 3. Metric Cards
```
┌────────────────┐
│                │
│  226%          │  ← Large, bold number
│                │
│  Increase in   │  ← Descriptive text
│  automation... │
│                │
└────────────────┘
```

### 4. Quote Block
```
┃  "Quote text in italic with comfortable
┃  line height and proper spacing..."
┃  
┃  — Author Name
```

### 5. Goal Cards
```
┌─────────────────────────────┐
│                             │
│  Card Title (Bold)          │
│                             │
│  Description text with      │
│  muted foreground color     │
│                             │
└─────────────────────────────┘
```
- Hover effect: Shadow elevation
- Smooth transitions

## 🔄 Interactive Elements

### Theme Toggle
- Sun icon (light mode) / Moon icon (dark mode)
- Smooth rotation animation
- Scale transition on switch
- Position: Top-right header

### Sidebar Navigation
- Auto-scroll detection using IntersectionObserver
- Highlights current section in viewport
- Smooth scroll behavior on click
- Visual feedback on hover

### Navigation Footer
- Previous / Back to Home / Next
- Arrow icons with slide animation on hover
- Placeholder links ready for implementation

## 📱 Responsive Breakpoints

```css
Mobile:    < 1024px (single column, floating menu)
Desktop:   ≥ 1024px (two column, sticky sidebar)
```

## ✨ Animations & Transitions

1. **Theme Toggle**: 200ms rotation + scale
2. **Sidebar Links**: 150ms color fade
3. **Card Hover**: 200ms shadow elevation
4. **Navigation Arrows**: 150ms translate
5. **Mobile Menu**: 300ms slide-up + backdrop fade
6. **Scroll Behavior**: Smooth with offset

## 🎭 States

### Link States
- Default: `text-muted-foreground`
- Hover: `text-foreground`
- Active: `font-medium text-foreground`

### Card States
- Default: `border shadow-sm`
- Hover: `shadow-md`

### Button States
- Default: `bg-primary`
- Hover: `bg-primary/90`
- Focus: Ring outline

## 📋 Content Hierarchy

1. **Hero** (h1) - Project title
2. **Sections** (h2) - Main sections
3. **Subsections** (h3) - Key points
4. **Body** (p) - Detailed content
5. **Metrics** - Visual emphasis
6. **Quotes** - Social proof

## 🌐 Accessibility Features

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states
- Color contrast WCAG AA compliant
- Screen reader friendly structure
- Skip to content (implicit via structure)
