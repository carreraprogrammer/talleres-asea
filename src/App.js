import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AboutUs from './pages/AboutUs/AboutUs';
import HomePage from './pages/HomePage/HomePage';
import ContactUs from './pages/ContactUs/ContactUs';
import Products from './pages/Products/Products';
import Services from './pages/Services/Services';
import './App.css';

const App = () => (
  <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  </div>
);

export default App;
