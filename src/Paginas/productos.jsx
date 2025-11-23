import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AppCard from "../componentes/Card";
import SearchBar from "../componentes/SearchBar";
import "../App.css";
import { getProductos } from "../api/api";

function Productos() {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const cargar = async () => {
      setCargando(true);
      try {
        const data = await getProductos();
        setProductos(data);
      } catch (err) {
        setError("Error al cargar productos del servidor");
      } finally {
        setCargando(false);
      }
    };
    cargar();
  }, []);

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  if (cargando) return <p className="text-center mt-5">Cargando productos...</p>;
  if (error) return <p className="text-center mt-5 text-danger">{error}</p>;

  return (
    <Container>
      <h1 className="mb-4 text-center">Nuestros Productos</h1>

      <SearchBar busqueda={busqueda} setBusqueda={setBusqueda} />

      <div className="grid-productos">
        {productosFiltrados.map((producto) => (
          <div key={producto.id} className="grid-item">
            <AppCard producto={producto} />
          </div>
        ))}
      </div>

    </Container>
  );
}

export default Productos;
