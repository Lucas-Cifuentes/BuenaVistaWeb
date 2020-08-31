import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import firebaseConfig from "./firebase-config";

import { FirebaseAppProvider } from "reactfire";
import { BrowserRouter } from "react-router-dom";

import Loading from "./Components/Loading";

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <React.StrictMode>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
      </BrowserRouter>
    </React.StrictMode>
  </FirebaseAppProvider>,
  document.getElementById("root")
);
