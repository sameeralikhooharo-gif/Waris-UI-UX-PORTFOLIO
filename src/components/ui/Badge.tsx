import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'accent' | 'outline';
  className?: string;
  dot?: boolean;
}

const styles = {
  default: 'bg-white/5 text-text-2 border-white/10',
  primary: 'bg-primary/10 text-primary border-primary/20',
  success: 'bg-success/10 text-success border-success/20',
  accent: 'bg-accent/10 text-accent border-accent/20',
  outline: 'bg-transparent text-text-2 border-border-2',
};

export function Badge({ children, variant = 'default', className = '', dot = false }: BadgeProps) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${styles[variant]} ${className}`}>
      {dot && (
        <motion.span
          className={`h-1.5 w-1.5 rounded-full ${variant === 'success' ? 'bg-success' : variant === 'primary' ? 'bg-primary' : variant === 'accent' ? 'bg-accent' : 'bg-text-2'}`}
          animate={{ opacity: [1, 0.4, 1], scale: [1, 0.8, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
      {children}
    </span>
  );
}

export function SectionLabel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="h-px w-8 bg-gradient-to-r from-primary to-accent" />
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-text-2">{children}</span>
    </div>
  );
}
