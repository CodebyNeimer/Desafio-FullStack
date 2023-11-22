import { Link } from "react-router-dom"
import { StyledHomePage } from "./style"
import { StyledContainer } from "../../styled/container"

export const HomePage = () => {
    return (
        <>
            <StyledHomePage>
                <StyledContainer className="home-container">
                    <h1> Welcome to the this web application </h1>
                    <div>
                        <Link className="link-button" to="/register">Register</Link>
                        <Link className="link-button" to="/login">Login</Link>
                    </div>
                </StyledContainer>
            </StyledHomePage>
        </>   
    )
}