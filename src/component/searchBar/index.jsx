import { Container, SearchIcon, SearchText } from "./style";
import icon from "../../assets/search 1.svg";
function SearchBar() {
  return (
    <>
      <Container>
        <SearchText>Search here</SearchText>
        <SearchIcon>
          <img src={icon} alt="" />
        </SearchIcon>
      </Container>
    </>
  );
}
export default SearchBar;
