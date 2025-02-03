import { configureStore } from "@reduxjs/toolkit";
import bookSlice from './bookSlice';

export default configureStore({
    reducer:{
        bookElement:bookSlice,
    },
})