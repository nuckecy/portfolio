# Portfolio Style & Configuration Architecture

## Overview

Your portfolio now has a complete separation of **content**, **styles**, and **components** with a two-tier configuration system that ensures maximum flexibility while maintaining design consistency.

## Architecture Structure

```
/config/
├── theme.ts                    # Global design tokens (SHARED)
├── home.ts                     # Home page content
├── about.ts                    # About page content
├── resume.ts                   # Resume page content
├── contact.ts                  # Contact page content
├── navigation.ts               # Navigation content & links
├── footer.ts                   # Footer content & links
└── styles/
    ├── home.ts                 # Home page layout & spacing
    ├── case-studies.ts         # Case studies layout & grid
    ├── about.ts                # About page layout
    ├── resume.ts               # Resume page layout
    ├── contact.ts              # Contact page layout
    ├── navigation.ts           # Navigation styling
    └── footer.ts               # Footer styling
```

## Configuration Layers

### 1. Global Theme Config (`/config/theme.ts`)

**Purpose:** Shared design tokens that maintain brand consistency across ALL pages.

**What's Included:**
- Color tokens (background, foreground, primary, muted, etc.)
- Typography (font families)
- Base spacing units
- Border radius values
- Breakpoints
- Container settings
- Transitions

**When to Edit:**
- Changing brand colors
- Updating font families
- Adjusting global spacing scale
- Modifying breakpoints

**Impact:** Changes here affect the ENTIRE portfolio

### 2. Page-Specific Style Configs (`/config/styles/*.ts`)

**Purpose:** Isolated layout, spacing, and typography settings for individual pages.

**What's Included:**
- Section layouts (grid, flex, columns)
- Spacing (padding, margins, gaps)
- Typography scales (heading sizes, text sizes)
- Component-specific styles
- Responsive behavior per section

**When to Edit:**
- Customizing page layouts
- Adjusting section spacing
- Changing heading sizes on specific pages
- Modifying responsive breakpoints for sections

**Impact:** Changes only affect the specific page - NO cross-page effects

### 3. Content Configs (`/config/*.ts`)

**Purpose:** All page content (text, links, images, metadata) separated from code.

**What's Included:**
- Page titles and descriptions
- Hero text and badges
- Achievements/metrics
- Navigation links
- Social media links
- Contact information

**When to Edit:**
- Updating copy/text
- Changing images
- Adding/removing links
- Modifying metadata

## Key Benefits

### ✅ **No Cross-Page Styling Conflicts**
Each page has its own style config. Changing home page grid layout won't affect case studies, about, or any other page.

### ✅ **Brand Consistency Maintained**
Global theme config ensures colors, fonts, and base spacing remain consistent across all pages.

### ✅ **Type Safety**
All configs are TypeScript files with typed exports, providing autocomplete and error checking.

### ✅ **Easy Content Updates**
Non-technical users can update text, links, and images by editing config files without touching component code.

### ✅ **Clear Separation of Concerns**
- **Content** (what to display) → `/config/*.ts`
- **Styles** (how to display) → `/config/styles/*.ts`
- **Global Tokens** (brand consistency) → `/config/theme.ts`
- **Components** (rendering logic) → `/app/**/*.tsx` and `/components/*.tsx`

## Usage Examples

### Example 1: Change Home Page Hero Spacing

**File:** `/config/styles/home.ts`

```typescript
hero: {
  section: {
    className: "container mx-auto px-4 md:px-8 py-24 md:py-32", // Changed from py-16 md:py-24
  },
  // ...
}
```

**Impact:** Only affects home page hero spacing. Case studies, about, and other pages remain unchanged.

### Example 2: Update Brand Colors Globally

**File:** `/config/theme.ts`

```typescript
colors: {
  primary: "hsl(220 100% 50%)", // Changed brand color
  // ...
}
```

**Impact:** Affects all pages consistently - primary color updates everywhere.

### Example 3: Change Home Page Content

**File:** `/config/home.ts`

```typescript
hero: {
  badge: "HI, I'M A LEAD",  // Updated title
  title: "Product\nStrategist.", // Updated role
  // ...
}
```

**Impact:** Only updates text content on home page.

## How Components Use Configs

### Home Page Example

```tsx
import { homeConfig } from "@/config/home"
import { homeStyles } from "@/config/styles/home"

export default function Home() {
  return (
    <div className={homeStyles.page.className}>
      <h1 className={homeStyles.hero.title.className}>
        {homeConfig.hero.title}
      </h1>
    </div>
  )
}
```

**Flow:**
1. Component imports content config (`homeConfig`)
2. Component imports style config (`homeStyles`)
3. Styles determine HOW it looks (className)
4. Content determines WHAT it displays (text, images)

### Navigation Example

```tsx
import { navigationConfig } from "@/config/navigation"
import { navigationStyles } from "@/config/styles/navigation"

export function Navigation() {
  return (
    <header className={navigationStyles.header.className}>
      <span>{navigationConfig.brand.name}</span>
    </header>
  )
}
```

## Configuration Reference

### Global Theme Properties

| Property | Type | Purpose |
|----------|------|---------|
| `colors` | Object | CSS color tokens |
| `fonts` | Object | Font family definitions |
| `spacing` | Object | Base spacing scale |
| `radius` | Object | Border radius values |
| `breakpoints` | Object | Responsive breakpoints |
| `container` | Object | Container max-width & padding |
| `transitions` | Object | Animation timing |

### Page Style Config Properties

| Property | Type | Purpose |
|----------|------|---------|
| `page` | Object | Page wrapper styles |
| `section` | Object | Section container styles |
| `grid` | Object | Grid layout configuration |
| `typography` | Object | Font sizes, weights, line heights |
| `spacing` | Object | Padding, margins, gaps |
| `responsive` | Object | Breakpoint-specific settings |

### Content Config Properties

| Property | Type | Purpose |
|----------|------|---------|
| `metadata` | Object | Next.js page metadata |
| `hero` | Object | Hero section content |
| `links` | Array | Navigation/footer links |
| `social` | Array | Social media links |
| `achievements` | Array | Metrics/achievements |

## Best Practices

### ✅ DO:
- Edit `/config/theme.ts` for brand-wide changes (colors, fonts)
- Edit `/config/styles/*.ts` for page-specific layout changes
- Edit `/config/*.ts` for content updates
- Keep style configs isolated per page
- Use TypeScript types for safety

### ❌ DON'T:
- Hardcode styles directly in components
- Share style configs between pages (defeats purpose)
- Put content directly in components
- Modify global theme unless intentional brand change

## Migration Path

### Current State:
✅ Home page - Uses config for content AND styles
✅ Navigation - Uses config for content AND styles
⚠️ Case Studies - Uses content config only (styles hardcoded)
⚠️ About/Resume/Contact - Minimal (needs implementation)
⚠️ Footer - Not yet implemented

### Next Steps:
1. Refactor case studies page to use `caseStudiesStyles` config
2. Implement About/Resume/Contact pages using their style configs
3. Implement Footer component using `footerStyles` config

## Customization Guide

### To Change a Single Page Layout:
1. Open `/config/styles/[page-name].ts`
2. Modify the specific section's className or properties
3. Save - only that page updates

### To Change Global Brand Colors:
1. Open `/config/theme.ts`
2. Update `colors` object
3. Save - all pages update consistently

### To Update Page Content:
1. Open `/config/[page-name].ts`
2. Update text, links, or image paths
3. Save - content updates without touching code

## File Size & Performance

All config files are TypeScript objects imported at build time. They add minimal overhead and are tree-shaken by Next.js, meaning only used configs are included in the final bundle.

## Questions?

This architecture ensures:
- ✅ No page affects another's styling
- ✅ Brand consistency maintained globally
- ✅ Easy content updates
- ✅ Type-safe configurations
- ✅ Clear separation of concerns

Need to customize further? Edit the appropriate config file - no component code changes needed!
