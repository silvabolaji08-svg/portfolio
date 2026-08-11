import { useState } from 'react';
import { GitHubIcon, LinkedInIcon, TwitterIcon, MailIcon } from './Icons.jsx';
import { MailBoxIcon, PhoneIcon, LocationIcon, SendIcon, CheckIcon, LockIcon, UserIcon, TagIcon } from './ContactIcons.jsx';

const availableFor = ['Internships', 'Freelance Projects', 'Collaborations', 'Remote Opportunities'];

export default function ContactFull() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const [status, setStatus] = useState('idle');

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('sending');

  try {
    const res = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (!res.ok) throw new Error('Failed to send');

    setStatus('sent');
    setForm({ name: '', email: '', subject: '', message: '' });
  } catch (err) {
    console.error(err);
    setStatus('error');
  }
};

  return (
    <section className="container contact-full">
      <div className="contact-full-left">
        <span className="about-badge">• GET IN TOUCH</span>
        <h2 className="contact-full-heading">
          Let&apos;s Work<br /><span className="gradient-text">Together</span>
        </h2>
        <p className="hero-desc">
          Have an idea, project, or opportunity? I&apos;d love to hear from you.
        </p>

        <div className="contact-info-card">
          <div className="contact-info-icon"><MailBoxIcon /></div>
          <div>
            <div className="contact-info-label">Email</div>
            <div className="contact-info-value">your.email@example.com</div>
          </div>
        </div>

        <div className="contact-info-card">
          <div className="contact-info-icon"><PhoneIcon /></div>
          <div>
            <div className="contact-info-label">Phone</div>
            <div className="contact-info-value">+234 000 000 0000</div>
          </div>
        </div>

        <div className="contact-info-card">
          <div className="contact-info-icon"><LocationIcon /></div>
          <div>
            <div className="contact-info-label">Location</div>
            <div className="contact-info-value">Lagos, Nigeria</div>
          </div>
        </div>

        <div className="available-for-card">
          <span className="about-badge">AVAILABLE FOR</span>
          {availableFor.map((item) => (
            <div key={item} className="available-for-item">
              <span className="available-for-check"><CheckIcon /></span>
              {item}
            </div>
          ))}
        </div>

        <span className="about-badge">CONNECT WITH ME</span>
        <div className="hero-social-icons contact-social-icons">
          <a href="#" aria-label="GitHub"><GitHubIcon /></a>
          <a href="#" aria-label="LinkedIn"><LinkedInIcon /></a>
          <a href="#" aria-label="Twitter"><TwitterIcon /></a>
          <a href="#" aria-label="Email"><MailIcon /></a>
        </div>
      </div>

      <div className="contact-full-right card">
        <div className="contact-form-header">
          <div className="contact-form-icon"><SendIcon /></div>
          <div>
            <h3>Send a Message</h3>
            <p className="hero-desc" style={{ marginBottom: 0 }}>
              Fill out the form below and I&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Name
              <span className="input-icon-wrap">
                <UserIcon />
                <input name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
              </span>
            </label>
            <label>
              Email
              <span className="input-icon-wrap">
                <MailBoxIcon />
                <input type="email" name="email" placeholder="Your email" value={form.email} onChange={handleChange} required />
              </span>
            </label>
          </div>

          <label>
            Subject
            <span className="input-icon-wrap">
              <TagIcon />
              <input name="subject" placeholder="What's this about?" value={form.subject} onChange={handleChange} />
            </span>
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows={6}
              placeholder="Tell me about your project or idea..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" className="btn btn-primary full-width" disabled={status === 'sending'}>
  {status === 'sending' ? 'Sending...' : 'Send Message'} <SendIcon />
</button>

{status === 'sent' && <p className="form-success">Message sent successfully!</p>}
{status === 'error' && <p style={{ color: 'var(--pink)' }}>Something went wrong. Please try again.</p>}

          <p className="contact-safe-note">
            <LockIcon /> Your information is safe with me.
          </p>
        </form>
      </div>
    </section>
  );
}