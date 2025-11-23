import React, { useState } from "react";
import Navbar from "../componentes/navbar";

function Favoritos() {
  const [favoritos, setFavoritos] = useState(
    JSON.parse(localStorage.getItem("favoritos")) || []
  );

  const eliminar = (id) => {
    const nuevos = favoritos.filter((f) => f.id !== id);
    setFavoritos(nuevos);
    localStorage.setItem("favoritos", JSON.stringify(nuevos));
  };

  return (
    <>
      <h2 className="titulo-pagina">Tus favoritos</h2>

      {favoritos.length === 0 ? (
        <div className="favoritos-vacio">
          <div className="favoritos-vacio-card">
            <span className="emoji">💔</span>
            <h2>No tienes favoritos aún</h2>
            <p>Agrega tus productos preferidos para verlos aquí ✨</p>
          </div>
        </div>
      ) : (

        favoritos.map((producto) => (
          <div className="card-linea" key={producto.id}>
            <img src={producto.imagen} alt={producto.nombre} />

            <div className="card-linea-content">
              <h3>{producto.nombre}</h3>
              <p className="categoria">{producto.categoria}</p>
              <p className="precio">${producto.precio}</p>

              <div className="card-linea-buttons">
                <button className="btn-card">Ver detalles</button>
                <button className="btn-card eliminar" onClick={() => eliminar(producto.id)}>
                  Quitar ❌
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default Favoritos;
