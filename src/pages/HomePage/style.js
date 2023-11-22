import styled from "styled-components";

export const StyledHomePage = styled.div`

    .home-container {
        margin: 200px auto;
        padding: 3rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        gap: 30px;
        max-width: 750px;
        width: 100%;
        background-color: rgba(255,255,255,0.2);
        border-radius: 10px;
    }

    .home-container > h1 {
        font-size: 28px;
        font-weigth: 700;
    }

    .home-container > div {
        display: flex;
        gap: 50px;
    }

    
    .link-button {
        width: 100%;
        padding: 0.5rem;
        border-bottom: 1.5px solid black;
        border-radius: 6px;
        font-size:20px;
    }
`