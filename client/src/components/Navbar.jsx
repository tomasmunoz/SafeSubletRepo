import React from "react";
import { Link } from "gatsby";
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/app'>App</Link>
        </li>
        <li>
          <Link to='/marketing'>Marketing</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
