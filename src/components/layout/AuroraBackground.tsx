import { motion } from 'framer-motion';

/** Animated aurora gradient orbs + fine grid. Sits behind everything. */
export function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-bg">
      {/* grid */}
      <div className="absolute inset-0 grid-bg opacity-[0.35] mask-fade-b" />
      {/* aurora orbs */}
      <motion.div
        className="absolute -top-[20%] -left-[10%] h-[55vh] w-[55vh] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(79,124,255,0.35), transparent 60%)' }}
        animate={{ x: [0, 40, -20, 0], y: [0, 30, -10, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[30%] -right-[10%] h-[60vh] w-[60vh] rounded-full blur-[130px]"
        style={{ background: 'radial-gradient(circle, rgba(123,97,255,0.3), transparent 60%)' }}
        animate={{ x: [0, -30, 20, 0], y: [0, 20, -25, 0], scale: [1, 0.95, 1.05, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-15%] left-[20%] h-[50vh] w-[50vh] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(0,213,255,0.22), transparent 60%)' }}
        animate={{ x: [0, 30, -15, 0], y: [0, -20, 15, 0], scale: [1, 1.06, 0.97, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* noise */}
      <div className="absolute inset-0 noise opacity-40" />
      {/* vignette */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(5,5,5,0.6) 100%)' }} />
    </div>
  );
}
