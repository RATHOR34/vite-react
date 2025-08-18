import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import SingleBlog from "./components/SingleBlog"
import Home from "./components/Home"
import About from "./components/About"
import Blog from "./components/Blog"
import Navbar from "./components/Navbar"
import BlogLayout from "./components/BlogLayout"
import BlogDetail from "./components/BlogDetail"
import NotFound from "./components/NotFound"

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogLayout />} >
          <Route index element={<Blog />} />
          <Route path=":id" element={<SingleBlog />} />
          <Route path="blogDetail" element={<BlogDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
