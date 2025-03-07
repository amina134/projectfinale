import { useState } from "react"

import './signIn.css'
 const SignIn=({setSignIn,signIn})=>{

 return(
   <div className="container-login">
     <div className={signIn ?' signIn-container' :'sign-in-new'}>

                         <div className="header-login">
                   
                       
                            <div className="text-login">Sign In</div>
                      

                        </div>
                                    
                        <div className="inputs">
                            {/* // for the name */}
                        {/* <div className="input">
                            <img src='' alt=''/>
                            <input type='text'/>
                        </div> */}
                            {/* // for the email */}
                            <div className="input">
                            <img src='' alt=''/>
                            <input  className='input-login' type='email' placeholder='    Email'/>
                            </div>
                            {/* // for the password */}
                        <div className="input">
                            <img src='' alt=''/>
                            <input   className='input-login' type='password' placeholder='    Password'/>
                        </div>
                        </div>
                       <div className="forgot-password"><a>Lost password? </a><span>click here</span></div>

                        <div className="submit-container">
                            <button className='signIn-button'> <span className='signIn-button-content' >Sign in</span></button>
                        </div>
    </div>
    <div className='part1-signIn-decorative-part-signIn'>
                    <div className="header-decorative-part1">
                        <h3 className='title-decorative-part1'>Hello,Friend</h3>
                        </div>
                        <p className='para-decorative-part1'>Enter your personal details and start Your journey with us</p>
                        <button className='signUp-button-part1' onClick={()=>{setSignIn(false)}}><span className='signUp-button-part1-content'>Sign up</span></button>
                        {/* <button classname='icon-close' onClick={() => setShowLoginForm(false)}/> */}
    </div>
   </div>
 )
}
export default SignIn