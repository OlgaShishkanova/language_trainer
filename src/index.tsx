import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./scss/custom.scss";
//import AppProviders from "./context";

ReactDOM.render(
  <React.StrictMode>
     <App />
    {/* <AppProviders>
      <App />
    </AppProviders> */}
  </React.StrictMode>,
  document.getElementById("root")
);
