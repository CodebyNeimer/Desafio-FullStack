import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormSchema"
import { Input } from "../Input";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: zodResolver(registerFormSchema), 
    })
    
    const userRegister = () => {
        try {
            navigate("/sucess")
        } catch (error) {
            console.log('oi')
        }
    }

    const submit = (formData) => {
        console.log(formData)
        userRegister()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input
                type="text"
                placeholder="Nome Completo"
                {...register("name")}
                error={errors.name}
            />
            <Input
                type="email"
                placeholder="Email"
                {...register("email")}
                error={errors.email}
            />
            <Input
                type="text"
                placeholder="Senha"
                {...register("password")}
                error={errors.password}
            />
            <Input
                type="text"
                placeholder="Telefone"
                {...register("phone")}
                error={errors.phone}
            />
            <button type="submit">Register</button>
        </form>
    )

}