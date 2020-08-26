import React from "react";

const Carousel = () => {
  return (
    <div className="carousel carousel-slider center">
      <div className="carousel-item red white-text">
        <h2>First Panel</h2>
        <p className="white-text">This is your first panel</p>
      </div>
      <div className="carousel-item amber white-text">
        <h2>Second Panel</h2>
        <p className="white-text">This is your second panel</p>
      </div>
      <div className="carousel-item green white-text">
        <h2>Third Panel</h2>
        <p className="white-text">This is your third panel</p>
      </div>
      <div className="carousel-item blue white-text">
        <h2>Fourth Panel</h2>
        <p className="white-text">This is your fourth panel</p>
      </div>
    </div>
  );
};

export default Carousel;
