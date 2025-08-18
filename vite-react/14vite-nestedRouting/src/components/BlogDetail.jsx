import React from 'react'
import { useParams } from 'react-router-dom'
function BlogDetail() {

    let paramas = useParams()
       console.log(paramas)

  return (
    <div> 
       BlogDetail
       
    </div>
  )
}

export default BlogDetail