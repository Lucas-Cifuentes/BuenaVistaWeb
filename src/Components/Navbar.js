import React from "react";

import "../Styles/Navbar.css";

import { Link } from "react-router-dom";

import Logo from "../Assets/Logo.png";
import Fondo from "../Assets/Fondo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo hide-on-large-only">
            Buenavista
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/servicios">Servicios</Link>
            </li>
            <li>
              <Link to="/nosotros">Nosotros</Link>
            </li>
            <li>
              <Link to="/trabajos">Trabajos</Link>
            </li>
          </ul>
          <Link to="#" data-target="slide-out" className="sidenav-trigger">
            <i className="material-icons medium">menu</i>
          </Link>
        </div>
      </nav>

      <div>
        <div className="box white-text center hide-on-med-and-down">
          <div className="contenidonav">
            <h1 className="buena">Buenavista</h1>
            <h4 className="parq">Parquizaciones</h4>
          </div>
        </div>
        <img src={Fondo} alt="Fondo" width="100%" />
      </div>
      <div className="imagen center hide-on-med-and-down">
        <img className="logo circle" src={Logo} alt="logo" />
      </div>

      <ul id="slide-out" className="sidenav">
        <li>
          <div className="user-view">
            <div className="background green"></div>
            <span>
              <img className="circle" src={Logo} alt="logo" />
            </span>
            <span className="white-text name">Rodriguez Alejandro</span>
            <span className="white-text email">
              buenavist78@gmail.com buena.vist@hotmail.com.ar
            </span>
          </div>
        </li>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/servicios">Servicios</Link>
        </li>
        <li>
          <Link to="/nosotros">Nosotros</Link>
        </li>
        <li>
          <Link to="/trabajos">Trabajos</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
