export type Tarea = {
  id: number;
  titulo: string;
  descripcion: string;
  estado: "pendiente" | "en progreso" | "completada";
};
