import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { ProfileContext } from '../../App'
import { useSelector, useDispatch} from "react-redux";
import { addToCart } from '../redux/features/cartSlice';

function ProductCard({ product }) {
   
    const { setProductDetail } = useContext(ProfileContext)
    // const [cartItems, setCartItems] = useState([])
    const dispatch = useDispatch()
 

    const {cartItems} = useSelector(state => state.cart)
    console.log(cartItems)


    let navigate = useNavigate()

    
    

    function handleProductClick(product) {

        localStorage.setItem("productDataId", product.id)

        setProductDetail(product)

        navigate("/productDetail")
    }

    return (
        <div className="col-12 col-sm-6 col-md-3" key={product.id}  >
            <Link to="#" className="d-inline-block text-decoration-none w-100 h-100">
                <div className="p-3 border rounded shadow-sm h-100">
                    <div style={{ width: "100%" }}>
                        <img
                            className="category"
                            src={product.src}
                            alt={product.title}
                            width="100%"
                            onClick={() => handleProductClick(product)}
                        />
                    </div>
                    <div className="align-items-left py-3" style={{ textAlign: "left" }} >
                        <p className="title">
                            {`${product.title.substring(0, 10)}...`}
                        </p>
                        <h5 className="price pt-2">
                            <i className="bi bi-currency-rupee"></i>{product.price}
                        </h5>
                        <label className="d-block free-delivery py-2">{product.delivery}</label>
                        <div className='d-flex justify-content-between align-items-center product-card'  >
                            <div>
                                <label className="rating">
                                    {product.rating} <i className="bi bi-star-fill"></i>
                                </label>
                                <span className="review"> {product.review}</span>
                            </div>
                            <button className='cart light-bg' onClick={() => dispatch(addToCart(product))}>Add to cart</button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard
