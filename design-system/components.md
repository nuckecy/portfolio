# Components

Component specifications, patterns, and usage guidelines for the portfolio design system.

## 📦 Component Architecture

Components are built on these principles:

- **Accessibility First**: All components use Radix UI primitives
- **Composability**: Components combine with Tailwind utilities
- **Consistency**: All components follow design patterns
- **Type Safety**: Full TypeScript support
- **Reusability**: Props-based customization

## 🔘 Button Component

**File**: `components/ui/button.tsx`

### Variants

```tsx
// Primary (default)
<Button>Click me</Button>

// Secondary
<Button variant="secondary">Secondary</Button>

// Outline
<Button variant="outline">Outline</Button>

// Ghost
<Button variant="ghost">Ghost</Button>

// Destructive
<Button variant="destructive">Delete</Button>

// Link
<Button variant="link">Link button</Button>
```

### Sizes

```tsx
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">⊕</Button>
```

### States

```tsx
// Disabled
<Button disabled>Disabled</Button>

// Loading
<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Loading...
</Button>

// Active
<Button className="ring-2">Active</Button>
```

### Props

```typescript
interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  asChild?: boolean
}
```

## 🎴 Card Component

**File**: `components/ui/card.tsx`

### Basic Usage

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    Card content
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Styling

```tsx
// Elevated card (default)
<Card className="shadow-lg">
  {/* Content */}
</Card>

// Bordered card
<Card className="border-2">
  {/* Content */}
</Card>

// No border
<Card className="border-0">
  {/* Content */}
</Card>
```

## 📻 Radio Group Component

**File**: `components/ui/radio-group.tsx`

### Basic Usage

```tsx
<RadioGroup>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option1" id="option1" />
    <Label htmlFor="option1">Option 1</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option2" id="option2" />
    <Label htmlFor="option2">Option 2</Label>
  </div>
</RadioGroup>
```

### Default Value

```tsx
<RadioGroup defaultValue="option1">
  {/* Options */}
</RadioGroup>
```

## ─ Separator Component

**File**: `components/ui/separator.tsx`

### Horizontal Separator

```tsx
<Separator /> {/* Full width horizontal line */}
<Separator className="my-6" /> {/* With vertical spacing */}
```

### Vertical Separator

```tsx
<div className="flex items-center gap-4">
  <div>Content left</div>
  <Separator orientation="vertical" className="h-12" />
  <div>Content right</div>
</div>
```

## 🎨 Custom Components

### PaymentIcons

**File**: `components/PaymentIcons.tsx`

Used to display payment method icons in the portfolio.

```tsx
<PaymentIcons />
```

## 🏗️ Component Hierarchy

```
App Root
├── Layout
│   ├── Navigation
│   │   └── Navigation Links
│   ├── Main Content
│   │   ├── Sections
│   │   │   ├── Card
│   │   │   ├── Button
│   │   │   └── RadioGroup
│   │   └── Page Components
│   └── Footer
│       └── Footer Links
└── Modals/Overlays
    ├── Popover
    └── Dialog
```

## 🎯 Component States

All interactive components follow consistent state patterns:

### Default State
- Natural appearance
- Ready for interaction
- Full opacity

### Hover State
- Subtle background change
- Cursor pointer
- Enhanced visibility

### Active/Pressed State
- Emphasized appearance
- Ring or background highlight
- Indicates selection

### Disabled State
- Reduced opacity (60%)
- No cursor changes
- Not interactive
- No hover effects

### Focus State
- Focus ring (2px solid)
- Keyboard accessible
- Clear visual indicator

## 📝 Form Components

### Text Input Pattern

```tsx
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input
    id="email"
    type="email"
    placeholder="your@email.com"
    required
  />
  <p className="text-xs text-muted-foreground">
    We'll never share your email.
  </p>
</div>
```

### Textarea Pattern

```tsx
<div className="space-y-2">
  <Label htmlFor="message">Message</Label>
  <Textarea
    id="message"
    placeholder="Your message here..."
    rows={4}
  />
</div>
```

### Select Pattern

```tsx
<div className="space-y-2">
  <Label htmlFor="option">Choose an option</Label>
  <select id="option" className="w-full px-3 py-2 border rounded-md">
    <option value="">Select...</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </select>
</div>
```

## ♿ Accessibility Features

### Keyboard Navigation

All components support:
- **Tab**: Move to next interactive element
- **Shift+Tab**: Move to previous element
- **Enter/Space**: Activate buttons and controls
- **Arrow keys**: Navigate options in lists

### Screen Readers

All components include:
- ARIA labels and descriptions
- Semantic HTML
- Role attributes where needed
- Status announcements

### Focus Management

- Clear visual focus indicators
- Logical tab order
- Focus trapping in modals
- Focus restoration on close

## 🔄 Composition Patterns

### Button with Icon

```tsx
<Button variant="ghost" size="icon">
  <ChevronRight className="h-4 w-4" />
</Button>
```

### Card with Button

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Form with RadioGroup

```tsx
<form className="space-y-6">
  <div>
    <Label className="mb-4 block">Choose an option</Label>
    <RadioGroup>
      {/* Radio items */}
    </RadioGroup>
  </div>
  <Button type="submit">Submit</Button>
</form>
```

## 🎨 Styling Patterns

### Text Color

```tsx
// Primary text (foreground)
<div className="text-foreground">Primary text</div>

// Secondary text
<div className="text-muted-foreground">Secondary text</div>

// Link color
<a href="#" className="text-primary hover:underline">Link</a>
```

### Background

```tsx
// Card background
<div className="bg-card">Card content</div>

// Secondary background
<div className="bg-secondary">Secondary</div>

// Accent background
<div className="bg-accent">Accent</div>
```

### Borders

```tsx
// Standard border
<div className="border">Content</div>

// Border with color
<div className="border border-primary">Content</div>

// No border
<div className="border-0">Content</div>
```

## 📱 Responsive Component Usage

All components are responsive by default:

```tsx
// Responsive button sizes
<Button className="text-sm md:text-base lg:text-lg">
  Responsive Button
</Button>

// Responsive card layout
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</div>
```

## 🔌 Adding New Components

When adding new components:

1. Place in `components/ui/` or `components/`
2. Use Radix UI primitives as base
3. Add TypeScript interfaces
4. Support all required variants
5. Include accessibility attributes
6. Document in this file
7. Add to component hierarchy
8. Test keyboard navigation
9. Verify color contrast

## 📦 Component Dependencies

- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first styling
- **React**: UI library
- **TypeScript**: Type safety

All components are framework-agnostic at the Radix UI level, making them portable to other frameworks if needed.
