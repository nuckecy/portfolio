# Case Studies Configuration Management

## Single Source of Truth

The TypeScript config files are the **single source of truth** for all case study data.

```
config/case-studies/*.ts  ← EDIT HERE (Single Source)
         ↓
    (generate script)
         ↓
json/case-studies/*.json  ← Auto-generated (Do not edit)
```

## File Locations

### Source of Truth (Edit these)
- `config/case-studies/zalando-contextual.ts`
- `config/case-studies/uba-hcm-connect.ts`
- `config/case-studies/fraud-analytics.ts`
- `config/case-studies/cashamm.ts`
- `config/case-studies/uba-redd.ts`
- `config/case-studies/zalando-chatbot.ts`
- `config/case-studies/orgcompass.ts`
- `config/case-studies/specta.ts`

### Generated Files (Do not edit directly)
- `json/case-studies/*.json`

These are automatically generated from the TypeScript configs.

## How to Update Case Studies

1. **Edit the TypeScript config** in `config/case-studies/[case-study-id].ts`:
   ```typescript
   cardInfo: {
     title: "Your Title",
     subtitle: "Your Subtitle", 
     description: "Your description with impact metrics",
   },
   ```

2. **Regenerate JSON files**:
   ```bash
   npm run generate:case-studies
   ```

3. **Rebuild the project**:
   ```bash
   npm run build
   ```

   Or just run `npm run dev` for development - it will regenerate on each build.

## Automatic Generation

The JSON files are **automatically generated** when you run:
- `npm run build` - Before building Next.js
- `npm run generate:case-studies` - Manually regenerate

## Why This System?

✅ **Single Source of Truth**: No duplicate data across TS and JSON  
✅ **Consistency**: All pages (home, case-studies, individual) use synced data  
✅ **Type Safety**: TypeScript configs provide type checking  
✅ **Maintainability**: Edit in one place, updates propagate everywhere  
✅ **Flexibility**: JSON still available for server-side loading in Next.js  

## Data Flow

```
TS Config (cardInfo, hero, metrics)
    ↓
Generate Script
    ↓
JSON Files (for server-side rendering)
    ↓
Next.js Server Components
    ↓
Rendered Pages (home, case-studies, /case-study/[slug])
```
