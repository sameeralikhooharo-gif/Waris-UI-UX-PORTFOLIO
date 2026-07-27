import type { BrandTheme, ScreenKind } from '@/data/types';
import { hexA, InitialsAvatar, ProgressRing, Sparkline, StatusBar, themeStyle } from './MockupPrimitives';

/** Renders the second family of mockup screens (banking, health, commerce, RE, travel). */
export function MockupScreenB({ kind, theme }: { kind: ScreenKind; theme: BrandTheme }) {
  const wrap = 'absolute inset-0 overflow-hidden';
  const st = themeStyle(theme);
  const P = theme.primary;
  const S = theme.secondary;
  const A = theme.accent;
  const M = theme.textMuted;
  const surface = theme.surface;

  switch (kind) {
    // ============ HOME (mobile — bank/health/travel) ============
    case 'home':
      return (
        <div className={wrap} style={st}>
          <StatusBar theme={theme} />
          <div className="px-5 pt-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px]" style={{ color: M }}>Good morning</div>
                <div className="font-display font-bold text-lg" style={{ color: theme.text }}>Sofia</div>
              </div>
              <InitialsAvatar initials="SR" color={P} size={36} />
            </div>
          </div>
          {/* balance card */}
          <div className="mx-5 mt-4 rounded-2xl p-4 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${P}, ${A})`, boxShadow: `0 20px 40px -12px ${hexA(P, 0.5)}` }}>
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full" style={{ background: hexA('#fff', 0.12) }} />
            <div className="text-[10px] opacity-80" style={{ color: '#fff' }}>Total balance</div>
            <div className="font-display font-bold text-2xl mt-0.5" style={{ color: '#fff' }}>$12,480.50</div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: hexA('#fff', 0.2), color: '#fff' }}>+ $1,240 this month</span>
            </div>
          </div>
          {/* quick actions */}
          <div className="px-5 mt-4 grid grid-cols-4 gap-2">
            {['Send', 'Request', 'Vault', 'More'].map((a, i) => (
              <div key={a} className="flex flex-col items-center gap-1.5">
                <div className="h-11 w-11 rounded-2xl flex items-center justify-center" style={{ background: surface, border: `1px solid ${hexA(P, 0.12)}`, color: [P, S, A, M][i] }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </div>
                <span className="text-[9px]" style={{ color: M }}>{a}</span>
              </div>
            ))}
          </div>
          {/* recent */}
          <div className="px-5 mt-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[12px] font-medium" style={{ color: theme.text }}>Recent activity</span>
              <span className="text-[10px]" style={{ color: P }}>See all</span>
            </div>
            <div className="space-y-2">
              {[
                { n: 'Spotify', c: '-$9.99', m: 'Subscription', col: '#00E676' },
                { n: 'Salary', c: '+$3,200', m: 'Acme Inc.', col: P },
                { n: 'Whole Foods', c: '-$48.20', m: 'Groceries', col: '#FFB020' },
              ].map((t) => (
                <div key={t.n} className="flex items-center justify-between rounded-xl p-2.5" style={{ background: surface, border: `1px solid ${hexA(P, 0.08)}` }}>
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-xl flex items-center justify-center text-[10px] font-bold" style={{ background: hexA(t.col, 0.15), color: t.col }}>{t.n[0]}</div>
                    <div>
                      <div className="text-[11px] font-medium" style={{ color: theme.text }}>{t.n}</div>
                      <div className="text-[9px]" style={{ color: M }}>{t.m}</div>
                    </div>
                  </div>
                  <div className="text-[11px] font-semibold" style={{ color: t.c.startsWith('+') ? '#00E676' : theme.text }}>{t.c}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    // ============ WALLET (bank — living card) ============
    case 'wallet':
      return (
        <div className={wrap} style={st}>
          <StatusBar theme={theme} />
          <div className="px-5 pt-3 flex items-center justify-between">
            <div className="font-display font-bold text-base" style={{ color: theme.text }}>Wallet</div>
            <div className="h-7 w-7 rounded-full flex items-center justify-center" style={{ background: surface, color: M }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19 12a7 7 0 11-14 0" /></svg>
            </div>
          </div>
          {/* card */}
          <div className="mx-5 mt-5 rounded-2xl p-4 relative overflow-hidden h-44" style={{ background: `linear-gradient(135deg, ${P}, ${A})`, boxShadow: `0 30px 50px -15px ${hexA(P, 0.6)}` }}>
            <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full" style={{ background: hexA('#fff', 0.1) }} />
            <div className="absolute -left-6 -top-10 h-20 w-20 rounded-full" style={{ background: hexA('#fff', 0.08) }} />
            <div className="relative flex flex-col justify-between h-full">
              <div className="flex items-center justify-between">
                <div className="font-display font-bold text-sm" style={{ color: '#fff' }}>{theme.name}</div>
                <div className="h-5 w-7 rounded" style={{ background: hexA('#fff', 0.25) }} />
              </div>
              <div className="h-6 w-9 rounded" style={{ background: `linear-gradient(135deg, ${hexA('#FFB020', 0.9)}, ${hexA('#FFB020', 0.5)})` }} />
              <div>
                <div className="font-mono text-[13px] tracking-wider" style={{ color: '#fff' }}>•••• 4821</div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[10px]" style={{ color: hexA('#fff', 0.8) }}>SOFIA REYES</span>
                  <span className="font-display font-bold text-xs" style={{ color: '#fff' }}>VISA</span>
                </div>
              </div>
            </div>
          </div>
          {/* controls */}
          <div className="px-5 mt-5 grid grid-cols-2 gap-2">
            {[
              { l: 'Freeze card', c: '#FF5470' },
              { l: 'Limits', c: P },
              { l: 'Privacy', c: A },
              { l: 'Settings', c: M },
            ].map((c) => (
              <div key={c.l} className="rounded-xl p-3 flex items-center gap-2.5" style={{ background: surface, border: `1px solid ${hexA(P, 0.08)}` }}>
                <div className="h-7 w-7 rounded-lg flex items-center justify-center" style={{ background: hexA(c.c, 0.15), color: c.c }}>
                  <span className="h-2 w-2 rounded-full" style={{ background: c.c }} />
                </div>
                <span className="text-[11px]" style={{ color: theme.text }}>{c.l}</span>
              </div>
            ))}
          </div>
        </div>
      );

    // ============ TRANSACTIONS ============
    case 'transactions':
      return (
        <div className={wrap} style={st}>
          <StatusBar theme={theme} />
          <div className="px-5 pt-3 flex items-center justify-between">
            <div className="font-display font-bold text-base" style={{ color: theme.text }}>Activity</div>
            <span className="text-[10px]" style={{ color: P }}>Filter</span>
          </div>
          <div className="px-5 mt-3 flex gap-1.5 overflow-x-auto">
            {['All', 'Income', 'Spending', 'Savings'].map((t, i) => (
              <span key={t} className="text-[10px] px-3 py-1.5 rounded-full whitespace-nowrap" style={{ background: i === 0 ? P : surface, color: i === 0 ? '#fff' : M, border: `1px solid ${hexA(P, 0.12)}` }}>{t}</span>
            ))}
          </div>
          <div className="px-5 mt-4 space-y-2">
            {['Today', 'Yesterday', 'Mon, Jul 22'].map((d) => (
              <div key={d}>
                <div className="text-[9px] uppercase tracking-widest mb-1.5" style={{ color: M }}>{d}</div>
                <div className="space-y-1.5">
                  {[
                    { n: 'Pret A Manger', c: '-$12.40', m: 'Food', col: '#FFB020' },
                    { n: 'Uber', c: '-$18.00', m: 'Transport', col: P },
                    { n: 'Refund · ASOS', c: '+$42.00', m: 'Shopping', col: '#00E676' },
                  ].map((t) => (
                    <div key={t.n} className="flex items-center justify-between rounded-xl p-2.5" style={{ background: surface, border: `1px solid ${hexA(P, 0.06)}` }}>
                      <div className="flex items-center gap-2.5">
                        <div className="h-8 w-8 rounded-xl flex items-center justify-center text-[10px] font-bold" style={{ background: hexA(t.col, 0.15), color: t.col }}>{t.n[0]}</div>
                        <div>
                          <div className="text-[11px] font-medium" style={{ color: theme.text }}>{t.n}</div>
                          <div className="text-[9px]" style={{ color: M }}>{t.m}</div>
                        </div>
                      </div>
                      <div className="text-[11px] font-semibold" style={{ color: t.c.startsWith('+') ? '#00E676' : theme.text }}>{t.c}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    // ============ SAVINGS (vaults) ============
    case 'savings':
      return (
        <div className={wrap} style={st}>
          <StatusBar theme={theme} />
          <div className="px-5 pt-3 flex items-center justify-between">
            <div>
              <div className="font-display font-bold text-base" style={{ color: theme.text }}>Vaults</div>
              <div className="text-[10px]" style={{ color: M }}>$4,280 saved · 3 goals</div>
            </div>
            <div className="h-7 w-7 rounded-full flex items-center justify-center text-[14px]" style={{ background: P, color: '#fff' }}>+</div>
          </div>
          <div className="px-5 mt-4 space-y-3">
            {[
              { n: 'New studio', cur: 3200, goal: 5000, c: P },
              { n: 'Tokyo trip', cur: 780, goal: 3000, c: S },
              { n: 'Emergency', cur: 300, goal: 2000, c: A },
            ].map((v) => {
              const pct = Math.round((v.cur / v.goal) * 100);
              return (
                <div key={v.n} className="rounded-2xl p-4" style={{ background: surface, border: `1px solid ${hexA(v.c, 0.18)}` }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <ProgressRing value={pct} size={44} color={v.c}>
                        <span className="text-[9px] font-bold" style={{ color: v.c }}>{pct}%</span>
                      </ProgressRing>
                      <div>
                        <div className="text-[12px] font-medium" style={{ color: theme.text }}>{v.n}</div>
                        <div className="text-[10px]" style={{ color: M }}>${v.cur} / ${v.goal}</div>
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-1 rounded-full" style={{ background: hexA(v.c, 0.12), color: v.c }}>Add</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="absolute bottom-5 left-5 right-5 rounded-2xl p-3 flex items-center justify-between" style={{ background: `linear-gradient(135deg, ${hexA(P, 0.15)}, ${hexA(A, 0.15)})`, border: `1px solid ${hexA(P, 0.2)}` }}>
            <span className="text-[11px]" style={{ color: theme.text }}>Auto-save $20 weekly</span>
            <div className="h-5 w-9 rounded-full p-0.5 flex" style={{ background: P }}>
              <div className="h-4 w-4 rounded-full bg-white ml-auto" />
            </div>
          </div>
        </div>
      );

    // ============ CARD ============
    case 'card':
      return (
        <div className={wrap} style={st}>
          <StatusBar theme={theme} />
          <div className="px-5 pt-3">
            <div className="font-display font-bold text-base" style={{ color: theme.text }}>Card controls</div>
          </div>
          <div className="mx-5 mt-4 rounded-2xl p-4 h-36 relative" style={{ background: `linear-gradient(135deg, ${P}, ${A})` }}>
            <div className="font-mono text-[12px] tracking-wider text-white">•••• 4821</div>
            <div className="text-white text-[10px] mt-1">Sofia Reyes</div>
          </div>
          <div className="px-5 mt-5 space-y-2">
            {[
              { l: 'Contactless', on: true },
              { l: 'Online payments', on: true },
              { l: 'ATM withdrawals', on: false },
              { l: 'Travel purchases', on: true },
            ].map((s) => (
              <div key={s.l} className="rounded-xl p-3 flex items-center justify-between" style={{ background: surface, border: `1px solid ${hexA(P, 0.08)}` }}>
                <span className="text-[12px]" style={{ color: theme.text }}>{s.l}</span>
                <div className="h-5 w-9 rounded-full p-0.5 flex" style={{ background: s.on ? P : hexA(M, 0.25) }}>
                  <div className={`h-4 w-4 rounded-full bg-white ${s.on ? 'ml-auto' : ''}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    // ============ INVEST ============
    case 'invest':
      return (
        <div className={wrap} style={st}>
          <StatusBar theme={theme} />
          <div className="px-5 pt-3">
            <div className="font-display font-bold text-base" style={{ color: theme.text }}>Invest</div>
            <div className="text-[10px]" style={{ color: M }}>Portfolio · $2,140</div>
          </div>
          <div className="mx-5 mt-3 rounded-2xl p-3" style={{ background: `linear-gradient(135deg, ${hexA(P, 0.15)}, ${hexA(A, 0.15)})`, border: `1px solid ${hexA(P, 0.2)}` }}>
            <div className="flex items-center justify-between">
              <span className="text-[10px]" style={{ color: M }}>Today</span>
              <span className="text-[11px] font-semibold" style={{ color: '#00E676' }}>+$24.18 (+1.14%)</span>
            </div>
            <div className="mt-2"><Sparkline color={P} points={[20, 28, 25, 32, 30, 38, 42, 48]} width={260} height={36} /></div>
          </div>
          <div className="px-5 mt-4">
            <div className="text-[11px] font-medium mb-2" style={{ color: theme.text }}>Holdings</div>
            <div className="space-y-2">
              {[
                { n: 'AAPL', v: '$640', d: '+1.2%', c: '#00E676' },
                { n: 'TSLA', v: '$480', d: '-0.8%', c: '#FF5470' },
                { n: 'NVDA', v: '$720', d: '+2.4%', c: '#00E676' },
                { n: 'ETF', v: '$300', d: '+0.3%', c: '#00E676' },
              ].map((h) => (
                <div key={h.n} className="flex items-center justify-between rounded-xl p-2.5" style={{ background: surface, border: `1px solid ${hexA(P, 0.06)}` }}>
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-xl flex items-center justify-center text-[9px] font-bold" style={{ background: hexA(P, 0.15), color: P }}>{h.n.slice(0, 2)}</div>
                    <span className="text-[11px] font-medium" style={{ color: theme.text }}>{h.n}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[11px]" style={{ color: theme.text }}>{h.v}</span>
                    <span className="text-[10px] font-mono" style={{ color: h.c }}>{h.d}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    // ============ APPOINTMENTS ============
    case 'appointments':
      return (
        <div className={wrap} style={st}>
          <div className="px-6 pt-5 flex items-center justify-between">
            <div>
              <div className="font-display font-bold text-base" style={{ color: theme.text }}>Appointments</div>
              <div className="text-[10px]" style={{ color: M }}>Next 7 days</div>
            </div>
            <div className="h-7 w-7 rounded-full flex items-center justify-center text-[14px]" style={{ background: P, color: '#fff' }}>+</div>
          </div>
          <div className="px-6 mt-4 grid grid-cols-7 gap-1">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
              <div key={i} className="flex flex-col items-center gap-1 py-1.5 rounded-lg" style={{ background: i === 2 ? hexA(P, 0.12) : 'transparent' }}>
                <span className="text-[9px]" style={{ color: M }}>{d}</span>
                <span className="text-[11px] font-semibold" style={{ color: i === 2 ? P : theme.text }}>{22 + i}</span>
                {i === 2 && <span className="h-1 w-1 rounded-full" style={{ background: P }} />}
              </div>
            ))}
          </div>
          <div className="px-6 mt-4 space-y-2.5">
            {[
              { t: '09:30', n: 'Telehealth · Dr. Patel', m: 'Diabetes follow-up', c: P, kind: 'Video' },
              { t: '11:00', n: 'Lab visit', m: 'Blood panel', c: S, kind: 'In-person' },
              { t: '14:15', n: 'Dr. Chen · Cardiology', m: 'Annual checkup', c: A, kind: 'Video' },
            ].map((a) => (
              <div key={a.t} className="rounded-xl p-3 flex items-center gap-3" style={{ background: surface, border: `1px solid ${hexA(a.c, 0.18)}` }}>
                <div className="text-center w-10">
                  <div className="font-display font-bold text-[11px]" style={{ color: theme.text }}>{a.t}</div>
                </div>
                <div className="flex-1">
                  <div className="text-[11px] font-medium" style={{ color: theme.text }}>{a.n}</div>
                  <div className="text-[9px]" style={{ color: M }}>{a.m}</div>
                </div>
                <span className="text-[9px] px-2 py-0.5 rounded-full" style={{ background: hexA(a.c, 0.14), color: a.c }}>{a.kind}</span>
              </div>
            ))}
          </div>
        </div>
      );

    // ============ RECORDS ============
    case 'records':
      return (
        <div className={wrap} style={st}>
          <div className="flex h-full">
            <div className="hidden md:flex flex-col gap-1 p-3 border-r w-44" style={{ borderColor: hexA(P, 0.12), background: hexA(surface, 0.5) }}>
              <div className="flex items-center gap-2 px-2 py-3">
                <div className="h-6 w-6 rounded-lg" style={{ background: `linear-gradient(135deg, ${P}, ${A})` }} />
                <span className="font-display font-bold text-sm" style={{ color: theme.text }}>{theme.name}</span>
              </div>
              {['Summary', 'Conditions', 'Medications', 'Allergies', 'Lab results', 'Immunizations', 'Documents'].map((it, i) => (
                <div key={it} className="rounded-lg px-2.5 py-2 text-[11px]" style={{ background: i === 4 ? hexA(P, 0.14) : 'transparent', color: i === 4 ? P : M }}>{it}</div>
              ))}
            </div>
            <div className="flex-1 overflow-hidden p-4">
              <div className="font-display font-semibold text-sm mb-1" style={{ color: theme.text }}>Lab results</div>
              <div className="text-[10px] mb-3" style={{ color: M }}>Last 12 months · 4 panels</div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { n: 'Glucose', v: '92', u: 'mg/dL', r: 'Normal', c: '#00E676', p: [110, 100, 95, 92] },
                  { n: 'Cholesterol', v: '180', u: 'mg/dL', r: 'Borderline', c: '#FFB020', p: [210, 200, 190, 180] },
                  { n: 'HbA1c', v: '5.6', u: '%', r: 'Normal', c: '#00E676', p: [6.2, 6.0, 5.8, 5.6] },
                  { n: 'Vitamin D', v: '38', u: 'ng/mL', r: 'Low', c: '#FF5470', p: [42, 40, 39, 38] },
                ].map((l) => (
                  <div key={l.n} className="rounded-xl p-3" style={{ background: surface, border: `1px solid ${hexA(l.c, 0.18)}` }}>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-medium" style={{ color: theme.text }}>{l.n}</span>
                      <span className="text-[9px] px-2 py-0.5 rounded-full" style={{ background: hexA(l.c, 0.15), color: l.c }}>{l.r}</span>
                    </div>
                    <div className="flex items-end justify-between mt-1">
                      <div>
                        <span className="font-display font-bold text-lg" style={{ color: theme.text }}>{l.v}</span>
                        <span className="text-[10px] ml-1" style={{ color: M }}>{l.u}</span>
                      </div>
                      <Sparkline color={l.c} points={l.p} width={70} height={20} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );

    // ============ TELEHEALTH ============
    case 'telehealth':
      return (
        <div className={wrap} style={{ background: '#0a0f0d' }}>
          {/* video tile */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1612] to-[#0a0f0d] flex items-center justify-center">
            <div className="text-center">
              <div className="h-20 w-20 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${P}, ${A})` }}>
                <span className="font-display font-bold text-2xl text-white">AP</span>
              </div>
              <div className="font-display font-semibold text-sm text-white">Dr. Amara Patel</div>
              <div className="text-[10px] mt-1" style={{ color: M }}>Connected · 12:04</div>
            </div>
          </div>
          {/* self pip */}
          <div className="absolute bottom-16 right-4 h-24 w-16 rounded-xl overflow-hidden" style={{ background: surface, border: `1px solid ${hexA(P, 0.25)}` }}>
            <div className="h-full w-full flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${hexA(A, 0.4)}, ${hexA(P, 0.4)})` }}>
              <span className="text-[10px] font-bold text-white">EV</span>
            </div>
          </div>
          {/* controls */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full p-2" style={{ background: hexA('#000', 0.6), backdropFilter: 'blur(10px)' }}>
            {['mic', 'video', 'chat', 'end'].map((c, i) => (
              <div key={c} className="h-9 w-9 rounded-full flex items-center justify-center" style={{ background: i === 3 ? '#FF5470' : hexA('#fff', 0.1), color: '#fff' }}>
                <span className="h-2 w-2 rounded-full" style={{ background: '#fff' }} />
              </div>
            ))}
          </div>
          {/* caption */}
          <div className="absolute top-4 left-4 right-4 rounded-xl p-2.5" style={{ background: hexA('#000', 0.5), backdropFilter: 'blur(8px)' }}>
            <div className="text-[9px]" style={{ color: hexA('#fff', 0.6) }}>Live caption</div>
            <div className="text-[11px] text-white">Your A1c is improving — let’s keep the same regimen.</div>
          </div>
        </div>
      );

    // ============ RX ============
    case 'rx':
      return (
        <div className={wrap} style={st}>
          <StatusBar theme={theme} />
          <div className="px-5 pt-3">
            <div className="font-display font-bold text-base" style={{ color: theme.text }}>Prescriptions</div>
          </div>
          <div className="px-5 mt-4 space-y-2.5">
            {[
              { n: 'Metformin 500mg', m: '1 tab · twice daily', r: '3 refills left', c: P, exp: 'Renew' },
              { n: 'Atorvastatin 20mg', m: '1 tab · at night', r: '1 refill left', c: '#FFB020', exp: 'Renew' },
              { n: 'Lisinopril 10mg', m: '1 tab · morning', r: 'Auto-refill on', c: '#00E676', exp: 'Manage' },
            ].map((r) => (
              <div key={r.n} className="rounded-xl p-3" style={{ background: surface, border: `1px solid ${hexA(r.c, 0.18)}` }}>
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-medium" style={{ color: theme.text }}>{r.n}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: hexA(r.c, 0.15), color: r.c }}>{r.exp}</span>
                </div>
                <div className="text-[10px] mt-1" style={{ color: M }}>{r.m}</div>
                <div className="text-[10px] mt-0.5" style={{ color: M }}>{r.r}</div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-5 left-5 right-5 rounded-xl p-3 flex items-center justify-between" style={{ background: hexA(P, 0.1), border: `1px solid ${hexA(P, 0.2)}` }}>
            <div>
              <div className="text-[11px] font-medium" style={{ color: theme.text }}>CVS Pharmacy · 0.4 mi</div>
              <div className="text-[9px]" style={{ color: M }}>Pickup ready in 20 min</div>
            </div>
            <span className="text-[10px] px-3 py-1.5 rounded-lg" style={{ background: P, color: '#fff' }}>Pick up</span>
          </div>
        </div>
      );

    // ============ LAB ============
    case 'lab':
      return (
        <div className={wrap} style={st}>
          <StatusBar theme={theme} />
          <div className="px-5 pt-3">
            <div className="font-display font-bold text-base" style={{ color: theme.text }}>Lab results</div>
            <div className="text-[10px]" style={{ color: M }}>July 24, 2024</div>
          </div>
          <div className="mx-5 mt-3 rounded-2xl p-4" style={{ background: `linear-gradient(135deg, ${hexA(P, 0.15)}, ${hexA(A, 0.15)})`, border: `1px solid ${hexA(P, 0.2)}` }}>
            <div className="text-[10px]" style={{ color: M }}>Overall</div>
            <div className="flex items-end gap-2">
              <span className="font-display font-bold text-xl" style={{ color: '#00E676' }}>Good</span>
              <span className="text-[10px] mb-1" style={{ color: M }}>3 of 4 normal</span>
            </div>
          </div>
          <div className="px-5 mt-4 space-y-2">
            {[
              { n: 'Glucose', v: '92', r: 'Normal', c: '#00E676', p: [110, 100, 95, 92] },
              { n: 'HbA1c', v: '5.6%', r: 'Normal', c: '#00E676', p: [6.2, 6.0, 5.8, 5.6] },
              { n: 'Vitamin D', v: '38', r: 'Low', c: '#FF5470', p: [42, 40, 39, 38] },
            ].map((l) => (
              <div key={l.n} className="rounded-xl p-3" style={{ background: surface, border: `1px solid ${hexA(l.c, 0.15)}` }}>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium" style={{ color: theme.text }}>{l.n}</span>
                  <span className="text-[10px]" style={{ color: l.c }}>{l.r}</span>
                </div>
                <div className="flex items-end justify-between mt-1">
                  <span className="font-display font-bold text-base" style={{ color: theme.text }}>{l.v}</span>
                  <Sparkline color={l.c} points={l.p} width={80} height={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}
