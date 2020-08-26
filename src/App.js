import React from "react";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Nosotros from "./Pages/Nosotros";
import Servicios from "./Pages/Servicios";
import Trabajos from "./Pages/Trabajos";

import { useFirebaseApp } from "reactfire";

function App() {
  const firebase = useFirebaseApp();
  console.log(firebase);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/Servicios" component={Servicios} />
        <Route path="/nosotros" component={Nosotros} />
        <Route path="/trabajos" component={Trabajos} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
