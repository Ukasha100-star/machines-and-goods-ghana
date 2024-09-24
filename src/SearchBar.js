import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="search-bar">
      <select
        value={selectedCategory}
        onChange={e => setSelectedCategory(e.target.value)}
        className="search-category-select"
      >
        <option value="All">All</option>
        {/* Check if categories is defined and then map */}
        {categories && categories.map((category, idx) => (
          <option key={idx} value={category.name}>{category.name}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <button className="search-button">Search</button>
    </div>
  );
}

export default SearchBar;
