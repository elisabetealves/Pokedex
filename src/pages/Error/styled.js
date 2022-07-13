import styled from "styled-components";

export const ErroDiv = styled.div`
    height: 100vh;
    background: url(${props => props.imagem});
    background-repeat: no-repeat;
    background-position: 40% 50%;
    background-size: auto;
    background-color: rgb(230, 230, 230);

    @media(max-width:480px){
        height: 100vh;
        width: 118vw;
        background-repeat: cover;
        background-position: 42% 50%;
        background-size: 1000px;
        background-color: rgb(230, 230, 230);
    }
` 