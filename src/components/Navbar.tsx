import { useState, useEffect } from 'react'
import {  Menu, X } from 'lucide-react'

export default function Navbar() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Skills', 'Projects', 'Contact']

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1rem 5%',
        background: scrolled
          ? theme === 'dark' ? 'rgba(11,12,16,0.95)' : 'rgba(245,245,247,0.95)'
          : 'transparent',
        backdropFilter: 'blur(18px)',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'all 0.35s ease',
      }}>
        {/* Logo */}
        <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.2rem' }}>
          RSW<span style={{ color: 'var(--accent)' }}>.</span>
        </div>

        {/* Desktop Links */}
        <ul style={{
          display: 'flex', gap: '2rem', listStyle: 'none',
        }} className="desktop-links">
          {links.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} style={{
                fontSize: '0.88rem', fontWeight: 500, color: 'var(--muted)',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >{link}</a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>

          {/* Toggle Switch */}
          <div
            onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
            style={{
              width: 52, height: 28,
              borderRadius: 50,
              background: theme === 'dark' ? '#3a3a5c' : '#e0e0f0',
              border: '1px solid var(--border)',
              cursor: 'pointer',
              position: 'relative',
              transition: 'background 0.3s',
              flexShrink: 0,
            }}>
            {/* Knob */}
            <div style={{
              position: 'absolute',
              top: 3, left: theme === 'dark' ? 3 : 25,
              width: 20, height: 20,
              borderRadius: '50%',
              background: theme === 'dark' ? '#FFBE0B' : '#FF4D6D',
              transition: 'left 0.3s, background 0.3s',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 11,
            }}>
              {theme === 'dark' ? '🌙' : '☀️'}
            </div>
          </div>

          {/* Hire Me — hidden on mobile */}
          <a href="#contact" className="btn btn-primary hire-btn">Hire Me</a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="hamburger-btn"
            style={{
              background: 'none', border: 'none',
              cursor: 'pointer', color: 'var(--text)',
              display: 'none', padding: '4px',
            }}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 60, left: 0, right: 0, zIndex: 99,
          background: 'var(--bg2)',
          borderBottom: '1px solid var(--border)',
          padding: '1.5rem 5%',
          display: 'flex', flexDirection: 'column', gap: '1.2rem',
        }}>
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '1rem', fontWeight: 600,
                color: 'var(--text)', padding: '0.5rem 0',
                borderBottom: '1px solid var(--border)',
              }}>
              {link}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary"
            onClick={() => setMenuOpen(false)}
            style={{ textAlign: 'center' }}>
            Hire Me
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-links { display: none !important; }
          .hire-btn { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}