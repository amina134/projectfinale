import DealBanner from "../../../frontOffice/1-header/banner"

import './headerUser.css'
import { useState } from "react";
import { useNavigate } from "react-router";

// 
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { setUser } from "../../../../redux/userSlice";

const HeaderUser=({user})=>{
    
    console.log("user login inouuuuuu",user)
 
    return(
        <div className="headerUser">
            <nav className="nav">
    
       <DealBanner/>

    <div className="logo-plus-searchbar">
    <div  className="logo">
       <h3>Booksy</h3>
     
    </div>
   
  
       <ul  className="nav-bar">
    <li  className="nav-item"> <Link to="/userZone">Home</Link></li>
        {/*  nav item books  */}
       
        <li className="nav-item"> 
        <Link to="/userZone/books">Books</Link>
        </li>

        {/* end of books */}
        <li  className="nav-item"><a href="#">Events</a></li>
        <li  className="nav-item"><a href="#" >Custom Cover</a></li>
        </ul>
      <div className="options">
        <div>
          {/* <SearchBar/> */}
        </div>
        <div className="shopping-cart">
                <CiShoppingCart/>
        </div>
        
        <div className='heart-icon'>
          <CiHeart/>
        </div>
        <div >
        {user ? (
            <div className="login-settings" >
            <div className="user-logged-img">
                <img className="ICON-USER-LOGIN" src={user.imageUser} alt="user" />
            </div>
             {/* ///// the dropdown/// */}
             <div class="dropdown-content-login">
             <a>  <FaRegUser/>
             <span className="span-content-login"></span>
                Your profile
           
             </a>
             {/* ////// log out  */}
             <a id="middle" href="#">
             <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.598 9h-1.055c1.482-4.638 5.83-8 10.957-8 6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5c-5.127 0-9.475-3.362-10.957-8h1.055c1.443 4.076 5.334 7 9.902 7 5.795 0 10.5-4.705 10.5-10.5s-4.705-10.5-10.5-10.5c-4.568 0-8.459 2.923-9.902 7zm12.228 3l-4.604-3.747.666-.753 6.112 5-6.101 5-.679-.737 4.608-3.763h-14.828v-1h14.826z"
            ></path>
          </svg>
          <span className="span-content-login"> Log out</span>
         
             </a>

            {/* ////// sign up  */}
             <a id="top" href="#"><svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.2"
            stroke-linecap="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 4v6.406l-3.753 3.741-6.463-6.462 3.7-3.685h6.516zm2-2h-12.388l1.497 1.5-4.171 4.167 9.291 9.291 4.161-4.193 1.61 1.623v-12.388zm-5 4c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm0-1c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm6.708.292l-.708.708v3.097l2-2.065-1.292-1.74zm-12.675 9.294l-1.414 1.414h-2.619v2h-2v2h-2v-2.17l5.636-5.626-1.417-1.407-6.219 6.203v5h6v-2h2v-2h2l1.729-1.729-1.696-1.685z"
            ></path>
          </svg>
          <span className="span-content-login">Sign up</span></a>

          



             <a id="bottom" href="#">
             {/* ////// log out  */}
           
             <IoSettingsOutline />
             <span className="span-content-login"> Settings</span>
           
             </a>
          </div>
          </div>
           
            ) : (
           <div></div>
            
               
            )}

      </div>
      
       
     </div>

  
     
       


    </div>
    </nav>
    <div>
      
        {/* {user.userName} */}
    </div>
            
        </div>
    )
}

export default HeaderUser;