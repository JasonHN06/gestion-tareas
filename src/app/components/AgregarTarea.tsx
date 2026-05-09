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
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Agregar Nueva Tarea</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="titulo" className="block text-sm font-medium mb-2">Título</label>
          <input
            id="titulo"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            type="text"
            placeholder="Lavar los platos"
            value={titulo}
            onChange={(t) => setTitulo(t.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="descripcion" className="block text-sm font-medium mb-2">Descripción</label>
          <textarea
            id="descripcion"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={descripcion}
            onChange={(d) => setDescripcion(d.target.value)}
            rows={4}
            placeholder="Detalles adicionales..."
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="estado" className="block text-sm font-medium mb-2">Estado Inicial</label>
          <select
            id="estado"
            className="cursor-pointer w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={estado}
            onChange={(e) => setEstado(e.target.value as Tarea["estado"]) }
          >
            <option value="pendiente">Pendiente</option>
            <option value="en progreso">En Progreso</option>
            <option value="completada">Completada</option>
          </select>
        </div>
        <button className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors" type="submit">
          Agregar Tarea
        </button>
      </form>
    </div>
  );
}
