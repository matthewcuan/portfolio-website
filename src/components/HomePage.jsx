import React from 'react'
import Welcome from './Welcome';
import Projects from './Projects';
import Contact from './Contact'; 
import Experience from './Experience';
import About from './About';

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