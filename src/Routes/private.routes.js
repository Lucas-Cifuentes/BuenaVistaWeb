import React from "react";
import { Switch } from "react-router-dom";
import { PrivateRoute } from "./helperRoutes";

import Admin from "../Pages/Admin";
import AgregarTrabajos from "../Pages/AgregarTrabajos";

const PrivateRoutes = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/admin" component={Admin} />
      <PrivateRoute exact path="/agregar-trabajo" component={AgregarTrabajos} />
    </Switch>
  );
};

export default PrivateRoutes;
