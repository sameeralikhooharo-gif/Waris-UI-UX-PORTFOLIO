import type { ReactNode } from 'react';
import type { BrandTheme } from '@/data/types';

/** Builds a themed style object from a project brand, used by mockup screens. */
export function themeStyle(theme: BrandTheme): React.CSSProperties {
  return {
    ['--b-primary' as string]: theme.primary,
    ['--b-secondary' as string]: theme.secondary,
    ['--b-accent' as string]: theme.accent,
    ['--b-bg' as string]: theme.bg,
    ['--b-surface' as string]: theme.surface,
    ['--b-text' as string]: theme.text,
    ['--b-muted' as string]: theme.textMuted,
    background: theme.bg,
    color: theme.text,
  };
}

export function hexA(hex: string, alpha: number): string {
  const h = hex.replace('#', '');
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function ThemedBar({
  theme,
  children,
  className = '',
  variant = 'surface',
}: {
  theme: BrandTheme;
  children: ReactNode;
  className?: string;
  variant?: 'surface' | 'card' | 'primary' | 'ghost';
}) {
  const bg =
    variant === 'surface'
      ? theme.surface
      : variant === 'primary'
        ? hexA(theme.primary, 0.12)
        : variant === 'ghost'
          ? 'transparent'
          : hexA(theme.surface, 0.6);
  return (
    <div className={className} style={{ background: bg, border: `1px solid ${hexA(theme.primary, 0.12)}` }}>
      {children}
    </div>
  );
}

/** A mockup status bar for iOS screens. */
export function StatusBar({ theme, dark = false }: { theme: BrandTheme; dark?: boolean }) {
  const color = dark ? '#000' : theme.text;
  return (
    <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[11px] font-semibold" style={{ color }}>
      <span>9:41</span>
      <div className="flex items-center gap-1">
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
          <rect x="0" y="6" width="2.5" height="4" rx="0.5" fill={color} />
          <rect x="3.5" y="4" width="2.5" height="6" rx="0.5" fill={color} />
          <rect x="7" y="2" width="2.5" height="8" rx="0.5" fill={color} />
          <rect x="10.5" y="0" width="2.5" height="10" rx="0.5" fill={color} />
        </svg>
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
          <path d="M7 8.5a1 1 0 100-2 1 1 0 000 2zM3.5 5.5a4.95 4.95 0 017 0M1 3a8.5 8.5 0 0112 0" stroke={color} strokeWidth="1" strokeLinecap="round" />
        </svg>
        <div className="ml-1 flex items-center">
          <div className="h-2.5 w-5 rounded-[3px] border" style={{ borderColor: color }} />
          <div className="h-1.5 w-1 rounded-r-sm" style={{ background: color }} />
        </div>
      </div>
    </div>
  );
}

/** A tiny SVG line chart used inside analytics mockups. */
export function Sparkline({ color, points, width = 100, height = 28 }: { color: string; points: number[]; width?: number; height?: number }) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const step = width / (points.length - 1);
  const d = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'}${(i * step).toFixed(1)} ${(height - ((p - min) / range) * height).toFixed(1)}`)
    .join(' ');
  const area = `${d} L${width} ${height} L0 ${height} Z`;
  const id = `sl-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#${id})`} />
      <path d={d} stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** A circular progress ring. */
export function ProgressRing({
  value,
  size = 48,
  stroke = 4,
  color,
  track = 'rgba(255,255,255,0.08)',
  children,
}: {
  value: number;
  size?: number;
  stroke?: number;
  color: string;
  track?: string;
  children?: ReactNode;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeDasharray={c}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      {children && <div className="absolute inset-0 flex items-center justify-center">{children}</div>}
    </div>
  );
}

/** Avatar with initials. */
export function InitialsAvatar({ initials, color, size = 36 }: { initials: string; color: string; size?: number }) {
  return (
    <div
      className="inline-flex items-center justify-center rounded-full font-semibold"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.36,
        background: hexA(color, 0.18),
        color,
        border: `1px solid ${hexA(color, 0.3)}`,
      }}
    >
      {initials}
    </div>
  );
}
