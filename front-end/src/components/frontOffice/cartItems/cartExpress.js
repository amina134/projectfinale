import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect} from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { faXmark } from '@fortawesome/free-solid-svg-icons';  // Import the fa-xmark icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Import FontAwesomeIcon
import { Link } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import './cartExpress.css'
import {  setCart, toggleCart ,updateQuantity} from "../../../redux/cartSlice";
import{getCartByUserId,removeItemFromCart,updateQuantityApi}from "../../../api/cartApi"
const CartExpress=()=>{
    const [cartItems, setCartItems] = useState([]);
    const user = useSelector((state) => state.userElement.currentUser);
    const itemsRedux = useSelector(state => state.cartElement.items);
    const {isOpen}=useSelector((state) => state.cartElement);
    const dispatch = useDispatch();
    const[isBlack,setIsBlack]=useState(false)
    const [quantity, setQuantity] = useState(1);
  
    ///// liking an item 
   const changeColor=()=>{
    setIsBlack(!isBlack);
   }
   //// delete the book from the card
     const removeItem = async (productId) => {
        try {
            await removeItemFromCart(user._id, productId); // Call API to remove from backend
    
            // Update state immediately by filtering out the removed item
            setCart((prevItems) => prevItems.filter((item) => item.productId !== productId));
    
        } catch (error) {
            console.error("Error removing item:", error);
        }
    };

    const updateQuan = async (newQuantity, item) => {
        try {
            // Ensure valid number & limit quantity
            const updatedQuantity = Math.max(1, Math.min(Number(newQuantity), item.productId.stock));
    
            // Update backend
            const updatedItem = await updateQuantityApi(user._id, item.productId._id, updatedQuantity);
    
            // Update Redux store
            dispatch(updateQuantity(updatedItem));
        } catch (error) {
            console.error("Error updating quantity:", error);
        }
    };
    const closeCartExpress=()=>{
        if(isOpen){
            dispatch(toggleCart())
        }
    }
    


useEffect(() => {
    const fetchCartItems = async () => {
        try {
            const response = await getCartByUserId(user._id); 
            console.log("response items",response.cart.items)
           
            dispatch (setCart(response.cart.items))
        } catch (error) {
            console.error("Error fetching cart items:", error);
        }
    };

   


    if (user._id) fetchCartItems();
    
}, [user._id,itemsRedux]);
   
   
    return(
       <div className="cart-dropdown">
        <div className="nav-cart-express">
        <div className="shopping-cart-express-title">Shopping Bag</div>
          <button onClick={closeCartExpress} className=' close-add-cart'><FontAwesomeIcon icon={faXmark} /></button>
        </div>
        {itemsRedux.length===0?(
            <h3 className="bag-express-empty"> Oups! your cart is empty :o </h3>
        ):(
            <div className="items-in-cart">
                {itemsRedux.map(item=>(
                    <div className="layout-book-cart">
                        <div>
                        
                         <img className="add-to-cart-imgbook" src={`/${item.productId.bookImage}`} alt={item.productId.title} />
                         </div>
                        <div className="book-info-cart-express">
                           <h4 className="book-title-cart-express">{item.productId.title}</h4>
                           <p className="book-price-cart-express">{item.productId.price}dt</p>
                           <div className="quatity-bookinfo quantity-cart-express">
                            <div className="minus-sign" onClick={()=>{ updateQuan( (item.quantity)-1,item)}}    disabled={item.quantity <= 1}>-</div>
                            <div className="quantity-number">{item.quantity}</div>
                            <div className="plus-sign" disabled={item.quantity >=(item.productId.stock)} onClick={()=>{ updateQuan( (item.quantity)+1,item)}}>+</div>
                           </div>
                  
                           
                        </div>
                       <div>
                        
                         <div onClick={()=>removeItem(item.productId._id)} className="delete-book-cart-express">  <img src="/icons/delete.png" className="delete-icon-cart-express"/> </div>
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
            <Link to="/userZone/myBag">
            <button className="view-bag-but">View Bag</button>
            </Link>
          
           
        </div>
            
       </div>

  
   
  );
}
export default CartExpress;