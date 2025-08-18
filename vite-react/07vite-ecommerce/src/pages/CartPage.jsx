import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../assets/components/ProductCard'
import CartPageitems from '../assets/components/CartPageitems'

function CartPage() {

  // const [cartItemFilter] = useState([])
  const { cartItems } = useSelector(state => state.cart)
  const { items } = useSelector(state => state.products)
  const [cartItemsData, setCartItemsData] = useState([])

  useEffect(() => {

    if (cartItems.length > 0 && items.length > 0) {

      let filterData = [];
      for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < cartItems.length; j++) {
          if (items[i].id === cartItems[j].id) {
            filterData.push({ ...items[i], totalPrice: cartItems[j].totalPrice, totalQuantity: cartItems[j].quantity })
          }
        }
      }

      setCartItemsData(filterData)
    }



  }, [cartItems])


  console.log(cartItems, items)

  return (
    <div>
      {cartItems.length > 0 ?
        <div>
          {
            cartItemsData.map((cartItemData) => {
              return (
                <CartPageitems productData={cartItemData} key={cartItemData.id} />
              )
            })
          }
        </div> 
        : <div style={{ margin: "6rem" }}> Your card is empty</div>
      }
    </div>
  )
}

export default CartPage