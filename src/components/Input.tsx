import { SignUpForm } from "../types/SignUpForm"
import { useController, UseControllerProps } from "react-hook-form"

export const Input = (props: UseControllerProps<SignUpForm>)=>{
    const {field, fieldState} = useController(props)
    return(
        <div className="my-3">
            <input 
                {...field} 
                placeholder={props.name}
                className={`w-full border rounded-md p-3 text-black
                    ${fieldState.invalid ? 'border-red-500' : 'border-gray-300'}
                    focus:outline-none focus:ring-2 focus:ring-blue-500`} 
            />
            {fieldState.error?.type === 'required' && <p>Campo obrigatório</p>}
        </div>

    )
}