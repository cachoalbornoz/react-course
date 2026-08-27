import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Button from "./Button";
import Task from "./Task";
import {Saludar} from "./Saludar";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Saludar />
    <Task title="Primer tarea" ready={true} />
    <Task title="Segunda tarea" ready={false} />

    <input/>
  </>,
);
