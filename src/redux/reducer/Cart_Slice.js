import { createSlice } from "@reduxjs/toolkit";
const initialState={cartData:{},previous:{}}
 const CartSlice=createSlice({name:"cart",initialState,reducers:{
    plus(state,action)
    {
      state.cartData[action.payload]=(state.cartData[action.payload]||0)+1
    },
    minus(state,action){
        state.cartData[action.payload]=(state.cartData[action.payload])-1
    },
    previous(state,action){
      state.previous={...state.previous,...action.payload}
    },
    emptyCart(state,action){
      state.cartData={}
    }
}})
// console.log(initialState.cartData)

export const CartSliceAction=CartSlice.actions
export default CartSlice