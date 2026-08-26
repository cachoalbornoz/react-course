import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <UserCard
      name="Guillermo"
      amount={3000}
      married={true}
      points={[10, 20, 30]}
      address={{
        street: "123 Main St",
        city: "Paraná",
        state: "Entre Rios",
        zip: "3100",
      }}
    />
    <UserCard
      name="Patricio"
      amount={2000}
      married={true}
      points={[40, 50, 60]}
      address={{
        street: "Baez 485",
        city: "Ciudad de Buenos Aires",
        state: "Buenos Aires",
        zip: "1425",
      }}
    />
    <UserCard
      name="Ana"
      amount={1000}
      married={false}
      points={[70, 80, 90]}
      address={{
        street: "Av. de Mayo 1000",
        city: "Buenos Aires",
        state: "Buenos Aires",
        zip: "1000",
      }}
    />
  </>,
);
