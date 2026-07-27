import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { Magnetic } from './Magnetic';
import { Link } from '@/components/layout/router';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-2xl font-medium transition-colors duration-300 select-none whitespace-nowrap';

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary/90 shadow-[0_8px_30px_-8px_rgba(79,124,255,0.55)] hover:shadow-[0_12px_40px_-8px_rgba(79,124,255,0.7)]',
  secondary:
    'bg-white/5 text-white border border-white/10 hover:bg-white/10 backdrop-blur-md',
  ghost: 'text-text-2 hover:text-white hover:bg-white/5',
  outline:
    'border border-border-2 text-white hover:border-primary/60 hover:bg-primary/5',
};

const sizes: Record<Size, string> = {
  sm: 'text-sm px-4 py-2',
  md: 'text-[15px] px-5 py-2.5',
  lg: 'text-base px-7 py-3.5',
};

interface Props {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  to?: string;
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  className?: string;
}

export function Button({ children, variant = 'primary', size = 'md', to, href, onClick, icon, className = '' }: Props) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {icon && <motion.span className="inline-flex">{icon}</motion.span>}
    </>
  );

  if (to) {
    return (
      <Magnetic strength={0.25}>
        <Link to={to} className={cls} onClick={onClick}>
          {inner}
        </Link>
      </Magnetic>
    );
  }
  if (href) {
    return (
      <Magnetic strength={0.25}>
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls} onClick={onClick}>
          {inner}
        </a>
      </Magnetic>
    );
  }
  return (
    <Magnetic strength={0.25}>
      <button type="button" onClick={onClick} className={cls}>
        {inner}
      </button>
    </Magnetic>
  );
}
