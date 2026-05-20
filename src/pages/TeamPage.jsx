import { Link } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import { Arrow, Eyebrow, NodeBadge } from '@/components';
import { PageNavbar } from '@/shell/PageNavbar';
import { PageFooter } from '@/shell/PageFooter';

const FOUNDERS = [
  {
    name: 'Nithin Varma M',
    role: 'Co-Founder',
    img: '/Images/Nithin.jpg',
    alt: 'Nithin Varma M — Co-founder portrait',
    bio: "Drives product vision and engineering at 3.0 Labs — most days he's the one stress-testing every spec against what 'shipped' actually means.",
    tag: 'Product · Engineering',
    linkedin: 'https://www.linkedin.com/in/nithin-varma-mekala-a5a471188/',
  },
  {
    name: 'Sai Kiran G L',
    role: 'Co-Founder',
    img: '/Images/sai-kiran-G.png',
    alt: 'Sai Kiran G L — Co-founder portrait',
    bio: 'Leads design and client partnerships — translates the early ambiguity of a brief into a roadmap clients can actually plan around.',
    tag: 'Design · Operations',
    linkedin: 'https://www.linkedin.com/in/saikiran193/',
  },
];

const MANAGEMENT = [
  { name: 'Srikar', role: 'Product Analyst', img: '/Images/srikar.jpeg' },
  { name: 'Griffin', role: 'Talent Acquisition', img: '/Images/Griffin.jpg' },
  { name: 'Aditya', role: 'Management', img: '/Images/aditya.webp' },
  { name: 'Anjana', role: 'Management', img: '/Images/Anajana.jpeg' },
];

const DEVELOPERS = [
  { name: 'Zuber', role: 'AI & Automation Engineer', img: '/Images/Zuber.jpg' },
  { name: 'Ashvith Adepu', role: 'AI & Automation Engineer', img: '/Images/Ashivth.jpg' },
  { name: 'Khan', role: 'AI & Automation Engineer', img: '/Images/Khan.jpeg' },
  { name: 'Mohammed Aqib', role: 'DevOps Engineer', img: '/Images/Aquib.jpg' },
  { name: 'Siva', role: 'AI Engineer', img: '/Images/siva.jpeg' },
  { name: 'Suraj', role: 'Backend Developer', img: '/Images/suraj.jpg' },
  { name: 'Sumanth N', role: 'Full Stack Developer', img: '/Images/sumanthn.jpg' },
  { name: 'Sampath', role: 'Frontend Developer', img: '/Images/Sampath.jpg' },
  { name: 'ManojKumar', role: 'Frontend Developer', img: '/Images/manoj.png' },
  { name: 'Srinivas K', role: 'Frontend Developer', img: '/Images/srinivas.jpg' },
  { name: 'Prem Kumar', role: 'Full Stack Developer', img: '/Images/prem.jpg' },
  { name: 'Arun Sai', role: 'Full Stack Developer', img: '/Images/arun.jpg' },
];

const DESIGN = [
  { name: 'Dinesh', role: 'UI/UX Designer', img: '/Images/Dinesh.jpg' },
  { name: 'Gratian', role: 'UI/UX Designer', img: '/Images/Gratian.jpg' },
];

function DirectorsSection() {
  return (
    <section className="dir-section" data-screen-label="01 Directors">
      <div className="wrap">
        <div className="dir-head fade-up">
          <div>
            <Eyebrow>Meet our founders</Eyebrow>
            <h2 className="dir-h2">
              Our
              <br />
              <span className="ital">Directors</span>
            </h2>
          </div>
          <div className="dir-head-right">
            <p>
              Two founders, one studio. Both stay close to the work — you&apos;ll meet at least one
              of them in the first call, and a different one before kickoff.
            </p>
            <div className="dir-stats font-mono">
              <span>
                <b>02</b> Co-founders
              </span>
              <span>
                <b>2021</b> Est.
              </span>
              <span>
                <b>20+</b> Builders
              </span>
            </div>
          </div>
        </div>

        <div className="dir-grid">
          {FOUNDERS.map((f, i) => (
            <article className="dir-card fade-up" key={f.name} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="dir-portrait">
                <img src={f.img} alt={f.alt} loading="lazy" />
                <div className="dir-portrait-overlay"></div>
                <div className="dir-portrait-glow" aria-hidden="true"></div>
              </div>
              <div className="dir-body">
                <div className="dir-role-row">
                  <span className="dir-role">{f.role}</span>
                </div>
                <h3 className="dir-name">{f.name}</h3>
                <p className="dir-bio">{f.bio}</p>
                <div className="dir-socials">
                  <a href={f.linkedin} target="_blank" rel="noopener noreferrer">
                    <span className="font-mono">LinkedIn</span>
                    <Arrow size={12} />
                  </a>
                  <a href="#">
                    <span className="font-mono">X / Twitter</span>
                    <Arrow size={12} />
                  </a>
                  <a href="mailto:nithin@threepointolabs.com">
                    <span className="font-mono">Email</span>
                    <Arrow size={12} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MemberCard({ m, index }) {
  return (
    <article className="mem-card fade-up" style={{ transitionDelay: `${(index % 4) * 60}ms` }}>
      <div className="mem-portrait">
        <img src={m.img} alt={`${m.name} portrait`} loading="lazy" />
        <div className="mem-portrait-overlay" aria-hidden="true"></div>
      </div>
      <div className="mem-body">
        <h4 className="mem-name">{m.name}</h4>
        <div className="mem-role font-mono">{m.role}</div>
      </div>
    </article>
  );
}

function CategoryBlock({ id, num, title, sub, members, cols = 4, compact = false }) {
  return (
    <div className={`team-cat ${compact ? 'compact' : ''}`} id={id} data-screen-label={`${num} ${title}`}>
      <div className="team-cat-head fade-up">
        <div className="team-cat-head-left">
          <NodeBadge num={num} accent />
          <div>
            <div className="font-mono team-cat-kicker">Category {num}</div>
            <h3 className="team-cat-h">{title}</h3>
          </div>
        </div>
        <div className="team-cat-head-right">
          <p>{sub}</p>
          <span className="font-mono team-cat-count">
            <b>{String(members.length).padStart(2, '0')}</b> members
          </span>
        </div>
      </div>
      <div className="team-mem-grid" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {members.map((m, i) => (
          <MemberCard key={`${m.name}-${i}`} m={m} index={i} />
        ))}
      </div>
    </div>
  );
}

function TeamSection() {
  return (
    <section className="team-section" data-screen-label="02 Team">
      <div className="wrap">
        <div className="team-head fade-up">
          <div>
            <Eyebrow>Our team</Eyebrow>
            <h2 className="team-h2">
              Meet our
              <br />
              team <span className="ital">members</span>
            </h2>
          </div>
          <div className="team-head-right">
            <p>
              Three pods — management, engineering, and design — all under one roof. We hire for
              taste, judgement, and the willingness to be wrong on Monday.
            </p>
            <div className="team-counts">
              <a href="#management" className="tcount-chip">
                <span className="font-mono">Management</span>
                <span className="tcount-n">{String(MANAGEMENT.length).padStart(2, '0')}</span>
              </a>
              <a href="#developers" className="tcount-chip">
                <span className="font-mono">Developers</span>
                <span className="tcount-n">{String(DEVELOPERS.length).padStart(2, '0')}</span>
              </a>
              <a href="#design" className="tcount-chip">
                <span className="font-mono">Design</span>
                <span className="tcount-n">{String(DESIGN.length).padStart(2, '0')}</span>
              </a>
            </div>
          </div>
        </div>

        <CategoryBlock
          id="management"
          num="01"
          title="Management"
          sub="Product analysis, operations, and the people who keep the studio moving."
          members={MANAGEMENT}
          cols={4}
        />
        <CategoryBlock
          id="developers"
          num="02"
          title="Developers"
          sub="AI, full-stack, frontend, and infra — the pod that ships the actual product."
          members={DEVELOPERS}
          cols={4}
        />
        <CategoryBlock
          id="design"
          num="03"
          title="Design"
          sub="Two designers, both engineers at heart. They own every pixel that ships."
          members={DESIGN}
          cols={4}
          compact
        />
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="case-cta" data-screen-label="CTA">
      <div className="wrap">
        <div className="case-cta-card fade-up">
          <div className="case-cta-grain" aria-hidden="true"></div>
          <div className="case-cta-glow" aria-hidden="true"></div>
          <Eyebrow>Build with us</Eyebrow>
          <h2 className="case-cta-h">
            One studio.
            <br />
            <span className="ital-gradient">Twenty-plus builders.</span>
          </h2>
          <p className="case-cta-sub">
            If you&apos;ve shipped something you&apos;re proud of — and a few things you aren&apos;t
            — send it over. We read everything. Or just bring a brief and let&apos;s build.
          </p>
          <div className="case-cta-actions">
            <Link to="/contact" className="case-cta-btn">
              Start a project
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="cta-up-arrow">
                <path
                  d="M4 12L12 4M12 4H6M12 4V10"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
          <div className="case-cta-foot">
            <span className="font-mono">nithin@threepointolabs.com</span>
            <span className="font-mono">Hyderabad · Remote · 20+ builders</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const teamStyles = `
  /* ---------- Directors section ---------- */
  .dir-section { padding: 80px 0 100px; }

  .dir-head {
    display: grid; grid-template-columns: 1fr 1fr; gap: 48px;
    align-items: end;
    margin-bottom: 64px;
    padding-bottom: 40px;
    border-bottom: 1px solid rgba(17,17,17,0.12);
  }
  @media (max-width: 980px) { .dir-head { grid-template-columns: 1fr; gap: 22px; } }
  .dir-h2 {
    font-family: "Space Grotesk", sans-serif; font-weight: 500;
    font-size: clamp(44px, 6vw, 88px); line-height: 0.98;
    letter-spacing: -0.04em; margin: 16px 0 0;
    text-wrap: pretty;
  }
  .dir-h2 .ital {
    font-style: italic; font-family: "Instrument Serif", "Space Grotesk", serif; font-weight: 400;
    background: linear-gradient(100deg, #F88E4B 0%, #BA2F58 100%);
    -webkit-background-clip: text; background-clip: text; color: transparent;
  }
  .dir-head-right { display: flex; flex-direction: column; gap: 12px; align-items: flex-start; }
  .dir-head-right p { font-size: 17px; color: var(--ink-soft); line-height: 1.55; margin: 0; max-width: 460px; }
  .dir-stats { display: flex; gap: 24px; flex-wrap: wrap; margin-top: 10px; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-soft); }
  .dir-stats b { color: var(--ink); font-weight: 500; margin-right: 6px; font-family: "Space Grotesk", sans-serif; }

  .dir-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
  @media (max-width: 980px) { .dir-grid { grid-template-columns: 1fr; gap: 22px; } }

  .dir-card {
    border: var(--bd); border-radius: var(--r-card);
    background: #fff;
    overflow: hidden;
    position: relative;
    display: flex; flex-direction: column;
    transition: transform 0.5s cubic-bezier(.2,.7,.2,1), box-shadow 0.5s, border-color 0.4s;
  }
  .dir-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 40px 70px -30px rgba(186,47,88,0.35), 0 0 0 1px rgba(248,142,75,0.40);
  }

  .dir-portrait { position: relative; aspect-ratio: 4 / 5; overflow: hidden; background: #111; border-bottom: var(--bd); }
  .dir-portrait img {
    position: absolute; inset: 0; width: 100%; height: 100%;
    object-fit: cover;
    transition: transform 1.4s cubic-bezier(.2,.7,.2,1), filter 0.6s;
    filter: saturate(0.85) contrast(1.05);
  }
  .dir-card:hover .dir-portrait img { transform: scale(1.05); filter: saturate(1.1) contrast(1.08); }
  .dir-portrait-overlay {
    position: absolute; inset: 0;
    background:
      radial-gradient(60% 80% at 20% 100%, rgba(17,17,17,0.55), transparent 70%),
      linear-gradient(180deg, rgba(17,17,17,0) 0%, rgba(17,17,17,0) 40%, rgba(17,17,17,0.55) 100%);
    pointer-events: none;
    transition: background 0.5s;
  }
  .dir-card:hover .dir-portrait-overlay {
    background:
      radial-gradient(70% 90% at 20% 100%, rgba(186,47,88,0.45), transparent 70%),
      linear-gradient(180deg, rgba(248,142,75,0.10) 0%, rgba(17,17,17,0) 35%, rgba(17,17,17,0.60) 100%);
  }
  .dir-portrait-glow {
    position: absolute;
    left: 50%; top: 100%;
    transform: translate(-50%, -45%);
    width: 380px; height: 380px;
    border-radius: 50%;
    background: radial-gradient(closest-side, rgba(248,142,75,0.55), transparent 70%);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.6s;
    filter: blur(16px);
  }
  .dir-card:hover .dir-portrait-glow { opacity: 1; }

  .dir-tag {
    position: absolute; left: 18px; top: 18px;
    padding: 6px 12px;
    font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
    background: rgba(255,255,255,0.88);
    border: 1px solid rgba(17,17,17,0.4);
    border-radius: 999px;
    color: var(--ink);
    z-index: 2;
  }
  .dir-cm {
    position: absolute; right: 18px; top: 18px;
    padding: 6px 12px;
    font-size: 11px; letter-spacing: 0.14em;
    background: rgba(17,17,17,0.55);
    color: #fff;
    border: 1px solid rgba(255,255,255,0.25);
    border-radius: 999px;
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    z-index: 2;
  }

  .dir-body { padding: 28px 30px 30px; display: flex; flex-direction: column; gap: 14px; }
  .dir-role-row { display: flex; align-items: center; gap: 14px; }
  .dir-role { font-family: "JetBrains Mono", monospace; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-soft); }
  .dir-name {
    font-family: "Space Grotesk", sans-serif; font-weight: 500;
    font-size: clamp(28px, 3.4vw, 40px);
    line-height: 1; letter-spacing: -0.03em;
    margin: 0;
    transition: color 0.3s;
  }
  .dir-card:hover .dir-name { color: var(--berry); }
  .dir-bio { font-size: 15px; color: var(--ink-soft); line-height: 1.55; margin: 4px 0 0; max-width: 460px; }
  .dir-socials { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 6px; }
  .dir-socials a {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 8px 14px;
    border: 1px solid var(--line);
    border-radius: 999px;
    font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
    transition: background 0.2s, color 0.2s, border-color 0.2s;
  }
  .dir-socials a:hover { background: var(--ink); color: #fff; border-color: var(--ink); }
  .dir-socials a .arrow { transition: transform 0.3s; }
  .dir-socials a:hover .arrow { transform: translate(2px, -2px); }

  /* ---------- Team section ---------- */
  .team-section { padding: 80px 0 100px; background: var(--paper); border-top: var(--bd); border-bottom: var(--bd); position: relative; }
  .team-section::before {
    content: ""; position: absolute; inset: 0; pointer-events: none;
    background: radial-gradient(40% 30% at 50% 0%, rgba(248,142,75,0.10), transparent 70%);
  }
  .team-section > * { position: relative; }

  .team-head {
    display: grid; grid-template-columns: 1fr 1fr; gap: 48px;
    align-items: end;
    margin-bottom: 64px;
    padding-bottom: 40px;
    border-bottom: 1px solid rgba(17,17,17,0.12);
  }
  @media (max-width: 980px) { .team-head { grid-template-columns: 1fr; gap: 22px; } }
  .team-h2 {
    font-family: "Space Grotesk", sans-serif; font-weight: 500;
    font-size: clamp(44px, 6vw, 88px); line-height: 0.98;
    letter-spacing: -0.04em; margin: 16px 0 0;
    text-wrap: pretty;
  }
  .team-h2 .ital {
    font-style: italic; font-family: "Instrument Serif", "Space Grotesk", serif; font-weight: 400;
    background: linear-gradient(100deg, #F88E4B 0%, #BA2F58 100%);
    -webkit-background-clip: text; background-clip: text; color: transparent;
  }
  .team-head-right p { font-size: 17px; color: var(--ink-soft); line-height: 1.55; margin: 0; max-width: 460px; }
  .team-counts { display: flex; gap: 8px; margin-top: 22px; flex-wrap: wrap; }
  .tcount-chip {
    display: inline-flex; align-items: center; gap: 10px;
    padding: 8px 14px;
    background: #fff;
    border: var(--bd);
    border-radius: 999px;
    font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
    transition: background 0.2s, transform 0.2s;
  }
  .tcount-chip:hover { background: var(--peach); transform: translateY(-2px); }
  .tcount-n {
    font-family: "Space Grotesk", sans-serif;
    font-size: 13px; font-weight: 500;
    letter-spacing: -0.02em;
    padding: 2px 8px;
    background: var(--ink); color: #fff;
    border-radius: 999px;
  }

  /* ---------- Category block ---------- */
  .team-cat { margin-bottom: 72px; }
  .team-cat:last-child { margin-bottom: 0; }

  .team-cat-head {
    display: grid; grid-template-columns: 1fr 1fr; gap: 32px;
    align-items: end;
    margin-bottom: 28px;
    padding-bottom: 18px;
    border-bottom: 1px solid rgba(17,17,17,0.12);
  }
  @media (max-width: 980px) { .team-cat-head { grid-template-columns: 1fr; gap: 18px; } }
  .team-cat-head-left { display: flex; gap: 18px; align-items: flex-start; }
  .team-cat-kicker { font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-soft); }
  .team-cat-h {
    font-family: "Space Grotesk", sans-serif; font-weight: 500;
    font-size: clamp(32px, 4.4vw, 56px); line-height: 1;
    letter-spacing: -0.035em; margin: 6px 0 0;
  }
  .team-cat-head-right { display: flex; flex-direction: column; gap: 12px; align-items: flex-start; }
  .team-cat-head-right p { font-size: 15px; color: var(--ink-soft); margin: 0; line-height: 1.5; max-width: 440px; }
  .team-cat-count { font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-soft); }
  .team-cat-count b { color: var(--ink); margin-right: 6px; font-family: "Space Grotesk", sans-serif; font-weight: 500; }

  .team-mem-grid { display: grid; gap: 16px; }
  @media (max-width: 1080px) { .team-mem-grid { grid-template-columns: repeat(3, 1fr) !important; } }
  @media (max-width: 720px)  { .team-mem-grid { grid-template-columns: repeat(2, 1fr) !important; } }
  @media (max-width: 480px)  { .team-mem-grid { grid-template-columns: 1fr !important; } }

  /* ---------- Member card ---------- */
  .mem-card {
    border: var(--bd); border-radius: 22px;
    background: #fff;
    overflow: hidden;
    display: flex; flex-direction: column;
    transition: transform 0.4s cubic-bezier(.2,.7,.2,1), box-shadow 0.4s, border-color 0.3s;
  }
  .mem-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 26px 50px -24px rgba(186,47,88,0.28), 0 0 0 1px rgba(248,142,75,0.4);
  }
  .mem-portrait { position: relative; aspect-ratio: 4 / 5; overflow: hidden; border-bottom: var(--bd); background: #111; }
  .mem-portrait img {
    position: absolute; inset: 0; width: 100%; height: 100%;
    object-fit: cover;
    filter: saturate(0.85) contrast(1.04);
    transition: transform 1.2s cubic-bezier(.2,.7,.2,1), filter 0.5s;
  }
  .mem-card:hover .mem-portrait img { transform: scale(1.05); filter: saturate(1.05) contrast(1.06); }
  .mem-portrait-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(180deg, rgba(17,17,17,0) 45%, rgba(17,17,17,0.45) 100%);
    pointer-events: none;
    transition: background 0.4s;
  }
  .mem-card:hover .mem-portrait-overlay {
    background: linear-gradient(180deg, rgba(248,142,75,0.10) 0%, rgba(17,17,17,0) 40%, rgba(17,17,17,0.55) 100%);
  }
  .mem-index {
    position: absolute; right: 12px; top: 12px;
    padding: 4px 9px;
    font-size: 10px; letter-spacing: 0.14em;
    background: rgba(255,255,255,0.85);
    border: 1px solid rgba(17,17,17,0.4);
    border-radius: 999px;
    color: var(--ink);
  }
  .mem-body { padding: 16px 18px 18px; display: flex; flex-direction: column; gap: 6px; }
  .mem-name {
    font-family: "Space Grotesk", sans-serif; font-weight: 500;
    font-size: 19px; line-height: 1.1; letter-spacing: -0.025em;
    margin: 0;
    transition: color 0.25s;
  }
  .mem-card:hover .mem-name { color: var(--berry); }
  .mem-role { font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-soft); }

  /* ---------- CTA reused (matches portfolio) ---------- */
  .case-cta { padding: 80px 0 120px; }
  .case-cta-card { position: relative; overflow: hidden; border: 1px solid rgba(255,255,255,0.10); border-radius: 36px; background: radial-gradient(70% 90% at 80% 0%, rgba(248,142,75,0.28), transparent 60%), radial-gradient(60% 80% at 20% 110%, rgba(186,47,88,0.30), transparent 65%), #0B0B0B; color: #fff; padding: 80px 56px 56px; text-align: center; box-shadow: 0 60px 100px -50px rgba(186,47,88,0.30), 0 0 0 1px rgba(248,142,75,0.10); }
  .case-cta-card .eyebrow { color: rgba(255,255,255,0.7); justify-content: center; display: inline-flex; }
  .case-cta-grain { position: absolute; inset: 0; pointer-events: none; opacity: 0.25; mix-blend-mode: overlay; background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.12 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>"); }
  .case-cta-glow { position: absolute; left: 50%; top: 100%; transform: translate(-50%, -50%); width: 700px; height: 700px; border-radius: 50%; background: radial-gradient(closest-side, rgba(248,142,75,0.30), transparent 70%); pointer-events: none; filter: blur(20px); }
  .case-cta-h { font-family: "Space Grotesk", sans-serif; font-weight: 500; font-size: clamp(48px, 7.4vw, 112px); line-height: 0.95; letter-spacing: -0.045em; margin: 22px auto 0; max-width: 1100px; position: relative; color: #fff; }
  .case-cta-h .ital-gradient { font-style: italic; font-family: "Instrument Serif", "Space Grotesk", serif; font-weight: 400; background: linear-gradient(100deg, #FFD6B8 0%, #F88E4B 45%, #BA2F58 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
  .case-cta-sub { max-width: 640px; margin: 28px auto 0; font-size: 17px; line-height: 1.55; color: rgba(255,255,255,0.78); position: relative; }
  .case-cta-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-top: 36px; position: relative; }
  .case-cta-btn { display: inline-flex; align-items: center; gap: 10px; padding: 16px 26px; border-radius: 999px; background: #fff; color: #111; border: 1px solid #fff; font-size: 15px; line-height: 1; transition: transform 0.3s cubic-bezier(.2,.7,.2,1), background 0.25s, box-shadow 0.25s, color 0.25s, border-color 0.25s; }
  .case-cta-btn:hover { transform: translateY(-2px); background: var(--orange); border-color: var(--orange); box-shadow: 0 16px 30px -10px rgba(248,142,75,0.45), 0 0 0 2px rgba(248,142,75,0.25); }
  .case-cta-btn.ghost { background: transparent; color: #fff; border-color: rgba(255,255,255,0.4); }
  .case-cta-btn.ghost:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.7); color: #fff; box-shadow: none; }
  .case-cta-btn .cta-up-arrow, .case-cta-btn .arrow { transition: transform 0.35s cubic-bezier(.2,.7,.2,1); }
  .case-cta-btn:hover .cta-up-arrow { transform: translate(2px, -2px); }
  .case-cta-btn:hover .arrow { transform: translateX(3px); }
  .case-cta-foot { margin-top: 56px; padding-top: 28px; border-top: 1px solid rgba(255,255,255,0.10); display: flex; justify-content: space-between; gap: 14px; flex-wrap: wrap; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(255,255,255,0.55); position: relative; }
  @media (max-width: 720px) { .case-cta-card { padding: 60px 28px 40px; border-radius: 28px; } .case-cta-foot { justify-content: center; text-align: center; } }
`;

export default function TeamPage() {
  useReveal();
  return (
    <>
      <title>Team — 3.0 Labs</title>
      <meta
        name="description"
        content="Meet the 3.0 Labs team — two founders, twenty-plus builders across product, AI engineering, and design."
      />
      <PageNavbar active="team" />
      <DirectorsSection />
      <TeamSection />
      <ClosingCTA />
      <PageFooter />
      <style>{teamStyles}</style>
    </>
  );
}
