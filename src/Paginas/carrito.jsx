import { useEffect, useState } from "react";
import { getCarrito, vaciarCarrito } from "../api/api";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useAuth } from "../auth/AuthContext";
import { Navigate } from "react-router-dom";

function Carrito() {
  const { isAuthenticated } = useAuth();
  const [carrito, setCarrito] = useState(null);
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(true);

  // 🔐 Ruta protegida: si no está logueado → fuera
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  // 📦 Cargar carrito real
  useEffect(() => {
    const cargar = async () => {
      try {
        const data = await getCarrito();
        setCarrito(data);
      } catch (err) {
        setError("Error al cargar tu carrito.");
      } finally {
        setCargando(false);
      }
    };

    cargar();
  }, []);

  const handleVaciar = async () => {
    try {
      const newCarrito = await vaciarCarrito();
      setCarrito(newCarrito);
    } catch {
      alert("Error al vaciar el carrito");
    }
  };

  if (cargando) return <p className="text-center mt-5">Cargando carrito...</p>;
  if (error) return <p className="text-center text-danger">{error}</p>;
  if (!carrito) return <p className="text-center mt-5">Carrito vacío.</p>;

  return (
    <Container className="mt-5">
      <h2>Tu Carrito</h2>

      {carrito.items?.length === 0 ? (
        <p className="mt-4">Tu carrito está vacío.</p>
      ) : (
        <>
          <Row className="mt-4">
            {carrito.items?.map((item) => (
              <Col xs={12} className="mb-3" key={item.id}>
                <div className="border rounded p-3 d-flex justify-content-between">
                  <div>
                    <h5>{item.producto.nombre}</h5>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>Subtotal: ${item.subtotal}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          <h4 className="mt-4">Total: ${carrito.total}</h4>

          <Button variant="danger" className="mt-3" onClick={handleVaciar}>
            Vaciar carrito
          </Button>
        </>
      )}
    </Container>
  );
}

export default Carrito;
