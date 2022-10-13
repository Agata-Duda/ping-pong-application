import React from "react";
import Collapsible from "react-collapsible"
import { useForm } from "react-hook-form";

const LoginForm = () => {

    const {register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(watch("login"));

    return ( 
        <Collapsible id ="LogInCollapse" trigger={<b> Log In</b>} triggerWhenOpen={<b> Log In</b>}>
            <div id="formLogin" className="Loginform">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input id="loginUsername" defaultValue={"Username"} {...register("Username",{ required: true})} />
                    {errors.loginRequired && <span> Username is required</span>}
                    <br/>
                    <input id="loginPassword" defaultValue={"Password"} {...register("Password", { required: true})} />
                    {errors.loginRequired && <span> Password is required</span>}
                    <br/>
                    <div id="submitDiv">
                        <input id="submitButtonLogin" type="submit" value="Log In"/>
                    </div>
                </form> 
            </div>
        </Collapsible>   
     );
}
 
export default LoginForm;