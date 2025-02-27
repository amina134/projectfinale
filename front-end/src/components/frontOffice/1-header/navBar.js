import { useState } from "react";
import DealBanner from "./banner";
import "./navBar.css"
import SearchBar from "./searchBar"
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Login from "../6-sign/login";
function NavBar(){
    const [showLoginForm,setShowLoginForm]=useState(false)
    return(
        <>
       
        <nav className="nav">
    
        <DealBanner/>

        <div className="logo-plus-searchbar">
        <div  className="logo">
           <h3>Booksy</h3>
        </div>
       
      
           <ul  className="nav-bar">
        <li  className="nav-item"><a href="#">Home</a></li>
            {/*  nav item books  */}
           
            <li className="nav-item"> 
            <Link to="/filterBooks">
              <a href='#'>Books</a>
              </Link>
            </li>

            {/* end of books */}
            <li  className="nav-item"><a href="#">Events</a></li>
            <li  className="nav-item"><a href="#" >Custom Cover</a></li>
            </ul>
          <div className="options">
            <div>
              <SearchBar/>
            </div>
            <div className="shopping-cart">
                    <CiShoppingCart/>
            </div>
            
            <div className='heart-icon'>
              <CiHeart/>
            </div>
            <div className="user" >
              <CiUser onClick={()=>{setShowLoginForm(true);console.log('logged is',showLoginForm)}}/>
            </div>
           
         </div>
         {/* <Link to='/login'>
               <a>heyyy</a>
            </Link> */}


       {/* ========================
               Login / Sign up
            ===========================  */}
         
{
                showLoginForm && (
                    <div className="loginForm">
                      
                       <Login  key={showLoginForm}  setShowLoginForm={setShowLoginForm} />
                    
                    </div>)
            }


        </div>
       
        
          

       
    
        

          
         
            {/* <li><a href="#">Audio Books</a>
            <ul className="dropdown">
                    <li><a href="">Fiction</a></li>
                    <li><a href="">Non-Fiction</a></li>
                    <li><a href="">Mystery</a></li>
                    <li><a href="">Romance</a></li>
                  </ul>
            </li>
            <li><a href="#">Merch</a></li>
            */}
            
  
       
        </nav>
        
       
        </>
    )
}

export default NavBar