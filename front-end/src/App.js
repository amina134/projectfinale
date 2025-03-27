import logo from './logo.svg';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; /// ensure routing 
import NavBar from './components/frontOffice/1-header/navBar';
import Main from './components/frontOffice/2-hero/mainherocomponent';
import HeroSection from './components/frontOffice/2-hero/mainherocomponent';
import BookModel from './components/frontOffice/3d components/three';
import HomePage from './components/frontOffice/3-main/homepage';
import { fetchAllBooks } from './api/booksApi';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBook } from './redux/bookSlice';
import DisplayBookInformation from './components/frontOffice/2-hero/bookInformation';
import FilterBooks from './components/frontOffice/3-main/booksFilterPage';
import Login from './components/frontOffice/6-sign/login';
import AdminDashboard from './components/backOffice/adminDashboard/adminDashboard';
import UserZone from './components/backOffice/user/userZone';
import { fetchAllReviews } from './api/reviewApi';
import { fetchAllUsers } from './api/usersApi';
import { setReview } from './redux/reviewSlice';
import { setUser } from './redux/userSlice';

function App() {
  const books=useSelector(state=>state.bookElement)
  const dispatch =useDispatch();
  //part getting book data from database 
  const getAllBooks=async()=>{
    const data=await fetchAllBooks();
    // console.log('data from app.js',data);
    dispatch(setBook(data.books))
  }
    //part getting review data from database 
   const getAllReviews=async()=>{
    const data=await fetchAllReviews();
    // console.log('reviews from app.js',data)
    dispatch(setReview(data.reviews))
   }
     //part getting review data from database 
     const getAllUsers=async()=>{
      const data=await fetchAllUsers();
      // console.log('users from app.js',data)
      dispatch(setUser(data.users))
     }
  


  // render data from database
  useEffect(()=>{
    getAllBooks();
    getAllReviews();
    getAllUsers();
  },[]);
  // console.log('books from app.js',books);

  /////////////

  return (
<>
 

   <Routes>

    <Route path='/' element={<>  <HomePage/></>}/>
    <Route path='/filterBooks' element={<FilterBooks/>}/>
    <Route path='/bookInformation/:id' element={<DisplayBookInformation/>}/>
    <Route path='/login' element={<FilterBooks/>}/>

    
    {/* //// route to the admindashbord */}
    <Route path='/dashboardAdmin' element={<AdminDashboard/>}>

    </Route>
      {/* //// route to the userZone*/}
      <Route path="/userZone" element={<UserZone/>}>

</Route>
   </Routes>
  
   </>
  );
}

export default App;
