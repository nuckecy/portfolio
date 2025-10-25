# Layout System

The layout system provides a flexible, responsive grid-based framework for organizing content across all screen sizes.

## 📐 Container

The main container is centered and has a maximum width:

```tsx
<div className="max-w-screen-lg mx-auto px-6">
  {/* Content */}
</div>
```

### Specifications

- **Max width**: 1400px (96rem)
- **Horizontal padding**: 24px (0.75rem) on all screens
- **Centering**: Achieved with `mx-auto`
- **Responsive**: Padding adjusts on smaller screens

```tsx
// Responsive container
<div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
  {/* Content scales with screen */}
</div>
```

## 📱 Breakpoints

Tailwind breakpoints define responsive behavior:

| Name | Pixel | Usage |
|------|-------|-------|
| - | 0px | Mobile (default) |
| `sm` | 640px | Small devices |
| `md` | 768px | Tablets |
| `lg` | 1024px | Desktops |
| `xl` | 1280px | Large desktops |
| `2xl` | 1536px | Extra large |

### Responsive Examples

```tsx
// Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</div>

// Text size that grows with screen
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
  Responsive Heading
</h1>

// Padding that increases on larger screens
<section className="py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8">
  {/* Content */}
</section>
```

## 🔲 Grid Layouts

### Multi-column Grid

```tsx
// 2-column grid on desktop, 1 on mobile
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  <div>Column 1</div>
  <div>Column 2</div>
</div>

// 3-column grid with auto-fit
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => (
    <Card key={item.id}>{item.name}</Card>
  ))}
</div>

// 4-column grid (desktop only)
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  {/* 4 items */}
</div>
```

### Asymmetric Layouts

```tsx
// Main + Sidebar
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  <div className="lg:col-span-2">
    {/* Main content (2/3 width on desktop) */}
  </div>
  <aside className="lg:col-span-1">
    {/* Sidebar (1/3 width on desktop) */}
  </aside>
</div>

// Featured + Grid
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  <div className="lg:col-span-3">
    {/* Featured (full width) */}
  </div>
  <div className="lg:col-span-1">Item 1</div>
  <div className="lg:col-span-1">Item 2</div>
  <div className="lg:col-span-1">Item 3</div>
</div>
```

## 🔄 Flexbox Layouts

### Horizontal Layout

```tsx
// Side-by-side items
<div className="flex gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

// With wrapping
<div className="flex flex-wrap gap-4">
  {items.map(item => (
    <Tag key={item.id}>{item.name}</Tag>
  ))}
</div>

// Centered horizontally
<div className="flex justify-center gap-6">
  {/* Centered items */}
</div>

// Space between
<div className="flex justify-between items-center">
  <h2>Title</h2>
  <Button>Action</Button>
</div>
```

### Vertical Layout

```tsx
// Vertical stack
<div className="flex flex-col gap-6">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

// Vertical center
<div className="flex flex-col items-center justify-center min-h-screen">
  <div>Centered content</div>
</div>

// Space between vertically
<div className="flex flex-col justify-between min-h-96">
  <div>Top</div>
  <div>Bottom</div>
</div>
```

## 📋 Section Patterns

### Full-width Section

```tsx
<section className="w-full py-12 bg-secondary">
  <div className="max-w-screen-lg mx-auto px-6">
    <h2 className="text-3xl mb-8">Section Title</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Content */}
    </div>
  </div>
</section>
```

### Hero Section

```tsx
<section className="py-20 bg-gradient-to-br from-primary to-secondary">
  <div className="max-w-screen-lg mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-5xl mb-6">Hero Title</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Hero description
        </p>
        <Button size="lg">Call to action</Button>
      </div>
      <div>
        {/* Image or visual */}
      </div>
    </div>
  </div>
</section>
```

### Content + Sidebar

```tsx
<div className="max-w-screen-lg mx-auto px-6 py-12">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <main className="lg:col-span-2 space-y-8">
      {/* Main content */}
    </main>
    <aside className="space-y-6">
      {/* Sidebar widgets */}
    </aside>
  </div>
</div>
```

## 📐 Aspect Ratios

Common aspect ratio patterns:

```tsx
// 16:9 Video
<div className="aspect-video w-full bg-secondary rounded-lg overflow-hidden">
  <iframe
    width="100%"
    height="100%"
    src="https://..."
  />
</div>

// Square Image
<div className="aspect-square w-full bg-secondary rounded-lg overflow-hidden">
  <img src="image.jpg" alt="Description" />
</div>

// 4:3 Image
<div className="aspect-video w-full bg-secondary rounded-lg overflow-hidden">
  <img src="image.jpg" alt="Description" className="h-full object-cover" />
</div>
```

## 🎯 Alignment Patterns

### Horizontal Alignment

```tsx
// Left aligned (default)
<div className="text-left">Content</div>

// Center aligned
<div className="text-center">
  <h2>Centered Title</h2>
</div>

// Right aligned
<div className="text-right">Content</div>

// Justify (full width text)
<div className="text-justify">Long paragraph</div>
```

### Vertical Alignment

```tsx
// Top
<div className="flex items-start">Content</div>

// Center
<div className="flex items-center">Content</div>

// Bottom
<div className="flex items-end">Content</div>

// Baseline
<div className="flex items-baseline">Content</div>
```

## 🔒 Fixed/Sticky Layouts

### Sticky Header

```tsx
<header className="sticky top-0 bg-background z-50 border-b">
  <nav className="max-w-screen-lg mx-auto px-6 py-4">
    {/* Navigation */}
  </nav>
</header>
```

### Fixed Sidebar

```tsx
<div className="flex">
  <aside className="fixed left-0 top-0 w-64 h-screen bg-card border-r overflow-y-auto">
    {/* Sidebar */}
  </aside>
  <main className="ml-64 flex-1">
    {/* Main content */}
  </main>
</div>
```

## 📱 Mobile Patterns

### Mobile-first Stack

```tsx
// Stacks on mobile, side-by-side on desktop
<div className="flex flex-col md:flex-row gap-6">
  <div className="flex-1">Column 1</div>
  <div className="flex-1">Column 2</div>
</div>

// Hides on mobile, shows on desktop
<div className="hidden lg:block">
  {/* Desktop only content */}
</div>

// Shows on mobile, hides on desktop
<div className="lg:hidden">
  {/* Mobile only content */}
</div>
```

### Overflow Handling

```tsx
// Horizontal scroll on mobile
<div className="overflow-x-auto -mx-6 px-6">
  <div className="flex gap-4 min-w-min">
    {/* Horizontally scrollable items */}
  </div>
</div>

// Responsive tables
<div className="overflow-x-auto">
  <table className="w-full">
    {/* Table content */}
  </table>
</div>
```

## 🎨 Z-index Scale

Consistent z-index values for layering:

| Value | Usage |
|-------|-------|
| 10 | Tooltips, popovers |
| 20 | Dropdowns |
| 30 | Sticky elements |
| 40 | Modals, dialogs |
| 50 | Notifications |

```tsx
// Sticky header
<header className="sticky top-0 z-30">

// Modal overlay
<div className="fixed inset-0 bg-black/50 z-40">
  <Dialog className="z-50">
```

## 📦 Layout Components

### Container Wrapper

```tsx
export const Container = ({ children, className = "" }) => (
  <div className={`max-w-screen-lg mx-auto px-6 ${className}`}>
    {children}
  </div>
)

// Usage
<Container className="py-12">
  {/* Content */}
</Container>
```

### Section Wrapper

```tsx
export const Section = ({ title, children, className = "" }) => (
  <section className={`py-12 ${className}`}>
    <Container>
      {title && <h2 className="text-3xl mb-8">{title}</h2>}
      {children}
    </Container>
  </section>
)

// Usage
<Section title="Featured Work">
  {/* Content */}
</Section>
```

## ♿ Accessibility

### Skip Links

```tsx
<a href="#main" className="sr-only focus:not-sr-only">
  Skip to main content
</a>
<main id="main">
  {/* Content */}
</main>
```

### Semantic Layout

```tsx
<body>
  <header role="banner">Navigation</header>
  <main role="main">Content</main>
  <aside role="complementary">Sidebar</aside>
  <footer role="contentinfo">Footer</footer>
</body>
```

## 📋 Layout Checklist

When creating layouts:

✓ Start mobile-first
✓ Test at all breakpoints
✓ Ensure semantic HTML
✓ Check z-index layering
✓ Verify spacing consistency
✓ Test keyboard navigation
✓ Check color contrast
✓ Optimize for touch targets
