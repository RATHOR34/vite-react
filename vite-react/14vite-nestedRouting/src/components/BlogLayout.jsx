import React from 'react'
import { Outlet } from 'react-router-dom'

function BlogLayout() {
  return (
    <> 
    <div style={{marginBottom:"2rem"}}>
        <h2>Blog Layout</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, minima.</p>
       
    </div>
    <div style={{backgroundColor:"grey",padding:"2rem",color:"white"}}>
         <Outlet />
    </div>
    </>
  )
}

export default BlogLayout