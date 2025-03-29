import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect} from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { faXmark } from '@fortawesome/free-solid-svg-icons';  // Import the fa-xmark icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Import FontAwesomeIcon

import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import './cartExpress.css'
import { removeFromCart, toggleCart ,updateQuantity} from "../../../redux/cartSlice";

const CartExpress=()=>{
    const {items}=useSelector(state=>state.cartElement)
    const {isOpen}=useSelector((state) => state.cartElement);
    const dispatch=useDispatch();
    console.log("items",items)
   const[isBlack,setIsBlack]=useState(false)
   ///// liking an item 
   const changeColor=()=>{
    setIsBlack(!isBlack);
   }
   ///// remove item /////
   const removeItem=(id)=>dispatch(removeFromCart(id))
   const updateQuan=(id,newQuantity)=>{ console.log("item id",id,newQuantity);
                                    dispatch(updateQuantity({_id:id,newQuantity}));
}
   const closeCartExpress=()=>{
    if(isOpen){
        dispatch(toggleCart());   
   }}

   

    return(
       <div className="cart-dropdown">
        <div className="nav-cart-express">
        <div className="shopping-cart-express-title">Shopping Bag</div>
          <button onClick={closeCartExpress} className=' close-add-cart'><FontAwesomeIcon icon={faXmark} /></button>
        </div>
        {items.length===0?(
            <h3 className="bag-express-empty"> Oups! your cart is empty :o </h3>
        ):(
            <div className="items-in-cart">
                {items.map(item=>(
                    <div className="layout-book-cart">
                        <div>
                        
                         <img className="add-to-cart-imgbook" src={`/${item.bookImage}`} alt={item.title} />
                         </div>
                        <div className="book-info-cart-express">
                           <h4 className="book-title-cart-express">{item.title}</h4>
                           <p className="book-price-cart-express">{item.price}dt</p>
                           <div className="quatity-bookinfo quantity-cart-express">
                            <div className="minus-sign" onClick={()=>{ updateQuan(item._id, item.quantity-1)}}    disabled={item.quantity <= 1}>-</div>
                            <div className="quantity-number">{item.quantity}</div>
                            <div className="plus-sign" disabled={item.quantity >=(item.stock)} onClick={()=>{ updateQuan(item._id, item.quantity+1)}}>+</div>
                           </div>
                          
                           
                        </div>
                       <div>
                        
                         <div onClick={()=>removeItem(item._id)} className="delete-book-cart-express">  <img src="/icons/delete.png" className="delete-icon-cart-express"/> </div>
                         <div className="heart-icon1 like-cart-express"    onClick={changeColor}>  
                            {isBlack ? <IoMdHeart color="black"/>  :<CiHeart/>} 
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        )

        }
        <div className="view-bag-footer-express">
           <button className="view-bag-but">View Bag</button>
           
        </div>
            
       </div>

  
   
  );
}
export default CartExpress;