import React, { useState } from 'react';
import './CategoryNav.css';

function CategoryNav({ categories, onSelectCategory, onSelectSubcategory }) {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.name);
    onSelectCategory(category.name);
    onSelectSubcategory('');  // Reset subcategory when a new category is selected
  };

  const handleSubcategoryClick = (subcategory) => {
    onSelectSubcategory(subcategory);
  };

  return (
    <div className="category-nav">
      <h3>Categories</h3>
      <ul>
        {categories.map((category) => (
          <li key={category.name}>
            <button onClick={() => handleCategoryClick(category)}>
              {category.name}
            </button>
            {selectedCategory === category.name && (
              <ul className="subcategory-list">
                {category.subcategories.map((subcategory) => (
                  <li key={subcategory}>
                    <button onClick={() => handleSubcategoryClick(subcategory)}>
                      {subcategory}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryNav;
