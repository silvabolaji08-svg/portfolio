export default function About() {
  const chips = ['🚀 Full-Stack', '🎨 UI/UX Minded', '⚡ Performance First', '📱 Mobile Responsive']

  return (
    <section id="about" style={{
      padding: '6rem 6%',
      background: 'var(--bg2)',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem', alignItems: 'center',
      }}>

        {/* Avatar */}
        <div style={{ position: 'relative', maxWidth: 380 }}>
          <div style={{
            width: '100%', aspectRatio: '1',
            borderRadius: 24,
            background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent2) 50%, var(--accent3) 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'Syne, sans-serif', fontSize: '4rem',
            fontWeight: 800, color: '#fff',
          }}>
            RSW
          </div>
          <div style={{
            position: 'absolute', bottom: -16, right: -16,
            background: 'var(--accent3)', color: '#0D0D14',
            borderRadius: 12, padding: '0.8rem 1.2rem',
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: '0.9rem', boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          }}>
            📍 Nigeria
          </div>
        </div>

        {/* Text */}
        <div>
          <span className="section-label">About Me</span>
          <div className="divider" />
          <h2 className="section-title">Turning ideas into digital realities</h2>

          <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.2rem' }}>
            I'm Rotimi-Silva Williams Mobolaji, a passionate web developer with a knack for building clean, high-performance web applications that users love.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.2rem' }}>
            From crafting beautiful interfaces to architecting scalable backends, I bring a full-stack mindset to every project. I thrive on solving real problems with elegant code.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            When I'm not shipping code, I'm exploring new technologies, contributing to open source, or helping others level up their dev skills.
          </p>

          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
            {chips.map(chip => (
              <span key={chip} style={{
                background: 'var(--bg3)', border: '1px solid var(--border)',
                borderRadius: '50px', padding: '0.4rem 1rem',
                fontSize: '0.82rem', fontWeight: 600, color: 'var(--text)',
              }}>{chip}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}