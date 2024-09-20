import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Machines & Goods for Ghana</h1>
      <p>Your one-stop shop for agricultural machines and more!</p>
      {/* Button to navigate to the products page */}
      <Link to="/products">
        <button className="view-products-btn">View Our Products</button>
      </Link>
    </div>
  );
}

export default Home;
