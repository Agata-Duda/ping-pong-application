import React, { useState, useEffect } from "react";
import { Modal, Typography, TextField, Button } from "@mui/material";
import {Box, Stack} from "@mui/system";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";

import { GetAllJobTitles_URL, User_URL } from "../util/ApiMethods";
import {AuthStyles} from "./AuthStyles";

const style = {
  signupBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    align: "center",
    backgroundColor: "#FF0041",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
    width: "5.5cm",
    paddingTop: "1rem"
  },

  buttonSignup: {
    width: "5rem",
    backgroundColor: "white",
    color: "black",
    "&:hover": {
      backgroundColor: "white",
      borderColor: "#0062cc",
      boxShadow: "1px 1px 3px 1px #00193A;",
    },
    m: 1,
  },

};

const SignupModal = (props) => {
  const handleClose = () => props.handleOpen(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [selectedJobTitle, setSelectedJobTitle] = useState(null);

  useEffect(() => {
    const fetchJobTitles = async () => {
      await axios.get(`${GetAllJobTitles_URL}`).then((response) => {
        const mappedJobTitles = response.data.response?.map((d) => {
          return {
            label: d.title,
            value: d.job_id,
          };
        });
        setJobTitle(mappedJobTitles);
      });
    };
    fetchJobTitles();
  }, [props.open]);

  const onSubmit = () => {
    const payload = {
      userName: userName,
      password: password,
      firstName: firstName,
      lastName: lastName,
      email: email,
      jobTitle: selectedJobTitle.value,
      totalGames: 0,
      wins: 0,
      accountType: "ROLE_REGULAR",
    };
    axios
      .post(`${User_URL}`, payload)
      .then(() => {
        toast.success("Sign-up Sucessful")
        handleClose()
      })
      .catch((error) => {
        if (error.request) toast.error(error.response.data.response);
        else if (error.response) toast.success("Sign-up Successful");
      });
  };

  return (
    <Modal open={props.open} onClose={handleClose}>
      <Stack
        display="flex"
        spacing={1}
        alignItems="center"
        direction="column"
        paddingLeft={5}
        paddingRight={5}
        sx={style.signupBox}
      >

        <Typography sx={AuthStyles.title} variant={"h6"}> Sign Up </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack paddingRight={1} paddingLeft={1} spacing={1} >
          <Controller
            control={control}
            name="user_name"
            render={({ field }) => (
              <TextField
                variant="outlined"
                size="small"
                sx={AuthStyles.textFields}
                {...field}
                placeholder="Username"
                required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            )}
          />
          <Controller
            control={control}
            name="first_name"
            render={({ field }) => (
              <TextField
                variant="outlined"
                size="small"
                sx={AuthStyles.textFields}
                {...field}
                placeholder="First Name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            )}
          />
          <Controller
            control={control}
            name="last_name"
            render={({ field }) => (
              <TextField
                variant="outlined"
                size="small"
                sx={AuthStyles.textFields}
                {...field}
                placeholder="Last Name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            )}
          />
          <Controller
            control={control}
            name="SelectJobTitle"
            render={({ field }) => (
              <Select
                  marginTop={1}
                  marginBottom={1}
                  sx={AuthStyles.select}
                {...field}
                options={jobTitle}
                onChange={setSelectedJobTitle}
                defaultValue={selectedJobTitle}
                placeholder="Select Job Title"
                required
                error={!!errors.SelectJobTitle}
                helperText={
                  errors.SelectJobTitle && `${errors.SelectJobTitle.message}`
                }
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <TextField
                variant="outlined"
                size="small"
                sx={AuthStyles.textFields}
                {...field}
                placeholder="Email"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <TextField
                variant="outlined"
                size="small"
                sx={AuthStyles.textFields}
                {...field}
                placeholder="Password"
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            )}
          />
            <Box align="center">
              <Button sx={style.buttonSignup} type="submit"> Submit </Button>
            </Box>

          </Stack>
        </form>

      </Stack>
    </Modal>
  );
};

export default SignupModal;