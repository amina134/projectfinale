
import './footer.css'

/// social media icons//
import { CiInstagram } from "react-icons/ci";
import { GrFacebookOption } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";

const   Footer=()=>{
    return(
        <div className="footer-layout">
           <div className='part1-footer'>
             <div className='popular-categories'>
                <ul className='ul-footer' >
                    <li><a>Romance</a></li>
                    <li><a>Thriller</a></li>
                    <li><a>Self-help</a></li>
                    <li><a>Manga</a></li>
                    <li><a>Science-fiction</a></li>
                    <li><a>Poetry</a></li>
                    <li><a>Fantasy</a></li>
                </ul>
             </div>
             <div className='about-us'>
                <ul  className='ul-footer'>
                    <li><a>Fantasy</a></li>
                    <li><a>Our purpose</a></li>
                    <li><a>Our team</a></li>
                    <li><a>Social Responsibility</a></li>
                    <li><a>FAQ</a></li>
                </ul>
             </div>
             <div className='my-account'>
                <ul  className='ul-footer'>
                    <li><a>Settings</a></li>
                    <li><a>Shopping Cart</a></li>
                    <li><a>Wish list</a></li>
                 
                </ul>
             </div>
             <div className='part3-footer'>
            <div className='title-sub'>
             <h2>Be the First to Know</h2>
             <p className='descrip-sub'>The best of Booksy delivered straight to your inbox. </p>
             </div>
             <h3 className='sign-sub'>Sign up for Book Outlet emails</h3>
              <p>Get $5 off your next purchase of $25+, plus know about exclusive offers, new arrivals, and more.</p>
              <div className="input-group">
                <input type="email" className="input" id="Email" name="Email" placeholder="booksy@lover.io" autocomplete="off"/>
                <input className="button--submit" value="Subscribe" type="submit"/>
              </div>
            
             </div>
            
           </div>
          
              
           
           <div className='logo-footer' >
           <div><h3 className='booksy-footer'>Booksy</h3></div>
             <div className='socialMedia-accounts-footer'>
                    <a className="instagram-icon-footer"> <CiInstagram /></a>
                    <a className='facebook-icon-footer'><GrFacebookOption /> </a>
                    <a className="youtube-icon-footer"><FaYoutube/></a>
             
             </div>
           </div>

        </div>
    )
}
export default Footer