import useInView from '../hooks/useInView.js';

const services = [
  {
    icon: '🖥',
    color: '#38bdf8',
    name: 'Full-Stack Web Development',
    desc: 'End-to-end web applications using React, Node.js, Express and MongoDB.',
    stat: '15+ Projects',
    statIcon: '📈',
    badge: 'Most Requested',
  },
  {
    icon: '🎨',
    color: '#a06bea',
    name: 'Frontend Development',
    desc: 'Fast, responsive interfaces built with React, Tailwind CSS and modern UI/UX principles.',
    stat: '10+ Projects',
    statIcon: '🔗',
  },
  {
    icon: '{ }',
    color: '#34d399',
    name: 'Backend & API Development',
    desc: 'Secure, efficient REST APIs with Node.js, Express and industry best practices.',
    stat: '8+ Projects',
    statIcon: '📊',
  },
  {
    icon: '🗄',
    color: '#f5a623',
    name: 'Database Design & Management',
    desc: 'Well-structured MongoDB databases and efficient queries for high-performance applications.',
    stat: '10+ Projects',
    statIcon: '🗄',
  },
  {
    icon: '🛒',
    color: '#e8496a',
    name: 'E-Commerce Development',
    desc: 'Product listings, cart systems, checkout flows and payment integration.',
    stat: '6+ Projects',
    statIcon: '🗄',
  },
  {
    icon: '☁',
    color: '#22d3ee',
    name: 'Deployment & Hosting Support',
    desc: 'Cloud deployment with Vercel, Render and other platforms with CI/CD and monitoring.',
    stat: '12+ Deployments',
    statIcon: '☁',
  },
];

export default function Service() {
  const [gridRef, inView] = useInView();

  return (
    <section id="services" className="container services-section" style={{ padding: '60px 0' }}>
      <div className="services-header">
        <span className="services-badge">• WHAT I CAN DO FOR YOU</span>
        <h2 className="services-title">
          Services I <span className="gradient-text">Provide</span>
        </h2>
        <p className="section-subtitle">
          Design and development services for fast, modern digital experiences.
        </p>
        <span className="services-dots">
          <span /><span className="dot-active-mid" /><span />
        </span>
      </div>

      <div ref={gridRef} className={`grid grid-3 services-grid stagger-grid ${inView ? 'in-view' : ''}`}>
        {services.map((s) => (
          <div key={s.name} className="service-card" style={{ borderColor: `${s.color}55` }}>
            {s.badge && (
              <span className="service-badge" style={{ background: `${s.color}22`, color: s.color }}>
                ★ {s.badge}
              </span>
            )}
            <div className="service-icon" style={{ background: `${s.color}22`, color: s.color }}>
              {s.icon}
            </div>
            <h3>{s.name}</h3>
            <p>{s.desc}</p>
            <div className="service-stat" style={{ color: s.color }}>
              {s.statIcon} {s.stat}
            </div>
          </div>
        ))}
      </div>

      <div className="services-cta">
        <div className="services-cta-left">
          <span className="services-cta-icon">🚀</span>
          <div>
            <h3>Ready to build something amazing?</h3>
            <p>Let&apos;s work together and turn your ideas into reality.</p>
          </div>
        </div>
        <a href="#contact" className="btn btn-primary">
          Let&apos;s Work Together {'\u2192'}
        </a>
      </div>
    </section>
  );
}