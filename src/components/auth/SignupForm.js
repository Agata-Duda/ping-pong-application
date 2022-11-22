import React, { useEffect, useState } from "react"
import Collapsible from "react-collapsible"
import { Controller, useForm } from "react-hook-form"
import axios from "axios"
import Select from "react-select"
import toast from "react-hot-toast"

import { GetAllJobTitles_URL, GET_ALL_USERS } from "../util/ApiMethods"

// TODO: mui
//TO-DO: add form error handling 

const SignupForm = () => {
  const { control, register, handleSubmit, "formState": { errors } } = useForm()
  const [jobTitles, setJobTitles] = useState(null);
  const [selectedJobTitle, setSelectedJobTitle] = useState(null);
  const [signUpError, setSignUpError] = useState(true);

  useEffect(() => {
    const fetchJobTitles = async () => {
      await axios.get(`${GetAllJobTitles_URL}`).then((response) => {
        const mappedJobTitles = response.data.response?.map((d) => {
          return({
            label: d.title,
            value: d.job_id })
          });
        setJobTitles(mappedJobTitles);
      }
      );
    };
    fetchJobTitles();
  }, []);

  const onSubmit = ((data) => {

    const payload = {
        "userName": data.Username,
        "password": data.PasswordMatch,
        "firstName": data.FirstName,
        "lastName": data.LastName,
        "email": data.Email,
        "jobTitle": selectedJobTitle.value,
        "totalGames": 0,
        "wins": 0,
        "accountType": 1
    };

    axios.post(`${GET_ALL_USERS}`, payload)
    .then(setSignUpError(false))
    .catch((error) => {
      if(error.request)
        toast.error("Something went wrong");
      else if(error.response)
      toast.success("Sign-up Successful");
        setSignUpError(true);
    });
  })

  return (
    <Collapsible trigger={<b>Sign up</b>} triggerWhenOpen={<b>Sign up</b>}>
      <div className="SignupForm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder= "First Name" {...register("FirstName", { "required": true })} />
          <br/>
          <input placeholder= "Last Name" {...register("LastName", { "required": true })} />
          {errors.loginRequired && <span> Password is required</span>}
          <br/>
          <input placeholder= "Username" {...register("Username", { "required": true })} />
          <br/>
          <input type = "email" placeholder= "Email" {...register("Email", { "required": true })} />
          {errors.loginRequired && <span> Password is required</span>}
          <br/>
          <Controller
            control={control}
            name="SelectJobTitle"
            render={({ field }) => 
            <Select
            {...field}
            options = {jobTitles} 
            onChange = {setSelectedJobTitle} 
            defaultValue = {selectedJobTitle}
            placeholder = "Select Job Title"
            required
            error={!!errors.SelectJobTitle}
            helperText={errors.SelectJobTitle && `${errors.SelectJobTitle.message}`}
          />
        }
        />
          <input type = "password" placeholder= "Password" {...register("Password", { "required": true })} />
          <br/>
          <input type = "password" placeholder= "Re-enter Password" {...register("PasswordMatch", { "required": true })} />
          <br/>
          <div id="submitDiv">
            <input type="submit" value="Sign Up"/>
          </div>
        </form>
      </div>
      {!signUpError && toast.success("Signed Up Successfully!") }
    </Collapsible>
  )
}

export default SignupForm
