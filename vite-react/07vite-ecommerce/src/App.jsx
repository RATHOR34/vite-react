import About from "./pages/About"
import Footer from "./pages/Footer"
import Header from "./pages/Header"
import Home from "./pages/Home"
import Products from "./pages/Products.jsx"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Profile from "./pages/Profile.jsx"
import SignUp from "./pages/SignUp"
// import Register from "./pages/Register"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { createContext, useState } from "react"

export const ProfileContext = createContext()
 

function App() {
  const [profileData,setProfileData] = useState({})
 console.log(profileData)
  return (
    <ProfileContext.Provider value={{profileData,setProfileData}}> 
    <div style={{ minHeight: "100vh" }}>
      <div className="max-w-[1460px]"></div>
      <BrowserRouter>
       
        <Header />
        
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/register " element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
            
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    </ProfileContext.Provider>
  )
}
export default App