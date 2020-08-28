import React from "react";

import "firebase/auth";
import { useFirebaseApp, useUser } from "reactfire";
import { Redirect } from "react-router-dom";

const Admin = () => {
  const firebase = useFirebaseApp();
  const user = useUser();

  const SingOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => <Redirect to="/login" />)
      .catch(() => console.log("Ha ocurrido un error"));
  };

  return (
    <div className="admin">
      <h3>Hola {user.email}</h3>
      <button
        className="btn waves-effect waves-light green lighten-1"
        type="button"
        onClick={SingOut}
      >
        Cerrar Sesion
      </button>
    </div>
  );
};

export default Admin;
