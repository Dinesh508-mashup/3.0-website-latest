import { Link, NavLink } from 'react-router-dom';
import { MobileNav } from '@/components/MobileNav';

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/team', label: 'Teams' },
  { to: '/contact', label: 'Contact us' },
];

export function Navbar() {
  return (
    <div className="nav-shell">
      <nav className="nav">
        <Link to="/" className="logo" aria-label="3.0 Labs — home">
          <img src="/Images/Logo.png" alt="3.0 Labs" className="logo-mark" />
        </Link>
        <div className="links">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {l.label}
            </NavLink>
          ))}
        </div>
        <Link to="/contact" className="cta nav-cta-desktop">
          <span className="dot"></span>
          Start a Project
        </Link>
        <MobileNav links={LINKS} />
      </nav>
    </div>
  );
}
