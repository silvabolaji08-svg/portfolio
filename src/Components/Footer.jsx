export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="brand">MERN Stack Developer</div>
        <nav className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <p className="footer-copy">Copyright © {new Date().getFullYear()} Mobolaji</p>
    </footer>
  );
}