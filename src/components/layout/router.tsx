import { useEffect, useState, useCallback } from 'react';

/** Minimal hash-based router — no external dependency. */
export function useHashRoute(): [string, (to: string) => void] {
  const [path, setPath] = useState(() => normalize(window.location.hash));

  useEffect(() => {
    const onChange = () => {
      setPath(normalize(window.location.hash));
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  const navigate = useCallback((to: string) => {
    if (to.startsWith('/')) {
      window.location.hash = to;
    } else {
      window.location.hash = '/' + to;
    }
  }, []);

  return [path, navigate];
}

function normalize(hash: string): string {
  if (!hash || hash === '#') return '/';
  return hash.replace(/^#/, '');
}

export function Link({
  to,
  children,
  className,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={`#${to}`}
      className={className}
      onClick={(e) => {
        // allow modifier-click to open normally
        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
        e.preventDefault();
        window.location.hash = to;
        window.scrollTo({ top: 0, behavior: 'auto' });
        onClick?.();
      }}
    >
      {children}
    </a>
  );
}
