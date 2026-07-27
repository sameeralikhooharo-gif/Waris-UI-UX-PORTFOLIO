import { motion } from 'framer-motion';
import { Check, Bell, Search, ChevronDown, Star, Heart } from 'lucide-react';
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/Reveal';
import { SectionLabel, Badge } from '@/components/ui/Badge';
import { ProgressRing, Sparkline } from '@/components/mockups/MockupPrimitives';

const palette = [
  { name: 'Primary', hex: '#4F7CFF', var: 'primary' },
  { name: 'Secondary', hex: '#00D5FF', var: 'secondary' },
  { name: 'Accent', hex: '#7B61FF', var: 'accent' },
  { name: 'Success', hex: '#00E676', var: 'success' },
  { name: 'Warning', hex: '#FFB020', var: 'warning' },
  { name: 'Error', hex: '#FF5470', var: 'error' },
];
const neutrals = ['#050505', '#0F1115', '#171A22', '#232833', '#2E3342', '#A7AFBE', '#FFFFFF'];

const typeScale = [
  { label: 'Hero', cls: 'text-4xl md:text-5xl font-bold', sample: 'Aa' },
  { label: 'Section', cls: 'text-2xl md:text-3xl font-bold', sample: 'Aa' },
  { label: 'Card', cls: 'text-xl font-semibold', sample: 'Aa' },
  { label: 'Body L', cls: 'text-lg', sample: 'Aa' },
  { label: 'Body M', cls: 'text-base', sample: 'Aa' },
  { label: 'Caption', cls: 'text-sm', sample: 'Aa' },
];

const spacing = [4, 8, 16, 24, 32, 48, 64];

export function DesignSystem() {
  return (
    <section id="system" className="relative max-w-7xl mx-auto px-4 md:px-6 py-28 md:py-40">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <Reveal><SectionLabel className="mb-5">Design System</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tightest text-balance leading-[1.1] max-w-2xl">
              A real system, <span className="text-gradient">not a moodboard.</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <p className="text-text-2 max-w-sm leading-relaxed">
            Tokens, components, and variants that scale. This is the foundation under every case study.
          </p>
        </Reveal>
      </div>

      <RevealStagger className="space-y-5">
        {/* colors */}
        <RevealItem>
          <Block title="Color Palette" subtitle="6 ramps · 42 shades">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-2">
                <div className="text-xs text-text-3 font-mono mb-2">PRIMARY / SECONDARY / ACCENT</div>
                {palette.slice(0, 3).map((c) => (
                  <div key={c.name} className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl shadow-soft" style={{ background: c.hex }} />
                    <div className="flex-1">
                      <div className="text-sm text-white">{c.name}</div>
                      <div className="text-xs text-text-3 font-mono">{c.hex}</div>
                    </div>
                    <div className="flex gap-1">
                      {[0.3, 0.5, 0.8].map((o) => <span key={o} className="h-5 w-5 rounded" style={{ background: c.hex, opacity: o }} />)}
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <div className="text-xs text-text-3 font-mono mb-2">SEMANTIC</div>
                {palette.slice(3).map((c) => (
                  <div key={c.name} className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl" style={{ background: c.hex, boxShadow: `0 0 20px -6px ${c.hex}80` }} />
                    <div className="flex-1">
                      <div className="text-sm text-white">{c.name}</div>
                      <div className="text-xs text-text-3 font-mono">{c.hex}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <div className="text-xs text-text-3 font-mono mb-2">NEUTRAL RAMP</div>
                <div className="flex gap-1.5 flex-wrap">
                  {neutrals.map((n) => (
                    <div key={n} className="flex flex-col items-center gap-1">
                      <div className="h-10 w-10 rounded-xl border border-white/5" style={{ background: n }} />
                      <span className="text-[9px] font-mono text-text-3">{n}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Block>
        </RevealItem>

        {/* typography */}
        <RevealItem>
          <Block title="Typography Scale" subtitle="Space Grotesk · Inter · JetBrains Mono">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {typeScale.map((t) => (
                <div key={t.label} className="rounded-2xl bg-white/[0.02] border border-border p-5">
                  <div className={`font-display ${t.cls} text-white`}>{t.sample}</div>
                  <div className="text-xs text-text-3 font-mono mt-2">{t.label}</div>
                </div>
              ))}
              <div className="rounded-2xl bg-white/[0.02] border border-border p-5 flex flex-col justify-between">
                <div className="font-mono text-sm text-secondary">{'<code />'}</div>
                <div className="text-xs text-text-3 font-mono mt-2">Mono · code</div>
              </div>
            </div>
          </Block>
        </RevealItem>

        {/* spacing + radius + grid */}
        <RevealItem>
          <div className="grid lg:grid-cols-3 gap-5">
            <Block title="Spacing Scale" subtitle="8px base">
              <div className="space-y-2.5 pt-1">
                {spacing.map((s) => (
                  <div key={s} className="flex items-center gap-3">
                    <span className="text-xs text-text-3 font-mono w-10">{s}px</span>
                    <div className="h-2 rounded-full bg-gradient-to-r from-primary to-accent" style={{ width: s * 1.6 }} />
                  </div>
                ))}
              </div>
            </Block>
            <Block title="Radius" subtitle="24px default">
              <div className="flex flex-wrap items-end gap-3 pt-1">
                {[
                  { r: 8, l: 'sm' },
                  { r: 16, l: '2xl' },
                  { r: 24, l: '3xl' },
                  { r: 32, l: '4xl' },
                ].map((rad) => (
                  <div key={rad.l} className="flex flex-col items-center gap-2">
                    <div className="h-16 w-16 border-2 border-primary/40 bg-primary/5" style={{ borderRadius: rad.r }} />
                    <span className="text-xs text-text-3 font-mono">{rad.r}px</span>
                  </div>
                ))}
              </div>
            </Block>
            <Block title="Grid" subtitle="12 col · 8px gutter">
              <div className="grid grid-cols-12 gap-1 pt-1">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="h-20 rounded bg-gradient-to-b from-primary/30 to-primary/5" />
                ))}
              </div>
            </Block>
          </div>
        </RevealItem>

        {/* buttons + inputs */}
        <RevealItem>
          <div className="grid lg:grid-cols-2 gap-5">
            <Block title="Buttons" subtitle="4 variants · 3 sizes">
              <div className="flex flex-wrap items-center gap-3">
                <button className="rounded-2xl bg-primary text-white px-5 py-2.5 text-sm font-medium shadow-glow">Primary</button>
                <button className="rounded-2xl bg-white/5 border border-white/10 text-white px-5 py-2.5 text-sm">Secondary</button>
                <button className="rounded-2xl border border-border-2 text-white px-5 py-2.5 text-sm hover:border-primary/40">Outline</button>
                <button className="rounded-2xl text-text-2 hover:text-white px-5 py-2.5 text-sm">Ghost</button>
              </div>
              <div className="flex flex-wrap items-center gap-3 mt-4">
                <button className="rounded-xl bg-primary text-white px-4 py-2 text-xs">Small</button>
                <button className="rounded-2xl bg-primary text-white px-5 py-2.5 text-sm">Medium</button>
                <button className="rounded-2xl bg-primary text-white px-7 py-3.5 text-base">Large</button>
                <button className="rounded-full bg-primary text-white h-10 w-10 flex items-center justify-center">+</button>
              </div>
            </Block>
            <Block title="Inputs" subtitle="Text · search · select">
              <div className="space-y-3">
                <div className="rounded-xl bg-white/[0.03] border border-border px-4 py-3">
                  <div className="text-xs text-text-3">Label</div>
                  <div className="text-sm text-white mt-1">Placeholder text</div>
                </div>
                <div className="rounded-xl bg-white/[0.03] border border-primary/40 px-4 py-3 flex items-center gap-2">
                  <Search size={14} className="text-text-3" />
                  <span className="text-sm text-white">Search query…</span>
                </div>
                <div className="rounded-xl bg-white/[0.03] border border-border px-4 py-3 flex items-center justify-between">
                  <span className="text-sm text-white">Select an option</span>
                  <ChevronDown size={14} className="text-text-3" />
                </div>
              </div>
            </Block>
          </div>
        </RevealItem>

        {/* controls */}
        <RevealItem>
          <Block title="Controls" subtitle="Switch · checkbox · radio · tabs">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="space-y-3">
                <div className="text-xs text-text-3 font-mono">SWITCH</div>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-11 rounded-full bg-primary p-0.5 flex"><div className="h-5 w-5 rounded-full bg-white ml-auto" /></div>
                  <span className="text-sm text-white">On</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-11 rounded-full bg-white/10 p-0.5 flex"><div className="h-5 w-5 rounded-full bg-white/60" /></div>
                  <span className="text-sm text-text-2">Off</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-xs text-text-3 font-mono">CHECKBOX</div>
                {[true, false, false].map((c, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`h-5 w-5 rounded-md flex items-center justify-center ${c ? 'bg-primary' : 'bg-white/5 border border-border'}`}>
                      {c && <Check size={12} className="text-white" />}
                    </div>
                    <span className="text-sm text-white">Option {i + 1}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <div className="text-xs text-text-3 font-mono">RADIO</div>
                {[true, false, false].map((c, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`h-5 w-5 rounded-full flex items-center justify-center border ${c ? 'border-primary' : 'border-border'}`}>
                      {c && <div className="h-2.5 w-2.5 rounded-full bg-primary" />}
                    </div>
                    <span className="text-sm text-white">Choice {i + 1}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <div className="text-xs text-text-3 font-mono">TABS</div>
                <div className="flex gap-1 p-1 rounded-xl bg-white/5">
                  {['All', 'Active', 'Done'].map((t, i) => (
                    <span key={t} className={`text-xs px-3 py-1.5 rounded-lg ${i === 0 ? 'bg-primary text-white' : 'text-text-2'}`}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </Block>
        </RevealItem>

        {/* badges + alerts */}
        <RevealItem>
          <div className="grid lg:grid-cols-2 gap-5">
            <Block title="Badges" subtitle="6 variants">
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="success" dot>Success</Badge>
                <Badge variant="accent">Accent</Badge>
                <Badge variant="outline">Outline</Badge>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-warning/10 text-warning border border-warning/20 px-3 py-1 text-xs">Warning</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-error/10 text-error border border-error/20 px-3 py-1 text-xs">Error</span>
              </div>
            </Block>
            <Block title="Alerts" subtitle="Inline feedback">
              <div className="space-y-2.5">
                <div className="rounded-xl bg-success/10 border border-success/20 p-3 flex items-center gap-2.5 text-sm text-success">
                  <Check size={16} /> Payment successful — receipt sent.
                </div>
                <div className="rounded-xl bg-warning/10 border border-warning/20 p-3 flex items-center gap-2.5 text-sm text-warning">
                  <Bell size={16} /> Your trial ends in 3 days.
                </div>
                <div className="rounded-xl bg-error/10 border border-error/20 p-3 flex items-center gap-2.5 text-sm text-error">
                  <Bell size={16} /> Card declined — update payment.
                </div>
              </div>
            </Block>
          </div>
        </RevealItem>

        {/* cards + charts */}
        <RevealItem>
          <div className="grid lg:grid-cols-2 gap-5">
            <Block title="Cards" subtitle="Stat · content · profile">
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/[0.03] border border-border p-4">
                  <div className="text-xs text-text-3">Revenue</div>
                  <div className="font-display font-bold text-xl text-white mt-1">$48.2k</div>
                  <div className="text-xs text-success mt-1">+18% this month</div>
                </div>
                <div className="rounded-2xl bg-white/[0.03] border border-border p-4 flex items-center gap-3">
                  <ProgressRing value={72} size={44} color="#4F7CFF"><span className="text-[10px] font-bold text-primary">72%</span></ProgressRing>
                  <div>
                    <div className="text-sm text-white">Goal</div>
                    <div className="text-xs text-text-3">72% complete</div>
                  </div>
                </div>
                <div className="rounded-2xl bg-white/[0.03] border border-border p-4 sm:col-span-2 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-white">MW</div>
                  <div className="flex-1">
                    <div className="text-sm text-white">Muhammad Waris</div>
                    <div className="text-xs text-text-3">Senior UI/UX Designer</div>
                  </div>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((s) => <Star key={s} size={12} className="text-warning fill-warning" />)}
                  </div>
                </div>
              </div>
            </Block>
            <Block title="Charts" subtitle="Sparkline · bar · ring">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/[0.03] border border-border p-4">
                  <div className="text-xs text-text-3 mb-2">Token usage</div>
                  <Sparkline color="#4F7CFF" points={[20, 35, 28, 45, 60, 55, 72, 80]} width={140} height={40} />
                </div>
                <div className="rounded-2xl bg-white/[0.03] border border-border p-4">
                  <div className="text-xs text-text-3 mb-2">Conversions</div>
                  <div className="flex items-end gap-1 h-10">
                    {[40, 65, 52, 80, 72, 90, 68, 85].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-primary/40 to-primary" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl bg-white/[0.03] border border-border p-4 flex items-center gap-3 sm:col-span-2">
                  <ProgressRing value={86} size={56} color="#00E676"><span className="text-xs font-bold text-success">86%</span></ProgressRing>
                  <div>
                    <div className="text-sm text-white">Onboarding completion</div>
                    <div className="text-xs text-text-3">86% of users finish in under 90 seconds</div>
                  </div>
                </div>
              </div>
            </Block>
          </div>
        </RevealItem>

        {/* navigation + empty/loading */}
        <RevealItem>
          <div className="grid lg:grid-cols-3 gap-5">
            <Block title="Navigation" subtitle="Sidebar · header">
              <div className="rounded-xl bg-surface border border-border p-2 space-y-0.5">
                {['Overview', 'Agents', 'Workflows', 'Runs', 'Settings'].map((n, i) => (
                  <div key={n} className={`rounded-lg px-2.5 py-1.5 text-xs flex items-center gap-2 ${i === 0 ? 'bg-primary/15 text-primary' : 'text-text-2'}`}>
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: i === 0 ? '#4F7CFF' : '#6B7280' }} />
                    {n}
                  </div>
                ))}
              </div>
            </Block>
            <Block title="Empty State" subtitle="Friendly + guiding">
              <div className="rounded-xl bg-white/[0.02] border border-border p-5 text-center">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3">
                  <Heart size={20} className="text-primary" />
                </div>
                <div className="text-sm text-white font-medium">Nothing here yet</div>
                <div className="text-xs text-text-3 mt-1">Your saved items will appear here.</div>
              </div>
            </Block>
            <Block title="Loading" subtitle="Skeleton + spinner">
              <div className="space-y-2.5">
                <div className="space-y-1.5">
                  <div className="h-3 w-3/4 rounded-full bg-white/5 animate-pulse" />
                  <div className="h-3 w-1/2 rounded-full bg-white/5 animate-pulse" />
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <motion.div
                    className="h-5 w-5 rounded-full border-2 border-primary/20 border-t-primary"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  />
                  <span className="text-xs text-text-2">Loading…</span>
                </div>
              </div>
            </Block>
          </div>
        </RevealItem>
      </RevealStagger>
    </section>
  );
}

function Block({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div className="glass rounded-3xl p-6 md:p-8">
      <div className="flex items-baseline justify-between mb-5">
        <h3 className="font-display font-semibold text-lg text-white">{title}</h3>
        <span className="text-xs text-text-3 font-mono">{subtitle}</span>
      </div>
      {children}
    </div>
  );
}
