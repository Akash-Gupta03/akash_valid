import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form';
import { Button, Grid, TextField } from '@mui/material';




const Validation = () => {
    const [pass,Newpass]=useState("")
    const [confirm,Newconfirm]=useState("")
const onChangespass=(event)=>{
    Newpass(event.target.value)
    
}
const onChangesconfirm=(event)=>{
    Newconfirm(event.target.value)
    
}


const handleSubmit=(e)=>{
    e.preventDefault();
if (pass===confirm){
    console.log("Matched")
}
else{
    console.log("Not Matched")
}
}

    // const { control, watch,  formState: { errors }, reset, handleSubmit ,register} = useForm();
  return (
    // <div>
    //     <h1>Input  Validation</h1>
    //     <form onSubmit={handleSubmit(onSubmit)}>
    //        <Grid item xs={6} sm={3}>
    //               <Controller
    //             name="password"
    //             control={control}
    //             rules={{
    //               required: "Password is required!",
    //             }}
    //             render={({ field }) => (
    //               <TextField
    //                 {...field}
    //                 type="password"
    //                 label="Password"
    //                 //variant="standard"
    //                 fullWidth
    //                 error={errors?.password ? true : false}
    //                 helperText={errors?.password ? errors.password.message : null}
    //               />
    //             )}
    //           />
    //               </Grid>
    //               <Grid item xs={6} sm={3}>
    //               <Controller
    //             name="confirmPassword"
    //             control={control}
    //             rules={{
    //               required: "Confirm Password is required!",
    //             }}
    //             render={({ field }) => (
    //               <TextField
    //                 {...field}
    //                 type="password"
    //                 label="Confirm Password"
    //                 {...register("confirmPassword", {
    //                   validate: (val) => {
    //                     if (watch("password") != val) {
    //                       return "Your passwords do no match";
    //                     }
    //                   },
    //                 })}
    //                 fullWidth
    //                 required
    //                 error={errors?.confirmPassword ? true : false}
    //                 helperText={errors?.confirmPassword ? errors.confirmPassword.message : null}
    //               />
    //             )}
    //           />
    //               </Grid>

    //               <Button type='submit'> click here</Button>
    //               </form>
    // </div>



    <div>
        <form onSubmit={handleSubmit}>
    <input  name='current' id='current' value={pass} onChange={onChangespass}/>
    <input  name='new' id='new' value={confirm} onChange={onChangesconfirm}/>
    <button type='submit' >click here</button>
    </form>
    </div>
  )
}

export default Validation
