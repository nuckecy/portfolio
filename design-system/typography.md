# Typography System

The typography system is built on a carefully curated selection of typefaces that balance elegance, readability, and modern aesthetics.

## 🔤 Font Families

### Primary Font: Neue Montreal
- **Usage**: Headings, UI elements, brand-critical text
- **Characteristics**: Clean, geometric, modern
- **Weights**: Regular (default via system)
- **Fallback Stack**: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial`

```css
.font-primary {
  font-family: Neue Montreal, -apple-system, BlinkMacSystemFont, Segoe UI, 
               Roboto, Helvetica Neue, Arial, sans-serif;
}
```

### Serif Font: Libre Baskerville
- **Usage**: Long-form content, quotes, editorial content
- **Characteristics**: Classic, elegant, highly readable
- **Weights**: Regular
- **Fallback Stack**: `Georgia`

```css
.font-serif {
  font-family: Libre Baskerville, Georgia, serif;
}
```

### Secondary Font: Work Sans
- **Usage**: Body text, UI labels, form fields
- **Characteristics**: Versatile, modern, clean
- **Weights**: Regular
- **Fallback Stack**: System sans-serif

```css
.font-secondary {
  font-family: Work Sans, sans-serif;
}
```

## 📏 Font Scale

The typography scale follows a consistent 1.25 ratio for visual hierarchy:

| Name | Size | Line Height | Letter Spacing | Usage |
|------|------|-------------|-----------------|--------|
| H1 | 48px | 1.2 | -0.02em | Page titles, hero headlines |
| H2 | 38.4px | 1.3 | -0.02em | Section headlines |
| H3 | 30.72px | 1.4 | -0.01em | Subsection titles |
| H4 | 24.576px | 1.5 | 0 | Card titles, medium headers |
| H5 | 19.66px | 1.5 | 0 | Small headers |
| H6 | 15.625px | 1.6 | 0 | Small titles, labels |
| Body Large | 18px | 1.6 | 0 | Large body text |
| Body | 16px | 1.6 | 0 | Standard body text |
| Body Small | 14px | 1.5 | 0 | Secondary body text |
| Label | 12px | 1.5 | 0.05em | Form labels, captions |
| Caption | 11px | 1.4 | 0.05em | Tiny text, metadata |

## 💻 Tailwind CSS Configuration

```typescript
// tailwind.config.ts
const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        primary: ['Neue Montreal', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['Libre Baskerville', 'Georgia', 'serif'],
        secondary: ['Work Sans', 'sans-serif'],
      },
    },
  },
}
```

## 🎯 Usage Examples

### Headings

```tsx
<h1 className="font-primary text-48px leading-tight tracking-tighter">
  Page Title
</h1>

<h2 className="font-primary text-38px leading-130">
  Section Heading
</h2>

<h3 className="font-primary text-30px">
  Subsection
</h3>
```

### Body Text

```tsx
<p className="font-secondary text-base leading-160">
  Standard paragraph text goes here. This font is highly readable 
  and works well for longer blocks of content.
</p>

<p className="font-secondary text-sm text-muted-foreground">
  Secondary text or additional information
</p>
```

### Serif Content

```tsx
<article className="font-serif">
  <p>Long-form editorial content is displayed in Libre Baskerville 
  for maximum elegance and readability.</p>
</article>
```

## 📱 Responsive Typography

Typography scales responsively across breakpoints:

```tsx
// Mobile-first approach
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
  Responsive Heading
</h1>
```

### Breakpoints
- **sm**: 640px and up
- **md**: 768px and up
- **lg**: 1024px and up
- **xl**: 1280px and up
- **2xl**: 1536px and up

## ✨ Font Features

### Font Smoothing
All text benefits from font smoothing for better rendering:

```css
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

### Text Rendering
Optimized for performance while maintaining visual quality.

## 🎨 Text Styling

### Emphasis
```tsx
<strong className="font-semibold">Bold text</strong>
<em className="italic">Italic text</em>
```

### Links
```tsx
<a href="#" className="text-primary hover:underline">
  Link text
</a>
```

### Code
```tsx
<code className="font-mono text-sm bg-secondary px-2 py-1 rounded">
  const example = true;
</code>
```

## ♿ Accessibility

### Readability Standards
- Line height: minimum 1.4 for body text
- Line length: 45-75 characters for optimal readability
- Contrast: All text meets WCAG AA (4.5:1 minimum)

### Screen Readers
- Semantic HTML: Use proper heading hierarchy (h1 → h2 → h3)
- Links: Link text should be descriptive
- Lists: Use `<ul>`, `<ol>`, `<li>` for lists

### Text Resizing
- Avoid fixed pixel heights on text containers
- Use `em` or `rem` for scalable sizing
- Test at 200% zoom level

## 📝 Best Practices

✓ **DO:**
- Use semantic HTML elements (h1-h6 for headings)
- Maintain consistent spacing between elements
- Test readability at various zoom levels
- Use font sizes from the scale

✗ **DON'T:**
- Use all uppercase for readability (reduces scanning speed)
- Mix serif and sans-serif excessively
- Skip line-height for readability
- Use text smaller than 12px for body content

## 🔍 Font Loading

Fonts are loaded efficiently via the system font stack with graceful degradation. If custom fonts are needed in the future, they will be loaded with font-display: swap for optimal performance.

## 🎭 Font Weights

For maximum consistency and performance, the system uses primarily regular weight (400):

- **Regular (400)**: All primary usage
- **Fallback approach**: Uses font-family stacking for variations

To use different weights in the future:

```css
font-weight: 400; /* Regular */
font-weight: 500; /* Medium */
font-weight: 600; /* Semibold */
font-weight: 700; /* Bold */
```
