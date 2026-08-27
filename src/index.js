import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Button from "./Button";
import Task from "./Task";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Task ready={true} />
    <Task ready={false} />
  </>,
);
