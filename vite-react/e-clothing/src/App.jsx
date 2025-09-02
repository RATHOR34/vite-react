import { useState } from 'react'
import Login from './assets/components/Login';
import Navbar from './assets/components/Navbar';
import ProductCard from './assets/components/ProductCard';
import Home from './assets/components/Home';
import Product from './assets/components/Product';
import About from './assets/components/About';
import Contact from './assets/components/Contact';
import Faq from './assets/components/Faq';
import Footer from './assets/components/Footer';
import ProductDetail from './assets/components/ProductDetail';
import { createContext } from "react";
import Register from './assets/components/Register';
import CartPage from './assets/components/CartPage';
 
import "./assets/css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import './App.css'
export const ProfileContext = createContext()



function App() {

  const [productDetail, setProductDetail] = useState({})

  return (

    <ProfileContext.Provider value={{ productDetail, setProductDetail }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/productDetail" element={<ProductDetail />} />
          <Route path="/productcard" element={<ProductCard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<CartPage />} />
           
        </Routes>
        <Footer />
      </Router>
   </ProfileContext.Provider>
      )
}

      export default App
