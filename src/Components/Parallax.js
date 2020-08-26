import React from "react";

import Foto from "../Assets/Imagenes/MedianeraMadera.jpeg";

const Parallax = () => {
  return (
    <div className="parallax-container">
      <div className="parallax">
        <img src={Foto} alt="parallax" />
      </div>
    </div>
  );
};

export default Parallax;
