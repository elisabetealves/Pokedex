import styled from "styled-components";

export const DivBattle = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
 

    img{
        height: 78vh;
        margin-top: 5px;
    }

    @media(max-width:480px){
        height: 100vh;
        width: 118vw;
        background-repeat: cover;
        background-position: 42% 50%;
        background-size: 1000px;
        background-color: rgb(230, 230, 230);
    }
`