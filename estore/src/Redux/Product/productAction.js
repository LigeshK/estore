import { createAsyncThunk } from "@reduxjs/toolkit";

// This file is used to fetch products from the server and update the Redux store
export const getProducts = createAsyncThunk("getProducts", async () => {
  try {
    const productData = await fetch("http://localhost:5001/products");
    if (!productData.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await productData.json();
    return data;
  } catch (error) {
    return null;
  }
});
