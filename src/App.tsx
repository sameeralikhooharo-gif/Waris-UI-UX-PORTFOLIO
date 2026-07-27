import { AnimatePresence, motion } from 'framer-motion';
import { AuroraBackground } from '@/components/layout/AuroraBackground';
import { Cursor } from '@/components/layout/Cursor';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { useHashRoute } from '@/components/layout/router';
import { HomePage } from '@/pages/HomePage';
import { CaseStudyPage } from '@/pages/CaseStudyPage';

export default function App() {
  const [path] = useHashRoute();

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
            {isCaseStudy ? <CaseStudyPage slug={slug} /> : <HomePage />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
}
