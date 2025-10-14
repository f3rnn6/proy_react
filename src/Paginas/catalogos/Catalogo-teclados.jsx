import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppNavBar from "../../componentes/navbar";
import AppSearch from "../../componentes/SearchBar";
import AppCard from "../../componentes/Card";
import Footer from "../../componentes/footer";
import { productos as productosOriginales } from "../../data/productos";

function CatalogoTeclados() {
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  useEffect(() => {
    const productosGuardados = JSON.parse(localStorage.getItem("productos"));
    const productosCompletos = productosGuardados?.length
      ? productosGuardados
      : productosOriginales;

    setProductos(productosCompletos);
    setProductosFiltrados(productosCompletos.filter(p => p.categoria === "teclados"));

    if (!productosGuardados?.length) {
      localStorage.setItem("productos", JSON.stringify(productosOriginales));
    }
  }, []);

  const handleSearch = (texto) => {
    if (!texto.trim()) {
      setProductosFiltrados(productos.filter(p => p.categoria === "teclados"));
    } else {
      setProductosFiltrados(
        productos
          .filter(p => p.categoria === "teclados")
          .filter(p => p.nombre.toLowerCase().includes(texto.toLowerCase()))
      );
    }
  };

  return (
    <Container>
      <Row>
        <AppNavBar nombre="Joaquin" />
      </Row>

      <Row>
        <AppSearch onSearch={handleSearch} />
      </Row>

      <Row>
        {productosFiltrados.map((item) => (
          <Col key={item.id} md={4} className="mb-3">
            <AppCard producto={item} />
          </Col>
        ))}
      </Row>

      <Footer />
    </Container>
  );
}

export default CatalogoTeclados;
