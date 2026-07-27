import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function Cursor() {
  const [hidden, setHidden] = useState(false);
  const [pointer, setPointer] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 28, mass: 0.3 });
  const ringY = useSpring(y, { stiffness: 350, damping: 28, mass: 0.3 });
  const dotX = useSpring(x, { stiffness: 1200, damping: 40 });
  const dotY = useSpring(y, { stiffness: 1200, damping: 40 });

  useEffect(() => {
    // Only enable on fine-pointer (desktop) devices
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
    window.addEventListener('mousemove', move);
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
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      <motion.div
        className="absolute top-0 left-0 rounded-full border border-primary/70"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{ width: pointer ? 56 : 32, height: pointer ? 56 : 32, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      />
      <motion.div
        className="absolute top-0 left-0 rounded-full bg-primary"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%', width: 6, height: 6 }}
      />
    </div>
  );
}
