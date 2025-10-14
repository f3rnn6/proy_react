import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppNavBar from "../../componentes/navbar";
import AppSearch from "../../componentes/SearchBar";
import AppCard from "../../componentes/Card";
import Footer from "../../componentes/footer";
import { productos } from "../../data/productos"; // <-- importamos tus productos

function CatalogoTeclados() {
  // Filtramos solo los accesorios del JSON
  const tecladossData = productos.filter(p => p.categoria === "teclados");

  // Estado para productos filtrados
  const [productosFiltrados, setProductosFiltrados] = useState(tecladossData);

  // Función de búsqueda
  const handleSearch = (texto) => {
    if (texto.trim() === "") {
      setProductosFiltrados(tecladossData); 
    } else {
      const resultado = tecladossData.filter((item) =>
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
        {productosFiltrados.map((teclado) => (
          <Col >
            <AppCard producto={teclado} />
          </Col>
        ))}
      </Row>

      <Footer />
    </Container>
  );
}

export default CatalogoTeclados;
