import React, { useEffect, useContext, useState } from "react";
import Collapsible from "react-collapsible";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import axios from "axios";

import { AppContext } from "../../context/appContext";
import { GetUserByUsername_URL } from "../util/ApiMethods";
import { routes } from "../util/routes";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [ user, setUser ] = useContext(AppContext);
  const [ loginError, setLoginError ] = useState(true);

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
  };


  useEffect (
    () => {
      if (watch().Username !== user.userName) {
        setLoginError(true);
      }
      else if(watch().Password !== user.password) {
          setLoginError(true);
        }
      else {
        setLoginError(false);
      }
    },[watch()]
  )

  return (
    <Collapsible
      id="LogInCollapse"
      trigger={<b> Log In</b>}
      triggerWhenOpen={<b> Log In</b>}
    >
      <div id="formLogin" className="Loginform">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
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
          </div>
        </form>
      </div>
      {!loginError && <Redirect path={routes.home} />}
    </Collapsible>
  );
};

export default LoginForm;
