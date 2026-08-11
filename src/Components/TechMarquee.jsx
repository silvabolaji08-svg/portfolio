import {
  ReactIcon, JavaScriptIcon, TailwindIcon, NodeIcon,
  ExpressIcon, MongoIcon, GitIcon, GitHubIconFilled, NextIcon,
} from './SkillIcons.jsx';

const logos = [
  { icon: <ReactIcon />, name: 'React', color: '#38bdf8' },
  { icon: <NextIcon />, name: 'Next.js', color: '#eef1f8' },
  { icon: <NodeIcon />, name: 'Node.js', color: '#68a063' },
  { icon: <MongoIcon />, name: 'MongoDB', color: '#47a248' },
  { icon: <GitIcon />, name: 'Git', color: '#f05032' },
  { icon: <GitHubIconFilled />, name: 'GitHub', color: '#eef1f8' },
  { icon: <JavaScriptIcon />, name: 'JavaScript', color: '#f0db4f' },
  { icon: <TailwindIcon />, name: 'Tailwind CSS', color: '#38bdf8' },
  { icon: <ExpressIcon />, name: 'Express.js', color: '#a06bea' },
];

export default function TechMarquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-beams" aria-hidden="true" />
      <div className="marquee-track">
        {[...logos, ...logos].map((l, i) => (
          <span
            key={i}
            className="marquee-pill"
            style={{ borderColor: `${l.color}55`, boxShadow: `0 0 20px ${l.color}22` }}
          >
            <span className="marquee-pill-icon" style={{ color: l.color }}>{l.icon}</span>
            {l.name}
          </span>
        ))}
      </div>
    </div>
  );
}