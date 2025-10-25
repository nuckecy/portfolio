# Product Designer Portfolio

A professional Next.js portfolio showcasing design case studies and projects with dynamic JSON content, comprehensive design system documentation, and a complete configuration architecture for easy customization.

## 🎯 Latest Updates (v2.3.0)

### Major Features
- **Dynamic JSON Content System**: All page content is now managed via JSON files with graceful fallback to TypeScript configs
- **Comprehensive Design System**: 10 detailed documentation files covering colors, typography, spacing, components, layout, shadows, animations, accessibility, and dark mode
- **Complete Component Migration**: About, case-studies, navigation, and footer components updated to use JSON data
- **Enhanced Fallback Pattern**: Intelligent data validation ensures proper rendering with missing JSON

### Previous Updates (v2.2.0)
- Visual enhancement with professional images
- Mobile optimization with improved layouts
- Dark mode support with system preference
- Responsive design across all breakpoints

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

## ✨ Features

- 🌓 Dark mode support with system preference detection
- 📱 Fully responsive mobile-first design with optimized layouts
- 🎨 Clean, minimalist design with customizable theme
- 🏗️ Complete configuration architecture (content + styles separated)
- 📄 **Dynamic JSON content system** with TypeScript fallback
- 📚 **Comprehensive design system documentation** (10 guides)
- ♿ Accessible components built with Radix UI (WCAG 2.1 AA)
- 🎯 SEO optimized
- 📦 Type-safe TypeScript configurations
- 🎭 Isolated page styles (no cross-page interference)
- 🖼️ Next.js Image optimization with external image support
- ✨ Smooth animations and interactive UI elements
- 🔗 Enhanced clickable areas for better UX

## 📂 Project Structure

```
portfolio/
├── app/                          # Next.js app directory
│   ├── case-studies/            # Case studies page
│   ├── about/                   # About page
│   ├── resume/                  # Resume page
│   ├── contact/                 # Contact page
│   ├── globals.css              # Global styles & CSS variables
│   ├── layout.tsx               # Root layout with Navigation & Footer
│   ├── page.tsx                 # Home page
│   └── providers.tsx            # Theme provider
├── components/                   # React components
│   ├── ui/                      # UI components (shadcn)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── radio-group.tsx
│   │   └── separator.tsx
│   ├── navigation.tsx           # Global navigation header
│   ├── footer.tsx               # Global footer
│   ├── theme-toggle.tsx         # Dark mode toggle
│   └── PaymentIcons.tsx         # Payment icons component
├── config/                       # Configuration files
│   ├── theme.ts                 # Global design tokens (colors, fonts, spacing)
│   ├── home.ts                  # Home page content config
│   ├── about.ts                 # About page content config
│   ├── resume.ts                # Resume page content config
│   ├── contact.ts               # Contact page content config
│   ├── navigation.ts            # Navigation content & links
│   ├── footer.ts                # Footer content & links
│   ├── case-studies/            # Case study configs (8 studies)
│   │   ├── zalando-chatbot.ts
│   │   ├── zalando-contextual.ts
│   │   ├── uba-hcm-connect.ts
│   │   ├── uba-redd.ts
│   │   ├── cashamm.ts
│   │   ├── orgcompass.ts
│   │   ├── specta.ts
│   │   ├── fraud-analytics.ts
│   │   ├── README.md
│   │   └── CONFIGURATION_SUMMARY.md
│   └── styles/                  # Page-specific style configs
│       ├── home.ts              # Home page layout & spacing
│       ├── case-studies.ts      # Case studies layout & grid
│       ├── about.ts             # About page layout
│       ├── resume.ts            # Resume page layout
│       ├── contact.ts           # Contact page layout
│       ├── navigation.ts        # Navigation styling
│       └── footer.ts            # Footer styling
├── design-system/               # Comprehensive design documentation ✨ NEW
│   ├── README.md               # Design system overview & philosophy
│   ├── colors.md               # Color palette, CSS variables, contrast
│   ├── typography.md           # Font families, scales, responsive
│   ├── spacing.md              # Spacing scale, component patterns
│   ├── components.md           # Component specs, states, composition
│   ├── layout.md               # Grid systems, flexbox, responsive
│   ├── shadows.md              # Elevation levels, interactive effects
│   ├── animations.md           # Keyframes, transitions, motion
│   ├── accessibility.md        # WCAG compliance, keyboard nav, ARIA
│   └── dark-mode.md            # Theme implementation, CSS variables
├── json/                        # Dynamic content files ✨ NEW
│   ├── pages/                  # Page content as JSON
│   │   ├── home.json
│   │   ├── about.json
│   │   ├── case-studies.json
│   │   ├── contact.json
│   │   └── resume.json
│   ├── case-studies/           # Individual case study data
│   │   ├── zalando-chatbot.json
│   │   ├── zalando-contextual.json
│   │   ├── uba-hcm-connect.json
│   │   ├── uba-redd.json
│   │   ├── cashamm.json
│   │   ├── orgcompass.json
│   │   ├── specta.json
│   │   └── fraud-analytics.json
│   └── components/             # Component data
│       ├── navigation.json
│       └── footer.json
├── lib/                         # Utility functions
│   ├── utils.ts                # Helper utilities
│   ├── theme.ts                # Theme utilities
│   └── load-json.ts            # JSON content loader ✨ NEW
├── public/
│   └── images/                  # All images
│       ├── Otobong_Okoko_Sketched.png  # Portrait image
│       └── [case-study-images]  # Case study images
├── md/                          # Markdown content files
│   ├── start.md                 # Project guidelines
│   ├── guide.md                 # Development guide
│   └── [case-study-files].md    # Case study markdown files
├── types/
│   └── json.d.ts                # TypeScript type definitions
├── CONFIG_ARCHITECTURE.md       # Complete config architecture guide
├── IMPLEMENTATION.md            # Implementation history & changelog
├── DESIGN_REFERENCE.md          # Design system reference
└── README.md                    # This file
```

## 🎨 Configuration & Content Architecture

This portfolio uses a **three-tier architecture** for maximum flexibility and maintainability:

### 1. Dynamic JSON Content (`/json/`)
All page content is managed via JSON files with graceful fallback to TypeScript configs:
- Page content: `/json/pages/*.json`
- Case studies: `/json/case-studies/*.json`
- Component data: `/json/components/*.json`
- **Benefit**: Update content without rebuilding components

### 2. TypeScript Config Fallback (`/config/`)
Fallback configurations for when JSON is unavailable:
- Page content configs: `/config/*.ts`
- Component configs: `/config/navigation.ts`, `/config/footer.ts`
- **Benefit**: Graceful degradation, zero breaking changes

### 3. Global Theme & Styles (`/config/theme.ts`, `/config/styles/`)
Shared design tokens and page-specific styling:
- Global theme (colors, fonts, spacing, breakpoints)
- Page-specific layouts and responsive behavior
- **Benefit**: Brand consistency maintained globally

### Benefits:
✅ Content-Component separation  
✅ Dynamic content loading  
✅ Graceful fallback system  
✅ No cross-page styling interference  
✅ Brand consistency maintained globally  
✅ Type-safe configurations  
✅ Easy customization  

See [CONFIG_ARCHITECTURE.md](./CONFIG_ARCHITECTURE.md) for complete documentation.

## 📚 Design System Documentation

Comprehensive design system guides in `/design-system/`:
- **colors.md** - HSL color system, light/dark modes, WCAG compliance
- **typography.md** - Font families, scales, responsive typography
- **spacing.md** - 8px spacing scale, component patterns
- **components.md** - UI component specifications and states
- **layout.md** - Grid systems, flexbox, responsive breakpoints
- **shadows.md** - Elevation levels and interactive effects
- **animations.md** - Keyframes, transitions, motion principles
- **accessibility.md** - WCAG 2.1 AA compliance, keyboard navigation
- **dark-mode.md** - Theme implementation, CSS variables

All documentation includes code examples and best practices.

## 📄 Pages

- **Home** (`/`) - Hero section with portrait and achievements
- **Case Studies** (`/case-studies`) - Grid of 8 design case studies
- **About** (`/about`) - About page (template ready)
- **Resume** (`/resume`) - Resume page (template ready)
- **Contact** (`/contact`) - Contact page (template ready)

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI (shadcn/ui)
- **Dark Mode**: next-themes
- **Icons**: Lucide React
- **Fonts**: Neue Montreal (from Fontshare)

## 🔧 Customization

### Update Page Content
Edit the content config file in `/config/[page-name].ts`:

```typescript
// Example: /config/home.ts
export const homeConfig = {
  hero: {
    badge: "HI. I'M A SENIOR",
    title: "Product\nDesigner.",
    description: "Your custom description here...",
  }
}
```

### Update Page Layout/Styles
Edit the style config in `/config/styles/[page-name].ts`:

```typescript
// Example: /config/styles/home.ts
export const homeStyles = {
  hero: {
    section: {
      className: "container mx-auto px-4 md:px-8 py-16 md:py-24",
    }
  }
}
```

### Update Brand Colors
Edit global theme in `/config/theme.ts`:

```typescript
export const theme = {
  colors: {
    primary: "hsl(220 100% 50%)", // Your brand color
  }
}
```

## 📚 Documentation

- [CONFIG_ARCHITECTURE.md](./CONFIG_ARCHITECTURE.md) - Complete configuration system guide
- [IMPLEMENTATION.md](./IMPLEMENTATION.md) - Implementation history and changelog
- [DESIGN_REFERENCE.md](./DESIGN_REFERENCE.md) - Design system reference
- [/md/start.md](./md/start.md) - Development guidelines
- [/config/case-studies/README.md](./config/case-studies/README.md) - Case studies configuration guide

## 🚦 Current Status

### ✅ Completed
- Git repository initialized with initial commit
- Development server running on port 3001
- All pages created (home, case-studies, about, resume, contact)
- Global navigation and footer implemented
- Complete configuration architecture (content + styles)
- Home page using config-driven approach
- Navigation using config-driven approach
- 8 case study configurations created
- Portrait image integrated
- Dark mode implementation
- Type-safe TypeScript configs

### 📝 Pending
- Git push to GitHub (SSH authentication needed)
- About/Resume/Contact page content implementation
- Footer component implementation
- Case studies page refactor to use style config

## 📦 Case Studies

This portfolio includes 8 comprehensive case studies:

1. **Zalando Chatbot Redesign** - Conversational AI redesign (€1.34M+ savings)
2. **Zalando Contextual Self-Help** - Predictive customer support (€3.2M savings)
3. **UBA HCM Connect** - Enterprise HR platform (20,000+ employees)
4. **UBA REDD Banking App** - Pan-African digital banking
5. **Cashamm E-Commerce** - Community-centered commerce platform
6. **OrgCompass HR Intelligence** - Enterprise analytics platform
7. **Specta Fintech** - Financial services platform
8. **Fraud Analytics Dashboard** - Anti-fraud intelligence system

Each case study is fully configured in `/config/case-studies/[study-name].ts`

## 🔗 Links

- **Repository**: [github.com/nuckecy/portfolio](https://github.com/nuckecy/portfolio)
- **LinkedIn**: [linkedin.com/in/otobong-okoko](https://linkedin.com/in/otobong-okoko)

## 📄 License

All rights reserved © 2025 Otobong Okoko
```
