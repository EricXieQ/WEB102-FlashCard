import "./card.css";

function Card({onClick, id, front, back}) {
  return (
    <div className="card" onClick={onClick}>

      <div className="card-back">
        {back}
      </div>
      <div className="card-front">
            <p>{id+") "}</p>
            <p>{" "+front}</p>
      </div>
    </div>
  );
}

export default Card;