import React from "react";
import { Link } from "react-router-dom";
import { PageTemplate } from "../templates/PageTemplate";
import bookingImg from "../Images/bookingCardImage.png";
import predictionImg from "../Images/predictionCardImage.png";
import scoreBoardImg from "../Images/ScoreBoardCardImage.png";

const Home = () => (
    <PageTemplate>
        <div className="CardHolder">
            <div className="BookingCard">
                <Link to="./BookingPage">
                    <img src={bookingImg} className="BookingCardImg" alt="Time and Date"/>
                    <p> <b> Booking Service </b> <br/> Book a 15 minute Ping Pong Slot </p>           
                </Link>
            </div>
            <div className="PredictionCard">
                <Link to="./PredictionPage">
                    <img src={predictionImg} className="BookingCardImg" alt="Prediction "/>
                    <p> <b> Prediction Service </b> <br/> Who will win the match?</p>            
                </Link>
            </div>
            <div className="ScoreBoardCard">
                <Link to="./ScoreBoard">
                    <img src={scoreBoardImg} className="ScoreBoardCardImg" alt="Time and Date"/>
                    <p> <b> Score Boards </b> <br/> Score Board of Tournaments </p>            
                </Link>
            </div>
        </div>
    </PageTemplate>
    );
export default Home;