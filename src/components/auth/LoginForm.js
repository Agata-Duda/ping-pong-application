import React, { useEffect, useContext, useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { toast }  from "react-hot-toast";

import { Box, Typography, TextField, Button, Stack} from "@mui/material";
import { AppContext } from "../../context/appContext";
import { GetUserByUsername_URL } from "../util/ApiMethods";
import { routes } from "../util/routes";
import SignupModal from "./SignupModal";
import { styles } from "../util/styles";

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { user, setUser } = useContext(AppContext);
  const [ loginError, setLoginError ] = useState(true);
  const [ username, setUsername ] = useState();
  const [ password, setPassword ] = useState();
  const [signupModal, setSignupModalOpen] = useState(false);

  const GetUser = () => {
    axios
      .get(`${GetUserByUsername_URL}`.concat(username))
      .then((response) => {
        setUser(response.data.response)
      })
      .catch((error) => toast.error("Username does not exist"));
  };

  const handleSignupButtonClick = (e) => {
    e.preventDefault()
    setSignupModalOpen(true)
  }

  const onSubmit = (data) => {
    GetUser()
  };

  const handleUsernameChange = (event, errors) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event, errors) => {
    setPassword(event.target.value)
  }

  let initialRender = useRef(true)

  useEffect (
    () => {

      console.log(errors)

      if (initialRender.current) {
        initialRender.current = false;
      }

      else {
        if (username !== user.userName) {
          setLoginError(true);
        }
        else if(password !== user.password) {
            setLoginError(true);
          }
        else {
          setLoginError(false);
        }
      }

      if (password !== user.Password)
        toast.error("Incorrect password")

    },[user]
  )

  if(!loginError) {
    toast.remove()
    return <Redirect to={routes.home} />
  }


  return (
    <Stack spacing={1} align="center" direction="column" sx={styles.loginBox} >
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
