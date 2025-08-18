import React from 'react'

function ProductCard({productData}) {

    function handleClick(productData){
      console.log(productData)
    }

  return (
    <div> 
         <button className='btn' onClick={handleClick}>get</button>
    </div>
  )
}

export default ProductCard