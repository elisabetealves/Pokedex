import styled from 'styled-components'

export const PageContainer = styled.div`
    max-width: 80vw;
    margin: auto;
    padding-top: 3%;
    padding-bottom: 3%;

    @media(max-width:480px){
        display: grid;
        grid-template-columns: repeat(1, 25rem); 
        grid-template-rows: auto;
        position: relative;
        top: 80px;
        left: -10px;
        width: 150%;
        height: 900px;
    }
`
export const InfoContainer = styled.div`
    display:flex;
    gap:20px;
    height: 60vh;
    display: flex;
    justify-content: center;

    @media(max-width:480px){
        display: grid;
        grid-template-columns: repeat(2, 10rem); 
        grid-template-rows: auto;
        position: relative;
        gap:2px;
        bottom: 5vh;
    }
    
`

export const DivMove = styled.div`
    @media(max-width:480px){
        display: none;
     
    }
`

export const Img = styled.img`
    height: 80%;

    @media(max-width:480px){
        height: 60%;
        position: relative;
        top: -40px;
    }
`

export const InfoCenterDiv = styled.div`
    display: flex;
    max-width: 30%;
    min-width: 30%;
    flex-direction: column;
    justify-content: space-between;

    @media(max-width:480px){
        display: grid;
        grid-template-columns: repeat(1, 10rem); 
        grid-template-rows: auto;
    }

    
`

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    font-size: 1.5rem;
    font-weight: bold;
    color:white;
    -webkit-text-stroke: 0.7px black;
    span{
        text-transform: capitalize;
    }
    button{
        font-size: 2rem;
        :hover{
            opacity: 85%;
            color:black;
        }
    }
`
//--------------------------
export const PokeBallContainer = styled.span`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding-right: 7%;
    img{
        width: 12%;
        cursor: pointer;
    }
`