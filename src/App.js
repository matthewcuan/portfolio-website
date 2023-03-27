import { redirect, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navigation from './components/Navbar';
import HomePage from './pages/HomePage';
import ChessPage from './pages/ChessPage';
import ProjectPage2 from './pages/ProjectPage2';
import ProjectPage3 from './pages/ProjectPage3';
import ContactBar from './components/ContactBar';

function App() {
  return (
    <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chess" element={<ChessPage />} />
          <Route path="/project2" element={<ProjectPage2 />} />
          <Route path="/project3" element={<ProjectPage3 />} />
        </Routes>
        <ContactBar />
    </Router>
    
  );
}

export default App;