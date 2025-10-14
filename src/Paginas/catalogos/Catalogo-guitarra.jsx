import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppNavBar from "../../componentes/navbar";
import AppSearch from "../../componentes/SearchBar";
import AppCard from "../../componentes/Card";
import Footer from "../../componentes/footer";
import { productos } from "../../data/productos"; // <-- importamos tus productos

function CatalogoGuitarras() {
  // Filtramos solo los accesorios del JSON
  const guitarrasData = productos.filter(p => p.categoria === "guitarras y bajos");

  // Estado para productos filtrados
  const [productosFiltrados, setProductosFiltrados] = useState(guitarrasData);

  // Función de búsqueda
  const handleSearch = (texto) => {
    if (texto.trim() === "") {
      setProductosFiltrados(guitarrasData); 
    } else {
      const resultado = guitarrasData.filter((item) =>
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
        {productosFiltrados.map((guitarra) => (
          <Col >
            <AppCard producto={guitarra} />
          </Col>
        ))}
      </Row>

      <Footer />
    </Container>
  );
}

export default CatalogoGuitarras;