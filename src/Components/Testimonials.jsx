import { useState } from 'react';
import useInView from '../hooks/useInView.js';
import { ChatIcon, QuoteIcon, VerifiedIcon, PinIcon } from './TestimonialIcons.jsx';

const testimonials = [
  {
    quote: 'Mobolaji handled both frontend and backend tasks smoothly and always ensured the codebase stayed clean, structured, and easy to maintain. Highly recommended!',
    name: 'Wambui Muli',
    role: 'Frontend Developer',
    location: 'Nairobi, Kenya',
    initials: 'WM',
    color: '#a06bea',
  },
  {
    quote: 'Working with Mobolaji was a great experience. He is professional, communicates well, and delivers quality work on time.',
    name: 'Daniel Osei',
    role: 'Product Designer',
    location: 'Accra, Ghana',
    initials: 'DO',
    color: '#4a90e2',
  },
  {
    quote: 'Mobolaji is a problem solver and pays attention to details. He turned our ideas into a fast and modern web application.',
    name: 'Priya Nair',
    role: 'CEO, TechNova',
    location: 'Lagos, Nigeria',
    initials: 'PN',
    color: '#e8496a',
  },
];

export default function Testimonials() {
  const [gridRef, inView] = useInView();
  const [page] = useState(0);

  return (
    <section id="testimonials" className="container" style={{ padding: '60px 0' }}>
      <div className="testimonials-header">
        <div className="testimonials-icon-badge"><ChatIcon /></div>
        <span className="services-badge testimonials-label">TESTIMONIALS</span>
        <h2 className="testimonials-heading">
          What People <span className="gradient-text">Say</span>
        </h2>
        <p className="section-subtitle">Feedback from clients and collaborators.</p>
      </div>

      <div className="testimonials-row">
        <button className="carousel-btn" aria-label="Previous">←</button>

        <div ref={gridRef} className={`grid grid-3 stagger-grid ${inView ? 'in-view' : ''}`}>
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card-v2">
              <div className="testimonial-card-top">
                <QuoteIcon />
                <span className="stars">★★★★★</span>
              </div>
              <p className="testimonial-quote-v2">{t.quote}</p>
              <div className="testimonial-divider" />
              <div className="testimonial-person">
                <div className="testimonial-avatar" style={{ background: `${t.color}30`, color: t.color }}>
                  {t.initials}
                </div>
                <div>
                  <div className="testimonial-person-name">
                    {t.name} <VerifiedIcon />
                  </div>
                  <div className="testimonial-person-role">{t.role}</div>
                  <div className="testimonial-person-location"><PinIcon /> {t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-btn" aria-label="Next">→</button>
      </div>

      <div className="dots">
        {[0, 1, 2].map((i) => (
          <button key={i} className={`dot ${i === page ? 'dot-active' : ''}`} aria-label={`Page ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}