import { useState } from 'react'
// import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Products from './components/Products.jsx'
import Login from './components/Login.jsx'
import Navbar from './components/Navbar.jsx'
import ProductCard from './components/ProductCard.jsx'

function App() {
   

  return (
   
       <BrowserRouter>
       <Navbar />
          <Routes>
                 <Route path='/home' element={<Home />} />
                 <Route path='/products' element={<Products />} />
                 <Route path='/about' element={<About />} />
                 <Route path='/login' element={<Login />} />
                 <Route path='productcard' element={<ProductCard />} />
          </Routes>
       </BrowserRouter>
    
  )
}

export default App
