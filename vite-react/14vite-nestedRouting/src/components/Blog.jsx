import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

function Blog() {

  const [blogs, setBlogs] = useState([])

 
  useEffect(() => {

    function fetchData() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data)
        setBlogs(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  fetchData()

  }, [])

  return (
    <div>
      <h1>Blog</h1>
      <div className='posts'>
          {
            blogs.map((blog) => {
              return(
                <div className='post' key={blog.id} style={{marginBottom: "1rem"}}>
                     <h2><Link to={`/blog/${blog.id}`}>{`${blog.id}. ${blog.title}`}</Link></h2>
                     <p>{blog.body}</p>
                </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default Blog