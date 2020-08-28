import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useUser } from "reactfire";

export const PrivateRoute = ({ component, ...options }) => {
  const user = useUser();
  if (user) {
    return <Route {...options} component={component} />;
  } else {
    return <Redirect to="/login" />;
  }
};

export const PublicRoute = ({ component, ...options }) => {
  const user = useUser();
  if (user) {
    return <Redirect to="/admin" />;
  } else {
    return <Route {...options} component={component} />;
  }
};
