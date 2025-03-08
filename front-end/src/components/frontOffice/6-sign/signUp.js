import { useState } from "react"

/// social media icons//
import { CiInstagram } from "react-icons/ci";
import { GrFacebookOption } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";
// import './signUp.css'
 const SignUp=({isSignUp,setIsSignUp})=>{
  const [signUp,setSignUp]=useState(true)
 return(
    <div className="form-container sign-up-container">
      <form>
        <h1 className='h1-create-account'>Create Account</h1>
        <div className='socialMedia-container'>
             <a className="instagram-icon-login"> <CiInstagram /></a>
              <a className='facebook-icon-login'><GrFacebookOption /> </a>
               <a className="youtube-icon-login"><FaYoutube/></a>
       
            </div>
        <span className="other-method">or use your email for registration</span>
        <input className='login-input' type="text" placeholder="Name" />
        <input className='login-input' type="email" placeholder="Email" />
        <input  className='login-input' type="password" placeholder="Password" />
        <button className="button-click" >Sign Up</button>
      </form>
    </div>
 )
}
export default SignUp