
import React, { useContext } from "react"
import { AppContext } from "./appContext";

import userIcon from "./user-icon.png";
import { Link } from "react-router-dom";
const NavBar = () => {
    const { username } = useContext(AppContext); 

    return (
        <nav className="navbar">
           <div className="user">
                <Link to="/UserAccount"> 
                    <img src={userIcon} className="userIcon" alt="UserIcon" /> 
                </Link> 
               <p className="username"> {username} </p> 
             
           </div>

            <div className="tabs">
                <Link to ="/BookingPage"> Booking </Link>
                <Link to ="/PredictionPage"> Predictions </Link>
                <Link to ="/ScoreBoard"> Score Board </Link>
            </div>
          
        </nav>    
        
        
    )
}
export default NavBar