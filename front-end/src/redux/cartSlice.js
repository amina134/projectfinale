import { createSlice } from '@reduxjs/toolkit';
const loadCartFromStorage = () => {
    const savedCart = localStorage.getItem('cartElement');
    return savedCart ? JSON.parse(savedCart) : { items: [] ,  isOpen: false,  };
  };
const cartSlice=createSlice({
    name:'cartElement',
    initialState:loadCartFromStorage(),
    reducers:{
        //// add item to cart
        addToCart:(state,action)=>{
            const{_id,title,price,bookImage,stock}=action.payload
            const existingItem=state.items.find(el=>el._id===_id)
           
            if(!existingItem){
            
                state.items.unshift({_id,title,price,bookImage,stock,quantity:1})
              
            }
        },
       

        ////// remove item from cart 
        removeFromCart:(state,action)=>{
            const itemId=action.payload;
            state.items=state.items.filter(item=>item._id !==itemId)
        },
        ////// update item qquantity
        updateQuantity:(state,action)=>{
            const { _id,newQuantity} = action.payload;
            const item = state.items.find(item => item._id === _id);
            if (item) {
              
                item.quantity = Math.max(1,Math.min(newQuantity,item.stock)
                  );
            }
        },
        /////// CLEAR cart
        clearCart:(state)=>{
            state.items=[]
        },
        toggleCart: (state) => {
            state.isOpen = !state.isOpen;
          },
    },
});

export const{addToCart,removeFromCart,updateQuantity,clearCart,toggleCart}=cartSlice.actions;
export default cartSlice.reducer;