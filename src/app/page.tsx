"use client"

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

/* pode ficar fora do componente ou em outro arquivo */
const SignUpFormShema = z.object({
  name: z.string().min(2).max(20),
  lastName: z.string().min(2).optional(), //no zod por padrão tudo é obrigatório
  email: z.string().email(),
  age: z.number({invalid_type_error: 'Idade precisa ser um número'}).min(18, {message: 'Precisa ser maior de 18 anos.'})
});


const Page = ()=>{

  const {register, handleSubmit, formState: {errors} } = useForm({resolver: zodResolver(SignUpFormShema)});

  const handleSignUpForm = ()=>{
    alert('vai enviar')
  }

  return (
    <div className="container mx-auto">

      <form onSubmit={handleSubmit(handleSignUpForm)}>
        <div>
          <input 
            {...register('name')}
            className='border p-3 m-3'
          />
          {errors.name && <p>{errors.name.message as string}</p>}
        </div>
        <div>
          <input 
            {...register('lastName')}
            className='border p-3 m-3'
          />
          {errors.lastName && <p>{errors.lastName.message as string}</p>}

        </div>
        <div>
          <input 
            {...register('email')}
            className='border p-3 m-3'
          />
          {errors.email && <p>{errors.email.message as string}</p>}

        </div>
        <div>
          <input 
            {...register('age', {valueAsNumber: true})}
            className='border p-3 m-3'
          />
          {errors.age && <p>{errors.age.message as string}</p>}
        </div>

        <input type="submit" value="Cadastrar" />
      </form>

      

    </div>
  )
}

export default Page;