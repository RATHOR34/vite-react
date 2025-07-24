import React from 'react'
import Navbar from './assets/components/Navbar'
import Products from './assets/components/Products'
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <div>
       <BrowserRouter>
           <Navbar />
          <Routes>
              <Route path="/products" element={<Products />} />
          </Routes>
       </BrowserRouter>
         
    </div>
  )
}
