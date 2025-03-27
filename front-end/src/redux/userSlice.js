import { createSlice } from '@reduxjs/toolkit';
const userSlice=createSlice({
    name: "userElement",
    initialState:[{
        _id: "1", 
        userName:  "username",
        email: "user@gmail.com", 
        password: "00000",
        role: "user",
        bio:"hey ",
        imageUser:"path to img",
        books: [],
    }],
    reducers:{
        setUser:(state,action)=>{
            return action.payload
        }
    }
})
export const {setUser}=userSlice.actions;
export default userSlice.reducer;