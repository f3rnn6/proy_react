import { useState } from "react";
import { Navbar, Nav, Container, Button, Offcanvas, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AppNavBar({ nombre }) {
  const [show, setShow] = useState(false);

  // 🔥 Carga la cantidad de productos del carrito
  const carritoCount = JSON.parse(localStorage.getItem("carrito"))?.length || 0;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" className="barra-navegacion mb-5">
        <Container fluid="lg">
          <Navbar.Brand as={Link} to="/">Melody Store</Navbar.Brand>
          <Navbar.Text className="titulo-persona">
            Hola {nombre} sigue disfrutando de la musica!
          </Navbar.Text>

          <Nav className="ms-end align-items-center flex-column flex-lg-row align-items-lg-center">
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>

            {/* 🔥 Carrito con contador 🔥 */}
            <Nav.Link as={Link} to="/carrito" className="position-relative">
              Carrito
              {carritoCount > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    right: "-10px",
                    background: "red",
                    color: "white",
                    borderRadius: "50%",
                    padding: "2px 6px",
                    fontSize: "0.75rem",
                    fontWeight: "bold",
                    lineHeight: "1",
                  }}
                >
                  {carritoCount}
                </span>
              )}
            </Nav.Link>

            <Nav.Link as={Link} to="/favoritos">Favoritos</Nav.Link>

            <NavDropdown title="Perfil" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/login">Iniciar sesion</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/administrador">Administrador</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos">Cerrar sesion</NavDropdown.Item>
            </NavDropdown>

            <Button variant="outline-light" onClick={handleShow} className="ms-2">
              Catalogo
            </Button>
          </Nav>
        </Container>
      </Navbar>

      <Offcanvas
        className="offcanvas-custom"
        show={show}
        onHide={handleClose}
        placement="start"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Melody Store</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/catalogobaterias" onClick={handleClose}>Baterias</Nav.Link>
            <Nav.Link as={Link} to="/catalogoguitarras" onClick={handleClose}>Guitarras</Nav.Link>
            <Nav.Link as={Link} to="/catalogoteclados" onClick={handleClose}>Teclados</Nav.Link>
            <Nav.Link as={Link} to="/catalogoaccesorios" onClick={handleClose}>Accesorios</Nav.Link>
          </Nav>

          <div className="mt-auto pb-3">
            <Nav.Link as={Link} to="/ajustes" onClick={handleClose}>
              Contactanos
            </Nav.Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
