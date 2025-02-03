


import React, { useState } from 'react';
import './bookCard.css'; // Import the CSS file
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";

import { Link } from 'react-router-dom';


const BookCard = ({ title, author, bookImage, description, _id, price,genre,mood }) => {
   const[isBlack,setIsBlack]=useState(false)
   const changeColor=()=>{
    setIsBlack(!isBlack);
   }

  return (
                
    <div className='book-box'>
      <div className="heart-icon1"    onClick={changeColor}>  
     {isBlack ? <IoMdHeart color="black"/>  :<CiHeart/>} 
      </div>
     
      <button className='but2'> <span className='button-content'>ADD TO BAG</span></button>
      
    
      <Link className="link" to={`/bookInformation/${_id}`}> 
      <div className="mobile-layout">
 
     
          

         
        <div className="book-cover">

          <img className="book-top" src={`http://localhost:3000/${bookImage}`} alt={title} />
          
        

          <img
            className="book-side"
            src="https://raw.githubusercontent.com/atomic-variable/images-repo/e37f432405904a280858e5437ce1960753bc78a3/book-side.svg"
            alt="book-side"
          />
        </div>
      
    
        <div className="preface">
            
          <div className="content">
            <div className="header">
              <div className="title">{title}</div>
             
            </div>
            <div className="author">by Amina Kouni</div>
            <div className="icon">
                <i className="fas fa-chevron-down"></i>
              </div>
            
             
            <div className="body">
            <p className='price' >{price} dt</p>
              {/* <h3 className='genre'>{genre}</h3> */}
            </div>
          </div>
        </div>
    
      </div>    </Link>

      </div>
    
  );
};

export default BookCard;
