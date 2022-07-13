import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *::-webkit-scrollbar {
    width: 4px;
    height: 5px;  
    @media(max-width:480px){
      width: 5px;
    height: 5px;
        height: 8vh;
        margin: 0;
    }
  }
  *::-webkit-scrollbar-thumb {
    background-color: #6C6C6C;
    border-radius: 2px;
  }
  *::-webkit-scrollbar-track {
    background-color:#DFDFDF;
  }

`