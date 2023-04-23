import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../reducer/Cart_Slice";

const store=configureStore({
    reducer:{
        cartReducer:CartSlice.reducer
    }
})

export default store