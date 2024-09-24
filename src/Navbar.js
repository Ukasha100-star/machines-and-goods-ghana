import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ categoriesData }) {
  return (
    <nav className="navbar">
      {categoriesData.map((category, index) => (
        <Link key={index} to={`/category/${category.name}`} className="nav__link">
          {category.name}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
