import React from 'react';
import './SecondaryNavbar.css';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

function SecondaryNavbar() {
  return (
    <div className="secondary-navbar">
      <Link to="/best-sellers" className="navbar__link">Best Sellers</Link>
      <Link to="/new-releases" className="navbar__link">New Releases</Link>
      <Link to="/movers-shakers" className="navbar__link">Movers & Shakers</Link>
      <Link to="/most-wished" className="navbar__link">Most Wished For</Link>
      {/* Add more links as needed */}
    </div>
  );
}

export default SecondaryNavbar;
