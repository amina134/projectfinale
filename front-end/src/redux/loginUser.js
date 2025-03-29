import { createSlice } from '@reduxjs/toolkit';

const userLoginSlice = createSlice({
    name: "userLoginElement",
    initialState: {
        _id: "1", 
        userName: "",
        email: "",
        password: "",
        role: "",
        bio: "",
        imageUser: "",
        books: [],
    },
    reducers: {
        setUserLogin: (state, action) => {
            return { ...state, ...action.payload };
        },
        clearUser: (state) => {
            return {
                _id: null,
                userName: "",
                email: "",
                password: "",
                role: "",
                bio: "",
                imageUser: "",
                books: [],
            };
        }
    }
});

export const { setUserLogin, clearUser } = userLoginSlice.actions;
export default userLoginSlice.reducer;
