import React, { useEffect, useState } from "react"
import Collapsible from "react-collapsible"
import { useForm } from "react-hook-form"
import axios from "axios"
import Select from "react-select"

import { GetAllJobTitles_URL, getAllUsers, GET_ALL_USERS } from "../util/util"

// TODO: mui, and no console.log
//TO-DO: add form error handling 

const SignupForm = () => {
  const { register, handleSubmit, watch, "formState": { errors } } = useForm()
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
        console.log(error.request);
      else if(error.response)
        console.log(error.response);
        setSignUpError(true);
    });
  })

  return (
    <Collapsible trigger={<b>Sign up</b>} triggerWhenOpen={<b>Sign up</b>}>
      <div id="formSignup" className="SignupForm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input id="SignupName" placeholder= "First Name" {...register("FirstName", { "required": true })} />
          <br/>
          <input id="SignupLastname" placeholder= "Last Name" {...register("LastName", { "required": true })} />
          {errors.loginRequired && <span> Password is required</span>}
          <br/>
          <input id="SignupUsername" placeholder= "Username" {...register("Username", { "required": true })} />
          <br/>
          <input id="SignupEmail" type = "email" placeholder= "Email" {...register("Email", { "required": true })} />
          {errors.loginRequired && <span> Password is required</span>}
          <br/>
          <Select
            {...register("jobTitle")}
            options = {jobTitles} 
            onChange = {setSelectedJobTitle} 
            defaultValue = {selectedJobTitle}
            placeholder = "Select Job Title"
          />
          <input id="SignupPassword" type = "password" placeholder= "Password" {...register("Password", { "required": true })} />
          <br/>
          <input id="SignupPasswordMatch" type = "password" placeholder= "Re-enter Password" {...register("PasswordMatch", { "required": true })} />
          <br/>
          <div id="submitDiv">
            <input id="submitButtonLogin" type="submit" value="Sign Up"/>
          </div>
        </form>
      </div>
      //toast here instead of div
      {!signUpError && <div>Successfully Signed Up</div> }
    </Collapsible>
  )
}

export default SignupForm
