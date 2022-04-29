import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body{
        background: linear-gradient(180deg, #BD00FF 0%, #380549 100%);
        font-size: 13px;
        height: 100vh;
        font-family: Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased !important;
        -webkit-text-size-adjust: 100% !important;
        overflow: hidden;
    }
    button{
        font-family: Helvetica, sans-serif;
        letter-spacing: 1px;
        -webkit-font-smoothing: antialiased !important;
        -webkit-text-size-adjust: 100% !important;
    }
    a{
        text-decoration: none;
    }
`