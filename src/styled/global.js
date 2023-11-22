import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    body {
        width: 100vw;
        background-image: url("./src/assets/scenario.png");
        font-family: 'Quicksand', sans-serif;
    }

    p {
        font-weigth: 300;
        font-size:12px;
    }

    button {
        font-family: 'Quicksand', sans-serif;
    }

    input::placeholder { font-family: 'Quicksand', sans-serif; }

    .container {
        max-width: 1440px;
        width: 100%;
        margin: 0 auto;
        padding: 1rem;
    }
`