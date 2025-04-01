import HeaderUser from "./headerUser/headerUser";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAccount } from "../../../api/usersApi";
import { setUserLogin } from "../../../redux/loginUser";

import {setCurrentUser, setToken, clearCurrentUser} from "../../../redux/userSlice";
import HomePage from "../../frontOffice/3-main/homepage";
import { Outlet } from "react-router-dom";
import NavBar from "../../frontOffice/1-header/navBar";
import Footer from "../../frontOffice/1-header/footer";
import {setCart}from"../../../redux/cartSlice"
import { getCartByUserId } from "../../../api/cartApi";
function UserZone(){
    const user = useSelector((state) => state.userElement.currentUser);
    const { currentUser, token } = useSelector((state) => state.userElement);
    // const isLoggedIn = !!user;

    const dispatch = useDispatch();

    const getAuth = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            const data = await fetchAccount();
            // console.log("data user logged in",data)
            dispatch(setCurrentUser(data));
            dispatch(setToken(token));
        }
      
    };

  
      

    useEffect(() => {
        getAuth();

   
    }, [dispatch]);

    // console.log("Current Redux State:", { currentUser, token });
 
    return(
        <div>
            <HeaderUser user={user}/> 
             
           <Outlet/>
           <Footer/>
        </div>
    )
}
export default UserZone;