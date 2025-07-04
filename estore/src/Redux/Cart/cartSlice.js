import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalItemsPrice: 0,
  totalItems: 0, // count of unique items
  totalQuantity: 0, // count of total quantity
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        state.totalItems += 1; // only increment for unique items
      }

      state.totalQuantity += 1;
      state.totalItemsPrice += action.payload.price;
    },
  },
});

export const { addCartItem } = cartSlice.actions;
export default cartSlice.reducer;
