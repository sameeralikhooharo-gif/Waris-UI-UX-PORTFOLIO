import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Calendar, User, Tag } from 'lucide-react';
import { projects, filterCategories, type Category } from '@/data';
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/Reveal';
import { SectionLabel, Badge } from '@/components/ui/Badge';
import { Link } from '@/components/layout/router';
import { Mockup } from '@/components/mockups';
import { BrowserFrame, IPhoneFrame, IPadFrame } from '@/components/ui/DeviceFrames';

function CoverThumb({ project }: { project: typeof projects[number] }) {
  const screen = <Mockup kind={project.cover} theme={project.theme} />;
  if (project.heroDevice === 'mobile')
    return (
      <div className="scale-90 origin-top">
        <IPhoneFrame>{screen}</IPhoneFrame>
      </div>
    );
  if (project.heroDevice === 'tablet')
    return (
      <div className="scale-95 origin-top">
        <IPadFrame>{screen}</IPadFrame>
      </div>
    );
  return <BrowserFrame url={`${project.slug}.app`}>{screen}</BrowserFrame>;
}

export function Projects() {
  const [active, setActive] = useState<Category>('All');
  const list = active === 'All' ? projects : projects.filter((p) => p.category === active || matchesKeyword(p, active));

  return (
    <section id="work" className="relative max-w-7xl mx-auto px-4 md:px-6 py-28 md:py-40">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <div>
          <Reveal><SectionLabel className="mb-5">Selected work</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tightest text-balance leading-[1.1] max-w-2xl">
              Six products. Six industries. <span className="text-gradient">One standard.</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <p className="text-text-2 max-w-sm leading-relaxed">
            Every project below is a full case study — research, systems, mockups, and measurable outcomes. Click any to dive in.
          </p>
        </Reveal>
      </div>

      {/* filters */}
      <Reveal delay={0.15}>
        <div className="flex flex-wrap gap-2 mb-10">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative px-4 py-2 rounded-full text-sm transition-all duration-300 border ${
                active === cat
                  ? 'bg-white text-bg border-white'
                  : 'bg-white/5 text-text-2 border-white/10 hover:border-primary/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </Reveal>

      {/* grid */}
      <motion.div layout className="grid md:grid-cols-2 gap-5 md:gap-6">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to={`/project/${p.slug}`} className="block group">
                <div className="relative glass rounded-3xl p-5 md:p-6 h-full overflow-hidden hover:border-primary/30 transition-all duration-500">
                  {/* cover */}
                  <div className="relative rounded-2xl overflow-hidden mb-6 bg-black/40 p-4 min-h-[260px] flex items-center justify-center">
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{ background: `radial-gradient(circle at 50% 0%, ${p.theme.primary}33, transparent 60%)` }}
                    />
                    <div className="relative w-full flex justify-center">
                      <CoverThumb project={p} />
                    </div>
                    {/* arrow */}
                    <div className="absolute top-4 right-4 h-9 w-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-text-2 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  {/* meta */}
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="primary" className="!bg-primary/10 !text-primary !border-primary/20">{p.category}</Badge>
                    <span className="text-xs text-text-3 font-mono">{p.index}</span>
                  </div>

                  <h3 className="font-display font-bold text-2xl text-white mb-1.5 group-hover:text-gradient transition-all">{p.title}</h3>
                  <p className="text-text-2 text-sm leading-relaxed mb-4">{p.tagline}</p>

                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-text-3 pt-4 border-t border-border">
                    <span className="flex items-center gap-1.5"><Tag size={12} /> {p.industry}</span>
                    <span className="flex items-center gap-1.5"><Calendar size={12} /> {p.year}</span>
                    <span className="flex items-center gap-1.5"><User size={12} /> {p.role}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

function matchesKeyword(p: typeof projects[number], cat: Category): boolean {
  const c = cat.toLowerCase();
  return (
    p.keywords.some((k) => k.toLowerCase().includes(c)) ||
    p.platform.toLowerCase().includes(c) ||
    p.stack.toLowerCase().includes(c)
  );
}
