import { Eyebrow } from '@/components';

const LOGO_TIMES = [
  '122006', '122044', '122112', '122142', '122211', '122228',
  '122257', '122313', '122327', '122341', '122357', '122411',
];
const LOGOS = LOGO_TIMES.map(
  (t) => `/client%20logos/client%20logos/Screenshot%202026-03-23%20${t}.png`,
);

export function ProductsShipped() {
  // duplicate for seamless marquee
  const loop = [...LOGOS, ...LOGOS];

  return (
    <section className="section" data-screen-label="02 Products Shipped">
      <div className="wrap">
        <div className="section-head fade-up">
          <div>
            <Eyebrow>02 / Track Record</Eyebrow>
            <h2>Products shipped</h2>
          </div>
          <div className="right">
            From early-stage MVPs to production AI systems — a snapshot of what we&apos;ve built
            with founders and product teams over the last four years.
          </div>
        </div>

        <div className="marquee-box fade-up">
          <div className="marquee-track">
            {loop.map((src, i) => (
              <div className="marquee-item" key={i}>
                <img src={src} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
