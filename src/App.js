import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';
import ChessPage from './pages/ChessPage';
import WebDesign from './pages/WebDesignPage';
import LunarPandemic from './pages/LunarPandemicPage';
import ChromeExtension from './pages/ChromeExtensionPage';
import ContactBar from './components/ContactBar';
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/chess" element={<ChessPage />} />
          <Route path="/projects/web-design" element={<WebDesign />} />
          <Route path="/projects/lunar-pandemic" element={<LunarPandemic />} />
          <Route path="/projects/chrome-extension" element={<ChromeExtension />} />
        </Routes>
        <ContactBar />
    </Router>
    
  );
}

export default App;