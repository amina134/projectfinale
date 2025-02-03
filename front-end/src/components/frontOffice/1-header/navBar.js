import DealBanner from "./banner";
import "./navBar.css"
import SearchBar from "./searchBar"
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
function NavBar(){
    return(
        <>
       
        <nav className="nav">
    
        <DealBanner/>
        <div className="logo-plus-searchbar">
        <div  className="logo">
            <img className="logo-image" src="/booksyLogo.png"/>
        </div>
       
        <div className="searchBar">
        <SearchBar/>
       

        </div>
        <div className="heart">
        < CiHeart className="likes"/>
        </div>
       <div class="shopping">
       <IoCartOutline className="shopping-icon" />
       </div>
       <div class="account">
         <IoPersonSharp className="account-icon"/>
       </div>
        
        </div>
       
        
          

       
        <ul  className="nav-bar">
        

          
          <li><a href="#">Home</a></li>
            {/*  nav item books  */}
           
            <li className="nav-item"> 
            <Link to="/filterBooks">
              <a href='#'>Books</a>
              </Link>
            </li>
        

                  {/* <ul className="dropdown">
                    <li><a href="">Fiction</a></li>
                    <li><a href="">Non-Fiction</a></li>
                    <li><a href="">Mystery</a></li>
                    <li><a href="">Romance</a></li>
                  </ul> */}
            
          

            {/* end of books */}
            <li><a href="#">Audio Books</a>
            <ul className="dropdown">
                    <li><a href="">Fiction</a></li>
                    <li><a href="">Non-Fiction</a></li>
                    <li><a href="">Mystery</a></li>
                    <li><a href="">Romance</a></li>
                  </ul>
            </li>
            <li><a href="#">Merch</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#" >Custom Cover</a></li>
            
        </ul>
        
       
        </nav>
         <div>

        
         </div>
       
        </>
    )
}

export default NavBar