import { createSlice } from "@reduxjs/toolkit"
 
// let cart = {cartItems:[],totalQuantity: 0,totalPrice:0}

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],   
         
    },

    reducers: {
        addToCart: (state, action) => {
             let existingItems = state.cartItems.find(
                (items) => items.id === action.payload.id);
             if(!existingItems){
                state.cartItems.push({
                    id: action.payload.id,
                    quantity: 1,
                    totalPrice: action.payload.price,
                });
             }
        },

        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
        },

        quantityIncrease: (state,action) => {
            state.cartItems = state.cartItems.map((item) => {
                if(item.id === action.payload.id){
 
                        return{ 
                            id: item.id, 
                            quantity: item.quantity + 1, 
                            totalPrice: item.totalPrice + action.payload.price,
                        };
                    } else{
                        return item
                    }
                });
        },
         
        quantityDecrease: (state, action) => {
            state.cartItems = state.cartItems.map((item) => {
                if(item.id === action.payload.id) {
                    if(item.quantity > 1){
                        return {
                            id: item.id,
                            quantity: item.quantity - 1,
                            totalPrice: item.totalPrice - action.payload.price,
                        };
                    }else {
                        return item;
                    }

                }else {
                    return item;
                }
            });
        },

    },
});


// doubt
export const { addToCart, removeFromCart, quantityIncrease, quantityDecrease} = cartSlice.actions

export default cartSlice.reducer;