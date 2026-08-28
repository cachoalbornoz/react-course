import React from "react";
import ReactDOM from "react-dom/client";
import { Posts } from "./Posts";

const users = [
  {
    id: 1,
    name: "Pato Albornoz",
    image: "https://robohash.org/user1"
  },
  {
    id: 2,
    name: "Guille Albornoz",
    image: "https://robohash.org/user2"
  },
  {
    id: 3,
    name: "Teo Albornoz",
    image: "https://robohash.org/user3"
  },
];


const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("No se encontró el elemento #root");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <>
    {users.map(user => {
      
    })}
  </>,
);
