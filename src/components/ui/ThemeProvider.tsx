import { createContext, useContext, type ReactNode } from 'react';
import type { BrandTheme } from '@/data/types';

const DefaultTheme: BrandTheme = {
  name: 'Site',
  primary: '#4F7CFF',
  secondary: '#00D5FF',
  accent: '#7B61FF',
  bg: '#050505',
  surface: '#0F1115',
  text: '#FFFFFF',
  textMuted: '#A7AFBE',
  font: 'Inter',
  fontHeading: 'Space Grotesk',
};

const ThemeContext = createContext<BrandTheme>(DefaultTheme);

export function ThemeProvider({ theme, children }: { theme: BrandTheme; children: ReactNode }) {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export function useTheme(): BrandTheme {
  return useContext(ThemeContext);
}

export const siteTheme = DefaultTheme;
