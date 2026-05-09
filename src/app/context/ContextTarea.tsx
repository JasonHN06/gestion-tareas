"use client";
import { createContext } from "react";
import { Tarea } from "../models/Tarea";

export const TareaContext = createContext({
  tareas: [] as Tarea[],
  agregarTarea: (tarea: Omit<Tarea, "id">) => {},
  eliminarTarea: (id: number) => {},
  actualizarTarea: (
    tarea: Tarea,
    estado: "pendiente" | "en progreso" | "completada",
  ) => {},
});
