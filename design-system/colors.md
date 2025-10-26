# Color System

The color system is built on CSS variables and uses HSL color format for maximum flexibility and dynamic theming support.

## 🎨 Brand Colors (NEW in v2.5.0)

### Global Brand Color System

All brand colors are now centralized in `tailwind.config.ts` for consistent use across the entire application:

```typescript
brand: {
  zalando: "#FF4C00",      // Orange - Primary brand color
  uba: "#8B0000",          // Dark Red - Banking/Financial
  cashamm: "#FFA500",      // Orange - Community Commerce
  modus: "#663399",        // Purple - Enterprise/HR
  sterling: "#D63637"      // Red - Financial Services
}
```

### Usage in Components

```html
<!-- Background -->
<div class="bg-brand-zalando">Orange background</div>

<!-- Borders -->
<div class="border-2 border-brand-uba">Red border</div>

<!-- Text -->
<span class="text-brand-modus">Purple text</span>

<!-- Multiple Utilities -->
<button class="bg-brand-sterling text-white hover:opacity-80">
  Action Button
</button>
```

### Brand Color Usage Guidelines

| Brand | Color | Hex | Usage |
|-------|-------|-----|-------|
| Zalando | Orange | #FF4C00 | E-commerce, Customer Support, Self-Help |
| UBA Group | Dark Red | #8B0000 | Banking, HR Systems, Financial Services |
| Cashamm | Orange | #FFA500 | Community Commerce, Social Enterprise |
| Modus Create | Purple | #663399 | Enterprise, HR Intelligence, SaaS |
| Sterling Bank | Red | #D63637 | Fintech, Lending, Fraud Analytics |

### Updating Brand Colors

To change a brand color globally:

1. Open `/tailwind.config.ts`
2. Find the `brand` object in the `colors` section
3. Update the color value
4. Save - all components using that brand color update instantly

**Example: Updating Zalando brand color**
```typescript
// Before
zalando: "#FF4C00",

// After
zalando: "#FF5500",  // New color
```

## 🎨 CSS Variables

All colors are defined as CSS variables in `app/globals.css`:

```css
:root {
  /* Light Mode Colors */
  --background: 0 0% 100%;           /* Pure white */
  --foreground: 0 0% 3.9%;           /* Almost black */
  --card: 0 0% 100%;                 /* Card background (white) */
  --card-foreground: 0 0% 3.9%;      /* Card text (almost black) */
  --popover: 0 0% 100%;              /* Popover background */
  --popover-foreground: 0 0% 3.9%;   /* Popover text */
  --primary: 0 0% 9%;                /* Primary action color (dark gray) */
  --primary-foreground: 0 0% 98%;    /* Primary text (light) */
  --secondary: 0 0% 96.1%;           /* Secondary background */
  --secondary-foreground: 0 0% 9%;   /* Secondary text */
  --muted: 0 0% 96.1%;               /* Disabled/muted elements */
  --muted-foreground: 0 0% 25%;      /* Muted text */
  --accent: 0 0% 96.1%;              /* Accent elements */
  --accent-foreground: 0 0% 9%;      /* Accent text */
  --border: 0 0% 89.8%;              /* Border color */
  --input: 0 0% 89.8%;               /* Input background */
  --ring: 0 0% 3.9%;                 /* Focus ring color */
  --pure-black: 0 0% 0%;             /* Pure black for special use */
}

.dark {
  /* Dark Mode Colors */
  --background: 0 0% 3.9%;           /* Almost black */
  --foreground: 0 0% 98%;            /* Almost white */
  --card: 0 0% 3.9%;                 /* Card background (dark) */
  --card-foreground: 0 0% 98%;       /* Card text (light) */
  --popover: 0 0% 3.9%;              /* Popover background */
  --popover-foreground: 0 0% 98%;    /* Popover text */
  --primary: 0 0% 98%;               /* Primary action (light) */
  --primary-foreground: 0 0% 9%;     /* Primary text (dark) */
  --secondary: 0 0% 14.9%;           /* Secondary background */
  --secondary-foreground: 0 0% 98%;  /* Secondary text */
  --muted: 0 0% 14.9%;               /* Disabled/muted elements */
  --muted-foreground: 0 0% 75%;      /* Muted text */
  --accent: 0 0% 14.9%;              /* Accent elements */
  --accent-foreground: 0 0% 98%;     /* Accent text */
  --border: 0 0% 14.9%;              /* Border color */
  --input: 0 0% 14.9%;               /* Input background */
  --ring: 0 0% 83.1%;                /* Focus ring color */
  --pure-black: 0 0% 0%;             /* Pure black */
}
```

## 🎭 Color Palette

### Light Mode
| Variable | HSL Value | RGB Equivalent | Usage |
|----------|-----------|-----------------|--------|
| Background | 0 0% 100% | #FFFFFF | Page background |
| Foreground | 0 0% 3.9% | #0A0A0A | Primary text |
| Card | 0 0% 100% | #FFFFFF | Card/section background |
| Primary | 0 0% 9% | #161616 | Buttons, links, headers |
| Secondary | 0 0% 96.1% | #F5F5F5 | Secondary backgrounds |
| Muted | 0 0% 96.1% | #F5F5F5 | Disabled elements |
| Border | 0 0% 89.8% | #E5E5E5 | Borders, dividers |
| Pure Black | 0 0% 0% | #000000 | Maximum contrast |

### Dark Mode
| Variable | HSL Value | RGB Equivalent | Usage |
|----------|-----------|-----------------|--------|
| Background | 0 0% 3.9% | #0A0A0A | Page background |
| Foreground | 0 0% 98% | #FAFAFA | Primary text |
| Card | 0 0% 3.9% | #0A0A0A | Card/section background |
| Primary | 0 0% 98% | #FAFAFA | Buttons, links, headers |
| Secondary | 0 0% 14.9% | #262626 | Secondary backgrounds |
| Muted | 0 0% 14.9% | #262626 | Disabled elements |
| Border | 0 0% 14.9% | #262626 | Borders, dividers |

## 💻 Usage in Code

### CSS
```css
/* Using CSS variables directly */
.button {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  border: 1px solid hsl(var(--border));
}
```

### Tailwind CSS
```tsx
<div className="bg-background text-foreground">
  <button className="bg-primary text-primary-foreground">
    Click me
  </button>
</div>
```

### React Component
```tsx
import { forwardRef } from "react"

const Button = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={`bg-primary text-primary-foreground ${className}`}
    {...props}
  />
))
```

## 🌓 Dark Mode Implementation

Dark mode is automatically applied when:
1. User selects dark mode in system preferences
2. `.dark` class is added to `<html>` element

```tsx
// In layout.tsx
<html>
  <head>
    {/* Dark mode automatically applied based on system preference */}
  </head>
  <body>
    {/* Content */}
  </body>
</html>
```

## ♿ Accessibility

### Color Contrast Ratios
All colors meet WCAG AA standards:
- Text on background: **19.1:1** (AAA)
- Buttons and interactive: **19.1:1** (AAA)
- Secondary text: **8:1** (AAA)

### Don't Rely on Color Alone
- Use patterns or icons in addition to color
- Include text labels for colored elements
- Provide focus indicators for interactive elements

## 📝 Color Usage Guidelines

### Primary
- Main call-to-action buttons
- Links and headers
- Active states

### Secondary
- Backgrounds for secondary content
- Disabled states
- Subtle backgrounds

### Accent
- Special highlights
- Important information
- Visual emphasis

### Muted
- Disabled form fields
- Placeholder text
- Secondary information

### Border
- Dividing lines
- Input borders
- Card borders

## 🔄 Dynamic Theme Switching

The design system supports runtime theme switching without page reload:

```tsx
// Toggle dark mode
document.documentElement.classList.toggle('dark')
```

All CSS variables automatically update when the `.dark` class is toggled.

## 📱 Color Consistency

Colors remain consistent across:
- ✓ Light and dark modes
- ✓ All browsers
- ✓ All screen sizes
- ✓ Print media (when applicable)
