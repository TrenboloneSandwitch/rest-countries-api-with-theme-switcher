import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "./context/ThemeContext";
import { CountriesProvider } from "./context/CountriesContext";

ReactDOM.render(
  <ThemeProvider>
    <CountriesProvider>
      <App />
    </CountriesProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
