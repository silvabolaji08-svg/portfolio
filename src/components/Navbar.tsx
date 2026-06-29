import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'

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
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '1.1rem 6%',
      background: scrolled
        ? theme === 'dark' ? 'rgba(11,12,16,0.85)' : 'rgba(245,245,247,0.85)'
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
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }} className="nav-links-desktop">
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

      {/* Right Side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
          style={{
            background: 'var(--bg3)', border: '1px solid var(--border)',
            borderRadius: '50px', padding: '0.4rem 0.9rem',
            cursor: 'pointer', color: 'var(--muted)',
            display: 'flex', alignItems: 'center', gap: '0.4rem',
            fontSize: '0.8rem', fontWeight: 600,
          }}>
          {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>

        <a href="#contact" className="btn btn-primary">Hire Me</a>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(o => !o)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text)', display: 'none' }}
          className="menu-btn">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'var(--bg2)', borderBottom: '1px solid var(--border)',
          padding: '1.5rem 6%', display: 'flex', flexDirection: 'column', gap: '1.2rem',
        }}>
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text)' }}>
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}