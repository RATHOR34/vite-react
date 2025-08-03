import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function SingleBlog() {

  let params = useParams()
  console.log(params)
  
  const[singleBlogData,setSingleBlogData] = useState({}) 

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/" + params.id)
    .then((res) => {
     setSingleBlogData(res.data)
    })


  },[])

  return (
    <div> 
        <h3>Single Post</h3>
        <div className='singlepost'>
            <h4>{singleBlogData.title}</h4>
            <p>{singleBlogData.body}</p>
        </div>
    </div>
  )
}

export default SingleBlog