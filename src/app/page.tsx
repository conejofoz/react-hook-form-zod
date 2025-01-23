"use client"

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { SignUpForm } from "../types/SignUpForm"; //era o type Inputs
import { Input } from "@mui/material";

const Page = ()=>{
  const {control, handleSubmit } = useForm<SignUpForm>({
    defaultValues:{
      name:'',
      lastName: '',
      age: 0
    }
  });

  const handleFormSubmit: SubmitHandler<SignUpForm> = (data)=>{
    console.log(data)
  }
  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        
        <Controller
          control={control}
          name="name"
          rules={{required: true}}
          render={({ field, fieldState }) => 
            <Input { ...field}
              className="block mr-4"
              error={fieldState.invalid}
           />
          }
        />

        <Controller
          control={control}
          name="lastName"
          render={({ field, fieldState }) => 
            <Input { ...field}
              className="block mr-4"
              error={fieldState.invalid}
           />
          }
        />

        <Controller
          control={control}
          name="age"
          rules={{required: true, min: 18}}
          render={({ field, fieldState }) => 
            <Input { ...field}
              className="block mr-4"
              error={fieldState.invalid}
           />
          }
        />
        {/* obs: esse Input agora é do Material UI */}
        

        <input type="submit" value="Enviar" className="p-4 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer" />
      </form>
    </div>
  )
}

export default Page;