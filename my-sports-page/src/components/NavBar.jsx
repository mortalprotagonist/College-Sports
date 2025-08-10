// src/components/NavBar.jsx
import React from 'react';
import '../styles/NavBar.css' // We will create this file

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        CEP Sports Hub
      </div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Matches</a></li>
        <li><a href="#">Calculator</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;