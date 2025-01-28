"use client"

import { z } from 'zod';



const Page = ()=>{

  type SignUpForm = {
    name: string;
    lastName: string;
    age: number;
  }

  const SignUpForm = z.object({
    name: z.string().min(2).max(20),
    lastName: z.string().min(2).optional(), //no zod por padrão tudo é obrigatório
    age: z.number().min(18)
  });

  /* testando o padrão */
  console.log(
    SignUpForm.parse(
      {
        name: 'Xivio',
        LastName: 'Conejo',
        age: 90
      }
    )
  );

  return (
    <div className="container mx-auto">

      

    </div>
  )
}

export default Page;