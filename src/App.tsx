import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App: React.FC = () => {
  return (
    <div className="w-container">
      <Router>
        <Navbar />
        <div className="routes-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
