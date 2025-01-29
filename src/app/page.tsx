"use client"

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

/* pode ficar fora do componente ou em outro arquivo */
const SignUpFormShema = z.object({
  name: z.string().min(2).max(20),
  lastName: z.string().min(2).optional(), //no zod por padrão tudo é obrigatório
  age: z.number().min(18)
});


const Page = ()=>{

  const {register, handleSubmit } = useForm({resolver: zodResolver(SignUpFormShema)});

  const handleSignUpForm = ()=>{
    alert('vai enviar')
  }

  return (
    <div className="container mx-auto">

      <form onSubmit={handleSubmit(handleSignUpForm)}>
        <input 
          {...register('name')}
          className='border p-3 m-3'
        />
        <input 
          {...register('lastName')}
          className='border p-3 m-3'
        />
        <input 
          {...register('age', {valueAsNumber: true})}
          className='border p-3 m-3'
        />

        <input type="submit" value="Cadastrar" />
      </form>

      

    </div>
  )
}

export default Page;