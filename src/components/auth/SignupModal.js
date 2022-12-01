import React, {  useEffect, useRef, useState } from "react";
import axios from "axios";
import { GET_ALL_USERS } from "../util/ApiMethods";
import { styles } from "../util/styles";
import { toast } from "react-hot-toast";
import { Modal, Typography, TextField, Button } from "@mui/material";
import { Stack } from "@mui/system";
import { useForm, Controller } from "react-hook-form";


const style = {
  signupBox:{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    align: 'center',
    backgroundColor: '#FF0041',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '20px',
     width: '8cm',
     height: '5cm'
  },

  buttonSignup:{
    width: '5rem',
    backgroundColor: 'white',
    color: 'black',
    '&:hover': {
    backgroundColor: 'white',
    borderColor: '#0062cc',
    boxShadow: '1px 1px 3px 1px #00193A;',
    },
    m: 1
  }
}

const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [userName, setUserName] = useState('');
const [jobTitle, setJobTitle] = useState('');

const SignupModal = (props) => {

  const handleClose = () => props.handleOpen(false);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleUsernameChange = (event, errors) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event, errors) => {
    setPassword(event.target.value)
  }

  const handleFirstNameChange = (event, errors) => {
    setFirstName(event.target.value)
  }

  const handleLastNameChange = (event, errors) => {
    setLastName(event.target.value)
  }

  const handleEmailChange = (event, errors) => {
    setEmail(event.target.value)
  }

  const handleJobTitleChange = (event, errors) => {
    setJobTitle(event.target.value)
  }

  let initialRender = useRef(true)

  useEffect(
    () => {
      
      console.log(errors)

      if (initialRender.current){
        initialRender.current = false;
      }

      else {
        if(userName == user.userName){
          setSignupError(false)
        }
      }
    }
  )

  return (
    <Modal
      open={props.open}
      onClose={handleClose}
    >
      <Stack sx={style.signupBox}>
        <Typography fontWeight={'bold'}> Sign Up </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller 
              control={control}
              name="username"
              render={({ field }) =>
              <TextField variant="outlined" size="small" sx={styles.textFields}
              {...field}
              placeholder = "Username"
              required
              value={user.userName}
              onChange={e => setUserName(e.target.value)}/>
            }
          <Button sx={style.buttonSignup} type="submit">Submit</Button>
        </form>
      </Stack>

    </Modal>
  )
}
  

export default SignupModal;