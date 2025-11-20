import { useState } from "react";
import { Navbar, Nav, Container, Button, Offcanvas, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AppNavBar({ nombre }) {
  const [show, setShow] = useState(false);

  const carritoCount = JSON.parse(localStorage.getItem("carrito"))?.length || 0;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" className="barra-navegacion mb-5">
        <Container fluid="lg">
          <Navbar.Brand as={Link} to="/">Melody Store</Navbar.Brand>

          <Navbar.Text className="titulo-persona">
            Hola {nombre} sigue disfrutando de la música!
          </Navbar.Text>

          <Nav className="ms-end align-items-center flex-column flex-lg-row align-items-lg-center">
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>

            <Nav.Link as={Link} to="/carrito" className="position-relative">
              Carrito
              {carritoCount > 0 && (
                <span className="contador-carrito">{carritoCount}</span>
              )}
            </Nav.Link>

            <Nav.Link as={Link} to="/favoritos">Favoritos</Nav.Link>

            <NavDropdown
              title={<span className="perfil-texto">Perfil</span>}
              id="basic-nav-dropdown"
              menuVariant="dark"
              className="perfil-dropdown"
            >
              <NavDropdown.Item as={Link} to="/login" className="perfil-item">
                Iniciar sesión
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/administrador" className="perfil-item">
                Administrador
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item as={Link} to="/productos" className="perfil-item">
                Cerrar sesión
              </NavDropdown.Item>
            </NavDropdown>

            <Button variant="outline-light" onClick={handleShow} className="ms-2">
              Catálogo
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
            <Nav.Link as={Link} to="/catalogobaterias" onClick={handleClose}>Baterías</Nav.Link>
            <Nav.Link as={Link} to="/catalogoguitarras" onClick={handleClose}>Guitarras</Nav.Link>
            <Nav.Link as={Link} to="/catalogoteclados" onClick={handleClose}>Teclados</Nav.Link>
            <Nav.Link as={Link} to="/catalogoaccesorios" onClick={handleClose}>Accesorios</Nav.Link>
          </Nav>

          <div className="mt-auto pb-3">
            <Nav.Link as={Link} to="/ajustes" onClick={handleClose}>
              Contáctanos
            </Nav.Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
