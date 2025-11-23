import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function AppCard({ producto }) {
  const [modalAgregado, setModalAgregado] = useState(false);

  const handleAgregarFavorito = () => {
    const favoritosGuardados = JSON.parse(localStorage.getItem("favoritos")) || [];
    const yaExiste = favoritosGuardados.some((item) => item.id === producto.id);

    if (!yaExiste) {
      const nuevosFavoritos = [...favoritosGuardados, producto];
      localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
      setModalAgregado(true);
    } else {
      alert("Este producto ya está en favoritos");
    }
  };

  return (
    <>
      <Card className="tarjeta-producto text-center" style={{ width: "18rem" }}>
        <Card.Img className="imagenes-card" variant="top" src={producto.imagen} />
        <Card.Body>
          <Card.Title style={{ color: "#ffffff" }}>{producto.nombre}</Card.Title>
          <Card.Text style={{ color: "#ffffff" }}>{producto.descripcion}</Card.Text>
          <Card.Text style={{ color: "#ffffff" }}>{producto.precio}</Card.Text>

          <Link to={`/detalleproductos/${producto.id}`}>
            <Button className="boton-primario">
              Ver Detalle
            </Button>
          </Link>

          <Button className="boton-favoritos" onClick={handleAgregarFavorito}>
            ☆
          </Button>
        </Card.Body>
      </Card>

      {modalAgregado && (
        <div className="modal-confirmacion">
          <div className="modal-card">
            <h3>Producto agregado a favoritos</h3>
            <p>{producto.nombre}</p>
            <button
              className="boton-confirmar"
              onClick={() => setModalAgregado(false)}
            >
              Aceptar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AppCard;
