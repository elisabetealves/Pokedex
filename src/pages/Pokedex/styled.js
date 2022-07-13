import styled from "styled-components";

export const PokedexMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100vw; 
    min-height: 80vh;

    @media(max-width:480px){
        .grid-card{
            display: grid;
            grid-template-columns: repeat(2, 10rem); 
            grid-template-rows: auto;
        }
    }
`

export const PokedexContainer = styled.div`
   display: flex;
    flex-direction: column;
    gap:40px;
    max-width: 100vw; 
`

export const DivDexEmpty = styled.div`
    height: 100vh;
    display: flex;
    margin-top: -30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    img{
        @media(max-width:480px){
            height: 50vh;
            position: relative;
            left: 10%;
            top: 10%;
        }
    }
`