"use client"

import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  lastName: string;
  age: number;
}


const Page = ()=>{
  const {handleSubmit, register, formState: {errors}} = useForm<Inputs>();

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
        {errors.name?.type === 'required' && <p>Campo obrigatório!</p>}
        {errors.name?.type === 'minLength' && <p>Precisa ter no mínio 2 caracteres!</p>}
        {errors.name?.type === 'maxLength' && <p>Deve ter no máximo 30 caracteres!</p>}
        <input 
          {...register('lastName')} 
          className="border border-black p-3 mt-4 block"
          placeholder="Digite seu sobrenome"
        />
        <input 
          type="number"
          {...register('age', {required: 'Campo obrigatório!', min: 18, max:120})} 
          className="border border-black p-3 mt-4 block"
          placeholder="Digite sua idade"
        />
        {errors.age && <p>{errors.age.message}</p>}

        <input type="submit" value="Enviar" className="p-4" />
      </form>
    </div>
  )
}

export default Page;