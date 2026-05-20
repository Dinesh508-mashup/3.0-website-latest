import { Link, NavLink } from 'react-router-dom';
import { MobileNav } from '@/components/MobileNav';

const LINKS = [
  { to: '/', label: 'Home', key: 'home', end: true },
  { to: '/services', label: 'Services', key: 'services' },
  { to: '/portfolio', label: 'Portfolio', key: 'portfolio' },
  { to: '/team', label: 'Teams', key: 'team' },
  { to: '/contact', label: 'Contact us', key: 'contact' },
];

export function PageNavbar({ active }) {
  return (
    <div className="nav-shell">
      <nav className="nav">
        <Link to="/" className="logo" aria-label="3.0 Labs — home">
          <img src="/Images/Logo.png" alt="3.0 Labs" className="logo-mark" />
        </Link>
        <div className="links">
          {LINKS.map((l) =>
            active ? (
              <Link key={l.key} to={l.to} className={active === l.key ? 'active' : ''}>
                {l.label}
              </Link>
            ) : (
              <NavLink
                key={l.key}
                to={l.to}
                end={l.end}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {l.label}
              </NavLink>
            ),
          )}
        </div>
        <Link to="/contact" className="cta nav-cta-desktop">
          <span className="dot"></span>
          Start a Project
        </Link>
        <MobileNav links={LINKS} activeKey={active} />
      </nav>
    </div>
  );
}
