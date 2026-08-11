import { ReactIcon, NodeIcon, MongoIcon, TailwindIcon, GitHubIconFilled, NextIcon } from './SkillIcons.jsx';
import { FolderIcon, RocketIcon, StarIcon } from './AboutIcons.jsx';

const techRow = [
  { icon: <ReactIcon />, name: 'React', color: '#38bdf8' },
  { icon: <NextIcon />, name: 'Next.js', color: '#9aa4bd' },
  { icon: <NodeIcon />, name: 'Node.js', color: '#68a063' },
  { icon: <MongoIcon />, name: 'MongoDB', color: '#47a248' },
  { icon: <TailwindIcon />, name: 'Tailwind CSS', color: '#38bdf8' },
  { icon: <GitHubIconFilled />, name: 'Git & GitHub', color: '#9aa4bd' },
];

const aboutStats = [
  { icon: <FolderIcon />, number: '10+', label: 'Projects Completed' },
  { icon: <RocketIcon />, number: '1+', label: 'Years Learning' },
  { icon: <StarIcon />, number: '100%', label: 'Dedication & Consistency' },
];

export default function AboutFull() {
  return (
    <section id="about" className="container about-v2">
      <div className="about-photo-side">
        <div className="about-photo-card">
          <div className="about-photo-circle">
            <img src="/public/d6b29005095ceffe9acb324ba359b1591a30345c39de668a09e6ad3be87df3ab.png" alt="Mobolaji" />
          </div>
        </div>
        <span className="hero-badge-available about-available-badge">
          <span className="hero-badge-dot" /> Available for opportunities
        </span>
      </div>

      <div className="about-content-side">
        <span className="about-badge">• GET TO KNOW ME</span>
        <h2 className="about-heading">About Me</h2>
        <span className="skills-underline about-underline" />

        <p className="about-desc">
          I&apos;m a Full-Stack Developer specializing in the MERN stack. I build
          modern, scalable, and user-friendly web applications.
        </p>
        <p className="about-desc">
          I enjoy solving problems, writing clean code, and learning new
          technologies. I&apos;m constantly exploring ways to improve my skills
          and deliver great digital experiences.
        </p>

        <div className="about-tech-row">
          {techRow.map((t) => (
            <span key={t.name} className="about-tech-pill" style={{ color: t.color }}>
              {t.icon} {t.name}
            </span>
          ))}
        </div>

        <div className="about-stats-grid">
          {aboutStats.map((s) => (
            <div key={s.label} className="about-stat-card">
              <div className="about-stat-icon">{s.icon}</div>
              <div className="about-stat-number">{s.number}</div>
              <div className="about-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}