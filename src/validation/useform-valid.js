import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Grid, TextField } from '@mui/material';

const Validation2 = () => {
    const { register,reset,watch, handleSubmit,formState:{errors} } = useForm({
        defaultValues: {
            name: "",
            password: "",
            Newpassword: "",
            
        },
    });
    const formSubmit=(data)=>{
        
console.log(data)
reset()
    }

    return (
        <div>
            <h2>Form</h2>
            <form onSubmit={handleSubmit(formSubmit)}>
            <TextField
                id="name"
                name="name"
                label="Name"
                placeholder="Enter your name"
                
                {...register("name", { required: "Name is required" })}
                  error={Boolean(errors.name)}
                  helperText={errors.name ? errors.name.message : ""}
              
            />
            <TextField
                id="password"
                name="password"
                label="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true
                  })}
                  error={Boolean(errors.password)}
                  helperText={errors.password ? errors.password.message : ""}
            />
            <TextField
                id="Newpassword"
                name="Newpassword"
                label="Newpassword"
                placeholder="Enter your age"
                {...register("Newpassword", {
                    required: true,
                    validate: (val) => {
                        if (watch("password") != val) {
                          return "Your passwords do no match";
                        }
                      },
                  },
                )}
                  
                  
                  
                  error={Boolean(errors.Newpassword)}
                  helperText={errors.Newpassword ? errors.Newpassword.message : ""}
            />

            <button type='submit'>click me</button>
             </form>
        </div>
       
    );
};

export default Validation2;
