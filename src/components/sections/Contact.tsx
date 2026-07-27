import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Check, Calendar, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { SectionLabel, Badge } from '@/components/ui/Badge';

const budgets = ['< $10k', '$10k – $30k', '$30k – $75k', '$75k +'];
const services = ['Product Design', 'Design System', 'Mobile App', 'Web App', 'Branding', 'Other'];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', budget: budgets[1], service: services[0], message: '' });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', budget: budgets[1], service: services[0], message: '' });
  };

  return (
    <section id="contact" className="relative max-w-7xl mx-auto px-4 md:px-6 py-28 md:py-40">
      <div className="grid lg:grid-cols-12 gap-10">
        {/* left: intro */}
        <div className="lg:col-span-5">
          <Reveal><SectionLabel className="mb-6">Contact</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tightest text-balance leading-[1.1]">
              Let’s design something <span className="text-gradient">people remember.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-text-2 text-base md:text-lg leading-relaxed max-w-md">
              Tell me about your product, your team, and what success looks like. I reply to every serious inquiry within 24 hours.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 space-y-3">
              {[
                { Icon: Mail, label: 'Email', value: 'hello@waris.design' },
                { Icon: Calendar, label: 'Book a call', value: 'calendly.com/waris' },
                { Icon: MapPin, label: 'Based in', value: 'Remote · Worldwide' },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="glass rounded-2xl p-4 flex items-center gap-3 group hover:border-primary/30 transition-colors">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <Icon size={18} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-text-3">{label}</div>
                    <div className="text-sm text-white">{value}</div>
                  </div>
                  <ArrowUpRight size={14} className="text-text-3 group-hover:text-primary transition-colors" />
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-6 flex items-center gap-3">
              <Badge variant="success" dot>Available for Q3 2025</Badge>
              <Badge variant="outline">2 slots left</Badge>
            </div>
          </Reveal>
        </div>

        {/* right: form */}
        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <form onSubmit={submit} className="glass rounded-3xl p-6 md:p-8 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 h-60 w-60 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
              <div className="relative space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Your name">
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full bg-transparent text-white text-sm outline-none placeholder:text-text-3"
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full bg-transparent text-white text-sm outline-none placeholder:text-text-3"
                    />
                  </Field>
                </div>

                <div>
                  <label className="block text-xs text-text-3 mb-2 font-mono">Service</label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setForm({ ...form, service: s })}
                        className={`px-3.5 py-2 rounded-full text-xs border transition-all ${
                          form.service === s
                            ? 'bg-primary text-white border-primary'
                            : 'bg-white/5 text-text-2 border-white/10 hover:border-primary/40'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-text-3 mb-2 font-mono">Budget</label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setForm({ ...form, budget: b })}
                        className={`px-3.5 py-2 rounded-full text-xs border transition-all ${
                          form.budget === b
                            ? 'bg-white text-bg border-white'
                            : 'bg-white/5 text-text-2 border-white/10 hover:border-primary/40'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <Field label="Project details">
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your product, timeline, and goals…"
                    className="w-full bg-transparent text-white text-sm outline-none placeholder:text-text-3 resize-none"
                  />
                </Field>

                <button
                  type="submit"
                  className="relative w-full rounded-2xl bg-gradient-to-r from-primary to-accent text-white py-4 font-medium flex items-center justify-center gap-2 overflow-hidden shadow-glow hover:shadow-[0_12px_40px_-8px_rgba(79,124,255,0.7)] transition-shadow"
                >
                  <AnimatePresence mode="wait">
                    {sent ? (
                      <motion.span
                        key="sent"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                        <Check size={18} /> Message sent — talk soon!
                      </motion.span>
                    ) : (
                      <motion.span
                        key="send"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                        Send message <Send size={16} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block rounded-2xl bg-white/[0.03] border border-border px-4 py-3 focus-within:border-primary/50 transition-colors">
      <span className="text-xs text-text-3 font-mono">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
