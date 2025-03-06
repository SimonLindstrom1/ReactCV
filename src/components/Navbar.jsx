import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMenuClick = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="logo">SIMON LINDSTRÖM</div>
      <ul className={`nav-links ${isMobile ? 'active' : ''}`}>
        <li className="navbar-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
        <li className="navbar-item">
          <Link to="/career" className="nav-link">Career</Link>
        </li>
        <li className="navbar-item">
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
        </li>
      </ul>
      <div className="menu-icon" onClick={handleMenuClick}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;