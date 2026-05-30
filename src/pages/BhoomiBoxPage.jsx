import { Link } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import { PageFooter } from '@/shell/PageFooter';
import { PageHero } from '@/shell/PageHero';
import { PageNavbar } from '@/shell/PageNavbar';
import { Arrow, Eyebrow } from '@/components';
import bhoomiboxCover from '@/portfolio/assets/bhoomibox.svg';
import '@/portfolio/bhoomibox/bhoomibox.css';

/* ── Static data ───────────────────────────────────────────── */

const PILLARS = [
  'Transparent pricing',
  'Premium quality',
  'Field-to-kitchen traceability',
  'Locally sourced produce',
  'Direct farmer connection',
];

const MISSION_VALUES = [
  'Transparent Pricing',
  'Premium Quality',
  'Field-to-Kitchen Traceability',
  'No Middleman',
  'Fair Share for Farmers',
];

const NAV_SCREENS = [
  { src: '/bhoomibox/nav-splash.png',        label: 'Splash Screen' },
  { src: '/bhoomibox/nav-signin.png',         label: 'Sign In' },
  { src: '/bhoomibox/nav-home.png',           label: 'Home' },
  { src: '/bhoomibox/nav-harvest.png',        label: 'Curating Harvest' },
  { src: '/bhoomibox/nav-farmer-story.png',   label: 'Farmer Story' },
  { src: '/bhoomibox/nav-farmerstory.png',    label: 'Farmer Profile' },
  { src: '/bhoomibox/nav-farmer-prof.png',    label: 'Farmer Details' },
  { src: '/bhoomibox/nav-members.png',        label: 'Members' },
];

/* ── Page component ─────────────────────────────────────────── */

export default function BhoomiBoxPage() {
  useReveal();

  return (
    <>
      <title>Bhoomi Box — Case Study · 3.0 Labs</title>
      <meta
        name="description"
        content="Bhoomi Box — a direct-to-consumer platform connecting urban families with local farmers. Transparent pricing, premium quality, and full traceability from field to kitchen."
      />

      <PageNavbar active="portfolio" />

      {/* ── 01 Hero ──────────────────────────────────────────── */}
      <div className="bb-hero-wrap">
        <PageHero
          index="01"
          kicker="Bhoomi Box"
          title={{
            before: 'Engineering a direct bridge between urban families and ',
            after: '.',
          }}
          italicWord="local farmers"
          sub="A direct-to-consumer platform connecting farmers directly to urban families — ensuring transparent pricing, premium quality, and traceability from field to kitchen."
          meta={[
            ['Platform', 'D2C Mobile'],
            ['Target',   'Urban Families'],
            ['Model',    'Farm-to-Family'],
            ['Industry', 'AgriTech'],
          ]}
        />
      </div>

      {/* ── 02 Cover ─────────────────────────────────────────── */}
      <section className="section bb-cover-section" data-screen-label="02 Cover">
        <div className="wrap">
          <div className="bb-cover-frame fade-up">
            <img
              src={bhoomiboxCover}
              alt="Bhoomi Box — farm-to-family mobile platform"
              loading="eager"
            />
          </div>
          <div className="filter-bar bb-tag-bar fade-up">
            {[
              'Farm-to-Family',
              'D2C Platform',
              'Mobile UX',
              'AgriTech',
              'Transparent Pricing',
              'Urban Families',
            ].map((tag) => (
              <span className="chip" key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 Context ───────────────────────────────────────── */}
      <section className="section paper" data-screen-label="03 Context">
        <div className="wrap">
          <div className="sec-head fade-up">
            <div>
              <Eyebrow>03 / Context</Eyebrow>
              <h2>Context</h2>
            </div>
          </div>
          <div className="bb-context-grid">
            <div className="bb-context-text fade-up">
              <p>
                Bhoomibox is reimagining how Indian families buy staples. Our
                direct-to-consumer platform connects farmers directly to your door, ensuring
                transparent pricing, premium quality, and traceability from field to kitchen.
              </p>
              <p>
                The target users for this app are high-income urban families who value purity,
                quality, and locally sourced food.
              </p>
            </div>
            <div className="bb-pillars-card fade-up" style={{ transitionDelay: '80ms' }}>
              <span className="bb-pillars-label">Platform Pillars</span>
              <ul className="bb-pillars-list">
                {PILLARS.map((pillar) => (
                  <li className="bb-pillar-item" key={pillar}>
                    <span className="bb-pillar-dot" aria-hidden="true" />
                    {pillar}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04 App Frames ────────────────────────────────────── */}
      <section className="section" data-screen-label="04 App Frames">
        <div className="wrap">
          <div className="sec-head fade-up">
            <div>
              <Eyebrow>04 / App Screens</Eyebrow>
              <h2>Designed for every touchpoint</h2>
            </div>
            <div className="right">
              A clean, intuitive mobile experience that guides users from discovery to
              doorstep — with full transparency at every step.
            </div>
          </div>
          <div className="bb-frames-duo fade-up">
            <div className="bb-frame-wrap">
              <img src="/bhoomibox/frame-1.png" alt="App screen 1" className="bb-frame-img" />
            </div>
            <div className="bb-frame-wrap">
              <img src="/bhoomibox/frame-2.png" alt="App screen 2" className="bb-frame-img" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 06 Navigation Screens ────────────────────────────── */}
      <section className="section" data-screen-label="06 Navigation Screens">
        <div className="wrap">
          <div className="sec-head fade-up">
            <div>
              <Eyebrow>06 / User Journey</Eyebrow>
              <h2>Screen-by-screen journey</h2>
            </div>
            <div className="right">
              From splash to checkout — every screen crafted for clarity, trust, and ease of
              use across all demographics.
            </div>
          </div>
          <div className="bb-nav-screens-grid">
            {NAV_SCREENS.map((s, i) => (
              <div
                className="bb-nav-screen-wrap fade-up"
                key={s.label}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <img src={s.src} alt={s.label} className="bb-nav-screen-img" />
                <span className="bb-nav-screen-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 07 Mission ───────────────────────────────────────── */}
      <section className="section paper" data-screen-label="07 Mission">
        <div className="wrap">
          <div className="bb-mission-card fade-up">
            <div>
              <Eyebrow>07 / Mission</Eyebrow>
              <h2 className="bb-mission-heading">Connecting Users to Farmers</h2>
              <p className="bb-mission-body">
                Eliminate the Middleman and help Farmers get their fair share without paying
                more than what you should pay.
              </p>
            </div>
            <ul className="bb-mission-values">
              {MISSION_VALUES.map((value) => (
                <li className="bb-mission-value" key={value}>
                  <span className="bb-mission-value-dot" aria-hidden="true" />
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 08 Back to portfolio ─────────────────────────────── */}
      <section className="section portfolio-next" data-screen-label="08 CTA">
        <div className="wrap">
          <div className="portfolio-next-card fade-up">
            <div>
              <Eyebrow>Explore More</Eyebrow>
              <h2>
                See all
                <br />
                <span className="ital-gradient">case studies</span>
              </h2>
            </div>
            <p>
              Seven production builds across AI learning, government skilling, NGO field
              operations, agritech, and fintech — each one solving a real operational problem.
            </p>
            <Link to="/portfolio" className="btn btn-dark">
              Back to portfolio <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <PageFooter />
    </>
  );
}
