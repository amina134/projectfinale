import { createSlice } from '@reduxjs/toolkit';
const bookSlice=createSlice({
    name: "bookElement",
    initialState:[{
        _id: "1", 
        title: "book title",
        author: "1", 
        genre: "book genre",
        description: "A novel description.",
        price: 15.99,
        availableForThrift: false,
    }],
    reducers:{
        setBook:(state,action)=>{
            return action.payload
        }
    }
})
export const {setBook}=bookSlice.actions;
export default bookSlice.reducer;