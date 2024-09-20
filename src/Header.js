import React from "react";
import "./Header.css";
import { Link } from "react-router-dom"; 

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">
          <h2>M&G-Ghana</h2> {/* Logo as text; you can also use an img tag if you have a logo image */}
        </div>
      </Link>

      <div className="header__search">
        <select className="header__searchCategory">
          <option value="all">All</option>
          {/* Add more categories as needed */}
        </select>
        <input className="header__searchInput" type="text" />
        <button className="header__searchButton">🔍</button>
      </div>

      <div className="header__nav">
        <Link to="/login" className="header__option">
          <span>Hello, sign in</span>
          <strong>Account & Lists</strong>
        </Link>
        <Link to="/orders" className="header__option">
          <span>Returns</span>
          <strong>& Orders</strong>
        </Link>
        <Link to="/checkout" className="header__optionBasket">
          <span role="img" aria-label="cart">🛒</span>
          <span className="header__basketCount">0</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
