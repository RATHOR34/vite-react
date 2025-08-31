import { useState } from 'react'
import './App.css'
import { BrowserRouter } from "react-router-dom";
import Navbar from './assets/components/Header'
 
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>

    </>
  )
}

export default App
