import styled from 'styled-components'

export const HomeMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100vw; 
    min-height: 80vh;
    margin: 0 auto;
    padding: 0 auto;

     
    @media(max-width:480px){
    .grid-card{
        display: grid;
        grid-template-columns: repeat(2, 10rem); 
        grid-template-rows: auto;
    }
    
    }
    
    .pagina{
        @media(max-width:480px){
            margin-right: 0.9em;
        }
    }

    .paginaTwo{
        @media(max-width:480px){
            margin-left: 0.9em;
        }
    }

    
`
export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap:40px;
    max-width: 100vw; 
   
`

export const LoaderContainer = styled.div`
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        height: 20%;
    }
`