import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// On route change:
//   - no hash    → scroll to top
//   - has hash   → smooth-scroll to the element with that id, accounting for
//                  the sticky navbar.  Polls briefly so lazy-loaded routes
//                  still land on the right section.
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    const OFFSET = 100; // matches the sticky-nav clearance used by in-page jumps

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (!el) return false;
      const top = el.getBoundingClientRect().top + window.scrollY - OFFSET;
      window.scrollTo({ top, left: 0, behavior: 'smooth' });
      return true;
    };

    // First attempt — content might already be there
    if (tryScroll()) return;

    // Otherwise poll for up to ~1.6s while the lazy chunk + content mount
    let attempts = 0;
    const interval = setInterval(() => {
      attempts += 1;
      if (tryScroll() || attempts >= 20) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, [pathname, hash]);

  return null;
}
