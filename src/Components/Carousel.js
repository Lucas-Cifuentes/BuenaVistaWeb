import React from "react";

import "../Styles/Carousel.css";

const Carousel = ({ one, two, third, four }) => {
  return (
    <div className="carousel carousel-slider center">
      <div className="carousel-item red white-text">
        <img src={one} alt="one" height="100%" />
      </div>
      <div className="carousel-item amber white-text">
        <img src={two} alt="one" height="100%" />
      </div>
      <div className="carousel-item green white-text">
        <img src={third} alt="one" height="100%" />
      </div>
      <div className="carousel-item blue white-text">
        <img src={four} alt="one" height="100%" />
      </div>
    </div>
  );
};

export default Carousel;
