# Accessibility (a11y)

Comprehensive accessibility guidelines ensuring the portfolio is usable for everyone, regardless of ability.

## ♿ WCAG Compliance

The portfolio follows WCAG 2.1 Level AA standards:

- **Level A**: Basic accessibility features
- **Level AA**: Enhanced accessibility (our target)
- **Level AAA**: Maximum accessibility

## 🎯 Core Principles

### 1. Perceivable
Information must be presented in ways users can perceive:
- Text alternatives for images
- Audio and video captions
- Distinguishable colors and contrast
- Adaptable presentations

### 2. Operable
Users must be able to operate interfaces:
- Full keyboard navigation
- Sufficient time to read content
- No seizure-inducing content
- Navigable structure

### 3. Understandable
Content must be clear and predictable:
- Readable text and language
- Predictable behavior
- Error prevention
- Clear labels and instructions

### 4. Robust
Content must work across technologies:
- Valid HTML
- Proper semantic structure
- Support for assistive technologies
- Cross-browser compatibility

## 🔤 Text & Typography

### Font Sizes

Minimum sizes for readability:

```tsx
// Minimum 12px for body text
<p className="text-base">Standard body text (16px)</p>
<p className="text-sm">Small text (14px)</p>

// Never use smaller than 11px
<small className="text-xs">Captions and labels (12px)</small>
```

### Line Height

Ensure sufficient line spacing:

```tsx
// Minimum 1.4 for body text
<p className="leading-relaxed">
  Large amount of text should have sufficient line height for readability.
</p>

// 1.5-1.6 is better for very long passages
<article className="leading-loose">
  {content}
</article>
```

### Line Length

Optimal reading line length:

```tsx
// 45-75 characters (aim for 65)
<div className="max-w-screen-sm md:max-w-prose">
  <article>Long-form content</article>
</div>
```

### Text Contrast

All text must meet minimum contrast ratios:

| Text Type | Ratio | Level |
|-----------|-------|-------|
| Normal text | 4.5:1 | AA |
| Large text (18pt+) | 3:1 | AA |
| All text | 7:1 | AAA |
| UI components | 3:1 | AA |

## 🖼️ Images

### Alt Text

Provide meaningful descriptions:

```tsx
// Good: Descriptive
<img 
  src="portfolio-hero.jpg" 
  alt="Designer working on a laptop displaying colorful UI mockups"
/>

// Bad: Redundant or vague
<img 
  src="portfolio-hero.jpg" 
  alt="image" 
/>
<img 
  src="portfolio-hero.jpg" 
  alt="Designer portfolio" 
/>
```

### Decorative Images

```tsx
// Decorative - empty alt and aria-hidden
<img 
  src="decorative-line.svg" 
  alt=""
  aria-hidden="true"
/>

// Or use background image
<div 
  className="bg-cover"
  style={{ backgroundImage: 'url(decorative.svg)' }}
/>
```

### Image Groups

```tsx
// When images make up one piece of content
<figure>
  <img src="chart.png" alt="Sales increased 45% in Q4" />
  <figcaption>
    Sales performance for the year
  </figcaption>
</figure>
```

## ⌨️ Keyboard Navigation

### Tab Order

```tsx
// Natural tab order (read top-to-bottom)
<div>
  <a href="#home">Home</a>
  <button>Portfolio</button>
  <input type="text" placeholder="Search" />
  <a href="#contact">Contact</a>
</div>
```

### Skip Links

```tsx
// Allow skipping navigation
<a href="#main" className="sr-only focus:not-sr-only">
  Skip to main content
</a>

<main id="main">
  {/* Page content */}
</main>
```

### Focus Management

```tsx
// Focus visible by default
input:focus {
  outline: 2px solid var(--ring);
}

// Never remove focus indicator
button {
  outline: none; /* ❌ Never do this */
}

button:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
} /* ✓ Always visible */
```

### Focus Trap (Modals)

```tsx
// Keep focus within modal
<Dialog>
  <form onKeyDown={handleKeyDown}>
    <input ref={firstInputRef} />
    {/* ... other inputs ... */}
    <input ref={lastInputRef} />
  </form>
</Dialog>
```

## 🎨 Color

### Don't Rely on Color Alone

```tsx
// ❌ Bad: Only color indicates status
<div className="bg-red-500">Error occurred</div>

// ✓ Good: Color + icon + text
<div className="flex items-center gap-2 bg-red-500">
  <AlertCircle />
  <span>Error occurred</span>
</div>
```

### Color Contrast

```tsx
// ✓ Good: 7:1 contrast (AAA)
<div className="text-foreground bg-background">
  High contrast text
</div>

// ❌ Bad: 2:1 contrast (fails AA)
<div className="text-muted bg-background">
  Low contrast text
</div>
```

### Light & Dark Mode

```tsx
// Ensure contrast in both modes
:root {
  --foreground: 0 0% 3.9%;  /* Dark text on light */
  --background: 0 0% 100%;
}

.dark {
  --foreground: 0 0% 98%;   /* Light text on dark */
  --background: 0 0% 3.9%;
}
```

## 🏷️ Semantic HTML

Use proper HTML elements for meaning:

```tsx
// ✓ Good: Semantic structure
<header>
  <nav>Navigation</nav>
</header>
<main>
  <article>
    <h1>Title</h1>
    <section>
      <h2>Section heading</h2>
      <p>Content</p>
    </section>
  </article>
</main>
<footer>Footer</footer>

// ❌ Bad: All divs (loses meaning)
<div>
  <div>Navigation</div>
</div>
<div>
  <div>
    <div>Title</div>
    <div>
      <div>Section heading</div>
      <p>Content</p>
    </div>
  </div>
</div>
<div>Footer</div>
```

## 🏷️ Headings

### Heading Hierarchy

```tsx
// ✓ Good: Logical order
<h1>Page Title</h1>
<h2>Section 1</h2>
<h3>Subsection 1.1</h3>
<h3>Subsection 1.2</h3>
<h2>Section 2</h2>
<h3>Subsection 2.1</h3>

// ❌ Bad: Skipping levels
<h1>Page Title</h1>
<h3>Section (h3 without h2)</h3>
<h1>Another h1 (multiple)</h1>
```

### Only One H1

```tsx
// ✓ Good: Single h1 per page
<h1>Portfolio</h1>
<section>
  <h2>Featured Work</h2>
</section>

// ❌ Bad: Multiple h1s
<h1>Portfolio</h1>
<h1>Another section</h1>
```

## 🏷️ Forms

### Labels

```tsx
// ✓ Good: Associated label
<label htmlFor="email">Email</label>
<input id="email" type="email" />

// ❌ Bad: Unassociated label
<label>Email</label>
<input type="email" />
```

### Error Messages

```tsx
// ✓ Good: Clear error with field
<input 
  aria-invalid="true"
  aria-describedby="email-error"
  id="email"
/>
<span id="email-error" className="text-red-600">
  Please enter a valid email
</span>

// ❌ Bad: Error unclear
<input />
<p className="text-red-600">Error</p>
```

### Required Fields

```tsx
// ✓ Good: Clear indication
<label htmlFor="name">
  Name <span aria-label="required">*</span>
</label>
<input id="name" required />

// ❌ Bad: Confusing
<label htmlFor="name">Name *</label>
<input id="name" />
```

## 🎙️ ARIA (Accessible Rich Internet Applications)

### Landmark Regions

```tsx
// Define page regions
<nav aria-label="Main navigation">
  {/* Navigation */}
</nav>

<main>
  {/* Main content */}
</main>

<aside aria-label="Related content">
  {/* Sidebar */}
</aside>

<footer>
  {/* Footer */}
</footer>
```

### Live Regions

```tsx
// Announce dynamic updates
<div aria-live="polite" aria-atomic="true">
  {statusMessage}
</div>

<div aria-live="assertive">
  {urgentMessage}
</div>
```

### Hidden Content

```tsx
// Screen reader only
<span className="sr-only">
  Additional context for screen readers
</span>

// Hide from screen readers
<div aria-hidden="true">
  {decorativeContent}
</div>
```

### Button Types

```tsx
// Button with action
<button aria-label="Close menu" onClick={closeMenu}>
  ×
</button>

// Link styled as button
<a href="/page" className="button" role="button">
  Navigate
</a>

// Toggle button
<button 
  aria-pressed={isActive}
  onClick={toggle}
>
  {isActive ? 'Active' : 'Inactive'}
</button>
```

## 📱 Responsive & Mobile

### Touch Targets

Minimum 44×44 pixels:

```tsx
// ✓ Good: Sufficient size
<button className="px-4 py-2">
  Click me (44px minimum height)
</button>

// ❌ Bad: Too small
<button className="px-2 py-1">
  Tiny button
</button>
```

### Mobile Navigation

```tsx
// ✓ Good: Accessible menu
<button 
  aria-label="Toggle navigation menu"
  aria-expanded={isOpen}
  onClick={toggleMenu}
>
  ☰
</button>

{isOpen && (
  <nav role="navigation">
    {/* Menu items */}
  </nav>
)}
```

### Viewport Scaling

```html
<!-- Allow user zoom -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- ❌ Never disable zoom -->
<!-- <meta name="viewport" content="user-scalable=no"> -->
```

## 🌈 Motion & Animation

### Respect Motion Preferences

```tsx
// Detect user preference
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches

// Apply conditional animation
<div 
  className={
    prefersReducedMotion 
      ? '' 
      : 'animate-fadeIn'
  }
>
  Content
</div>
```

## 🎯 Testing for Accessibility

### Manual Testing

```
☐ Keyboard-only navigation (no mouse)
☐ Tab through all interactive elements
☐ Test with zoom at 200%
☐ Check focus indicators visible
☐ Test color contrast with tool
☐ Check in light and dark modes
☐ Test with screen reader
☐ Verify all images have alt text
☐ Check heading hierarchy
☐ Verify form labels
```

### Automated Testing Tools

- **axe DevTools**: Chrome extension
- **WAVE**: Web accessibility evaluation
- **Lighthouse**: Built into Chrome DevTools
- **NVDA**: Screen reader (Windows)
- **JAWS**: Screen reader (Windows)
- **VoiceOver**: Screen reader (macOS)

### Keyboard Testing

```
Tab ⟶ Move to next element
Shift+Tab ⟶ Move to previous
Enter ⟶ Activate button
Space ⟶ Toggle, select
Arrow keys ⟶ Navigate options
Escape ⟶ Close dialog, menu
```

## 📋 Accessibility Checklist

- ✓ Semantic HTML throughout
- ✓ Logical heading hierarchy
- ✓ Descriptive alt text on images
- ✓ 4.5:1 minimum color contrast
- ✓ Keyboard accessible
- ✓ Focus indicators visible
- ✓ Forms have associated labels
- ✓ Error messages linked to fields
- ✓ Skip to main content link
- ✓ Respects prefers-reduced-motion
- ✓ ARIA used appropriately
- ✓ Touch targets ≥44×44px
- ✓ Text resizable to 200%
- ✓ No flashing/strobing content
- ✓ Tested with screen reader

## 🔗 Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [A11y Project](https://www.a11yproject.com/)
- [WebAIM](https://webaim.org/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
