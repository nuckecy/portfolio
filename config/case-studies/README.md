# Case Study Configuration System

## Overview
Each case study has its own independent configuration file that controls all styling, layout, and content preferences. This allows each case study to have a unique look and feel while sharing only the header and footer components.

## File Structure
```
/config/case-studies/
  ├── README.md                    (this file)
  ├── fraud-analytics.ts           (Fraud Analytics config)
  ├── orgcompass.ts                (OrgCompass config)
  ├── specta.ts                    (Specta config)
  ├── uba-hcm-connect.ts          (UBA HCM config)
  ├── uba-redd.ts                  (UBA REDD config)
  ├── cashamm.ts                   (Cashamm config)
  ├── zalando-chatbot.ts          (Zalando Chatbot config)
  └── zalando-contextual.ts       (Zalando Contextual config)
```

## How It Works

### 1. Each Case Study Has Its Own Config
Every case study has a TypeScript configuration file that defines:
- **Hero settings** (height, image, overlay, badges)
- **Color schemes** (gradients, card colors)
- **Layout preferences** (full-width images, sidebar position)
- **Metrics display** (style, position, values)
- **Navigation sections** (table of contents)
- **Project metadata** (company, role, team)

### 2. Configs Are Independent
Changes to one config file ONLY affect that case study. For example:
- Changing `fraud-analytics.ts` only affects the Fraud Analytics page
- Other case studies remain unchanged

### 3. Easy Customization
To customize a case study, just edit its config file:

```typescript
// /config/case-studies/fraud-analytics.ts
export const fraudAnalyticsConfig = {
  hero: {
    height: "67vh",  // Change this to "80vh" to make hero taller
    // ... rest of config
  }
}
```

## Configuration Options

### Hero Section
```typescript
hero: {
  height: "67vh",           // Hero section height
  minHeight: "500px",       // Minimum height for small screens
  image: {
    url: "...",             // Hero background image URL
    alt: "..."              // Alt text for accessibility
  },
  overlay: {
    gradient: "..."         // Tailwind gradient classes for overlay
  },
  badges: [                 // Company/year badges
    { text: "Company" },
    { text: "2019" }
  ],
  title: "...",             // Main title
  titleSize: "...",         // Tailwind size classes
  description: "...",       // Subtitle/description
  descriptionSize: "..."    // Tailwind size classes
}
```

### Metrics
```typescript
metrics: {
  position: "below-hero",   // "below-hero" | "in-hero" | "none"
  style: "clean",           // "clean" | "pills" | "cards"
  background: "...",        // Background color
  items: [                  // Metric values
    { value: "78%", label: "Fraud Reduction" }
  ],
  fontSize: {
    value: "...",           // Size for metric values
    label: "..."            // Size for metric labels
  }
}
```

### Layout
```typescript
layout: {
  imagesFullWidth: true,    // Break images out of container
  imageBackground: "...",   // Background for full-width sections
  sidebarSticky: true,      // Keep navigation sticky
  sidebarTop: "top-24"      // Top position for sticky sidebar
}
```

### Colors
```typescript
colors: {
  gradients: {
    hero: "from-blue-500/10 via-purple-500/10 to-pink-500/10",
    solution: "from-green-500/10 via-emerald-500/10 to-teal-500/10",
    // ... more gradients
  },
  challengeCards: [         // Colors for challenge cards
    { border: "...", bg: "...", iconColor: "..." }
  ],
  impactMetrics: [          // Colors for impact metric cards
    { gradient: "...", border: "..." }
  ]
}
```

### Navigation
```typescript
sections: [                 // Table of contents sections
  { id: "overview", title: "Overview" },
  { id: "challenge", title: "The Challenge" }
],
navigation: {
  prev: { url: "/case-study/...", label: "..." },
  next: { url: "/case-study/...", label: "..." }
}
```

### Project Metadata
```typescript
project: {
  company: "Sterling Bank",
  year: "2019",
  role: "Solo UX Engineer",
  roleDetails: "Research, Design, Frontend Development",
  team: "Cross-functional (5)",
  teamDetails: "...",
  market: "Nigeria",
  marketDetails: "Fintech, Banking Security"
}
```

## Workflow

### Creating a New Case Study
1. Copy an existing config file (e.g., `fraud-analytics.ts`)
2. Rename it to match your case study slug
3. Update all values to match your new case study
4. The page will automatically use your config

### Updating an Existing Case Study
1. Open the config file (e.g., `/config/case-studies/fraud-analytics.ts`)
2. Modify any values you want to change
3. Save the file
4. Changes appear immediately (with hot reload)

### Common Customizations

**Change hero height:**
```typescript
hero: { height: "80vh" }  // was "67vh"
```

**Switch metric style:**
```typescript
metrics: { style: "pills" }  // was "clean"
```

**Disable full-width images:**
```typescript
layout: { imagesFullWidth: false }  // was true
```

**Change color scheme:**
```typescript
colors: {
  gradients: {
    hero: "from-purple-500/10 to-pink-500/10"  // change any gradient
  }
}
```

## Shared Components

These components are consistent across ALL case studies:
- Header (top navigation with theme toggle)
- Footer (prev/next case study navigation)

Everything else can be customized per case study.

## Benefits

✅ **Easy maintenance** - All styling in one place per case study
✅ **Independence** - Changes don't affect other case studies  
✅ **Type safety** - TypeScript ensures valid configurations
✅ **Version control** - Track changes to each case study's design
✅ **Quick updates** - No need to hunt through component code
✅ **Consistency** - Standard structure across all configs
