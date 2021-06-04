import { createGlobalStyle } from 'styled-components';
import './assets/fonts/font.css';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Archivo', sans-serif;
    }

    html, body {
        overflow-x: hidden;
    }
`;

export default GlobalStyle;