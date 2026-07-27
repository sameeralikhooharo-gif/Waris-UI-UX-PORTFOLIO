import { ArrowUpRight, Dribbble, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from './router';

export function Footer() {
  return (
    <footer className="relative border-t border-border mt-32">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-80 w-[80%] rounded-full blur-[120px] bg-primary/10" />
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        {/* cta band */}
        <div className="glass rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.25em] text-text-2 mb-3">Let’s build something timeless</div>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tightest text-balance">
                Have a product<br />worth obsessing over?
              </h2>
            </div>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-white text-bg px-6 py-3.5 font-medium hover:scale-[1.02] transition-transform"
            >
              Start a project
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>

        {/* columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center font-display font-bold text-white text-sm">W</div>
              <span className="font-display font-bold text-white">Muhammad Waris</span>
            </div>
            <p className="text-sm text-text-2 max-w-xs leading-relaxed">
              Senior UI/UX Designer crafting luxury digital product experiences for ambitious teams worldwide.
            </p>
          </div>

          {[
            { h: 'Navigate', links: [['Work', '/#work'], ['About', '/#about'], ['Services', '/#services'], ['System', '/#system']] },
            { h: 'Projects', links: [['Nexus AI', '/project/nexus-ai-dashboard'], ['Vault', '/project/vault-mobile-banking'], ['Meridian', '/project/meridian-patient-portal'], ['Wander', '/project/wander-travel-booking']] },
            { h: 'Connect', links: [['Contact', '/#contact'], ['Email', 'mailto:hello@waris.design'], ['Calendly', '/#contact'], ['Resume', '/#contact']] },
          ].map((col) => (
            <div key={col.h}>
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-text-3 mb-4">{col.h}</div>
              <ul className="space-y-2.5">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <Link to={href} className="text-sm text-text-2 hover:text-white transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border">
          <p className="text-xs text-text-3">© 2025 Muhammad Waris. Designed & built with obsession.</p>
          <div className="flex items-center gap-3">
            {[
              { Icon: Dribbble, label: 'Dribbble' },
              { Icon: Twitter, label: 'Twitter' },
              { Icon: Linkedin, label: 'LinkedIn' },
              { Icon: Github, label: 'GitHub' },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-text-2 hover:text-white hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
