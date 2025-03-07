import './login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Import FontAwesomeIcon
import { faXmark } from '@fortawesome/free-solid-svg-icons';  // Import the fa-xmark icon

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from "react"
import { CiHeart } from "react-icons/ci";
import Paper from "@mui/material/Paper";
import SignIn from './signIn';
import SignUp from './signUp';
const Login=({setShowLoginForm})=>{
    
    const [signIn,setSignIn]=useState(true)

    return(
      
        // // <AnimatePresence initial={false}>
        // //     <motion.div
        // //         initial={{ opacity: 0, scale: 0 }}  // Start with opacity 0 and scale 0
        // //         animate={{ opacity: 1, scale: 1 }}  // Animate to opacity 1 and scale 1
        // //         exit={{ opacity: 0, scale: 0 }}     // Exit animation to opacity 0 and scale 0
        // //         className="box"  // You can add your custom class for styling
        // //         key="box"        // The key helps with the animation
        // //     >
        //         {/* Your content goes here */}
                <Paper className="total">
                        <button className='icon-close' onClick={() => setShowLoginForm(false)} > <FontAwesomeIcon icon={faXmark} /></button> 
                  
                    {/* start with sign in part */}
                 
                     { signIn ?(
                        <div>
                             <SignIn key={setSignIn} setSignIn={setSignIn} signIn={signIn} />
                        </div>
                     ):(
                        <SignUp key={setSignIn} setSignIn={setSignIn} signIn={signIn} />
                     )
                       
                     

                     }
           
           
                </Paper>
       
   
        
    )
}
export default Login