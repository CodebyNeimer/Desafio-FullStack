import styled from "styled-components";

export const StyledRegisterPage = styled.div`
    .register-container {
        margin: 165px auto;
        padding: 3rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        max-width: 420px;
        width: 100%;
        gap: 15px;
        background-color: rgba(255,255,255,0.2);
        border-radius: 10px;
    }

    .register-container > form{
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 1rem;
        width: 100%;
        max-width: 275px;
    }

    .button-register{
        border:1px solid rgba(0,0,0,0.4);
        padding: 10px;
        margin-top:0.7rem;
    }

    .button-register:hover {
        background-color: rgba(255,255,255,0.3);
    }

`