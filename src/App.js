import { redirect, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navigation from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectPage1 from './pages/ProjectPage';
import ProjectPage2 from './pages/ProjectPage2';
import ProjectPage3 from './pages/ProjectPage3';

function App() {
  return (
    <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project1" element={<ProjectPage1 />} />
          <Route path="/project2" element={<ProjectPage2 />} />
          <Route path="/project3" element={<ProjectPage3 />} />
        </Routes>
    </Router>
    
  );
}

export default App;