import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from './ProductSlice'
import cartSlice from "./cartSlice";
import UserSlice from './UserSlice'

export const store=configureStore({
  reducer:{
    products:ProductSlice,
    cart:cartSlice,
    user:UserSlice
  }
})