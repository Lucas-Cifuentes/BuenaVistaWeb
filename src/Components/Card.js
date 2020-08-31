import React from "react";

import "../Styles/Card.css";

import { Link } from "react-router-dom";

const Card = ({ foto, titulo, to, page = "trabajos" }) => {
  let link = `/${to}`;
  if (page === "home") {
    return (
      <div className="card">
        <div className="card-image">
          {/* className="materialboxed"  dont work this*/}
          <img src={foto} alt="Foto" />
          <Link to={link}>
            <span className="card-title center">{titulo}</span>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="card">
      <div className="card-image">
        {/* className="materialboxed" dont work this */}
        <img src={foto} alt="Foto" />
      </div>
    </div>
  );
};

export default Card;
