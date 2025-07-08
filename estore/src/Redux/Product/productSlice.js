import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productAction";

// This slice is used to manage the state of products in the Redux store

const initialState = {
  products: [],
  status: "idle",
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // This reducer filters products based on the selected category
    // It takes the current state and an action payload containing the selected category
    filterProducts: (state, action) => {
      const filteredData = action.payload.products.filter((elem) => {
        return elem.category_id === action.payload.selectedCategory.id; // This line filters products based on the selected category
      });
      state.products = filteredData;
    },
    // It updates the products state with the filtered data
  },
  // This extra reducer handles the asynchronous action of fetching products
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
// Exporting the actions and reducer from the product slice
export const { filterProducts } = productSlice.actions;
export default productSlice.reducer;
