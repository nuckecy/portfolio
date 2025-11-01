# Application Architecture Documentation

**Version**: 3.1.0
**Date**: November 1, 2025
**Status**: ✅ Complete

---

## 📐 System Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    Portfolio Application                      │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              User Interface Layer                     │   │
│  ├──────────────────────────────────────────────────────┤   │
│  │                                                        │   │
│  │  • TubelightNavBar (Navigation)                       │   │
│  │  • Page Components (Home, About, Case Studies, etc)  │   │
│  │  • Case Study Hero                                    │   │
│  │  • PasswordWall (Access Control)                      │   │
│  │  • UI Components (Buttons, Forms, etc)               │   │
│  │                                                        │   │
│  └──────────────────────────────────────────────────────┘   │
│                           ▲                                    │
│                           │                                    │
│  ┌──────────────────────────────────────────────────────┐   │
│  │         Configuration & Content Layer                │   │
│  ├──────────────────────────────────────────────────────┤   │
│  │                                                        │   │
│  │  • config/theme.ts (Design Tokens)                   │   │
│  │  • config/styles/* (Page-Specific Styles)            │   │
│  │  • config/case-studies/* (Case Study Data)           │   │
│  │  • json/ (Dynamic Content Files)                     │   │
│  │                                                        │   │
│  └──────────────────────────────────────────────────────┘   │
│                           ▲                                    │
│                           │                                    │
│  ┌──────────────────────────────────────────────────────┐   │
│  │          API & Service Layer (NEW v3.1.0)           │   │
│  ├──────────────────────────────────────────────────────┤   │
│  │                                                        │   │
│  │  • /api/send-request (Email Service)                 │   │
│  │  • Mandrill API Integration                          │   │
│  │  • Form Validation                                    │   │
│  │  • Error Handling                                     │   │
│  │                                                        │   │
│  └──────────────────────────────────────────────────────┘   │
│                           ▲                                    │
│                           │                                    │
│  ┌──────────────────────────────────────────────────────┐   │
│  │         External Services & Infrastructure          │   │
│  ├──────────────────────────────────────────────────────┤   │
│  │                                                        │   │
│  │  • MailChimp Mandrill (Email)                        │   │
│  │  • Next.js (Framework)                                │   │
│  │  • Tailwind CSS (Styling)                            │   │
│  │  • Framer Motion (Animations)                        │   │
│  │                                                        │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## 🗂️ Component Hierarchy

### Page Level Components

```
App Layout
├── TubelightNavBar (Fixed Top Navigation)
├── Page Components
│   ├── Home
│   ├── About
│   ├── Case Studies (Grid View)
│   │   └── CaseStudyCard (Repeating)
│   ├── Case Study Detail
│   │   ├── CaseStudyHero
│   │   ├── PasswordWall (Wraps Protected Content)
│   │   │   ├── Initial Choice Screen
│   │   │   ├── Password Entry Form
│   │   │   └── Access Request Form
│   │   └── CaseStudyNavigation
│   └── Resume
└── Footer
```

### Component Dependencies

```
TubelightNavBar
├── Depends on: usePathname(), useTheme()
├── Uses: Framer Motion
├── Exports: Navigation UI with active state
└── No child components (self-contained)

PasswordWall
├── Depends on: useState, useEffect
├── Uses: Tailwind CSS, Form components
├── Exports: Protected content wrapper
└── Child components: Input, Label, Button

CaseStudyHero
├── Depends on: useEffect, useRef, useState
├── Uses: CSS animations
├── Exports: Hero section with animations
└── No child components (self-contained)

Layout
├── Depends on: TubelightNavBar, Footer
├── Uses: next-themes (Theme provider)
├── Exports: Root layout wrapper
└── Child components: TubelightNavBar, Footer
```

---

## 🔄 Data Flow

### Navigation Flow

```
User Clicks Link
    ↓
usePathname() Returns Current Route
    ↓
isActive() Matches Route
    ↓
Motion.div Animates Tubelight Glow
    ↓
Active Item Highlighted
    ↓
Theme Toggle Updates useTheme()
```

### Password Wall Flow

```
User Visits Protected Case Study
    ↓
PasswordWall Component Renders
    ↓
viewMode = 'initial'
    ├─ Show Choice Screen
    │  ├─ User Clicks "Unlock"
    │  │  └─ viewMode = 'unlock'
    │  │     └─ Show Password Form
    │  │        ├─ User Enters Password
    │  │        └─ handleSubmit()
    │  │           ├─ Password Correct?
    │  │           │  ├─ Yes: isUnlocked = true
    │  │           │  │       Content Renders
    │  │           │  └─ No: Shake Animation
    │  │           │        attempts++
    │  │
    │  └─ User Clicks "Request"
    │     └─ viewMode = 'request'
    │        └─ Show Request Form
    │           ├─ User Fills Form
    │           ├─ Validates All Fields
    │           └─ handleRequestAccess()
    │              ├─ POST /api/send-request
    │              ├─ Server Validates
    │              ├─ Mandrill Sends Emails
    │              └─ showSuccess = true
    │                 ├─ Display Success Message
    │                 └─ Auto-reset after 15s
```

### Email Request Flow

```
User Submits Access Request
    ↓
Client-Side Validation
├─ Check all fields filled
├─ Check message length
└─ Check recruiter = true
    ↓
POST /api/send-request
    ↓
Server-Side Validation
├─ Re-validate all inputs
├─ Check API key exists
└─ Prepare email payloads
    ↓
Mandrill API Call #1 (User Email)
├─ To: user's email
├─ Subject: "Access Request Received"
├─ Template: Acknowledgment
└─ Tracking: opens, clicks
    ↓
Mandrill API Call #2 (Owner Email)
├─ To: me@otobong.com
├─ Subject: "New Access Request - [Case Study]"
├─ Template: Details
└─ Tracking: opens, clicks
    ↓
Response to Client
├─ Success: 200 + message
└─ Error: 400/500 + error details
    ↓
Client Updates UI
├─ showSuccess = true
├─ Display confirmation
└─ Auto-reset after 15 seconds
```

---

## 🏗️ State Management

### Global State (via hooks)

```typescript
// TubelightNavBar
const { theme, setTheme } = useTheme()  // Dark/Light mode
const pathname = usePathname()           // Current route
const [mounted, setMounted] = useState(false)
const [isMobile, setIsMobile] = useState(false)

// PasswordWall
const [isUnlocked, setIsUnlocked] = useState(false)
const [password, setPassword] = useState("")
const [showPassword, setShowPassword] = useState(false)
const [attempts, setAttempts] = useState(0)
const [error, setError] = useState("")
const [shake, setShake] = useState(false)
const [viewMode, setViewMode] = useState<'initial' | 'unlock' | 'request'>('initial')
const [isRecruiter, setIsRecruiter] = useState<boolean | null>(null)
const [formData, setFormData] = useState({ name: "", email: "", message: "" })
const [isDark, setIsDark] = useState(false)
const [requestError, setRequestError] = useState("")
const [isSubmitting, setIsSubmitting] = useState(false)
const [showSuccess, setShowSuccess] = useState(false)
```

### Local State Patterns

1. **Form State**: Stored in component state, not persisted
2. **UI State**: Controlled by boolean flags (showPassword, showSuccess)
3. **Validation State**: Managed during form submission
4. **Theme State**: Global via next-themes context

---

## 🔌 Integration Points

### External Services

#### 1. Mandrill Email API
```
POST https://mandrillapp.com/api/1.0/messages/send.json
├─ Authentication: API key in request body
├─ Payload: Message object with recipient, subject, content
├─ Response: Array of send results
└─ Error Handling: 400/500 responses with error details
```

#### 2. Next.js Features
```
useRouter()          → Page navigation
usePathname()        → Current route detection
useTheme()          → Theme switching
Image Component     → Optimized image loading
API Routes          → Serverless functions
```

#### 3. Framer Motion
```
motion.div          → Animated container
layoutId            → Shared layout animation
transition          → Spring physics animation
initial/animate     → Animation states
```

---

## 📊 Data Structures

### Navigation Items

```typescript
interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

const navItems = [
  { name: 'Home', url: '/', icon: Home },
  { name: 'About', url: '/about', icon: User },
  { name: 'Case Studies', url: '/case-studies', icon: Briefcase },
  { name: 'Resume', url: '/resume', icon: FileText },
  { name: 'LinkedIn', url: 'https://...', icon: User },
]
```

### Password Wall Form Data

```typescript
interface FormData {
  name: string
  email: string
  message: string
}

interface AccessRequest {
  name: string
  email: string
  message: string
  isRecruiter: boolean
  caseStudySlug: string
}
```

### Email Payload (Mandrill)

```typescript
interface EmailPayload {
  key: string
  message: {
    html: string
    text: string
    subject: string
    from_email: string
    from_name: string
    to: Array<{ email: string; type: "to" }>
    track_opens: boolean
    track_clicks: boolean
    auto_text: boolean
  }
}
```

---

## 🔐 Security Architecture

### Client-Side Security

```
TubelightNavBar
├─ Active state calculated from pathname (safe)
├─ Theme toggling is non-critical
└─ No sensitive data exposed

PasswordWall
├─ Password stored in React state (session-only)
├─ Form validation prevents submission of invalid data
├─ API key never exposed (server-side only)
└─ No localStorage persistence
```

### Server-Side Security

```
/api/send-request
├─ Input Validation
│  ├─ Presence checks
│  ├─ String length limits
│  └─ Type checking
├─ Authorization
│  ├─ Recruiter-only enforcement
│  └─ Case study slug validation
├─ API Key Management
│  ├─ Environment variable only
│  ├─ Never logged or exposed
│  └─ Only used in server context
└─ Error Handling
   ├─ Generic messages to client
   ├─ Detailed logs for debugging
   └─ No sensitive info in responses
```

---

## ⚡ Performance Considerations

### Code Splitting

```
Pages (Automatic via Next.js)
├─ /               (Home page bundle)
├─ /about          (About page bundle)
├─ /case-studies   (Case studies list bundle)
├─ /case-study/*   (Individual case study bundle)
└─ /resume         (Resume page bundle)

Components (Lazy loaded)
├─ TubelightNavBar (Always loaded, fixed position)
├─ PasswordWall    (Lazy when needed)
└─ CaseStudyHero   (Lazy when needed)
```

### Optimization Strategies

1. **Image Optimization**: Next.js Image component with proper sizing
2. **CSS-in-JS**: Tailwind for zero-runtime CSS
3. **Framer Motion**: Hardware-accelerated animations
4. **Event Debouncing**: Resize handler with cleanup
5. **Memoization**: Components avoid unnecessary re-renders

---

## 🧪 Testing Architecture

### Unit Tests (Recommended)

```
Components/
├─ TubelightNavBar.test.tsx
│  ├─ Renders navigation items
│  ├─ Active state detection
│  ├─ Theme toggle functionality
│  └─ Mobile responsive behavior
│
├─ PasswordWall.test.tsx
│  ├─ Password validation
│  ├─ Form submission
│  ├─ Error handling
│  └─ State transitions
│
└─ EmailAPI.test.ts
   ├─ Input validation
   ├─ Email payload generation
   └─ Error scenarios
```

### Integration Tests (Recommended)

```
User Flows/
├─ Navigation flow
│  └─ Test route changes and active states
│
├─ Password wall flow
│  └─ Test unlock and request access flows
│
└─ Email submission
   └─ Test form submission to API
```

### E2E Tests (Recommended)

```
Cypress/Playwright tests
├─ Full navigation flow
├─ Password wall unlock and request
├─ Email sending (mock)
└─ Dark mode toggling
```

---

## 🚀 Deployment Architecture

### Build Process

```
Next.js Build
├─ Code Bundling
├─ Image Optimization
├─ Static Generation
└─ API Route Compilation
```

### Runtime Environment

```
Server Environment
├─ Node.js Runtime
├─ Environment Variables
│  └─ MAILCHIMP_API_KEY
└─ API Routes

Client Environment
├─ Browser JavaScript
├─ Tailwind CSS
└─ Framer Motion
```

### Environment Configuration

```
Development (.env.local)
└─ MAILCHIMP_API_KEY=dev_key

Staging (Vercel/Netlify)
└─ MAILCHIMP_API_KEY=staging_key

Production
└─ MAILCHIMP_API_KEY=prod_key
```

---

## 📈 Scalability Considerations

### Current Limitations

1. **Password Storage**: Client-side, no persistence
2. **Email Rate Limiting**: Not implemented
3. **Database**: No user data storage
4. **Analytics**: Basic Mandrill tracking

### Future Enhancements

1. **User Authentication**: JWT or NextAuth.js
2. **Database**: PostgreSQL with Prisma ORM
3. **Rate Limiting**: Redis or built-in API rate limiting
4. **Admin Dashboard**: Case study access analytics
5. **Email Templates**: Dynamic template rendering

---

## 🔄 Version History

### v3.1.0 (Current)
- ✨ Navigation redesign with TubelightNavBar
- 📧 Mandrill email integration
- 🔓 Reveal flow with multi-state form

### v3.0.0
- 📄 Resume redesign with ExperienceSection
- Enhanced content rendering

### v2.5.0
- 🌍 Global configuration system
- JSON-first content loading

---

## 📚 Related Documentation

- [NAVBAR_GUIDE.md](./NAVBAR_GUIDE.md) - Navigation component details
- [EMAIL_INTEGRATION_GUIDE.md](./EMAIL_INTEGRATION_GUIDE.md) - Email API documentation
- [PASSWORD_WALL_GUIDE.md](./PASSWORD_WALL_GUIDE.md) - Access control documentation
- [CONFIG_ARCHITECTURE.md](./CONFIG_ARCHITECTURE.md) - Configuration system
- [CHANGELOG.md](./CHANGELOG.md) - Complete version history

---

**Last Updated**: November 1, 2025
**Maintained by**: Otobong Okoko
**Status**: ✅ Complete
