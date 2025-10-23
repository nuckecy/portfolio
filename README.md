# Product Designer Portfolio

A Next.js portfolio showcasing design case studies and projects.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

## Features

- 🌓 Dark mode support with system preference detection
- 📱 Responsive design for all devices
- 🎨 Clean, minimalist black and white theme
- 📍 Floating sidebar navigation with auto-scroll highlighting
- ♿ Accessible components built with Radix UI
- 🎯 SEO optimized

## Case Studies

- [Zalando Chatbot Redesign](/case-study/zalando-chatbot) - From Frustration to Flow: Rebuilding Trust in Conversational AI

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Radix UI
- next-themes

## Project Structure

```
portfolio/
├── app/                          # Next.js app directory
│   ├── case-study/              # Case study pages
│   │   └── zalando-chatbot/     # Zalando chatbot case study
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── components/                   # React components
│   ├── ui/                      # UI components (shadcn)
│   ├── case-study-components.tsx # Case study specific components
│   ├── table-of-contents.tsx    # Floating sidebar navigation
│   ├── theme-provider.tsx       # Theme provider wrapper
│   └── theme-toggle.tsx         # Dark mode toggle
├── lib/                         # Utility functions
│   └── utils.ts                 # Helper utilities
└── md/                          # Markdown content files
```
