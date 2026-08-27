import "./task.css";

function Task({ready}) {
  return (
    <div className="card">
      <h3>Mi primer tarea</h3>
      <p>Esta es mi primera tarea</p>
      <span className = {ready ? "ready" : "not-ready"}>
        {ready ? "✅ Tarea lista" : "❌ - Pendiente"}
      </span>
    </div>
  );
}

export default Task;
