import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/my-plan" className="nav-link">Meu Plano</Link>
        </li>
        <li className="nav-item">
          <Link to="/history" className="nav-link">Histórico</Link>
        </li>
      </ul>
    </nav>
  );

}

export default Navbar;
