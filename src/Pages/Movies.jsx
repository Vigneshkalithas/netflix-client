import React, { useState, useEffect } from "react";
import "../Styles/Movies.css";
import CardsDetails from "../Components/CardsDetails";
import { CarouselDatas } from "../helper/Carousel";
import Footer from "../Components/Footer";

function Movies() {
  var z = CarouselDatas.length;
  const [count, setCount] = useState(z);
  const [cards, setCards] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedFilterGenre, setSelectedFilterGenre] = useState("all");
  const [show, SetShow] = useState(true);
  const [rolee, SetRolee] = useState();
  const [user, SetUser] = useState(false);
  const [manager, SetManager] = useState(false);
  const [admin, SetAdmin] = useState(false);

  useEffect(() => {
    setCards(CarouselDatas);
    const ROLE = localStorage.getItem("role");
    SetRolee(ROLE);
    if (ROLE == "admin") {
      SetAdmin(true);
    }
    if (ROLE == "manager") {
      SetManager(true);
    }
    if (ROLE == "user") {
      SetUser(true);
    }
  }, []);

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const handleFilterChangeGenre = (event) => {
    setSelectedFilterGenre(event.target.value);
  };
  if (user) {
    var filteredCards =
      selectedFilter === "all"
        ? cards
        : cards.filter((card) => card.cat === selectedFilter);
  }
  if (manager || admin) {
    var filteredCards =
      selectedFilter === "all" || selectedFilterGenre === "all"
        ? cards
        : cards.filter(
            (card) =>
              card.cat === selectedFilter || card.genre === selectedFilterGenre
          );
  }

  // const filteredCardsgenre =
  //   selectedFiltergenre === "all"
  //     ? cards
  //     : filteredCards.filter((card) => card.genre === selectedFiltergenre);

  const SearchByUser = () => {
    SetShow(false);
  };
  return (
    <div>
      <div className="category-bar">
        <div>
          <select name="category" id="category" onChange={handleFilterChange}>
            <option style={{ display: "none" }}>Category</option>
            <option value="all">All</option>
            <option value="Hollywood">Hollywood</option>
            <option value="Bollywood">Bollywood</option>
            <option value="Kollywood">Kollywood</option>
            <option value="Tollywood">Tollywood</option>
            <option value="Malluwood">Malluwood</option>
            <option value="Sandalwood">Sandalwood</option>
          </select>
        </div>
        <div>
          {manager || admin ? (
            <select name="genre" id="genre" onChange={handleFilterChangeGenre}>
              <option style={{ display: "none" }}>Genre</option>
              <option value="Romantic">Romantic</option>
              <option value="Action">Action</option>
              <option value="Thriller">Thriller</option>
              <option value="Adventure">Adventure</option>
              <option value="Western">Western</option>
              <option value="Fantasy">Fantasy</option>
            </select>
          ) : (
            ""
          )}
        </div>
        <div className="searh-btn">
          <button onClick={SearchByUser}>Search</button>
        </div>
      </div>
      <div className="totalmovies">
        Total <span>{show ? CarouselDatas.length : filteredCards.length}</span>{" "}
        items found
      </div>
      <div className="movie-card-head">
        {show ? (
          <CardsDetails Datas={CarouselDatas} />
        ) : (
          <CardsDetails Datas={filteredCards} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Movies;
