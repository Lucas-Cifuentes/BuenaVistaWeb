import React from "react";
import { Switch } from "react-router-dom";
import { PrivateRoute } from "./helperRoutes";

import Admin from "../Pages/Admin";

const PrivateRoutes = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/admin" component={Admin} />
    </Switch>
  );
};

export default PrivateRoutes;
