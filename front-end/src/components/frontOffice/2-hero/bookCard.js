

import { useState, useEffect,startTransition  } from "react";
import './bookCard.css'; // Import the CSS file
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

const BookCard = ({ title, user, bookImage, description, _id, price,genre,mood }) => {
   const[isBlack,setIsBlack]=useState(false)

   ////// hovering over the book
   const [isHovered, setIsHovered] = useState(false);
   const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
   const changeColor=()=>{
    setIsBlack(!isBlack);
   }

   ///////// redux to get the users 
    const users=useSelector(state=>state.userElement);
    const[bookAuthor,setBookAuthor]=useState({})
    const[usersArr,setUsersArr]=useState(users);
    useEffect(()=>{setUsersArr(users); } ,[users]);

    // get the user informations of the user id of the book
    useEffect(()=>{
        const findUser=async(user)=>{
        const userBook=usersArr.find((el)=>el._id===user)
        console.log("the author of the book is ",userBook)
        setBookAuthor({...userBook}||{})
        return {...userBook  ||{}}
      }
    
        

        findUser(user)
         },[usersArr])
   

  return (
        
    <div className='book-box'>
      <div className="heart-icon1"    onClick={changeColor}>  
     {isBlack ? <IoMdHeart color="black"/>  :<CiHeart/>} 
      </div>
     
      <button className='but2'> <span className='button-content'>ADD TO BAG</span></button>
      
    
      <Link className="link" to={`/bookInformation/${_id}`}> 
      <div className="mobile-layout"
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}>
      
     
          

         
        <div className={`book-cover ${isHovered ? 'hovered' : ''}`}>

          <img className="book-top" src={`http://localhost:3000/${bookImage}`} alt={title} />
          
        

          <img
            className="book-side"
            src="https://raw.githubusercontent.com/atomic-variable/images-repo/e37f432405904a280858e5437ce1960753bc78a3/book-side.svg"
            alt="book-side"
          />
        </div>
      
    
        <div className={`preface ${isHovered ? 'hovered' : ''}`}>
            
          <div className="content">
            <div className="header">
              <div className="title-book-card">{title}</div>
             
            </div>
            <div className="author-name-book-card">by {bookAuthor.userName}</div>
            <div className="icon-down">
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
