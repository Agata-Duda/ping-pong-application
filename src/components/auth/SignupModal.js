import React, {  useState } from "react";
import axios from "axios";
import { GET_ALL_USERS } from "../util/ApiMethods";
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

const SignupModal = (props) => {

  const handleClose = () => props.handleOpen(false);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <Modal
      open={props.open}
      onClose={handleClose}
    >
      <Stack sx={style.signupBox}>
        
        <Typography fontWeight={'bold'}> Sign Up </Typography>

        <form onSubmit={(e) => {}}>
          <TextField></TextField>
          <Button sx={style.buttonSignup} type="submit">Submit</Button>
        </form>
      </Stack>

    </Modal>
  )
}
  

export default SignupModal;