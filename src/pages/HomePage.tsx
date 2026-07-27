import { Hero } from '@/components/sections/Hero';
import { Marquee } from '@/components/sections/Marquee';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Projects } from '@/components/sections/Projects';
import { DesignSystem } from '@/components/sections/DesignSystem';
import { Contact } from '@/components/sections/Contact';

export function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Projects />
      <DesignSystem />
      <Contact />
    </>
  );
}
