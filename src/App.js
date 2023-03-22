import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import Contact from './components/Contact'; 
import Experience from './components/Experience';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
