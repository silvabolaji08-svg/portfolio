import { GitHubIcon, LinkedInIcon, TwitterIcon, MailIcon } from './Icons.jsx';
import useInView from '../hooks/useInView.js';
import CountUp from './CountUp.jsx';
import BlurText from './BlurText.jsx';
import SpotlightCard from './SpotlightCard.jsx';
import OrbitImages from './OrbitImages.jsx';

const stats = [
  { icon: '</>', bg: 'rgba(232,73,106,0.15)', color: 'var(--pink)', number: '5+', label: 'Projects Completed' },
  { icon: '🏆', bg: 'rgba(245,185,66,0.15)', color: '#f5b942', number: '2+', label: 'Years Coding' },
  { icon: '👥', bg: 'rgba(74,144,226,0.15)', color: 'var(--blue)', number: '10+', label: 'Happy Clients' },
  { icon: '🚀', bg: 'rgba(160,107,234,0.15)', color: 'var(--purple)', number: '100%', label: 'Client Satisfaction' },
];

const techLogos = [
  '/tech-icons/react.svg',
  '/tech-icons/javascript.svg',
  '/tech-icons/tailwind.svg',
  '/tech-icons/nodejs.svg',
  '/tech-icons/mongodb.svg',
  '/tech-icons/git.svg',
];

export default function Hero() {
  const [statsRef, statsInView] = useInView();

  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div>
          <span className="hero-badge-available">
            <span className="hero-badge-dot" /> Available for internships
          </span>

          <p className="hero-greeting-plain">Hi, I&apos;m</p>

          <BlurText
            text="Mobolaji"
            className="hero-bigname"
            animateBy="letters"
            direction="top"
            delay={80}
          />

          <p className="hero-desc">
            MERN Stack Developer building fast, modern, and production-ready web applications.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary btn-glow">View Projects →</a>
            <a href="#contact" className="btn btn-neutral">Contact Me ✉</a>
          </div>

          <div className="hero-social">
            <div className="hero-social-icons">
              <a href="#" aria-label="GitHub"><GitHubIcon /></a>
              <a href="#" aria-label="LinkedIn"><LinkedInIcon /></a>
              <a href="#" aria-label="Twitter"><TwitterIcon /></a>
              <a href="#" aria-label="Email"><MailIcon /></a>
            </div>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <OrbitImages
            images={techLogos}
            shape="circle"
            radius={220}
            baseWidth={520}
            duration={30}
            itemSize={44}
            responsive={true}
            showPath={false}
            className="hero-orbit"
          />
          <SpotlightCard className="hero-photo-ring hero-spotlight" spotlightColor="rgba(74, 144, 226, 0.35)">
            <img src="/public/d6b29005095ceffe9acb324ba359b1591a30345c39de668a09e6ad3be87df3ab.png" alt="Portrait of Mobolaji" />
          </SpotlightCard>
        </div>
      </div>

      <div className="container">
        <div ref={statsRef} className="stats-bar">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`stat-item ${i !== stats.length - 1 ? 'stat-item-divider' : ''}`}
            >
              <div className="stat-icon" style={{ background: s.bg, color: s.color }}>
                {s.icon}
              </div>
              <div>
                <div className="stat-number">
                  <CountUp value={s.number} inView={statsInView} />
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}