import React from "react";
import Header from "./Header";  // Importing the Header component
import Navbar from "./Navbar";  // Importing the updated Navbar component
import SecondaryNavbar from "./SecondaryNavbar";  // Secondary navbar for quick links
import Footer from "./Footer";  // Footer component
import ProductPage from "./ProductPage";  // Importing the ProductPage component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';  // Importing the updated Home component
import './ButtonStyles.css';  // Import the button styles
import './App.css';  // Importing the CSS file



function App() {
  return (
    <Router>
      <div className="app">
        <Header />  {/* Header component visible on all pages */}
        <Navbar />  {/* Navbar with active link highlighting */}
        <SecondaryNavbar />  {/* Secondary navbar for additional navigation links */}
        <Routes>
          <Route path="/" element={<Home />} />  {/* Home page route */}
          <Route path="/products" element={<ProductPage />} />  {/* Products page route */}
        </Routes>
        <Footer />  {/* Footer component visible on all pages */}
      </div>
    </Router>
  );
}

export default App;
