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

function App() {
  const books=useSelector(state=>state.bookElement)
  const dispatch =useDispatch();
  //partie getting data from database
  const getAllBooks=async()=>{
    const data=await fetchAllBooks();
    console.log('data from app.js',data);
    dispatch(setBook(data.books))
  }
  // render data from database
  useEffect(()=>{
    getAllBooks();
  },[]);
  console.log('books from app.js',books);

  /////////////

  return (
<>
 

   <Routes>

    <Route path='/' element={<> <NavBar/> <HomePage/></>}/>
    <Route path='/filterBooks' element={<FilterBooks/>}/>
    <Route path='/bookInformation/:id' element={<DisplayBookInformation/>}/>

   
   </Routes>
  
   </>
  );
}

export default App;
