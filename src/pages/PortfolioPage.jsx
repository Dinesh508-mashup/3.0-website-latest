import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import { Eyebrow, NodeBadge, Arrow } from '@/components';
import { PageNavbar } from '@/shell/PageNavbar';
import { PageFooter } from '@/shell/PageFooter';

// =============================================================
// Mini UI primitives reused across screen mocks
// =============================================================
const Row = ({ w = '100%', h = 8, c = 'rgba(17,17,17,0.12)', r = 4, ml = 0 }) => (
  <div style={{ width: w, height: h, background: c, borderRadius: r, marginLeft: ml }}></div>
);
const Block = ({ children, style }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>{children}</div>
);

function pent(r) {
  return [0, 72, 144, 216, 288]
    .map((a) => {
      const x = Math.cos(((a - 90) * Math.PI) / 180) * r;
      const y = Math.sin(((a - 90) * Math.PI) / 180) * r;
      return `${x},${y}`;
    })
    .join(' ');
}
function pentData(values) {
  return values
    .map((v, i) => {
      const a = i * 72 - 90;
      const x = Math.cos((a * Math.PI) / 180) * v;
      const y = Math.sin((a * Math.PI) / 180) * v;
      return `${x},${y}`;
    })
    .join(' ');
}

// =============================================================
// Per-variant screen bodies
// =============================================================
function BCPhoneScreen({ lang }) {
  const dict = {
    hi: {
      hdr: 'केस आज',
      q: 'नए केस',
      a: 'एबीसी',
      b: 'एआरवी',
      c: 'रिलीज़',
      actions: ['कैप्चर शुरू करें', 'नज़दीकी टीम', 'रिकॉर्ड'],
    },
    en: {
      hdr: 'Cases today',
      q: 'New cases',
      a: 'ABC',
      b: 'ARV',
      c: 'Released',
      actions: ['Start capture', 'Nearby team', 'Records'],
    },
    te: {
      hdr: 'నేటి కేసులు',
      q: 'కొత్త కేసులు',
      a: 'ఏబీసీ',
      b: 'ఏఆర్‌వీ',
      c: 'విడుదల',
      actions: ['క్యాప్చర్ ప్రారంభించండి', 'సమీప బృందం', 'రికార్డులు'],
    },
  };
  const d = dict[lang];
  return (
    <div className="bc-screen">
      <div className="bc-top">
        <div className="bc-h">{d.hdr}</div>
        <div className="bc-lang">{lang.toUpperCase()}</div>
      </div>
      <div className="bc-q">{d.q}</div>
      <div className="bc-stats">
        <div className="bc-st">
          <div className="bc-st-v">38</div>
          <div className="bc-st-k">{d.a}</div>
        </div>
        <div className="bc-st">
          <div className="bc-st-v">22</div>
          <div className="bc-st-k">{d.b}</div>
        </div>
        <div className="bc-st">
          <div className="bc-st-v">14</div>
          <div className="bc-st-k">{d.c}</div>
        </div>
      </div>
      <div className="bc-actions">
        {d.actions.map((a, i) => (
          <div className={`bc-a ${i === 0 ? 'primary' : ''}`} key={i}>
            {a}
          </div>
        ))}
      </div>
    </div>
  );
}

const SCREEN_BODIES = {
  fallback: ({ label }) => <div className="mock-empty">{label}</div>,

  students: () => (
    <div className="mock-pad">
      <div className="mock-head">
        <div className="mock-h-title">Students · 10,300</div>
        <div className="mock-chip orange">+186 today</div>
      </div>
      <div className="mock-stats">
        <div className="ms"><div className="ms-v">75%</div><div className="ms-k">Skill gap closed</div></div>
        <div className="ms"><div className="ms-v">40+</div><div className="ms-k">Colleges</div></div>
        <div className="ms"><div className="ms-v">12.4k</div><div className="ms-k">Assessments</div></div>
      </div>
      <div className="mock-table">
        {['Aarav Mehta', 'Riya Krishnan', 'Dev Iyer', 'Kavya Sharma', 'Arnav Bose'].map((n, i) => (
          <div className="mt-row" key={i}>
            <div className="mt-av" style={{ background: ['#FFD6B8', '#F6B0C7', '#FBE9D6', '#FFE3CB', '#F88E4B'][i] }}></div>
            <div className="mt-name">{n}</div>
            <div className="mt-meta">Cohort 0{i + 2}</div>
            <div className="mt-bar"><span style={{ width: `${60 + i * 7}%` }}></span></div>
          </div>
        ))}
      </div>
    </div>
  ),
  districts: () => (
    <div className="mock-pad">
      <div className="mock-head">
        <div className="mock-h-title">Districts · Telangana</div>
        <div className="mock-chip">33 active</div>
      </div>
      <div className="mock-grid-4">
        {['Hyderabad', 'Warangal', 'Karimnagar', 'Khammam', 'Nizamabad', 'Adilabad', 'Mahabubnagar', 'Nalgonda'].map((d, i) => (
          <div className="mg-card" key={d}>
            <div className="mg-h">{d}</div>
            <div className="mg-v">{1240 - i * 120}</div>
            <div className="mg-k">Students</div>
            <div className="mg-bar"><span style={{ width: `${80 - i * 7}%` }}></span></div>
          </div>
        ))}
      </div>
    </div>
  ),
  analytics: () => (
    <div className="mock-pad">
      <div className="mock-head"><div className="mock-h-title">Analytics</div><div className="mock-chip">Q3 2025</div></div>
      <div className="mock-chart">
        <svg viewBox="0 0 400 160" preserveAspectRatio="none">
          <defs>
            <linearGradient id="cga" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#F88E4B" stopOpacity="0.6" />
              <stop offset="1" stopColor="#F88E4B" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polyline fill="url(#cga)" stroke="none" points="0,140 40,110 80,120 120,80 160,90 200,55 240,70 280,30 320,50 360,20 400,40 400,160 0,160" />
          <polyline fill="none" stroke="#F88E4B" strokeWidth="2" points="0,140 40,110 80,120 120,80 160,90 200,55 240,70 280,30 320,50 360,20 400,40" />
          <polyline fill="none" stroke="#BA2F58" strokeWidth="1.5" strokeDasharray="4 4" points="0,150 40,130 80,135 120,110 160,115 200,90 240,100 280,70 320,80 360,55 400,72" />
        </svg>
      </div>
      <div className="mock-stats" style={{ marginTop: 14 }}>
        <div className="ms"><div className="ms-v">94%</div><div className="ms-k">Completion</div></div>
        <div className="ms"><div className="ms-v">4.7</div><div className="ms-k">Avg. score</div></div>
        <div className="ms"><div className="ms-v">+18%</div><div className="ms-k">MoM</div></div>
      </div>
    </div>
  ),

  'bc-hi': () => <BCPhoneScreen lang="hi" />,
  'bc-en': () => <BCPhoneScreen lang="en" />,
  'bc-te': () => <BCPhoneScreen lang="te" />,

  'rp-gateway': () => (
    <div className="mock-pad">
      <div className="mock-head"><div className="mock-h-title">Learning Gateway</div><div className="mock-chip orange">IB · HL</div></div>
      <Block>
        <Row w="60%" h={14} />
        <Row w="40%" h={8} />
      </Block>
      <div className="mock-grid-3" style={{ marginTop: 14 }}>
        {['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Economics', 'Computer Sci'].map((s, i) => (
          <div className="mg-card" key={s}>
            <div className="mg-h">{s}</div>
            <div className="mg-v">{['A', 'B+', 'A', 'A-', 'B', 'A+'][i]}</div>
            <div className="mg-k">Predicted band</div>
            <div className="mg-bar"><span style={{ width: `${70 + i * 4}%` }}></span></div>
          </div>
        ))}
      </div>
    </div>
  ),
  'rp-filter': () => (
    <div className="mock-pad">
      <div className="mock-head"><div className="mock-h-title">Precision Filtering</div><div className="mock-chip">412 of 2,180</div></div>
      <div className="mock-row" style={{ gap: 8, flexWrap: 'wrap', marginTop: 8 }}>
        {['Topic', 'Difficulty', 'Marks', 'Year', 'Paper', 'Calculator'].map((t, i) => (
          <span key={t} className={`mock-pill ${i < 3 ? 'on' : ''}`}>{t}</span>
        ))}
      </div>
      <div className="mock-table">
        {['Calculus · 2023', 'Vectors · 2024', 'Mechanics · 2022', 'Algebra · 2024'].map((q, i) => (
          <div className="mt-row" key={i}>
            <div className="mt-av" style={{ background: '#FFD6B8' }}></div>
            <div className="mt-name">{q}</div>
            <div className="mt-meta">{['6 marks', '4 marks', '8 marks', '5 marks'][i]}</div>
            <div className="mt-bar"><span style={{ width: `${50 + i * 12}%` }}></span></div>
          </div>
        ))}
      </div>
    </div>
  ),
  'rp-guided': () => (
    <div className="mock-pad" style={{ background: '#0B0B0B', color: '#fff', padding: 16, borderRadius: 8, height: '100%' }}>
      <div className="mock-head" style={{ color: '#fff' }}>
        <div className="mock-h-title" style={{ color: '#fff' }}>Guided Learning</div>
        <div className="mock-chip" style={{ background: 'rgba(248,142,75,0.2)', color: '#FFD6B8', borderColor: 'rgba(248,142,75,0.5)' }}>AI Tutor</div>
      </div>
      <div className="mock-chat">
        <div className="mc-msg you">Why does the answer use l&apos;Hôpital here?</div>
        <div className="mc-msg ai">Because both numerator and denominator approach 0 — that&apos;s the 0/0 indeterminate form. Let me show the steps…</div>
        <div className="mc-msg ai sm">Step 01 · Differentiate top and bottom</div>
        <div className="mc-msg ai sm">Step 02 · Substitute the limit value</div>
      </div>
    </div>
  ),
  'rp-sim': () => (
    <div className="mock-pad">
      <div className="mock-head"><div className="mock-h-title">Practice Simulation</div><div className="mock-chip orange">42:18 left</div></div>
      <div className="mock-row" style={{ gap: 8 }}>
        <div className="mock-chip">Paper 1</div>
        <div className="mock-chip">No calc</div>
        <div className="mock-chip">HL</div>
      </div>
      <div style={{ background: 'var(--paper)', border: '1px solid rgba(17,17,17,0.15)', borderRadius: 8, padding: 12, marginTop: 12 }}>
        <Row w="80%" h={10} />
        <div style={{ height: 6 }}></div>
        <Row w="100%" h={6} />
        <div style={{ height: 4 }}></div>
        <Row w="92%" h={6} />
        <div style={{ height: 4 }}></div>
        <Row w="68%" h={6} />
      </div>
      <div className="mock-options">
        {['A', 'B', 'C', 'D'].map((o, i) => (
          <div className={`mo ${i === 1 ? 'on' : ''}`} key={o}>
            <span>{o}</span>
            <Row w="60%" h={6} />
          </div>
        ))}
      </div>
    </div>
  ),

  'vd-tickets': () => (
    <div className="mock-pad">
      <div className="mock-head"><div className="mock-h-title">Tickets · 142 open</div><div className="mock-chip orange">12 critical</div></div>
      <div className="mock-row" style={{ gap: 8 }}>
        {['All', 'Open', 'In Review', 'Resolved'].map((t, i) => (
          <span key={t} className={`mock-pill ${i === 1 ? 'on' : ''}`}>{t}</span>
        ))}
      </div>
      <div className="mock-table">
        {[
          ['VDTS-1284', 'Payment gateway timeout', 'HIGH', 'Aarav'],
          ['VDTS-1281', 'Auth token expiry', 'MED', 'Riya'],
          ['VDTS-1276', 'Dashboard slow load', 'LOW', 'Dev'],
          ['VDTS-1270', 'Mobile crash on iOS 17', 'HIGH', 'Kavya'],
          ['VDTS-1265', 'CSV export incomplete', 'MED', 'Arnav'],
        ].map((r, i) => (
          <div className="mt-row" key={i}>
            <div className="mt-av" style={{ background: r[2] === 'HIGH' ? '#BA2F58' : r[2] === 'MED' ? '#F88E4B' : '#FFD6B8' }}></div>
            <div className="mt-name">{r[1]}</div>
            <div className="mt-meta">{r[0]} · {r[3]}</div>
            <div className="mt-status">{r[2]}</div>
          </div>
        ))}
      </div>
    </div>
  ),
  'vd-mobile': () => (
    <div className="mock-pad">
      <div className="mock-head"><div className="mock-h-title">My queue</div><div className="mock-chip">7 active</div></div>
      <div className="mc-cards">
        {[
          ['VDTS-1284', 'Payment timeout', 'HIGH'],
          ['VDTS-1281', 'Auth expiry', 'MED'],
          ['VDTS-1276', 'Slow load', 'LOW'],
        ].map((r, i) => (
          <div className="mcc" key={i}>
            <div className="mcc-head">
              <span className="mcc-id">{r[0]}</span>
              <span className={`mcc-tag ${r[2].toLowerCase()}`}>{r[2]}</span>
            </div>
            <div className="mcc-title">{r[1]}</div>
            <div className="mcc-meta">Awaiting consultant · 2h</div>
          </div>
        ))}
      </div>
    </div>
  ),
  'vd-status': () => (
    <div className="mock-pad">
      <div className="mock-head"><div className="mock-h-title">Status</div><div className="mock-chip">live</div></div>
      <div className="mock-stats">
        <div className="ms"><div className="ms-v">142</div><div className="ms-k">Open</div></div>
        <div className="ms"><div className="ms-v">94</div><div className="ms-k">Closed today</div></div>
        <div className="ms"><div className="ms-v">8h 12m</div><div className="ms-k">Avg. close</div></div>
      </div>
      <div className="mock-chart">
        <svg viewBox="0 0 400 100">
          {[...Array(20)].map((_, i) => {
            const h = 30 + Math.abs(Math.sin(i * 0.6)) * 60;
            return <rect key={i} x={i * 20 + 4} y={100 - h} width="12" height={h} rx="3" fill={i % 4 === 0 ? '#F88E4B' : 'rgba(17,17,17,0.15)'} />;
          })}
        </svg>
      </div>
    </div>
  ),

  'sa-interview': () => (
    <div className="mock-pad" style={{ background: '#0B0B0B', color: '#fff', padding: 16, borderRadius: 8, height: '100%' }}>
      <div className="mock-head" style={{ color: '#fff' }}>
        <div className="mock-h-title" style={{ color: '#fff' }}>Interview · Round 2</div>
        <div className="mock-chip" style={{ background: 'rgba(248,142,75,0.2)', color: '#FFD6B8', borderColor: 'rgba(248,142,75,0.5)' }}>● Recording</div>
      </div>
      <div className="sa-stage">
        <div className="sa-cam">
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="40" r="18" fill="rgba(255,255,255,0.15)" />
            <rect x="20" y="60" width="60" height="30" rx="15" fill="rgba(255,255,255,0.15)" />
          </svg>
          <span>Candidate</span>
        </div>
        <div className="sa-ai">
          <div className="sa-ai-orb"></div>
          <span>AI Interviewer</span>
        </div>
      </div>
      <div className="sa-wave">
        {[...Array(28)].map((_, i) => (
          <span key={i} style={{ height: `${20 + Math.abs(Math.sin(i * 0.5)) * 60}%`, background: i % 3 === 0 ? '#F88E4B' : 'rgba(255,255,255,0.3)' }}></span>
        ))}
      </div>
    </div>
  ),
  'sa-admin': () => (
    <div className="mock-pad">
      <div className="mock-head"><div className="mock-h-title">Admin · 7,265 students</div><div className="mock-chip orange">94% complete</div></div>
      <div className="mock-stats">
        <div className="ms"><div className="ms-v">3,671</div><div className="ms-k">Interviews</div></div>
        <div className="ms"><div className="ms-v">4.8×</div><div className="ms-k">Faster eval</div></div>
        <div className="ms"><div className="ms-v">94%</div><div className="ms-k">Completion</div></div>
      </div>
      <div className="mock-table">
        {['Aarav · 92%', 'Riya · 88%', 'Dev · 95%', 'Kavya · 81%'].map((n, i) => (
          <div className="mt-row" key={i}>
            <div className="mt-av" style={{ background: ['#FFD6B8', '#F6B0C7', '#FBE9D6', '#FFE3CB'][i] }}></div>
            <div className="mt-name">{n.split(' · ')[0]}</div>
            <div className="mt-meta">{n.split(' · ')[1]}</div>
            <div className="mt-bar"><span style={{ width: n.split(' · ')[1] }}></span></div>
          </div>
        ))}
      </div>
    </div>
  ),
  'sa-radar': () => (
    <div className="mock-pad">
      <div className="mock-head"><div className="mock-h-title">Skill Radar · Aarav M.</div><div className="mock-chip">Round 2</div></div>
      <div className="mock-radar">
        <svg viewBox="-110 -110 220 220">
          {[20, 40, 60, 80, 100].map((r) => (
            <polygon key={r} points={pent(r)} fill="none" stroke="rgba(17,17,17,0.12)" strokeWidth="1" />
          ))}
          {[0, 72, 144, 216, 288].map((a) => {
            const x = Math.cos(((a - 90) * Math.PI) / 180) * 100;
            const y = Math.sin(((a - 90) * Math.PI) / 180) * 100;
            return <line key={a} x1="0" y1="0" x2={x} y2={y} stroke="rgba(17,17,17,0.12)" />;
          })}
          <polygon points={pentData([86, 64, 78, 92, 70])} fill="rgba(248,142,75,0.30)" stroke="#F88E4B" strokeWidth="2" />
          {['Comm', 'Tech', 'Logic', 'Domain', 'Lead'].map((label, i) => {
            const a = i * 72 - 90;
            const x = Math.cos((a * Math.PI) / 180) * 118;
            const y = Math.sin((a * Math.PI) / 180) * 118;
            return (
              <text key={label} x={x} y={y} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1" fill="#5F5F5F">
                {label}
              </text>
            );
          })}
        </svg>
      </div>
    </div>
  ),

  'bb-splash': () => (
    <div className="bb-screen" style={{ background: 'linear-gradient(160deg,#FFE3CB,#FFD6B8)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
        <div className="bb-logo">B</div>
        <div className="bb-brand">BhoomiBox</div>
        <div className="bb-tag">From the farm. To your family.</div>
      </div>
    </div>
  ),
  'bb-signin': () => (
    <div className="bb-screen">
      <div className="bb-mini-h">Welcome back</div>
      <div className="bb-mini-sub">Sign in to continue</div>
      <div className="bb-field">+91 98xxx xxxxx</div>
      <div className="bb-field">otp</div>
      <div className="bb-cta">Continue →</div>
    </div>
  ),
  'bb-home': () => (
    <div className="bb-screen">
      <div className="bb-mini-h">Hi Aarav</div>
      <div className="bb-mini-sub">This week&apos;s harvest</div>
      <div className="bb-card-list">
        {['Tomatoes', 'Spinach', 'Mangoes', 'Curry Leaves'].map((n, i) => (
          <div className="bb-c" key={n}>
            <div className="bb-c-img" style={{ background: ['#F6B0C7', '#FBE9D6', '#FFD6B8', '#F4ECE3'][i] }}></div>
            <div>
              <div className="bb-c-n">{n}</div>
              <div className="bb-c-m">₹ {40 + i * 20}/kg</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
  'bb-curate': () => (
    <div className="bb-screen">
      <div className="bb-mini-h">Curating Harvest</div>
      <div className="bb-mini-sub">Week 32 · Mar 26</div>
      <div className="bb-curate-grid">
        {['Tomato', 'Spinach', 'Curry', 'Methi', 'Lemon', 'Brinjal'].map((n, i) => (
          <div key={n} className={`bb-curate-cell ${i < 4 ? 'on' : ''}`}>
            <div className="bb-curate-dot"></div>
            {n}
          </div>
        ))}
      </div>
      <div className="bb-cta">Confirm 4 items →</div>
    </div>
  ),
  'bb-family': () => (
    <div className="bb-screen">
      <div className="bb-mini-h">Family</div>
      <div className="bb-mini-sub">3 members</div>
      <div className="bb-card-list">
        {['Aarav · Adult', 'Maya · Adult', 'Vivaan · Kid'].map((n, i) => (
          <div className="bb-c" key={n}>
            <div className="bb-c-img" style={{ background: ['#FFD6B8', '#F6B0C7', '#FBE9D6'][i], borderRadius: '50%' }}></div>
            <div>
              <div className="bb-c-n">{n.split(' · ')[0]}</div>
              <div className="bb-c-m">{n.split(' · ')[1]}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
  'bb-story': () => (
    <div className="bb-screen">
      <div className="bb-hero" style={{ background: 'linear-gradient(160deg,#FBE9D6,#F6B0C7)' }}></div>
      <div className="bb-mini-h">Ramaiah&apos;s story</div>
      <div className="bb-mini-sub">3rd-gen farmer · Medak</div>
      <Row w="100%" h={5} />
      <div style={{ height: 4 }} />
      <Row w="92%" h={5} />
      <div style={{ height: 4 }} />
      <Row w="78%" h={5} />
    </div>
  ),
  'bb-profile': () => (
    <div className="bb-screen">
      <div className="bb-pf-top">
        <div className="bb-pf-av"></div>
        <div className="bb-mini-h" style={{ marginTop: 6 }}>Ramaiah K.</div>
        <div className="bb-mini-sub">Medak · 14 acres</div>
      </div>
      <div className="mock-stats" style={{ marginTop: 10 }}>
        <div className="ms"><div className="ms-v">12</div><div className="ms-k">Crops</div></div>
        <div className="ms"><div className="ms-v">3rd</div><div className="ms-k">Gen</div></div>
        <div className="ms"><div className="ms-v">4.9★</div><div className="ms-k">Rating</div></div>
      </div>
    </div>
  ),

  'fp-dash': () => (
    <div className="mock-pad">
      <div className="mock-head"><div className="mock-h-title">Deals · 24 active</div><div className="mock-chip orange">SEBI · verified</div></div>
      <div className="mock-stats">
        <div className="ms"><div className="ms-v">₹128 Cr</div><div className="ms-k">Pipeline</div></div>
        <div className="ms"><div className="ms-v">14</div><div className="ms-k">Bankers</div></div>
        <div className="ms"><div className="ms-v">62</div><div className="ms-k">Investors</div></div>
      </div>
      <div className="mock-table">
        {[
          ['Helix Health · Series A', '₹42 Cr', 'Term Sheet'],
          ['Tally Cloud · Bridge', '₹8 Cr', 'DD'],
          ['Mira Compute · Seed', '₹18 Cr', 'Pitch'],
          ['Northbeam · Series B', '₹60 Cr', 'Closing'],
        ].map((r, i) => (
          <div className="mt-row" key={i}>
            <div className="mt-av" style={{ background: ['#FFD6B8', '#F6B0C7', '#FBE9D6', '#FFE3CB'][i] }}></div>
            <div className="mt-name">{r[0]}</div>
            <div className="mt-meta">{r[1]}</div>
            <div className="mt-status">{r[2]}</div>
          </div>
        ))}
      </div>
    </div>
  ),
  'fp-notif': () => (
    <div className="mock-pad">
      <div className="mock-head"><div className="mock-h-title">Notifications</div><div className="mock-chip">7 new</div></div>
      <div className="mock-table">
        {[
          ['Helix Health', 'Banker requested updated cap table', '12m'],
          ['Mira Compute', 'Investor accepted NDA', '1h'],
          ['Northbeam', 'Term sheet signed by 3 of 4', '2h'],
          ['Tally Cloud', 'Q3 financials uploaded', 'yesterday'],
          ['Helix Health', 'New investor invited · Sequoia', 'yesterday'],
        ].map((r, i) => (
          <div className="mt-row" key={i}>
            <div className="mt-av" style={{ background: '#F88E4B' }}></div>
            <div className="mt-name">{r[0]}</div>
            <div className="mt-meta">{r[1]}</div>
            <div className="mt-status">{r[2]}</div>
          </div>
        ))}
      </div>
    </div>
  ),
  'fp-deal': () => (
    <div className="mock-pad">
      <div className="mock-head"><div className="mock-h-title">Deal flow · Helix Health</div><div className="mock-chip orange">Series A</div></div>
      <div className="fp-flow">
        {['Pitch', 'NDA', 'DD', 'Term Sheet', 'Closing'].map((s, i) => (
          <div key={s} className={`fp-flow-step ${i < 3 ? 'done' : i === 3 ? 'on' : ''}`}>
            <div className="fp-flow-dot">{String(i + 1).padStart(2, '0')}</div>
            <div className="fp-flow-l">{s}</div>
          </div>
        ))}
      </div>
      <div className="mock-stats" style={{ marginTop: 14 }}>
        <div className="ms"><div className="ms-v">5 / 8</div><div className="ms-k">Stakeholders</div></div>
        <div className="ms"><div className="ms-v">₹42 Cr</div><div className="ms-k">Round size</div></div>
        <div className="ms"><div className="ms-v">14 d</div><div className="ms-k">To close</div></div>
      </div>
    </div>
  ),
  'fp-collab': () => (
    <div className="mock-pad">
      <div className="mock-head"><div className="mock-h-title">Collaboration</div><div className="mock-chip">3 online</div></div>
      <div className="mock-chat" style={{ marginTop: 8 }}>
        <div className="mc-msg you">@Aarav can you confirm the latest cap table?</div>
        <div className="mc-msg ai">Updated v3 uploaded — see Vault › Cap Tables › v3.pdf</div>
        <div className="mc-msg you">Thanks. Sequoia wants a redline by tomorrow.</div>
        <div className="mc-msg ai sm">DocVault notification → 4 stakeholders</div>
      </div>
    </div>
  ),
};

function ScreenMock({ s }) {
  const Body = SCREEN_BODIES[s.variant] || SCREEN_BODIES.fallback;
  if (s.kind === 'phone') {
    return (
      <div className="phone-frame">
        <div className="phone-bezel">
          <div className="phone-notch"></div>
          <div className="phone-screen">
            <Body label={s.label} />
          </div>
          <div className="phone-bar"></div>
        </div>
        <div className="phone-label font-mono">{s.label}</div>
      </div>
    );
  }
  return (
    <div className="desktop-frame">
      <div className="dw-bezel">
        <div className="dw-bar">
          <span></span>
          <span></span>
          <span></span>
          <div className="dw-addr">3-0-labs.app/{s.variant}</div>
        </div>
        <div className="dw-screen">
          <Body label={s.label} />
        </div>
      </div>
      <div className="phone-label font-mono">{s.label}</div>
    </div>
  );
}

// =============================================================
// Architecture diagram
// =============================================================
function ArchitectureDiagram() {
  const nodes = [
    { id: 'vec', label: 'Vector DB', sub: 'Curriculum corpus', color: '#FFD6B8' },
    { id: 'val', label: 'Validation', sub: 'Schema · safety', color: '#F6B0C7' },
    { id: 'sol', label: 'Solution Layer', sub: 'Stepwise reasoning', color: '#FBE9D6' },
    { id: 'img', label: 'Image Gen', sub: 'Diagrams · graphs', color: '#F88E4B' },
  ];
  const agents = [
    { id: 'a1', label: 'Tutor' },
    { id: 'a2', label: 'Examiner' },
    { id: 'a3', label: 'Mentor' },
    { id: 'a4', label: 'Drafter' },
  ];
  return (
    <div className="cd-arch fade-up">
      <div className="cd-arch-head">
        <div className="font-mono cd-arch-kicker">AI System Architecture</div>
        <h3 className="cd-arch-h">A LangGraph-orchestrated multi-agent pipeline.</h3>
        <p className="cd-arch-sub">
          Plan → retrieve → reason → validate → render. Every student question routes through the
          same loop, with checkpoints at each layer.
        </p>
      </div>
      <div className="cd-arch-canvas">
        <svg viewBox="0 0 1200 480" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="arch-g1" x1="0" x2="1">
              <stop offset="0" stopColor="#F88E4B" />
              <stop offset="1" stopColor="#BA2F58" />
            </linearGradient>
            <linearGradient id="arch-g2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#1A1A1A" />
              <stop offset="1" stopColor="#0B0B0B" />
            </linearGradient>
          </defs>

          <g stroke="rgba(17,17,17,0.30)" strokeDasharray="3 6" fill="none">
            <path d="M260 240 L460 240" />
            <path d="M740 240 L940 240" />
            <path d="M600 180 L600 110" />
            <path d="M600 180 Q480 140 460 110" />
            <path d="M600 180 Q720 140 740 110" />
            <path d="M600 180 Q380 130 320 110" />
            <path d="M600 180 Q820 130 880 110" />
            <path d="M940 240 Q1000 280 1020 320" />
            <path d="M940 240 Q1000 220 1020 180" />
            <path d="M940 240 Q1000 320 1020 380" />
          </g>

          <g>
            <rect x="460" y="180" width="280" height="120" rx="20" fill="url(#arch-g2)" stroke="#111" />
            <text x="600" y="220" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="22" fill="#fff" letterSpacing="-0.5">LangGraph</text>
            <text x="600" y="244" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="22" fill="#fff" letterSpacing="-0.5">Orchestrator</text>
            <text x="600" y="278" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2" fill="rgba(255,255,255,0.6)">PLAN · ROUTE · OBSERVE</text>
            <circle cx="600" cy="290" r="4" fill="#F88E4B" className="pulse-dot" />
          </g>

          <g>
            <rect x="80" y="195" width="180" height="90" rx="14" fill="#fff" stroke="#111" />
            <text x="170" y="228" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="18" fill="#111" letterSpacing="-0.4">Student input</text>
            <text x="170" y="252" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2" fill="#5F5F5F">QUESTION · CONTEXT</text>
            <circle cx="170" cy="270" r="4" fill="#BA2F58" />
          </g>

          <g>
            <rect x="940" y="195" width="180" height="90" rx="14" fill="url(#arch-g1)" stroke="#111" />
            <text x="1030" y="228" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="18" fill="#fff" letterSpacing="-0.4">Answer</text>
            <text x="1030" y="252" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2" fill="rgba(255,255,255,0.85)">EXPLAIN · GRADE · DIAGRAM</text>
          </g>

          {agents.map((a, i) => {
            const x = 240 + i * 180;
            return (
              <g key={a.id}>
                <rect x={x - 70} y="50" width="140" height="56" rx="14" fill="#fff" stroke="#111" />
                <circle cx={x - 50} cy="78" r="6" fill="#F88E4B" />
                <text x={x - 30} y="76" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2" fill="#5F5F5F">AGENT 0{i + 1}</text>
                <text x={x - 30} y="94" fontFamily="Space Grotesk, sans-serif" fontSize="16" fill="#111" letterSpacing="-0.3">{a.label}</text>
              </g>
            );
          })}
          <text x="600" y="32" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" letterSpacing="3" fill="#5F5F5F">MULTI-AGENT PIPELINE</text>

          {nodes.map((n, i) => {
            const y = 160 + i * 80;
            return (
              <g key={n.id}>
                <rect x="1040" y={y - 22} width="140" height="44" rx="12" fill="#fff" stroke="#111" />
                <rect x="1052" y={y - 10} width="20" height="20" rx="5" fill={n.color} stroke="#111" />
                <text x="1082" y={y - 1} fontFamily="Space Grotesk, sans-serif" fontSize="13" fill="#111" letterSpacing="-0.2">{n.label}</text>
                <text x="1082" y={y + 13} fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1.5" fill="#5F5F5F">{n.sub}</text>
              </g>
            );
          })}
          <text x="1110" y="142" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" letterSpacing="3" fill="#5F5F5F">LAYERS</text>
        </svg>
      </div>

      <div className="cd-arch-legend">
        {['LangGraph orchestration', 'Multi-agent pipeline', 'Vector DB', 'Validation Layer', 'Solution Layer', 'Image Generation Layer'].map((t, i) => (
          <span key={t} className="cd-arch-pill">
            <span className="cd-arch-pill-n">{String(i + 1).padStart(2, '0')}</span>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function LifecycleTimeline({ items }) {
  return (
    <div className="cd-timeline fade-up">
      <div className="cd-tl-head">
        <div className="font-mono cd-arch-kicker">Lifecycle</div>
        <h3 className="cd-arch-h">From creation to confirmation.</h3>
      </div>
      <div className="cd-tl-rail">
        <div className="cd-tl-line"></div>
        {items.map(([n, t]) => (
          <div className="cd-tl-step" key={n}>
            <div className="cd-tl-dot"><span>{n}</span></div>
            <div className="cd-tl-label">{t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// =============================================================
// Cases data
// =============================================================
const CASES = [
  {
    id: 'bfsi',
    num: '01',
    title: 'BFSI Skill Portal',
    subtitle: 'Government of Telangana Initiative',
    description:
      'A centralized platform supporting the BFSI Minor Degree Program — combining student tracking, structured evaluation, CSR reporting, and hiring access in one unified system.',
    badge: "Officially launched by Hon'ble CM Revanth Reddy",
    hero: { img: '/Portfolio%20svg/BFSI%20Skill%20development.svg', alt: 'BFSI Skill Portal — platform visual' },
    launch: {
      img: '/Portfolio%20svg/CM%20Launch.jpeg',
      alt: "Hon'ble CM Revanth Reddy launching the BFSI Skill Portal",
      caption: "Hon'ble CM Revanth Reddy at the official launch of the BFSI Skill Portal",
    },
    industry: 'Edtech · Government · BFSI',
    year: '2025',
    metrics: [
      ['75%', 'Skill gap reduced'],
      ['10,300+', 'Students onboarded'],
      ['40+', 'Colleges connected'],
      ['50,000+', 'Minutes of interviews'],
    ],
    context: {
      title: 'Supported by',
      items: ['HSBC', 'JPMorgan Chase', 'State Street', 'London Stock Exchange Group'],
    },
    featureGroups: [
      { title: 'Platform features', items: ['Student Onboarding', 'Skill Tracking', 'Program Dashboards', 'CSR Reporting', 'Recruiter Access', 'AI Interview Layer'] },
      { title: 'AI Layer', items: ['Automated Workflows', 'Voice-Based Interaction', 'Response Analysis', 'Standardized Scoring'] },
    ],
    screensTitle: 'Inside the platform',
    screens: [
      { kind: 'desktop', label: 'Student Dashboard', variant: 'students' },
      { kind: 'desktop', label: 'District Dashboard', variant: 'districts' },
      { kind: 'desktop', label: 'Analytics View', variant: 'analytics' },
    ],
    tone: 'peach',
  },
  {
    id: 'blue-cross',
    num: '02',
    title: 'Blue Cross Hyderabad',
    description: 'End-to-end digital platform supporting Animal Birth Control (ABC) and Anti-Rabies Vaccination (ARV) operations.',
    hero: { img: '/Portfolio%20svg/Blue%20Cross%20Hyderabad.svg', alt: 'Blue Cross Hyderabad — platform visual' },
    industry: 'Healthcare · NGO · Mobile',
    year: '2024',
    featureGroups: [
      { title: 'Platform features', items: ['Animal Capture', 'Veterinary Care', 'Vehicle Tracking', 'Release Management', 'Analytics Dashboard', 'Real-time Alerts'] },
      { title: 'User roles', items: ['Field Staff', 'Veterinary Doctors', 'Management & Admin'] },
      { title: 'Key sections', items: ['Real-Time Field Operations', 'Medical Records', 'Centralized Web Dashboard', 'Smart Analytics & Reports'] },
    ],
    screensTitle: 'Multilingual mobile app',
    screensSub: 'Hindi · English · Telugu — same workflow, three field languages.',
    screens: [
      { kind: 'phone', label: 'Hindi UI', variant: 'bc-hi' },
      { kind: 'phone', label: 'English UI', variant: 'bc-en' },
      { kind: 'phone', label: 'Telugu UI', variant: 'bc-te' },
    ],
    tone: 'rose',
  },
  {
    id: 'revision-prep',
    num: '03',
    title: 'RevisionPrep',
    description: 'High-performance revision platform for IB and Cambridge students.',
    hero: { img: '/Portfolio%20svg/Revision%20Prep.svg', alt: 'RevisionPrep — platform visual' },
    industry: 'Edtech · IB · Cambridge',
    year: '2025',
    featureGroups: [
      { title: 'Goals', items: ['Curriculum-aligned question banks', 'Interactive Exam Practice', 'Performance analytics', 'Built-in calculator'] },
      { title: 'Features', items: ['AI-Powered Explanations', 'Predictive Analytics', 'Guided Learning', 'Practice Simulation'] },
    ],
    architecture: true,
    screensTitle: 'Product surfaces',
    screens: [
      { kind: 'desktop', label: 'Learning Gateway', variant: 'rp-gateway' },
      { kind: 'desktop', label: 'Precision Filtering', variant: 'rp-filter' },
      { kind: 'desktop', label: 'Guided Learning', variant: 'rp-guided' },
      { kind: 'desktop', label: 'Practice Simulation', variant: 'rp-sim' },
    ],
    tone: 'cream',
  },
  {
    id: 'vdts',
    num: '04',
    title: 'VDTS',
    description: 'Centralized incident management and ticket resolution platform.',
    hero: { img: '/Portfolio%20svg/VDTS.svg', alt: 'VDTS — platform visual' },
    industry: 'Enterprise · SaaS · Helpdesk',
    year: '2023',
    featureGroups: [
      { title: 'Core features', items: ['Unified Ticket System', 'Structured Workflows', 'Real-Time Visibility', 'Controlled Communication'] },
      { title: 'User roles', items: ['Admin', 'Consultant', 'Client'] },
    ],
    timeline: [
      ['01', 'Ticket Created'],
      ['02', 'Admin Assigns'],
      ['03', 'Consultant Processes'],
      ['04', 'Clarity Requested'],
      ['05', 'Solution Provided'],
      ['06', 'Client Confirms'],
    ],
    screensTitle: 'Operator surfaces',
    screens: [
      { kind: 'desktop', label: 'Ticket Management', variant: 'vd-tickets' },
      { kind: 'phone', label: 'Mobile Cards', variant: 'vd-mobile' },
      { kind: 'desktop', label: 'Status Dashboard', variant: 'vd-status' },
    ],
    tone: 'peach',
  },
  {
    id: 'sailyour-ai',
    num: '05',
    title: 'SailYour AI',
    description: 'AI-powered mock interview and placement readiness platform.',
    hero: { img: '/Portfolio%20svg/Sailyour%20AI.svg', alt: 'SailYour AI — platform visual' },
    industry: 'Edtech · AI · Placement',
    year: '2024',
    metrics: [
      ['7,265', 'Students onboarded'],
      ['3,671', 'Interviews conducted'],
      ['94%', 'Completion rate'],
      ['4.8×', 'Faster evaluations'],
    ],
    featureGroups: [
      { title: 'Features', items: ['AI Video Interviews', 'Computer Vision Scoring', 'Skill Radar Charts', 'Admin Analytics', 'AI Interview Summary'] },
    ],
    screensTitle: 'Product screens',
    screens: [
      { kind: 'desktop', label: 'AI Interview Screen', variant: 'sa-interview' },
      { kind: 'desktop', label: 'Admin Dashboard', variant: 'sa-admin' },
      { kind: 'desktop', label: 'Student Radar Charts', variant: 'sa-radar' },
    ],
    tone: 'rose',
  },
  {
    id: 'bhoomibox',
    num: '06',
    title: 'BhoomiBox',
    description: 'Direct-to-consumer farm-to-family platform connecting urban families with local farmers.',
    hero: { img: '/Portfolio%20svg/BhoomiBox.svg', alt: 'BhoomiBox — platform visual' },
    industry: 'Agritech · Mobile · D2C',
    year: '2024',
    coreMessage: 'Connecting users directly with farmers while eliminating middlemen.',
    featureGroups: [
      { title: 'App surfaces', items: ['Splash · Sign In', 'Farmer Home · Curating Harvest', 'Family Members · Farmer Story · Profile'] },
    ],
    screensTitle: 'Inside the app',
    screensWide: true,
    screens: [
      { kind: 'phone', label: 'Splash', variant: 'bb-splash' },
      { kind: 'phone', label: 'Sign In', variant: 'bb-signin' },
      { kind: 'phone', label: 'Farmer Home', variant: 'bb-home' },
      { kind: 'phone', label: 'Curating Harvest', variant: 'bb-curate' },
      { kind: 'phone', label: 'Family Members', variant: 'bb-family' },
      { kind: 'phone', label: 'Farmer Story', variant: 'bb-story' },
      { kind: 'phone', label: 'Farmer Profile', variant: 'bb-profile' },
    ],
    tone: 'cream',
  },
  {
    id: 'fundpitch',
    num: '07',
    title: 'FundPitch',
    description: 'Invite-only platform connecting companies with SEBI-registered financial partners.',
    hero: { img: '/Portfolio%20svg/FundPitch.svg', alt: 'FundPitch — platform visual' },
    industry: 'Fintech · SaaS · Investment',
    year: '2024',
    metrics: [
      ['100%', 'SEBI compliant'],
      ['5 roles', 'Multi-party deal flow'],
      ['Scalable', 'Tenant architecture'],
    ],
    featureGroups: [
      { title: 'Roles', items: ['Company', 'Merchant Banker', 'Advisor', 'Investor', 'Service Provider'] },
      { title: 'Features', items: ['Company Profiles', 'Document Vault', 'Stakeholder Invites', 'Deal Tracking'] },
    ],
    screensTitle: 'Inside the platform',
    screens: [
      { kind: 'desktop', label: 'Dashboard', variant: 'fp-dash' },
      { kind: 'desktop', label: 'Notifications', variant: 'fp-notif' },
      { kind: 'desktop', label: 'Deal Flow', variant: 'fp-deal' },
      { kind: 'desktop', label: 'Collaboration', variant: 'fp-collab' },
    ],
    tone: 'peach',
  },
];

// =============================================================
// Hero / Index / CaseSection / CTA
// =============================================================
function CaseHero() {
  return (
    <section className="page-hero" data-screen-label="01 Hero">
      <div className="wrap">
        <div className="page-hero-grid fade-up">
          <div className="col">
            <Eyebrow>Portfolio · 01 / Selected work</Eyebrow>
            <h1 className="page-h1">
              Case
              <br />
              <span className="ital">Studies</span>
            </h1>
          </div>
          <div className="col" style={{ paddingBottom: 6 }}>
            <p className="page-sub" style={{ marginTop: 0, maxWidth: 540 }}>
              Seven detailed builds — government skilling platforms, NGO field operations, AI
              tutors, enterprise helpdesks, agritech marketplaces, and invite-only fintech.
            </p>
            <div className="font-mono case-hero-stats">
              <span>
                <b>07</b> Cases
              </span>
              <span>
                <b>06</b> Industries
              </span>
              <span>
                <b>2023–2025</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseIndex() {
  const [active, setActive] = useState(CASES[0].id);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 200;
      let cur = CASES[0].id;
      for (const c of CASES) {
        const el = document.getElementById(c.id);
        if (el && el.offsetTop <= y) cur = c.id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const jump = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 120;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };
  return (
    <div className="case-index-shell" data-screen-label="02 Index">
      <div className="wrap">
        <div className="case-index fade-up">
          {CASES.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              onClick={(e) => jump(e, c.id)}
              className={`ci-chip ${active === c.id ? 'on' : ''}`}
            >
              <span className="ci-n">{c.num}</span>
              <span className="ci-t">{c.title}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function CaseSection({ c, index }) {
  const stripe = index % 2 === 1 ? 'paper' : 'bg';
  return (
    <section id={c.id} className={`case-detail ${stripe}`} data-screen-label={`${c.num} ${c.title}`}>
      <div className="wrap">
        <div className="cd-head fade-up">
          <div className="cd-head-left">
            <div className="cd-meta-row">
              <NodeBadge num={c.num} accent />
              <div>
                <div className="font-mono cd-kicker">Case {c.num} · {c.industry} · {c.year}</div>
                <h2 className="cd-title">{c.title}</h2>
                {c.subtitle ? <div className="cd-subtitle">{c.subtitle}</div> : null}
              </div>
            </div>
            <p className="cd-desc">{c.description}</p>
            {c.coreMessage ? <blockquote className="cd-quote">&ldquo;{c.coreMessage}&rdquo;</blockquote> : null}
            {c.badge ? (
              <div className="cd-badge">
                <span className="cd-badge-dot"></span>
                {c.badge}
              </div>
            ) : null}
          </div>
          <div className="cd-hero">
            <img src={c.hero.img} alt={c.hero.alt} loading="lazy" />
            <div className="cd-hero-overlay"></div>
            <span className="cd-hero-tag font-mono">{c.industry}</span>
          </div>
        </div>

        {c.launch ? (
          <figure className="cd-launch fade-up">
            <img src={c.launch.img} alt={c.launch.alt} loading="lazy" />
            {c.launch.caption ? (
              <figcaption className="cd-launch-cap">
                <span className="cd-launch-dot"></span>
                {c.launch.caption}
              </figcaption>
            ) : null}
          </figure>
        ) : null}

        {c.metrics?.length ? (
          <div className="cd-metrics fade-up">
            {c.metrics.map(([v, k], i) => (
              <div className="cd-metric" key={i}>
                <div className="cd-metric-v">{v}</div>
                <div className="cd-metric-k">{k}</div>
              </div>
            ))}
          </div>
        ) : null}

        {c.context?.items?.length ? (
          <div className="cd-context fade-up">
            <div className="cd-context-k">{c.context.title}</div>
            <div className="cd-context-row">
              {c.context.items.map((p) => (
                <span className="cd-context-pill" key={p}>
                  <span className="cd-context-mk"></span>
                  {p}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        {c.featureGroups?.length ? (
          <div className="cd-features fade-up">
            {c.featureGroups.map((g, i) => (
              <div className="cd-feature-group" key={i}>
                <div className="cd-feature-title font-mono">{g.title}</div>
                <ul className="cd-feature-list">
                  {g.items.map((f, j) => (
                    <li key={j}>
                      <span className="cd-f-n">{String(j + 1).padStart(2, '0')}</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : null}

        {c.architecture ? <ArchitectureDiagram /> : null}
        {c.timeline?.length ? <LifecycleTimeline items={c.timeline} /> : null}

        {c.screens?.length ? (
          <div className="cd-screens fade-up">
            {c.screensTitle || c.screensSub ? (
              <div className="cd-screens-head">
                {c.screensTitle ? <h3 className="cd-screens-h">{c.screensTitle}</h3> : null}
                {c.screensSub ? <p className="cd-screens-sub">{c.screensSub}</p> : null}
              </div>
            ) : null}
            <div className={`cd-screens-grid ${c.screensWide ? 'wide' : ''}`}>
              {c.screens.map((s, i) => (
                <ScreenMock key={i} s={s} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function CaseCTA() {
  return (
    <section className="case-cta" data-screen-label="CTA">
      <div className="wrap">
        <div className="case-cta-card fade-up">
          <div className="case-cta-grain" aria-hidden="true"></div>
          <div className="case-cta-glow" aria-hidden="true"></div>
          <Eyebrow>Engage</Eyebrow>
          <h2 className="case-cta-h">
            Engineering
            <br />
            <span className="ital-gradient">Intelligent Systems</span>
          </h2>
          <p className="case-cta-sub">
            Ready to move beyond ordinary software? We design scalable products, AI-driven
            workflows, and autonomous agents that engage users and streamline operations.
          </p>
          <div className="case-cta-actions">
            <Link to="/contact" className="case-cta-btn">
              Let&apos;s Collaborate
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
            <Link to="/services" className="case-cta-btn ghost">
              Explore services
              <Arrow />
            </Link>
          </div>
          <div className="case-cta-foot">
            <span className="font-mono">nithin@threepointolabs.com</span>
            <span className="font-mono">Hyderabad · Remote · Booking Q3</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================================
// Page styles (verbatim from original portfolio-page.jsx)
// =============================================================
const caseStyles = `
  /* hero stats */
  .case-hero-stats { display: flex; gap: 24px; flex-wrap: wrap; margin-top: 22px; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-soft); }
  .case-hero-stats b { color: var(--ink); font-weight: 500; margin-right: 6px; }

  /* sticky index */
  .case-index-shell { position: sticky; top: 88px; z-index: 30; padding: 12px 0 0; }
  .case-index {
    display: flex; gap: 6px; flex-wrap: nowrap; overflow-x: auto;
    padding: 8px;
    background: rgba(255,249,245,0.85);
    backdrop-filter: blur(12px) saturate(140%);
    -webkit-backdrop-filter: blur(12px) saturate(140%);
    border: var(--bd); border-radius: var(--r-pill);
    width: fit-content; max-width: 100%;
    margin: 0 auto;
    box-shadow: 0 12px 30px -18px rgba(186,47,88,0.18), 0 24px 60px -30px rgba(248,142,75,0.18);
    scrollbar-width: none;
  }
  .case-index::-webkit-scrollbar { display: none; }
  .ci-chip {
    display: inline-flex; align-items: center; gap: 10px;
    padding: 10px 16px; border-radius: 999px;
    font-size: 13px; color: var(--ink); opacity: 0.75;
    white-space: nowrap; flex: 0 0 auto;
    transition: all 0.25s cubic-bezier(.2,.7,.2,1);
  }
  .ci-chip:hover { opacity: 1; background: rgba(17,17,17,0.06); }
  .ci-chip.on { opacity: 1; background: var(--ink); color: #fff; }
  .ci-n { font-family: "JetBrains Mono", monospace; font-size: 10px; letter-spacing: 0.14em; opacity: 0.55; }
  .ci-chip.on .ci-n { color: #fff; opacity: 0.7; }

  /* case detail */
  .case-list { display: flex; flex-direction: column; }
  .case-detail { padding: 100px 0; position: relative; }
  .case-detail.paper { background: var(--paper); border-top: var(--bd); border-bottom: var(--bd); }

  .cd-head { display: grid; grid-template-columns: 1fr 1.05fr; gap: 32px; align-items: stretch; }
  @media (max-width: 980px) { .cd-head { grid-template-columns: 1fr; } }

  .cd-head-left { display: flex; flex-direction: column; gap: 18px; }
  .cd-meta-row { display: flex; gap: 18px; align-items: flex-start; }
  .cd-kicker { font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-soft); }
  .cd-title { font-family: "Space Grotesk", sans-serif; font-weight: 500; font-size: clamp(40px, 5.4vw, 72px); line-height: 0.96; letter-spacing: -0.04em; margin: 6px 0 0; }
  .cd-subtitle { font-family: "Instrument Serif", serif; font-style: italic; font-size: 22px; color: var(--berry); margin-top: 8px; }
  .cd-desc { font-size: 18px; color: var(--ink-soft); max-width: 540px; line-height: 1.55; margin: 0; }
  .cd-quote { font-family: "Instrument Serif", serif; font-style: italic; font-size: 22px; line-height: 1.4; padding: 14px 18px; background: rgba(248,142,75,0.10); border-left: 3px solid var(--orange); border-radius: 10px; margin: 0; }
  .cd-badge { display: inline-flex; align-items: center; gap: 10px; padding: 12px 18px; background: var(--ink); color: #fff; border-radius: 999px; font-size: 13px; align-self: flex-start; }
  .cd-badge-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--orange); box-shadow: 0 0 8px rgba(248,142,75,0.7); }

  .cd-hero { position: relative; border: var(--bd); border-radius: var(--r-card); overflow: hidden; aspect-ratio: 1208 / 810; background: #fff; }
  .cd-hero img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; display: block; transition: transform 1.2s cubic-bezier(.2,.7,.2,1); }
  .cd-hero:hover img { transform: scale(1.03); }
  .cd-hero-overlay {
    position: absolute; inset: 0;
    background: radial-gradient(60% 80% at 20% 100%, rgba(17,17,17,0.18), transparent 70%);
    pointer-events: none;
  }
  .cd-hero-tag { position: absolute; left: 20px; bottom: 20px; padding: 6px 12px; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; background: rgba(255,255,255,0.95); border: 1px solid rgba(17,17,17,0.4); border-radius: 999px; color: var(--ink); z-index: 2; }
  @media (max-width: 540px) { .cd-hero-tag { left: 12px; bottom: 12px; font-size: 10px; padding: 5px 10px; } }

  /* launch moment */
  .cd-launch { margin: 36px 0 0; border: var(--bd); border-radius: var(--r-card); overflow: hidden; background: #fff; }
  .cd-launch img { display: block; width: 100%; height: auto; object-fit: cover; }
  .cd-launch-cap { display: flex; align-items: center; gap: 10px; padding: 14px 20px; font-size: 13px; color: var(--ink-soft); border-top: var(--bd); background: var(--paper); }
  .cd-launch-dot { width: 8px; height: 8px; border-radius: 50%; flex: 0 0 auto; background: var(--orange); box-shadow: 0 0 8px rgba(248,142,75,0.7); }

  /* metrics */
  .cd-metrics { margin-top: 56px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
  .case-detail .cd-metrics { grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); }
  .cd-metric { border: var(--bd); border-radius: var(--r-card); background: #fff; padding: 28px 24px; position: relative; overflow: hidden; transition: transform 0.4s, box-shadow 0.4s; }
  .cd-metric::after { content:""; position: absolute; top: 16px; right: 16px; width: 10px; height: 10px; border-radius: 50%; background: var(--orange); box-shadow: 0 0 12px rgba(248,142,75,0.55); }
  .cd-metric:hover { transform: translateY(-4px); box-shadow: 0 20px 40px -22px rgba(186,47,88,0.20); }
  .cd-metric-v { font-family: "Space Grotesk", sans-serif; font-weight: 500; font-size: 44px; line-height: 1; letter-spacing: -0.04em; background: linear-gradient(120deg, #111 30%, #BA2F58 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
  .cd-metric-k { font-size: 13px; color: var(--ink-soft); margin-top: 10px; }

  /* context */
  .cd-context { margin-top: 40px; display: flex; gap: 24px; align-items: center; flex-wrap: wrap; }
  .cd-context-k { font-family: "JetBrains Mono", monospace; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-soft); }
  .cd-context-row { display: flex; gap: 8px; flex-wrap: wrap; }
  .cd-context-pill { display: inline-flex; align-items: center; gap: 8px; padding: 8px 14px; background: #fff; border: var(--bd); border-radius: 999px; font-family: "Space Grotesk", sans-serif; font-size: 14px; letter-spacing: -0.01em; transition: background 0.2s; }
  .cd-context-pill:hover { background: var(--peach); }
  .cd-context-mk { width: 14px; height: 14px; border-radius: 4px; background: linear-gradient(135deg, #F88E4B, #BA2F58); border: 1px solid var(--line); }

  /* features */
  .cd-features { margin-top: 56px; display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 18px; }
  .cd-feature-group { border: var(--bd); border-radius: var(--r-card); background: #fff; padding: 24px 26px; }
  .cd-feature-title { font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-soft); }
  .cd-feature-list { list-style: none; padding: 0; margin: 16px 0 0; }
  .cd-feature-list li { display: flex; gap: 14px; padding: 12px 0; border-top: 1px solid rgba(17,17,17,0.10); font-size: 15px; line-height: 1.4; }
  .cd-feature-list li:last-child { border-bottom: 1px solid rgba(17,17,17,0.10); }
  .cd-f-n { font-family: "JetBrains Mono", monospace; font-size: 11px; letter-spacing: 0.12em; opacity: 0.55; flex: 0 0 28px; padding-top: 2px; }

  /* architecture */
  .cd-arch { margin-top: 64px; }
  .cd-arch-head { margin-bottom: 22px; max-width: 720px; }
  .cd-arch-kicker { font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-soft); }
  .cd-arch-h { font-family: "Space Grotesk", sans-serif; font-weight: 500; font-size: clamp(28px, 3.6vw, 44px); line-height: 1; letter-spacing: -0.035em; margin: 10px 0 0; }
  .cd-arch-sub { font-size: 16px; color: var(--ink-soft); margin-top: 14px; line-height: 1.55; max-width: 600px; }
  .cd-arch-canvas { margin-top: 28px; border: var(--bd); border-radius: var(--r-card); background: #fff; padding: 28px; overflow: hidden; }
  .cd-arch-canvas svg { width: 100%; height: auto; display: block; }
  .cd-arch-legend { margin-top: 16px; display: flex; gap: 8px; flex-wrap: wrap; }
  .cd-arch-pill { display: inline-flex; align-items: center; gap: 10px; padding: 8px 14px; border: var(--bd); border-radius: 999px; font-family: "Space Grotesk", sans-serif; font-size: 13px; background: var(--bg); transition: background 0.2s; }
  .cd-arch-pill:hover { background: var(--peach); }
  .cd-arch-pill-n { font-family: "JetBrains Mono", monospace; font-size: 10px; letter-spacing: 0.14em; opacity: 0.55; }

  /* timeline */
  .cd-timeline { margin-top: 56px; }
  .cd-tl-head { margin-bottom: 22px; }
  .cd-tl-rail { position: relative; display: grid; grid-template-columns: repeat(6, 1fr); gap: 0; border: var(--bd); border-radius: var(--r-card); background: #fff; padding: 36px 24px 28px; overflow: hidden; }
  .cd-tl-line { position: absolute; left: 36px; right: 36px; top: 56px; height: 1.5px; background: repeating-linear-gradient(90deg, var(--ink) 0 6px, transparent 6px 12px); opacity: 0.4; }
  .cd-tl-step { position: relative; display: flex; flex-direction: column; align-items: center; gap: 14px; padding: 0 8px; }
  .cd-tl-dot { width: 44px; height: 44px; border-radius: 50%; background: var(--paper-2); border: 1px dashed var(--line); display: flex; align-items: center; justify-content: center; position: relative; z-index: 2; }
  .cd-tl-dot::after { content: ""; position: absolute; inset: 4px; border-radius: 50%; background: #fff; border: 1.5px solid var(--line); }
  .cd-tl-dot span { position: relative; z-index: 2; font-family: "JetBrains Mono", monospace; font-size: 11px; letter-spacing: 0.14em; }
  .cd-tl-step:hover .cd-tl-dot { background: conic-gradient(from 220deg at 50% 50%, #F88E4B 0%, #BA2F58 45%, #FFD6B8 75%, #F88E4B 100%); }
  .cd-tl-label { font-family: "Space Grotesk", sans-serif; font-size: 14px; text-align: center; letter-spacing: -0.015em; line-height: 1.2; }
  @media (max-width: 720px) { .cd-tl-rail { grid-template-columns: repeat(2, 1fr); gap: 18px; } .cd-tl-line { display: none; } }

  /* screens */
  .cd-screens { margin-top: 64px; }
  .cd-screens-head { margin-bottom: 22px; }
  .cd-screens-h { font-family: "Space Grotesk", sans-serif; font-weight: 500; font-size: clamp(28px, 3.6vw, 44px); line-height: 1; letter-spacing: -0.035em; margin: 0; }
  .cd-screens-sub { font-size: 16px; color: var(--ink-soft); margin: 10px 0 0; max-width: 540px; }
  .cd-screens-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
  .cd-screens-grid.wide { grid-template-columns: repeat(4, 1fr); gap: 14px; }
  @media (max-width: 1080px) { .cd-screens-grid { grid-template-columns: repeat(2, 1fr); } .cd-screens-grid.wide { grid-template-columns: repeat(3, 1fr); } }
  @media (max-width: 640px) { .cd-screens-grid, .cd-screens-grid.wide { grid-template-columns: 1fr; } }

  /* phone frame */
  .phone-frame { display: flex; flex-direction: column; align-items: center; gap: 12px; }
  .phone-bezel { width: 100%; max-width: 280px; aspect-ratio: 9 / 18; background: #111; border-radius: 38px; padding: 10px; position: relative; box-shadow: 0 30px 50px -28px rgba(186,47,88,0.30); }
  .phone-notch { position: absolute; top: 18px; left: 50%; transform: translateX(-50%); width: 96px; height: 22px; background: #111; border-radius: 999px; z-index: 3; }
  .phone-screen { width: 100%; height: 100%; background: var(--bg); border-radius: 28px; overflow: hidden; position: relative; }
  .phone-bar { position: absolute; bottom: 8px; left: 50%; transform: translateX(-50%); width: 80px; height: 4px; background: rgba(255,255,255,0.6); border-radius: 999px; z-index: 3; }
  .phone-label { font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-soft); }

  /* desktop frame */
  .desktop-frame { display: flex; flex-direction: column; gap: 12px; }
  .dw-bezel { border: var(--bd); border-radius: 14px; background: #111; overflow: hidden; box-shadow: 0 30px 50px -28px rgba(186,47,88,0.30); }
  .dw-bar { display: flex; align-items: center; gap: 6px; padding: 10px 14px; background: #111; }
  .dw-bar > span { width: 10px; height: 10px; border-radius: 50%; background: rgba(255,255,255,0.3); }
  .dw-bar > span:nth-child(1) { background: #F88E4B; }
  .dw-bar > span:nth-child(2) { background: #F6B0C7; }
  .dw-bar > span:nth-child(3) { background: #FFD6B8; }
  .dw-addr { margin-left: 12px; padding: 4px 12px; background: rgba(255,255,255,0.08); border-radius: 6px; color: rgba(255,255,255,0.7); font-family: "JetBrains Mono", monospace; font-size: 10px; }
  .dw-screen { aspect-ratio: 16 / 10; background: var(--bg); overflow: hidden; position: relative; }

  /* mock UI primitives */
  .mock-pad { padding: 16px; height: 100%; display: flex; flex-direction: column; gap: 12px; }
  .mock-head { display: flex; justify-content: space-between; align-items: center; }
  .mock-h-title { font-family: "Space Grotesk", sans-serif; font-size: 15px; font-weight: 500; letter-spacing: -0.015em; }
  .mock-chip { font-family: "JetBrains Mono", monospace; font-size: 10px; letter-spacing: 0.14em; padding: 4px 10px; background: var(--paper); border: 1px solid rgba(17,17,17,0.15); border-radius: 999px; color: var(--ink-soft); }
  .mock-chip.orange { background: var(--orange); border-color: var(--orange); color: var(--ink); }
  .mock-pill { font-family: "JetBrains Mono", monospace; font-size: 10px; letter-spacing: 0.14em; padding: 5px 10px; border: 1px solid rgba(17,17,17,0.25); border-radius: 999px; color: var(--ink); background: transparent; }
  .mock-pill.on { background: var(--ink); color: #fff; border-color: var(--ink); }
  .mock-row { display: flex; align-items: center; }
  .mock-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
  .ms { padding: 10px 12px; background: #fff; border: 1px solid rgba(17,17,17,0.10); border-radius: 8px; }
  .ms-v { font-family: "Space Grotesk", sans-serif; font-size: 18px; font-weight: 500; letter-spacing: -0.02em; }
  .ms-k { font-family: "JetBrains Mono", monospace; font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-soft); margin-top: 2px; }

  .mock-table { display: flex; flex-direction: column; gap: 4px; flex: 1; overflow: hidden; }
  .mt-row { display: grid; grid-template-columns: 18px 1fr auto 100px; gap: 10px; align-items: center; padding: 8px 10px; background: #fff; border: 1px solid rgba(17,17,17,0.08); border-radius: 6px; }
  .mt-av { width: 18px; height: 18px; border-radius: 5px; border: 1px solid rgba(17,17,17,0.15); }
  .mt-name { font-family: "Space Grotesk", sans-serif; font-size: 13px; letter-spacing: -0.01em; }
  .mt-meta { font-family: "JetBrains Mono", monospace; font-size: 10px; letter-spacing: 0.1em; color: var(--ink-soft); }
  .mt-bar { background: rgba(17,17,17,0.08); border-radius: 999px; height: 6px; overflow: hidden; }
  .mt-bar span { display: block; height: 100%; background: linear-gradient(90deg, #F88E4B, #BA2F58); }
  .mt-status { font-family: "JetBrains Mono", monospace; font-size: 10px; letter-spacing: 0.12em; }

  .mock-grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; }
  .mock-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; }
  .mg-card { padding: 10px; background: #fff; border: 1px solid rgba(17,17,17,0.10); border-radius: 8px; display: flex; flex-direction: column; gap: 4px; }
  .mg-h { font-family: "Space Grotesk", sans-serif; font-size: 12px; }
  .mg-v { font-family: "Space Grotesk", sans-serif; font-weight: 500; font-size: 18px; letter-spacing: -0.03em; }
  .mg-k { font-family: "JetBrains Mono", monospace; font-size: 9px; letter-spacing: 0.12em; color: var(--ink-soft); }
  .mg-bar { background: rgba(17,17,17,0.08); border-radius: 999px; height: 4px; overflow: hidden; margin-top: 4px; }
  .mg-bar span { display: block; height: 100%; background: var(--orange); }

  .mock-chart { background: #fff; border: 1px solid rgba(17,17,17,0.10); border-radius: 8px; padding: 8px; height: 120px; }
  .mock-chart svg { width: 100%; height: 100%; }

  .mock-chat { display: flex; flex-direction: column; gap: 6px; margin-top: 8px; }
  .mc-msg { padding: 8px 12px; border-radius: 12px; font-size: 12px; max-width: 80%; line-height: 1.35; }
  .mc-msg.you { background: rgba(17,17,17,0.06); align-self: flex-end; }
  .mc-msg.ai { background: rgba(248,142,75,0.18); align-self: flex-start; }
  .mc-msg.sm { font-family: "JetBrains Mono", monospace; font-size: 10px; letter-spacing: 0.12em; opacity: 0.85; }
  .rp-guided .mc-msg.you, .mock-pad[style*="0B0B0B"] .mc-msg.you { background: rgba(255,255,255,0.10); color: #fff; }
  .mock-pad[style*="0B0B0B"] .mc-msg.ai { background: rgba(248,142,75,0.28); color: #fff; }

  .mock-options { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-top: 10px; }
  .mo { display: flex; align-items: center; gap: 10px; padding: 8px 10px; background: #fff; border: 1px solid rgba(17,17,17,0.15); border-radius: 8px; font-size: 12px; }
  .mo.on { background: var(--orange); border-color: var(--orange); }
  .mo span { font-family: "Space Grotesk", sans-serif; font-weight: 500; }

  .mc-cards { display: flex; flex-direction: column; gap: 8px; }
  .mcc { background: #fff; border: 1px solid rgba(17,17,17,0.10); border-radius: 10px; padding: 10px 12px; }
  .mcc-head { display: flex; justify-content: space-between; }
  .mcc-id { font-family: "JetBrains Mono", monospace; font-size: 10px; letter-spacing: 0.14em; color: var(--ink-soft); }
  .mcc-tag { font-family: "JetBrains Mono", monospace; font-size: 9px; letter-spacing: 0.14em; padding: 2px 8px; border-radius: 999px; }
  .mcc-tag.high { background: #BA2F58; color: #fff; }
  .mcc-tag.med { background: var(--orange); color: var(--ink); }
  .mcc-tag.low { background: var(--peach); color: var(--ink); }
  .mcc-title { font-family: "Space Grotesk", sans-serif; font-size: 14px; letter-spacing: -0.015em; margin-top: 4px; }
  .mcc-meta { font-family: "JetBrains Mono", monospace; font-size: 10px; letter-spacing: 0.12em; color: var(--ink-soft); margin-top: 4px; }

  /* sailyour ai */
  .sa-stage { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 10px; }
  .sa-cam, .sa-ai { background: rgba(255,255,255,0.06); border-radius: 10px; padding: 12px; height: 100px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; font-family: "JetBrains Mono", monospace; font-size: 10px; letter-spacing: 0.12em; color: rgba(255,255,255,0.65); border: 1px solid rgba(255,255,255,0.1); }
  .sa-cam svg { width: 50%; height: 60%; }
  .sa-ai-orb { width: 44px; height: 44px; border-radius: 50%; background: radial-gradient(circle, #F88E4B 0%, #BA2F58 70%, rgba(186,47,88,0) 100%); box-shadow: 0 0 20px rgba(248,142,75,0.5); }
  .sa-wave { display: flex; align-items: end; gap: 3px; height: 40px; margin-top: 10px; padding: 6px; background: rgba(255,255,255,0.05); border-radius: 8px; }
  .sa-wave span { flex: 1; border-radius: 2px; min-height: 4px; }

  .mock-radar { display: flex; align-items: center; justify-content: center; padding: 14px; background: #fff; border: 1px solid rgba(17,17,17,0.10); border-radius: 10px; flex: 1; }
  .mock-radar svg { width: 80%; max-width: 240px; height: auto; }

  /* bhoomibox */
  .bb-screen { padding: 16px; height: 100%; display: flex; flex-direction: column; gap: 8px; }
  .bb-logo { width: 56px; height: 56px; border-radius: 16px; background: #fff; display: flex; align-items: center; justify-content: center; font-family: "Space Grotesk", sans-serif; font-weight: 500; font-size: 28px; color: var(--berry); border: 1.5px solid var(--line); }
  .bb-brand { font-family: "Space Grotesk", sans-serif; font-size: 22px; letter-spacing: -0.03em; }
  .bb-tag { font-family: "Instrument Serif", serif; font-style: italic; font-size: 14px; color: var(--ink-soft); }
  .bb-mini-h { font-family: "Space Grotesk", sans-serif; font-size: 16px; letter-spacing: -0.02em; }
  .bb-mini-sub { font-family: "JetBrains Mono", monospace; font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-soft); }
  .bb-field { padding: 10px 12px; background: #fff; border: 1px solid rgba(17,17,17,0.15); border-radius: 10px; font-family: "JetBrains Mono", monospace; font-size: 11px; color: var(--ink-soft); }
  .bb-cta { padding: 12px; background: var(--ink); color: #fff; border-radius: 999px; text-align: center; font-size: 13px; margin-top: auto; }
  .bb-card-list { display: flex; flex-direction: column; gap: 8px; margin-top: 8px; }
  .bb-c { display: flex; gap: 10px; padding: 8px; background: #fff; border: 1px solid rgba(17,17,17,0.10); border-radius: 12px; align-items: center; }
  .bb-c-img { width: 36px; height: 36px; border-radius: 10px; border: 1px solid rgba(17,17,17,0.10); flex: 0 0 auto; }
  .bb-c-n { font-family: "Space Grotesk", sans-serif; font-size: 13px; letter-spacing: -0.01em; }
  .bb-c-m { font-family: "JetBrains Mono", monospace; font-size: 10px; letter-spacing: 0.12em; color: var(--ink-soft); }
  .bb-curate-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-top: 4px; }
  .bb-curate-cell { padding: 10px 12px; background: #fff; border: 1px solid rgba(17,17,17,0.10); border-radius: 10px; font-size: 12px; display: flex; align-items: center; gap: 8px; }
  .bb-curate-cell.on { background: var(--peach); border-color: var(--line); }
  .bb-curate-dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(17,17,17,0.2); }
  .bb-curate-cell.on .bb-curate-dot { background: var(--berry); box-shadow: 0 0 6px rgba(186,47,88,0.6); }
  .bb-hero { height: 90px; border-radius: 12px; }
  .bb-pf-top { display: flex; flex-direction: column; align-items: center; gap: 6px; }
  .bb-pf-av { width: 64px; height: 64px; border-radius: 50%; background: linear-gradient(160deg,#FFD6B8,#F6B0C7); border: 1.5px solid var(--line); }

  /* blue cross multilingual */
  .bc-screen { padding: 16px; height: 100%; display: flex; flex-direction: column; gap: 12px; }
  .bc-top { display: flex; justify-content: space-between; align-items: center; }
  .bc-h { font-family: "Space Grotesk", sans-serif; font-size: 16px; letter-spacing: -0.02em; }
  .bc-lang { font-family: "JetBrains Mono", monospace; font-size: 9px; letter-spacing: 0.14em; padding: 3px 8px; background: var(--peach); border-radius: 999px; }
  .bc-q { font-family: "Space Grotesk", sans-serif; font-size: 13px; color: var(--ink-soft); }
  .bc-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; }
  .bc-st { padding: 10px; background: #fff; border: 1px solid rgba(17,17,17,0.10); border-radius: 10px; text-align: center; }
  .bc-st-v { font-family: "Space Grotesk", sans-serif; font-weight: 500; font-size: 22px; letter-spacing: -0.03em; }
  .bc-st-k { font-family: "JetBrains Mono", monospace; font-size: 9px; letter-spacing: 0.12em; color: var(--ink-soft); margin-top: 4px; }
  .bc-actions { margin-top: auto; display: flex; flex-direction: column; gap: 6px; }
  .bc-a { padding: 12px 14px; background: #fff; border: 1px solid rgba(17,17,17,0.15); border-radius: 12px; font-family: "Space Grotesk", sans-serif; font-size: 13px; }
  .bc-a.primary { background: var(--ink); color: #fff; border-color: var(--ink); }

  /* fundpitch flow */
  .fp-flow { display: grid; grid-template-columns: repeat(5, 1fr); gap: 6px; margin-top: 8px; }
  .fp-flow-step { display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 10px 6px; background: #fff; border: 1px solid rgba(17,17,17,0.10); border-radius: 10px; }
  .fp-flow-dot { width: 28px; height: 28px; border-radius: 50%; background: var(--paper-2); border: 1px dashed var(--line); display: flex; align-items: center; justify-content: center; font-family: "JetBrains Mono", monospace; font-size: 10px; }
  .fp-flow-step.done .fp-flow-dot { background: var(--ink); color: #fff; border-style: solid; }
  .fp-flow-step.on .fp-flow-dot { background: conic-gradient(from 220deg at 50% 50%, #F88E4B 0%, #BA2F58 45%, #FFD6B8 75%, #F88E4B 100%); border-style: solid; }
  .fp-flow-l { font-family: "Space Grotesk", sans-serif; font-size: 11px; }

  /* CTA reused */
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

export default function PortfolioPage() {
  useReveal();
  return (
    <>
      <title>Portfolio — 3.0 Labs</title>
      <meta
        name="description"
        content="Seven detailed builds — government skilling platforms, NGO field operations, AI tutors, enterprise helpdesks, agritech marketplaces, and fintech."
      />
      <PageNavbar active="portfolio" />
      <CaseHero />
      <CaseIndex />
      <div className="case-list">
        {CASES.map((c, i) => (
          <CaseSection key={c.id} c={c} index={i} />
        ))}
      </div>
      <CaseCTA />
      <PageFooter />
      <style>{caseStyles}</style>
    </>
  );
}
