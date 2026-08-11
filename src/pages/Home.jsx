import Hero from '../Components/Hero.jsx';
import TechMarquee from '../Components/TechMarquee.jsx';
import AboutSimple from '../Components/AboutSimple.jsx';
import Skills from '../Components/Skills.jsx';
import Service from '../Components/Service.jsx';
import Projects from '../Components/Projects.jsx';
import Testimonials from '../Components/Testimonials.jsx';
import Contact from '../Components/Contact.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <AboutSimple />
      <Skills />
      <Service />
      <Projects limit={2} />
      <Testimonials />
      <Contact />
    </>
  );
}