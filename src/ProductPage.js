import React, { useState } from 'react';
import './ProductPage.css';  // Import your CSS for styling

function ProductPage() {
  const [view, setView] = useState('grid');  // Toggle between grid and list views

  const productsData = [
    {
      id: 1,
      name: 'Tractor',
      price: 5000,
      image: 'https://via.placeholder.com/150',  // Placeholder image URL
    },
    {
      id: 2,
      name: 'Irrigation System',
      price: 2000,
      image: 'https://via.placeholder.com/150',  // Placeholder image URL
    },
    {
      id: 3,
      name: 'Combine Harvester',
      price: 8000,
      image: 'https://via.placeholder.com/150',  // Placeholder image URL
    },
    // Add more products with real image URLs as needed
  ];

  return (
    <div>
      {/* Toggle between Grid and List Views */}
      <div className="view-toggle">
        <button onClick={() => setView('grid')}>Grid View</button>
        <button onClick={() => setView('list')}>List View</button>
      </div>

      {/* Display Products */}
      <div className={`product-container ${view === 'grid' ? 'grid-view' : 'list-view'}`}>
        {productsData.map(product => (
          <div key={product.id} className="product-card">
            {/* Render the product image */}
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
