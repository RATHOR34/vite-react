import  logo from "../assets/images/meeshoLogo.jpg"
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='container navbar py-0 bg-white'>
      
        <img src={ logo } alt="" width="200px" /> 
        
        <Link to="/home">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
    </div>
  )
}

export default Navbar