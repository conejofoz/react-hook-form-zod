"use client"

import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  lastName: string;
  age: number;
}


const Page = ()=>{
  const {handleSubmit, register} = useForm<Inputs>();

  const handleFormSubmit: SubmitHandler<Inputs> = (data)=>{
    console.log(data)
  }
  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <input 
          {...register('name', {required: true, minLength: 2, maxLength: 30})} 
          className="border border-black p-3"
          placeholder="Digite seu nome"
        />
        <input 
          {...register('lastName')} 
          className="border border-black p-3 mt-4 block"
          placeholder="Digite seu sobrenome"
        />
        <input 
          type="number"
          {...register('age', {required: true, min: 18, max:120})} 
          className="border border-black p-3 mt-4"
          placeholder="Digite sua idade"
        />

        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default Page;