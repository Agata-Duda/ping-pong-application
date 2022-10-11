import React from "react";
import Collapsible from "react-collapsible";
import { useForm } from "react-hook-form";

const SignupForm = () => {
    const {register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(watch("signup"));
    
    return ( 
        <Collapsible trigger={<b>Sign up</b>} triggerWhenOpen={<b>Sign up</b>}>
            <div id="formSignup" className="SignupForm">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input id="SignupName" defaultValue={"First Name"} {...register("FirstName", { required: true})} />
                        <br/>
                        <input id="SignupLastname" defaultValue={"Last Name"} {...register("LastName", { required: true})} />
                        {errors.loginRequired && <span> Password is required</span>}
                        <br/>
                        <input id="SignupUsername" defaultValue={"Username"} {...register("Username", { required: true})} />
                        <br/>
                        <input id="SignupEmail" defaultValue={"Email"} {...register("Email", { required: true})} />
                        {errors.loginRequired && <span> Password is required</span>}
                        <br/>
                        <select>
                            <option value="Software Engineer"> Software Engineer</option>
                            <option value="UI Developer"> UI Developer </option>
                            <option value="Dev Ops"> Dev Ops</option>
                        </select>
                        <input id="SignupPassword" defaultValue={"Password"} {...register("Password", { required: true})} />
                        <br/>
                        <input id="SignupPasswordMatch" defaultValue={"Re-enter Password"} {...register("PasswordMatch", { required: true})} />
                        <br/>
                            <div id="submitDiv">
                                <input id="submitButtonLogin" type="submit" value="Sign Up"/>
                            </div>
                    </form>
            </div>
        </Collapsible> 
     );
}
 
export default SignupForm;