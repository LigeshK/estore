import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./actions";

const initialState = {
  categories: [],
  status: "idle",
  error: null,
};
const categorySlice = createSlice({
  name: "Category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.status = "loading...";
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.status = "Success";
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
}); // Create a slice for categories

export default categorySlice.reducer; // Export the reducer to be used in the store
