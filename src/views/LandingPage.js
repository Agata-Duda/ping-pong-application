import React from "react";
import LoginForm from "../components/auth/LoginForm";
import logo from '../Images/zinkworks-ping-pong-logo.png';
import '../App.css';
import SignupForm from "../components/auth/SignupForm";

const LandingPage = () => (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <LoginForm/>
            <SignupForm/>
          </header>
        </div>
    );

export default LandingPage;
