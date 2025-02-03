
import React, { useEffect,useState } from "react"
import BookCard from "./bookCard"
import { fetchAllBooks } from "../../../api/booksApi";


import './listBooks.css'
import { useSelector, useDispatch } from 'react-redux';


function BookList(){
   // Redux part 
   const books=useSelector(state=>state.bookElement);
   const dispatch=useDispatch();
   const[arr,setArr]=useState(books);
   useEffect(()=>{setArr(books);},[books]);
  
    console.log('books from list book',arr);


return(
    <div className="container">
        <div className="item" >
         {arr.map(el=>
            <BookCard {...el}/>
         )}
        </div>
    </div>
)
}
export default BookList