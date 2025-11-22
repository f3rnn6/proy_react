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
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="img-fluid rounded"
          />
        </Col>

        <Col md={6}>
          <h2>{producto.nombre}</h2>
          <p className="text-muted">{producto.categoria}</p>
          <h4 className="text-primary">${producto.precio}</h4>
          <p>{producto.descripcion}</p>
          <p>{producto.detalle}</p>

          {/* Próximo paso: conectar botón al carrito */}
          <Button variant="primary">Agregar al carrito</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default DetalleProductos;
