import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

/** A floating MacBook frame. */
export function MacBookFrame({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative rounded-[14px] bg-gradient-to-b from-[#2a2d36] to-[#1b1e26] p-[3px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.04)]">
        <div className="relative overflow-hidden rounded-[11px] bg-black aspect-[16/10]">
          {/* webcam */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-[#333] z-10" />
          {children}
        </div>
      </div>
      {/* hinge */}
      <div className="h-[6px] bg-gradient-to-b from-[#1b1e26] to-[#15171e] rounded-b-[4px] mx-[-2px]" />
      {/* base */}
      <div className="relative h-[14px] bg-gradient-to-b from-[#15171e] to-[#0d0e12] rounded-b-[10px] flex items-center justify-center">
        <div className="h-[3px] w-[20%] bg-black/40 rounded-full" />
      </div>
    </div>
  );
}

/** iPhone frame with dynamic island. */
export function IPhoneFrame({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative rounded-[42px] bg-gradient-to-b from-[#2a2d36] to-[#16181f] p-[8px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.04)]">
        {/* side buttons */}
        <div className="absolute -left-[2px] top-[110px] h-8 w-[3px] rounded-l bg-[#16181f]" />
        <div className="absolute -left-[2px] top-[160px] h-12 w-[3px] rounded-l bg-[#16181f]" />
        <div className="absolute -left-[2px] top-[220px] h-12 w-[3px] rounded-l bg-[#16181f]" />
        <div className="absolute -right-[2px] top-[170px] h-16 w-[3px] rounded-r bg-[#16181f]" />
        <div className="relative overflow-hidden rounded-[34px] bg-black aspect-[9/19.5]">
          {/* dynamic island */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 h-[26px] w-[78px] rounded-full bg-black" />
          {children}
        </div>
      </div>
    </div>
  );
}

/** iPad frame. */
export function IPadFrame({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative rounded-[22px] bg-gradient-to-b from-[#2a2d36] to-[#16181f] p-[7px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.04)]">
        <div className="relative overflow-hidden rounded-[16px] bg-black aspect-[4/3]">
          {children}
        </div>
      </div>
    </div>
  );
}

/** Apple Watch frame. */
export function WatchFrame({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative rounded-[34px] bg-gradient-to-b from-[#2a2d36] to-[#16181f] p-[6px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]">
        <div className="relative overflow-hidden rounded-[28px] bg-black aspect-square w-[180px]">
          {/* crown */}
          <div className="absolute -right-[10px] top-[40%] h-7 w-[8px] rounded-md bg-[#16181f]" />
          <div className="absolute -right-[10px] top-[62%] h-5 w-[8px] rounded-full bg-[#16181f]" />
          {children}
        </div>
      </div>
    </div>
  );
}

/** A clean browser window frame for desktop dashboard / landing mockups. */
export function BrowserFrame({ children, className = '', url = 'app.studio.io' }: { children: ReactNode; className?: string; url?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative rounded-2xl border border-border-2 bg-card overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
        {/* browser chrome */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-surface/80 backdrop-blur">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1 text-xs text-text-2 font-mono">
              <span className="h-2 w-2 rounded-full bg-success/60" />
              {url}
            </div>
          </div>
          <div className="w-12" />
        </div>
        {/* content */}
        <div className="relative bg-black">{children}</div>
      </div>
    </div>
  );
}

/** A wide banner / marketing frame. */
export function BannerFrame({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={`relative rounded-2xl border border-border-2 bg-card overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] ${className}`}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}

/** Picks the right frame for a screen spec. */
export function DeviceFrame({ frame, children, className = '', url }: { frame: 'desktop' | 'tablet' | 'mobile' | 'watch' | 'banner'; children: ReactNode; className?: string; url?: string }) {
  switch (frame) {
    case 'desktop':
      return <BrowserFrame className={className} url={url}>{children}</BrowserFrame>;
    case 'tablet':
      return <IPadFrame className={className}>{children}</IPadFrame>;
    case 'mobile':
      return <IPhoneFrame className={className}>{children}</IPhoneFrame>;
    case 'watch':
      return <WatchFrame className={className}>{children}</WatchFrame>;
    case 'banner':
      return <BannerFrame className={className}>{children}</BannerFrame>;
  }
}
