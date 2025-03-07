import { useState } from "react"

import './signUp.css'
 const SignUp=({setSignIn,signIn})=>{
  const [signUp,setSignUp]=useState(true)
 return(
   <div className="container-signUp">
     <div className={signIn ?' signUp-container' :'sign-up-new'}>

                         <div className="header-signUp">
                   
                       
                            <div className="text-signUp">Sign Up</div>
                      

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
                            <input  className='input-signUp' type='email' placeholder='    Email'/>
                            </div>
                            {/* // for the password */}
                        <div className="input">
                            <img src='' alt=''/>
                            <input   className='input-signUp' type='password' placeholder='    Password'/>
                        </div>
                        </div>
                      

                        <div className="submit-container-signUp">
                            <button className='signUp-button'> <span className='signUp-button-content' >Sign up</span></button>
                        </div>
        </div>
         <div className='part1-signIn-decorative-part-signUp'>
                    <div className="header-decorative-part1-signUp">
                        <h3 className='title-decorative-part1-signUp'>Hello,Friend</h3>
                        </div>
                        <p className='para-decorative-part1-signUp'>Enter your personal details and start Your journey with us</p>
                        <button className='signIn-button-part1-signUp' onClick={()=>{setSignIn(true)}}><span className='signIn-button-part1-content'>Sign in</span></button>
                        {/* <button classname='icon-close' onClick={() => setShowLoginForm(false)}/> */}
        </div>
   </div>
 )
}
export default SignUp