export function Greeting({ curso, nombre }) {
  return (
    <h1>
      Componente de <strong>{curso}</strong> para {nombre}
    </h1>
  );
}

export function UserCard({
  name,
  amount,
  married,
  points,
  address: { street, city, state, zip },
}) {
  const promedio =
    points.reduce((total, point) => total + point, 0) / points.length;

  return (
    <>
      <h1>
        user Card {name} {amount} {married ? "casado" : "soltero"}
      </h1>
      <p>Promedio de puntos: {promedio}</p>
      <p>
        Dirección: {street}, {city}, {state}, {zip}
      </p>
    </>
  );
}
