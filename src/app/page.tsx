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

  
  /* Inferindo um tipo pelo zod */
  type SigUpObject = z.infer<typeof SignUpForm>;

  const obj: SigUpObject = {
    name: "Xivio",
    lastName: "conejo",
    age: 90
  }

  return (
    <div className="container mx-auto">

      

    </div>
  )
}

export default Page;