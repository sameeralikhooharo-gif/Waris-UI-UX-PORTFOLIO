import { motion } from 'framer-motion';
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/Reveal';
import { SectionLabel } from '@/components/ui/Badge';
import { ProgressRing } from '@/components/mockups/MockupPrimitives';

const timeline = [
  { year: '2025', role: 'Senior Product Designer', company: 'Independent · Worldwide', desc: 'Leading end-to-end design for AI, FinTech, and healthcare teams.' },
  { year: '2022', role: 'Lead Product Designer', company: 'Nexus Labs', desc: 'Designed the AI observability platform from zero to 40k teams.' },
  { year: '2020', role: 'Senior UI/UX Designer', company: 'Vault Financial', desc: 'Shipped a neobank reaching 1M users in 12 months.' },
  { year: '2018', role: 'Product Designer', company: 'Meridian Health', desc: 'Rebuilt the patient portal for 240k people.' },
  { year: '2016', role: 'UI Designer', company: 'Studio Atelier', desc: 'Crafted luxury ecommerce for Parisian maisons.' },
];

const skills = [
  { name: 'Product Strategy', value: 92, color: '#4F7CFF' },
  { name: 'Interaction Design', value: 96, color: '#00D5FF' },
  { name: 'Design Systems', value: 94, color: '#7B61FF' },
  { name: 'Prototyping', value: 90, color: '#00E676' },
  { name: 'User Research', value: 85, color: '#FFB020' },
  { name: 'Motion Design', value: 88, color: '#4F7CFF' },
];

const stats = [
  { v: '48+', l: 'Products shipped' },
  { v: '12M', l: 'Users reached' },
  { v: '4.9', l: 'Avg App Store rating' },
  { v: '6', l: 'Awwwards-grade case studies' },
];

export function About() {
  return (
    <section id="about" className="relative max-w-7xl mx-auto px-4 md:px-6 py-28 md:py-40">
      <Reveal>
        <SectionLabel className="mb-6">About</SectionLabel>
      </Reveal>

      <div className="grid lg:grid-cols-12 gap-12">
        {/* story */}
        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tightest text-balance leading-[1.1]">
              I design products that feel inevitable — <span className="text-gradient">like they always should have existed.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-7 space-y-5 text-text-2 text-base md:text-lg leading-relaxed max-w-2xl">
              <p>
                For nine years I’ve sat between ambitious teams and the people they serve — translating complex AI, finance, and healthcare into experiences that feel calm, confident, and a little bit magical.
              </p>
              <p>
                My work lives at the intersection of strategy, systems, and motion. I build design systems that scale, prototypes that feel real, and products that convert. The goal is always the same: make something people quietly love.
              </p>
              <p>
                I’ve shipped 48+ products used by over 12 million people, and I’m currently available for senior product design engagements worldwide.
              </p>
            </div>
          </Reveal>

          {/* stats */}
          <RevealStagger className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <RevealItem key={s.l} className="glass rounded-2xl p-4">
                <div className="font-display font-bold text-2xl md:text-3xl text-white">{s.v}</div>
                <div className="text-xs text-text-2 mt-1">{s.l}</div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>

        {/* skills matrix */}
        <div className="lg:col-span-5">
          <Reveal>
            <div className="glass rounded-3xl p-6 md:p-8">
              <div className="font-display font-semibold text-lg text-white mb-6">Skills matrix</div>
              <div className="space-y-5">
                {skills.map((s, i) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.6 }}
                    className="flex items-center gap-4"
                  >
                    <ProgressRing value={s.value} size={48} stroke={4} color={s.color}>
                      <span className="text-[10px] font-bold" style={{ color: s.color }}>{s.value}</span>
                    </ProgressRing>
                    <div className="flex-1">
                      <div className="text-sm text-white font-medium">{s.name}</div>
                      <div className="mt-1.5 h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: s.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.value}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.08 + 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* timeline */}
      <Reveal className="mt-24">
        <SectionLabel className="mb-8">Experience</SectionLabel>
      </Reveal>
      <div className="relative pl-4 md:pl-6">
        <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
        <RevealStagger className="space-y-8">
          {timeline.map((t, i) => (
            <RevealItem key={t.year}>
              <div className="relative flex gap-6 group">
                <div className="absolute -left-4 md:-left-6 top-2 h-3 w-3 rounded-full bg-bg border-2 border-primary shadow-glow group-hover:scale-125 transition-transform" />
                <div className="w-16 shrink-0">
                  <div className="font-display font-bold text-sm text-primary">{t.year}</div>
                </div>
                <div className="flex-1 glass rounded-2xl p-5 group-hover:border-primary/30 transition-colors">
                  <div className="font-display font-semibold text-white">{t.role}</div>
                  <div className="text-sm text-text-2 mt-0.5">{t.company}</div>
                  <div className="text-sm text-text-2 mt-2 leading-relaxed">{t.desc}</div>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
