import { motion } from 'framer-motion';
import type { Project } from '@/data/types';
import { Mockup } from '@/components/mockups';
import { BrowserFrame, IPhoneFrame, IPadFrame, WatchFrame, BannerFrame } from './DeviceFrames';

interface Props {
  project: Project;
  frame?: 'desktop' | 'tablet' | 'mobile' | 'watch' | 'banner';
  screenKind?: string;
  className?: string;
  url?: string;
}

/** Renders a project's cover screen inside the appropriate device frame. */
export function ProjectCover({ project, frame, screenKind, className = '', url }: Props) {
  const f = frame ?? project.heroDevice;
  const kind = screenKind ? (screenKind as any) : project.cover;
  const screen = <Mockup kind={kind} theme={project.theme} />;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {f === 'desktop' && <BrowserFrame url={url ?? `${project.slug}.app`}>{screen}</BrowserFrame>}
      {f === 'mobile' && <IPhoneFrame>{screen}</IPhoneFrame>}
      {f === 'tablet' && <IPadFrame>{screen}</IPadFrame>}
      {f === 'watch' && <WatchFrame>{screen}</WatchFrame>}
      {f === 'banner' && <BannerFrame>{screen}</BannerFrame>}
    </motion.div>
  );
}
