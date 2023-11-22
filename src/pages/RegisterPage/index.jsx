import { StyledContainer } from "../../styled/container"
import { RegisterForm } from "../../components/RegisterForm"
import { StyledRegisterPage } from "./style"
import { Link } from "react-router-dom"

export const RegisterPage = () => {
    return (
        <StyledRegisterPage>
            <StyledContainer className="register-container">
                <h1> Register Page </h1>
                <RegisterForm />
                <Link to="/">Home</Link>
            </StyledContainer>
        </StyledRegisterPage>
    )
}