import { useForm } from "react-hook-form"

export const LoginForm = () => {
    const { register, handleSubmit } = useForm()
    
    const submit = (formData) => {
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label>E-mail</label>
                <input type="email" {...register("email")}/>
            </div>
            <div>
                <label>Senha</label>
                <input type="password" {...register("password")}/>
            </div>
            <button type="submit">Login</button>
        </form>
    )

}