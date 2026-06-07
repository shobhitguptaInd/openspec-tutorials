# Links Configuration Guide

## Overview

This project now uses a centralized link configuration system to manage all internal and external links across the website. This makes it easy to update links in one place and ensures consistency throughout the application.

## Configuration File

**Location:** [`src/config/links.ts`](src/config/links.ts)

## Structure

The configuration file contains two main sections:

### 1. Internal Links
Internal navigation links (relative paths within the application)

```typescript
links.internal.{linkKey} = {
  url: string,           // The relative path
  label: string,         // Display text
  description: string,   // What the link points to
  usedBy: string[],     // Pages that use this link
  parent?: string,      // Parent path (for nested routes)
  status: 'active' | 'broken' | 'pending'
}
```

### 2. External Links
External resource links (absolute URLs to external sites)

```typescript
links.external.{linkKey} = {
  url: string,           // The absolute URL
  label: string,         // Display text
  description: string,   // What the link points to
  usedBy: string[],     // Pages that use this link
  status: 'active' | 'broken' | 'pending',
  note?: string         // Additional information (especially for broken links)
}
```

## How to Use

### In React Components

```typescript
import { links } from '@/config/links'

// Use internal link
<a href={links.internal.tutorialsJava.url}>
  {links.internal.tutorialsJava.label}
</a>

// Use external link
<a href={links.external.documentation.url}>
  {links.external.documentation.label}
</a>
```

### Helper Functions

#### Get a specific link
```typescript
import { getLink } from '@/config/links'

const javaLink = getLink('internal', 'tutorialsJava')
const docsLink = getLink('external', 'documentation')
```

#### Get all broken links
```typescript
import { getBrokenLinks } from '@/config/links'

const broken = getBrokenLinks()
// Returns array of broken links with details
```

#### Get links used by a specific page
```typescript
import { getLinksByPage } from '@/config/links'

const pageLinks = getLinksByPage('getting-started')
// Returns { internal: [...], external: [...] }
```

## Making Changes

### ⚠️ IMPORTANT: Before Modifying Links

1. **Check the `usedBy` field** - This shows which pages depend on the link
2. **Check the `parent` field** - For nested routes, ensure parent paths remain consistent
3. **Update the `status` field** - Mark as 'active', 'broken', or 'pending'
4. **Add a `note` field** - For broken links, explain why they're broken

### Example: Updating a Broken Link

```typescript
// BEFORE
documentation: {
  url: 'https://docs.openspec.dev',
  label: 'Official Documentation',
  description: 'Complete OpenSpec documentation',
  usedBy: ['getting-started', 'footer'],
  status: 'broken',
  note: 'Domain not resolving - needs to be set up or updated'
}

// AFTER (when fixed)
documentation: {
  url: 'https://docs.openspec.io',  // ✅ Updated URL
  label: 'Official Documentation',
  description: 'Complete OpenSpec documentation',
  usedBy: ['getting-started', 'footer'],
  status: 'active',  // ✅ Updated status
  // note removed since it's now working
}
```

### Example: Adding a New Link

```typescript
// Add to links.internal or links.external
newFeature: {
  url: '/features/new-feature',
  label: 'New Feature',
  description: 'Documentation for the new feature',
  usedBy: ['navigation', 'home'],
  parent: '/features',
  status: 'active'
}
```

## Current Link Status

### ✅ Working Internal Links
All internal navigation links are verified and working:
- Getting Started pages (SDLC, Enterprise Features, Integrations, etc.)
- Tutorial pages (COBOL, Java, .NET)
- Samples and Playground pages

### ⚠️ Broken External Links
The following external links need attention:

1. **Official Documentation** (`https://docs.openspec.dev`)
   - Status: DNS resolution failed
   - Used by: getting-started, footer
   - Action needed: Set up domain or update URL

2. **GitHub Repository** (`https://github.com/openspec/openspec`)
   - Status: Returns 404
   - Used by: getting-started, footer
   - Action needed: Verify correct organization/repo name

3. **Discord Community** (`https://discord.gg/openspec`)
   - Status: Unable to verify
   - Used by: getting-started, footer
   - Action needed: Verify Discord invite link

4. **Training Portal** (`https://training.openspec.dev`)
   - Status: DNS resolution failed
   - Used by: getting-started, footer
   - Action needed: Set up domain or update URL

## Benefits of This System

1. **Single Source of Truth** - All links defined in one place
2. **Easy Maintenance** - Update once, changes reflect everywhere
3. **Dependency Tracking** - Know which pages use each link
4. **Status Monitoring** - Track which links are working or broken
5. **Type Safety** - TypeScript ensures correct link usage
6. **Documentation** - Built-in descriptions and notes

## Migration Status

### ✅ Migrated Pages
- [`src/app/getting-started/page.tsx`](src/app/getting-started/page.tsx) - Fully migrated

### 📋 To Be Migrated
Other pages can be migrated to use the centralized config as needed:
- Navigation component
- Footer component
- Other tutorial pages
- Sample pages

## Testing

After making changes to links:

1. **Build the project**: `npm run build`
2. **Run the dev server**: `npm run dev`
3. **Test the links**: Visit affected pages and verify links work correctly
4. **Check console**: Look for any TypeScript errors or warnings

## Questions?

If you need to add new links or modify existing ones, refer to this guide and the examples in [`src/config/links.ts`](src/config/links.ts).