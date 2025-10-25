# Dark Mode

Implementation guide for the dark mode theme system and best practices.

## 🌓 Dark Mode Overview

The portfolio supports seamless switching between light and dark themes:

- **Default**: Follows system preference automatically
- **Manual toggle**: Users can switch anytime
- **Persistent**: Choice is saved to localStorage
- **No page reload**: Instant transition between modes

## 🎨 Color System

### Light Mode (Default)
```css
:root {
  --background: 0 0% 100%;           /* White */
  --foreground: 0 0% 3.9%;           /* Almost black */
  --card: 0 0% 100%;                 /* White */
  --primary: 0 0% 9%;                /* Dark gray */
  --secondary: 0 0% 96.1%;           /* Light gray */
  --border: 0 0% 89.8%;              /* Medium gray */
  /* ...more variables... */
}
```

### Dark Mode
```css
.dark {
  --background: 0 0% 3.9%;           /* Almost black */
  --foreground: 0 0% 98%;            /* Almost white */
  --card: 0 0% 3.9%;                 /* Very dark gray */
  --primary: 0 0% 98%;               /* Light gray/white */
  --secondary: 0 0% 14.9%;           /* Dark gray */
  --border: 0 0% 14.9%;              /* Lighter gray */
  /* ...more variables... */
}
```

### Color Differences

| Property | Light Mode | Dark Mode | Purpose |
|----------|-----------|-----------|---------|
| Background | #FFFFFF | #0A0A0A | Page background |
| Text | #0A0A0A | #FAFAFA | Primary text |
| Card | #FFFFFF | #0A0A0A | Section backgrounds |
| Border | #E5E5E5 | #262626 | Dividing lines |
| Hover | #F5F5F5 | #262626 | Interactive hover |

## 🔄 Implementation

### Theme Provider Setup

```tsx
// app/providers.tsx
'use client'

import { ThemeProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
}
```

### Layout Wrapper

```tsx
// app/layout.tsx
import { Providers } from './providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
```

### Theme Toggle Button

```tsx
'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg hover:bg-secondary"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}
```

## 🎯 Using Dark Mode in Components

### Tailwind Dark Mode Classes

```tsx
// Apply dark mode specific styles
<div className="bg-white dark:bg-slate-950">
  Content
</div>

<p className="text-black dark:text-white">
  Text that adapts to theme
</p>

<button className="bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700">
  Interactive element
</button>
```

### CSS Variables (Recommended)

All colors should use CSS variables which automatically switch:

```tsx
// ✓ Good: Uses CSS variables
<div className="bg-card text-foreground">
  Content adapts to theme
</div>

// ✗ Avoid: Hard-coded colors
<div className="bg-white dark:bg-black">
  Manual theme switching required
</div>
```

### Component Pattern

```tsx
// Card component (automatically themed)
<Card className="bg-card text-foreground border-border">
  <CardHeader>
    <CardTitle className="text-foreground">Title</CardTitle>
  </CardHeader>
  <CardContent>
    {/* Automatically uses theme colors */}
  </CardContent>
</Card>
```

## 🎨 Dark Mode Patterns

### Text Colors

```tsx
// Primary text (auto-themed)
<p className="text-foreground">
  Primary content
</p>

// Secondary text (muted)
<p className="text-muted-foreground">
  Secondary or disabled content
</p>

// Links
<a href="#" className="text-primary hover:underline">
  Link text
</a>
```

### Backgrounds

```tsx
// Page background (auto-themed)
<div className="bg-background min-h-screen">
  Page content
</div>

// Cards and sections
<div className="bg-card rounded-lg p-6">
  Card content
</div>

// Secondary backgrounds
<div className="bg-secondary p-4">
  Secondary section
</div>
```

### Interactive Elements

```tsx
// Buttons adapt to theme
<button className="bg-primary text-primary-foreground hover:opacity-90">
  Interactive button
</button>

// Inputs adapt to theme
<input 
  className="bg-input text-foreground border-border focus:ring-ring"
  type="text"
/>

// Hoverable elements
<div className="hover:bg-secondary transition-colors">
  Hover area
</div>
```

### Borders and Dividers

```tsx
// Auto-themed borders
<div className="border border-border">
  Content with border
</div>

// Separators
<hr className="border-border" />

// Subtle dividers
<div className="border-l border-border pl-4">
  Content with subtle border
</div>
```

## 🌓 Testing Dark Mode

### Manual Testing

```
1. Open DevTools (F12)
2. Command Palette (Ctrl+Shift+P)
3. Type "Dark mode"
4. Toggle theme
5. Verify:
   ✓ All text readable
   ✓ Contrast acceptable
   ✓ Images display correctly
   ✓ Colors appropriate
   ✓ Buttons clickable
```

### System Preference

```typescript
// Test system preference
const isDark = window.matchMedia(
  '(prefers-color-scheme: dark)'
).matches

// Listen for changes
window.matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (e) => {
    console.log('System theme changed:', e.matches)
  })
```

### Color Contrast in Dark Mode

Ensure all text meets WCAG standards in dark mode:

| Text Type | Light Mode | Dark Mode | Min Ratio |
|-----------|-----------|----------|-----------|
| Body text | Black on white | White on black | 4.5:1 |
| Links | Primary on white | Primary on black | 4.5:1 |
| Disabled | Gray on white | Gray on black | 3:1 |

## 🎯 Dark Mode Best Practices

### ✓ DO

- Use CSS variables consistently
- Test all components in both modes
- Ensure sufficient color contrast
- Use semantic color names (primary, secondary, etc.)
- Keep the toggle easily accessible
- Save user preference
- Respect system preference

### ✗ DON'T

- Hard-code colors (#000, #FFF)
- Use inverted colors for images
- Apply dark filter to all images
- Make dark mode too bright or too dim
- Use pure black (#000000) as primary background
- Use pure white (#FFFFFF) for dark text
- Force dark mode on all users

## 🎨 Color Contrast Examples

### Good Contrast

```tsx
// Light mode ✓ (19.1:1)
<div className="bg-white text-black">
  High contrast
</div>

// Dark mode ✓ (19.1:1)
<div className="dark bg-slate-950 text-white">
  High contrast
</div>
```

### Poor Contrast

```tsx
// Light mode ✗ (1.3:1)
<div className="bg-white text-gray-300">
  Too subtle
</div>

// Dark mode ✗ (1.3:1)
<div className="dark bg-slate-950 text-gray-700">
  Too subtle
</div>
```

## 📱 Images in Dark Mode

### Logo Adaptation

```tsx
// Conditionally load appropriate logo
<img 
  src="/logo-light.svg" 
  alt="Logo"
  className="hidden dark:block"
/>
<img 
  src="/logo-dark.svg" 
  alt="Logo"
  className="block dark:hidden"
/>
```

### Photo Treatment

```tsx
// Don't invert photos - add border instead
<img 
  src="photo.jpg" 
  alt="Description"
  className="rounded-lg border border-border"
/>

// For screenshots, consider adding white background
<img 
  src="screenshot.png" 
  alt="Description"
  className="rounded-lg bg-white dark:bg-slate-100 p-2"
/>
```

### Icons

```tsx
// Icons use currentColor by default
<svg className="text-foreground">
  {/* Icon content */}
</svg>

// Adjust weight for visibility
<svg className="text-muted-foreground">
  {/* Lighter icon for secondary use */}
</svg>
```

## 🔌 Theme Persistence

### localStorage Implementation

```typescript
// Save theme preference
function saveTheme(theme: 'light' | 'dark') {
  localStorage.setItem('theme', theme)
  // Also update document
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// Load theme preference
function loadTheme() {
  const saved = localStorage.getItem('theme')
  const isDark = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches
  
  return saved || (isDark ? 'dark' : 'light')
}
```

## 🎨 CSS Variables Reference

All available theme variables:

```css
/* Light Mode */
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --card: 0 0% 100%;
  --card-foreground: 0 0% 3.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 0 0% 3.9%;
  --primary: 0 0% 9%;
  --primary-foreground: 0 0% 98%;
  --secondary: 0 0% 96.1%;
  --secondary-foreground: 0 0% 9%;
  --muted: 0 0% 96.1%;
  --muted-foreground: 0 0% 25%;
  --accent: 0 0% 96.1%;
  --accent-foreground: 0 0% 9%;
  --border: 0 0% 89.8%;
  --input: 0 0% 89.8%;
  --ring: 0 0% 3.9%;
  --pure-black: 0 0% 0%;
}

/* Dark Mode */
.dark {
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;
  --card: 0 0% 3.9%;
  --card-foreground: 0 0% 98%;
  --popover: 0 0% 3.9%;
  --popover-foreground: 0 0% 98%;
  --primary: 0 0% 98%;
  --primary-foreground: 0 0% 9%;
  --secondary: 0 0% 14.9%;
  --secondary-foreground: 0 0% 98%;
  --muted: 0 0% 14.9%;
  --muted-foreground: 0 0% 75%;
  --accent: 0 0% 14.9%;
  --accent-foreground: 0 0% 98%;
  --border: 0 0% 14.9%;
  --input: 0 0% 14.9%;
  --ring: 0 0% 83.1%;
  --pure-black: 0 0% 0%;
}
```

## 🔍 Dark Mode Debugging

### Check Current Theme

```typescript
// In browser console
console.log(document.documentElement.classList)
// Should show 'dark' or empty

// Check computed styles
getComputedStyle(document.documentElement)
  .getPropertyValue('--background')
// Should show appropriate color
```

### Test Theme Switch

```typescript
// Force dark mode
document.documentElement.classList.add('dark')

// Force light mode
document.documentElement.classList.remove('dark')

// Check specific variable
getComputedStyle(document.documentElement)
  .getPropertyValue('--foreground')
```

## 📋 Dark Mode Implementation Checklist

When adding new components:

- ✓ Use CSS variables, not hard-coded colors
- ✓ Test in both light and dark modes
- ✓ Verify color contrast in both modes
- ✓ Check images display correctly
- ✓ Ensure hover states work in dark mode
- ✓ Test with system preference
- ✓ Verify focus indicators visible
- ✓ Check for color-specific instructions
- ✓ Test on actual devices/displays
