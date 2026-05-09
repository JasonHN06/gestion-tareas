"use client";
import { useTarea } from '../providers/ProviderTarea';

export default function ListaTarea() {
    const { tareas, eliminarTarea, actualizarTarea } = useTarea();
  return (
    <div>
      <h3>Lista de Tareas</h3>
      <ul className="list-group">
        {tareas.map((tarea) => (
          <li key={tarea.id} className="list-group-item">
            <h5>{tarea.titulo}</h5>
            <p>{tarea.descripcion}</p>
            <span className={`badge ${tarea.estado === "completada" ? "bg-success" : tarea.estado === "en progreso" ? "bg-warning" : "bg-secondary"}`}>
              {tarea.estado}
            </span>
            <button
              className="btn btn-danger btn-sm ms-2"
              onClick={() => eliminarTarea(tarea.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
