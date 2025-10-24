# Development Guidelines

## Core Principles

### ✅ Always Follow These Rules:

1. **No Hardcoded Values**
   - All content goes in `/config/[page-name].ts`
   - All styles go in `/config/styles/[page-name].ts`
   - Use config files, never hardcode in components

2. **No Shortcuts**
   - Implement complete solutions
   - Follow the established architecture
   - Don't bypass the configuration system

3. **Ask Questions for Clarity**
   - If requirements are unclear, ask before implementing
   - Verify approach before making changes
   - Confirm understanding of configuration impact

4. **Test Everything Before Concluding**
   - Run the development server
   - Check for compilation errors
   - Verify all pages load correctly
   - Test responsive behavior

## File Organization

### Images
- **Location**: `/public/images/`
- **Naming**: Use descriptive names (e.g., `Otobong_Okoko_Sketched.png`)
- **New Images**: Always place in the images folder
- **Format**: Prefer PNG for portraits, JPG for photos, SVG for icons

### Markdown Files
- **Location**: `/md/` folder
- **Case Studies**: Store case study markdown in `/md/`
- **Documentation**: Keep docs in root (README.md, CHANGELOG.md, etc.)

### Configuration Files
- **Content**: `/config/[page-name].ts`
- **Styles**: `/config/styles/[page-name].ts`
- **Global Theme**: `/config/theme.ts`
- **Always Update**: Keep configs in sync with component changes

## Configuration Architecture

### Two-Tier System

#### 1. Global Theme (`/config/theme.ts`)
**Purpose**: Shared design tokens for brand consistency

**Includes**:
- Colors (background, foreground, primary, secondary, etc.)
- Typography (font families)
- Spacing scale
- Border radius
- Breakpoints
- Container settings

**When to Edit**: Only for brand-wide changes

**Impact**: Affects ALL pages

#### 2. Page-Specific Styles (`/config/styles/*.ts`)
**Purpose**: Isolated layout and styling per page

**Includes**:
- Section layouts (grid, flex, columns)
- Spacing (padding, margins, gaps)
- Typography scales (heading sizes)
- Responsive behavior
- Component-specific styles

**When to Edit**: For page-specific customization

**Impact**: Only affects that specific page

#### 3. Content Configs (`/config/*.ts`)
**Purpose**: All page content separated from code

**Includes**:
- Text, titles, descriptions
- Links (navigation, footer, external)
- Images and metadata
- Data structures

**When to Edit**: For content updates

**Impact**: Updates content without touching components

## Reference Content Folders

### Always Keep Updated:

1. **`/config/`** - All configuration files
2. **`/config/styles/`** - All style configurations
3. **`/md/`** - Markdown content
4. **`/public/images/`** - All images

## Quick Reference

### Development Server
```bash
cd /Users/otobong.okoko/Desktop/zalando/portfolio
npm run dev
```

### Access
- Local: http://localhost:3001

### File Locations
- Pages: `/app/`
- Components: `/components/`
- Configs: `/config/`
- Styles: `/config/styles/`
- Images: `/public/images/`
- Markdown: `/md/`

---

**Remember**: 
- No hardcoded values
- No shortcuts
- Test everything
- Ask questions when unclear
- Keep configs updated
