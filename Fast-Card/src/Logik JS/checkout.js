import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosRequest } from "../ultis/axiosReques";
  const API = import.meta.env.VITE_API_KEY
export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axiosRequest.get(
      `${API}/Cart/get-products-from-cart`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const cartData = response.data.data[0];
    console.log({
      products: cartData.productsInCart,
      total: cartData.totalPrice,
      skidka: cartData.totalDiscountPrice,
    })
    return {
      products: cartData.productsInCart,
      total: cartData.totalPrice,
      skidka: cartData.totalDiscountPrice,
    };
  } catch (error) {
    console.error(error);
  }
});
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    total: 0,
    skidka: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.products = action.payload.products;
      state.total = action.payload.total;
      state.skidka = action.payload.skidka;
    });
  },
});
export default cartSlice.reducer;