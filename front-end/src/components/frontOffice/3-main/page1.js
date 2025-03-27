import BookModel from "../3d components/three"
import './page1.css'
import { useSelector, useDispatch } from 'react-redux';
import 'animate.css';
import { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";



  const Page1=({changePage})=>{
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
        <div className="background-container1" >
         
            <div className="item11">

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
          {/* <div className="item22">
                 <BookModel path='/book3.gltf' className='d-book' /> 
           
          </div>

         */}
      
         
        
      
      </div>
      
      
    )
    // return(
    //  <div>
    //     {showBook ? (
    //       <div>
    //         <h2>{showBook.title}</h2>
    //         <p>Genre: {showBook.genre}</p>
    //         <p>Price: ${showBook.price}</p>
    //       </div>
    //     ) : (
    //       <p>Loading book details...</p> // Fallback UI while waiting for data
    //     )}
    //  </div>)

}
export default Page1;