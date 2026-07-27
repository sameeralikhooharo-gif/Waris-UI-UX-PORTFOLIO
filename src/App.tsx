import { AnimatePresence, motion } from 'framer-motion';
import { lazy, Suspense, useEffect } from 'react';
import { AuroraBackground } from '@/components/layout/AuroraBackground';
import { Cursor } from '@/components/layout/Cursor';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { useHashRoute } from '@/components/layout/router';
import { HomePage } from '@/pages/HomePage';
import { projectsBySlug } from '@/data';

const CaseStudyPage = lazy(() =>
  import('@/pages/CaseStudyPage').then((m) => ({ default: m.CaseStudyPage }))
);

const SITE_TITLE = 'Muhammad Waris | Senior UI/UX Designer Portfolio';
const SITE_DESCRIPTION =
  'Premium portfolio of Muhammad Waris, Senior UI/UX Designer specializing in SaaS, FinTech, Healthcare, Ecommerce and Travel digital experiences.';

function setMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setMetaProperty(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function useSEO(path: string) {
  useEffect(() => {
    const isCaseStudy = path.startsWith('/project/');
    const slug = isCaseStudy ? path.replace('/project/', '') : '';
    const project = slug ? projectsBySlug[slug] : null;

    const title = project ? `${project.title} — Case Study | Muhammad Waris` : SITE_TITLE;
    const description = project ? project.tagline : SITE_DESCRIPTION;

    document.title = title;
    setMeta('description', description);
    setMetaProperty('og:title', title);
    setMetaProperty('og:description', description);
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
  }, [path]);
}

export default function App() {
  const [path] = useHashRoute();
  useSEO(path);

  const isCaseStudy = path.startsWith('/project/');
  const slug = isCaseStudy ? path.replace('/project/', '') : '';

  return (
    <>
      <AuroraBackground />
      <Cursor />
      <Navbar />

      <main className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={isCaseStudy ? slug : 'home'}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {isCaseStudy ? (
              <Suspense fallback={<div className="min-h-screen" />}>
                <CaseStudyPage slug={slug} />
              </Suspense>
            ) : (
              <HomePage />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
}
