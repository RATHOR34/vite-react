import About from "./pages/About"
import Footer from "./pages/Footer"
import Header from "./pages/Header"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Register from "./pages/Register"
import Login from "./Login"
import SignUp from "./pages/SignUp"
// import Register from "./pages/Register"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="max-w-[1460px]"></div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/signup" element={<Register />} />
          {/* <Route path="/register " element={<Register />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
export default App