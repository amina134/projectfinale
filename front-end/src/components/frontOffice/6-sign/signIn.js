
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from "react";
/// social media icons//
import { CiInstagram } from "react-icons/ci";
import { GrFacebookOption } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";


import axios from "axios";

import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';

import { fetchAccount } from "../../../api/usersApi";
// import './signIn.css'

    // Email Validation using regex expression
const isEmail = (mail) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(mail);

const SignIn=({isSignUp,setIsSignUp})=>{
const[showPassword,setShowPassword]=useState(false)


//Inputs
const [email, setEmail] = useState();
const [password, setPassword] = useState();
const [rememberMe, setRememberMe] = useState();

// Inputs Errors
const [emailError, setEmailError] = useState(false);
const [passwordError, setPasswordError] = useState(false);

// Overall Form Validity
const [formValid, setFormValid] = useState();
const [success, setSuccess] = useState();
const [verif, setVerif] = useState("")


const navigate=useNavigate();

// Handles Display and Hide Password
const handleClickShowPassword = () => setShowPassword((show) => !show);
const handleMouseDownPassword = (event) => {
    event.preventDefault();
};

///////***   validations ****///////

// Validation for onBlur Email
const handleEmail = () => {
    console.log(isEmail(email));
    if (!isEmail(email)) {
        setEmailError(true);
        return;
    }

    setEmailError(false);
};

// Validation for onBlur Password
const handlePassword = () => {
    if (
        !password ||

        password.length < 5 ||

        password.length > 20
    ) {
        setPasswordError(true);
        return;
    }

    setPasswordError(false);
};
   //// submit login
    const submitLogin=async(values)=>{
        setSuccess('false')
        console.log("provided email:", values.email)
        console.log('provided password',values.password);
        try{
            const res=await axios.post('http://localhost:4000/user/signin',values)
            console.log('response login',res.data.token);
            localStorage.setItem('token',res.data.token);

            const data=await fetchAccount();
            console.log('email from Mongodb',data.email);
            console.log("Password from MongoDB :", data.password);

            const test=bcrypt.compareSync(values.password,data.password)
            console.log('test',test)
            if((values.email===data.email)&&(test)){
                if((data.role==='admin')){
                    navigate('/dashboradAdmin');
                }
                else{
                    console.log('sucess',success)
                    setSuccess('from submitted succesfully')
                    navigate('/userZone');
                    
                }
            
            }
            else if(!test){
                setFormValid('incorrect')
                console.log(formValid)
            }


        }
        catch(err){
            console.log(err)
        }

        
    }

    ///// handle submittion
    const handleSubmit=()=>{
        /////// check for errors

        // if email error is true
        if(emailError || !email){
            setFormValid('email is invalid .please re-enter')
            return;
        }

        // if password error is true 
        if(passwordError || !password){
            setFormValid( "Password is set btw 5 - 20 characters long. Please Re-Enter"
            );
            return;
        }
        setFormValid(null)
        submitLogin({email,password})
    }
   











 return(
        <div className="form-container sign-in-container">
            <div>
                <h1 className='h1-login create-account '>Sign In</h1>
                  <div className='socialMedia-container'>
                            <a className="instagram-icon-login"> <CiInstagram /></a>
                             <a className='facebook-icon-login'><GrFacebookOption /> </a>
                              <a className="youtube-icon-login"><FaYoutube/></a>
                      
                           </div>
                <span className="other-method special">or use your account</span>
                <input  className='login-input' type="email" placeholder="Email" 
                error={emailError}
                value={email}
                onBlur={handleEmail}
                onChange={(event)=>{
                    setEmail(event.target.value);
                }}/>
                <input  className='login-input' type="password" placeholder="Password" 
                 error={passwordError}
                 value={password}
                 onBlur={handlePassword}
                 onChange={(event)=>{
                     setPassword(event.target.value);
                 }}/>
                <a className='a-login ' href="#">Forgot your password?</a>
                <button className="button-click"  onClick={handleSubmit}>Sign In</button>
            </div>

              {/* Show Form Error if any */}
      {formValid &&
     ( <div>
        <h1 >{formValid}</h1>
      </div>)
        }
       
        </div>

 )
}
export default SignIn