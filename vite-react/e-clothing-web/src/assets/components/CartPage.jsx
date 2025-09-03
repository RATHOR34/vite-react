 import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import CartPageitems from './CartPageitems'

function CartPage() {
  // redux state se values lena
  const { cartItems } = useSelector(state => state.cart)      // ✅ cartSlice se
  const { items } = useSelector(state => state.products)      // ✅ productsSlice se

  const [cartItemsData, setCartItemsData] = useState([])

  useEffect(() => {
    if (cartItems.length > 0 && items.length > 0) {
      let filterData = []

      // cart ke items aur products ko match karna
      for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < cartItems.length; j++) {
          if (items[i].id === cartItems[j].id) {
            filterData.push({
              ...items[i],
              totalAmount: cartItems[j].totalAmount,
              totalQuantity: cartItems[j].quantity
            })
          }
        }
      }

      setCartItemsData(filterData)
    }
  }, [cartItems,items])   

  return (
    <div>
      {cartItems.length > 0 ? (
        <div>
          {cartItemsData.map((cartItemData) => (
            <CartPageitems product={cartItemData} key={cartItemData.id} />
          ))}
        </div>
      ) : (
        <div style={{ margin: "10rem" }}><h3 className='text-center'>Your cart is empty</h3></div>
      )}
    </div>
  )
}

export default CartPage
