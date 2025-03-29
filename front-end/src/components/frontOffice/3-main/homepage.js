import { useState, useEffect,startTransition  } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "../1-header/navBar";
import Page1 from "./page1";
import Page2 from "./page2";
import "./homepage.css";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

/// social media icons//
import { CiInstagram } from "react-icons/ci";
import { GrFacebookOption } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";
import Login from "../6-sign/login";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../1-header/footer";
import HeaderUser from "../../backOffice/user/headerUser/headerUser";


const  HomePage=()=> {
  // const [getBookReview,setGetBookReview]=useState([])
  const [booksAndUsersReview,setBooksAndUsersReview]=useState([])
  const [page, setPage] = useState('page1');
  const [arrowdown,setArrowDown]=useState(false);
  // const[background,setBackground]=useState('linear-gradient(to right, rgb(255, 204, 204), rgb(210, 230, 245), rgb(248, 219, 244), rgb(255, 255, 204), rgb(255, 204, 255))')
  const[background,setBackground]=useState('#DAEAF1')
  
// redux part to get the reviews
  const reviews=useSelector(state=>state.reviewElement)
  const dispatch=useDispatch()
  const[reviewsArr,setReviewsArr]=useState(reviews)
  useEffect(()=>{setReviewsArr(reviews)},[reviews]) 
  // console.log('reviews from homepage',reviewsArr);

  // redux part to get boooks
 
    const books=useSelector(state=>state.bookElement);
    const[booksArr,setBooksArr]=useState(books);
    useEffect(()=>{setBooksArr(books); } ,[books]);
    
  // reduux part to get users who wrote the reviews
    const users=useSelector(state=>state.userElement.users);
    const[usersArr,setUsersArr]=useState(users);
    useEffect(()=>{setUsersArr(users); } ,[users]);
    // console.log("users ARR",users)


  // get the books and users of the reviews
    useEffect(()=>{
      const findBooksAndUsers=async()=>{
          const bookAndUsersWithReviews=reviewsArr.map((review)=>{
          const bookFound=booksArr.find((el)=>review.book===el._id)
          const userFound=usersArr.find((el)=>review.user===el._id)
          // console.log('book found',bookFound)
          // console.log('user found',userFound)
          return {...review,
            book: bookFound ||{},
            user: userFound ||{}}
          })
          // console.log('books with reviews hhh',bookAndUsersWithReviews)
          setBooksAndUsersReview([...bookAndUsersWithReviews])} 

          findBooksAndUsers()
    },[reviewsArr,booksArr,booksAndUsersReview])
    
    // console.log(' BOOKs OF REVIEW',booksAndUsersReview)
    
   

   //// page transition
      const changePage = (newPage) => 
        {
        startTransition(() => {
          setPage(newPage);
        });
      };

      const changeBackground=()=>{
        setBackground(background===('linear-gradient(to right, rgb(255, 204, 204), rgb(210, 230, 245), rgb(248, 219, 244), rgb(255, 255, 204), rgb(255, 204, 255))') ?'pink': 'linear-gradient(to right, rgb(255, 204, 204), rgb(210, 230, 245), rgb(248, 219, 244), rgb(255, 255, 204), rgb(255, 204, 255))')
      }


  //////////////// scroll down movement
      const [scrollPosition, setScrollPosition] = useState(0);
      const [lastScrollPosition, setLastScrollPosition] = useState(0);

      const handleScroll = () => {
        const currentScrollPosition = window.scrollY;

        // Check if scrolling down or up
        if (currentScrollPosition > lastScrollPosition) {
          // Scrolling down, move cards to the left
          setScrollPosition(scrollPosition + 8); // Adjust the speed of the translation
        } else if (currentScrollPosition < lastScrollPosition) {
          // Scrolling up, move cards to the right
          setScrollPosition(scrollPosition - 8); // Adjust the speed of the translation
        }

        // Update last scroll position
        setLastScrollPosition(currentScrollPosition);
      };

      useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Clean up event listener
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [scrollPosition, lastScrollPosition]);

  return (
    <div className="homepage">
    <div className="before-footer">
 <div className="one-lay" style={{background:background}}>
      {/* <NavBar className='position-for-navbar'/> */}
      {/* {isLoggedIn ? <HeaderUser user={user} /> : <NavBar className='position-for-navbar' />} */}
     <div className="arrows">
          {/* for the arrow up */}
            <div className=" button-wrapper1">
              <button className="button-transition1" onClick={() => {{ if (arrowdown){changeBackground();setArrowDown(false);changePage('page1')}}}}>
              <span className="button-text1"><MdKeyboardArrowUp /></span>
              </button>
            </div>


          {/* {/* for the arrow down */}
          <div className=" button-wrapper1">
              <button className="button-transition1" onClick={() => {if (!arrowdown){changeBackground();setArrowDown(true);changePage('page2')}}}>
              <span className="button-text1"> <MdOutlineKeyboardArrowDown />
              </span>
              </button>
            </div>

       
       </div>
     
   <TransitionGroup className="transition-wrapper">
     <CSSTransition
      key={page}
         timeout={700}
         classNames="page-transition"
       >
        {(page === 'page1' && (!arrowdown)) ?   <div > <Page1 changePage={changePage} /> </div>  :  <div className="two-lay ">     <Page2 changePage={changePage} /> </div>}
        </CSSTransition>
     </TransitionGroup>
      <div className='socialMedia-accounts'>
      <a className="instagram-icon"> <CiInstagram /></a>
       <a className='facebook-icon'><GrFacebookOption /> </a>
        <a className="youtube-icon"><FaYoutube/></a>

     </div>

     </div>
{/* //////////////////////////////////////////////// */}
     {/* ///// div of qualities  */}
     <div className="qualities">
           <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            // viewBox="0 0 614 130"
              viewBox="0 0 614 350"
            height="550"
            width="1500"
            >
            <g id="Frame">
              <g id="box-figma">
              <text className='qualities-title' x="80" y="100" font-family="Arial"  fill="black">Trusted by 13000+   </text>
              <text className='qualities-title bookworms'  x="82" y="200" font-family="Arial"  fill="black"> Bookworms</text>
                <g id="box">
                <path
                    stroke-width="2"
                    stroke="#000000"
                    fill-opacity="0.05"
                    fill="#c598af"
                    d="M587 20H28V306H587V20Z"
                    id="figny9-box"
                  ></path>
                  <path
                    stroke-width="2"
                    stroke="#000000"
                    fill="white"
                    d="M33 15H23V25H33V15Z"
                    id="figny9-adjust-1"
                  ></path>
                  <path
                    stroke-width="2"
                    stroke="#000000"
                    fill="white"
                    d="M33 301H23V311H33V301Z"
                    id="figny9-adjust-3"
                  ></path>
                  <path
                    stroke-width="2"
                    stroke="#000000"
                    fill="white"
                    d="M592 301H582V311H592V301Z"
                    id="figny9-adjust-4"
                  ></path>
                  <path
                    stroke-width="2"
                    stroke="#000000"
                    fill="white"
                    d="M592 15H582V25H592V15Z"
                    id="figny9-adjust-2"
                  ></path>
                </g>
                <g id="cursor">
                  <path
                    stroke-width="2"
                    stroke="white"
                    fill="#000000"
                    d="M453.383 343L448 317L471 331L459.745 333.5L453.383 343Z"
                    id="Vector 273"
                  ></path>
                  <path
                    fill="#000000"
                    d="M587 343H469.932V376H587V343Z"
                    id="Rectangle 786"
                  ></path>
                <g id="Darlley Brito">
                      <text x="479" y="364" fill="white" font-size="12">G</text>
                      <text x="488" y="364" fill="white" font-size="12">o</text>
                      <text x="496" y="364" fill="white" font-size="12">o</text>
                      <text x="504" y="364" fill="white" font-size="12">g</text>
                      <text x="512" y="364" fill="white" font-size="12">l</text>
                      <text x="516" y="364" fill="white" font-size="12">e</text>
                    
          </g>

                </g>
              </g>
            </g>
          </svg>
          {/* /////// user icons */}
            <div className="users-icon">
            <img className='user-icon user1' src='./icons/userIcon1.png'/>
              
            
              <img  className='user-icon user2' src='./icons/userIcon.png'/>
              <img className='user-icon user3' src='./icons/userIcon3.png'/>
            
            </div>
            <a className="link-to-google">see more of our reviews in google</a>

     </div>

     {/* //// div of most purshchased books  */}
     <div></div>


     {/* ///// div of of reviews */}
     <div className="website-reviews">
         {booksAndUsersReview.map (el=>
            <div className="review" style={{ transform: `translateX(-${scrollPosition}px)` }}>
            {/* User Info */}
            <div className="user-info">
              <img src={el.user.imageUser} alt={el.user.userName} className="user-image" />
              <h3 className="user-name">{el.user.userName}</h3>
            </div>
          
            {/* Book Info */}
            <div className="book-info">
              <img src={el.book.bookImage} alt={el.book.title} className="book-image" />
              <h4 className="book-title-review">{el.book.title}</h4>
            </div>
          
            {/* Review Content */}
             <div className="review-content">
             <div className="rating1">
  {[...Array(5)].map((_, index) => {
    const currentRate = el.rating;  // This holds the rating value for the review
    const starIndex = index + 1;  // Star index (1 through 5)

    // Apply a yellow color if the star's index is less than or equal to the current rating
    const isFilled = currentRate >= starIndex;

    return (
      <div className="rating" key={starIndex}>
        <label htmlFor={`star${starIndex}`} title={`Rate ${starIndex} stars`}>
          <svg
            viewBox="0 0 576 512"
           
            width="25px"
            height="25px"
            xmlns="http://www.w3.org/2000/svg"
            className={`star-solid ${isFilled ? 'filled' : ''}`} // Add 'filled' class to filled stars
          >
            <path
              d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
            ></path>
          </svg>
        </label>
      </div>
    );
  })}
</div>



              <p className="review-text">{el.reviewText}</p>
            </div>
          </div>
          
         
            
            
       )} 
     </div>

    {/* //  div of parternships */}
     <div className="scroller">
       <div className=" scroller-inner">
      <ul className="tag-list">
        <li><img className="logo-partnership" src='./logos/appsflyer.png'/></li>
        <li><img  className="logo-partnership" src='./logos/captivateiq.png'/></li>
        <li><img  className="logo-partnership" src='./logos/collective.png'/></li>
        <li><img  className="logo-partnership" src='./logos/opensense.png'/></li>
        <li><img  className="logo-partnership" src='./logos/orum.png'/></li>
        <li><img className="logo-partnership"  src='./logos/pandadoc.png'/></li>
        <li><img className="logo-partnership"  src='./logos/sap.png'/></li>
        <li><img className="logo-partnership" src='./logos/appsflyer.png'/></li>
      <li><img className="logo-partnership" src='./logos/captivateiq.png'/></li>
      <li><img className="logo-partnership" src='./logos/collective.png'/></li>
      <li><img className="logo-partnership" src='./logos/opensense.png'/></li>
      <li><img className="logo-partnership" src='./logos/orum.png'/></li>
      <li><img className="logo-partnership" src='./logos/pandadoc.png'/></li>
      <li><img className="logo-partnership" src='./logos/sap.png'/></li>
      </ul>

     
      </div>  
     </div>
     {/* // div of how to add a book using ai  */}
     <div>

     </div>
    </div>
    <div className="background-footer">
     {/* //// footer  */}
     <Footer/>
     </div>
 </div>
  );
}

export default HomePage;
