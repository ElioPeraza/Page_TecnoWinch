import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="TecnoWinch Logo" className="navbar-logo" />
        <Link to="/" className="navbar-title">TecnoWinch</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/correas">Correas</Link></li>
        <li><Link to="/ganchos">Ganchos</Link></li>
        <li><Link to="/winches">Winches</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
