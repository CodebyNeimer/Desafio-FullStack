import styled from "styled-components";

export const StyledHomePage = styled.div`
    border: 2px solid red;
    height: 100vh;
    width: 100vw;
    background-image: url("./src/assets/scenario.png");

    .home-container {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        border: 2px solid green;
    }

    .home-container > div {
        display: flex;
        gap: 35px;
        border: 2px solid red;
    }
`