import {
  ReactIcon, JavaScriptIcon, TailwindIcon, NodeIcon,
  ExpressIcon, MongoIcon, GitIcon, GitHubIconFilled,
} from './SkillIcons.jsx';
import useInView from '../hooks/useInView.js';
import CountUp from './CountUp.jsx';

const skills = [
  { icon: <ReactIcon />, name: 'React', desc: 'Building fast, interactive, and component-based UIs with clean state management.', level: 'Advanced', percent: 90, color: '#38bdf8' },
  { icon: <JavaScriptIcon />, name: 'JavaScript', desc: 'Writing efficient, modern, and optimized code for both frontend and backend logic.', level: 'Advanced', percent: 85, color: '#f0db4f' },
  { icon: <TailwindIcon />, name: 'Tailwind CSS', desc: 'Creating responsive, modern, and clean layouts quickly using utility-first styling.', level: 'Advanced', percent: 90, color: '#38bdf8' },
  { icon: <NodeIcon />, name: 'Node.js', desc: 'Developing scalable backend logic and high-performance server-side applications.', level: 'Intermediate', percent: 75, color: '#68a063' },
  { icon: <ExpressIcon />, name: 'Express.js', desc: 'Building fast, secure, and scalable REST APIs and backend services.', level: 'Intermediate', percent: 70, color: '#a06bea' },
  { icon: <MongoIcon />, name: 'MongoDB', desc: 'Managing NoSQL databases with flexible schemas for high-performance data storage.', level: 'Intermediate', percent: 75, color: '#47a248' },
  { icon: <GitIcon />, name: 'Git', desc: 'Tracking code changes efficiently and maintaining organized development flows.', level: 'Advanced', percent: 85, color: '#f05032' },
  { icon: <GitHubIconFilled />, name: 'GitHub', desc: 'Hosting, managing, and showcasing projects with collaboration and version control.', level: 'Advanced', percent: 90, color: '#9aa4bd' },
];

export default function Skills() {
  const [gridRef, inView] = useInView();

  return (
    <section id="skills" className="container" style={{ padding: '60px 0' }}>
      <span className="skills-badge">• MY SKILLS</span>
      <h2 className="skills-title">
        My <span className="gradient-text">Tech Stack</span>
      </h2>
      <p className="skills-subtitle">
        Technologies I use to build modern, responsive and scalable web applications.
      </p>
      <span className="skills-underline" />

      <div ref={gridRef} className={`grid grid-4 skills-grid stagger-grid ${inView ? 'in-view' : ''}`}>
        {skills.map((s) => (
          <div key={s.name} className="skill-card" style={{ borderColor: `${s.color}55` }}>
            <div className="skill-icon-large">{s.icon}</div>
            <span className="skill-name">{s.name}</span>
            <p className="skill-desc">{s.desc}</p>
            <div className="skill-meta">
              <span className="skill-level" style={{ background: `${s.color}22`, color: s.color }}>
                {s.level}
              </span>
              <span className="skill-percent">
                <CountUp value={`${s.percent}%`} inView={inView} />
              </span>
            </div>
            <div className="skill-bar-track">
              <div
                className="skill-bar-fill"
                style={{ width: inView ? `${s.percent}%` : '0%', background: s.color }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="skills-cta">
        <a href="#projects" className="btn btn-outline">
          {'\u2699'} View My Projects {'\u2192'}
        </a>
      </div>
    </section>
  );
}