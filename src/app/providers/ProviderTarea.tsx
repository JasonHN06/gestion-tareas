import React, { useContext, useState } from "react";
import { View } from "../models/View";
import { Tarea } from "../models/Tarea";
import { TareaContext } from "../context/ContextTarea";

export default function ProviderTarea(props: View) {
  const { children } = props;
  const [tareas, setTareas] = useState<Tarea[]>([]);

  function agregarTarea(t: Omit<Tarea, "id">) {
    const newId = tareas.length > 0 ? tareas[tareas.length - 1].id + 1 : 1;
    const nuevaTarea: Tarea = { id: newId, ...t } as Tarea;
    setTareas([...tareas, nuevaTarea]);
  }

  function actualizarTarea(
    tarea: Tarea,
    estado: "pendiente" | "en progreso" | "completada",
  ) {
    const actualizado = tareas.map((t) =>
      t.id === tarea.id ? { ...t, estado } : t,
    );
    setTareas(actualizado);
  }

  function eliminarTarea(id: number) {
    const filtrado = tareas.filter((t) => t.id !== id);
    setTareas(filtrado);
  }

  return (
    <TareaContext.Provider
      value={{ tareas, agregarTarea, eliminarTarea, actualizarTarea }}
    >
      {children}
    </TareaContext.Provider>
  );
}

export function useTarea() {
  return useContext(TareaContext);
}
