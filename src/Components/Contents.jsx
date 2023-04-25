import React from "react";
import "../Styles/content.css";
import { MdMovieCreation } from "react-icons/md";
function Contents() {
  return (
    <div className="content-head">
      <div className="contents">
        <div className="content-right">
          <h1>Download Your Movies Watch Offline. Enjoy On Your Mobile</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>
          <div className="content-buttons">
            <button>HD 4K</button>
            <button className="quality">
              <MdMovieCreation />
              2K
            </button>
          </div>
        </div>
        <div className="content-left">
          <div>
            <img src="https://netflixo.vercel.app/images/mobile.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contents;
