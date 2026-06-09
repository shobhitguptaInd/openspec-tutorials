/**
 * Centralized Link Configuration
 * 
 * This file contains all internal and external links used across the website.
 * 
 * IMPORTANT: When modifying links, check the 'usedBy' field to understand
 * which pages depend on each link to avoid breaking navigation.
 * 
 * Structure:
 * - internal: Internal navigation links (relative paths)
 * - external: External resource links (absolute URLs)
 * - Each link includes:
 *   - url: The actual link
 *   - label: Display text
 *   - description: What the link points to
 *   - usedBy: Array of pages that use this link
 *   - status: 'active' | 'broken' | 'pending' - current link status
 */

export const links = {
  // Internal Navigation Links
  internal: {
    home: {
      url: '/',
      label: 'Home',
      description: 'Main landing page',
      usedBy: ['navigation', 'breadcrumbs'],
      status: 'active' as const
    },
    
    gettingStarted: {
      url: '/getting-started',
      label: 'Getting Started',
      description: 'Introduction to OpenSpec',
      usedBy: ['navigation', 'home'],
      status: 'active' as const
    },
    
    sdlcPhases: {
      url: '/getting-started/sdlc-phases',
      label: 'SDLC Phases',
      description: 'Detailed SDLC integration guide',
      usedBy: ['getting-started'],
      parent: '/getting-started',
      status: 'active' as const
    },
    
    enterpriseFeatures: {
      url: '/getting-started/enterprise-features',
      label: 'Enterprise Features',
      description: 'Enterprise-grade features overview',
      usedBy: ['getting-started', 'navigation'],
      parent: '/getting-started',
      status: 'active' as const
    },
    
    integrations: {
      url: '/getting-started/integrations',
      label: 'Integrations',
      description: 'Tool integrations guide',
      usedBy: ['getting-started', 'navigation'],
      parent: '/getting-started',
      status: 'active' as const
    },
    
    useCases: {
      url: '/getting-started/use-cases',
      label: 'Use Cases',
      description: 'Real-world use cases',
      usedBy: ['getting-started', 'navigation'],
      parent: '/getting-started',
      status: 'active' as const
    },
    
    roi: {
      url: '/getting-started/roi',
      label: 'ROI Calculator',
      description: 'Return on investment calculator',
      usedBy: ['getting-started', 'navigation'],
      parent: '/getting-started',
      status: 'active' as const
    },
    
    quickReference: {
      url: '/getting-started/quick-reference',
      label: 'Quick Reference',
      description: 'Quick reference guide',
      usedBy: ['getting-started', 'navigation'],
      parent: '/getting-started',
      status: 'active' as const
    },
    
    bobCommands: {
      url: '/getting-started/bob-commands',
      label: 'OpenSpec Commands',
      description: 'OpenSpec commands for IBM Bob',
      usedBy: ['getting-started', 'navigation'],
      parent: '/getting-started',
      status: 'active' as const
    },
    
    // Tutorial Links
    tutorialsCobol: {
      url: '/tutorials/cobol',
      label: 'COBOL/JCL',
      description: 'Mainframe development with OpenSpec',
      usedBy: ['getting-started', 'navigation', 'home'],
      parent: '/tutorials',
      status: 'active' as const
    },
    
    tutorialsJava: {
      url: '/tutorials/java',
      label: 'Java',
      description: 'Spring Boot microservices',
      usedBy: ['getting-started', 'navigation', 'home'],
      parent: '/tutorials',
      status: 'active' as const
    },
    
    tutorialsDotnet: {
      url: '/tutorials/dotnet',
      label: '.NET',
      description: 'ASP.NET Core applications',
      usedBy: ['getting-started', 'navigation', 'home'],
      parent: '/tutorials',
      status: 'active' as const
    },
    
    // Other Pages
    samples: {
      url: '/samples',
      label: 'Sample Projects',
      description: 'Complete working examples',
      usedBy: ['getting-started', 'navigation', 'home'],
      status: 'active' as const
    },
    
    playground: {
      url: '/playground',
      label: 'Interactive Playground',
      description: 'Try OpenSpec in your browser',
      usedBy: ['getting-started', 'navigation', 'home'],
      status: 'active' as const
    },
    
    sitemap: {
      url: '/sitemap',
      label: 'Sitemap',
      description: 'Complete site structure',
      usedBy: ['footer'],
      status: 'active' as const
    }
  },
  
  // External Resource Links
  external: {
    documentation: {
      url: 'https://docs.openspec.dev',
      label: 'Official Documentation',
      description: 'Complete OpenSpec documentation',
      usedBy: ['getting-started', 'footer'],
      status: 'broken' as const, // DNS resolution failed
      note: 'Domain not resolving - needs to be set up or updated'
    },
    
    github: {
      url: 'https://github.com/openspec/openspec',
      label: 'GitHub Repository',
      description: 'OpenSpec source code',
      usedBy: ['getting-started', 'footer'],
      status: 'broken' as const, // Returns 404
      note: 'Repository not found - verify correct organization/repo name'
    },
    
    githubTutorials: {
      url: 'https://github.com/shobhitguptaInd/openspec-tutorials',
      label: 'Tutorial Repository',
      description: 'OpenSpec tutorials repository',
      usedBy: ['samples'],
      status: 'active' as const
    },
    
    discord: {
      url: 'https://discord.gg/openspec',
      label: 'Discord Community',
      description: 'Join the OpenSpec community',
      usedBy: ['getting-started', 'footer'],
      status: 'broken' as const, // Unable to verify
      note: 'Discord invite link needs verification'
    },
    
    training: {
      url: 'https://training.openspec.dev',
      label: 'Training & Certification',
      description: 'Official training programs',
      usedBy: ['getting-started', 'footer'],
      status: 'broken' as const, // Unable to verify
      note: 'Domain not resolving - needs to be set up or updated'
    },
    
    support: {
      url: 'mailto:support@openspec.dev',
      label: 'Enterprise Support',
      description: 'Contact enterprise support',
      usedBy: ['getting-started', 'footer'],
      status: 'active' as const
    }
  }
} as const;

// Type exports for TypeScript support
export type InternalLinkKey = keyof typeof links.internal;
export type ExternalLinkKey = keyof typeof links.external;
export type LinkStatus = 'active' | 'broken' | 'pending';

/**
 * Helper function to get a link by key
 * @param type - 'internal' or 'external'
 * @param key - The link key
 * @returns The link object or undefined
 */
export function getLink(type: 'internal', key: InternalLinkKey): typeof links.internal[InternalLinkKey];
export function getLink(type: 'external', key: ExternalLinkKey): typeof links.external[ExternalLinkKey];
export function getLink(type: 'internal' | 'external', key: string) {
  return links[type][key as keyof typeof links[typeof type]];
}

/**
 * Helper function to get all broken links
 * @returns Array of broken links with their details
 */
export function getBrokenLinks() {
  const broken: Array<{
    type: 'internal' | 'external';
    key: string;
    url: string;
    usedBy: readonly string[];
    note?: string;
  }> = [];
  
  // Check external links (internal links are verified to exist)
  Object.entries(links.external).forEach(([key, link]) => {
    if (link.status === 'broken') {
      broken.push({
        type: 'external',
        key,
        url: link.url,
        usedBy: link.usedBy,
        note: link.note
      });
    }
  });
  
  return broken;
}

/**
 * Helper function to get all links used by a specific page
 * @param pageName - The page name to search for
 * @returns Object containing internal and external links used by the page
 */
export function getLinksByPage(pageName: string) {
  const internal = Object.entries(links.internal)
    .filter(([_, link]) => (link.usedBy as readonly string[]).includes(pageName))
    .map(([key, link]) => ({ key, ...link }));
  
  const external = Object.entries(links.external)
    .filter(([_, link]) => (link.usedBy as readonly string[]).includes(pageName))
    .map(([key, link]) => ({ key, ...link }));
  
  return { internal, external };
}

// Made with Bob
