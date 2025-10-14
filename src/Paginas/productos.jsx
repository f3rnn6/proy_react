import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AppNavBar from "../componentes/navbar";
import AppCard from "../componentes/Card";
import AppSearch from "../componentes/SearchBar";
import { productos } from "../data/productos";

function Productos() {

    console.log(productos);
  // Estado para productos filtrados
  const [productosFiltrados, setProductosFiltrados] = useState(productos);

  // Función que se llama cuando escribes en el buscador
  const handleSearch = (texto) => {
    if (!texto.trim()) {
      setProductosFiltrados(productos); // Si está vacío, mostramos todos
    } else {
      const resultado = productos.filter((p) =>
        p.nombre.toLowerCase().includes(texto.toLowerCase())
      );
      setProductosFiltrados(resultado);
    }
  };

  return (
    <Container className="mt-3">
      {/* Navbar */}
      <AppNavBar nombre="Joaquin" />

      {/* Buscador */}
      <AppSearch onSearch={handleSearch} />

      {/* Lista de productos */}
      <Row className="mt-3">
        {productosFiltrados.map((producto) => (
          <Col key={producto.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <AppCard producto={producto} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Productos;
