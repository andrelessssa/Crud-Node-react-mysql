import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: 'poppins', sans-serif;
       
       
    }
    body{
        height: 100vh;
        display: flex;
        justify-content: center;
        background-color: #F2F2F2;
        box-sizing: border-box;
    }

`;
export default Global;