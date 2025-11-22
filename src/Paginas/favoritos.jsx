import React, { useState } from "react";
import Navbar from "../componentes/navbar";
import AppCard from "../componentes/Card";

function Favoritos() {
  const [favoritos, setFavoritos] = useState(
    JSON.parse(localStorage.getItem("favoritos")) || []
  );
  const [modoEliminar, setModoEliminar] = useState(false);

  const [confirmarEliminar, setConfirmarEliminar] = useState(null);

  const eliminarFavorito = (id) => {
    const nuevosFavoritos = favoritos.filter((item) => item.id !== id);
    setFavoritos(nuevosFavoritos);
    localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
    setConfirmarEliminar(null); // cerrar modal
  };

  return (
    <>

      <div className="favoritos-header">
        {favoritos.length > 0 && (
          <button
            className="boton-eliminar-modo"
            onClick={() => setModoEliminar(!modoEliminar)}
          >
            {modoEliminar ? "Cancelar" : "Eliminar favoritos"}
          </button>
        )}
      </div>

      <div className="favoritos-lista">
        {favoritos.length === 0 ? (
          <div className="mensaje-vacio-card">
            <h2>💔 No tienes favoritos aún</h2>
            <p>Agrega tus productos preferidos para verlos aquí ✨</p>
          </div>
        ) : (
          favoritos.map((favorito) => (
            <div className="card-wrapper" key={favorito.id}>
              <AppCard producto={favorito} />
              {modoEliminar && (
                <button
                  className="boton-x"
                  onClick={() => setConfirmarEliminar(favorito)}
                >
                  ❌
                </button>
              )}
            </div>
          ))
        )}
      </div>

      {/* Modal de confirmación */}
      {confirmarEliminar && (
        <div className="modal-confirmacion">
          <div className="modal-card">
            <h3>¿Eliminar este producto?</h3>
            <p>{confirmarEliminar.nombre}</p>
            <div className="modal-buttons">
              <button
                className="boton-cancelar"
                onClick={() => setConfirmarEliminar(null)}
              >
                Cancelar
              </button>
              <button
                className="boton-confirmar"
                onClick={() => eliminarFavorito(confirmarEliminar.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Favoritos;
