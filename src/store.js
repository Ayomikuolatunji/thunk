import { configureStore } from "@reduxjs/toolkit";
import  cartSlice  from "./features/Cart/cartSlice";
import modalSlice from "./features/modal/modalSlice";



export const store=configureStore({
    reducer:{
       cart:cartSlice,
       modal:modalSlice
    }
})