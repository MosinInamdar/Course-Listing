import React  from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Course Listing</Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link">Student Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
