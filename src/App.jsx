import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Career from './pages/Career';
import Portfolio from './pages/Portfolio';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      
    </div>
  );
};

export default App;