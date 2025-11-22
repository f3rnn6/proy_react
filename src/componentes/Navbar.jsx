import { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AppNavBar({ nombre }) {
  const [show, setShow] = useState(false);

  const carritoCount =
    JSON.parse(localStorage.getItem("carrito"))?.length || 0;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // 🔥 Cerrar menú hamburguesa al seleccionar una opción
  const handleCollapseClose = () => {
    const menu = document.getElementById("menu-principal");
    if (menu && menu.classList.contains("show")) {
      menu.classList.remove("show");
    }
  };

  return (
    <>
      <Navbar expand="lg" className="barra-navegacion" sticky="top">
        <Container fluid="lg">

          {/* BRAND — Visible siempre en desktop */}
          <Navbar.Brand as={Link} to="/" className="d-none d-lg-block">
            Melody Store
          </Navbar.Brand>

          {/* BOTÓN HAMBURGUESA */}
          <Navbar.Toggle aria-controls="menu-principal" className="ms-auto" />

          <Navbar.Collapse id="menu-principal">

            {/* BRAND CENTRADO — SOLO EN MÓVIL */}
            <Navbar.Brand as={Link} to="/" className="brand-mobile d-lg-none">
              Melody Store
            </Navbar.Brand>

            {/* MENÚ PRINCIPAL */}
            <Nav className="navbar-menu mx-auto">

              {/* TEXTO BIENVENIDA */}
              <Navbar.Text className="navbar-text">
                Hola {nombre} sigue disfrutando de la música!
              </Navbar.Text>

              {/* PRODUCTOS */}
              <Nav.Link
                as={Link}
                to="/productos"
                onClick={handleCollapseClose}
              >
                Productos
              </Nav.Link>

              {/* CARRITO */}
              <Nav.Link
                as={Link}
                to="/carrito"
                className="position-relative"
                onClick={handleCollapseClose}
              >
                Carrito
                {carritoCount > 0 && (
                  <span className="contador-carrito">{carritoCount}</span>
                )}
              </Nav.Link>

              {/* FAVORITOS */}
              <Nav.Link
                as={Link}
                to="/favoritos"
                onClick={handleCollapseClose}
              >
                Favoritos
              </Nav.Link>

              {/* PERFIL (NO CERRAR EL MENÚ) */}
              <NavDropdown
                title={<span className="perfil-texto">Perfil</span>}
                id="dropdown-perfil"
                menuVariant="dark"
                className="perfil-dropdown"
              >
                <NavDropdown.Item as={Link} to="/login" onClick={handleCollapseClose}>
                  Iniciar sesión
                  
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/administrador" onClick={handleCollapseClose}>
                  Administrador
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item as={Link} to="/productos" onClick={handleCollapseClose}>
                  Cerrar sesión
                </NavDropdown.Item>
              </NavDropdown>

              {/* BOTÓN CATÁLOGO (CIERRA MENÚ) */}
              <Button
                variant="outline-light"
                onClick={() => {
                  handleCollapseClose();
                  handleShow();
                }}
              >
                Catálogo
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* OFFCANVAS */}
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

            <Nav.Link as={Link} to="/catalogobaterias" onClick={handleClose}>
              Baterías
            </Nav.Link>

            <Nav.Link as={Link} to="/catalogoguitarras" onClick={handleClose}>
              Guitarras
            </Nav.Link>

            <Nav.Link as={Link} to="/catalogoteclados" onClick={handleClose}>
              Teclados
            </Nav.Link>

            <Nav.Link as={Link} to="/catalogoaccesorios" onClick={handleClose}>
              Accesorios
            </Nav.Link>

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
