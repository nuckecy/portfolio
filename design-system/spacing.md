# Spacing System

The spacing system provides a consistent rhythm for margins, padding, and gaps throughout the design. Built on an 8px base unit with a geometric scale for flexible layouts.

## 📐 Spacing Scale

The spacing scale follows the base 8px unit with extensions for both smaller and larger values:

| Scale | px | rem | Tailwind Class | Usage |
|-------|----|----|-----------------|--------|
| xs | 4px | 0.25rem | `p-1` | Tight spacing, small gaps |
| sm | 8px | 0.5rem | `p-2` | Small margins, padding |
| md | 12px | 0.75rem | `p-3` | Standard spacing |
| lg | 16px | 1rem | `p-4` | Medium spacing |
| xl | 24px | 1.5rem | `p-6` | Comfortable spacing |
| 2xl | 32px | 2rem | `p-8` | Large sections |
| 3xl | 48px | 3rem | `p-12` | Extra large spacing |
| 4xl | 64px | 4rem | `p-16` | Sections, hero areas |
| 5xl | 80px | 5rem | `p-20` | Major spacing |

## 🔧 Tailwind Spacing Classes

All spacing utilities map to the scale above:

```tsx
// Padding
<div className="p-2">sm padding</div>
<div className="p-4">md padding</div>
<div className="p-6">lg padding</div>
<div className="px-4 py-6">Horizontal & vertical</div>

// Margin
<div className="m-4">md margin</div>
<div className="mb-6">margin-bottom</div>
<div className="mt-8 mb-4">Different margins</div>

// Gap (for flex/grid)
<div className="flex gap-4">
  <item>Item 1</item>
  <item>Item 2</item>
</div>

<div className="grid gap-6 grid-cols-2">
  <cell>Cell 1</cell>
  <cell>Cell 2</cell>
</div>
```

## 📦 Component Spacing Patterns

### Cards
```tsx
<div className="bg-card rounded-lg p-6">
  <h3 className="text-lg mb-4">Card Title</h3>
  <p className="text-sm text-muted-foreground">Card content</p>
</div>
```

- **Padding**: `p-6` (24px)
- **Internal gaps**: `gap-4` (16px)
- **Border radius**: `rounded-lg` (8px)

### Sections
```tsx
<section className="py-12 px-6">
  <div className="max-w-screen-lg mx-auto">
    {/* Content */}
  </div>
</section>
```

- **Vertical padding**: `py-12` (48px)
- **Horizontal padding**: `px-6` (24px)
- **Max width container**: `max-w-screen-lg` (1400px)

### Lists
```tsx
<ul className="space-y-4">
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ul>
```

- **Item spacing**: `space-y-4` (16px between items)

## 🎯 Common Patterns

### Buttons with Icons
```tsx
<button className="flex items-center gap-2 px-4 py-2">
  <Icon />
  <span>Button Text</span>
</button>
```
- **Inner gap**: `gap-2` (8px)
- **Padding**: `px-4 py-2` (16px horizontal, 8px vertical)

### Form Inputs
```tsx
<div className="mb-6">
  <label className="block mb-2 text-sm font-medium">Label</label>
  <input className="w-full px-4 py-2 border rounded-md" />
  <p className="mt-2 text-xs text-muted-foreground">Helper text</p>
</div>
```
- **Field spacing**: `mb-6` (24px)
- **Label spacing**: `mb-2` (8px)
- **Input padding**: `px-4 py-2` (16px × 8px)
- **Helper text**: `mt-2` (8px)

### Grid Layout
```tsx
<div className="grid grid-cols-3 gap-6">
  <div>Grid item</div>
  <div>Grid item</div>
  <div>Grid item</div>
</div>
```
- **Column gap**: `gap-6` (24px)
- **Auto row gap**: `gap-6` (24px)

## 📱 Responsive Spacing

Adjust spacing at different breakpoints:

```tsx
<section className="py-6 sm:py-8 md:py-12 lg:py-16">
  <div className="px-4 sm:px-6 md:px-8 lg:px-12">
    {/* Content */}
  </div>
</section>
```

### Mobile-First Approach
- Base: `py-6` (24px) on mobile
- Tablet: `md:py-12` (48px) on medium screens
- Desktop: `lg:py-16` (64px) on large screens

## 🔗 Margin Collapsing Rules

When using Tailwind spacing utilities, remember margin collapsing:

```tsx
// Use gap for consistent spacing between flex items
<div className="flex flex-col gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

// Use padding or margin on individual elements
<div>
  <div className="mb-4">Item 1</div>
  <div>Item 2</div>
</div>
```

## 🎨 Whitespace Guidelines

### Generous Whitespace
- Creates visual hierarchy
- Improves readability
- Reduces cognitive load
- Emphasizes important elements

### Breathing Room
```tsx
<div className="bg-card rounded-lg p-6 md:p-8 lg:p-12">
  {/* More padding on larger screens */}
</div>
```

### Dense Layouts
When space is limited:
```tsx
<div className="p-2 gap-2">
  {/* Compact spacing */}
</div>
```

## 🔍 Spacing Audit

To audit spacing consistency in components:

1. **Card spacing**: Should be `p-6` consistently
2. **Section margins**: Should follow `py-12` pattern
3. **Gap values**: Should use `gap-4` or `gap-6`
4. **Button padding**: Should be `px-4 py-2`
5. **List items**: Should use `space-y-4`

## ♿ Accessibility

### Touch Targets
- Minimum touch target size: **44px × 44px**
- Achieved with `px-4 py-2` minimum padding (16px × 8px)
- Sufficient for most touch interactions

### Readability
- Line spacing: Handled by line-height (1.4-1.6)
- Paragraph spacing: `mb-6` between paragraphs
- Improves text scanning and comprehension

## 📐 Container Queries

For component-level spacing adjustments:

```tsx
<div className="@container">
  <div className="@sm:p-4 @md:p-6 @lg:p-8">
    {/* Content scales with container size */}
  </div>
</div>
```

## 💡 Pro Tips

- Use `gap` for flex/grid layouts (no margin collapsing)
- Use `space-y` utilities for vertical stacks
- Use `space-x` utilities for horizontal stacks
- Combine directional spacing: `px-4 py-6`
- Responsive prefixes for adaptive spacing
- Keep spacing consistent within component families

## 📋 Spacing Checklist

When designing new components:

✓ Use values from the spacing scale
✓ Maintain 8px base unit consistency
✓ Test at multiple viewport sizes
✓ Ensure 44px minimum touch targets
✓ Check for adequate whitespace
✓ Verify visual hierarchy through spacing
✓ Test readability with increased text size
