import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link } from './router';

const navItems = [
  { label: 'Work', to: '/#work' },
  { label: 'About', to: '/#about' },
  { label: 'Services', to: '/#services' },
  { label: 'System', to: '/#system' },
  { label: 'Contact', to: '/#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        setProgress(max > 0 ? h.scrollTop / max : 0);
        setScrolled(window.scrollY > 24);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* scroll progress */}
      <div
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left bg-gradient-to-r from-primary via-accent to-secondary"
        style={{ transform: `scaleX(${progress})` }}
      />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-3"
      >
        <div
          className={`mx-auto max-w-7xl flex items-center justify-between rounded-2xl px-4 md:px-5 py-3 transition-all duration-500 ${
            scrolled ? 'glass-strong shadow-soft' : 'bg-transparent border border-transparent'
          }`}
        >
          {/* logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative h-8 w-8 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center font-display font-bold text-white text-sm shadow-glow">
              W
              <motion.span
                className="absolute inset-0 rounded-xl bg-primary/40 blur-md -z-10"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
            <div className="hidden sm:block leading-tight">
              <div className="font-display font-bold text-sm text-white">Muhammad Waris</div>
              <div className="text-[10px] text-text-2 -mt-0.5">Senior UI/UX Designer</div>
            </div>
          </Link>

          {/* desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="relative px-3.5 py-2 text-sm text-text-2 hover:text-white transition-colors rounded-lg group"
              >
                {item.label}
                <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </Link>
            ))}
          </nav>

          {/* cta */}
          <div className="hidden md:flex items-center gap-3">
            <span className="flex items-center gap-2 text-xs text-text-2">
              <motion.span
                className="h-2 w-2 rounded-full bg-success"
                animate={{ opacity: [1, 0.4, 1], scale: [1, 0.8, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Available
            </span>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-1.5 rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-sm text-white hover:bg-white/10 hover:border-primary/40 transition-all duration-300"
            >
              Let’s talk
              <ArrowUpRight size={14} className="text-primary" />
            </Link>
          </div>

          {/* mobile toggle */}
          <button
            className="md:hidden h-9 w-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden mx-auto max-w-7xl mt-2 glass-strong rounded-2xl overflow-hidden"
            >
              <div className="p-4 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-xl text-text-2 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex items-center gap-2 px-4 py-3 text-xs text-text-2">
                  <span className="h-2 w-2 rounded-full bg-success animate-pulse-dot" />
                  Available for new work
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
