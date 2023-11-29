import LogoButton from "../../component/logo";
import SearchBar from "../../component/searchBar";
import NavSectionThree from "../../component/notification";
import NavigationLinks from "../../component/links";
import CardSection from "../pictureCards";
import HeroNavigations from "../pictureCards/cards/navigation";
import HeroButton from "../pictureCards/cards/button";
import LoginBtn from "../../component/button/loginBtn";
import RegisterBtn from "../../component/button/registerBtn";
import { Container } from "./style";
import "./style.css";
import HeroSection from "../hero";
function NavBar() {
  return (
    <>
      <Container>
        <LogoButton />
        <SearchBar />
        {/* <LoginBtn/> */}
        <NavSectionThree />
        <NavigationLinks />
      </Container>
      <div className="links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">News feed</a>
        </li>
        <li>
          <a href="#">Festival And tour</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
      </div>
      <HeroSection />
      <HeroButton/>
      <HeroNavigations />
      <CardSection />
    </>
  );
}
export default NavBar;
