import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import Contact from './components/Contact'; 
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
