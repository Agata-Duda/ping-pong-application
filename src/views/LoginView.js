import React from "react"

import LoginForm from "../components/auth/LoginForm"
import SignupModal from "../components/auth/SignupModal"
import logo from "../Images/zinkworks-ping-pong-logo.png"
import "../App.css"
import { Box } from "@mui/material"

const LoginView = () => (
  <Box>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <LoginForm/>
      <SignupModal/>
    </header>
  </Box>
)

export default LoginView
