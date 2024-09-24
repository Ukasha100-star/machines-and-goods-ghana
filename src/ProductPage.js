import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryNav from './CategoryNav';
import './ProductPage.css';

function ProductPage({ productsData, categoriesData, sortOption, onSortChange }) {  // Accept sortOption and onSortChange as props
  const [categoryFilter, setCategoryFilter] = useState('');
  const [subcategoryFilter, setSubcategoryFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); 

  const handleCategorySelect = (category) => {
    setCategoryFilter(category);
    setSubcategoryFilter('');
  };

  const handleSubcategorySelect = (subcategory) => {
    setSubcategoryFilter(subcategory);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleSortChange = (e) => {
    onSortChange(e.target.value);  // Update the sorting option when the user selects a sort option
  };

  // Get available subcategories for the selected category
  const subcategories = categoryFilter
    ? categoriesData.find((cat) => cat.name === categoryFilter).subcategories
    : [];

  // Filter products by category, subcategory, and search term
  let filteredProducts = productsData.filter((product) => {
    const categoryCondition = !categoryFilter || product.category === categoryFilter;
    const subcategoryCondition = !subcategoryFilter || product.subcategory === subcategoryFilter;
    const searchCondition =
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm);

    return categoryCondition && subcategoryCondition && searchCondition;
  });

  // Sort products based on the selected sorting option
  if (sortOption === 'priceLowToHigh') {
    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'priceHighToLow') {
    filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === 'newestFirst') {
    filteredProducts = filteredProducts.sort((a, b) => b.dateAdded - a.dateAdded);
  } else if (sortOption === 'popularity') {
    filteredProducts = filteredProducts.sort((a, b) => b.popularity - a.popularity);
  }

  return (
    <div className="product-page">
      <div className="sidebar">
        <CategoryNav 
          categories={categoriesData} 
          onSelectCategory={handleCategorySelect} 
          onSelectSubcategory={handleSubcategorySelect} 
        />
      </div>

      <div className="main-content">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-bar"
        />

        {/* Sorting Dropdown */}
        <div className="sort-options">
          <label htmlFor="sort">Sort by: </label>
          <select id="sort" value={sortOption} onChange={handleSortChange}>
            <option value="">-- Select --</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="newestFirst">Newest</option>
            <option value="popularity">Popularity</option>
          </select>
        </div>

        {/* Subcategory Filter */}
        {categoryFilter && (
          <div className="subcategory-filter">
            <h4>Subcategories for {categoryFilter}:</h4>
            {subcategories.map((subcategory) => (
              <button
                key={subcategory}
                onClick={() => handleSubcategorySelect(subcategory)}
                className={subcategoryFilter === subcategory ? 'active' : ''}
              >
                {subcategory}
              </button>
            ))}
          </div>
        )}

        {/* Product Listings */}
        <div className="product-container">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <Link to={`/product/${product.id}`}>
                  <img src={product.images[0]} alt={product.name} className="product-image" />
                  <h3>{product.name}</h3>
                </Link>
                <p>Price: ${product.price}</p>
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
