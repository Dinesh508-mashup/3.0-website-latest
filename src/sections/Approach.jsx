import { Eyebrow } from '@/components';

const STEPS = [
  { n: '01', t: 'Start with the Problem', angle: -90 },
  { n: '02', t: 'Decide What to Build First', angle: -30 },
  { n: '03', t: 'Design for an Unclear Future', angle: 30 },
  { n: '04', t: 'Engineer Through Rapid Iterations', angle: 90 },
  { n: '05', t: 'Adapt with a Founder’s Mindset', angle: 150 },
  { n: '06', t: 'Validate Before Committing', angle: 210 },
];

const place = (angleDeg) => {
  const a = (angleDeg * Math.PI) / 180;
  const rx = 40;
  const ry = 38;
  return { left: `${50 + rx * Math.cos(a)}%`, top: `${50 + ry * Math.sin(a)}%` };
};

export function Approach() {
  return (
    <section className="section approach" data-screen-label="03 Approach">
      <div className="wrap">
        <div className="section-head fade-up">
          <div>
            <Eyebrow>03 / Method</Eyebrow>
            <h2>
              Our product engineering
              <br />
              operating system
            </h2>
          </div>
          <div className="right">
            A six-step loop we run for every engagement — from early discovery to validation.
            Lightweight, repeatable, and tuned for AI products that change shape mid-build.
          </div>
        </div>

        <div className="approach-stage fade-up">
          <svg className="lines" viewBox="0 0 1100 700" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <pattern id="dot" width="6" height="6" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.8" fill="rgba(17,17,17,0.25)" />
              </pattern>
            </defs>
            <ellipse cx="550" cy="350" rx="440" ry="266" fill="none" stroke="rgba(17,17,17,0.35)" strokeWidth="1" strokeDasharray="3 5" />
            <ellipse cx="550" cy="350" rx="380" ry="220" fill="none" stroke="rgba(17,17,17,0.15)" strokeWidth="1" strokeDasharray="3 5" />
            {STEPS.map((s, i) => {
              const a = (s.angle * Math.PI) / 180;
              const x = 550 + 440 * Math.cos(a);
              const y = 350 + 266 * Math.sin(a);
              return (
                <line
                  key={i}
                  x1="550"
                  y1="350"
                  x2={x}
                  y2={y}
                  stroke="rgba(17,17,17,0.18)"
                  strokeWidth="1"
                  strokeDasharray="2 4"
                />
              );
            })}
          </svg>

          <div className="node center" style={{ left: '50%', top: '50%' }}>
            <div className="ring">
              <div className="inner">
                <div className="num">3.0</div>
                <div className="sub">Operating Loop</div>
              </div>
            </div>
          </div>

          {STEPS.map((s) => (
            <div className="node" key={s.n} style={place(s.angle)}>
              <div className="ring">
                <div className="num">{s.n}</div>
              </div>
              <div className="step-tag">Step {s.n}</div>
              <div className="title">{s.t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
