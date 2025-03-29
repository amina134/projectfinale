import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: "userElement",
  initialState: {
    users: [{
      _id: "1", 
      userName: "username",
      email: "user@gmail.com", 
      password: "00000",
      role: "user",
      bio: "hey ",
      imageUser: "path to img",
      books: [],
    }],
    currentUser: null,  
    token: null,        
  },
  reducers: {
    setUser: (state, action) => {
      state.users = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    clearCurrentUser: (state) => {
      state.currentUser = null;
      state.token = null;
    },
    setToken: (state, action) => {
      state.token = action.payload; // Store login token if needed
    },
  },
});

export const { setUser, setCurrentUser, clearCurrentUser, setToken } = userSlice.actions;
export default userSlice.reducer;
