import React from "react";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import PublicRoutes from "./Routes/public.routes";
import PrivateRoutes from "./Routes/private.routes";

function App(props) {
  return (
    <>
      <Navbar />
      <PublicRoutes />
      <PrivateRoutes props={props} />
      <Footer />
    </>
  );
}

export default App;
