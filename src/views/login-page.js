import React from "react"
import LoginForm from "../components/auth/LoginForm"
import logo from "../Images/zinkworks-ping-pong-logo.png"
import "../App.css"
import SignupForm from "../components/auth/SignupForm"

// TODO use one style for all pages. Components with capital letter
const LoginPage = () => (
  //   TODO use mui element
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <LoginForm/>
      <SignupForm/>
    </header>
  </div>
)

export default LoginPage
