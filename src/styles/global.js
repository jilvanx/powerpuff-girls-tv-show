import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F2F5;
    --red: #E52E4D;
    --pink: #F2B8DC;
    --text-title: #363F5F;
    --text-body: #969CB3;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* font-size: 16px (Desktop) */
  html {

    //15px
    @media (max-width: 1080px) {
      font-size: 93.75%; 
    }

    //14px
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(---background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    background: var(--background);
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`;
