import { Link } from 'react-router-dom';
import { Arrow, Eyebrow, NodeBadge } from '@/components';
import { portfolioProjects } from './portfolioData';

const CASE_STUDY_ROUTES = {
  'bfsi-skill-portal': '/portfolio/bfsi-skill-portal',
  'blue-cross-hyderabad': '/portfolio/blue-cross-hyderabad',
  'revision-prep': '/portfolio/revision-prep',
  'vdts': '/portfolio/vdts',
  'sailyour-ai': '/portfolio/sailyour-ai',
  'bhoomibox': '/portfolio/bhoomibox',
  'fundpitch': '/portfolio/fundpitch',
};

export function PortfolioIndex() {
  return (
    <section className="section portfolio-index-section" data-screen-label="02 Portfolio Index">
      <div className="wrap">
        <div className="filter-bar fade-up" aria-label="Portfolio case links">
          {portfolioProjects.map((project) => (
            <a className="chip" href={`#${project.id}`} key={project.id}>
              {project.number} / {project.title}
            </a>
          ))}
          <span className="count">{portfolioProjects.length} selected builds</span>
        </div>
      </div>
    </section>
  );
}

export function PortfolioShowcase() {
  return (
    <section className="section portfolio-showcase" data-screen-label="03 Portfolio Work">
      <div className="wrap">
        <div className="work-grid portfolio-work-grid">
          {portfolioProjects.map((project, index) => {
            const route = CASE_STUDY_ROUTES[project.id];
            const card = (
              <article
                className="work-card portfolio-work-card fade-up"
                id={project.id}
                key={project.id}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="frame portfolio-work-media">
                  <img src={project.image} alt={`${project.title} product visual`} loading="lazy" />
                </div>
                <div className="body">
                  <h2 className="h">{project.title}</h2>
                  <p className="desc">{project.summary}</p>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            );
            return route ? (
              <Link to={route} key={project.id} style={{ display: 'contents' }}>
                {card}
              </Link>
            ) : card;
          })}
        </div>
      </div>
    </section>
  );
}

export function PortfolioProcess() {
  const steps = [
    ['01', 'Product Strategy', 'We define user roles, workflows, metrics, and operational constraints before interface work begins.'],
    ['02', 'System Design', 'The product surface, dashboard model, data paths, and automation layer are shaped together.'],
    ['03', 'Delivery', 'We ship production-ready interfaces with responsive layouts, clean handoffs, and maintainable code.'],
  ];

  return (
    <section className="section paper portfolio-process" data-screen-label="04 Portfolio Process">
      <div className="wrap">
        <div className="sec-head fade-up">
          <div>
            <Eyebrow>04 / Pattern</Eyebrow>
            <h2>How these builds hold together</h2>
          </div>
          <div className="right">
            Each project combines product thinking, workflow engineering, and interface polish
            instead of treating them as separate tracks.
          </div>
        </div>
        <div className="portfolio-process-grid">
          {steps.map(([num, title, text]) => (
            <div className="portfolio-process-card fade-up" key={num}>
              <NodeBadge num={num} accent />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PortfolioNextStep() {
  return (
    <section className="section portfolio-next" data-screen-label="05 Portfolio Next Step">
      <div className="wrap">
        <div className="portfolio-next-card fade-up">
          <div>
            <Eyebrow>Engage</Eyebrow>
            <h2>
              Building something
              <br />
              <span className="ital-gradient">workflow-heavy?</span>
            </h2>
          </div>
          <p>
            We turn operational complexity into crisp product systems: dashboards, mobile flows,
            AI layers, and the glue that makes them reliable.
          </p>
          <Link to="/contact" className="btn btn-dark">
            Start a project <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
