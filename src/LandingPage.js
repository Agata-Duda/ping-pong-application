import React from "react";
import LoginForm from "./LoginForm";
import logo from './zinkworks-ping-pong-logo.png';
import './App.css';
import SignupForm from "./SignupForm";

const LandingPage = () => {
    return(
        <div className="App"> 
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <LoginForm/>
            <SignupForm/>
          </header>
        </div>
    );

}

export default LandingPage;
