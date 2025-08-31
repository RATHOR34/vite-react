import React from 'react'
import { categories, topsarees, womenProducts, mensProducts, kidsProducts } from "../javascript/productData"
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProfileContext } from '../../App'
import ProductCard from './ProductCard'

function Product() {

 
  const productSections = [
    { title: "Womens Wear", items: womenProducts,id:1 },
    { title: "Mens Wear", items: mensProducts,id:2 },
    { title: "Kids Wear", items: kidsProducts,id:3 }
  ]

  const {setProductDetail} = useContext(ProfileContext)
  let navigate = useNavigate()

  function handleProductClick(saree) {

    localStorage.setItem("productDataId", saree.id)


     setProductDetail(saree)

    navigate("/productDetail")
  }

  return (

    <div className="container">
      <div className="row pt-4  ">
        <div className="col-md-4 pt-4 light-bg rounded-3 border">
          <h5 className="ps-3 fw-bold text-white">BROWSE CATEGORIES</h5>

          <ul className="list-unstyled text-white ps-3 py-2 ">
            {categories.map((category, index) => (
              <li className="pb-2" key={index}><a href="/" className="text-decoration-none text-white">{category}</a></li>
            ))}

          </ul>
        </div>
        {topsarees.map((saree, index) => (
          <div className="col-md-4 mt-3 mt-lg-0 " key={saree.id}>
            <a href="" className="d-inline-block text-decoration-none">
              <div>
                <img className="category rounded-3 border" src={saree.src} alt="" height="100%" width="100%"
                  onClick={() => handleProductClick(saree)}
                />
              </div>
              <div className="align-items-left py-3">
                <p className="title">{saree.title.length < 20 ? saree.title : `${saree.title.substring(0, 20)}...`}</p>
                <h5 className="price pt-2"><i className="bi bi-currency-rupee"></i>{saree.price}</h5>
                <label className="d-block free-delivery py-2" htmlFor=""></label>
                <label htmlFor="" className="rating"><i className="bi bi-star-fill "></i> {saree.rating}</label>
                <span className="review"> {saree.review}</span>
              </div>
            </a>
          </div>
        ))}
      </div>
      {productSections.map((section) => (
        <div className="featured " key={section.id}>
          <div className="text-center pt-4">
            <small className="text-muted" style={{ letterSpacing: "4px" }}>AMAZING SHOP</small>

            <div className="row align-items-center mt-2">
              <div className="col">
                <hr className="border-secondary opacity-25" />
              </div>

              <div className="col-auto">
                <h2 className="fw-bold mb-0">{section.title}</h2>
              </div>

              <div className="col">
                <hr className="border-secondary opacity-25" />
              </div>
            </div>
       

            <div className="wrapper-content-banner row gx-4 gy-4 m-auto py-1">
      
              {section.items.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  
                />
              ))}
            </div>
          </div>

        </div>
      ))}
    </div>

  )
}
 

export default Product