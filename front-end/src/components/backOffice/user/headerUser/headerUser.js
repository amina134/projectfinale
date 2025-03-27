import DealBanner from "../../../frontOffice/1-header/banner"


import { useState } from "react";


// 
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';

const HeaderUser=()=>{



    return(
        <div>
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
          {/* <SearchBar/> */}
        </div>
        <div className="shopping-cart">
                <CiShoppingCart/>
        </div>
        
        <div className='heart-icon'>
          <CiHeart/>
        </div>
        {/* <div className="user" >
          <CiUser onClick={()=>{setShowLoginForm(true);console.log('logged is',showLoginForm)}}/>
        </div> */}
       
     </div>

  
     
       


    </div>
    </nav>
            
        </div>
    )
}

export default HeaderUser;