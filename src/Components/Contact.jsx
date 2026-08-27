import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [status, setStatus] = useState('idle'); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://portfolio-backend-ochre-gamma.vercel.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed to send');
      setStatus('sent');
      setForm({ name: '', email: '', phone: '', company: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="container contact-section">
      <h2 className="section-title">Contact Us</h2>
      <p className="section-subtitle">Have a project in mind? Let&apos;s connect.</p>
      <div className="contact-inner">
        <div>
          <h3>Get in touch today</h3>
          <p style={{ color: 'var(--text-muted)', margin: '14px 0 20px' }}>
            I&apos;m always open to discussing new projects or ideas.
          </p>
          <ul className="contact-list">
            <li>{'\u2709'} silvabolaji08@gmail.com</li>
            <li>{'\u260E'} +234 905 531 4187</li>
            <li>{'\u{1F4CD}'} Lagos, Nigeria</li>
          </ul>
        </div>
        <form className="contact-form card" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>Name
              <input name="name" value={form.name} onChange={handleChange} required />
            </label>
            <label>Email
              <input type="email" name="email" value={form.email} onChange={handleChange} required />
            </label>
          </div>
          <div className="form-row">
            <label>Phone
              <input name="phone" value={form.phone} onChange={handleChange} />
            </label>
            <label>Company
              <input name="company" value={form.company} onChange={handleChange} />
            </label>
          </div>
          <label>Message
            <textarea name="message" rows={5} value={form.message} onChange={handleChange} required />
          </label>
          <button type="submit" className="btn btn-primary full-width" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>
          {status === 'sent' && (
            <p style={{ color: '#5ce0a0' }}>Thanks! Your message has been sent.</p>
          )}
          {status === 'error' && (
            <p style={{ color: 'var(--pink)' }}>Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}