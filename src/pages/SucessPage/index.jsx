import { userEffect } from "react"
import { useNavigate } from "react-router-dom"

export const SucessPage = () => {
    const navigate = useNavigate()

    userEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 3000)
    }, [])
    
    return (
        <div>
            <h1> Conta criada com sucesso </h1>
            <p> Voce sera redirecionado em 3 segundos</p>
        </div>
    )

}