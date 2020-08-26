import React from "react";

import "../Styles/Home.css";

import Card from "../Components/Card.js";

import Carousel from "../Components/Carousel";

//imagenes carouse
import One from "../Assets/Imagenes/PatioCasaArboles.jpeg";
import Two from "../Assets/Imagenes/MedianeraMadera.jpeg";
import Third from "../Assets/Imagenes/PiletaMedianeraMadera.jpeg";
import Four from "../Assets/Imagenes/PatioCasaAmarilla.jpeg";

//imagenes card
import TrabajosImg from "../Assets/Imagenes/PatioCasaArboles.jpeg";
import ServiciosImg from "../Assets/Imagenes/PatioQuinta.jpeg";
import NosotrosImg from "../Assets/Imagenes/PiletaPisoMaderaLejos.jpeg";

const Home = () => {
  return (
    <div className="home">
      <Carousel one={One} two={Two} third={Third} four={Four} />
      <div className="container">
        <div className="row">
          <div className="col">
            <Card
              titulo="Nuestros Trabajos en Imágenes"
              foto={TrabajosImg}
              to="trabajos"
              page="home"
            />
          </div>
          <div className="col">
            <Card
              titulo="Nuestros Servicios"
              foto={ServiciosImg}
              to="servicios"
              page="home"
            />
          </div>
          <div className="col">
            <Card
              titulo="Nosotros"
              foto={NosotrosImg}
              to="nosotros"
              page="home"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
