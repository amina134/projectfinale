import { useEffect, useState } from "react";
import { getUniqueBook } from "../../../api/booksApi";
import { useParams } from 'react-router-dom';
import {fetchAuthorById} from  "../../../api/authorsApi";
import { FaCartPlus } from "react-icons/fa";
import './bookInformation.css'
import { Link } from 'react-router-dom';




const DisplayBookInformation=()=>{
    const {id}=useParams();
    const [book,setBook]=useState('');
    const [author1,setAuthor]=useState('');
    const getBook=async(id)=>{
        const data=await getUniqueBook(id);
        setBook(data.book);
    }
    console.log('book author id is ',book.author)
     const getAuthor=async()=>{
        const data=await fetchAuthorById(book.author)
        console.log("data of author",data.author);
        setAuthor(data.author)
       
    }
    console.log("book is ",book)

    console.log("author 111111 is ",author1)
     console.log('the name of the author',author1.name)
    useEffect(()=>{
        getBook(id);
       
    },[book]);
    useEffect(() => {
        if (book.author) {
            getAuthor(book.author);
        }
    }, [book.author]);
   return(
    <div className="container-information">

    <div className="part1">
    <img className="book-img" src={`/${book.bookImage}`} alt="img"/>
    </div>
  <div className="part2">
   <h1 className="book-title">{book.title}</h1>
   <h1 className="author-name"> by <a href=''>{author1.name}</a> </h1> 
   <h4 className="title-format">FORMAT</h4>
   {/* price for hardcover book */}
   <div className="hardcover">
    <h4 className="hardcover-text">hardcover</h4>
    <h4 className="language">{book.language}</h4>
    <h3 className="hardcover-price">{book.price} dt</h3>
   </div>
   {/* price for paperback book */}
   <div className="paperback">
    <h4 className="paperback-text">paperback</h4>
    <h4 className="language">{book.language}</h4>
    <h3 className="paperback-price">{book.price} dt</h3>
   </div>
   {/* add to bag button */}
   <div className='add-to-card'>
           <button className='but1'> <img src="https://rails-assets-us.bookshop.org/assets/ic_cart_light-b26a46b06b6ae40a9499157d18cb2eba8f8d81b0de5637f93ef851ea54ceae4c.svg"/> ADD TO BAG</button>
    </div>
   <div className="info">
   <h3 className="description">Description</h3>
   <p className="book-description">{book.description}</p>
   <div className="author-part">
   <h1 className="about-the-author">About The author</h1>
   {/* <h1>{author1.name}</h1> */}
   <p className="author-bio">{author1.bio}</p>
   </div>
   </div>
   
   </div>
 
    </div>
   )
}
export default DisplayBookInformation