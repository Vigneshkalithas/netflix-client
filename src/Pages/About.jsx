import React from "react";
import Banner from "../Components/Banner";
import "../Styles/About.css";
import Footer from "../Components/Footer";
function About() {
  return (
    <div>
      <Banner name="About Us" />
      <div className="about-content-head">
        <div className="about-right-content">
          <h2>Welcome to our Netflix</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="about-imag-head">
          <img
            src="https://netflixo.vercel.app/images/about2.jpg"
            alt="about-img"
          />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default About;
