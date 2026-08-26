import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, Encabezado } from "./Greeting";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Encabezado />
    <Greeting />
  </>
);
