import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import Contact from './components/Contact'; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
