import { LoginForm } from "../../components/LoginForm"
import { StyledContainer } from "../../styled/container"
import { StyledLoginPage } from "./style"

export const LoginPage = () => {
    return (
        <StyledLoginPage>
            <StyledContainer className="login-container">
                <h1> login Page </h1>
                <LoginForm/>
            </StyledContainer>
        </StyledLoginPage>
    )
}