"use client";
import React, { useState } from "react";
import { useTarea } from "../providers/ProviderTarea";
import { Tarea } from "../models/Tarea";

export default function AgregarTarea() {
  const { agregarTarea } = useTarea();
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [estado, setEstado] = useState<Tarea["estado"]>("pendiente");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!titulo.trim()) return;

    agregarTarea({
      titulo: titulo.trim(),
      descripcion: descripcion.trim(),
      estado,
    });

    setTitulo("");
    setDescripcion("");
    setEstado("pendiente");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Agregar Nueva Tarea</h3>
      <div>
        <input
          className="form-control"
          type="text"
          placeholder="Titulo"
          value={titulo}
          onChange={(t) => setTitulo(t.target.value)}
        />
      </div>
      <div>
        <textarea
          className="form-control"
          id="descripcion"
          value={descripcion}
          onChange={(d) => setDescripcion(d.target.value)}
          rows={4}
        ></textarea>
      </div>
      <div>
        <select
          className="form-select"
          value={estado}
          onChange={(e) => setEstado(e.target.value as Tarea["estado"]) }
        >
          <option value="pendiente">Pendiente</option>
          <option value="en progreso">En Progreso</option>
          <option value="completada">Completada</option>
        </select>
      </div>
      <div>
        <button className="btn btn-primary mt-2" type="submit">
          Agregar Tarea
        </button>
      </div>
    </form>
  );
}
