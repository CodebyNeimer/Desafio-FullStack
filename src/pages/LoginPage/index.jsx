import { LoginForm } from "../../components/LoginForm"
import { StyledContainer } from "../../styled/container"
import { StyledLoginPage } from "./style"
import { Link } from "react-router-dom"

export const LoginPage = () => {
    return (
        <StyledLoginPage>
            <StyledContainer className="login-container">
                <h1> login Page </h1>
                <LoginForm/>
                <Link to="/">Home</Link>
            </StyledContainer>
        </StyledLoginPage>
    )
}