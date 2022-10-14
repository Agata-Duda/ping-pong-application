import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import React, { useContext } from "react"
import { AppContext } from "./appContext";
import { Link } from "react-router-dom";

const NavBar = () => {
    const { username } = useContext(AppContext); 

    return (
        <nav className="navbar">
           <div className="user">
                <Link to="/UserAccount" id="IconLink"> 
                    <AssignmentIndOutlinedIcon alt="UserAccount-Icon" id="UserAccount-Icon"/>
                </Link> 
               <p className="username"> {username} </p> 
           </div>
            <div className="tabs">
                <Link to ="/Home" className="homeLink"> Home </Link>
                <Link to ="/BookingPage" className="bookingLink"> Booking </Link>
                <Link to ="/PredictionPage" className="predictionLink"> Predictions </Link>
                <Link to ="/ScoreBoard" className="scoreBoardLink"> Score Board </Link>
            </div>
        </nav>      
    )
}
export default NavBar