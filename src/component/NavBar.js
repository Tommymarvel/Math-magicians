import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/NavBar.css';

const NavBar = () => (
  <header>
    <nav>
      <h2 className="title">Math Magicians</h2>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/calculator">Calculator</NavLink>
        </li>
        <li>
          <NavLink to="/quote">Quotes</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);
export default NavBar;
