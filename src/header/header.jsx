import React from 'react';
import './header_style.css'; // Import the CSS file for styling
import logo from '../assets/exsure-logo.png';





const Header = () => {
  
  return (
    <header className="header">
      <div className="logo">
        {/* Place your logo image or component here */}
        <img src={logo} alt="Logo" /> 
      </div>
      <nav className="nav">
        {/* Add your navigation items here */}
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/about">Science & Services</a></li>
          <li><a href="/services">Publication</a></li>
          <li><a href="/services">Contact Us</a></li>
          <li><a href="/services">Join Us</a></li>
          {/* Add more navigation items as needed */}
        </ul>
      </nav>
    </header>

  );
};

export default Header;
