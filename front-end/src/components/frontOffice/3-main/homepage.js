import { useState, useEffect,startTransition  } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "../1-header/navBar";
import Page1 from "./page1";
import Page2 from "./page2";
import "./homepage.css";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

/// social media icons//
import { CiInstagram } from "react-icons/ci";
import { GrFacebookOption } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";
import Login from "../6-sign/login";



const  HomePage=()=> {
  const [page, setPage] = useState('page1');
  const [arrowdown,setArrowDown]=useState(false);
  const[background,setBackground]=useState('linear-gradient(to right, rgb(255, 204, 204), rgb(210, 230, 245), rgb(248, 219, 244), rgb(255, 255, 204), rgb(255, 204, 255))')
  const changePage = (newPage) => {
    startTransition(() => {
      setPage(newPage);
    });
  };
  const changeBackground=()=>{
    setBackground(background===('linear-gradient(to right, rgb(255, 204, 204), rgb(210, 230, 245), rgb(248, 219, 244), rgb(255, 255, 204), rgb(255, 204, 255))') ?'pink': 'linear-gradient(to right, rgb(255, 204, 204), rgb(210, 230, 245), rgb(248, 219, 244), rgb(255, 255, 204), rgb(255, 204, 255))')
  }
  return (
 <div className="one-lay" style={{background:background}}>
      <NavBar/>
     <div className="arrows">
          {/* for the arrow up */}
            <div className=" button-wrapper1">
              <button className="button-transition1" onClick={() => {{ if (arrowdown){changeBackground();setArrowDown(false);changePage('page1')}}}}>
              <span className="button-text1"><MdKeyboardArrowUp /></span>
              </button>
            </div>


          {/* {/* for the arrow down */}
          <div className=" button-wrapper1">
              <button className="button-transition1" onClick={() => {if (!arrowdown){changeBackground();setArrowDown(true);changePage('page2')}}}>
              <span className="button-text1"> <MdOutlineKeyboardArrowDown />
              </span>
              </button>
            </div>

       
          </div>
     
   <TransitionGroup className="transition-wrapper">
     <CSSTransition
      key={page}
         timeout={700}
         classNames="page-transition"
       >
        {(page === 'page1' && (!arrowdown)) ?   <div > <Page1 changePage={changePage} /> </div>  :  <div className="two-lay ">     <Page2 changePage={changePage} /> </div>}
        </CSSTransition>
     </TransitionGroup>
      <div className='socialMedia-accounts'>
      <a className="instagram-icon"> <CiInstagram /></a>
       <a className='facebook-icon'><GrFacebookOption /> </a>
        <a className="youtube-icon"><FaYoutube/></a>

     </div>
     
 </div>
  );
}

export default HomePage;
