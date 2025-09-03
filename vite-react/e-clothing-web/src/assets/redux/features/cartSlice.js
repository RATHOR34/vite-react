// import {createSlice} from "@reduxjs/tookit"
import { createSlice } from "@reduxjs/toolkit"

 

const cartSlice = createSlice({
    name: "cart",
    initialState : {
        cartItems:[],
        totalAmount:0,
        totalQuantity:0
    },

    reducers: {
        addToCart : (state,action) => {

        let existingItem =   state.cartItems.filter((item) => item.id === action.payload.id) 

        if(existingItem.length === 0){
            state.cartItems.push({id: action.payload.id , quantity:1, totalAmount: action.payload.price })
        }

        },

        removeFromCart: (state,action) => {
          state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },


        quantityIncrease : (state,action) => {
            state.cartItems = state.cartItems.map((item) => {
                if(item.id === action.payload.id){
                    return {
                        id: item.id,
                        quantity: item.quantity + 1,
                        totalAmount: item.totalAmount + action.payload.price
                    };

                } else {
                    return item;
                }
            });
        },

        quantityDecrease : (state, action) => {
            state.cartItems = state.cartItems.map((item) => {
                if(item.id === action.payload.id){
                    if(item.quantity > 1){
                        return {
                            id : item.id,
                            quantity: item.quantity - 1,
                            totalAmount: item.totalAmount - action.payload.price
                        };
                    } else {
                        return item
                    }
                } else {
                    return item;
                }
            });
        },
    },
})

export const {addToCart,removeFromCart,quantityIncrease,quantityDecrease} = cartSlice.actions;

export default cartSlice.reducer
