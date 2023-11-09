import React from "react";
import ReactDOM from "react-dom/client";
// import BuscadorPeliculas from './components/BuscadorPeliculas'
// import FlexComponent from './components/FlexComponent'
import App from "./App.jsx";
import "./styles/main.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <>
      <App></App>
    </>
  </BrowserRouter>
);
