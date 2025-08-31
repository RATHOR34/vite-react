import React, { useEffect } from 'react'
import { categories, topsarees, womenProducts, mensProducts, kidsProducts } from "../javascript/productData"
import { useContext, useState } from 'react'
import { ProfileContext } from '../../App'

function ProductDetail() {
  
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productId = localStorage.getItem("productDataId");

    
    const allProducts = [
      ...topsarees,
      ...womenProducts,
      ... mensProducts,
      ...kidsProducts
    ];

    const selected = allProducts.find((item) => String(item.id) === String(productId));
    setProduct(selected);
  }, []);

  if (!product) {
    return <h2 className="text-center mt-5">Product not found</h2>;
  }


  return (
    <div>

      <div className="container">
        <div className="row pt-4">
          <div className="col-md-4 mt-3 mt-lg-0" key={product.id}>
            <a href="" className="d-inline-block text-decoration-none">
              <div>
                <img className="category rounded-3 border" src={product.src} alt="" height="100%" width="100%"

                />
              </div>
              <div className="align-items-left py-3">
                <p className="title">{product.title}</p>
                <h5 className="price pt-2"><i className="bi bi-currency-rupee"></i>{product.price}</h5>
                <label className="d-block free-delivery py-2" htmlFor=""></label>
                <label htmlFor="" className="rating"><i className="bi bi-star-fill "></i> {product.rating}</label>
                <span className="review"> {product.review}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      </div>
      )
}

      export default ProductDetail