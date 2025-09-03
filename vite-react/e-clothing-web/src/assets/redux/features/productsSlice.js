 import { createSlice } from "@reduxjs/toolkit";
import { topsarees, womenProducts, mensProducts, kidsProducts } from "../../javascript/productData";

const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    items: [
      ...topsarees,
      ...womenProducts,
      ...mensProducts,
      ...kidsProducts,
    ],
    error: null,
  },
  reducers: {
    // agar future me filter, add, delete product karna ho to ye actions use kar sakte ho
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
