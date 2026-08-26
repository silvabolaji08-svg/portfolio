
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import ThemeToggle from './ThemeToggle.jsx';
import LogoIcon from './LogoIcon.jsx';

export default function Navbar({ isLight, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">

        <Link to="/" className="brand-v2" onClick={closeMenu}>
          <LogoIcon />
          Mobolaji<span className="brand-dot">.</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'nav-active' : '')}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'nav-active' : '')}
          >
            About
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? 'nav-active' : '')}
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'nav-active' : '')}
          >
            Contact
          </NavLink>
        </nav>

        {/* Desktop actions */}
        <div className="navbar-actions">
          <Link to="/contact" className="talk-btn">
            Let's Talk →
          </Link>

          <ThemeToggle
            isLight={isLight}
            onToggle={onToggleTheme}
          />
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'menu-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu-open' : ''}`}>
        <nav>
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? 'nav-active' : '')}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? 'nav-active' : '')}
          >
            About
          </NavLink>

          <NavLink
            to="/projects"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? 'nav-active' : '')}
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? 'nav-active' : '')}
          >
            Contact
          </NavLink>

          <Link
            to="/contact"
            className="mobile-talk-btn"
            onClick={closeMenu}
          >
            Let's Talk →
          </Link>

          <div className="mobile-theme">
            <span>Theme</span>
            <ThemeToggle
              isLight={isLight}
              onToggle={onToggleTheme}
            />
          </div>
        </nav>
      </div>
    </header>
  );
}

