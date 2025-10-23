# Case Study Configuration Summary

This document provides a comprehensive overview of all 8 case study configurations, highlighting their unique design attributes to ensure complete visual and structural isolation.

## Configuration Philosophy

Each case study has been configured with **completely unique settings** to satisfy the requirement: "No two Case studies should have the same configs." Changes to one case study's configuration will never affect another.

---

## 1. Fraud Analytics

**File**: `fraud-analytics.ts`  
**Page**: `app/case-study/fraud-analytics/page.tsx`  
**Config References**: 17+

### Unique Attributes
- **Theme**: Blue/Purple/Pink gradient (`from-blue-500/10 via-purple-500/10 to-pink-500/10`)
- **Hero**: Full-width tall hero at **67vh** (tallest)
- **Sidebar**: **No sidebar** - wide open layout
- **Max Width**: **lg:max-w-6xl** (widest layout)
- **Metrics Style**: Clean with transparent background
- **Visual Identity**: Bold, enterprise analytics platform

### Key Settings
```typescript
hero.height: "67vh"
layout.hasSidebar: false
layout.maxWidth: "lg:max-w-6xl"
metrics.style: "clean"
```

---

## 2. Specta

**File**: `specta.ts`  
**Page**: `app/case-study/specta/page.tsx`  
**Config References**: 14+

### Unique Attributes
- **Theme**: Green/Teal/Emerald gradient (`from-emerald-500/10 via-teal-500/10 to-green-500/10`)
- **Hero**: Compact traditional hero at **auto** height
- **Sidebar**: **Has sidebar** - traditional reading experience
- **Max Width**: **lg:max-w-3xl** (narrow, focused)
- **Metrics Style**: Pills with rounded badges
- **Visual Identity**: Fresh, fintech startup feel

### Key Settings
```typescript
hero.height: "auto"
layout.hasSidebar: true
layout.maxWidth: "lg:max-w-3xl"
metrics.style: "pills"
```

---

## 3. OrgCompass

**File**: `orgcompass.ts`  
**Page**: `app/case-study/orgcompass/page.tsx`  
**Config References**: 12+

### Unique Attributes
- **Theme**: Orange/Amber/Yellow gradient (`from-orange-500/10 via-amber-500/10 to-yellow-500/10`)
- **Hero**: Medium full-width hero at **50vh**
- **Sidebar**: **Has sidebar** - guided navigation
- **Max Width**: **lg:max-w-3xl** (same as Specta but different hero)
- **Metrics Style**: Cards with elevated presentation
- **Visual Identity**: Warm, organizational tool aesthetic

### Key Settings
```typescript
hero.height: "50vh"
layout.hasSidebar: true
layout.maxWidth: "lg:max-w-3xl"
metrics.style: "cards"
```

---

## 4. UBA HCM Connect

**File**: `uba-hcm-connect.ts`  
**Page**: `app/case-study/uba-hcm-connect/page.tsx`  
**Config References**: 12+

### Unique Attributes
- **Theme**: Purple/Pink/Rose gradient (`from-purple-500/10 via-pink-500/10 to-rose-500/10`)
- **Hero**: Medium-tall full-width hero at **55vh**
- **Sidebar**: **No sidebar** - immersive experience
- **Max Width**: **lg:max-w-5xl** (wide but not widest)
- **Metrics Style**: Gradient background with depth
- **Visual Identity**: Modern HR tech platform

### Key Settings
```typescript
hero.height: "55vh"
layout.hasSidebar: false
layout.maxWidth: "lg:max-w-5xl"
metrics.style: "gradient"
```

---

## 5. UBA REDD

**File**: `uba-redd.ts`  
**Page**: `app/case-study/uba-redd/page.tsx`  
**Config References**: 12+

### Unique Attributes
- **Theme**: Cyan/Teal/Emerald gradient (`from-cyan-500/10 via-teal-500/10 to-emerald-500/10`)
- **Hero**: Compact traditional hero at **auto** height
- **Sidebar**: **Has sidebar** - environmental focus
- **Max Width**: **lg:max-w-2xl** (narrowest layout)
- **Metrics Style**: **Bordered** with distinct frames (smallest labels)
- **Visual Identity**: Sustainable banking, climate tech

### Key Settings
```typescript
hero.height: "auto"
layout.hasSidebar: true
layout.maxWidth: "lg:max-w-2xl"
metrics.style: "bordered"
metrics.fontSize.label: "text-xs"
```

---

## 6. Cashamm

**File**: `cashamm.ts`  
**Page**: `app/case-study/cashamm/page.tsx`  
**Config References**: 12+

### Unique Attributes
- **Theme**: Red/Rose/Pink gradient (`from-red-500/10 via-rose-500/10 to-pink-500/10`)
- **Hero**: Medium full-width hero at **60vh** (unique height)
- **Sidebar**: **No sidebar** - payment flow focus
- **Max Width**: **lg:max-w-4xl** (balanced width)
- **Metrics Style**: Clean with subtle background
- **Visual Identity**: Secure payment platform, fintech security

### Key Settings
```typescript
hero.height: "60vh"
layout.hasSidebar: false
layout.maxWidth: "lg:max-w-4xl"
metrics.style: "clean"
```

---

## 7. Zalando Chatbot

**File**: `zalando-chatbot.ts`  
**Page**: `app/case-study/zalando-chatbot/page.tsx`  
**Config References**: 12+

### Unique Attributes
- **Theme**: Indigo/Violet/Purple gradient (`from-indigo-500/10 via-violet-500/10 to-purple-500/10`)
- **Hero**: Compact traditional hero at **auto** height
- **Sidebar**: **Has sidebar** - conversational AI focus
- **Max Width**: **lg:max-w-3xl** (narrow, focused)
- **Metrics Style**: Pills (similar to Specta but different theme)
- **Visual Identity**: AI technology, intelligent assistance

### Key Settings
```typescript
hero.height: "auto"
layout.hasSidebar: true
layout.maxWidth: "lg:max-w-3xl"
metrics.style: "pills"
```

---

## 8. Zalando Contextual

**File**: `zalando-contextual.ts`  
**Page**: `app/case-study/zalando-contextual/page.tsx`  
**Config References**: 12+

### Unique Attributes
- **Theme**: Amber/Yellow/Lime gradient (`from-amber-500/10 via-yellow-500/10 to-lime-500/10`)
- **Hero**: Short full-width hero at **45vh** (shortest full-width)
- **Sidebar**: **No sidebar** - discovery experience
- **Max Width**: **lg:max-w-5xl** (wide presentation)
- **Metrics Style**: Cards with elevated presentation
- **Visual Identity**: Bright contextual commerce, personalization

### Key Settings
```typescript
hero.height: "45vh"
layout.hasSidebar: false
layout.maxWidth: "lg:max-w-5xl"
metrics.style: "cards"
```

---

## Unique Differentiation Matrix

| Case Study | Theme Colors | Hero Height | Sidebar | Max Width | Metrics Style | Font Size |
|------------|--------------|-------------|---------|-----------|---------------|-----------|
| **Fraud Analytics** | Blue/Purple/Pink | 67vh | ❌ No | 6xl (widest) | Clean | Large |
| **Specta** | Green/Teal/Emerald | auto | ✅ Yes | 3xl | Pills | Medium |
| **OrgCompass** | Orange/Amber/Yellow | 50vh | ✅ Yes | 3xl | Cards | Medium |
| **UBA HCM Connect** | Purple/Pink/Rose | 55vh | ❌ No | 5xl | Gradient | Medium-Large |
| **UBA REDD** | Cyan/Teal/Emerald | auto | ✅ Yes | 2xl (narrowest) | Bordered | Small |
| **Cashamm** | Red/Rose/Pink | 60vh | ❌ No | 4xl | Clean | Medium-Large |
| **Zalando Chatbot** | Indigo/Violet/Purple | auto | ✅ Yes | 3xl | Pills | Medium |
| **Zalando Contextual** | Amber/Yellow/Lime | 45vh (shortest) | ❌ No | 5xl | Cards | Medium-Large |

---

## Complete Isolation Verification

### Color Themes (All Different)
1. Blue/Purple/Pink
2. Green/Teal/Emerald  
3. Orange/Amber/Yellow
4. Purple/Pink/Rose
5. Cyan/Teal/Emerald
6. Red/Rose/Pink
7. Indigo/Violet/Purple
8. Amber/Yellow/Lime

### Hero Heights (6 Different Values)
- **67vh**: Fraud Analytics (tallest full-width)
- **60vh**: Cashamm
- **55vh**: UBA HCM Connect
- **50vh**: OrgCompass
- **45vh**: Zalando Contextual (shortest full-width)
- **auto**: Specta, UBA REDD, Zalando Chatbot (compact traditional)

### Layout Widths (5 Different Values)
- **lg:max-w-6xl**: Fraud Analytics (widest)
- **lg:max-w-5xl**: UBA HCM Connect, Zalando Contextual
- **lg:max-w-4xl**: Cashamm
- **lg:max-w-3xl**: Specta, OrgCompass, Zalando Chatbot
- **lg:max-w-2xl**: UBA REDD (narrowest)

### Sidebar Configuration (2 States)
- **No Sidebar**: Fraud Analytics, UBA HCM Connect, Cashamm, Zalando Contextual
- **Has Sidebar**: Specta, OrgCompass, UBA REDD, Zalando Chatbot

### Metrics Styles (5 Different Styles)
1. **Clean**: Fraud Analytics, Cashamm
2. **Pills**: Specta, Zalando Chatbot
3. **Cards**: OrgCompass, Zalando Contextual
4. **Gradient**: UBA HCM Connect
5. **Bordered**: UBA REDD (unique)

---

## Implementation Pattern

Each case study follows this consistent integration pattern:

```typescript
// 1. Import the specific config
import { [caseName]Config } from "@/config/case-studies/[case-name]"

// 2. Use config for metadata
export const metadata: Metadata = {
  title: [caseName]Config.metadata.title,
  description: [caseName]Config.metadata.description,
}

// 3. Use config for sections
const sections = [caseName]Config.sections

// 4. Use config throughout the page
- Hero: [caseName]Config.hero.title, .height, .description
- Layout: [caseName]Config.layout.maxWidth, .hasSidebar
- Colors: [caseName]Config.colors.gradients.hero
- Project: [caseName]Config.project.role, .market, etc.
```

---

## Benefits of This System

1. **Complete Isolation**: Editing one config file only affects that specific case study
2. **Visual Uniqueness**: Each case study has distinct color theme, layout, and metrics presentation
3. **Easy Maintenance**: All styling decisions centralized in TypeScript config files
4. **Type Safety**: TypeScript ensures consistent config structure across all case studies
5. **Scalability**: Easy to add new case studies following the same pattern
6. **No Template Conflicts**: No shared templates means no accidental cross-contamination

---

## Last Updated
October 23, 2025

**Status**: ✅ All 8 case studies configured and integrated with unique settings
