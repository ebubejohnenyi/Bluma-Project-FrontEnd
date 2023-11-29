import pen from "../../../assets/pen 1.svg";
import "./style.css";
function HeroButton() {
  return (
    <div className="hero-btn">
      <button>
        <div>
          <img src={pen} alt="" />
        </div>
        <div>Post an Artticle</div>
      </button>
    </div>
  );
}
export default HeroButton;
