import type { BrandTheme, ScreenKind } from '@/data/types';
import { hexA, InitialsAvatar, ProgressRing, Sparkline, StatusBar, themeStyle } from './MockupPrimitives';

/** Renders ecommerce, real estate, and travel mockup screens. */
export function MockupScreenC({ kind, theme }: { kind: ScreenKind; theme: BrandTheme }) {
  const wrap = 'absolute inset-0 overflow-hidden';
  const st = themeStyle(theme);
  const P = theme.primary;
  const S = theme.secondary;
  const A = theme.accent;
  const M = theme.textMuted;
  const surface = theme.surface;

  switch (kind) {
    // ============ LANDING (editorial ecommerce / RE / travel) ============
    case 'landing':
      return (
        <div className={wrap} style={st}>
          <div className="flex h-full">
            {/* nav */}
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-3.5 z-10" style={{ borderBottom: `1px solid ${hexA(P, 0.08)}`, background: hexA(theme.bg, 0.6), backdropFilter: 'blur(10px)' }}>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded" style={{ background: `linear-gradient(135deg, ${P}, ${A})` }} />
                <span className="font-display font-bold text-sm" style={{ color: theme.text }}>{theme.name}</span>
              </div>
              <div className="flex items-center gap-5 text-[11px]" style={{ color: M }}>
                {['Collections', 'Shop', 'Stories', 'Atelier'].map((n) => <span key={n}>{n}</span>)}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[11px]" style={{ color: M }}>Search</span>
                <div className="h-6 w-6 rounded-full" style={{ background: hexA(P, 0.15) }} />
              </div>
            </div>
            {/* hero editorial */}
            <div className="flex w-full h-full">
              <div className="flex-1 flex flex-col justify-center px-8 pt-10">
                <div className="text-[10px] uppercase tracking-[0.3em] mb-3" style={{ color: P }}>Winter 2024</div>
                <div className="font-display font-bold text-3xl leading-tight" style={{ color: theme.text }}>The Crafted<br />Collection</div>
                <div className="text-[11px] mt-3 max-w-[220px]" style={{ color: M }}>Six ateliers. Forty-two pieces. A study in restraint and material honesty.</div>
                <div className="flex gap-2 mt-5">
                  <div className="rounded-lg px-4 py-2 text-[11px] font-medium" style={{ background: P, color: '#fff' }}>Explore</div>
                  <div className="rounded-lg px-4 py-2 text-[11px]" style={{ border: `1px solid ${hexA(P, 0.3)}`, color: theme.text }}>Lookbook</div>
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="absolute inset-3 rounded-2xl overflow-hidden" style={{ background: `linear-gradient(135deg, ${hexA(P, 0.4)}, ${hexA(A, 0.3)}, ${hexA(S, 0.2)})` }}>
                  <div className="absolute inset-0 opacity-30" style={{ background: `radial-gradient(circle at 30% 30%, ${hexA('#fff', 0.3)}, transparent 60%)` }} />
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl p-3" style={{ background: hexA('#000', 0.4), backdropFilter: 'blur(8px)' }}>
                    <div className="text-[10px]" style={{ color: hexA('#fff', 0.7) }}>Featured</div>
                    <div className="text-[12px] font-medium text-white">The Atelier Coat</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    // ============ COLLECTIONS ============
    case 'collections':
      return (
        <div className={wrap} style={st}>
          <div className="flex h-full">
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-3.5 z-10" style={{ borderBottom: `1px solid ${hexA(P, 0.08)}` }}>
              <span className="font-display font-bold text-sm" style={{ color: theme.text }}>{theme.name}</span>
              <div className="flex items-center gap-4 text-[11px]" style={{ color: M }}>
                {['All', 'Outerwear', 'Knitwear', 'Accessories'].map((n, i) => <span key={n} style={{ color: i === 0 ? P : M }}>{n}</span>)}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 p-6 pt-16 w-full">
              {[
                { n: 'The Atelier Coat', p: '$4,800', c: `${hexA(P, 0.35)}, ${hexA(A, 0.25)}` },
                { n: 'Cashmere Wrap', p: '$1,200', c: `${hexA(S, 0.3)}, ${hexA(P, 0.2)}` },
                { n: 'Leather Tote', p: '$2,400', c: `${hexA(A, 0.35)}, ${hexA(S, 0.2)}` },
                { n: 'Wool Blazer', p: '$2,100', c: `${hexA(P, 0.25)}, ${hexA(M, 0.2)}` },
                { n: 'Silk Scarf', p: '$480', c: `${hexA(S, 0.35)}, ${hexA(A, 0.25)}` },
                { n: 'Suede Boot', p: '$1,600', c: `${hexA(A, 0.25)}, ${hexA(P, 0.3)}` },
              ].map((p) => (
                <div key={p.n} className="rounded-xl overflow-hidden flex flex-col" style={{ background: surface, border: `1px solid ${hexA(P, 0.08)}` }}>
                  <div className="aspect-[3/4] relative" style={{ background: `linear-gradient(135deg, ${p.c})` }}>
                    <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(circle at 50% 30%, #fff, transparent 60%)` }} />
                  </div>
                  <div className="p-2.5">
                    <div className="text-[10px] font-medium" style={{ color: theme.text }}>{p.n}</div>
                    <div className="text-[10px] mt-0.5" style={{ color: P }}>{p.p}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    // ============ SHOP ============
    case 'shop':
      return (
        <div className={wrap} style={st}>
          <div className="flex h-full">
            {/* filter sidebar */}
            <div className="hidden md:flex flex-col w-44 p-4 border-r" style={{ borderColor: hexA(P, 0.1), background: hexA(surface, 0.4) }}>
              <div className="text-[11px] font-medium mb-3" style={{ color: theme.text }}>Filters</div>
              {['Category', 'Material', 'Color', 'Size', 'Price', 'Atelier'].map((f) => (
                <div key={f} className="mb-2">
                  <div className="text-[10px] mb-1" style={{ color: M }}>{f}</div>
                  <div className="flex flex-wrap gap-1">
                    {[1, 2, 3].map((i) => <span key={i} className="text-[9px] px-2 py-0.5 rounded-full" style={{ background: hexA(P, 0.08), color: M }}>{['All', 'Wool', 'Black', 'M', '$', 'Paris'][['Category','Material','Color','Size','Price','Atelier'].indexOf(f)]}</span>)}
                  </div>
                </div>
              ))}
            </div>
            {/* grid */}
            <div className="flex-1 overflow-hidden p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="text-[11px]" style={{ color: theme.text }}>42 pieces</div>
                <div className="text-[10px]" style={{ color: M }}>Sort: Featured</div>
              </div>
              <div className="grid grid-cols-4 gap-2.5">
                {[
                  { n: 'Atelier Coat', p: '$4,800' },
                  { n: 'Cashmere Wrap', p: '$1,200' },
                  { n: 'Leather Tote', p: '$2,400' },
                  { n: 'Wool Blazer', p: '$2,100' },
                  { n: 'Silk Scarf', p: '$480' },
                  { n: 'Suede Boot', p: '$1,600' },
                  { n: 'Linen Shirt', p: '$380' },
                  { n: 'Tailored Pant', p: '$920' },
                ].map((p, i) => (
                  <div key={p.n} className="rounded-lg overflow-hidden" style={{ background: surface, border: `1px solid ${hexA(P, 0.06)}` }}>
                    <div className="aspect-square relative" style={{ background: `linear-gradient(135deg, ${hexA([P, S, A, P, S, A, P, S][i], 0.3)}, ${hexA([A, P, S, A, P, S, A, P][i], 0.2)})` }}>
                      <div className="absolute top-1.5 right-1.5 h-5 w-5 rounded-full flex items-center justify-center" style={{ background: hexA('#000', 0.4) }}>
                        <span className="text-[10px]">♡</span>
                      </div>
                    </div>
                    <div className="p-2">
                      <div className="text-[10px] font-medium" style={{ color: theme.text }}>{p.n}</div>
                      <div className="text-[10px]" style={{ color: P }}>{p.p}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );

    // ============ PRODUCT ============
    case 'product':
      return (
        <div className={wrap} style={st}>
          <div className="flex h-full">
            <div className="flex-1 relative" style={{ background: `linear-gradient(135deg, ${hexA(P, 0.3)}, ${hexA(A, 0.25)})` }}>
              <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(circle at 50% 30%, #fff, transparent 60%)' }} />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
                {[0, 1, 2, 3].map((i) => <span key={i} className="h-1 rounded-full" style={{ width: i === 0 ? 16 : 6, background: i === 0 ? '#fff' : hexA('#fff', 0.4) }} />)}
              </div>
              <div className="absolute top-4 left-4 text-[9px] px-2 py-1 rounded-full" style={{ background: hexA('#000', 0.4), color: '#fff' }}>360° view</div>
            </div>
            <div className="w-64 p-5 flex flex-col" style={{ background: hexA(surface, 0.5), borderLeft: `1px solid ${hexA(P, 0.1)}` }}>
              <div className="text-[9px] uppercase tracking-widest" style={{ color: P }}>Atelier Paris</div>
              <div className="font-display font-bold text-lg mt-1" style={{ color: theme.text }}>The Atelier Coat</div>
              <div className="text-[12px] mt-1" style={{ color: P }}>$4,800</div>
              <div className="text-[10px] mt-3" style={{ color: M }}>Hand-tailored in pure merino wool with horn buttons and a half-canvas construction.</div>
              <div className="mt-4">
                <div className="text-[10px] mb-1.5" style={{ color: M }}>Size</div>
                <div className="flex gap-1.5">
                  {['XS', 'S', 'M', 'L', 'XL'].map((s, i) => (
                    <span key={s} className="h-7 w-7 rounded-lg flex items-center justify-center text-[10px]" style={{ background: i === 2 ? P : surface, color: i === 2 ? '#fff' : M, border: `1px solid ${hexA(P, 0.15)}` }}>{s}</span>
                  ))}
                </div>
              </div>
              <div className="mt-4 rounded-lg p-2.5" style={{ background: hexA(P, 0.08) }}>
                <div className="text-[10px]" style={{ color: theme.text }}>Chat with a stylist</div>
                <div className="text-[9px] mt-0.5" style={{ color: M }}>Available now · 2 min reply</div>
              </div>
              <div className="mt-auto rounded-lg py-3 text-center text-[11px] font-medium" style={{ background: P, color: '#fff' }}>Add to bag</div>
            </div>
          </div>
        </div>
      );

    // ============ WISHLIST ============
    case 'wishlist':
      return (
        <div className={wrap} style={st}>
          <StatusBar theme={theme} />
          <div className="px-5 pt-3 flex items-center justify-between">
            <div className="font-display font-bold text-base" style={{ color: theme.text }}>Wishlist</div>
            <span className="text-[10px]" style={{ color: M }}>4 saved</span>
          </div>
          <div className="px-5 mt-4 grid grid-cols-2 gap-2.5">
            {[
              { n: 'Atelier Coat', p: '$4,800', c: P },
              { n: 'Cashmere Wrap', p: '$1,200', c: S },
              { n: 'Leather Tote', p: '$2,400', c: A },
              { n: 'Silk Scarf', p: '$480', c: '#FFB020' },
            ].map((p) => (
              <div key={p.n} className="rounded-xl overflow-hidden" style={{ background: surface, border: `1px solid ${hexA(p.c, 0.15)}` }}>
                <div className="aspect-square relative" style={{ background: `linear-gradient(135deg, ${hexA(p.c, 0.3)}, ${hexA(p.c, 0.1)})` }}>
                  <div className="absolute top-1.5 right-1.5 h-5 w-5 rounded-full flex items-center justify-center text-[10px]" style={{ background: hexA('#000', 0.4), color: '#fff' }}>♥</div>
                </div>
                <div className="p-2">
                  <div className="text-[10px] font-medium" style={{ color: theme.text }}>{p.n}</div>
                  <div className="text-[10px]" style={{ color: p.c }}>{p.p}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    // ============ CHECKOUT ============
    case 'checkout':
      return (
        <div className={wrap} style={st}>
          <StatusBar theme={theme} />
          <div className="px-5 pt-3">
            <div className="font-display font-bold text-base" style={{ color: theme.text }}>Checkout</div>
          </div>
          <div className="px-5 mt-3 space-y-2">
            {[
              { n: 'Atelier Coat', p: '$4,800', c: P, q: 1 },
              { n: 'Silk Scarf', p: '$480', c: S, q: 1 },
            ].map((p) => (
              <div key={p.n} className="flex items-center gap-3 rounded-xl p-2.5" style={{ background: surface, border: `1px solid ${hexA(P, 0.08)}` }}>
                <div className="h-12 w-10 rounded-lg" style={{ background: `linear-gradient(135deg, ${hexA(p.c, 0.4)}, ${hexA(p.c, 0.15)})` }} />
                <div className="flex-1">
                  <div className="text-[11px] font-medium" style={{ color: theme.text }}>{p.n}</div>
                  <div className="text-[10px]" style={{ color: M }}>Qty {p.q}</div>
                </div>
                <div className="text-[11px]" style={{ color: theme.text }}>{p.p}</div>
              </div>
            ))}
          </div>
          <div className="px-5 mt-3 rounded-xl p-3 space-y-1.5" style={{ background: surface, border: `1px solid ${hexA(P, 0.1)}` }}>
            <div className="flex justify-between text-[10px]"><span style={{ color: M }}>Subtotal</span><span style={{ color: theme.text }}>$5,280</span></div>
            <div className="flex justify-between text-[10px]"><span style={{ color: M }}>Shipping</span><span style={{ color: '#00E676' }}>Free</span></div>
            <div className="flex justify-between text-[11px] font-semibold pt-1 border-t" style={{ borderColor: hexA(P, 0.1) }}><span style={{ color: theme.text }}>Total</span><span style={{ color: theme.text }}>$5,280</span></div>
          </div>
          <div className="px-5 mt-3 space-y-2">
            <div className="rounded-xl py-3 text-center text-[11px] font-medium" style={{ background: P, color: '#fff' }}>Pay $5,280</div>
            <div className="rounded-xl py-2.5 text-center text-[10px]" style={{ background: surface, border: `1px solid ${hexA(P, 0.12)}`, color: M }}>Or 4 × $1,320 with Atelier Pay</div>
          </div>
        </div>
      );

    // ============ CAMPAIGN (banner) ============
    case 'campaign':
      return (
        <div className={wrap} style={{ background: `linear-gradient(120deg, ${theme.bg}, ${hexA(P, 0.25)}, ${hexA(A, 0.2)})` }}>
          <div className="absolute inset-0 opacity-30" style={{ background: `radial-gradient(circle at 70% 30%, ${hexA(P, 0.5)}, transparent 50%)` }} />
          <div className="relative h-full flex items-center px-10">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: P }}>Atelier Maison</div>
              <div className="font-display font-bold text-3xl leading-tight" style={{ color: theme.text }}>Winter in <br />Cashmere</div>
              <div className="text-[11px] mt-3 max-w-[280px]" style={{ color: M }}>A film by Léa Marchand. The new seasonal collection, now shoppable.</div>
              <div className="flex gap-2 mt-5">
                <div className="rounded-lg px-4 py-2 text-[11px] font-medium" style={{ background: P, color: '#fff' }}>Watch the film</div>
                <div className="rounded-lg px-4 py-2 text-[11px]" style={{ border: `1px solid ${hexA(P, 0.3)}`, color: theme.text }}>Shop the edit</div>
              </div>
            </div>
            <div className="absolute right-10 top-1/2 -translate-y-1/2 h-40 w-32 rounded-2xl" style={{ background: `linear-gradient(135deg, ${hexA(P, 0.5)}, ${hexA(A, 0.3)})`, boxShadow: `0 30px 60px -20px ${hexA(P, 0.5)}` }} />
          </div>
        </div>
      );

    // ============ PROPERTIES (RE deal explorer) ============
    case 'properties':
      return (
        <div className={wrap} style={st}>
          <div className="flex h-full">
            <div className="hidden md:flex flex-col w-44 p-3 border-r" style={{ borderColor: hexA(P, 0.1), background: hexA(surface, 0.4) }}>
              <div className="flex items-center gap-2 px-2 py-3">
                <div className="h-6 w-6 rounded-lg" style={{ background: `linear-gradient(135deg, ${P}, ${A})` }} />
                <span className="font-display font-bold text-sm" style={{ color: theme.text }}>{theme.name}</span>
              </div>
              {['Discover', 'Portfolio', 'Distributions', 'Secondary', 'Settings'].map((it, i) => (
                <div key={it} className="rounded-lg px-2.5 py-2 text-[11px]" style={{ background: i === 0 ? hexA(P, 0.14) : 'transparent', color: i === 0 ? P : M }}>{it}</div>
              ))}
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="px-4 py-3 flex items-center justify-between" style={{ borderBottom: `1px solid ${hexA(P, 0.08)}` }}>
                <div>
                  <div className="font-display font-semibold text-sm" style={{ color: theme.text }}>Live deals</div>
                  <div className="text-[10px]" style={{ color: M }}>12 open · $48M target raise</div>
                </div>
                <div className="flex gap-1.5">
                  {['Map', 'List'].map((v, i) => <span key={v} className="text-[10px] px-2.5 py-1 rounded-lg" style={{ background: i === 0 ? hexA(P, 0.12) : 'transparent', color: i === 0 ? P : M }}>{v}</span>)}
                </div>
              </div>
              <div className="p-4 grid grid-cols-3 gap-3">
                {[
                  { n: 'Brooklyn Lofts', y: '8.4%', v: '$2.4M', c: P, e: '72%' },
                  { n: 'Austin Residences', y: '9.1%', v: '$5.8M', c: S, e: '48%' },
                  { n: 'Miami Waterfront', y: '7.8%', v: '$8.2M', c: A, e: '34%' },
                  { n: 'Denver Townhomes', y: '8.9%', v: '$1.9M', c: P, e: '88%' },
                  { n: 'Seattle Towers', y: '9.4%', v: '$12M', c: S, e: '21%' },
                  { n: 'Phoenix Villas', y: '8.2%', v: '$3.4M', c: A, e: '60%' },
                ].map((d) => (
                  <div key={d.n} className="rounded-xl overflow-hidden" style={{ background: surface, border: `1px solid ${hexA(d.c, 0.15)}` }}>
                    <div className="h-16 relative" style={{ background: `linear-gradient(135deg, ${hexA(d.c, 0.4)}, ${hexA(d.c, 0.15)})` }}>
                      <div className="absolute bottom-1.5 left-2 text-[9px] px-2 py-0.5 rounded-full" style={{ background: hexA('#000', 0.4), color: '#fff' }}>{d.e} funded</div>
                    </div>
                    <div className="p-2.5">
                      <div className="text-[11px] font-medium" style={{ color: theme.text }}>{d.n}</div>
                      <div className="flex justify-between mt-1">
                        <span className="text-[10px]" style={{ color: d.c }}>{d.y} target</span>
                        <span className="text-[10px]" style={{ color: M }}>{d.v}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );

    // ============ PORTFOLIO ============
    case 'portfolio':
      return (
        <div className={wrap} style={st}>
          <div className="flex h-full">
            <div className="hidden md:flex flex-col w-44 p-3 border-r" style={{ borderColor: hexA(P, 0.1), background: hexA(surface, 0.4) }}>
              <div className="flex items-center gap-2 px-2 py-3">
                <div className="h-6 w-6 rounded-lg" style={{ background: `linear-gradient(135deg, ${P}, ${A})` }} />
                <span className="font-display font-bold text-sm" style={{ color: theme.text }}>{theme.name}</span>
              </div>
              {['Discover', 'Portfolio', 'Distributions', 'Secondary', 'Settings'].map((it, i) => (
                <div key={it} className="rounded-lg px-2.5 py-2 text-[11px]" style={{ background: i === 1 ? hexA(P, 0.14) : 'transparent', color: i === 1 ? P : M }}>{it}</div>
              ))}
            </div>
            <div className="flex-1 overflow-hidden p-4 space-y-3">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { l: 'Portfolio value', v: '$24,480', c: P },
                  { l: 'Total return', v: '+18.2%', c: '#00E676' },
                  { l: 'Monthly dist.', v: '$184', c: S },
                ].map((k) => (
                  <div key={k.l} className="rounded-xl p-3" style={{ background: surface, border: `1px solid ${hexA(P, 0.1)}` }}>
                    <div className="text-[10px]" style={{ color: M }}>{k.l}</div>
                    <div className="font-display font-bold text-lg mt-0.5" style={{ color: k.c }}>{k.v}</div>
                  </div>
                ))}
              </div>
              <div className="rounded-xl p-3" style={{ background: surface, border: `1px solid ${hexA(P, 0.1)}` }}>
                <div className="text-[11px] font-medium mb-2" style={{ color: theme.text }}>Performance</div>
                <Sparkline color={P} points={[20, 25, 23, 30, 35, 32, 40, 44, 48]} width={420} height={60} />
              </div>
              <div className="rounded-xl p-3" style={{ background: surface, border: `1px solid ${hexA(P, 0.1)}` }}>
                <div className="text-[11px] font-medium mb-2" style={{ color: theme.text }}>Holdings · 8 properties</div>
                <div className="space-y-1.5">
                  {[
                    { n: 'Brooklyn Lofts', v: '$4,200', d: '+12%', c: '#00E676' },
                    { n: 'Austin Residences', v: '$3,800', d: '+18%', c: '#00E676' },
                    { n: 'Miami Waterfront', v: '$2,940', d: '+8%', c: '#00E676' },
                  ].map((h) => (
                    <div key={h.n} className="flex items-center justify-between text-[10px]">
                      <span style={{ color: theme.text }}>{h.n}</span>
                      <div className="flex gap-3"><span style={{ color: M }}>{h.v}</span><span style={{ color: h.c }}>{h.d}</span></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    // ============ DISCOVERY (travel) ============
    case 'discovery':
      return (
        <div className={wrap} style={st}>
          <StatusBar theme={theme} />
          <div className="px-5 pt-3">
            <div className="font-display font-bold text-lg" style={{ color: theme.text }}>Discover</div>
            <div className="text-[11px]" style={{ color: M }}>Where to next?</div>
          </div>
          {/* search bar */}
          <div className="mx-5 mt-3 rounded-2xl p-3" style={{ background: surface, border: `1px solid ${hexA(P, 0.18)}` }}>
            <div className="flex items-center gap-2 text-[11px]">
              <span style={{ color: P }}>✦</span>
              <span style={{ color: M }}>A weekend in Lisbon, foodie</span>
            </div>
            <div className="flex gap-1.5 mt-2">
              <span className="text-[9px] px-2 py-1 rounded-full" style={{ background: hexA(P, 0.12), color: P }}>Generate trip ✨</span>
            </div>
          </div>
          {/* featured destinations */}
          <div className="mt-4">
            <div className="px-5 text-[11px] font-medium mb-2" style={{ color: theme.text }}>Trending now</div>
            <div className="flex gap-2.5 px-5 overflow-x-auto">
              {[
                { n: 'Lisbon', c: P, sub: 'Portugal' },
                { n: 'Kyoto', c: S, sub: 'Japan' },
                { n: 'Marrakech', c: A, sub: 'Morocco' },
                { n: 'Reykjavik', c: '#FFB020', sub: 'Iceland' },
              ].map((d) => (
                <div key={d.n} className="flex-shrink-0 w-28 rounded-2xl overflow-hidden" style={{ background: surface, border: `1px solid ${hexA(d.c, 0.15)}` }}>
                  <div className="h-20 relative" style={{ background: `linear-gradient(135deg, ${hexA(d.c, 0.5)}, ${hexA(d.c, 0.2)})` }}>
                    <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(circle at 50% 40%, #fff, transparent 60%)' }} />
                  </div>
                  <div className="p-2">
                    <div className="text-[11px] font-medium" style={{ color: theme.text }}>{d.n}</div>
                    <div className="text-[9px]" style={{ color: M }}>{d.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* curated */}
          <div className="px-5 mt-4">
            <div className="text-[11px] font-medium mb-2" style={{ color: theme.text }}>For you</div>
            <div className="rounded-2xl p-3 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${hexA(P, 0.3)}, ${hexA(A, 0.2)})`, border: `1px solid ${hexA(P, 0.2)}` }}>
              <div className="text-[10px]" style={{ color: M }}>3-day trip</div>
              <div className="font-display font-bold text-base" style={{ color: theme.text }}>Lisbon for foodies</div>
              <div className="text-[10px] mt-1" style={{ color: M }}>Pastéis, twilight fado, and a ferry to the coast.</div>
              <div className="flex gap-2 mt-2">
                <span className="text-[9px] px-2 py-0.5 rounded-full" style={{ background: hexA(P, 0.2), color: P }}>$640 / person</span>
                <span className="text-[9px] px-2 py-0.5 rounded-full" style={{ background: hexA('#fff', 0.1), color: theme.text }}>12 spots</span>
              </div>
            </div>
          </div>
        </div>
      );

    // ============ SEARCH ============
    case 'search':
      return (
        <div className={wrap} style={st}>
          <StatusBar theme={theme} />
          <div className="px-5 pt-3">
            <div className="font-display font-bold text-base" style={{ color: theme.text }}>Search</div>
          </div>
          <div className="mx-5 mt-3 rounded-2xl p-3 space-y-2" style={{ background: surface, border: `1px solid ${hexA(P, 0.15)}` }}>
            {[
              { l: 'Where', v: 'Lisbon, Portugal' },
              { l: 'When', v: 'Oct 4 — Oct 8' },
              { l: 'Who', v: '2 travelers' },
            ].map((f) => (
              <div key={f.l} className="flex items-center justify-between text-[11px]">
                <span style={{ color: M }}>{f.l}</span>
                <span style={{ color: theme.text }}>{f.v}</span>
              </div>
            ))}
            <div className="rounded-xl py-2.5 text-center text-[12px] font-medium" style={{ background: `linear-gradient(135deg, ${P}, ${A})`, color: '#fff' }}>Search</div>
          </div>
          <div className="px-5 mt-4">
            <div className="text-[11px] font-medium mb-2" style={{ color: theme.text }}>Flights + stays</div>
            <div className="space-y-2">
              {[
                { n: 'TAP Air Portugal', t: '6h 40m · 1 stop', p: '$420', c: P },
                { n: 'Lufthansa', t: '7h 10m · 1 stop', p: '$510', c: S },
                { n: 'Iberia', t: '5h 50m · direct', p: '$580', c: A },
              ].map((f) => (
                <div key={f.n} className="rounded-xl p-3 flex items-center justify-between" style={{ background: surface, border: `1px solid ${hexA(f.c, 0.15)}` }}>
                  <div>
                    <div className="text-[11px] font-medium" style={{ color: theme.text }}>{f.n}</div>
                    <div className="text-[9px]" style={{ color: M }}>{f.t}</div>
                  </div>
                  <div className="text-[12px] font-semibold" style={{ color: f.c }}>{f.p}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    // ============ DETAIL (travel destination / RE deal) ============
    case 'detail':
      return (
        <div className={wrap} style={st}>
          <StatusBar theme={theme} />
          <div className="h-32 relative" style={{ background: `linear-gradient(135deg, ${hexA(P, 0.5)}, ${hexA(A, 0.3)})` }}>
            <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(circle at 50% 40%, #fff, transparent 60%)' }} />
            <div className="absolute bottom-2 left-5 right-5 flex items-center justify-between">
              <span className="text-[10px] px-2 py-1 rounded-full" style={{ background: hexA('#000', 0.4), color: '#fff' }}>‹ Back</span>
              <span className="text-[10px] px-2 py-1 rounded-full" style={{ background: hexA('#000', 0.4), color: '#fff' }}>♥ Save</span>
            </div>
          </div>
          <div className="px-5 mt-3">
            <div className="font-display font-bold text-lg" style={{ color: theme.text }}>Lisbon</div>
            <div className="text-[11px]" style={{ color: M }}>Portugal · 3-day foodie trip</div>
          </div>
          <div className="px-5 mt-3 flex gap-1.5 overflow-x-auto">
            {['Overview', 'Itinerary', 'Stays', 'Food'].map((t, i) => (
              <span key={t} className="text-[10px] px-3 py-1.5 rounded-full whitespace-nowrap" style={{ background: i === 0 ? P : surface, color: i === 0 ? '#fff' : M }}>{t}</span>
            ))}
          </div>
          <div className="px-5 mt-3 space-y-2">
            {[
              { d: 'Day 1', t: 'Alfama wander + fado night', c: P },
              { d: 'Day 2', t: 'Time Out Market + riverside', c: S },
              { d: 'Day 3', t: 'Belém + ferry to the coast', c: A },
            ].map((it) => (
              <div key={it.d} className="rounded-xl p-3" style={{ background: surface, border: `1px solid ${hexA(it.c, 0.18)}` }}>
                <div className="text-[10px]" style={{ color: it.c }}>{it.d}</div>
                <div className="text-[11px] font-medium mt-0.5" style={{ color: theme.text }}>{it.t}</div>
              </div>
            ))}
          </div>
        </div>
      );

    // ============ ITINERARY ============
    case 'itinerary':
      return (
        <div className={wrap} style={st}>
          <div className="flex h-full">
            <div className="w-32 border-r p-3" style={{ borderColor: hexA(P, 0.1), background: hexA(surface, 0.4) }}>
              <div className="text-[10px] font-medium mb-2" style={{ color: theme.text }}>Days</div>
              {['Day 1', 'Day 2', 'Day 3', 'Day 4'].map((d, i) => (
                <div key={d} className="rounded-lg px-2 py-2 text-[10px] mb-1" style={{ background: i === 0 ? hexA(P, 0.14) : 'transparent', color: i === 0 ? P : M }}>{d}</div>
              ))}
            </div>
            <div className="flex-1 overflow-hidden p-4">
              <div className="font-display font-semibold text-sm" style={{ color: theme.text }}>Day 1 · Alfama</div>
              <div className="text-[10px] mb-3" style={{ color: M }}>4 stops · 2.4 km walk</div>
              <div className="space-y-2.5">
                {[
                  { t: '09:00', n: 'Breakfast at A Padaria Portuguesa', c: P, kind: 'Food' },
                  { t: '11:00', n: 'São Jorge Castle', c: S, kind: 'Sight' },
                  { t: '13:30', n: 'Lunch at Taberna da Rua das Flores', c: A, kind: 'Food' },
                  { t: '20:00', n: 'Fado at Mesa de Frades', c: '#FFB020', kind: 'Music' },
                ].map((s) => (
                  <div key={s.t} className="rounded-xl p-3 flex gap-3" style={{ background: surface, border: `1px solid ${hexA(s.c, 0.18)}` }}>
                    <div className="text-[10px] font-mono" style={{ color: M }}>{s.t}</div>
                    <div className="flex-1">
                      <div className="text-[11px] font-medium" style={{ color: theme.text }}>{s.n}</div>
                      <div className="text-[9px] mt-0.5" style={{ color: s.c }}>{s.kind}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );

    // ============ BOOKING ============
    case 'booking':
      return (
        <div className={wrap} style={st}>
          <StatusBar theme={theme} />
          <div className="px-5 pt-3">
            <div className="font-display font-bold text-base" style={{ color: theme.text }}>Confirm & book</div>
          </div>
          <div className="px-5 mt-3 space-y-2">
            <div className="rounded-xl p-3" style={{ background: surface, border: `1px solid ${hexA(P, 0.15)}` }}>
              <div className="text-[10px]" style={{ color: M }}>Flight</div>
              <div className="text-[11px] font-medium" style={{ color: theme.text }}>TAP Portugal · $420</div>
              <div className="text-[9px]" style={{ color: M }}>Oct 4 → Oct 8 · 2 travelers</div>
            </div>
            <div className="rounded-xl p-3" style={{ background: surface, border: `1px solid ${hexA(P, 0.15)}` }}>
              <div className="text-[10px]" style={{ color: M }}>Stay</div>
              <div className="text-[11px] font-medium" style={{ color: theme.text }}>Casa do Príncipe · $184/night</div>
              <div className="text-[9px]" style={{ color: M }}>4 nights · $736</div>
            </div>
            <div className="rounded-xl p-3" style={{ background: surface, border: `1px solid ${hexA(P, 0.15)}` }}>
              <div className="text-[10px]" style={{ color: M }}>Experiences</div>
              <div className="text-[11px] font-medium" style={{ color: theme.text }}>Fado night + food tour</div>
              <div className="text-[9px]" style={{ color: M }}>$120</div>
            </div>
          </div>
          <div className="px-5 mt-3 rounded-xl p-3 flex justify-between" style={{ background: hexA(P, 0.08), border: `1px solid ${hexA(P, 0.18)}` }}>
            <span className="text-[11px] font-semibold" style={{ color: theme.text }}>Total</span>
            <span className="text-[11px] font-semibold" style={{ color: P }}>$1,276</span>
          </div>
          <div className="absolute bottom-5 left-5 right-5 rounded-xl py-3 text-center text-[12px] font-medium" style={{ background: `linear-gradient(135deg, ${P}, ${A})`, color: '#fff' }}>Book in one tap</div>
        </div>
      );

    default:
      return null;
  }
}
