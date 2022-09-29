// import React from "react";
// import { useForm } from "react-hook-form";

// const LoginForm = () => {
//     const {register, handleSubmit, watch, formState: { errors } } = useForm();
//     const onSubmit = data => console.log(data);
//     console.log(watch("example"));


//     return ( 
//         <div className="form"> 
//         <h4>Form</h4>
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <input defaultValue={"test"} {...register("example")} />
//             <input {...register("exampleRequired", { required: true})} />
//             {errors.exampleRequired && <span> This field is required</span>}

//             <input type="submit"/>
    


//         </form>
//     </div>
     
    
//      );
// }
 
// export default LoginForm;