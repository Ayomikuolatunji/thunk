import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const url="https://course-api.com/react-useReducer-cart-project"
const initialState={
    cartItems:[],
    amount:1,
    total:0,
    isLoading:true,
    singleProduct:null
}

export const getCartItems= createAsyncThunk("cart/getCartItems",
   async (_,thunkApi)=>{
   console.log(thunkApi);
   const res=await axios(url)
   return res.data
})

export const fetchById=createAsyncThunk("cartId/fetchById",
  async(id)=>{
    const  getSIngleProd=await axios(`${'https://jsonplaceholder.typicode.com/users'}/${1}`)
    return getSIngleProd.data
})

const cartSlice=createSlice({
     name:"cart",
     initialState:initialState,
     reducers:{
        clearCart: (state) => {
            state.cartItems = [];
          },
          removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
          },
          increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount + 1;
          },
          decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount - 1;
          },
          calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
              amount += item.amount;
              total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
          },
     },
     extraReducers:{
       [getCartItems.fulfilled]:(state,action)=>{
            state.isLoading=false
            state.cartItems=action.payload
            // console.log(action.payload);
       },
       [getCartItems.pending]:(state)=>{
         state.isLoading=true
       },
       [getCartItems.rejected]:(state)=>{
         state.isLoading=false
       },
       [fetchById.fulfilled]:(state,action)=>{
             console.log(action.payload);
             state.singleProduct=action.payload
       }
     }

})
export const { clearCart, removeItem, increase, decrease, calculateTotals}=cartSlice.actions
export default cartSlice.reducer

