import { configureStore } from "@reduxjs/toolkit";
import cartSlice from '../Redux/Cartslice'

const Store = configureStore({
    reducer:{
        cart:cartSlice
    }
})
export default Store