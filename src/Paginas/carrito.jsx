import React, { useState } from "react";

function Carrito() {
  const [carrito, setCarrito] = useState(
    JSON.parse(localStorage.getItem("carrito")) || []
  );

  const guardarCarrito = (nuevoCarrito) => {
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  };

  const aumentar = (id) => {
    const nuevo = carrito.map((item) =>
      item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
    );
    guardarCarrito(nuevo);
  };

  const disminuir = (id) => {
    const nuevo = carrito
      .map((item) =>
        item.id === id
          ? { ...item, cantidad: Math.max(1, item.cantidad - 1) }
          : item
      )
      .filter((item) => item.cantidad > 0);

    guardarCarrito(nuevo);
  };

  const eliminar = (id) => {
    const nuevo = carrito.filter((item) => item.id !== id);
    guardarCarrito(nuevo);
  };

  const calcularTotal = () =>
    carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <div className="carrito-container">
      <h1 className="titulo-pagina">Carrito</h1>

      {carrito.length === 0 ? (
       <div className="favoritos-vacio">
          <div className="favoritos-vacio-card">
            <span className="emoji">💔</span>
            <h2>No tienes productos agregados al carrito</h2>
            <p>Aexplora nuestra pagina y compra tus productos preferidos para verlos aquí ✨</p>
          </div>
        </div>
      ) : (
        <>
          <div className="carrito-lista">
            {carrito.map((item) => (
              <div className="carrito-item" key={item.id}>
                <img
                  className="carrito-item-img"
                  src={item.imagen}
                  alt={item.nombre}
                />

                <div className="carrito-item-content">
                  <h2 className="carrito-item-nombre">{item.nombre}</h2>
                  <p className="carrito-item-precio">Precio: ${item.precio}</p>
                  <p className="carrito-item-cantidad">
                    Cantidad: {item.cantidad}
                  </p>

                  <div className="carrito-item-botones">
                    <button onClick={() => aumentar(item.id)}>+</button>
                    <button onClick={() => disminuir(item.id)}>-</button>
                    <button onClick={() => eliminar(item.id)}>Eliminar</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* TOTAL FINAL */}
          <div className="carrito-total">
            Total: ${calcularTotal()}
          </div>
        </>
      )}
    </div>
  );
}

export default Carrito;
