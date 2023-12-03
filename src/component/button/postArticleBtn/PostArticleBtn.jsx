import pen from "../../../component/button/postArticleBtn/whitepen.svg";
import "../postArticleBtn/PostArticleBtn.css"
function PostArticleBtn() {
  return (
    <div className="hero-btn">
      <div id="actualBtn">
      <div id="penArea">
      <img src={pen} alt="" />
      </div>
      <div id="articleArea">
      <p>POST ARTICLES</p>
      </div>
      </div>
    </div>
  );
}
export default PostArticleBtn;
