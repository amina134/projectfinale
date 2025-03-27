import { configureStore } from "@reduxjs/toolkit";
import bookSlice from './bookSlice';
import reviewSlice from './reviewSlice';
import userSLice from './userSlice';
export default configureStore({
    reducer:{
        bookElement:bookSlice,
        reviewElement:reviewSlice,
        userElement:userSLice
    },
})