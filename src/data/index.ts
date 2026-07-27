import type { Category, Project } from './types';
import { nexusAI } from './projects/nexus-ai';
import { vaultBank } from './projects/vault-bank';
import { meridianHealth } from './projects/meridian-health';
import { atelierLuxe } from './projects/atelier-luxe';
import { havenInvest } from './projects/haven-invest';
import { wanderTravel } from './projects/wander-travel';

export * from './types';

export const projects: Project[] = [
  nexusAI,
  vaultBank,
  meridianHealth,
  atelierLuxe,
  havenInvest,
  wanderTravel,
];

export const projectsBySlug: Record<string, Project> = Object.fromEntries(
  projects.map((p) => [p.slug, p]),
);

export const filterCategories: Category[] = [
  'All',
  'SaaS',
  'FinTech',
  'Healthcare',
  'AI',
  'Ecommerce',
  'Dashboard',
  'Mobile App',
  'Website',
  'Branding',
  'Real Estate',
  'Travel',
];

export function projectsByCategory(cat: Category): Project[] {
  if (cat === 'All') return projects;
  return projects.filter(
    (p) => p.category === cat || p.keywords.some((k) => k.toLowerCase().includes(cat.toLowerCase())),
  );
}
