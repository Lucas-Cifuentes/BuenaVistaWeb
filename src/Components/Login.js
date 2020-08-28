import React, { useState } from "react";

import "../Styles/Login.css";

import "firebase/auth";
import { useFirebaseApp } from "reactfire";
import { Redirect } from "react-router-dom";

const Login = () => {
  const firebase = useFirebaseApp();

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => <Redirect to="/admin" />)
      .catch(() => console.log("Ha ocurrido un error en el inicio de sesion"));
  };

  const handleEmail = (value) => {
    setEmail(value);
  };
  const handlePassword = (value) => {
    setPassword(value);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="card green lighten-2 center">
        <div className="card-content white-text">
          <h4>Inicie Sesion</h4>
          <div className="input-field">
            <input
              type="text"
              id="email"
              className="validate"
              // placeholder="Ingrese su Email"
              onChange={(e) => handleEmail(e.target.value)}
            />
            <label htmlFor="email" className="titulo">
              Email
            </label>
          </div>
          <div className="input-field">
            <input
              type="password"
              id="password"
              className="validate"
              // placeholder="Ingrese su Contraseña"
              onChange={(e) => handlePassword(e.target.value)}
            />
            <label htmlFor="password">Contraseña</label>
          </div>
        </div>
        <div className="card-action">
          <button
            className="btn waves-effect waves-light green lighten-1"
            type="submit"
          >
            Iniciar Sesion
            <i className="material-icons right">send</i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
