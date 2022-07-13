import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import EmConstrucao from "../../assets/emConstrucao.jpg"
import { DivBattle } from "./styled"

const BattlePage = () => {

   return (
      <>
         <Header />
         <DivBattle>
            <img src={EmConstrucao} alt="Imagem de manutenção" />
         </DivBattle>
         <Footer />
      </>
   )
}

export default BattlePage