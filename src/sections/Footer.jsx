import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="footer" data-screen-label="07 Footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="brand">3.0 Labs</div>
            <p style={{ color: 'var(--ink-soft)', maxWidth: 260, marginTop: 14, fontSize: 14 }}>
              An AI product studio engineering scalable software, workflows, and agents for
              founders.
            </p>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/team">About us</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/team">Careers</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:nithin@threepointolabs.com">nithin@threepointolabs.com</a>
              </li>
              <li>
                <a href="#">@threezerolabs</a>
              </li>
              <li>
                <a href="#">LinkedIn ↗</a>
              </li>
              <li>
                <a href="#">Bengaluru, India</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <span>© 2025 3.0 Labs. All rights reserved.</span>
          <span
            className="font-mono"
            style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase' }}
          >
            Built in-house · v3.0
          </span>
        </div>
      </div>
    </footer>
  );
}
