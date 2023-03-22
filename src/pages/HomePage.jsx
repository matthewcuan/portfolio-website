import React from 'react'
import Welcome from '../components/Welcome';
import Projects from '../components/Projects';
import Contact from '../components/Contact'; 
import Experience from '../components/Experience';
import About from '../components/About';

function HomePage() {
  return (
    <div className="App">
      <Welcome />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default HomePage