import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      padding: '8rem 6% 4rem',
      position: 'relative', overflow: 'hidden',
      background: 'var(--bg)',
    }}>
      {/* Blobs */}
      <div style={{
        position: 'absolute', width: 500, height: 500,
        borderRadius: '50%', filter: 'blur(80px)', opacity: 0.15,
        background: 'var(--accent)', top: -100, right: -100,
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', width: 400, height: 400,
        borderRadius: '50%', filter: 'blur(80px)', opacity: 0.12,
        background: 'var(--accent2)', bottom: -80, left: -80,
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{ maxWidth: 800, position: 'relative', zIndex: 1 }}>

        {/* Tag */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          background: 'var(--bg3)', border: '1px solid var(--border)',
          borderRadius: '50px', padding: '0.4rem 1rem',
          fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent2)',
          marginBottom: '1.6rem',
        }}>
          <span style={{
            width: 8, height: 8, borderRadius: '50%',
            background: 'var(--accent2)', display: 'inline-block',
            animation: 'pulse 1.6s infinite',
          }} />
          Available for freelance work
        </div>

        {/* Heading */}
        <h1 style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(2.8rem, 6vw, 5rem)',
          fontWeight: 800, lineHeight: 1.1,
          letterSpacing: '-2px', marginBottom: '1.2rem',
        }}>
          Hi, I'm <span style={{ color: 'var(--accent)' }}>Mobolaji</span><br />
          Web <span style={{ color: 'var(--accent2)' }}>Developer</span>.
        </h1>

        {/* Description */}
        <p style={{
          fontSize: '1.1rem', color: 'var(--muted)',
          lineHeight: 1.75, maxWidth: 560, marginBottom: '2.2rem',
        }}>
          I build fast, modern, and beautiful web experiences — from pixel-perfect frontends to robust backends that just work.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Let's Talk</a>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {[
            { num: '2+', label: 'Years Experience' },
            { num: '20+', label: 'Projects Delivered' },
            { num: '100%', label: 'Client Satisfaction' },
          ].map(stat => (
            <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              <span style={{
                fontFamily: 'Syne, sans-serif', fontSize: '2rem',
                fontWeight: 800, color: 'var(--accent)',
              }}>{stat.num}</span>
              <span style={{
                fontSize: '0.78rem', color: 'var(--muted)',
                fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.5px',
              }}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Social Links */}
       {/* Social Links */}
<div style={{ display: 'flex', gap: '1rem' }}>
  <a href="https://github.com" target="_blank" rel="noreferrer" style={{
    background: 'var(--bg3)', border: '1px solid var(--border)',
    borderRadius: '50px', padding: '0.5rem 1rem',
    display: 'flex', alignItems: 'center', gap: '0.4rem',
    fontSize: '0.82rem', fontWeight: 600, color: 'var(--muted)',
  }}>
     GitHub
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{
    background: 'var(--bg3)', border: '1px solid var(--border)',
    borderRadius: '50px', padding: '0.5rem 1rem',
    display: 'flex', alignItems: 'center', gap: '0.4rem',
    fontSize: '0.82rem', fontWeight: 600, color: 'var(--muted)',
  }}>
    💼 LinkedIn
  </a>
</div>

        {/* Scroll Down */}
        <div style={{
          position: 'absolute', bottom: '-3rem', left: 0,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
          color: 'var(--muted)', fontSize: '0.75rem',
          animation: 'bounce 2s infinite',
        }}>
          <ArrowDown size={16} />
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.3); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </section>
  )
}