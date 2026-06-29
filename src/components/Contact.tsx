import { useState } from 'react'

interface FormData {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '', lastName: '', email: '', subject: '', message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // 🔧 Replace with your backend URL when deployed
      const res = await fetch('https://portfolio-backend-pink-six.vercel.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    background: 'var(--bg2)', border: '1.5px solid var(--border)',
    borderRadius: 12, padding: '0.85rem 1rem',
    color: 'var(--text)', fontFamily: 'Inter, sans-serif',
    fontSize: '0.9rem', outline: 'none', width: '100%',
    transition: 'border-color 0.2s',
  }

  return (
    <section id="contact" style={{ padding: '6rem 6%', background: 'var(--bg)' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem', alignItems: 'start',
      }}>

        {/* Left Info */}
        <div>
          <span className="section-label">Get In Touch</span>
          <div className="divider" />
          <h2 className="section-title">Let's Build Something Great</h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
            Have a project in mind or want to collaborate? I'd love to hear from you. Send me a message and I'll get back to you as soon as possible.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { icon: '📧', label: 'Email', value: 'rotimi@example.com' },
              { icon: '🐙', label: 'GitHub', value: 'github.com/rotimi-silva' },
              { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/rotimi-silva' },
            ].map(item => (
              <div key={item.label} style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                background: 'var(--bg2)', border: '1px solid var(--border)',
                borderRadius: 12, padding: '1rem 1.2rem',
              }}>
                <span style={{ fontSize: '1.4rem' }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 500 }}>{item.label}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--muted)' }}>First Name</label>
              <input name="firstName" value={formData.firstName} onChange={handleChange}
                placeholder="John" required style={inputStyle} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--muted)' }}>Last Name</label>
              <input name="lastName" value={formData.lastName} onChange={handleChange}
                placeholder="Doe" required style={inputStyle} />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--muted)' }}>Email Address</label>
            <input name="email" type="email" value={formData.email} onChange={handleChange}
              placeholder="john@example.com" required style={inputStyle} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--muted)' }}>Subject</label>
            <input name="subject" value={formData.subject} onChange={handleChange}
              placeholder="Project Inquiry" required style={inputStyle} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--muted)' }}>Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange}
              placeholder="Tell me about your project..." required rows={5}
              style={{ ...inputStyle, resize: 'vertical' }} />
          </div>

          <button type="submit" disabled={status === 'loading'} style={{
            background: 'var(--accent)', color: '#fff',
            border: 'none', borderRadius: 50, padding: '0.9rem 2rem',
            fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer',
            fontFamily: 'Inter, sans-serif', transition: 'all 0.2s',
            opacity: status === 'loading' ? 0.7 : 1,
          }}>
            {status === 'loading' ? 'Sending…' : 'Send Message 🚀'}
          </button>

          {status === 'success' && (
            <p style={{ color: 'var(--accent2)', fontSize: '0.88rem', textAlign: 'center' }}>
              ✅ Message sent! I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p style={{ color: 'var(--accent)', fontSize: '0.88rem', textAlign: 'center' }}>
              ❌ Something went wrong. Please email me directly.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}