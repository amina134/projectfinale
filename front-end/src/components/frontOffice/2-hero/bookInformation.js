import { useEffect, useState } from "react";
import { getUniqueBook } from "../../../api/booksApi";
import { useParams } from 'react-router-dom';
import {fetchAuthorById} from  "../../../api/authorsApi";
import { FaCartPlus } from "react-icons/fa";
import './bookInformation.css'
import { useDispatch, useSelector } from "react-redux";

import { Link } from 'react-router-dom';
import NavBar from "../1-header/navBar";
import Footer from "../1-header/footer";

import { IonIcon } from "@ionic/react";
import { arrowForward, arrowDown } from "ionicons/icons";
import BookCard from "./bookCard";
////// material ui 
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}




const DisplayBookInformation=()=>{
     
    const {id}=useParams();
    const [book,setBook]=useState('');

    const getBook=async(id)=>{
        const data=await getUniqueBook(id);
        setBook(data.book);
        // console.log('book infouuuu',book)

    }


    ///////// redux to get the users 
        const users=useSelector(state=>state.userElement.users);
        const[bookAuthor,setBookAuthor]=useState({})
        const[usersArr,setUsersArr]=useState(users);
        const [writerReview,setWriterReview]=useState([]);
        useEffect(()=>{setUsersArr(users); } ,[users]);
       
  
    // get the user informations of the user id of the book
        useEffect(()=>{
            const findUser=async()=>{
            console.log('all the authors',usersArr)
            const userBook=usersArr.find((el)=>el._id===book.user)
            console.log("auther id of the book",book.user)
            

            console.log("the author of the book is ",userBook)

            setBookAuthor({...userBook}||{})
            return {...userBook  ||{}}
            
            }
          
          findUser()
        },[book, users])

   
    useEffect(()=>{
        getBook(id);
       
    },[id]);

    // for the accordian
    const [activeIndex, setActiveIndex] = useState(null)
    const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
   };

   /////// fetch all the books

  // redux part to get books
    const books=useSelector(state=>state.bookElement);
    const[booksArr,setBooksArr]=useState(books);
    const[suggestedBooks,setSuggestedBooks]=useState([])
    useEffect(()=>{setBooksArr(books); } ,[books]);
  // find similar books
     useEffect(()=>{
      const similarBooks=()=>{
      const similars=booksArr.filter((el)=>book.genre===el.genre && book._id !=el._id)
      setSuggestedBooks(similars)
      }
      similarBooks();
     },[books,book])
    
  //// material ui rating 
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  ////// get reviews from redux
  // redux part to get the reviews
    const reviews=useSelector(state=>state.reviewElement)
    const dispatch=useDispatch()
    const[reviewsArr,setReviewsArr]=useState(reviews)
    const[bookReview,setBookReviews]=useState([])
    useEffect(()=>{setReviewsArr(reviews)},[reviews]) 
  //  console.log("reviews from book info",reviewsArr)

  //// GET THE REVIEWS OF THE BOOK
  useEffect(()=>{
    const booksyReviews=()=>{
      if(reviewsArr.length > 0 && book?._id){
        
      
      const getBookReviews=reviewsArr.filter((el)=>book._id===el.book)
      setBookReviews(getBookReviews||{})
      // console.log("reviews of thiiiiis book",bookReview)
      }
    }
    booksyReviews()
  },[reviews,book])

    //// GET THE USER WHO WROTE THE REVIEW  OF THE BOOK
    useEffect(()=>{
      const userReview=()=>{
        if(bookReview.length > 0 ){
        const tabUsers=bookReview.map((review)=>{
          return usersArr.find((user)=>user._id===review.user)
          
        })
        setWriterReview(tabUsers||{})
        console.log("the wirter of my reveiw infoooouu", writerReview)

      }
     
      }

           
        
      userReview()
     
     
    },[users,bookReview])


  




   return(
    <div className="bookInformation-page"> 
   
    <div className="container-information-informationCard">
 
    <div className="part1">
    <img className="book-img" src={`/${book.bookImage}`} alt="img"/>
    </div>
  <div className="part2">
   <h1 className="book-title">{book.title}</h1>
   <h1 className="author-name-bookinfo"> <a href=''  className="author-name-bookinfo"> by {bookAuthor.userName}</a> </h1> 

   <h4 className="title-format">Format</h4>
   {/* price for hardcover book */}
   
   <div className="hardcover-paperback">
   <div className="hardcover">
    <h4 className="hardcover-text">Hardcover</h4>
  
    <h3 className="hardcover-price">{book.price} dt</h3>
   </div>
   {/* price for paperback book */}
   <div className="paperback">
    <h4 className="paperback-text">Paperback</h4>
    
    <h3 className="paperback-price">{book.price} dt</h3>
   </div>
   </div>
   <h4 className="title-format">Language : {book.language}</h4>

   {/* add to bag button */}
   <div className='card-info-bookinfo'>
           <div className="quatity-bookinfo">
            <div className="minus-sign">-</div>
            <div className="quantity-number">1</div>
            <div className="plus-sign">+</div>
           </div>
           <div>
           <button className='add-to-card-bookinfo'>  ADD TO BAG</button>
           </div>
          
    </div>
   {/* <div className="info">
   <h3 className="description">Description</h3>
   <p className="book-description">{book.description}</p>
   <div className="author-part">
   <h1 className="about-the-author">About The author</h1>
  
   <p className="author-bio"></p>
   </div>

   </div> */}
   </div>
   </div>

   
    {/* ////////accordion more infos about the book */}
    <div className="futuristic-accordion">
      {/* Accordion Item 1 */}
      <div className={`accordion-item ${activeIndex === 0 ? 'active' : ''}`}>
        <div className="accordion-header" onClick={() => toggleAccordion(0)}>
          <h3  className="title-about-author">Description</h3>
          <span className="accordion-icon">
            {activeIndex === 0 ? '−' : '+'}
          </span>
        </div>
        <div className="accordion-content">
          <div className="content-inner">
          {book.description}
          </div>
        </div>
      </div>

      {/* Accordion Item 2 */}
      <div className={`accordion-item ${activeIndex === 1 ? 'active' : ''}`}>
        <div className="accordion-header" onClick={() => toggleAccordion(1)}>
          <h3 className="title-about-author" >About The author</h3>
          <span className="accordion-icon">
            {activeIndex === 1 ? '−' : '+'}
          </span>
        </div>
        <div className="accordion-content ">
         
          <div className="content-inner author-inner">
           <div className="photo-author-bookinfo"><img className='authorImg-bookinfo' src={bookAuthor.imageUser}/></div>
           <div className="about-author-bookinfo"><h3 className="author-name-bookinfo">{bookAuthor.userName}</h3>
            <p className="author-bio-bookinfo">{bookAuthor.bio}</p></div> 
          </div>
        </div>
      </div>

      {/* Accordion Item 3 */}
      <div className={`accordion-item ${activeIndex === 2 ? 'active' : ''}`}>
        <div className="accordion-header" onClick={() => toggleAccordion(2)}>
          <h3  className="title-about-author">  Readers also enjoyed</h3>
          <span className="accordion-icon">
            {activeIndex === 2 ? '−' : '+'}
          </span>
        </div>
        <div className="accordion-content">
          <div className="content-inner suggested-books">
          {suggestedBooks.map(el=>
            <BookCard {...el}/>
          )}
          </div>
        </div>
      </div>
    </div>
   
     <div className="my-review">
         <h3 className="rating-title-bookinfo">Ratings and Reviews</h3>
         <h3 className="title-part-review">My Reviews</h3>
         <div className="give-review">
          <div className="photo-user-review"><img className="user-icon-review"  src="/user-icon.png"/></div>
          <h2 className="question-review">What do <i> you </i> think?</h2>
         
            <div className="rating-bar">
            <Box className='box-my-review-stars' sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </Box>
            <button className="add-review">Write A Review</button>
             
            </div>
            
         </div>
     </div>

     <div className="community-reviews">
     <h3 className="title-part-review community-reviews-title">Community Reviews</h3>
     <div class="custom-line"></div>
     {bookReview?.length > 0 ? (
  <div  className="review-community-content">
    {writerReview.map((el, index) => (
      <div className="user-info-review-bookinfo" key={index}>
      
        <img src={el.imageUser} className="user-icon-review-bookinfo" alt="User" />
        <h1 className="user-name-review-bookinfo1">{el.userName}</h1>
      </div>
    ))}

    {bookReview.map((el) => (
      <div className="review-attributes" key={el._id}>
        {/* Review Content */}
        <div className="review-content">
        <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
      <Rating
        name="text-feedback"
        value={el.rating}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />

      <Box value={el.rating} sx={{ ml: 2 }}>{labels[el.rating]}</Box>
    </Box>
        </div>
        <div>{el.reviewText}</div>
      </div>
    ))}
  </div>
) : (
  <p>No reviews yet.</p>
)}
    <div class="custom-line"></div>
     </div>

 
  
     


    <div>
        <Footer/>
    </div>
    </div>
   
   )
}
export default DisplayBookInformation;