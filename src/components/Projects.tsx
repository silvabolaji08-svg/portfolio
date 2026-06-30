const projects = [
  {
    emoji: '🛒',
    gradient: 'linear-gradient(135deg, #FF6B35, #FF8C42)',
    tags: ['React', 'Node.js', 'MongoDB'],
    title: 'ShopMart E-Commerce',
    desc: 'A full-stack e-commerce platform with product listings, cart, authentication and MongoDB backend.',
    live: 'https://shopmart-xi-wine.vercel.app',
    github: 'https://github.com/silvabolaji08-svg/shopmart',
  },
  {
    emoji: '📊',
    gradient: 'linear-gradient(135deg, #00C6AE, #0099FF)',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    title: 'Analytics Dashboard',
    desc: 'A real-time analytics dashboard with charts, filters, and role-based access control.',
    live: '#',
    github: '#',
  },
  {
    emoji: '💬',
    gradient: 'linear-gradient(135deg, #FFBE0B, #FF4D6D)',
    tags: ['React', 'Socket.io', 'Express'],
    title: 'Real-Time Chat App',
    desc: 'A WebSocket-powered chat application with rooms, typing indicators, and message history.',
    live: '#',
    github: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '6rem 6%', background: 'var(--bg2)' }}>
      <span className="section-label">My Work</span>
      <div className="divider" />
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-desc">A selection of projects I've built. Each one represents a unique challenge and a creative solution.</p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '1.8rem',
      }}>
        {projects.map(project => (
          <div key={project.title}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)'
              ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 50px rgba(0,0,0,0.25)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
              ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
            }}
            style={{
              background: 'var(--bg3)', border: '1px solid var(--border)',
              borderRadius: 20, overflow: 'hidden',
              transition: 'transform 0.25s, box-shadow 0.25s',
            }}>

            {/* Thumbnail */}
            <div style={{
              height: 180, background: project.gradient,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '3rem',
            }}>
              {project.emoji}
            </div>

            {/* Body */}
            <div style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.8rem' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{
                    background: 'var(--bg2)', borderRadius: 50,
                    padding: '0.25rem 0.7rem', fontSize: '0.75rem',
                    fontWeight: 600, color: 'var(--muted)',
                  }}>{tag}</span>
                ))}
              </div>

              <div style={{
                fontFamily: 'Syne, sans-serif', fontWeight: 700,
                fontSize: '1.1rem', marginBottom: '0.5rem',
              }}>{project.title}</div>

              <p style={{
                fontSize: '0.88rem', color: 'var(--muted)',
                lineHeight: 1.65, marginBottom: '1.2rem',
              }}>{project.desc}</p>

              <div style={{ display: 'flex', gap: '0.8rem' }}>
                <a href={project.live}
                  style={{
                    fontSize: '0.82rem', fontWeight: 600,
                    padding: '0.4rem 1rem', borderRadius: 50,
                    background: 'var(--accent)', color: '#fff',
                    border: '1.5px solid var(--accent)',
                    transition: 'all 0.2s',
                  }}>Live Demo</a>
                <a href={project.github}
                  style={{
                    fontSize: '0.82rem', fontWeight: 600,
                    padding: '0.4rem 1rem', borderRadius: 50,
                    background: 'transparent', color: 'var(--text)',
                    border: '1.5px solid var(--border)',
                    transition: 'all 0.2s',
                  }}>GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}