import React from "react"

import LoginForm from "../components/auth/LoginForm"
import logo from "../Images/zinkworks-ping-pong-logo.png"
import "../App.css"
import SignupForm from "../components/auth/SignupForm"
import { Box } from "@mui/material"

const LoginView = () => (
  <Box>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <LoginForm/>
      <SignupForm/>
    </header>
  </Box>
)

export default LoginView
