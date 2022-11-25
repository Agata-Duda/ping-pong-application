import React, { useEffect, useContext, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { toast }  from "react-hot-toast";

import { Box, Typography, TextField, Button, Stack} from "@mui/material";
import { AppContext } from "../../context/appContext";
import { GetUserByUsername_URL } from "../util/ApiMethods";
import { routes } from "../util/routes";

const styles = {
  textFields: {
    backgroundColor: 'white',
    margin: '5px'
  },
  loginBox:{
    align: 'center',
    backgroundColor: '#FF0041',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '20px',
     width: '8cm',
     height: '5cm'
  },
  buttonLogin:{
    width: '5rem',
    backgroundColor: 'white',
    color: 'black',
    '&:hover': {
      backgroundColor: 'white',
      borderColor: '#0062cc',
      boxShadow: '1px 1px 3px 1px #00193A;',
    },
  }
}

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [ user, setUser ] = useContext(AppContext);
  const [ loginError, setLoginError ] = useState(true);
  const [ NameUser, setUsername ] = useState();
  const [ Pass, setPass ] = useState();

  const GetUser = (user) => {
    axios
      .get(`${GetUserByUsername_URL}`.concat(user))
      .then((response) => {
        setUser(response.data.response[0]);
      })
      .catch((error) => toast.error("error connecting to user service", error));
  };

  const onSubmit = (data) => {
    GetUser(data.Username);
    if(!loginError){
      return <Redirect to={routes.home} />
    }
    else{
      <Redirect to={routes.home}/>
    }
  };


  useEffect (
    () => {
      if (watch().NameUser !== user.userName) {
        setLoginError(true);
      }
      else if(watch().Pass !== user.password) {
          setLoginError(true);
        }
      else {
        setLoginError(false);
      }
    },[watch()]
  )

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
              onChange={setUsername}
              error={!!errors.loginRequired}
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
              onChange={setPass}
              placeholder = "Password"
              required
              error={!!errors.loginRequired}
              helperText={errors.Username && `${errors.Username.message}`}
            />
          }
          />
          <br/>
          <Box align="center">
            <Button sx={styles.buttonLogin} type="submit"> Login </Button>
          </Box>
          {/* <input
            id="loginUsername"
            placeholder="Username"
            {...register("Username", { required: true })}
          />
          {errors.loginRequired && <span> Username is required</span>}
          <br />
          <input placeholder="Password" {...register("Password", { required: true })}
          />
          {errors.loginRequired && <span> Password is required</span>}
          <br />
          <div id="submitDiv">
            <input id="submitButtonLogin" type="submit" value="Log In" />
          </div> */}
        </form>
      {/* {!loginError && <Redirect path={routes.home} />} */}
      </Stack>
  );
};

export default LoginForm;
