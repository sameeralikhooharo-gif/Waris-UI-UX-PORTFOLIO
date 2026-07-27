import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { projects } from '@/data';
import { Mockup } from '@/components/mockups';
import { BrowserFrame, IPhoneFrame } from '@/components/ui/DeviceFrames';

function Counter({ to, suffix = '', prefix = '' }: { to: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        const el = ref.current;
        if (!el) return;
        let start: number | null = null;
        const dur = 1600;
        const step = (ts: number) => {
          if (start === null) start = ts;
          const p = Math.min((ts - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = `${prefix}${Math.floor(eased * to)}${suffix}`;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }}
    >
      {prefix}0{suffix}
    </motion.span>
  );
}

export function Hero() {
  const nexus = projects[0];
  const vault = projects[1];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-4 md:px-6 overflow-hidden">
      {/* floating device mockups (background, static) */}
      <div className="absolute right-[4%] top-[22%] w-[34%] hidden lg:block z-0 opacity-90">
        <div className="scale-90 origin-top-right">
          <BrowserFrame url="nexus-ai.app">
            <Mockup kind="dashboard" theme={nexus.theme} />
          </BrowserFrame>
        </div>
      </div>
      <div className="absolute left-[3%] bottom-[12%] w-[18%] hidden lg:block z-0">
        <div className="rotate-[-6deg]">
          <IPhoneFrame>
            <Mockup kind="home" theme={vault.theme} />
          </IPhoneFrame>
        </div>
      </div>

      {/* availability badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-7 z-10"
      >
        <Badge variant="success" dot className="glass px-4 py-2">
          <span className="text-success">Available for Q3 2025</span>
          <span className="text-text-3">·</span>
          <span className="text-text-2">2 slots left</span>
        </Badge>
      </motion.div>

      {/* hero headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="font-display font-bold text-center tracking-tightest text-balance z-10 px-2"
      >
        <span className="block text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05]">Designing luxury</span>
        <span className="block text-4xl md:text-6xl lg:text-7xl text-gradient leading-[1.05]">digital products</span>
        <span className="block text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05]">people remember.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="mt-7 max-w-xl text-center text-text-2 text-base md:text-lg leading-relaxed z-10"
      >
        I’m Muhammad Waris — a senior UI/UX designer turning complex products into calm, beautiful, high-converting experiences. Six case studies. One obsession with craft.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-9 flex flex-col sm:flex-row items-center gap-3 z-10"
      >
        <Button to="/#work" size="lg" icon={<ArrowDown size={16} />}>
          View the work
        </Button>
        <Button to="/#contact" variant="secondary" size="lg" icon={<Sparkles size={16} className="text-secondary" />}>
          Start a project
        </Button>
      </motion.div>

      {/* stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="mt-16 grid grid-cols-3 gap-6 md:gap-12 z-10"
      >
        {[
          { to: 9, suffix: '+', label: 'Years crafting' },
          { to: 48, suffix: '+', label: 'Products shipped' },
          { to: 12, suffix: 'M', label: 'Users reached' },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display font-bold text-3xl md:text-5xl text-white">
              <Counter to={s.to} suffix={s.suffix} />
            </div>
            <div className="mt-1.5 text-xs md:text-sm text-text-2">{s.label}</div>
          </div>
        ))}
      </motion.div>

      {/* scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-text-3">Scroll</span>
        <div className="h-9 w-5 rounded-full border border-border-2 flex justify-center pt-1.5">
          <motion.div
            className="h-1.5 w-1 rounded-full bg-primary"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </section>
  );
}
