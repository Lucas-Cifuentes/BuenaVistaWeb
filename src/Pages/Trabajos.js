import React from "react";

import "../Styles/Trabajos.css";

import Foto from "../Assets/Imagenes/ArbolesCalle.jpeg";
import Foto2 from "../Assets/Imagenes/PiletaEdificios.jpeg";
import Foto3 from "../Assets/Imagenes/PatioJuegos.jpeg";
import Foto4 from "../Assets/Imagenes/PiletaPisoMadera.jpeg";

import Card from "../Components/Card";

const Trabajos = () => {
  return (
    <div className="trabajos center">
      <h1>Nuestros Trabajos</h1>
      <div className="row">
        <div className="col">
          <Card foto={Foto} />
        </div>
        <div className="col">
          <Card foto={Foto2} />
        </div>
        <div className="col">
          <Card foto={Foto3} />
        </div>
        <div className="col">
          <Card foto={Foto4} />
        </div>
      </div>
    </div>
  );
};

export default Trabajos;
