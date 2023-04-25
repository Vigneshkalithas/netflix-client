import React from "react";
import Navbar from "../Components/Navbar";
import "../Styles/Home.css";
import Carousels from "../Components/Carousels";
import Cards from "../Components/Cards";
import Content from "../Components/Contents";
import Footer from "../Components/Footer";
// import logo from "../assets/Netflix_2015_logo.svg";

function Home() {
  return (
    <div className="Home-head">
      {/* <div className="nav-head">
        <h1 className="logo">
          <img src={logo} />
        </h1>
        <button>signin</button>
      </div> */}
      {/* <Navbar /> */}
      <Carousels />
      <Cards />
      <Content />
      <Footer />
    </div>
  );
}

export default Home;
