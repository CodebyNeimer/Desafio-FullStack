import { useForm } from "react-hook-form"
import { Input } from "../Input";

export const LoginForm = () => {
    const { register, handleSubmit } = useForm()
    
    const submit = (formData) => {
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input
                type="email"
                placeholder="Email"
                {...register("email")}
            />
            <Input
                type="text"
                placeholder="Passowrd"
                {...register("password")}
            />
            <button className="button-login" type="submit">Login</button>
        </form>
    )

}