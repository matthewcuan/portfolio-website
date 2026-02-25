import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";

import "./App.css";
import HomePage from "./pages/HomePage";
import ChessPage from "./pages/ChessPage";
import WebDesign from "./pages/WebDesignPage";
import LunarPandemic from "./pages/LunarPandemicPage";
import ChromeExtension from "./pages/ChromeExtensionPage";
import ContactBar from "./components/ContactBar";
import Navbar from "./components/Navbar";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}

function App() {
  return (
    <Router>
      <ScrollProgress />
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
