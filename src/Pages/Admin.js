import React from "react";

import "../Styles/Admin.css";

import "firebase/auth";
import { useFirebaseApp, useUser } from "reactfire";
import { Redirect, Link } from "react-router-dom";

const Admin = () => {
  const firebase = useFirebaseApp();
  const user = useUser();

  const SingOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => <Redirect to="/" />)
      .catch(() => console.log("Ha ocurrido un error"));
  };

  return (
    <div className="container center">
      <div className="admin">
        <div className="row">
          <h3>Sesion Iniciada con el Email:</h3>
          <h3>{user.email}</h3>
          <div className="col s6">
            <button
              className="btn waves-effect waves-light red"
              type="button"
              onClick={SingOut}
            >
              Cerrar Sesion
            </button>
          </div>
          <div className="col s6">
            <Link
              to="agregar-trabajo"
              type="button"
              className="btn waves-effect waves-light green lighten-1"
            >
              Añadir un Trabajo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
