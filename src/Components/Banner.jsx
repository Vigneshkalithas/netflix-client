import React from "react";

function Banner({ name }) {
  const bannerHead = {};
  return (
    <div className="banner-head">
      <div style={{ width: "100%" }}>
        <img
          src="https://netflixo.vercel.app/images/head.png"
          alt="aboutus-banner"
          style={{ width: "100%", borderRadius: "5px" }}
        />
        <div
          style={{
            color: "white",
            position: "absolute",
            top: "198px",
            left: "610px",
          }}
        >
          {" "}
          <h1
            style={{
              fontSize: "2.6rem",
              fontWeight: "700",
              letterSpacing: "0.7px",
            }}
          >
            {name}
          </h1>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Banner;
