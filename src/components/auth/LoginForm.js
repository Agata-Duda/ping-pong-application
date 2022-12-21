import React, { useContext, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { toast } from "react-hot-toast";

import { Box, Typography, TextField, Button, Stack} from "@mui/material";
import { AppContext } from "../../context/appContext";
import { authenticateUser, getUserDetails } from "../util/ApiMethods";
import { routes } from "../util/routes";
import SignupModal from "./SignupModal";
import { styles } from "../util/styles";

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setUser} = useContext(AppContext);
  const [loggedIn, setLoggedIn] = useState(false)
  const [ username, setUsername ] = useState();
  const [ password, setPassword ] = useState();
  const [signupModal, setSignupModalOpen] = useState(false);
  const [jwt, setJwt] = useState("")

  const handleSignupButtonClick = (e) => {
    e.preventDefault()
    setSignupModalOpen(true)
  }

  const onSubmit = () => {
    const userCredentialsPayload = {
      username: username,
      password: password
    }

    authenticateUser(userCredentialsPayload)
      .then((response) => setJwt(response.data.jwt))
      .catch((error) => {
        if(error.response.status === 500) {
          toast.error("Cannot connect to server - Try again later")
        }
        else toast.error("Try again - Invalid Credentials")
      })
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }
  
  localStorage.clear()

  if(jwt.length > 0) {
    localStorage.setItem("jwt", jwt)
    getUserDetails(username)
      .then((response) => {
        setUser(response.data.response)
        setLoggedIn(true)
  })
  }

  return (
    <Stack paddingTop={2} spacing={1} align="center" direction="column" sx={styles.loginBox} >
    {loggedIn && <Redirect to={routes.home} />}  
    <Typography fontWeight={'bold'}> Login </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
              control={control}
              name="username"
              render={({ field }) => 
              <TextField variant="outlined" size="small" sx={styles.textFields}
              {...field}
              placeholder = "Username"
              required
              onChange={handleUsernameChange}
              error={errors.loginRequired}
              helperText={errors.NameUser && `${errors.NameUser.message}`}
            />
          }
          />
          <Controller
              control={control}
              name="Password"
              render={({ field }) => 
              <TextField variant="outlined" size="small" sx={styles.textFields}
              {...field}
              onChange={handlePasswordChange}
              placeholder = "Password"
              required
              error={errors.loginRequired}
              helperText={errors.Username && `${errors.Username.message}`}
            />
          }
          />
          <br/>
            <Box align="center" sx={styles.loginButtons}>
              <Button sx={styles.buttonLogin} type="submit"> Login </Button>
              <Button sx={styles.buttonLogin} onClick={handleSignupButtonClick}> Sign Up </Button>
            </Box>    
        </form>
        <SignupModal open={signupModal} handleOpen={setSignupModalOpen}/>
      </Stack>

      
  );
};

export default LoginForm;
