import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Red Hat Text', sans-serif;
}
body{
    width: 100vw;
    height: 100vh;
}
html{
    font-size: 14px;
}
`;
