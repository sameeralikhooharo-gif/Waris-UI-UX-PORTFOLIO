import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef, type ReactNode, type MouseEvent } from 'react';
import { Link } from '@/components/layout/router';

interface MagneticProps {
  children: ReactNode;
  strength?: number;
  className?: string;
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export function Magnetic({ children, strength = 0.4, className, to, onClick, type = 'button' }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 250, damping: 18, mass: 0.4 });

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const content = (
    <motion.div ref={ref} style={{ x: sx, y: sy }} onMouseMove={handleMove} onMouseLeave={reset} className={className}>
      {children}
    </motion.div>
  );

  if (to) {
    return (
      <Link to={to} className="inline-block">
        {content}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className="inline-block bg-transparent p-0 border-0">
      {content}
    </button>
  );
}
