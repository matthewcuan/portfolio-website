import { redirect, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navigation from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';

function App() {
  return (
    <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={<ProjectPage />} />
        </Routes>
    </Router>
    
  );
}

export default App;