import { Link } from 'react-router-dom';
import { Arrow, Eyebrow, PixelGradient } from '@/components';

export function Hero() {
  return (
    <section className="hero" data-screen-label="01 Hero">
      <div className="wrap">
        <div className="hero-grid">
          <div className="col fade-up">
            <Eyebrow>3.0 Labs · AI Product Studio · Est. 2021</Eyebrow>
            <h1>
              Engineering
              <br />
              ideas into
              <br />
              <span className="ital">intelligent</span> products
            </h1>
            <p className="sub">
              We design and ship AI-powered software — full-stack applications, automation
              workflows, and autonomous agents — for founders building what&apos;s next.
            </p>
            <div className="hero-actions">
              <a href="#case" className="btn btn-ghost">
                Explore our latest AI case study <Arrow />
              </a>
              <Link to="/contact" className="btn btn-dark">
                Let&apos;s collaborate <Arrow />
              </Link>
            </div>
          </div>
          <div className="col">
            <PixelGradient />
          </div>
        </div>
      </div>
    </section>
  );
}
