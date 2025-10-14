import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppNavBar from "../../componentes/navbar";
import AppSearch from "../../componentes/SearchBar";
import AppCard from "../../componentes/Card";
import Footer from "../../componentes/footer";
import { productos } from "../../data/productos"; // <-- importamos tus productos

function CatalogoAccesorios() {
  // Filtramos solo los accesorios del JSON
  const accesoriosData = productos.filter(p => p.categoria === "accesorio");

  // Estado para productos filtrados
  const [productosFiltrados, setProductosFiltrados] = useState(accesoriosData);

  // Función de búsqueda
  const handleSearch = (texto) => {
    if (texto.trim() === "") {
      setProductosFiltrados(accesoriosData); 
    } else {
      const resultado = accesoriosData.filter((item) =>
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
        {productosFiltrados.map((accesorio) => (
          <Col >
            <AppCard producto={accesorio} />
          </Col>
        ))}
      </Row>

      <Footer />
    </Container>
  );
}

export default CatalogoAccesorios;
