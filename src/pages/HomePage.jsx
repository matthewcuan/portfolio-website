import React, { useRef } from 'react';
import Welcome from '../components/Welcome';
import Projects from '../components/Projects';
import Contact from '../components/Contact'; 
import Experience from '../components/Experience';
import About from '../components/About';
import Navigation from '../components/Navbar';

function HomePage() {

//   const aboutSection = useRef(null);
//   const projectsSection = useRef(null);
//   const experienceSection = useRef(null);
//   const contactSection = useRef(null);

  return (
    <div className="App">
      <Welcome />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Navigation />
    </div>
  )
}

export default HomePage