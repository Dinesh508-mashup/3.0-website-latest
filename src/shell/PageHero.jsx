import { Eyebrow } from '@/components';

export function PageHero({ index, kicker, title, italicWord, sub, meta }) {
  const hasMeta = !!meta;
  return (
    <section
      className={`page-hero ${hasMeta ? '' : 'no-meta'}`}
      data-screen-label={`${index} Hero`}
    >
      <div className="wrap">
        <div className="page-hero-grid fade-up">
          <div className="col">
            <Eyebrow>{kicker}</Eyebrow>
            <h1 className="page-h1">
              {title.before}
              {italicWord ? <span className="ital">{italicWord}</span> : null}
              {title.after}
            </h1>
            {sub && hasMeta ? <p className="page-sub">{sub}</p> : null}
          </div>
          {hasMeta ? (
            <div className="page-hero-meta">
              {meta.map(([k, v]) => (
                <div className="hm-item" key={k}>
                  <div className="hm-k">{k}</div>
                  <div className="hm-v">{v}</div>
                </div>
              ))}
            </div>
          ) : sub ? (
            <div className="col page-hero-aside">
              <p className="page-sub">{sub}</p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
