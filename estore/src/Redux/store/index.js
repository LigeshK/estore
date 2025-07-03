import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../Category/categorySlice";
import productSlice from "../Product/productSlice";

export const store = configureStore({
  reducer: {
    categoryReducer: categorySlice,
    productReducer: productSlice,
  },
});
