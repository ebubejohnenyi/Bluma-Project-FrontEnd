import "./style.css"
function Card(props) {
  return (
    <div className="cards">
      <img src={props.image} alt="" className="card-img"/>
      <h3>{props.heading}</h3>
      <p>{props.text}</p>
      <button>Read more...</button>
      <div className="card-bottom-section">
        <img src={props.profImg} alt=""  className="card-prof-pic"/>
        <span>{props.profName}</span>
        <br />
        <span>{props.profDate}</span>
      </div>
    </div>
  );
}
export default Card;
