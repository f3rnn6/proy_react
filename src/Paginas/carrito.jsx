import React, { useState } from "react";
import Navbar from "../componentes/navbar";

function Carrito() {
    const [carrito, setCarrito] = useState(
        JSON.parse(localStorage.getItem("carrito")) || []
    );

    const [modoEliminar, setModoEliminar] = useState(false);
    const [confirmarEliminar, setConfirmarEliminar] = useState(null);

    const eliminarDelCarrito = (id) => {
        const nuevoCarrito = carrito.filter((item) => item.id !== id);
        setCarrito(nuevoCarrito);
        localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
        setConfirmarEliminar(null);
    };

    // Suma total de precios
    const total = carrito.reduce((sum, producto) => {
        const precioNum = Number(producto.precio.toString().replace(/[^0-9.-]+/g, ""));
        return sum + precioNum;
    }, 0);

    return (
        <>
            <Navbar nombre="Joaquin" />

            <div className="favoritos-header">
                <h2>Mi Carrito 🛒</h2>

                {carrito.length > 0 && (
                    <button
                        className="boton-eliminar-modo"
                        onClick={() => setModoEliminar(!modoEliminar)}
                    >
                        {modoEliminar ? "Cancelar" : "Eliminar productos"}
                    </button>
                )}
            </div>

            {carrito.length === 0 ? (
                <div className="carrito-vacio-wrapper">
                    <div className="carrito-vacio-card">
                        <h2>🛒 Tu carrito está vacío</h2>
                        <p>Agrega productos para verlos aquí.</p>
                    </div>
                </div>
            ) : (
                <div className="carrito-container-grande">

                    <h3 className="titulo-lista">Productos agregados</h3>

                    <div className="carrito-lista">
                        {carrito.map((producto) => (
                            <div className="carrito-card" key={producto.id}>
                                <div className="carrito-card-img">
                                    <img src={`/${producto.imagen}`} alt={producto.nombre} />
                                </div>

                                <div className="carrito-card-info">
                                    <h2>{producto.nombre}</h2>
                                    <p>{producto.descripcion}</p>
                                    <h4 className="carrito-precio">{producto.precio}</h4>

                                    <h3>Detalles del producto</h3>
                                    <p>{producto.detalle}</p>

                                    {modoEliminar && (
                                        <button
                                            className="boton-eliminar-carrito"
                                            onClick={() => setConfirmarEliminar(producto)}
                                        >
                                            Eliminar
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* TOTAL */}
                    <div className="carrito-total">
                        <h2>Total: ${total.toLocaleString()}</h2>
                    </div>
                </div>
            )}

            {/* Modal confirmación */}
            {confirmarEliminar && (
                <div className="modal-confirmacion">
                    <div className="modal-card">
                        <h3>¿Eliminar este producto del carrito?</h3>
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
                                onClick={() => eliminarDelCarrito(confirmarEliminar.id)}
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

export default Carrito;
