"use client";
import AgregarTarea from "./components/AgregarTarea";
import ListaTarea from "./components/ListaTarea";
import ProviderTarea from "./providers/ProviderTarea";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-center my-4">Gestión de Tareas</h1>
        <div className="container">
          <ProviderTarea>
            <div className="row">
              <div className="col-md-6">
                <AgregarTarea />
              </div>
              <div className="col-md-6">
                <ListaTarea />
              </div>
            </div>
          </ProviderTarea>
        </div>
      </main>
    </div>
  );
}
