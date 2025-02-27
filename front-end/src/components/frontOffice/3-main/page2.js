import BookModel from "../3d components/three"
import './page2.css'
import 'animate.css';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { MdKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const style = {
   
    
  };
  
  const Page2 = ({ changePage }) => {
    const [showBook, setShowBook] = useState(null);

  const books = useSelector(state => state.bookElement); 

  console.log("Books from Redux:", books);

  useEffect(() => {
    if (books.length > 0) {  
      const book = books.find(element => element.title === 'Hokusai Museum');
      console.log('Found book:', book);
      setShowBook(book);
    }
  }, [books]); 


    return (
        <div className="background-container" >
             
   
            <div className="item1">

              {showBook ? (
              <div className='flex-items'>
                <h3 className='price-title'>{showBook.price}</h3>
                <h2 className="title-of-book animate__animated animate__bounce">{showBook.title}</h2>
                <p className='descrption-showbook'>{showBook.description}</p>
                <button className="shop-now-button"><h3 className="shop-now">Shop Now</h3></button>
                </div>
              ) : (
              <p></p>
              )}


              </div>
          <div className="item2">
            
          <img className="imageBook" src='./booksImages/they-dream-in-gold.jpg'/>
           
          </div>

         
         
      
      </div>
      
      
    )

}
export default Page2;