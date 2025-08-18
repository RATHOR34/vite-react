import { useSelector,useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/features/cartSlice'
import { quantityIncrease } from '../../redux/features/cartSlice';
import { quantityDecrease } from '../../redux/features/cartSlice';

function CartPageitems({productData}){
    
     
    const dispatch = useDispatch()
    // const cart = useSelector(state => state.cart.cartItems) 
    // console.log(cart)
     
    return(
        <div key={productData.id} className="col-md-4 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow p-4" height="300px">
            <img src={productData.image} 
            className="w-full h-56 object-cover" 
            alt={productData.title}  
            />

            <div className=" " style={{marginTop: "18px"}}>
                <h2 className="fs-5 font-semibold text-gray-800">{productData.title.length > 30 ? `${productData.title.substring(0,20)}`: productData.title} </h2>
                <p className="text-gray-600 mt-2 text-sm">
                     { productData.description.length > 40 ? `${productData.description.substring(0,40)}...` : productData.description}
                </p>
                 
                 <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold text-indigo-600"><i className="bi bi-currency-rupee"></i>{Math.ceil(productData.totalPrice)}</span>
                      
                     <div className='d-flex justify-content-between mt-4'>
                        <button onClick={() => dispatch(quantityIncrease(productData))} className='border border-solid border-black '>+</button>
                        <p>Quantity{productData.totalQuantity}</p>
                        <button onClick={() => dispatch(quantityDecrease(productData))} className='border border-solid border-black'>-</button>
                    </div> 

                    <button onClick={() => dispatch(removeFromCart( 
                         productData.id,
                        
                     ))} style={{padding:"3px 6px",backgroundColor:"indigo"}} className="px-4 py-4 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition duration-200">
                        Remove From cart
                    </button>
                 </div>
            </div>
        </div>
    )
}

export default CartPageitems