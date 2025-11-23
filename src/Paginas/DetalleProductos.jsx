import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { getProductoPorId } from "../api/api";
import "../App.css";

function DetalleProductos() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const cargarProducto = async () => {
      try {
        const data = await getProductoPorId(id);
        setProducto(data);
      } catch (err) {
        setError("No se pudo cargar el producto.");
      } finally {
        setCargando(false);
      }
    };

    cargarProducto();
  }, [id]);

  if (cargando) return <p className="text-center mt-5">Cargando...</p>;
  if (error) return <p className="text-center text-danger mt-5">{error}</p>;
  if (!producto) return <p className="text-center mt-5">Producto no encontrado.</p>;

  return (
    <Container className="detalle-container mt-5">
      <Row className="align-items-center">
        
        {/* 🔥 MISMA FORMA QUE EN AppCard */}
        <Col md={6} className="mb-4 text-center">
          <img
            src={producto.imagen.startsWith("/") ? producto.imagen : "/" + producto.imagen}
            alt={producto.nombre}
            className="detalle-imagen"
          />
        </Col>

        <Col md={6}>
          <h4 className="detalle-categoria">{producto.categoria}</h4>
          <h2 className="detalle-nombre">{producto.nombre}</h2>
          <h3 className="detalle-precio">${producto.precio}</h3>
          <p className="detalle-descripcion">{producto.descripcion}</p>
          <p className="detalle-detalle">{producto.detalle}</p>

          <Button className="boton-primario mt-3">Agregar al carrito</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default DetalleProductos;
