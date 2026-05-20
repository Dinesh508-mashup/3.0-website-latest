import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.fade-up'));
    if (!els.length) return;

    const reveal = (el) => el.classList.add('in');
    const inView = (el) => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight && r.bottom > 0;
    };
    els.forEach((el) => {
      if (inView(el)) reveal(el);
    });

    if (typeof IntersectionObserver === 'undefined') {
      els.forEach(reveal);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -5% 0px' },
    );
    els.forEach((el) => {
      if (!el.classList.contains('in')) io.observe(el);
    });

    const fallback = setTimeout(() => {
      els.forEach(reveal);
      io.disconnect();
    }, 1200);

    return () => {
      clearTimeout(fallback);
      io.disconnect();
    };
  }, []);
}
