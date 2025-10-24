# Product Designer Portfolio

A professional Next.js portfolio showcasing design case studies and projects with a complete configuration architecture for easy customization.

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
- 📱 Responsive design for all devices
- 🎨 Clean, minimalist design with customizable theme
- � Complete configuration architecture (content + styles separated)
- ♿ Accessible components built with Radix UI
- 🎯 SEO optimized
- 📦 Type-safe TypeScript configurations
- 🎭 Isolated page styles (no cross-page interference)

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
├── lib/                         # Utility functions
│   ├── utils.ts                 # Helper utilities
│   └── theme.ts                 # Theme utilities
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

## 🎨 Configuration Architecture

This portfolio uses a **two-tier configuration system** for maximum flexibility:

### 1. Global Theme (`/config/theme.ts`)
Shared design tokens that maintain brand consistency:
- Color tokens (background, foreground, primary, muted, etc.)
- Typography (font families)
- Base spacing units
- Border radius
- Breakpoints
- Container settings

**Changes here affect ALL pages**

### 2. Page-Specific Styles (`/config/styles/*.ts`)
Isolated layout and styling for each page:
- Section layouts (grid, flex, columns)
- Spacing (padding, margins, gaps)
- Typography scales (heading sizes)
- Responsive behavior

**Changes only affect the specific page**

### 3. Content Configs (`/config/*.ts`)
All page content separated from code:
- Text, titles, descriptions
- Navigation & footer links
- Images and metadata
- Social media links

**Easy content updates without touching component code**

### Benefits:
✅ No cross-page styling interference  
✅ Brand consistency maintained globally  
✅ Type-safe configurations  
✅ Easy customization  

See [CONFIG_ARCHITECTURE.md](./CONFIG_ARCHITECTURE.md) for complete documentation.

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
