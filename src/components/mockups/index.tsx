import type { BrandTheme, ScreenKind } from '@/data/types';
import { MockupScreen } from './ScreensA';
import { MockupScreenB } from './ScreensB';
import { MockupScreenC } from './ScreensC';

const bKinds: ScreenKind[] = [
  'home', 'wallet', 'transactions', 'savings', 'card', 'invest',
  'appointments', 'records', 'telehealth', 'rx', 'lab',
];
const cKinds: ScreenKind[] = [
  'landing', 'collections', 'shop', 'product', 'wishlist', 'checkout', 'campaign',
  'properties', 'portfolio', 'discovery', 'search', 'detail', 'itinerary', 'booking',
];

export function Mockup({ kind, theme }: { kind: ScreenKind; theme: BrandTheme }) {
  if (bKinds.includes(kind)) return <MockupScreenB kind={kind} theme={theme} />;
  if (cKinds.includes(kind)) return <MockupScreenC kind={kind} theme={theme} />;
  return <MockupScreen kind={kind} theme={theme} />;
}
