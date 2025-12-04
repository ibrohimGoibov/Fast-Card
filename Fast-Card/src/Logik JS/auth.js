import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosRequest } from "../ultis/axiosReques";
const API = import.meta.env.VITE_API_KEY;
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (user) => {
    const { data } = await axiosRequest.post(
      `${API}/Account/register`,
      user
    );
    return data;
  }
);
export const loginUser = createAsyncThunk("auth/loginUser", async (user) => {
  const { data } = await axiosRequest.post(
    `${API}/Account/login`,
    user
  );
  localStorage.setItem("token", data.data);
  return data.data;
});
const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.token = action.payload;
    });
  },
});
export default authSlice.reducer;
