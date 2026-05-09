"use client";
import { useState } from 'react';
import { useTarea } from '../providers/ProviderTarea';
import { Tarea } from '../models/Tarea';

export default function ListaTarea() {
    const { tareas, eliminarTarea, actualizarTarea } = useTarea();
    const [editandoId, setEditandoId] = useState<number | null>(null);
    const [nuevoEstado, setNuevoEstado] = useState<Tarea["estado"]>("pendiente");

    const handleEditarEstado = (tarea: Tarea) => {
      setEditandoId(tarea.id);
      setNuevoEstado(tarea.estado);
    };

    const handleGuardarEstado = (tarea: Tarea) => {
      actualizarTarea(tarea, nuevoEstado);
      setEditandoId(null);
    };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Lista de Tareas</h3>
      {tareas.length === 0 ? (
        <p className="text-gray-400 text-center py-5">
          No hay tareas. ¡Crea una para comenzar!
        </p>
      ) : (
        <ul className="space-y-3">
          {tareas.map((tarea) => (
            <li key={tarea.id} className="bg-white border border-gray-200 rounded-lg p-4 flex justify-between items-start">
              <div className="flex-1">
                <h5 className="font-semibold text-base mb-1">{tarea.titulo}</h5>
                <p className="text-gray-600 text-sm mb-3">{tarea.descripcion}</p>
                <div className="flex items-center gap-3">
                  {editandoId === tarea.id ? (
                    <>
                      <select
                        className="px-2 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={nuevoEstado}
                        onChange={(e) => setNuevoEstado(e.target.value as Tarea["estado"])}
                      >
                        <option value="pendiente">Pendiente</option>
                        <option value="en progreso">En Progreso</option>
                        <option value="completada">Completada</option>
                      </select>
                      <button
                        className="cursor-pointer px-3 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors"
                        onClick={() => handleGuardarEstado(tarea)}
                      >
                        Guardar
                      </button>
                      <button
                        className="cursor-pointer px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-md hover:bg-gray-300 transition-colors"
                        onClick={() => setEditandoId(null)}
                      >
                        Cancelar
                      </button>
                    </>
                  ) : (
                    <>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                        tarea.estado === "completada" 
                          ? "bg-green-100 text-green-800"
                          : tarea.estado === "en progreso"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-gray-100 text-gray-800"
                      }`}>
                        {tarea.estado}
                      </span>
                      <button
                        className="cursor-pointer px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-md hover:bg-gray-300 transition-colors"
                        onClick={() => handleEditarEstado(tarea)}
                      >
                        Editar
                      </button>
                    </>
                  )}
                </div>
              </div>
              <div className="ml-4">
                <button
                  className="cursor-pointer px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition-colors"
                  onClick={() => eliminarTarea(tarea.id)}
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
