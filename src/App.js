import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ProjectPage from './components/ProjectPage';

function App() {
  return (
    <Router>
      {/* <div className="App"> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={<ProjectPage />} />
        </Routes>
      {/* </div> */}

    </Router>
    
  );
}

export default App;