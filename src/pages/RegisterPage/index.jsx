import { StyledContainer } from "../../styled/container"
import { RegisterForm } from "../../components/RegisterForm"
import { StyledRegisterPage } from "./style"

export const RegisterPage = () => {
    return (
        <StyledRegisterPage>
            <StyledContainer className="register-container">
                <h1> Register Page </h1>
                <RegisterForm />
            </StyledContainer>
        </StyledRegisterPage>
    )
}