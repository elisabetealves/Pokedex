import styled from "styled-components";

export const HeaderDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #666666;
    height: 12vh;
    width: 100%;
    //padding: 0.8em 1.5em;
    
  
    /* .arrow{
        @media(max-width:480px){
            position: relative;
            bottom: 100px;
        }
    }
     */

    @media(max-width:480px){
        height: 8vh;
        justify-content: center;
        align-items: center;
        height: 60px;
        width: 100%;
        color: white;
        padding: 0 20px;
        position: fixed;
        margin-bottom: 20px;
        z-index: 1000;

      
    }

`

export const DivLogoHome = styled.div`
    height: 100%;
    width: 52%;
    display: flex;
    justify-content: end;
    align-items: center;
`

export const DivLogoOthers = styled.div`
    height: 100%;
    width: 52%;
    display: flex;
    justify-content: end;
    align-items: center;
`

export const DivDex = styled.div`
    height: 100%;
    width: 48%;
    display: flex;
    justify-content: end;
    align-items: center;
    padding-right: 1em;
    gap: 1.3em;
    
`

export const Button = styled.button`
    height: 90%;
    :hover{
        opacity: 85%;
    }
    
`
export const ButtonOne = styled.button`
    height: 250%;
    position: relative;
    left: 200px;
    bottom: 5px;
    top: 25px;

    @media(max-width:480px){
        left: -80px;
        top: 1px;
    }
  
`
export const ButtonTwo = styled.button`
    height: 100%;
  
    :hover{
        opacity: 85%;
    }
`
export const Img = styled.img`
    height: 60%;

    @media(max-width:480px){
       height: 40px;
    }
`