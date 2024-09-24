import React from 'react';
import SearchBar from './SearchBar';
import './Header.css';

function Header({ categories }) {
  return (
    <header className="header">
      <h1 className="logo" onClick={() => window.location.href = '/'}>M&G-Ghana</h1>
      <SearchBar categories={categories} />
      {/* You can add other header elements here if needed */}
    </header>
  );
}

export default Header;
