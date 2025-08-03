import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
 
    return (
    <div> 
        <nav style={{display:"flex", gap:"50px",justifyContent:"center"}}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/Blog">Blog</Link>
        </nav>
    </div>
  )

}

export default Navbar