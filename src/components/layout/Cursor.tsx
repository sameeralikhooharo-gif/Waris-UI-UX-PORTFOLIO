import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function Cursor() {
  const [hidden, setHidden] = useState(false);
  const [pointer, setPointer] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const dotX = useSpring(x, { stiffness: 1000, damping: 35, mass: 0.2 });
  const dotY = useSpring(y, { stiffness: 1000, damping: 35, mass: 0.2 });
  const ringX = useSpring(x, { stiffness: 250, damping: 30, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 250, damping: 30, mass: 0.4 });

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      setHidden(true);
      return;
    }
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement;
      setPointer(!!el.closest('a, button, [role="button"], [data-cursor="pointer"], input, textarea'));
    };
    const leave = () => setHidden(true);
    const enter = () => setHidden(false);
    window.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseleave', leave);
    document.addEventListener('mouseenter', enter);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
      document.removeEventListener('mouseenter', enter);
    };
  }, [x, y]);

  if (hidden) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block" aria-hidden="true">
      <motion.div
        className="absolute top-0 left-0 rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(79,124,255,0.22), transparent 70%)',
        }}
        animate={{ width: pointer ? 64 : 36, height: pointer ? 64 : 36, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 250, damping: 22 }}
      />
      <motion.div
        className="absolute top-0 left-0 rounded-full bg-primary"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: 8,
          height: 8,
          boxShadow: '0 0 12px 2px rgba(79,124,255,0.85), 0 0 26px 7px rgba(79,124,255,0.4)',
        }}
        animate={{ scale: pointer ? 1.6 : 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      />
    </div>
  );
}
