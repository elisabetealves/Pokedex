import { Container, InputContainer } from "./styled";
import searchIcon from '../../assets/search-icon.png'
import { useContext } from 'react'
import { GlobalContext } from '../../global/GlobalContex'


const Search = () => {

   const { inputSearch, onChangeSearch } = useContext(GlobalContext)


   return (
      <Container>
         <InputContainer>
            <input type='text' placeholder="Pesquise.."
               value={inputSearch} onChange={(ev) => onChangeSearch(ev)} />
            <button><img src={searchIcon} /></button>
         </InputContainer>
         {/* <SelectContainer value={inputSelect} onChange={(ev) => onChangeSelect(ev)} >
            <option value='' >Filtrar por</option>

         </SelectContainer> */}
         {/* <ButtonsContainer>
            {offset !== 0 && <button onClick={() => goToPrevioustPage()} >
               <img src={leftIcon} /></button>}
            <p>{offset / 20 + 1}</p>
            {offset !== 1140 && <button onClick={() => goToNextPage()} >
               <img src={rightIcon} /></button>}
         </ButtonsContainer> */}
      </Container>
   );
};

export default Search;