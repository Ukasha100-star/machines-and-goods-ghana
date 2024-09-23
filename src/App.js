import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import SecondaryNavbar from "./SecondaryNavbar";
import Footer from "./Footer";
import ProductPage from "./ProductPage";
import ProductDetail from './ProductDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Define the categories data
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
        <Header />
        <Navbar />
        <SecondaryNavbar />
        
        <Routes>
          <Route 
            path="/products" 
            element={<ProductPage productsData={productsData} categoriesData={categoriesData} />} 
          />
          <Route path="/product/:productId" element={<ProductDetail productsData={productsData} />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
