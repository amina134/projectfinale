import { createSlice } from '@reduxjs/toolkit'; 

const cartSlice = createSlice({
    name: 'cartElement',
    initialState: { items: [], isOpen: false },
    reducers: {
      setCart: (state, action) => {
        state.items = action.payload;
      },
  
      addToCart: (state, action) => {
        state.items = action.payload; // Directly set the items to the backend response
      },
  
      removeFromCart: (state, action) => {
        const itemId = action.payload;
        state.items = state.items.filter(item => item._id !== itemId);
      },
      
     
      updateQuantity: (state, action) => {
          const { _id, newQuantity } = action.payload;
          const item = state.items.find(item => item.productId._id === _id);
          if (item) {
              item.quantity = newQuantity; // Update quantity in Redux store
          }
      
      },
  
      clearCart: (state) => {
        state.items = [];
      },
  
      toggleCart: (state) => {
        state.isOpen = !state.isOpen;
      },
    },
  });
  
  export const { setCart, addToCart, removeFromCart, updateQuantity, clearCart, toggleCart } = cartSlice.actions;
  export default cartSlice.reducer;
  