import { NavLink, Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle.jsx';
import LogoIcon from './LogoIcon.jsx';

export default function Navbar({ isLight, onToggleTheme }) {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand-v2">
          <LogoIcon />
          Mobolaji<span className="brand-dot">.</span>
        </Link>

        <nav className="nav-links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-active' : '')}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
            About
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
            Contact
          </NavLink>
        </nav>

        <div className="navbar-actions">
          <Link to="/contact" className="talk-btn">
            Let&apos;s Talk {'\u2192'}
          </Link>
          <ThemeToggle isLight={isLight} onToggle={onToggleTheme} />
        </div>
      </div>
    </header>
  );
}