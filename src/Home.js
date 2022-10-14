import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import bookingImg from "./Images/bookingCardImage.png";
import predictionImg from "./Images/predictionCardImage.png";
import scoreBoardImg from "./Images/ScoreBoardCardImage.png";

const Home = () => (
    <div> <Header/> 
    <div className="CardHolder">
        <div className="BookingCard">
            <Link to="./BookingPage">
                <img src={bookingImg} className="BookingCardImg" alt="Time and Date"/>
                <p> <b> Booking Service </b> <br/> Book a 15 minute Ping Pong Slot </p>           
            </Link>
        </div>
        <div className="PredictionCard">
            <Link to="./BookingPage">
                <img src={predictionImg} className="BookingCardImg" alt="Prediction "/>
                <p> <b> Prediction Service </b> <br/> Who will win the match?</p>            
            </Link>
        </div>
        <div className="ScoreBoardCard">
            <Link to="./BookingPage">
                <img src={scoreBoardImg} className="ScoreBoardCardImg" alt="Time and Date"/>
                <p> <b> Score Boards </b> <br/> Score Board of Tournaments </p>            
            </Link>
        </div>
    </div>
    <Footer/>

    </div>
    );
export default Home;