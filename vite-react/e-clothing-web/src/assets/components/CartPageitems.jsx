// import { useDispatch } from "react-redux";
// import { removeFromCart,addToCart } from "../redux/features/cartSlice";
// import { quantityIncrease,quantityDecrease } from "../redux/features/cartSlice";
 
// function CartPageitems({product}){
 
//     const dispatch = useDispatch()


//     return (
//          <div className="col-12 col-sm-6 col-md-3" key={product.id}  >
           
//                 <div className="p-3 border rounded shadow-sm h-100">
//                     <div style={{ width: "100%" }}>
//                         <img
//                             className="category"
//                             src={product.src}
//                             alt={product.title}
//                             width="100%"
//                             // onClick={() => handleProductClick(product)}
//                         />
//                     </div>
//                     <div className="align-items-left py-3" style={{ textAlign: "left" }} >
//                         <p className="title">
//                             {`${product.title.substring(0, 10)}...`}
//                         </p>
//                         <h5 className="price pt-2">
//                             <i className="bi bi-currency-rupee"></i>{product.price}
//                         </h5>
//                         <label className="d-block free-delivery py-2">{product.delivery}</label>
//                         <div className='d-flex justify-content-between align-items-center product-card'  >
//                             <div>
//                                 <label className="rating">
//                                     {product.rating} <i className="bi bi-star-fill"></i>
//                                 </label>
//                                 <span className="review"> {product.review}</span>
//                             </div>
//                             <button className='cart light-bg' onClick={() => dispatch(addToCart(product))}>Add to cart</button>
//                         </div>
//                     </div>
//                 </div>
            
//         </div>
//     )
// }

// export default CartPageitems;

import { useDispatch } from "react-redux";
import { removeFromCart, addToCart, quantityIncrease, quantityDecrease } from "../redux/features/cartSlice";

function CartPageitems({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="col-12 col-sm-6 col-md-3" key={product.id}>
      <div className="p-3 border rounded shadow-sm h-100">
        <div style={{ width: "100%" }}>
          <img
            className="category"
            src={product.src}
            alt={product.title}
            width="100%"
          />
        </div>
        <div className="align-items-left py-3" style={{ textAlign: "left" }}>
          <p className="title">
            {`${product.title.substring(0, 10)}...`}
          </p>
          <h5 className="price pt-2">
            <i className="bi bi-currency-rupee"></i>{Math.ceil(product.totalAmount)}
          </h5>
          <label className="d-block free-delivery py-2">{product.delivery}</label>

          {/* ✅ Rating + Add to Cart */}
          <div className="d-flex justify-content-between align-items-center product-card">
            <div>
              <label className="rating">
                {product.rating} <i className="bi bi-star-fill"></i>
              </label>
              <span className="review"> {product.review}</span>
            </div>
            <button
              className="cart light-bg"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to cart
            </button>
          </div>
 
          <div className="d-flex justify-content-between align-items-center mt-3">
            <button
              className="border border-solid border-black px-2"
              onClick={() => dispatch(quantityDecrease(product))}
            >
              -
            </button>
            <p className="m-0">Quantity: {product.totalQuantity || 1}</p>
            <button
              className="border border-solid border-black px-2"
              onClick={() => dispatch(quantityIncrease(product))}
            >
              +
            </button>
          </div>

          {/* ✅ Remove button */}
          <div className="mt-3 text-center">
            <button
              onClick={() => dispatch(removeFromCart(product.id))}
               
              className="cart light-bg"
            >
              Remove From Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPageitems;
