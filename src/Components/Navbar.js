import React from "react";

import "../Styles/Navbar.css";

import { Link } from "react-router-dom";

import Logo from "../Assets/Logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="green">
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo">
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
