import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import AppNavBar from "../componentes/navbar";
import { productos } from "../data/productos";
import "../App.css"


function DetalleProductos() {
  const { id } = useParams(); // 🔹 Obtiene el ID desde la URL
  const producto = productos.find((p) => p.id === parseInt(id)); // 🔹 Busca el producto

  if (!producto) {
    return (
      <Container className="text-center mt-5">
        <AppNavBar />
        <h2>Producto no encontrado 😢</h2>
      </Container>
    );
  }

  return (
    
      <Container className="mt-4 mb-5 detalle-container">
        <AppNavBar />
        <div className="detalle-fondo">
        <Row className="mt-4 detalle-info ">
          <Col md={6}>
            <img
              src={`/${producto.imagen}`}
              alt={producto.nombre}
              className="img-fluid "
            />
          </Col>

          <Col md={6}>
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <h4 className="detalle-precio">{producto.precio}</h4>

            <Button className="mt-3 detalle-btn">
              Agregar al carrito 🛒
            </Button>
            <div className="mt-3 detalles">
              <h3>Detalles del producto</h3>
            <p>
              {producto.detalle ||
                "No hay detalles adicionales disponibles para este producto."}
            </p>
            </div>
          </Col>
        </Row>
        </div>
      </Container>
    
  );
}

export default DetalleProductos;
