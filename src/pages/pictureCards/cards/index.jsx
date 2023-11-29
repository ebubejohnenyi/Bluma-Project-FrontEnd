import "./style.css";
function Card(props) {
  return (
    <div className="cards">
      <img src={props.image} alt="" className="card-img" />
      <div className="text-content">
        <h3>{props.heading}</h3>
        <p>{props.text}</p>
        <button>Read more...</button>
        <br />
        <div className="card-bottom-section" style={{display: "flex", gap:"2rem",}}>
          <div>
            <img src={props.profImg} alt="" className="card-prof-pic" />
          </div>
          <div>
            <span>{props.profName}</span>
            <br />
            <span>{props.profDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
