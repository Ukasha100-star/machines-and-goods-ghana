import React from 'react';
import './NewHeader.css'; // Make sure this CSS file is correctly linked
import { Link, useNavigate } from 'react-router-dom';


function NewHeader() {
  return (
    <header className="new-header">
      <div className="header-container">
        {/* Logo Section */}
        <Link to="/" className="header-logo">
          <span>M&G-Ghana</span> {/* Styled Logo Text */}
        </Link>

        {/* Search Bar Section */}
        <div className="header-search">
          <div className="search-dropdown">
            <select className="category-dropdown" onMouseOver={() => console.log('Hovering!')}>
              <option value="all">All</option>
              <option value="machinery">Machinery</option>
              <option value="vehicles">Vehicles</option>
              <option value="engines">Engines & Power Systems</option>
              <option value="electronics">Electronics</option>
              <option value="tools">Tools & Equipment</option>
              <option value="building">Building Materials</option>
            </select>
          </div>
          <input type="text" className="search-input" placeholder="Search products..." />
          <button className="search-button">🔍</button> {/* Search Icon */}
        </div>

        {/* Sign-in Section */}
        <div className="header-option">
          <Link to="/signin" className="header-option-link">
            <span>Hello, Sign in</span>
          </Link>
        </div>

        {/* Cart Section */}
        <div className="header-option-cart">
          <Link to="/cart" className="header-option-link">
            <span>Cart</span>
            <span className="cart-count">0</span> {/* This will show the cart count dynamically */}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default NewHeader;
