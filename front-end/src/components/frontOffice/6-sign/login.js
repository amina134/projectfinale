import './login.css'
const Login=({setShowLoginForm})=>{

    return(
        <div className="container-login">
            <div className="header-login">
                <div className="text-login">Sign Up</div>
                <div className='underline'></div>
            </div>
            <div className="inputs">
               {/* // for the name */}
               <div className="input">
                   <img src='' alt=''/>
                   <imput type='text'/>
               </div>
               {/* // for the email */}
               <div className="input">
                   <img src='' alt=''/>
                   <imput type='email'/>
               </div>
               {/* // for the name */}
               <div className="input">
                   <img src='' alt=''/>
                   <imput type='password'/>
               </div>
            </div>
            <div className="forgot-password">Lost password? <span>click here</span></div>
            <div className="submit-container">
                <div className="submit">Sign up </div>
                <div className="submit">Login</div>

            </div>
            <button onClick={() => setShowLoginForm(false)}>Close</button>
        </div>
    )
}
export default Login