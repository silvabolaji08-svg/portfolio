const skills = [
  { icon: '⚛️', name: 'React / Next.js', label: 'Frontend Framework', level: 90, color: 'var(--accent)' },
  { icon: '🟨', name: 'JavaScript / TypeScript', label: 'Core Language', level: 92, color: 'var(--accent3)' },
  { icon: '🟢', name: 'Node.js / Express', label: 'Backend Runtime', level: 85, color: 'var(--accent2)' },
  { icon: '🎨', name: 'HTML / CSS / Tailwind', label: 'Styling & Markup', level: 95, color: 'var(--accent)' },
  { icon: '🗄️', name: 'MongoDB / PostgreSQL', label: 'Databases', level: 80, color: 'var(--accent2)' },
  { icon: '☁️', name: 'Git / Docker / Vercel', label: 'DevOps & Deployment', level: 78, color: 'var(--accent3)' },
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '6rem 6%', background: 'var(--bg)' }}>
      <span className="section-label">What I Work With</span>
      <div className="divider" />
      <h2 className="section-title">My Tech Stack</h2>
      <p className="section-desc">A curated set of technologies I use to build modern, scalable, and performant web applications.</p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1.5rem',
      }}>
        {skills.map(skill => (
          <div key={skill.name}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'
              ;(e.currentTarget as HTMLDivElement).style.borderColor = 'var(--accent)'
              ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 30px rgba(255,77,109,0.1)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
              ;(e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'
              ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
            }}
            style={{
              background: 'var(--bg2)', border: '1px solid var(--border)',
              borderRadius: 12, padding: '1.6rem',
              transition: 'transform 0.2s, border-color 0.2s, box-shadow 0.2s',
            }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>{skill.icon}</div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', marginBottom: '0.3rem' }}>{skill.name}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '0.8rem' }}>{skill.label}</div>
            <div style={{ background: 'var(--bg3)', borderRadius: 50, height: 6 }}>
              <div style={{ width: `${skill.level}%`, height: 6, borderRadius: 50, background: skill.color }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}