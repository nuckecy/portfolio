# Shadows & Elevation

Shadows create depth and visual hierarchy by elevating elements above the background.

## 🌑 Shadow Scale

Tailwind CSS provides a consistent shadow scale from subtle to dramatic:

| Name | CSS | Usage |
|------|-----|-------|
| `shadow-sm` | 0 1px 2px 0 rgba(0,0,0,0.05) | Subtle, fine details |
| `shadow` | 0 1px 3px 0 rgba(0,0,0,0.1) | Default cards |
| `shadow-md` | 0 4px 6px -1px rgba(0,0,0,0.1) | Elevated cards |
| `shadow-lg` | 0 10px 15px -3px rgba(0,0,0,0.1) | High elevation |
| `shadow-xl` | 0 20px 25px -5px rgba(0,0,0,0.1) | Very high |
| `shadow-2xl` | 0 25px 50px -12px rgba(0,0,0,0.25) | Maximum depth |

## 📍 Shadow Usage

### Cards

```tsx
// Subtle shadow (default)
<Card className="shadow">
  <CardHeader>
    <CardTitle>Default Card</CardTitle>
  </CardHeader>
</Card>

// Elevated card
<Card className="shadow-lg">
  <CardHeader>
    <CardTitle>Elevated Card</CardTitle>
  </CardHeader>
</Card>

// High elevation (featured)
<Card className="shadow-xl">
  <CardHeader>
    <CardTitle>Featured Card</CardTitle>
  </CardHeader>
</Card>
```

### Buttons

```tsx
// Subtle shadow on hover
<Button className="hover:shadow-md transition-shadow">
  Button
</Button>

// Always elevated
<Button className="shadow-md">
  Prominent Button
</Button>
```

### Images

```tsx
// Image with shadow
<img 
  src="image.jpg" 
  alt="Description"
  className="rounded-lg shadow-lg"
/>

// Image with hover effect
<img 
  src="image.jpg" 
  alt="Description"
  className="rounded-lg shadow-md hover:shadow-xl transition-shadow"
/>
```

### Sections

```tsx
// Section header with shadow
<div className="bg-card shadow-md p-6 rounded-lg">
  <h2>Section Title</h2>
</div>

// Floating section
<div className="fixed bottom-6 right-6 bg-card shadow-2xl p-6 rounded-lg">
  <p>Floating element</p>
</div>
```

## 🎨 Shadow Colors

### Light Mode
Shadows use black with 5-25% opacity:
```css
/* Default shadow */
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);

/* Strong shadow */
box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
```

### Dark Mode
Shadows use black with higher opacity for visibility:
```css
/* Dark mode has stronger shadows to maintain depth */
/* Uses same opacity values that read stronger on dark bg */
```

## 🔄 Shadow + Border Patterns

### Border with Shadow

```tsx
// Card with border and shadow
<Card className="border shadow-md">
  <CardContent>Content</CardContent>
</Card>

// Minimal border + shadow
<Card className="border border-gray-200 shadow-sm">
  <CardContent>Content</CardContent>
</Card>
```

### Inner Shadows

```tsx
// Inset shadow (rarely used)
<div className="shadow-inner bg-secondary p-6 rounded-lg">
  {/* Recessed appearance */}
</div>
```

## 🎯 Interactive Shadows

### Hover Effects

```tsx
// Lift on hover
<div className="shadow-md hover:shadow-lg transition-shadow duration-200">
  <Card>Hover me</Card>
</div>

// Strong lift
<div className="shadow hover:shadow-2xl transition-shadow">
  <Card>Dramatic hover</Card>
</div>
```

### Active/Pressed State

```tsx
// Press down effect
<button className="shadow-lg active:shadow-sm active:translate-y-1 transition-all">
  Click me
</button>

// No shadow when active
<button className="shadow-md active:shadow-none active:translate-y-0.5">
  Press me
</button>
```

### Focus State

```tsx
// Focus with shadow
<input 
  type="text"
  className="border focus:ring-2 focus:shadow-md focus:outline-none"
/>
```

## 📐 Shadow + Rounded Corners

Shadows work best with rounded corners:

```tsx
// Small radius
<div className="rounded shadow-sm">Subtle</div>

// Medium radius
<div className="rounded-lg shadow-md">Standard</div>

// Large radius
<div className="rounded-2xl shadow-lg">Generous</div>

// Full round
<div className="rounded-full shadow">Circle</div>
```

## 🌈 Custom Shadow Values

For custom elevation levels:

```tsx
// Very subtle
<div className="shadow-[0_1px_1px_rgba(0,0,0,0.03)]">
  Extremely subtle
</div>

// Custom strong shadow
<div className="shadow-[0_8px_16px_rgba(0,0,0,0.15)]">
  Custom shadow
</div>
```

## 🎪 Layering with Z-Index

Combine shadows with z-index for proper layering:

```tsx
// Base layer
<div className="shadow-sm z-0">Base</div>

// Elevated layer
<div className="shadow-md z-10">Elevated</div>

// Top layer
<div className="shadow-lg z-20">Top</div>

// Modal layer
<div className="shadow-2xl z-50">Modal</div>
```

## 📱 Responsive Shadows

Adjust shadows at different breakpoints:

```tsx
// Subtle on mobile, elevated on desktop
<Card className="shadow-sm md:shadow-md lg:shadow-lg">
  <CardContent>Responsive shadow</CardContent>
</Card>

// More dramatic on large screens
<div className="shadow md:shadow-lg lg:shadow-xl">
  Content
</div>
```

## ♿ Accessibility

### Shadow Contrast

Shadows must be visible in both modes:
- ✓ Light mode: 10% opacity minimum
- ✓ Dark mode: Higher opacity for visibility
- ✓ High contrast: May need stronger shadows

### Not Relying on Shadow Alone

```tsx
// DON'T: Only shadow to indicate elevation
<button className="shadow-md">
  Click me
</button>

// DO: Shadow + visual change
<button className="shadow-md bg-primary text-white">
  Click me
</button>
```

### Focus Indicators

```tsx
// Shadow + ring for focus
<input 
  className="shadow-sm focus:ring-2 focus:ring-primary focus:shadow-lg"
/>
```

## 🎨 Shadow Design Patterns

### Floating Button

```tsx
<button className="fixed bottom-6 right-6 rounded-full shadow-lg hover:shadow-2xl transition-shadow">
  + New
</button>
```

### Card Stack Effect

```tsx
<div className="relative">
  <Card className="absolute shadow-xl" style={{ transform: 'rotate(-3deg)' }}>
    Card 3
  </Card>
  <Card className="absolute shadow-lg ml-2 mt-2" style={{ transform: 'rotate(1deg)' }}>
    Card 2
  </Card>
  <Card className="shadow-md relative">
    Card 1
  </Card>
</div>
```

### Depth Layering

```tsx
<div className="space-y-8">
  <div className="bg-card shadow-sm p-4">Layer 1</div>
  <div className="bg-card shadow-md p-4">Layer 2</div>
  <div className="bg-card shadow-lg p-4">Layer 3</div>
  <div className="bg-card shadow-xl p-4">Layer 4</div>
</div>
```

## 🔍 Shadow Debugging

To audit shadows in components:

1. **Find inconsistent shadows**: All cards should use `shadow-md` or similar
2. **Check hover states**: Shadows should increase on interaction
3. **Verify layering**: Higher z-index should have stronger shadows
4. **Test dark mode**: Shadows visible and contrast adequate
5. **Test high contrast**: Shadows remain distinguishable

## 📋 Shadow Best Practices

✓ **DO:**
- Use consistent shadow scale
- Increase shadow on hover/focus
- Combine with rounded corners
- Test in both light and dark modes
- Use shadows to show elevation, not just decoration
- Ensure shadows don't interfere with content

✗ **DON'T:**
- Mix multiple shadow scales on similar elements
- Use shadows without visual hierarchy purpose
- Forget to test dark mode shadows
- Apply shadows to every element
- Ignore focus state shadows for accessibility
- Make shadows so strong they distract

## 🎯 Common Shadow Mistakes

### ❌ Problem: Shadows too subtle
```tsx
// Bad
<Card className="shadow-sm">Under-elevated</Card>
```

### ✅ Solution: Use appropriate scale
```tsx
// Good
<Card className="shadow-md">Properly elevated</Card>
```

---

### ❌ Problem: Inconsistent shadows
```tsx
// Bad
<Card className="shadow-lg">High</Card>
<Card className="shadow-sm">Low</Card>
```

### ✅ Solution: Consistent patterns
```tsx
// Good
<Card className="shadow-md">Standard</Card>
<Card className="shadow-md">Standard</Card>
```

---

### ❌ Problem: Shadow not visible in dark mode
```tsx
// Bad - uses weak opacity
<div className="shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
  Not visible
</div>
```

### ✅ Solution: Test both modes
```tsx
// Good - readable in both modes
<div className="shadow-md">Visible everywhere</div>
```
