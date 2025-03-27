import { createSlice } from '@reduxjs/toolkit';
const reviewSlice=createSlice({
    name: "reviewElement",
    initialState:[{
        _id: "1", 
        user: "000000",
        book: "00000", 
        rating: 0,
        reviewText: "cool",
       createdAt: "0000-00-00"
    }],
    reducers:{
        setReview:(state,action)=>{
            return action.payload
        }
    }
})
export const {setReview}=reviewSlice.actions;
export default reviewSlice.reducer;