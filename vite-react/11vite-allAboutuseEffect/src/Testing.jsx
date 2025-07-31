import React from 'react'
import { useEffect } from "react"
import { Link } from "react-router-dom" 

function Testing () {
    
    useEffect(() => {
      
        let timeoutId = setInterval(() => {
                    
            console.log("hello")

        }, 1000);
    
      return () => {
         clearInterval(timeoutId)
      }
    }, [])
    
 
    return (
    <div> 
         <div>Testing</div>
         <Link to="/">Home</Link>
    </div>
  )
}

export default Testing