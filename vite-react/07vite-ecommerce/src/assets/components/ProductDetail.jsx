import React, { useEffect } from 'react'
import { useContext } from 'react'


import { ProfileContext } from '../../App'
import axios from 'axios' 

function ProductDetail() {
   
      const {productDetail,setProductDetail}  = useContext(ProfileContext)
       
      useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${ localStorage.getItem("productDataId")}`)
        .then((res) => {
          console.log(res.data)
        setProductDetail(res.data)
        } )
      },[])
     
    return (
      
     <div key={productDetail.id} className="col-md-4 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow p-4" height="300px">
            <img src={productDetail.image} 
            className="w-full h-56 object-cover" 
            alt={productDetail.title}
             
            />

            <div className=" " style={{marginTop: "18px"}}>
                <h2 className="fs-5 font-semibold text-gray-800">{productDetail.title }   </h2>
                <p className="text-gray-600 mt-2 text-sm">
                     { productDetail.description }
                </p>
                 
                 <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold text-indigo-600"><i className="bi bi-currency-rupee"></i>{productDetail.price}</span>
                    <button style={{padding:"3px 6px",backgroundColor:"indigo"}} className="px-4 py-4 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition duration-200">
                        Add to cart
                    </button>
                 </div>
            </div>
        </div>
  )
}

export default ProductDetail