import styled from "styled-components";

export const StyledLoginPage = styled.div`
    .login-container {
        margin: 165px auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        max-width: 420px;
        width: 100%;
        gap: 15px;
        background-color: rgba(255,255,255,0.2);
        border-radius: 10px;
    }

    .login-container > form {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 1rem;
        width: 100%;
        max-width: 275px;
    }

    .button-login{
        border:1px solid rgba(0,0,0,0.4);
        padding: 10px;
        margin-top:0.7rem;
    }

    .button-login:hover {
        background-color: rgba(255,255,255,0.3);
    }
`