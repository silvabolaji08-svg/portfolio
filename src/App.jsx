import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StarField from './Components/StarField.jsx';
import Aurora from './Components/Aurora.jsx';
import FloatingIcons from './Components/FloatingIcons.jsx';
import ButtonGlow from './Components/ButtonGlow.jsx';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import Home from './pages/Home.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

function App() {
  const [isLight, setIsLight] = useState(() => {
    return localStorage.getItem('theme') === 'light';
  });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('light-theme', isLight);
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  }, [isLight]);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <div className={`page-fade ${loaded ? 'page-fade-in' : ''}`}>
        <StarField />
        <Aurora />
        <FloatingIcons />
        <ButtonGlow />
        <Navbar isLight={isLight} onToggleTheme={() => setIsLight((v) => !v)} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;