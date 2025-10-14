import React from "react";
import { useParams } from "react-router-dom";
import AppCard from "../componentes/Card";

// Recibe la lista de productos como prop
function DetalleProductos({ productos }) {
  const { id } = useParams(); // id de la URL
  const producto = productos.find((item) => item.id === parseInt(id));

  if (!producto) {
    return <h2>Producto no encontrado 😢</h2>;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
      <AppCard producto={producto} />
    </div>
  );
}

export default DetalleProductos;