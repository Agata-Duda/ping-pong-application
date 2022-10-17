import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import React, { useContext } from "react"
import { AppContext } from "../../context/appContext";
import { Link } from "react-router-dom";
import {routes} from '../../components/util/util';

export const NavBar = () => {
    const { username } = useContext(AppContext);

    return (
        <nav className="navbar">
           <div className="user">
                <Link to="/user-details-page" id="IconLink">
                    <AssignmentIndOutlinedIcon alt="UserAccount-Icon" id="UserAccount-Icon"/>
                </Link>
               <p className="username"> {username} </p>
           </div>
            <div className="tabs">
                <Link to = {routes.home} className="homeLink"> Home </Link>
                <Link to ={routes.bookingPage} className="bookingLink"> Booking </Link>
                <Link to ={routes.predictionPage} className="predictionLink"> Predictions </Link>
                <Link to ={routes.scoreBoardPage} className="scoreBoardLink"> Score Board </Link>
            </div>
        </nav>
    )
}

