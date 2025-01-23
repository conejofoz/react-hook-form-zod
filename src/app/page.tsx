"use client"

import { SubmitHandler, useForm } from "react-hook-form";
import { SignUpForm } from "../types/SignUpForm"; //era o type Inputs
import { Input } from "../components/Input";

const Page = ()=>{
  //const {control, handleSubmit, register, formState: {errors}} = useForm<SignUpForm>();
  const {control, handleSubmit, setValue } = useForm<SignUpForm>({
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
        

        <Input
          control={control}
          name="name"
          rules={{required: true, minLength: 2, maxLength: 30}}
         />
        <Input
          control={control}
          name="lastName"
         />
        <Input
          control={control}
          name="age"
          rules={{required: 'Campo obrigatório!', min: 18, max:120}}
         />

        <input type="submit" value="Enviar" className="p-4 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer" />
        <button onClick={()=>setValue('age', 18)} className="block mt-4 p-4 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer">
          Definir como maior de idade
        </button>
      </form>
    </div>
  )
}

export default Page;