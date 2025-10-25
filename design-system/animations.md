# Animations

Motion design guidelines and animation implementations for smooth, purposeful interactions.

## ✨ Animation Philosophy

Animations should:
- Enhance user experience, not distract
- Have clear purpose and direction
- Respect user preferences (prefers-reduced-motion)
- Improve perceived performance
- Guide attention to important elements

## ⏱️ Timing Guidelines

### Duration

| Use Case | Duration | Example |
|----------|----------|---------|
| Micro interactions | 100-200ms | Button hover, toggle |
| UI transitions | 200-300ms | Page fade, modal open |
| Complex animations | 400-600ms | Marquee, carousel |
| Page transitions | 300-500ms | Route change, page load |

### Easing

| Easing | Usage |
|--------|-------|
| Linear | Continuous motion (marquee) |
| Ease-in | Elements entering, slowing down |
| Ease-out | Elements leaving, speeding up |
| Ease-in-out | Natural, organic motion |
| Cubic-bezier | Custom, precise motion |

## 🎬 Built-in Animations

### Marquee Animation

**Purpose**: Continuous scrolling text or content

```tsx
// Global marquee animation
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

animation: marquee 4.5s linear infinite;
```

### Usage Examples

```tsx
// Scrolling text
<div className="overflow-hidden">
  <div className="animate-marquee whitespace-nowrap">
    Scrolling content • Scrolling content • Scrolling content
  </div>
</div>

// Scrolling list
<div className="flex gap-4 animate-marquee">
  <Item>Item 1</Item>
  <Item>Item 2</Item>
  <Item>Item 3</Item>
</div>
```

## 📲 Transition Utilities

### Basic Transitions

```tsx
// Fade transition
<div className="opacity-0 hover:opacity-100 transition-opacity duration-200">
  Fade effect
</div>

// Color transition
<div className="bg-primary hover:bg-secondary transition-colors duration-300">
  Color change
</div>

// Transform transition
<div className="translate-x-0 hover:translate-x-4 transition-transform duration-200">
  Move effect
</div>

// All properties
<div className="hover:shadow-xl transition-all duration-300">
  All transitions
</div>
```

### Duration Classes

```tsx
transition-{duration}

<div className="transition-opacity duration-75">Extra fast (75ms)</div>
<div className="transition-opacity duration-100">Very fast (100ms)</div>
<div className="transition-opacity duration-150">Fast (150ms)</div>
<div className="transition-opacity duration-200">Standard (200ms)</div>
<div className="transition-opacity duration-300">Normal (300ms)</div>
<div className="transition-opacity duration-500">Slow (500ms)</div>
<div className="transition-opacity duration-700">Very slow (700ms)</div>
<div className="transition-opacity duration-1000">Extra slow (1000ms)</div>
```

## 🎨 Common Animation Patterns

### Hover Effects

```tsx
// Lift on hover
<div className="transform hover:scale-105 hover:shadow-lg transition-all duration-200">
  <Card>Hover me</Card>
</div>

// Slide on hover
<div className="transform hover:translate-y-1 transition-transform duration-200">
  <Card>Hover me</Card>
</div>

// Color and shadow
<div className="bg-card hover:bg-secondary hover:shadow-lg transition-all duration-200">
  <Card>Interactive card</Card>
</div>

// Gradient animation
<div className="bg-gradient-to-r from-primary to-secondary bg-200% hover:bg-right transition-all duration-500">
  Gradient shift
</div>
```

### Focus States

```tsx
// Focus with ring and transition
<input 
  className="border focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
/>

// Focus with shadow
<button className="focus:shadow-lg focus:outline-none transition-shadow duration-200">
  Focus me
</button>
```

### Active/Pressed States

```tsx
// Press animation
<button 
  className="active:scale-95 active:shadow-none transition-all duration-100"
>
  Press me
</button>

// Press with transform
<button 
  className="active:translate-y-0.5 transition-transform duration-100"
>
  Press effect
</button>
```

## 🔄 Loading Animations

### Spinner

```tsx
<div className="animate-spin">
  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="..." />
  </svg>
</div>
```

### Pulse

```tsx
<div className="animate-pulse space-y-4">
  <div className="h-12 bg-secondary rounded"></div>
  <div className="h-12 bg-secondary rounded"></div>
</div>
```

### Bounce

```tsx
<div className="animate-bounce">
  <div>↓ Scroll down</div>
</div>
```

## 📝 Custom Animations

### Define Custom Keyframes

```tsx
// tailwind.config.ts
const config: Config = {
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        marquee: 'marquee 4.5s linear infinite',
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideIn: 'slideIn 0.5s ease-out',
        slideUp: 'slideUp 0.5s ease-out',
      },
    },
  },
}
```

### Using Custom Animations

```tsx
// Fade in
<div className="animate-fadeIn">
  Content fades in
</div>

// Slide in from left
<div className="animate-slideIn">
  Content slides in
</div>

// Slide up
<div className="animate-slideUp">
  Content slides up
</div>
```

## 🎯 Page Transition Animations

### Route Change Fade

```tsx
// Global layout animation
<motion.main
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.3 }}
>
  {children}
</motion.main>
```

### Modal Enter/Exit

```tsx
// Modal appears with scale and fade
<motion.div
  initial={{ scale: 0.95, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  exit={{ scale: 0.95, opacity: 0 }}
  transition={{ duration: 0.2 }}
  className="fixed inset-0 bg-black/50"
>
  <dialog>Modal content</dialog>
</motion.div>
```

## 📱 Reduced Motion

Respect user preferences for reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Implementation

```tsx
// Component with motion
<div className="animate-fade hover:animate-pulse transition-all duration-300 motion-safe:duration-500 motion-reduce:animate-none">
  Respects user preferences
</div>
```

## 🎨 Staggered Animations

### List Item Animations

```tsx
// Stagger children animations
<motion.ul>
  {items.map((item, index) => (
    <motion.li
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      {item}
    </motion.li>
  ))}
</motion.ul>
```

## 🔗 Animation Chaining

### Sequential Animations

```tsx
// First animate, then trigger next
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }}
>
  {children.map((child) => (
    <motion.div key={child.id} variants={itemVariants}>
      {child}
    </motion.div>
  ))}
</motion.div>
```

## ♿ Accessibility

### Prefers-Reduced-Motion

```tsx
// Detect user preference
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches

// Conditionally apply animation
<div 
  className={
    prefersReducedMotion 
      ? '' 
      : 'animate-fadeIn transition-all duration-300'
  }
>
  Content
</div>
```

### Animation Guidelines

✓ **DO:**
- Respect `prefers-reduced-motion`
- Use animations purposefully
- Keep durations short (200-300ms)
- Provide visual feedback
- Test with keyboard navigation

✗ **DON'T:**
- Animate on every interaction
- Use very long durations (>1s without reason)
- Auto-play animations
- Disable animations completely
- Use strobing/flashing

## 📊 Animation Performance

### GPU-Accelerated Properties

Use these for best performance:

```tsx
// Fast (GPU accelerated)
transform: translateX()
transform: scaleX()
transform: rotate()
opacity: 0 to 1

// Slow (triggers reflow)
top, left, width, height
margin, padding
box-shadow
border
```

### Optimization

```tsx
// Good - will be smooth
<div className="hover:scale-105 transition-transform duration-200">
  Fast animation
</div>

// Avoid - causes jank
<div className="hover:w-96 transition-all duration-200">
  Slow animation
</div>
```

## 🎭 Animation Showcase

### Button States

```tsx
<button className="group px-6 py-2 bg-primary text-white rounded-lg
  hover:bg-primary/90 hover:shadow-lg
  active:scale-95
  transition-all duration-200
  hover:duration-100
">
  <span className="group-hover:translate-x-1 inline-block transition-transform">
    Click me →
  </span>
</button>
```

### Card Hover

```tsx
<div className="bg-card rounded-lg shadow-md
  hover:shadow-xl
  hover:-translate-y-1
  transition-all duration-300
  cursor-pointer
">
  <Card>Interactive card</Card>
</div>
```

### Loading State

```tsx
<div className="flex items-center gap-2">
  <div className="animate-bounce" style={{ animationDelay: '0ms' }}>●</div>
  <div className="animate-bounce" style={{ animationDelay: '100ms' }}>●</div>
  <div className="animate-bounce" style={{ animationDelay: '200ms' }}>●</div>
</div>
```

## 📋 Animation Checklist

When adding animations:

✓ Has clear purpose
✓ Respects motion preferences
✓ Smooth and 60fps
✓ Duration is 200-500ms
✓ Uses GPU-accelerated properties
✓ Tested on slow devices
✓ Doesn't distract from content
✓ Accessible to all users
