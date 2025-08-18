import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// async task
// file read
// api calling
// setTimeout
// setInterval
// middleware(asyncThunk)  used for async task

export const fetchProducts =  createAsyncThunk('products/fetchProducts',async() => {

    const response = await axios.get("https://fakestoreapi.com/products")
    return response.data

})


const productSlice = createSlice({
    name: "products",
    initialState: {
        loading: false,
        items : [],
        error: null
    },
    
    extraReducers: (builder) => {
        builder
          .addCase(fetchProducts.pending, (state) => {
                 state.loading = true
                 state.error = null

          })
          .addCase(fetchProducts.fulfilled, (state,action) => {
                  state.loading = false
                  state.items = action.payload
          })
          .addCase(fetchProducts.rejected, (state,action) => {
                state.loading = false
                state.error = action.error.message
          })
    }
    
        
})


export default productSlice.reducer