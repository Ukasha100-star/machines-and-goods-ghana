import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProductPage from './ProductPage';
import ProductDetail from './ProductDetail';
import CategoryPage from './CategoryPage'; // Import the new component
import Header from "./Header";
import Navbar from "./Navbar";
import SecondaryNavbar from "./SecondaryNavbar";
import Footer from "./Footer";
import './App.css';

// Updated categories data
const categoriesData = [
  {
    name: "Machinery",
    subcategories: ["Agricultural Machinery", "Construction Machinery", "Industrial Machinery", "Transport & Hauling"]
  },
  {
    name: "Vehicles",
    subcategories: ["Passenger Vehicles", "Commercial Vehicles", "Motorcycles & Scooters", "Heavy-Duty Vehicles", "Agricultural & Industrial Vehicles"]
  },
  {
    name: "Engines & Power Systems",
    subcategories: ["Petrol Engines", "Diesel Engines", "Generators", "Solar Power Systems", "Pumps"]
  },
  {
    name: "Electronics",
    subcategories: ["Mobiles", "Computers", "TVs", "Wearable Technology", "Gaming & Consoles"]
  },
  {
    name: "Tools & Equipment",
    subcategories: ["Hand Tools", "Power Tools", "Measuring Tools", "Workshop Equipment"]
  },
  {
    name: "Building Materials",
    subcategories: ["Cement", "Bricks & Blocks", "Plumbing Materials", "Electrical Supplies"]
  }
  // Add more categories as needed...
];

const productsData = [
  {
    id: 1,
    name: 'Apsonic Tricycle',
    price: 900,
    category: 'Vehicles',
    subcategory: 'Motorcycles & Scooters',
    images: ['/images/Apsonic_tricycle1.jpg'],
    description: 'A robust tricycle suitable for smaller item carriage needs.'
  },
  {
    id: 2,
    name: 'Everstone Petrol Engine',
    price: 2000,
    category: 'Engines & Power Systems',
    subcategory: 'Petrol Engines',
    images: ['/images/everstone_petrol_engine.jpg'],
    description: 'Efficient petrol engine for irrigation systems.'
  },
  // Add more products as needed...
];

function App() {
  return (
    <Router>
      <div className="app">
        <Header categoriesData={categoriesData} />
        <Navbar categoriesData={categoriesData} />
        <SecondaryNavbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage productsData={productsData} categoriesData={categoriesData} />} />
          <Route path="/product/:productId" element={<ProductDetail productsData={productsData} />} />
          <Route path="/category/:categoryName" element={<CategoryPage categoriesData={categoriesData} />} /> {/* Route for category pages */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
