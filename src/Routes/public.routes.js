import React from "react";
import { Switch } from "react-router-dom";
import { PublicRoute } from "./helperRoutes";

import Home from "../Pages/Home";
import Servicios from "../Pages/Servicios";
import Nosotros from "../Pages/Nosotros";
import Trabajos from "../Pages/Trabajos";
import Login from "../Components/Login";

const PublicRoutes = () => {
  return (
    <Switch>
      <PublicRoute exact path="/" component={Home} />
      <PublicRoute exact path="/servicios" component={Servicios} />
      <PublicRoute exact path="/nosotros" component={Nosotros} />
      <PublicRoute exact path="/trabajos" component={Trabajos} />
      <PublicRoute exact path="/login" component={Login} />
    </Switch>
  );
};

export default PublicRoutes;
