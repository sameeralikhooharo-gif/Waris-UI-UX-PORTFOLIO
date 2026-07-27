export type Category =
  | 'All'
  | 'SaaS'
  | 'FinTech'
  | 'Healthcare'
  | 'AI'
  | 'Ecommerce'
  | 'Dashboard'
  | 'Mobile App'
  | 'Website'
  | 'Branding'
  | 'Real Estate'
  | 'Travel';

export type ScreenKind =
  | 'dashboard'
  | 'analytics'
  | 'auth'
  | 'onboarding'
  | 'settings'
  | 'profile'
  | 'checkout'
  | 'landing'
  | 'campaign'
  | 'list'
  | 'detail'
  | 'wallet'
  | 'transactions'
  | 'card'
  | 'savings'
  | 'invest'
  | 'portfolio'
  | 'properties'
  | 'search'
  | 'itinerary'
  | 'booking'
  | 'discovery'
  | 'messages'
  | 'appointments'
  | 'records'
  | 'lab'
  | 'telehealth'
  | 'rx'
  | 'shop'
  | 'product'
  | 'wishlist'
  | 'collections'
  | 'editor'
  | 'home'
  | 'empty'
  | 'loading';

export interface ScreenSpec {
  kind: ScreenKind;
  title: string;
  caption: string;
  /** which device frame to render inside */
  frame?: 'desktop' | 'tablet' | 'mobile' | 'watch' | 'banner';
}

export interface Persona {
  name: string;
  age: number;
  role: string;
  quote: string;
  goals: string[];
  frustrations: string[];
  initials: string;
  accent: string;
}

export interface Competitor {
  name: string;
  strength: string;
  weakness: string;
  score: number;
}

export interface JourneyStep {
  stage: string;
  action: string;
  emotion: 'positive' | 'neutral' | 'negative';
  insight: string;
}

export interface ProjectResult {
  metric: string;
  value: string;
  delta: string;
  positive: boolean;
}

export interface BrandTheme {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  bg: string;
  surface: string;
  text: string;
  textMuted: string;
  font: string;
  fontHeading: string;
}

export interface Project {
  id: string;
  slug: string;
  index: string;
  title: string;
  tagline: string;
  category: Category;
  industry: string;
  year: string;
  role: string;
  duration: string;
  team: string;
  platform: string;
  stack: string;
  client: string;
  cover: ScreenKind;
  heroDevice: 'desktop' | 'tablet' | 'mobile';
  theme: BrandTheme;
  challenge: string;
  solution: string;
  businessGoal: string;
  summary: string;
  keywords: string[];
  screens: ScreenSpec[];
  personas: Persona[];
  competitors: Competitor[];
  journey: JourneyStep[];
  results: ProjectResult[];
  iterations: { title: string; note: string }[];
  scope: { label: string; items: string[] }[];
}
