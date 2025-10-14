import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppNavBar from "../../componentes/navbar";
import AppSearch from "../../componentes/SearchBar";
import AppCard from "../../componentes/Card";
import Footer from "../../componentes/footer";
import { productos as productosOriginales } from "../../data/productos";

function CatalogoAccesorios() {
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  useEffect(() => {
    // Cargar productos de localStorage
    const productosGuardados = JSON.parse(localStorage.getItem("productos"));
    const productosCompletos = productosGuardados && productosGuardados.length
      ? productosGuardados
      : productosOriginales;

    setProductos(productosCompletos);

    // Filtrar solo accesorios
    setProductosFiltrados(productosCompletos.filter(p => p.categoria === "accesorio"));

    // Inicializar localStorage si estaba vacío
    if (!productosGuardados || !productosGuardados.length) {
      localStorage.setItem("productos", JSON.stringify(productosOriginales));
    }
  }, []);

  const handleSearch = (texto) => {
    if (texto.trim() === "") {
      setProductosFiltrados(productos.filter(p => p.categoria === "accesorio"));
    } else {
      const resultado = productos
        .filter(p => p.categoria === "accesorio")
        .filter(p => p.nombre.toLowerCase().includes(texto.toLowerCase()));
      setProductosFiltrados(resultado);
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
        {productosFiltrados.map((accesorio) => (
          <Col key={accesorio.id} md={4} className="mb-3">
            <AppCard producto={accesorio} />
          </Col>
        ))}
      </Row>

      <Footer />
    </Container>
  );
}

export default CatalogoAccesorios;
