import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import './bookCard.css'; // Import the CSS file
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, toggleCart } from '../../../redux/cartSlice';
import { addItemToCart } from '../../../api/cartApi'; // Ensure this import is correct
const BookCard = ({ title, user, bookImage, description, _id, price, genre, mood, stock }) => {
  const location = useLocation();
  const isInUserZone = location.pathname.startsWith('/userZone');
  
  const linkPath = isInUserZone 
    ? `/userZone/books/bookInformation/${_id}`
    : `/bookInformation/${_id}`;

  const [isBlack, setIsBlack] = useState(false);
  
  // Hover effect
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const changeColor = () => setIsBlack(!isBlack);

  ///////// redux to get the users 
  const users = useSelector(state => state.userElement.users);
  const [bookAuthor, setBookAuthor] = useState({});
  const [usersArr, setUsersArr] = useState(users);
  
  useEffect(() => {
    setUsersArr(users); 
  }, [users]);

  useEffect(() => {
    const findUser = async (userId) => {
      const userBook = usersArr.find((el) => el._id === userId);
      // console.log("The author of the book is", userBook);
      setBookAuthor({ ...userBook } || {});
    };
    
    findUser(user);
  }, [usersArr, user]);

  //// Add to cart functionality
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.userElement);
  const itemsRedux = useSelector(state => state.cartElement.items);
  // console.log("BookCard currentUser:", currentUser);
 

  const { isOpen } = useSelector((state) => state.cartElement);
  
  const handleAddToCart = async () => {
    if (!currentUser) {
      alert("Please log in to add items to your cart!");
      return;
    }
    
  
    // Call the API to add the item to the cart on the backend
    try {
    
  
      if(isOpen===false){
        dispatch(toggleCart());   
      }
      // if(itemsRedux){
      //   const check= await  itemsRedux.find(item=>item.productId._id===_id)
      //   console.log("check book",check)
      //   if(check ){
      //     alert("Book already found in your bag!")
      //     return;
      //   }
      // }
     
      const response = await addItemToCart(currentUser._id, _id, 1); 
     
      
        dispatch(addToCart(response.cart.items)); 


      
     
     
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };


  return (
    <div className='book-box'>
      <div className="heart-icon1" onClick={changeColor}>
        {isBlack ? <IoMdHeart color="black" /> : <CiHeart />}
      </div>

      <button className='but2' onClick={() => handleAddToCart({ title, user, bookImage, description, _id, price, genre, mood, stock })}>
        <span className='button-content'>ADD TO BAG</span>
      </button>

      <Link className="link" to={linkPath}>
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
                <p className='price'>{price} dt</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
