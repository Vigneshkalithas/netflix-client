import React from "react";
import "../Styles/Card.css";
import { CarouselDatas } from "../helper/Carousel";
function Cards() {
  return (
    <div className="moviecard-head">
      {CarouselDatas.map((x, index) => {
        return (
          <div className="Cards" key={index}>
            <img src={x.src} />
            <div className="card-name">
              <p>{x.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
