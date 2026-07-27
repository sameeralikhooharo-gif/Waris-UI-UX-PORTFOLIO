import { motion } from 'framer-motion';
import {
  PenTool, LayoutGrid, Sparkles, LineChart, Layers, Smartphone,
} from 'lucide-react';
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/Reveal';
import { SectionLabel } from '@/components/ui/Badge';

const services = [
  {
    icon: PenTool,
    title: 'Product Strategy',
    desc: 'Workshops, jobs-to-be-done, roadmap shaping — turning ambiguity into a plan your team can build.',
    points: ['Discovery workshops', 'JTBD framing', 'Roadmap design'],
    color: '#4F7CFF',
  },
  {
    icon: LayoutGrid,
    title: 'UX Architecture',
    desc: 'Flows, information architecture, and user journeys that make complex products feel simple.',
    points: ['User flows', 'Wireframes', 'Journey maps'],
    color: '#00D5FF',
  },
  {
    icon: Layers,
    title: 'Design Systems',
    desc: 'Tokenized, documented component libraries that scale from 2 designers to 200.',
    points: ['Token systems', 'Component libraries', 'Documentation'],
    color: '#7B61FF',
  },
  {
    icon: Smartphone,
    title: 'UI & Interaction',
    desc: 'High-fidelity interfaces with motion, micro-interactions, and obsessive attention to detail.',
    points: ['Hi-fi screens', 'Motion design', 'Prototypes'],
    color: '#00E676',
  },
  {
    icon: LineChart,
    title: 'Conversion & Growth',
    desc: 'Onboarding, pricing, and funnel design that turns visits into revenue you can measure.',
    points: ['Funnel design', 'A/B testing', 'Onboarding'],
    color: '#FFB020',
  },
  {
    icon: Sparkles,
    title: 'Brand & Identity',
    desc: 'Visual identity, logo systems, and brand guidelines that make products feel inevitable.',
    points: ['Visual identity', 'Logo systems', 'Guidelines'],
    color: '#FF5470',
  },
];

export function Services() {
  return (
    <section id="services" className="relative max-w-7xl mx-auto px-4 md:px-6 py-28 md:py-40">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <Reveal><SectionLabel className="mb-5">Services</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tightest text-balance leading-[1.1] max-w-2xl">
              Everything you need to ship a product <span className="text-gradient">worth talking about.</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <p className="text-text-2 max-w-sm leading-relaxed">
            Six disciplines, one designer. I take products from blank canvas to launch — strategy, systems, and pixels.
          </p>
        </Reveal>
      </div>

      <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {services.map((s) => (
          <RevealItem key={s.title}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="group relative glass rounded-3xl p-6 h-full overflow-hidden"
            >
              {/* glow on hover */}
              <div
                className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(400px circle at 50% 0%, ${s.color}22, transparent 70%)` }}
              />
              <div className="relative">
                <motion.div
                  className="h-12 w-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: `${s.color}1a`, border: `1px solid ${s.color}33` }}
                  whileHover={{ rotate: 8, scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                  <s.icon size={22} style={{ color: s.color }} />
                </motion.div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">{s.title}</h3>
                <p className="text-sm text-text-2 leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-1.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-xs text-text-2">
                      <span className="h-1 w-1 rounded-full" style={{ background: s.color }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
