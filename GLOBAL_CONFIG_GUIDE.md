# Global Configuration System Guide (v2.5.0)

This guide explains the new global configuration system introduced in v2.5.0, which centralizes brand colors and case study data for maximum maintainability and scalability.

## 🎯 What's New

### 1. Global Brand Color System
**Location:** `/tailwind.config.ts`

All brand colors are now centralized in Tailwind config and can be used throughout the application with Tailwind utility classes:

```typescript
brand: {
  zalando: "#FF4C00",      // Orange
  uba: "#8B0000",          // Dark Red
  cashamm: "#FFA500",      // Orange
  modus: "#663399",        // Purple
  sterling: "#D63637"      // Red
}
```

### 2. JSON-First Case Study Architecture
**Location:** `/json/case-studies/*.json`

All 8 case study JSON files now include a `card` section with complete listing page data:

```json
{
  "card": {
    "company": "ZALANDO",
    "year": "2025",
    "title": "Contextual Self-Help Platform",
    "subtitle": "Transforming Customer Support Through Predictive Design",
    "description": "A proactive platform that anticipates customer needs before they contact support.",
    "metrics": ["33% reduction in inquiries", "€3.2M annual savings", "28% satisfaction improvement"],
    "skills": ["AI", "Product Design", "User Research", "Predictive UX"],
    "href": "/case-study/zalando-contextual",
    "brandColor": "zalando"
  },
  // ... rest of case study data
}
```

### 3. Dynamic Case Study Loading
**Location:** `/lib/load-json-server.ts`

New function `getAllCaseStudyCardsServer()` loads all case study cards from JSON files dynamically.

---

## 📋 File Structure

```
/tailwind.config.ts           # Global brand colors
/lib/load-json-server.ts      # Enhanced with getAllCaseStudyCardsServer()
/app/case-studies/page.tsx    # Refactored to use JSON data
/json/case-studies/
  ├── zalando-contextual.json
  ├── uba-hcm-connect.json
  ├── fraud-analytics.json
  ├── cashamm.json
  ├── uba-redd.json
  ├── zalando-chatbot.json
  ├── orgcompass.json
  └── specta.json
```

---

## 🎨 Using Brand Colors

### In Tailwind Classes

```html
<!-- Backgrounds -->
<div class="bg-brand-zalando">Background</div>

<!-- Borders -->
<div class="border border-brand-uba">Border</div>

<!-- Text -->
<span class="text-brand-modus">Text</span>

<!-- Hover States -->
<button class="bg-brand-sterling hover:opacity-80">Button</button>
```

### In React Components

```tsx
import { caseStudiesPageStyles } from "@/config/styles/case-studies-page"

export default function CaseStudiesCard() {
  return (
    <div className="bg-brand-zalando rounded-lg p-4">
      Case Study Card with Zalando brand color
    </div>
  )
}
```

---

## 📝 Updating Case Study Data

### Step 1: Update the JSON File

Edit `/json/case-studies/[case-study-name].json`:

```json
{
  "card": {
    "company": "YOUR COMPANY",
    "year": "2025",
    "title": "Your Project Title",
    "subtitle": "Your Subtitle",
    "description": "Project description",
    "metrics": ["Metric 1", "Metric 2", "Metric 3"],
    "skills": ["Skill 1", "Skill 2", "Skill 3"],
    "href": "/case-study/your-slug",
    "brandColor": "zalando"  // or uba, cashamm, modus, sterling
  }
}
```

### Step 2: Update the Brand Color (if needed)

Change the `brandColor` value to match one of:
- `zalando` - Orange (#FF4C00)
- `uba` - Dark Red (#8B0000)
- `cashamm` - Orange (#FFA500)
- `modus` - Purple (#663399)
- `sterling` - Red (#D63637)

### Step 3: Save and Deploy

Changes are immediately reflected on the case studies listing page!

---

## 🔄 Changing Global Brand Colors

### To Update a Brand Color:

1. Open `/tailwind.config.ts`
2. Find the `colors.brand` object
3. Update the hex value:

```typescript
colors: {
  brand: {
    zalando: "#FF5500",  // Changed from #FF4C00
    // ... other colors
  }
}
```

4. Save the file - all components using that color instantly update

### Example: Complete Brand Colors Update

```typescript
// tailwind.config.ts
colors: {
  // ... other colors
  brand: {
    zalando: "#FF4C00",      // Orange
    uba: "#8B0000",          // Dark Red
    cashamm: "#FFA500",      // Orange
    modus: "#663399",        // Purple
    sterling: "#D63637"      // Red
  }
}
```

---

## 📊 Case Study Data Structure

Each case study JSON file now has two main sections:

### `card` Section (for listing page)
Used on `/case-studies` listing page:
- `company` - Company/brand name
- `year` - Project year
- `title` - Project title
- `subtitle` - Project subtitle
- `description` - Brief description
- `metrics` - Array of key metrics (usually 3)
- `skills` - Array of technologies/methodologies used
- `href` - Link to detail page
- `brandColor` - Reference to brand color key

### Detail Page Sections
Used on individual case study detail pages:
- `metadata` - SEO metadata (title, description)
- `hero` - Hero section content
- `projectSummary` - Project overview and details
- `goals` - Project goals
- `results` - Results and metrics
- `tags` - Topic tags

---

## ✨ Benefits of This System

### 1. **Single Source of Truth**
- Brand colors defined once, used everywhere
- Case study data updated in one place

### 2. **Instant Updates**
- Change a color and all components update automatically
- Update case study JSON and listing page updates instantly

### 3. **No Code Changes Needed**
- Update colors without touching component code
- Add new case studies without component modifications

### 4. **Type-Safe**
- Full TypeScript support throughout
- Autocomplete for all configurations

### 5. **Scalable**
- Easy to add new brands or case studies
- Clear separation of concerns

### 6. **Zero Breaking Changes**
- Graceful fallback to TypeScript config if JSON unavailable
- Fully backwards compatible

---

## 🔍 Technical Details

### How the Case Studies Page Works

```typescript
// /app/case-studies/page.tsx

export default async function CaseStudiesPage() {
  // Load from JSON (new way)
  const studiesFromJson = await getAllCaseStudyCardsServer()

  // Fallback to TypeScript config (old way)
  const studies = studiesFromJson.length > 0
    ? studiesFromJson
    : caseStudiesPageConfig.studies

  // Map studies with brand colors
  {studies.map((study) => (
    <div
      key={study.company}
      className={`${getGradientBorderClass(study.brandColor)} rounded-[8px] p-[1px]`}
    >
      {/* Card content */}
    </div>
  ))}
}

function getGradientBorderClass(brandColor: string): string {
  const brandColors = {
    zalando: "bg-brand-zalando",
    uba: "bg-brand-uba",
    cashamm: "bg-brand-cashamm",
    modus: "bg-brand-modus",
    sterling: "bg-brand-sterling"
  }
  return brandColors[brandColor] || "bg-gray-400"
}
```

### How the Loader Works

```typescript
// /lib/load-json-server.ts

export async function getAllCaseStudyCardsServer() {
  try {
    const caseStudyIds = [
      'zalando-contextual',
      'uba-hcm-connect',
      // ... all 8 case studies
    ]

    const cards = []
    for (const id of caseStudyIds) {
      const data = await getCaseStudyDataServer(id)
      if (data?.card) {
        cards.push(data.card)
      }
    }

    return cards
  } catch (error) {
    console.warn(`Failed to load case study cards:`, error)
    return []
  }
}
```

---

## 📚 Related Documentation

- **CONFIG_ARCHITECTURE.md** - Complete configuration system guide
- **design-system/colors.md** - Brand color system and usage
- **CHANGELOG.md** - Version 2.5.0 release notes
- **README.md** - Project overview

---

## ❓ FAQ

### Q: Can I use brand colors outside of case studies?
**A:** Yes! Any Tailwind utility class can use brand colors:
```html
<div class="bg-brand-zalando text-white border-2 border-brand-modus">
  Multi-brand element
</div>
```

### Q: What if I want to add a new brand?
**A:**
1. Add a new color to `/tailwind.config.ts` in the `brand` object
2. Add a new case study JSON file in `/json/case-studies/`
3. Include the new brand key in the `getAllCaseStudyCardsServer()` function in `/lib/load-json-server.ts`

### Q: Do changes require rebuilding?
**A:** For brand color changes - only the dev server needs to restart. For case study JSON changes - no build needed! Changes are picked up on next page load.

### Q: What's the fallback if JSON files don't load?
**A:** The system automatically falls back to the TypeScript config (`caseStudiesPageConfig`) defined in `/config/case-studies-page.ts`, ensuring no breaking changes.

### Q: Can I use this system for other pages?
**A:** Absolutely! The pattern can be extended to other pages. Use `getPageDataServer()` from `/lib/load-json-server.ts` to load JSON data for any page.

---

## 🚀 Next Steps

1. **Explore brand colors** in the design-system/colors.md documentation
2. **Update case study data** in `/json/case-studies/` as needed
3. **Add new case studies** by creating new JSON files following the same structure
4. **Use brand colors** throughout your components and pages

---

**Last Updated:** October 26, 2025
**Version:** 2.5.0
