import React from 'react';
import { NavLink } from 'react-router-dom';  // Use NavLink for navigation

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navigation-btn">
        Home
      </NavLink>
      <NavLink to="/products" className="navigation-btn">
        Products
      </NavLink>
      {/* Add more links here if needed */}
    </nav>
  );
}

export default Navbar;
