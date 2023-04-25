import React from "react";
import "../Styles/Movies.css";

function CardsDetails({ Datas }) {
  return (
    <div className="cardsDetails-head">
      {Datas.map((x, index) => {
        return (
          <div className="cardsDetails" key={index}>
            <div className="grid-item">
              <img src={x.src} alt="image-banner" />
            </div>
            <div className="card-content">
              <p>Name : {x.name}</p>
              <p>Genre : {x.genre}</p>
              <p>Year : {x.year}</p>
              <p>Category : {x.cat}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardsDetails;
