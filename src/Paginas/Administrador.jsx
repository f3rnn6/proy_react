import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form, Card, Modal } from "react-bootstrap";
import AppNavBar from "../componentes/navbar";
import { validarProducto } from "../utils/validaciones";

// 🔥 API real del backend
import {
  getProductos,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
} from "../api/api";

import "../App.css";

function Administrador() {
  const [productos, setProductos] = useState([]);

  // Estados para CRUD
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: "",
    categoria: "",
    descripcion: "",
    precio: "",
    imagen: "",
    detalle: "",
  });

  const [productoEditado, setProductoEditado] = useState(null);

  const [errores, setErrores] = useState([]);

  const [modalAgregar, setModalAgregar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState({ show: false, id: null });

  // ---------------------------------------------------
  // 🔥 Cargar productos reales desde el backend
  // ---------------------------------------------------
  useEffect(() => {
    const cargar = async () => {
      try {
        const lista = await getProductos();
        setProductos(lista);
      } catch (err) {
        console.error("Error al cargar productos del servidor");
      }
    };

    cargar();
  }, []);

  // ---------------------------------------------------
  // 🟢 CREAR PRODUCTO
  // ---------------------------------------------------
  const handleCrearProducto = async () => {
    const erroresVal = validarProducto(nuevoProducto);
    if (erroresVal.length > 0) {
      setErrores(erroresVal);
      return;
    }

    try {
      const creado = await crearProducto(nuevoProducto);
      setProductos([...productos, creado]);
      setModalAgregar(false);

      setNuevoProducto({
        nombre: "",
        categoria: "",
        descripcion: "",
        precio: "",
        imagen: "",
        detalle: "",
      });

      setErrores([]);

    } catch (err) {
      alert("Error al crear producto");
    }
  };

  // ---------------------------------------------------
  // 🟡 EDITAR PRODUCTO
  // ---------------------------------------------------
  const handleGuardarCambios = async () => {
    if (!productoEditado) return;

    try {
      const actualizado = await actualizarProducto(productoEditado.id, productoEditado);

      setProductos(
        productos.map((p) => (p.id === actualizado.id ? actualizado : p))
      );

      setModalEditar(false);
    } catch (err) {
      alert("Error al actualizar producto");
    }
  };

  // ---------------------------------------------------
  // 🔴 ELIMINAR PRODUCTO
  // ---------------------------------------------------
  const handleEliminar = async () => {
    try {
      await eliminarProducto(modalEliminar.id);

      setProductos(productos.filter((p) => p.id !== modalEliminar.id));
      setModalEliminar({ show: false, id: null });
    } catch (err) {
      alert("Error al eliminar producto");
    }
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4 titulo-pagina">Panel de Administración</h2>

      {/* BOTÓN AGREGAR */}
      <div className="text-end mb-3">
        <Button variant="success" onClick={() => setModalAgregar(true)}>
          + Agregar Producto
        </Button>
      </div>

      {/* LISTA DE PRODUCTOS */}
      <Row>
        {productos.length > 0 ? (
          productos.map((producto) => (
            <Col xs={12} md={6} lg={4} key={producto.id} className="mb-4">
              <Card>
                <Card.Img variant="top" src={producto.imagen} />
                <Card.Body>
                  <Card.Title>{producto.nombre}</Card.Title>
                  <Card.Text>{producto.descripcion}</Card.Text>
                  <Card.Text className="fw-bold">${producto.precio}</Card.Text>

                  <Button
                    variant="primary"
                    className="me-2"
                    onClick={() => {
                      setProductoEditado(producto);
                      setModalEditar(true);
                    }}
                  >
                    Editar
                  </Button>

                  <Button
                    variant="danger"
                    onClick={() => setModalEliminar({ show: true, id: producto.id })}
                  >
                    Eliminar
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center">No hay productos disponibles</p>
        )}
      </Row>

      {/* MODAL AGREGAR */}
      <Modal show={modalAgregar} onHide={() => setModalAgregar(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errores.length > 0 &&
            errores.map((err, i) => (
              <p key={i} className="text-danger">
                {err}
              </p>
            ))}

          <Form>
            {Object.keys(nuevoProducto).map((campo) => (
              <Form.Group className="mb-3" key={campo}>
                <Form.Label>{campo.toUpperCase()}</Form.Label>
                <Form.Control
                  type="text"
                  value={nuevoProducto[campo]}
                  onChange={(e) =>
                    setNuevoProducto({ ...nuevoProducto, [campo]: e.target.value })
                  }
                />
              </Form.Group>
            ))}
          </Form>

          <Button variant="success" onClick={handleCrearProducto}>
            Guardar
          </Button>
        </Modal.Body>
      </Modal>

      {/* MODAL EDITAR */}
      <Modal show={modalEditar} onHide={() => setModalEditar(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productoEditado && (
            <Form>
              {Object.keys(productoEditado).map((campo) =>
                campo === "id" ? null : (
                  <Form.Group className="mb-3" key={campo}>
                    <Form.Label>{campo.toUpperCase()}</Form.Label>
                    <Form.Control
                      type="text"
                      value={productoEditado[campo]}
                      onChange={(e) =>
                        setProductoEditado({
                          ...productoEditado,
                          [campo]: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                )
              )}
            </Form>
          )}

          <Button variant="primary" onClick={handleGuardarCambios}>
            Guardar Cambios
          </Button>
        </Modal.Body>
      </Modal>

      {/* MODAL ELIMINAR */}
      <Modal
        show={modalEliminar.show}
        onHide={() => setModalEliminar({ show: false, id: null })}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Seguro que deseas eliminar este producto?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setModalEliminar({ show: false, id: null })}
          >
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleEliminar}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Administrador;
