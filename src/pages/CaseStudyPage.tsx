import { motion } from 'framer-motion';
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Target, Lightbulb, Sparkles,
  TrendingUp, Users, Compass, Map, PenTool, LayoutGrid, Layers,
  Rocket, BarChart3, Search, Quote,
} from 'lucide-react';
import type { Project, JourneyStep } from '@/data/types';
import { projects, projectsBySlug } from '@/data';
import { Button } from '@/components/ui/Button';
import { SectionLabel, Badge } from '@/components/ui/Badge';
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/Reveal';
import { Mockup } from '@/components/mockups';
import { BrowserFrame, IPhoneFrame, IPadFrame, WatchFrame, BannerFrame } from '@/components/ui/DeviceFrames';
import { InitialsAvatar, ProgressRing, hexA } from '@/components/mockups/MockupPrimitives';
import { Link } from '@/components/layout/router';

export function CaseStudyPage({ slug }: { slug: string }) {
  const project = projectsBySlug[slug];
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="font-display font-bold text-3xl text-white mb-3">Project not found</div>
        <p className="text-text-2 mb-6">The case study you’re looking for doesn’t exist.</p>
        <Button to="/">Back home</Button>
      </div>
    );
  }
  return <CaseStudy project={project} />;
}

function CaseStudy({ project }: { project: Project }) {
  const idx = projects.findIndex((p) => p.id === project.id);
  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="relative">
      {/* ============ HERO ============ */}
      <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-4 md:px-6 overflow-hidden">
        {/* themed aurora */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div
            className="absolute -top-[20%] left-1/2 -translate-x-1/2 h-[60vh] w-[80vh] rounded-full blur-[140px]"
            style={{ background: `radial-gradient(circle, ${hexA(project.theme.primary, 0.4)}, transparent 60%)` }}
          />
          <div className="absolute inset-0 grid-bg-fine opacity-30 mask-fade-b" />
        </div>

        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-text-2 hover:text-white transition-colors mb-8">
              <ArrowLeft size={16} /> All work
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-sm text-text-3">{project.index}</span>
              <span className="h-px w-8 bg-border-2" />
              <Badge variant="primary" className="!bg-primary/10 !text-primary !border-primary/20">{project.category}</Badge>
              <Badge variant="outline">{project.year}</Badge>
            </div>

            <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-white tracking-tightest text-balance leading-[1.05]">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg md:text-xl text-text-2 leading-relaxed">{project.tagline}</p>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
              {[
                { l: 'Role', v: project.role },
                { l: 'Duration', v: project.duration },
                { l: 'Platform', v: project.platform },
                { l: 'Year', v: project.year },
              ].map((m) => (
                <div key={m.l} className="glass rounded-2xl p-4">
                  <div className="text-xs text-text-3 font-mono">{m.l}</div>
                  <div className="text-sm text-white mt-1">{m.v}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* hero device mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-6xl mx-auto w-full mt-14"
        >
          <HeroDevice project={project} />
        </motion.div>
      </section>

      {/* ============ OVERVIEW ============ */}
      <Section id="overview" icon={<Sparkles size={16} />} label="Overview">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display font-bold text-2xl md:text-4xl text-white tracking-tightest leading-[1.15] text-balance">
                {project.summary}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 space-y-4">
            <MetaGrid project={project} />
          </div>
        </div>
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-2">
            {project.keywords.map((k) => (
              <Badge key={k} variant="primary">{k}</Badge>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ============ PROBLEM / CHALLENGE ============ */}
      <Section id="problem" icon={<Target size={16} />} label="The Challenge">
        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal>
            <BlockCard label="Challenge" accent={project.theme.primary}>
              <p className="text-text-2 leading-relaxed">{project.challenge}</p>
            </BlockCard>
          </Reveal>
          <Reveal delay={0.1}>
            <BlockCard label="Business Goal" accent={project.theme.accent}>
              <p className="text-text-2 leading-relaxed">{project.businessGoal}</p>
            </BlockCard>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <div className="mt-8">
            <BlockCard label="Solution" accent={project.theme.secondary}>
              <p className="text-text-2 leading-relaxed text-lg">{project.solution}</p>
            </BlockCard>
          </div>
        </Reveal>
      </Section>

      {/* ============ RESEARCH / SCOPE ============ */}
      <Section id="research" icon={<Search size={16} />} label="Research & Process">
        <div className="grid md:grid-cols-3 gap-5">
          {project.scope.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="glass rounded-3xl p-6 h-full">
                <div className="font-display font-semibold text-lg text-white mb-4">{s.label}</div>
                <ul className="space-y-2.5">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-sm text-text-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: project.theme.primary }} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============ PERSONAS ============ */}
      <Section id="personas" icon={<Users size={16} />} label="Personas">
        <div className="grid md:grid-cols-2 gap-5">
          {project.personas.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <div className="glass rounded-3xl p-6 md:p-8 h-full">
                <div className="flex items-center gap-4 mb-5">
                  <InitialsAvatar initials={p.initials} color={p.accent} size={56} />
                  <div>
                    <div className="font-display font-semibold text-lg text-white">{p.name}</div>
                    <div className="text-sm text-text-2">{p.age} · {p.role}</div>
                  </div>
                </div>
                <div className="rounded-2xl p-4 mb-5" style={{ background: hexA(p.accent, 0.08), border: `1px solid ${hexA(p.accent, 0.2)}` }}>
                  <Quote size={16} className="mb-2" style={{ color: p.accent }} />
                  <p className="text-sm text-white italic leading-relaxed">“{p.quote}”</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-success font-mono mb-2">GOALS</div>
                    <ul className="space-y-1.5">
                      {p.goals.map((g) => <li key={g} className="text-xs text-text-2 flex gap-2"><span className="text-success">+</span>{g}</li>)}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs text-error font-mono mb-2">PAIN POINTS</div>
                    <ul className="space-y-1.5">
                      {p.frustrations.map((f) => <li key={f} className="text-xs text-text-2 flex gap-2"><span className="text-error">−</span>{f}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============ COMPETITOR ANALYSIS ============ */}
      <Section id="competitors" icon={<TrendingUp size={16} />} label="Competitor Analysis">
        <div className="glass rounded-3xl p-6 md:p-8">
          <div className="space-y-4">
            {project.competitors.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.08}>
                <div className="grid grid-cols-12 gap-4 items-center py-4 border-b border-border last:border-0">
                  <div className="col-span-12 md:col-span-3">
                    <div className="font-display font-semibold text-white">{c.name}</div>
                  </div>
                  <div className="col-span-5 md:col-span-3 text-sm text-text-2">{c.strength}</div>
                  <div className="col-span-5 md:col-span-3 text-sm text-text-2">{c.weakness}</div>
                  <div className="col-span-2 md:col-span-3 flex items-center gap-3">
                    <div className="flex-1 h-2 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${project.theme.primary}, ${project.theme.accent})` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${c.score}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                    <span className="text-sm font-mono text-white w-8 text-right">{c.score}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="grid grid-cols-12 gap-4 items-center pt-4 text-xs text-text-3 font-mono">
            <div className="col-span-3">Competitor</div>
            <div className="col-span-3">Strength</div>
            <div className="col-span-3">Weakness</div>
            <div className="col-span-3 text-right">Opportunity score</div>
          </div>
        </div>
      </Section>

      {/* ============ USER JOURNEY ============ */}
      <Section id="journey" icon={<Map size={16} />} label="User Journey">
        <div className="glass rounded-3xl p-6 md:p-8 overflow-x-auto">
          <div className="flex gap-4 min-w-[700px]">
            {project.journey.map((step, i) => (
              <RevealItem key={i}>
                <div className="w-44 shrink-0">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-8 w-8 rounded-xl flex items-center justify-center text-xs font-bold" style={{ background: hexA(emotionColor(step.emotion, project.theme), 0.15), color: emotionColor(step.emotion, project.theme) }}>
                      {i + 1}
                    </div>
                    <span className="text-xs font-mono uppercase tracking-widest" style={{ color: emotionColor(step.emotion, project.theme) }}>{step.stage}</span>
                  </div>
                  <div className="rounded-2xl p-4 h-full" style={{ background: hexA(emotionColor(step.emotion, project.theme), 0.06), border: `1px solid ${hexA(emotionColor(step.emotion, project.theme), 0.2)}` }}>
                    <div className="text-sm text-white font-medium mb-2">{step.action}</div>
                    <div className="text-xs text-text-2 leading-relaxed pt-2 border-t border-white/5">{step.insight}</div>
                  </div>
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </Section>

      {/* ============ WIREFRAMES / LOW FIDELITY ============ */}
      <Section id="wireframes" icon={<PenTool size={16} />} label="Wireframes & Low Fidelity">
        <Reveal>
          <p className="text-text-2 mb-8 max-w-2xl leading-relaxed">
            Before a single pixel of polish, I map every flow in grayscale to validate structure, hierarchy, and information architecture.
          </p>
        </Reveal>
        <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.screens.slice(0, 6).map((s, i) => (
            <RevealItem key={i}>
              <WireframeCard title={s.title} kind={s.frame === 'mobile' ? 'mobile' : 'desktop'} />
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      {/* ============ HIGH FIDELITY ============ */}
      <Section id="hifi" icon={<LayoutGrid size={16} />} label="High Fidelity Screens">
        <Reveal>
          <p className="text-text-2 mb-8 max-w-2xl leading-relaxed">
            {project.screens.length} production-grade screens, themed with the {project.theme.name} design system — every state, every breakpoint.
          </p>
        </Reveal>
        <div className="space-y-16">
          {/* primary showcase row */}
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <Badge variant="primary" className="mb-3">{project.screens[0].title}</Badge>
                <h3 className="font-display font-bold text-2xl text-white mb-2">{project.screens[0].caption}</h3>
                <p className="text-text-2 leading-relaxed">
                  The flagship screen of {project.title}. Built on a tokenized system, animated with spring physics, and tested with real users.
                </p>
              </div>
              <div className="flex justify-center">
                <DeviceFor project={project} screen={project.screens[0]} large />
              </div>
            </div>
          </Reveal>

          {/* full gallery */}
          <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.screens.slice(1).map((s, i) => (
              <RevealItem key={i}>
                <div className="group">
                  <div className="flex justify-center">
                    <DeviceFor project={project} screen={s} />
                  </div>
                  <div className="mt-4 text-center">
                    <div className="font-display font-semibold text-sm text-white">{s.title}</div>
                    <div className="text-xs text-text-3 mt-0.5">{s.caption}</div>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </Section>

      {/* ============ DESIGN ITERATIONS ============ */}
      <Section id="iterations" icon={<Layers size={16} />} label="Design Iterations">
        <div className="grid md:grid-cols-3 gap-5">
          {project.iterations.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.1}>
              <div className="glass rounded-3xl p-6 h-full relative">
                <div className="absolute top-6 right-6 font-display font-bold text-4xl text-white/5">v{i + 1}</div>
                <div className="font-display font-semibold text-white mb-2">{it.title}</div>
                <p className="text-sm text-text-2 leading-relaxed">{it.note}</p>
                {i < project.iterations.length - 1 && (
                  <div className="mt-4 flex items-center gap-2 text-xs text-text-3">
                    <ArrowRight size={14} /> iterated
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============ PROTOTYPE ============ */}
      <Section id="prototype" icon={<Rocket size={16} />} label="Prototype">
        <Reveal>
          <div className="glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(circle at 50% 0%, ${hexA(project.theme.primary, 0.5)}, transparent 60%)` }} />
            <div className="relative">
              <motion.div
                className="h-16 w-16 rounded-3xl mx-auto mb-5 flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${project.theme.primary}, ${project.theme.accent})`, boxShadow: `0 0 40px ${hexA(project.theme.primary, 0.5)}` }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Rocket size={28} className="text-white" />
              </motion.div>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-3">Interactive prototype</h3>
              <p className="text-text-2 max-w-xl mx-auto leading-relaxed mb-6">
                Every flow was prototyped in Framer Motion with spring physics, page transitions, and micro-interactions — tested with 12 real users before a line of production code.
              </p>
              <Button variant="secondary" icon={<ArrowUpRight size={16} />}>View live prototype</Button>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ============ DESIGN SYSTEM ============ */}
      <Section id="system" icon={<Compass size={16} />} label="Design System">
        <ProjectDesignSystem project={project} />
      </Section>

      {/* ============ RESULTS ============ */}
      <Section id="results" icon={<BarChart3 size={16} />} label="Results">
        <Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.results.map((r, i) => (
              <motion.div
                key={r.metric}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass rounded-3xl p-6 relative overflow-hidden group"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity" style={{ background: project.theme.primary }} />
                <div className="relative">
                  <div className="text-xs text-text-3 font-mono uppercase tracking-widest mb-2">{r.metric}</div>
                  <div className="font-display font-bold text-3xl md:text-4xl text-white">{r.value}</div>
                  <div className="mt-2 inline-flex items-center gap-1 text-sm" style={{ color: r.positive ? '#00E676' : '#FF5470' }}>
                    <TrendingUp size={14} /> {r.delta}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ============ NEXT PROJECT ============ */}
      <section className="relative max-w-7xl mx-auto px-4 md:px-6 py-20">
        <Reveal>
          <Link to={`/project/${next.slug}`} className="block group">
            <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden hover:border-primary/30 transition-all">
              <div className="absolute -right-20 -bottom-20 h-60 w-60 rounded-full blur-3xl opacity-30" style={{ background: next.theme.primary }} />
              <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="text-xs text-text-3 font-mono uppercase tracking-widest mb-3">Next project · {next.index}</div>
                  <h3 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tightest group-hover:text-gradient transition-all">{next.title}</h3>
                  <p className="text-text-2 mt-3 max-w-md">{next.tagline}</p>
                </div>
                <motion.div
                  className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-primary group-hover:border-primary transition-all"
                  whileHover={{ x: 6 }}
                >
                  <ArrowRight size={22} />
                </motion.div>
              </div>
            </div>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}

// ---------- helpers ----------

function Section({ id, label, icon, children }: { id: string; label: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <section id={id} className="relative max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28">
      <Reveal>
        <div className="flex items-center gap-3 mb-10">
          <div className="h-9 w-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">{icon}</div>
          <SectionLabel>{label}</SectionLabel>
        </div>
      </Reveal>
      {children}
    </section>
  );
}

function BlockCard({ label, accent, children }: { label: string; accent: string; children: React.ReactNode }) {
  return (
    <div className="glass rounded-3xl p-6 md:p-8 h-full relative overflow-hidden">
      <div className="absolute top-0 left-0 h-1 w-full" style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} />
      <div className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: accent }}>{label}</div>
      {children}
    </div>
  );
}

function MetaGrid({ project }: { project: Project }) {
  return (
    <div className="glass rounded-3xl p-6">
      {[
        { l: 'Client', v: project.client },
        { l: 'Team', v: project.team },
        { l: 'Technology', v: project.stack },
        { l: 'Industry', v: project.industry },
      ].map((m, i) => (
        <div key={m.l} className={`flex justify-between gap-4 py-3 ${i < 3 ? 'border-b border-border' : ''}`}>
          <span className="text-xs text-text-3 font-mono uppercase tracking-widest">{m.l}</span>
          <span className="text-sm text-white text-right">{m.v}</span>
        </div>
      ))}
    </div>
  );
}

function emotionColor(e: JourneyStep['emotion'], theme: Project['theme']): string {
  if (e === 'positive') return '#00E676';
  if (e === 'negative') return '#FF5470';
  return theme.primary;
}

function HeroDevice({ project }: { project: Project }) {
  const screen = <Mockup kind={project.cover} theme={project.theme} />;
  return (
    <div className="flex justify-center">
      {project.heroDevice === 'mobile' && (
        <div className="w-[280px] md:w-[320px]"><IPhoneFrame>{screen}</IPhoneFrame></div>
      )}
      {project.heroDevice === 'tablet' && (
        <div className="w-full max-w-2xl"><IPadFrame>{screen}</IPadFrame></div>
      )}
      {project.heroDevice === 'desktop' && (
        <div className="w-full"><BrowserFrame url={`${project.slug}.app`}>{screen}</BrowserFrame></div>
      )}
    </div>
  );
}

function DeviceFor({ project, screen, large = false }: { project: Project; screen: Project['screens'][number]; large?: boolean }) {
  const content = <Mockup kind={screen.kind} theme={project.theme} />;
  const frame = screen.frame ?? project.heroDevice;
  const wrap = large ? 'w-full max-w-2xl' : 'w-full max-w-[260px]';

  if (frame === 'mobile') return <div className={wrap}><IPhoneFrame>{content}</IPhoneFrame></div>;
  if (frame === 'tablet') return <div className={wrap}><IPadFrame>{content}</IPadFrame></div>;
  if (frame === 'watch') return <div className={wrap}><WatchFrame>{content}</WatchFrame></div>;
  if (frame === 'banner') return <div className="w-full max-w-3xl"><BannerFrame>{content}</BannerFrame></div>;
  return <div className={wrap}><BrowserFrame url={`${project.slug}.app`}>{content}</BrowserFrame></div>;
}

function WireframeCard({ title, kind }: { title: string; kind: 'mobile' | 'desktop' }) {
  return (
    <div className="glass rounded-2xl p-4">
      <div className={`relative bg-white/[0.02] border border-border rounded-xl overflow-hidden ${kind === 'mobile' ? 'aspect-[9/16]' : 'aspect-[16/10]'}`}>
        {/* wireframe skeleton */}
        <div className="absolute inset-0 p-3 flex flex-col gap-2">
          {kind === 'desktop' ? (
            <>
              <div className="flex gap-2">
                <div className="w-10 h-3 rounded bg-white/10" />
                <div className="flex-1 h-3 rounded bg-white/10" />
                <div className="w-10 h-3 rounded bg-white/10" />
              </div>
              <div className="flex gap-2 flex-1">
                <div className="w-12 flex flex-col gap-1.5">
                  {[0,1,2,3].map((i) => <div key={i} className="h-2 rounded bg-white/10" />)}
                </div>
                <div className="flex-1 flex flex-col gap-1.5">
                  <div className="h-8 rounded bg-white/15" />
                  <div className="grid grid-cols-3 gap-1.5 flex-1">
                    {[0,1,2].map((i) => <div key={i} className="rounded bg-white/10" />)}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="h-2 w-12 rounded bg-white/15 mx-auto" />
              <div className="h-10 rounded bg-white/15" />
              <div className="grid grid-cols-4 gap-1.5">
                {[0,1,2,3].map((i) => <div key={i} className="aspect-square rounded bg-white/10" />)}
              </div>
              {[0,1,2].map((i) => <div key={i} className="h-6 rounded bg-white/10" />)}
            </>
          )}
        </div>
      </div>
      <div className="mt-3 text-xs text-text-3 font-mono">{title}</div>
    </div>
  );
}

function ProjectDesignSystem({ project }: { project: Project }) {
  const t = project.theme;
  const swatches = [t.primary, t.secondary, t.accent, '#00E676', '#FFB020', '#FF5470'];
  return (
    <div className="space-y-5">
      {/* colors + type */}
      <div className="grid lg:grid-cols-3 gap-5">
        <div className="glass rounded-3xl p-6">
          <div className="text-xs text-text-3 font-mono mb-4">COLOR · {t.name.toUpperCase()}</div>
          <div className="grid grid-cols-3 gap-3">
            {swatches.map((c) => (
              <div key={c}>
                <div className="aspect-square rounded-xl mb-1.5" style={{ background: c, boxShadow: `0 0 20px -6px ${c}80` }} />
                <div className="text-[10px] font-mono text-text-3">{c}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="glass rounded-3xl p-6">
          <div className="text-xs text-text-3 font-mono mb-4">TYPOGRAPHY</div>
          <div className="font-display font-bold text-4xl text-white">{t.fontHeading}</div>
          <div className="text-xs text-text-3 mt-1">Display · Headings</div>
          <div className="font-sans text-lg text-white mt-4">{t.font}</div>
          <div className="text-xs text-text-3 mt-1">Body · UI</div>
        </div>
        <div className="glass rounded-3xl p-6 flex flex-col">
          <div className="text-xs text-text-3 font-mono mb-4">COMPONENT SAMPLE</div>
          <div className="flex-1 flex flex-col justify-center gap-3">
            <button className="rounded-2xl py-2.5 text-sm font-medium text-white" style={{ background: t.primary }}>Primary button</button>
            <div className="rounded-xl border p-3" style={{ borderColor: hexA(t.primary, 0.3) }}>
              <div className="text-xs text-text-3">Input</div>
              <div className="text-sm text-white mt-1">Themed field</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-5 w-9 rounded-full p-0.5 flex" style={{ background: t.primary }}><div className="h-4 w-4 rounded-full bg-white ml-auto" /></div>
              <span className="text-sm text-white">Toggle on</span>
            </div>
            <div className="flex items-center gap-3">
              <ProgressRing value={68} size={40} color={t.primary}><span className="text-[9px] font-bold" style={{ color: t.primary }}>68</span></ProgressRing>
              <span className="text-sm text-white">Progress</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
