import React from 'react'
import { Outlet } from 'react-router-dom'

function BlogLayout() {
  return (
    <div>
        <h2>Blog Layout</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, minima.</p>
        <Outlet />
    </div>
  )
}

export default BlogLayout