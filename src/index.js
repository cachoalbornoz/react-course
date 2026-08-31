import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Posts } from "./Posts";


const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

function Counter() {

  const [mensaje, setMensaje] = useState(null);

  return (
    <>
      <input onChange={(e) => setMensaje(e.target.value)} />
      <button onClick={() => alert(mensaje)} >Mostrar</button>
    </>
  )

}

root.render(
  <>
    <Counter />
  </>,
);
