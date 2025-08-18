import React from 'react'
import axios from 'axios'
import { useState ,useEffect } from 'react'
import ProductCard from './ProductCard'
function Products() {
    
 const[product,setProduct] = useState([])

 
   useEffect(()=>{
        
      function fetchData(){
          
        axios.get("https://fakestoreapi.com/products")
        .then((res) => {
        //  console.log(res.data)
        setProduct(res.data)
        })

      }

      fetchData()

       },[])

 
  return (
    
    <div>
       <h1>product page</h1>

       {
       
        product.map((product,index)=>{
            <ProductCard key={index} productData = {product} />
        })
       }
    </div>
  )
}

export default Products