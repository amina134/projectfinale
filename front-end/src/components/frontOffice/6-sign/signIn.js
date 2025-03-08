import { useState } from "react"
import '@fortawesome/fontawesome-free/css/all.min.css';
/// social media icons//
import { CiInstagram } from "react-icons/ci";
import { GrFacebookOption } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";
// import './signIn.css'
 const SignIn=({isSignUp,setIsSignUp})=>{

 return(
        <div className="form-container sign-in-container">
            <form>
                <h1 className='h1-login create-account '>Sign In</h1>
                  <div className='socialMedia-container'>
                            <a className="instagram-icon-login"> <CiInstagram /></a>
                             <a className='facebook-icon-login'><GrFacebookOption /> </a>
                              <a className="youtube-icon-login"><FaYoutube/></a>
                      
                           </div>
                <span className="other-method special">or use your account</span>
                <input  className='login-input' type="email" placeholder="Email" />
                <input  className='login-input' type="password" placeholder="Password" />
                <a className='a-login ' href="#">Forgot your password?</a>
                <button className="button-click">Sign In</button>
            </form>
        </div>

 )
}
export default SignIn