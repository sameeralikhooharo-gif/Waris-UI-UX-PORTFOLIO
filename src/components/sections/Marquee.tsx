import { motion } from 'framer-motion';

const items = [
  'NEXUS AI', 'VAULT', 'MERIDIAN', 'ATELIER', 'HAVEN', 'WANDER',
  'FIGMA', 'FRAMER', 'LINEAR', 'STRIPE', 'NOTION', 'VERCEL',
];

export function Marquee() {
  return (
    <div className="relative py-10 border-y border-border/60 overflow-hidden mask-fade-edges">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {[...items, ...items].map((it, i) => (
          <span key={i} className="font-display font-bold text-xl md:text-2xl text-text-3/60 hover:text-text-2 transition-colors tracking-tightest">
            {it}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
