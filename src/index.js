import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Posts } from "./Posts";


const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

function Counter() {

  const [valor, setValor] = useState(0);

  useEffect(() => {
    console.log("El valor del contador es: " + valor);
  }, [valor]);

  return (
    <>
      <h1>Contador: {valor}</h1>
      <button onClick={() => setValor(valor + 1)} >Sumar + </button>
      <button onClick={() => setValor(valor - 1)} >Restar -</button>
    </>
  )

}

root.render(
  <>
    <Counter />
  </>,
);
