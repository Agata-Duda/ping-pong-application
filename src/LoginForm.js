import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
    const {register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(watch("example"));

    return ( 
        <div id="formLogin" className="Loginform"> 
        <h4>Login</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue={"Username"} {...register("Username")} />
            <br/>
            <input defaultValue={"Password"} {...register("Password", { required: true})} />
            {errors.exampleRequired && <span> This field is required</span>}
            <br/>
            <input type="submit" value="Login"/>
        </form>
    </div>
     );
}
 
export default LoginForm;