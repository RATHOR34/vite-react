import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProfileContext } from '../../App'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart } from '../../redux/features/cartSlice'

function ProductCard({productData}){
    
    
   
    const {setProductDetail} = useContext(ProfileContext)
    // const [cartItems,setCartItems] = useState([])
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart)
    
    console.log(cartItems)
    
    function handleProductClick(productData){
        
        localStorage.setItem("productDataId",productData.id)
        // console.log(productData)
         setProductDetail(productData)
        
          navigate("/productDetail")
    }

 
    return(
        <div key={productData.id} className="col-md-4 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow p-4" height="300px">
            <img src={productData.image} 
            className="w-full h-56 object-cover" 
            alt={productData.title}
            onClick={() => handleProductClick(productData)}
            />

            <div className=" " style={{marginTop: "18px"}}>
                <h2 className="fs-5 font-semibold text-gray-800">{productData.title.length > 30 ? `${productData.title.substring(0,20)}`: productData.title} </h2>
                <p className="text-gray-600 mt-2 text-sm">
                     { `${productData.description.substring(0, 40)}...more`}
                </p>
                 
                 <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold text-indigo-600"><i className="bi bi-currency-rupee"></i>{productData.price}</span>
                    <button onClick={() => dispatch(addToCart(productData))} style={{padding:"3px 6px",backgroundColor:"indigo"}} className="px-4 py-4 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition duration-200">
                        Add to cart
                    </button>
                 </div>
            </div>
        </div>
    )
}

export default ProductCard