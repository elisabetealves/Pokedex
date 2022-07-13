import { HeaderDiv, DivLogoHome, DivDex, Button, ButtonOne, ButtonTwo, Img, DivLogoOthers } from "./styled"
import LogoDex from "../../assets/logoDex.png"
import Battle from "../../assets/Battle.png"
import Pokedex from "../../assets/pokedex.png"
import { useNavigate } from "react-router-dom"
import { goToHomePage, goToBattlePage, goToPokedexPage, goBack } from "../../routes/coodinator"
import { TiArrowBack } from "react-icons/ti"
import { Tooltip } from '@chakra-ui/react'
// import { useContext } from "react"
// import { GlobalContext } from "../../global/GlobalContex"

const Header = (props) => {
   // const { states } = useContext(GlobalContext)
   // const pageBefore = states.pageBefore

   const navigate = useNavigate()

   return (
      <>
         {
            props.page === 'home' ?
               <HeaderDiv>
                  <DivLogoHome>
                     <Tooltip hasArrow bg='gray.400' color={'black'} label='Início'>
                        <ButtonOne onClick={() => goToHomePage(navigate)}>
                           <Img src={LogoDex} alt="Botão para página inicial" />
                        </ButtonOne>
                     </Tooltip>
                  </DivLogoHome>

                  <DivDex>
                     <Tooltip hasArrow bg='gray.400' color={'black'} label='Batalha'>
                        <Button onClick={() => goToBattlePage(navigate)}>
                           <Img src={Battle} alt="Botão para página de batalha" />
                        </Button>
                     </Tooltip>
                     <Tooltip hasArrow bg='gray.400' color={'black'} label='Pokédex'>
                        <ButtonTwo onClick={() => goToPokedexPage(navigate)}>
                           <Img src={Pokedex} alt="Botão para página de Pokédex" />
                        </ButtonTwo>
                     </Tooltip>
                  </DivDex>
               </HeaderDiv>
               :
               <HeaderDiv>

                  <Tooltip className="arrow" hasArrow bg='gray.400' color={'black'} label='Voltar' placement='top-end'>
                     <Button onClick={() => goBack(navigate)}>
                        <TiArrowBack
                           size={50}
                           color={'#E41C24'}
                           style={{ position: "absolute", top: "14px", left: "12px" }}
                        />
                     </Button>
                  </Tooltip>

                  <DivLogoOthers>
                     <Tooltip hasArrow bg='gray.400' color={'black'} label='Início'>
                        <ButtonOne onClick={() => goToHomePage(navigate)}>
                           <Img src={LogoDex} alt="Botão para página inicial" />
                        </ButtonOne>
                     </Tooltip>
                  </DivLogoOthers>

                  <DivDex>
                     <Tooltip hasArrow bg='gray.400' color={'black'} label='Batalha'>
                        <Button onClick={() => goToBattlePage(navigate)}>
                           <Img src={Battle} alt="Botão para página de batalha" />
                        </Button>
                     </Tooltip>
                     <Tooltip hasArrow bg='gray.400' color={'black'} label='Pokédex'>
                        <ButtonTwo onClick={() => goToPokedexPage(navigate)}>
                           <Img src={Pokedex} alt="Botão para página de Pokédex" />
                        </ButtonTwo>
                     </Tooltip>
                  </DivDex>
               </HeaderDiv>
         }
      </>
   )
}

export default Header