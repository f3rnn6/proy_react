import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppNavBar from "../../componentes/navbar";
import AppSearch from "../../componentes/SearchBar";
import AppCard from "../../componentes/Card";
import Footer from "../../componentes/footer";
import { productos } from "../../data/productos"; // <-- importamos tus productos

function CatalogoBaterias() {
  // Filtramos solo los accesorios del JSON
  const bateriaData = productos.filter(p => p.categoria === "bateria");

  // Estado para productos filtrados
  const [productosFiltrados, setProductosFiltrados] = useState(bateriaData);

  // Función de búsqueda
  const handleSearch = (texto) => {
    if (texto.trim() === "") {
      setProductosFiltrados(bateriaData); 
    } else {
      const resultado = bateriaData.filter((item) =>
        item.nombre.toLowerCase().includes(texto.toLowerCase())
      );
      setProductosFiltrados(resultado);
    }
  };

  return (
    <Container >
      <Row >
        <AppNavBar nombre="Joaquin" />
      </Row>

      <Row>
        <AppSearch onSearch={handleSearch} />
      </Row>

      <Row >
        {productosFiltrados.map((bateria) => (
          <Col >
            <AppCard producto={bateria} />
          </Col>
        ))}
      </Row>

      <Footer />
    </Container>
  );
}

export default CatalogoBaterias;
