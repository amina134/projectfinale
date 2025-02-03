import { useEffect, useState } from "react"
import './banner.css'
import 'animate.css';
const DealBanner=()=>{
    const deals=[
        "Explore books on Palestinian liberation and enjoy 15% off select titles!",
        "Free shipping on orders +$35",
        "Buy 2 books, get 1 free!"] 
    const [currentDeal,setCurrentDeal]=useState('')
    const [click,setClick]=useState(false)
    const [animationClass, setAnimationClass] = useState("animate__bounceInLeft");
    
   const changePlaceholder=()=>{
    let i =0;
        const intervalId=setInterval(()=>{

            if(click){
                clearInterval(intervalId)
                return;
            }
            setCurrentDeal(deals[i]);
            setAnimationClass(""); // Reset the animation class
            setTimeout(() => {
              setAnimationClass("animate__bounceInLeft"); // Reapply the animation after a brief delay
            }, 50);

            i=(i+1)%deals.length;
        },4000)
   }
   
   function getPlaceholderValue(){
    setClick(true);
    console.log('the current state of the banner',currentDeal);
    
}
   useEffect(()=>{
     changePlaceholder()
   },[])
    
   
    return(
          <div className="banner">
         <div className="bannerContainer ">
           <a href="" className={`bannerText animate__animated ${animationClass}`}>
          {currentDeal}
        </a>      </div>   
          </div>
    ) 
    }

export default DealBanner
