import React from "react";

import { Carousel } from "react-responsive-carousel";
import "../Styles/Carousel.css";
import { MdCalendarMonth } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { CarouselDatas } from "../helper/Carousel";
function Carousels() {
  return (
    <Carousel
      axis="axis"
      autoPlay="autoPlay"
      dynamicHeight={false}
      infiniteLoop={true}
      interval={2000}
      verticalSwipe="natural"

      // labels={false}
      // showArrows={false}
      // showStatus={false}
      // showIndicators={false}
      // showThumbs={false}
      // width={400}
    >
      {CarouselDatas.map((x, index) => {
        return (
          <div className="images-headd-carousel" key={index}>
            <img src={x.src} />
            <div className="linear-bg">
              <div className="d-start">
                <div className="d-flex column gap-5 bg-pos">
                  <div className="headline">{x.name}</div>
                  <div className="d-flex jc-spaceBetween">
                    <div>{x.genre}</div>
                    <div className="d-flex gap-2">
                      <div className="icon">
                        <MdCalendarMonth />
                      </div>
                      <div>{x.year}</div>
                    </div>
                    <div className="d-flex gap-2">
                      <div className="icon">
                        <FaClock />
                      </div>
                      <div>{`${x.duration}hr`}</div>
                    </div>
                  </div>
                  <div className="d-flex gap-10">
                    <div>
                      <button className="watch-btn">watch</button>
                    </div>
                    <div className="heart-icon">
                      <AiFillHeart />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* <div className="images-headd-carousel">
        <img src="https://netflixo.vercel.app/images/movies/1.jpg" />
      </div>
      <div className="images-headd-carousel">
        <img src="https://netflixo.vercel.app/images/movies/3.jpg" />
      </div>
      <div className="images-headd-carousel">
        <img src="https://netflixo.vercel.app/images/movies/6.jpg" />
      </div>
      <div className="images-headd-carousel">
        <img src="https://netflixo.vercel.app/images/movies/4.jpg" />
      </div>
      <div className="images-headd-carousel">
        <img src="https://netflixo.vercel.app/images/movies/5.jpg" />
      </div> */}
    </Carousel>
  );
}

export default Carousels;
