import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form, Card, Modal } from "react-bootstrap";
import AppNavBar from "../componentes/navbar";
import { productos as productosOriginales } from "../data/productos";
import { validarProducto } from "../utils/validaciones";
import "../App.css";

function Administrador() {
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: "",
    categoria: "",
    descripcion: "",
    precio: "",
    imagen: "",
    detalle: "",
  });
  const [errores, setErrores] = useState({});
  const [touched, setTouched] = useState({});
  const [modalEliminar, setModalEliminar] = useState({ show: false, id: null });

  useEffect(() => {
    const productosGuardados = JSON.parse(localStorage.getItem("productos"));
    const productosCompletos = productosGuardados?.length
      ? productosGuardados
      : productosOriginales;
    setProductos(productosCompletos);

    if (!productosGuardados?.length) {
      localStorage.setItem("productos", JSON.stringify(productosOriginales));
    }
  }, []);

  const guardarProductos = (productosActualizados) => {
    setProductos(productosActualizados);
    localStorage.setItem("productos", JSON.stringify(productosActualizados));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nuevoEstado = { ...nuevoProducto, [name]: value };
    setNuevoProducto(nuevoEstado);
    setErrores(validarProducto(nuevoEstado));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
  };

  const handleAgregar = () => {
    const validacion = validarProducto(nuevoProducto);
    setErrores(validacion);

    if (Object.keys(validacion).length > 0) return;

    const idNuevo = productos.length ? Math.max(...productos.map(p => p.id)) + 1 : 1;
    const productoParaAgregar = { ...nuevoProducto, id: idNuevo };

    guardarProductos([...productos, productoParaAgregar]);

    setNuevoProducto({
      nombre: "",
      categoria: "",
      descripcion: "",
      precio: "",
      imagen: "",
      detalle: "",
    });
    setTouched({});
  };

  const confirmarEliminar = (id) => {
    setModalEliminar({ show: true, id });
  };

  const handleEliminar = () => {
    const productosActualizados = productos.filter(p => p.id !== modalEliminar.id);
    guardarProductos(productosActualizados);
    setModalEliminar({ show: false, id: null });
  };

  return (
    <Container fluid className="my-4">
      <AppNavBar nombre="Admin" />
      <h2 className="text-center text-warning my-3 bg-dark">Panel de Administración</h2>

      <Card className="mb-4 p-3 bg-dark text-white shadow-sm">
        <h4 className="text-warning mb-3">Agregar Producto</h4>
        <Row className="g-2">
          <Col md={3}>
            <Form.Control
              placeholder="Nombre"
              name="nombre"
              value={nuevoProducto.nombre}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.nombre && errores.nombre && <small className="text-danger">{errores.nombre}</small>}
          </Col>

          <Col md={2}>
            <Form.Control
              placeholder="Categoría"
              name="categoria"
              value={nuevoProducto.categoria}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.categoria && errores.categoria && <small className="text-danger">{errores.categoria}</small>}
          </Col>

          <Col md={3}>
            <Form.Control
              placeholder="Descripción"
              name="descripcion"
              value={nuevoProducto.descripcion}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.descripcion && errores.descripcion && <small className="text-danger">{errores.descripcion}</small>}
          </Col>

          <Col md={1}>
            <Form.Control
              placeholder="Precio"
              name="precio"
              value={nuevoProducto.precio}
              onChange={handleChange}
              type="number"
            />
          </Col>

          <Col md={2}>
            <Form.Control
              placeholder="Imagen (ruta)"
              name="imagen"
              value={nuevoProducto.imagen}
              onChange={handleChange}
            />
          </Col>

          <Col md={1}>
            <Button variant="warning" className="w-100" onClick={handleAgregar}>
              Agregar
            </Button>
          </Col>
        </Row>

        <Form.Group className="mt-2">
          <Form.Control
            placeholder="Detalle del producto"
            name="detalle"
            value={nuevoProducto.detalle}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.detalle && errores.detalle && <small className="text-danger">{errores.detalle}</small>}
        </Form.Group>
      </Card>

      {/* Listado de Productos */}
      <Row className="g-3" style={{ maxHeight: "70vh", overflowY: "auto" }}>
        {productos.map((p) => (
          <Col md={4} key={p.id}>
            <Card
              className="h-100 shadow-sm border-warning"
              data-testid="producto-card" // <-- agregado para los tests
            >
              {p.imagen && <Card.Img variant="top" src={`/${p.imagen}`} className="producto-img" />}
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title data-testid="producto-nombre" className="text-warning">
                    {p.nombre}
                  </Card.Title>

                  <Card.Text>{p.descripcion}</Card.Text>
                  <Card.Text className="fw-bold">{p.precio}</Card.Text>
                </div>
                <Button data-testid="btn-eliminar-producto"
                  variant="danger" onClick={() => confirmarEliminar(p.id)}>Eliminar</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>


      {/* Modal de confirmación */}
      <Modal show={modalEliminar.show} onHide={() => setModalEliminar({ show: false, id: null })} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Seguro que deseas eliminar este producto?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalEliminar({ show: false, id: null })}>Cancelar</Button>
          <Button  variant="danger" onClick={handleEliminar}>Eliminar</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Administrador;
