import { useEffect, useState } from 'react';
import './searchBar.css';
import { CiSearch } from "react-icons/ci";

function SearchBar(){
    const placeholderText=['books','audio books','costum cover','events']
    const [state,setState]=useState('')
    const [click,setClick]=useState(false)
    const changePlaceholder=()=>{
        let i =0;
        const intervalId=setInterval(()=>{
            if(click){
                clearInterval(intervalId)
                return;
            }
            setState(placeholderText[i]);
            i=(i+1)%placeholderText.length;
        },3000)
    };
    function getPlaceholderValue(){
        setClick(true);
        console.log('the current state is',state);
        
    }
    useEffect(()=>{
        changePlaceholder()
    },[])
    return(
      <div className='searchBar'> 
        <input 
        className="search" type="text" name="search" placeholder={state}/>
        <a className='searchIcon' onClick={getPlaceholderValue}>
           <CiSearch/>
        </a>
      </div>
    )
}
export default SearchBar