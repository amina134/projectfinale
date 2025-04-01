import {useDispatch, useSelector } from "react-redux"




const FullCart=()=>{
    const itemsRedux = useSelector(state => state.cartElement.items);
    const dispatch=useDispatch();
   console.log("books",itemsRedux)
    return(
        <div>
         <div>
            <h6>products</h6>
            <h6>price</h6>
         </div>
         <div className="list-items-full-cart">
            <div>
            {itemsRedux.map(item=>(
                <div>
                   <div>
                        
                        <img className="add-to-cart-imgbook" src={`${item.productId.bookImage}`} alt={item.title} />
                        </div>
                </div>
            ))
            }
            </div>

         </div>
         <div className="checkout-box">

         </div>
        </div>
    )
}
export default FullCart