import { useState } from "react"

/// social media icons//
import { CiInstagram } from "react-icons/ci";
import { GrFacebookOption } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";


/// import the user post method 
import { postUser } from "../../../api/usersApi";

 const SignUp=({isSignUp,setIsSignUp})=>{
  // for choosing between showing the password and not 
  const [showPassword,setShowPassword]=useState();
 
  //email validation using regex expression
  const isEmail = (mail) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(mail);



  // INPUTS
  const [userName,setUserName]=useState();
  const[email,setEmail]=useState();
  const [password, setPassword] = useState();

  // Inputs errors 
  const [userNameError,setUserNameError]=useState();
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();

  /////// form validity
  const [formValid, setFormValid] = useState();
  const [success, setSuccess] = useState();

  // handles display password and hide 
  const handleClickShowPassword=()=>setShowPassword((show)=>!show)
   const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

  /////////************* validation */
  // Validate for onBlur Username
  const handleUserName = () => {
    if (!userName) {
        setUserNameError(true);
        return;
    }
    setUserNameError(false);
};


  //// validate the email 
  const handleEmail=()=>{
    console.log(isEmail(email));
    if(!isEmail(email)){
      setEmailError(true)
      return;
    }
    setEmailError(false);
    
  }

  ///// validate the password
  const handlePassword=()=>{
    if(!password || password.length<8 || password.length>20)
    { setPasswordError(true);
      return;}
    setPasswordError(false)
  }
  //////////////********/*********** */ */
  ///// add the user infos in the database
  const handleAdd=async(value)=>{
    console.log('add values',value);
    await postUser(value);
  }



  //handle submition 
  const handleSubmit=()=>{
    setSuccess(null)
      if (userNameError || !userName) {
        setFormValid(
            "Username is set btw 8 - 20 charaters long. Please Re-Enter"
        );
        return;
    }
    //If Email error is true
    if (emailError || !email) {
        setFormValid("Email is Invalid. Please Re-Enter");
        return;
    }
    // If Password error is true
    if (passwordError || !password) {
        setFormValid("Password is set btw 8 - 20 characters long. Please Re-Enter");
        return;
    }
   
    //Proceed to use the information passed
    console.log("FirstName :" + userName);
    console.log("Email :" + email);
    console.log("Password :" + password);

    //Show Successfull Submission
    setFormValid("Form Submitted Successfully");
    // submitLogin({ firstName, email, password });
     handleAdd({userName, email, password });
  }


 return(
    <div className="form-container sign-up-container">
      <div>
        <h1 className='h1-create-account'>Create Account</h1>
        <div className='socialMedia-container'>
             <a className="instagram-icon-login"> <CiInstagram /></a>
              <a className='facebook-icon-login'><GrFacebookOption /> </a>
               <a className="youtube-icon-login"><FaYoutube/></a>
       
            </div>
        <span className="other-method">or use your email for registration</span>
        <input className='login-input' type="text" placeholder="Name" 
        error={userNameError}
        value={userName} 
        onChange={(event)=>{
          setUserName(event.target.value)
        }}
        onBlur={handleUserName}/>
        <input className='login-input' type="email" placeholder="Email" 
         error={emailError}
         value={email} 
         onChange={(event)=>{
           setEmail(event.target.value)
         }}
         onBlur={handleEmail}/>
        <input  className='login-input' type="password" placeholder="Password" 
         error={passwordError}
         value={password} 
         onChange={(event)=>{
           setPassword(event.target.value)
         }}
         onBlur={handlePassword}/>
        <button className="button-click"  onClick={handleSubmit}>Sign Up</button>
      </div>

        {/* Show Form Error if any */}
      {/* {formValid &&
     ( <div>
        <h1 >{formValid}</h1>
      </div>)
        }
        {success &&(
          <div>
               <h1 >{success}</h1>
        
            </div>
        )

        } */}
    </div>
 )
}
export default SignUp