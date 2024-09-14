import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Experience from './components/Experience';
import withAnimation from './lib/WithAnimation';

// Helper function to wrap components with the withAnimation HOC
const AnimatedRoute = (Component: React.FC) => {
  return React.createElement(withAnimation(Component));
};

const App: React.FC = () => {
  return (
    <div className="w-container">
      <Router>
        <Navbar />
        <div className="routes-container">
          <Routes>
            <Route path="/" element={AnimatedRoute(Home)} />
            <Route path="/about" element={AnimatedRoute(About)} />
            <Route path="/projects" element={AnimatedRoute(Projects)} />
            <Route path="/contact" element={AnimatedRoute(Contact)} />
            <Route path="/skills" element={AnimatedRoute(Skills)} />
            <Route path="/experience" element={AnimatedRoute(Experience)} />
            <Route path="*" element={AnimatedRoute(Home)} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;