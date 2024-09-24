// CategoryPage.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';

function CategoryPage({ categoriesData }) {
  const { categoryName } = useParams();
  const categoryInfo = categoriesData.find(cat => cat.name === categoryName);

  if (!categoryInfo) {
    return <p>Category not found.</p>;
  }

  return (
    <div>
      <h1>{categoryName}</h1>
      <p>Select a subcategory:</p>
      <ul>
        {categoryInfo.subcategories.map((subcategory, idx) => (
          <li key={idx}>
            {/* Link to the subcategory */}
            <Link to={`/category/${categoryName}/${subcategory}`}>
              {subcategory}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryPage;
