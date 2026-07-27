import type { BrandTheme, ScreenKind } from '@/data/types';
import { hexA, InitialsAvatar, ProgressRing, Sparkline, StatusBar, themeStyle } from './MockupPrimitives';

/**
 * Renders a realistic, branded UI screen for a given kind + theme.
 * Each screen is fully self-contained and scales to fill its parent.
 */
export function MockupScreen({ kind, theme }: { kind: ScreenKind; theme: BrandTheme }) {
  const wrap = 'absolute inset-0 overflow-hidden';
  const st = themeStyle(theme);
  const P = theme.primary;
  const S = theme.secondary;
  const A = theme.accent;
  const M = theme.textMuted;
  const surface = theme.surface;

  // ---- shared chrome ----
  const Sidebar = ({ items, active }: { items: string[]; active: number }) => (
    <div className="hidden md:flex flex-col gap-1 p-3 border-r" style={{ borderColor: hexA(P, 0.12), background: hexA(surface, 0.5) }}>
      <div className="flex items-center gap-2 px-2 py-3">
        <div className="h-6 w-6 rounded-lg" style={{ background: `linear-gradient(135deg, ${P}, ${A})` }} />
        <span className="font-display font-bold text-sm" style={{ color: theme.text }}>{theme.name}</span>
      </div>
      {items.map((it, i) => (
        <div key={it} className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[11px]" style={{ background: i === active ? hexA(P, 0.14) : 'transparent', color: i === active ? P : M }}>
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: i === active ? P : hexA(M, 0.4) }} />
          {it}
        </div>
      ))}
    </div>
  );

  const Topbar = ({ title, sub }: { title: string; sub?: string }) => (
    <div className="flex items-center justify-between px-5 py-3.5 border-b" style={{ borderColor: hexA(P, 0.1) }}>
      <div>
        <div className="font-display font-semibold text-sm" style={{ color: theme.text }}>{title}</div>
        {sub && <div className="text-[10px]" style={{ color: M }}>{sub}</div>}
      </div>
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 rounded-full" style={{ background: hexA(M, 0.15) }} />
        <InitialsAvatar initials="MW" color={P} size={26} />
      </div>
    </div>
  );

  // ---- screens ----
  switch (kind) {
    // ============ DASHBOARD ============
    case 'dashboard':
      return (
        <div className={wrap} style={st}>
          <div className="flex h-full">
            <Sidebar items={['Overview', 'Agents', 'Workflows', 'Runs', 'Analytics', 'Settings']} active={0} />
            <div className="flex-1 flex flex-col min-w-0">
              <Topbar title="Command Center" sub="12 agents · 4 active runs" />
              <div className="flex-1 overflow-hidden p-4 space-y-3">
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { l: 'Active runs', v: '4', d: '+2', c: P, p: [3, 5, 4, 6, 5, 8, 7, 9] },
                    { l: 'Tokens / min', v: '12.4k', d: '+18%', c: S, p: [4, 6, 5, 7, 9, 8, 11, 12] },
                    { l: 'Success rate', v: '98.2%', d: '+1.1%', c: '#00E676', p: [90, 92, 91, 94, 95, 96, 97, 98] },
                    { l: 'Cost today', v: '$84.20', d: '-12%', c: A, p: [120, 100, 110, 90, 95, 85, 88, 84] },
                  ].map((k) => (
                    <div key={k.l} className="rounded-xl p-3" style={{ background: surface, border: `1px solid ${hexA(P, 0.1)}` }}>
                      <div className="text-[10px]" style={{ color: M }}>{k.l}</div>
                      <div className="flex items-end justify-between mt-1">
                        <div className="font-display font-bold text-lg" style={{ color: theme.text }}>{k.v}</div>
                        <div className="text-[9px] font-mono" style={{ color: k.c }}>{k.d}</div>
                      </div>
                      <div className="mt-1"><Sparkline color={k.c} points={k.p} width={120} height={20} /></div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-3 flex-1 min-h-0">
                  <div className="col-span-2 rounded-xl p-3 flex flex-col" style={{ background: surface, border: `1px solid ${hexA(P, 0.1)}` }}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-[11px] font-medium" style={{ color: theme.text }}>Run timeline</div>
                      <div className="flex gap-1">
                        {['1h', '24h', '7d'].map((t, i) => (
                          <span key={t} className="text-[9px] px-1.5 py-0.5 rounded" style={{ background: i === 1 ? hexA(P, 0.15) : 'transparent', color: i === 1 ? P : M }}>{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex-1 flex items-end gap-1.5">
                      {[40, 65, 52, 80, 72, 90, 68, 85, 60, 78, 95, 70, 88, 75, 92].map((h, i) => (
                        <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: `linear-gradient(180deg, ${P}, ${hexA(P, 0.2)})` }} />
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl p-3 space-y-2" style={{ background: surface, border: `1px solid ${hexA(P, 0.1)}` }}>
                    <div className="text-[11px] font-medium" style={{ color: theme.text }}>Live agents</div>
                    {['Support Triage', 'Doc Summarizer', 'Email Router', 'QA Check'].map((a, i) => (
                      <div key={a} className="flex items-center justify-between text-[10px]">
                        <div className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full animate-pulse-dot" style={{ background: '#00E676' }} />
                          <span style={{ color: theme.text }}>{a}</span>
                        </div>
                        <span style={{ color: M }}>{['42', '18', '7', '3'][i]} runs</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    // ============ ANALYTICS ============
    case 'analytics':
      return (
        <div className={wrap} style={st}>
          <div className="flex h-full">
            <Sidebar items={['Overview', 'Agents', 'Workflows', 'Runs', 'Analytics', 'Settings']} active={4} />
            <div className="flex-1 flex flex-col min-w-0">
              <Topbar title="Analytics" sub="Last 30 days" />
              <div className="flex-1 p-4 space-y-3 overflow-hidden">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { l: 'Total runs', v: '8,420', c: P, p: [20, 35, 28, 45, 60, 55, 72, 80, 75, 92] },
                    { l: 'Avg latency', v: '1.8s', c: S, p: [3.2, 2.8, 3.0, 2.4, 2.1, 2.0, 1.9, 1.8] },
                    { l: 'Token cost', v: '$2,140', c: A, p: [320, 280, 290, 240, 220, 210, 215, 214] },
                  ].map((k) => (
                    <div key={k.l} className="rounded-xl p-3" style={{ background: surface, border: `1px solid ${hexA(P, 0.1)}` }}>
                      <div className="text-[10px]" style={{ color: M }}>{k.l}</div>
                      <div className="font-display font-bold text-xl mt-0.5" style={{ color: theme.text }}>{k.v}</div>
                      <div className="mt-1"><Sparkline color={k.c} points={k.p} width={160} height={24} /></div>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl p-3 flex-1 flex flex-col" style={{ background: surface, border: `1px solid ${hexA(P, 0.1)}` }}>
                  <div className="text-[11px] font-medium mb-2" style={{ color: theme.text }}>Performance by model</div>
                  <div className="flex-1 flex items-end gap-2">
                    {['GPT-4o', 'Claude', 'Gemini', 'Llama', 'Mistral'].map((m, i) => {
                      const h = [82, 68, 74, 56, 48][i];
                      return (
                        <div key={m} className="flex-1 flex flex-col items-center gap-1">
                          <div className="w-full rounded-t" style={{ height: `${h}%`, background: `linear-gradient(180deg, ${i === 0 ? P : hexA(P, 0.4)}, ${hexA(P, 0.1)})` }} />
                          <div className="text-[9px]" style={{ color: M }}>{m}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    // ============ EDITOR (workflow composer) ============
    case 'editor':
      return (
        <div className={wrap} style={st}>
          <div className="flex h-full">
            <Sidebar items={['Overview', 'Agents', 'Workflows', 'Runs', 'Analytics', 'Settings']} active={2} />
            <div className="flex-1 flex flex-col min-w-0">
              <Topbar title="Workflow Composer" sub="Customer support triage" />
              <div className="flex-1 flex overflow-hidden">
                <div className="w-44 border-r p-3 space-y-1.5" style={{ borderColor: hexA(P, 0.1), background: hexA(surface, 0.4) }}>
                  <div className="text-[10px] font-medium mb-1" style={{ color: M }}>Blocks</div>
                  {['Trigger', 'Classify', 'Summarize', 'Route', 'Respond', 'Escalate'].map((b, i) => (
                    <div key={b} className="rounded-lg px-2.5 py-2 text-[10px] flex items-center gap-2" style={{ background: hexA(P, 0.06), color: theme.text }}>
                      <div className="h-4 w-4 rounded" style={{ background: hexA([P, S, A, P, S, A][i], 0.25) }} />
                      {b}
                    </div>
                  ))}
                </div>
                <div className="flex-1 p-4 overflow-hidden">
                  <div className="flex flex-col items-center gap-3 h-full justify-center">
                    {['Trigger: New ticket', 'Classify intent', 'Summarize thread', 'Route to team'].map((n, i) => (
                      <div key={n} className="flex flex-col items-center gap-3">
                        <div className="rounded-xl px-4 py-3 w-56 text-[11px] font-medium text-center" style={{ background: surface, border: `1px solid ${hexA(P, 0.25)}`, color: theme.text, boxShadow: `0 0 24px -8px ${hexA(P, 0.4)}` }}>
                          {n}
                        </div>
                        {i < 3 && <div className="h-4 w-px" style={{ background: hexA(P, 0.4) }} />}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-44 border-l p-3" style={{ borderColor: hexA(P, 0.1), background: hexA(surface, 0.4) }}>
                  <div className="text-[10px] font-medium mb-2" style={{ color: M }}>Inspector</div>
                  <div className="rounded-lg p-2.5 text-[10px] space-y-1.5" style={{ background: hexA(P, 0.06) }}>
                    <div style={{ color: M }}>Model</div>
                    <div className="rounded px-2 py-1.5" style={{ background: surface, color: theme.text }}>GPT-4o</div>
                    <div style={{ color: M }}>Temperature</div>
                    <div className="h-1.5 rounded-full" style={{ background: hexA(M, 0.2) }}>
                      <div className="h-1.5 rounded-full w-1/3" style={{ background: P }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    // ============ DETAIL (agent trace) ============
    case 'detail':
      return (
        <div className={wrap} style={st}>
          <div className="flex h-full">
            <Sidebar items={['Overview', 'Agents', 'Workflows', 'Runs', 'Analytics', 'Settings']} active={3} />
            <div className="flex-1 flex flex-col min-w-0">
              <Topbar title="Agent Trace · run_8f2a" sub="Support Triage · 1.4s · $0.012" />
              <div className="flex-1 overflow-hidden p-4">
                <div className="space-y-2.5">
                  {[
                    { t: 'Received ticket', d: '#4821 · Refund request', c: M },
                    { t: 'Classified intent', d: 'refund · confidence 0.94', c: P },
                    { t: 'Retrieved context', d: '3 prior tickets · policy doc', c: S },
                    { t: 'Drafted response', d: '142 tokens · tone: empathetic', c: A },
                    { t: 'Routed to billing', d: 'auto-approve <$50', c: '#00E676' },
                  ].map((s, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div className="h-3 w-3 rounded-full" style={{ background: s.c, boxShadow: `0 0 10px ${hexA(s.c, 0.6)}` }} />
                        {i < 4 && <div className="flex-1 w-px" style={{ background: hexA(M, 0.2) }} />}
                      </div>
                      <div className="flex-1 rounded-xl p-3 mb-1" style={{ background: surface, border: `1px solid ${hexA(s.c, 0.18)}` }}>
                        <div className="flex items-center justify-between">
                          <div className="text-[11px] font-medium" style={{ color: theme.text }}>{s.t}</div>
                          <div className="text-[9px] font-mono" style={{ color: M }}>{`${(i * 0.3).toFixed(1)}s`}</div>
                        </div>
                        <div className="text-[10px] mt-0.5" style={{ color: M }}>{s.d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    // ============ SETTINGS ============
    case 'settings':
      return (
        <div className={wrap} style={st}>
          <div className="flex h-full">
            <Sidebar items={['Overview', 'Agents', 'Workflows', 'Runs', 'Analytics', 'Settings']} active={5} />
            <div className="flex-1 flex flex-col min-w-0">
              <Topbar title="Workspace Settings" sub="Nexus Labs" />
              <div className="flex-1 overflow-hidden p-4 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl p-3" style={{ background: surface, border: `1px solid ${hexA(P, 0.1)}` }}>
                    <div className="text-[10px]" style={{ color: M }}>Workspace name</div>
                    <div className="text-[12px] mt-1" style={{ color: theme.text }}>Nexus Labs</div>
                  </div>
                  <div className="rounded-xl p-3" style={{ background: surface, border: `1px solid ${hexA(P, 0.1)}` }}>
                    <div className="text-[10px]" style={{ color: M }}>Plan</div>
                    <div className="text-[12px] mt-1" style={{ color: P }}>Scale · $480/mo</div>
                  </div>
                </div>
                <div className="rounded-xl p-3" style={{ background: surface, border: `1px solid ${hexA(P, 0.1)}` }}>
                  <div className="text-[11px] font-medium mb-2" style={{ color: theme.text }}>API keys</div>
                  {['OpenAI', 'Anthropic', 'Cohere'].map((k) => (
                    <div key={k} className="flex items-center justify-between py-1.5 text-[10px]">
                      <span style={{ color: theme.text }}>{k}</span>
                      <span className="font-mono" style={{ color: M }}>sk-••••••••3f2a</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl p-3 space-y-2" style={{ background: surface, border: `1px solid ${hexA(P, 0.1)}` }}>
                  <div className="text-[11px] font-medium" style={{ color: theme.text }}>Members</div>
                  {['maya@nexus.co', 'dev@nexus.co', 'ops@nexus.co'].map((m) => (
                    <div key={m} className="flex items-center justify-between text-[10px]">
                      <div className="flex items-center gap-2">
                        <InitialsAvatar initials={m.slice(0, 2).toUpperCase()} color={P} size={20} />
                        <span style={{ color: theme.text }}>{m}</span>
                      </div>
                      <span className="px-2 py-0.5 rounded" style={{ background: hexA(P, 0.12), color: P }}>Admin</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    // ============ AUTH ============
    case 'auth':
      return (
        <div className={wrap} style={st}>
          <div className="h-full flex flex-col items-center justify-center p-6 relative">
            <div className="absolute inset-0 opacity-30" style={{ background: `radial-gradient(circle at 50% 0%, ${hexA(P, 0.5)}, transparent 60%)` }} />
            <div className="relative w-full max-w-[260px]">
              <div className="flex flex-col items-center mb-5">
                <div className="h-12 w-12 rounded-2xl mb-3" style={{ background: `linear-gradient(135deg, ${P}, ${A})`, boxShadow: `0 0 30px ${hexA(P, 0.5)}` }} />
                <div className="font-display font-bold text-base" style={{ color: theme.text }}>Welcome back</div>
                <div className="text-[11px] mt-1" style={{ color: M }}>Sign in to {theme.name}</div>
              </div>
              <div className="space-y-2.5">
                <div className="rounded-xl px-3 py-2.5" style={{ background: surface, border: `1px solid ${hexA(P, 0.18)}` }}>
                  <div className="text-[9px]" style={{ color: M }}>Email</div>
                  <div className="text-[11px]" style={{ color: theme.text }}>maya@nexus.co</div>
                </div>
                <div className="rounded-xl px-3 py-2.5" style={{ background: surface, border: `1px solid ${hexA(P, 0.18)}` }}>
                  <div className="text-[9px]" style={{ color: M }}>Password</div>
                  <div className="text-[11px]" style={{ color: theme.text }}>••••••••••</div>
                </div>
                <div className="rounded-xl py-2.5 text-center text-[12px] font-medium" style={{ background: `linear-gradient(135deg, ${P}, ${A})`, color: '#fff' }}>
                  Sign in
                </div>
                <div className="flex items-center gap-2 my-1">
                  <div className="flex-1 h-px" style={{ background: hexA(M, 0.2) }} />
                  <span className="text-[9px]" style={{ color: M }}>or</span>
                  <div className="flex-1 h-px" style={{ background: hexA(M, 0.2) }} />
                </div>
                <div className="rounded-xl py-2 text-center text-[11px]" style={{ background: surface, border: `1px solid ${hexA(P, 0.12)}`, color: theme.text }}>
                  Continue with SSO
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    // ============ ONBOARDING ============
    case 'onboarding':
      return (
        <div className={wrap} style={st}>
          <StatusBar theme={theme} />
          <div className="px-6 pt-6 flex flex-col items-center text-center">
            <div className="h-14 w-14 rounded-2xl mb-4" style={{ background: `linear-gradient(135deg, ${P}, ${A})`, boxShadow: `0 0 30px ${hexA(P, 0.5)}` }} />
            <div className="font-display font-bold text-lg" style={{ color: theme.text }}>Connect your first model</div>
            <div className="text-[11px] mt-1.5" style={{ color: M }}>Step 2 of 3 · 60 seconds</div>
            <div className="flex gap-1.5 mt-3">
              <div className="h-1 w-8 rounded-full" style={{ background: P }} />
              <div className="h-1 w-8 rounded-full" style={{ background: P }} />
              <div className="h-1 w-8 rounded-full" style={{ background: hexA(M, 0.2) }} />
            </div>
          </div>
          <div className="px-5 mt-6 space-y-2.5">
            {['OpenAI · GPT-4o', 'Anthropic · Claude', 'Google · Gemini', 'Mistral · Large'].map((m, i) => (
              <div key={m} className="rounded-xl p-3 flex items-center justify-between" style={{ background: surface, border: `1px solid ${i === 0 ? P : hexA(M, 0.12)}` }}>
                <div className="flex items-center gap-2.5">
                  <div className="h-7 w-7 rounded-lg" style={{ background: `linear-gradient(135deg, ${[P, S, A, '#FFB020'][i]}, ${hexA([P, S, A, '#FFB020'][i], 0.4)})` }} />
                  <span className="text-[12px]" style={{ color: theme.text }}>{m}</span>
                </div>
                {i === 0 ? (
                  <span className="text-[9px] px-2 py-0.5 rounded-full" style={{ background: hexA('#00E676', 0.15), color: '#00E676' }}>Connected</span>
                ) : (
                  <span className="text-[10px]" style={{ color: P }}>Connect</span>
                )}
              </div>
            ))}
          </div>
          <div className="absolute bottom-6 left-5 right-5">
            <div className="rounded-xl py-3 text-center text-[12px] font-medium" style={{ background: `linear-gradient(135deg, ${P}, ${A})`, color: '#fff' }}>
              Continue
            </div>
          </div>
        </div>
      );

    // ============ PROFILE (mobile) ============
    case 'profile':
      return (
        <div className={wrap} style={st}>
          <StatusBar theme={theme} />
          <div className="px-5 pt-4">
            <div className="flex items-center gap-3">
              <InitialsAvatar initials="MC" color={P} size={56} />
              <div>
                <div className="font-display font-bold text-base" style={{ color: theme.text }}>Maya Chen</div>
                <div className="text-[11px]" style={{ color: M }}>Head of Ops</div>
              </div>
            </div>
          </div>
          <div className="px-5 mt-5 grid grid-cols-3 gap-2">
            {[['42', 'Runs'], ['18', 'Flows'], ['7', 'Saved']].map(([v, l]) => (
              <div key={l} className="rounded-xl p-2.5 text-center" style={{ background: surface, border: `1px solid ${hexA(P, 0.1)}` }}>
                <div className="font-display font-bold text-base" style={{ color: theme.text }}>{v}</div>
                <div className="text-[9px]" style={{ color: M }}>{l}</div>
              </div>
            ))}
          </div>
          <div className="px-5 mt-5 space-y-2">
            {['Account', 'Notifications', 'Security', 'Billing', 'Help'].map((r, i) => (
              <div key={r} className="rounded-xl p-3 flex items-center justify-between" style={{ background: surface, border: `1px solid ${hexA(P, 0.08)}` }}>
                <span className="text-[12px]" style={{ color: theme.text }}>{r}</span>
                <span style={{ color: M }}>›</span>
              </div>
            ))}
          </div>
        </div>
      );

    // ============ MESSAGES (watch) ============
    case 'messages':
      return (
        <div className={wrap} style={st}>
          <div className="h-full flex flex-col justify-center px-3 text-center">
            <div className="text-[9px] uppercase tracking-widest mb-1" style={{ color: M }}>Alert</div>
            <div className="h-10 w-10 rounded-full mx-auto mb-2 flex items-center justify-center" style={{ background: hexA(P, 0.18), color: P }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={P} strokeWidth="2"><path d="M12 2v2M12 20v2M2 12h2M20 12h2" /><circle cx="12" cy="12" r="6" /></svg>
            </div>
            <div className="font-display font-bold text-sm" style={{ color: theme.text }}>Agent needs you</div>
            <div className="text-[10px] mt-1.5 px-2" style={{ color: M }}>Support Triage flagged a $480 refund for approval.</div>
            <div className="flex gap-2 mt-3">
              <div className="flex-1 rounded-lg py-1.5 text-[10px]" style={{ background: surface, color: M }}>Dismiss</div>
              <div className="flex-1 rounded-lg py-1.5 text-[10px]" style={{ background: P, color: '#fff' }}>Review</div>
            </div>
          </div>
        </div>
      );

    // ============ EMPTY ============
    case 'empty':
      return (
        <div className={wrap} style={st}>
          <div className="h-full flex flex-col items-center justify-center p-6 text-center">
            <div className="h-16 w-16 rounded-2xl mb-4 flex items-center justify-center" style={{ background: hexA(P, 0.1), border: `1px solid ${hexA(P, 0.2)}` }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={P} strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M9 12h6M12 9v6" /></svg>
            </div>
            <div className="font-display font-semibold text-sm" style={{ color: theme.text }}>No runs yet</div>
            <div className="text-[11px] mt-1.5 max-w-[200px]" style={{ color: M }}>Connect a model and trigger your first workflow to see live runs here.</div>
            <div className="mt-4 rounded-xl px-4 py-2 text-[11px] font-medium" style={{ background: P, color: '#fff' }}>Start a run</div>
          </div>
        </div>
      );

    // ============ LOADING ============
    case 'loading':
      return (
        <div className={wrap} style={st}>
          <div className="h-full flex flex-col items-center justify-center p-6 text-center">
            <div className="relative h-14 w-14 mb-4">
              <div className="absolute inset-0 rounded-full border-2" style={{ borderColor: hexA(P, 0.2) }} />
              <div className="absolute inset-0 rounded-full border-2 border-transparent animate-spin-slow" style={{ borderTopColor: P, borderRightColor: P }} />
            </div>
            <div className="font-display font-semibold text-sm" style={{ color: theme.text }}>Streaming a run</div>
            <div className="text-[11px] mt-1.5 font-mono" style={{ color: M }}>Generating 142 tokens…</div>
            <div className="mt-3 w-48 h-1.5 rounded-full overflow-hidden" style={{ background: hexA(M, 0.2) }}>
              <div className="h-full w-2/3 rounded-full" style={{ background: `linear-gradient(90deg, ${P}, ${A})` }} />
            </div>
          </div>
        </div>
      );

    default:
      return <div className={wrap} style={st} />;
  }
}
