import { configureStore } from "@reduxjs/toolkit";
import bookSlice from './bookSlice';
import reviewSlice from './reviewSlice';
import userSLice from './userSlice';
import userLoginSlice from'./loginUser'
import { createElement } from "react";
import cartSlice from './cartSlice'
export default configureStore({
    reducer:{
        bookElement:bookSlice,
        reviewElement:reviewSlice,
        userElement:userSLice,
        userLoginElement:userLoginSlice,
        cartElement:cartSlice,
    },
})