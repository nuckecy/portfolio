# Design System - Otobong Okoko Portfolio

A comprehensive design system documentation for the Otobong Okoko portfolio website. This design system ensures visual consistency, scalability, and maintainability across all pages and components.

## 📋 Overview

This design system is built with:
- **Tailwind CSS** - Utility-first CSS framework
- **Custom CSS Variables** - For dynamic theming
- **Radix UI** - Accessible component library
- **Next.js 14** - React framework with App Router

## 🎯 Design System Philosophy

1. **Consistency** - Unified visual language across all pages
2. **Accessibility** - WCAG 2.1 AA compliance
3. **Scalability** - Easy to extend and maintain
4. **Performance** - Optimized for speed and user experience
5. **Flexibility** - Support for dark mode and responsive design

## 📚 Documentation Structure

This design system includes:

- **[Colors](./colors.md)** - Color palette, CSS variables, usage guidelines
- **[Typography](./typography.md)** - Font families, sizes, weights, line heights
- **[Spacing](./spacing.md)** - Margin, padding, and gap scales
- **[Components](./components.md)** - Component specifications and patterns
- **[Layout](./layout.md)** - Grid system, breakpoints, responsive design
- **[Shadows](./shadows.md)** - Elevation system and depth levels
- **[Animations](./animations.md)** - Transitions, keyframes, motion guidelines
- **[Accessibility](./accessibility.md)** - WCAG guidelines and best practices
- **[Dark Mode](./dark-mode.md)** - Theme switching and dark mode implementation

## 🎨 Key Features

### Theme System
- Light mode (default)
- Dark mode (system preference detection)
- CSS variables for dynamic theming
- HSL color format for better control

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1400px)
- Flexible grid system
- Fluid typography

### Component Library
- Pre-built UI components
- Accessible by default
- Customizable through CSS variables
- Built with Radix UI primitives

## 🚀 Quick Start

### Using Colors
```css
/* Use CSS variables */
background-color: hsl(var(--background));
color: hsl(var(--foreground));
```

### Using Typography
```html
<!-- Large heading -->
<h1 class="text-4xl font-bold">Main Title</h1>

<!-- Body text -->
<p class="text-base leading-relaxed">Content text</p>
```

### Using Spacing
```html
<!-- Padding and margin -->
<div class="p-6 m-4">Content</div>
```

### Using Components
```tsx
import { Button } from "@/components/ui/button"

export default function MyComponent() {
  return <Button variant="primary">Click me</Button>
}
```

## 📐 Customization

### Adding New Colors
1. Define in `globals.css` CSS variables
2. Add to `tailwind.config.ts`
3. Document in `colors.md`

### Adding New Components
1. Create component in `components/ui/`
2. Export from component index
3. Document in `components.md`
4. Add accessibility notes

### Extending Typography
1. Update `tailwind.config.ts` fontFamily
2. Add to `globals.css` if needed
3. Document in `typography.md`

## 🔧 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📱 Responsive Guidelines

- **Mobile First** - Design for mobile, enhance for larger screens
- **Touch Targets** - Minimum 44x44px for interactive elements
- **Text Readability** - 16px minimum on mobile devices
- **Viewport Meta** - Set in layout.tsx

## ♿ Accessibility Standards

- WCAG 2.1 Level AA compliance
- Color contrast ratios > 4.5:1
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators

## 🎯 Usage Examples

See individual documentation files for detailed examples and use cases.

## 📝 License

Part of Otobong Okoko's portfolio website.
