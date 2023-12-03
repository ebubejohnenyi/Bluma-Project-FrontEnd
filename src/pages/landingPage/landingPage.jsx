import BlumaLogo from "../../component/bluma-logo";
import SearchBar from "../../component/searchBar";
import RegisterBtn from "../../component/registerSection/index";
import CardSection from "../pictureCards";
import HeroNavigations from "../pictureCards/cards/Navigation";
import PostArticleBtn from "../../component/button/postArticleBtn/PostArticleBtn";
import { Container } from "./style";
import "./style.css";
import HeroSection from "../hero/index";

const NavBar = () => {
  return (
    <>
      <Container>
        <BlumaLogo />
        <SearchBar />
        <RegisterBtn />
      </Container>

      <div className="links">
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">NEWS FEED</a>
        </li>
        <li>
          <a href="#">FESTIVAL & TOUR</a>
        </li>
        <li>
          <a href="#">ABOUT US</a>
        </li>
      </div>
      <HeroSection />
      <PostArticleBtn/>
      <HeroNavigations />
      <CardSection />
    </>
  );
}



export default NavBar;
