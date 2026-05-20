import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export function MobileNav({ links, activeKey }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Body scroll lock + Esc to close
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const isActive = (l) => {
    if (activeKey) return activeKey === l.key;
    if (l.end) return location.pathname === l.to;
    return location.pathname.startsWith(l.to);
  };

  return (
    <>
      <button
        type="button"
        className={`nav-toggle ${open ? 'open' : ''}`}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-nav-dropdown"
        onClick={() => setOpen((v) => !v)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        className={`nav-overlay ${open ? 'show' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      ></div>

      <div
        id="mobile-nav-dropdown"
        className={`nav-dropdown ${open ? 'open' : ''}`}
        role="menu"
        aria-hidden={!open}
      >
        <nav className="nav-dropdown-links">
          {links.map((l) =>
            activeKey ? (
              <Link
                key={l.key ?? l.to}
                to={l.to}
                role="menuitem"
                className={isActive(l) ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                role="menuitem"
                className={({ isActive: a }) => (a ? 'active' : '')}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ),
          )}
        </nav>
        <div className="nav-dropdown-cta">
          <Link to="/contact" className="cta" onClick={() => setOpen(false)}>
            <span className="dot"></span>
            Start a Project
          </Link>
        </div>
      </div>
    </>
  );
}
