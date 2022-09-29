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
                        <input id="SignupUsername" defaultValue={"Username"} {...register("Username", { required: true})} />
                        <br/>
                        <input id="SignupName" defaultValue={"First Name"} {...register("FirstName", { required: true})} />
                        <br/>
                        <input id="SignupLastname" defaultValue={"Last Name"} {...register("LastName", { required: true})} />
                        {errors.loginRequired && <span> Password is required</span>}
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