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
import { useAuth } from "../auth/AuthContext"; // 👈 IMPORTANTE

export default function AppNavBar({ nombre }) {
  const [show, setShow] = useState(false);

  const { isAuthenticated, isAdmin, isCliente, logout } = useAuth(); // 👈 Roles y logout

  const carritoCount =
    JSON.parse(localStorage.getItem("carrito"))?.length || 0;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

          <Navbar.Brand as={Link} to="/" className="d-none d-lg-block">
            Melody Store
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="menu-principal" className="ms-auto" />

          <Navbar.Collapse id="menu-principal">
            <Navbar.Brand as={Link} to="/" className="brand-mobile d-lg-none">
              Melody Store
            </Navbar.Brand>

            <Nav className="navbar-menu mx-auto">

              <Navbar.Text className="navbar-text">
                Hola {nombre} sigue disfrutando de la música!
              </Navbar.Text>

              {/* PRODUCTOS - SIEMPRE VISIBLE */}
              <Nav.Link as={Link} to="/productos" onClick={handleCollapseClose}>
                Productos
              </Nav.Link>

              {/* CARRITO (solo CLIENTE logueado) */}
              {isAuthenticated && !isAdmin && (
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
              )}

              {/* FAVORITOS (solo CLIENTE logueado) */}
              {isAuthenticated && !isAdmin && (
                <Nav.Link
                  as={Link}
                  to="/favoritos"
                  onClick={handleCollapseClose}
                >
                  Favoritos
                </Nav.Link>
              )}

              {/* PANEL ADMIN (solo ADMIN) */}
              {isAdmin && (
                <Nav.Link
                  as={Link}
                  to="/administrador"
                  onClick={handleCollapseClose}
                >
                  Panel Admin
                </Nav.Link>
              )}

              {/* PERFIL / LOGIN / LOGOUT */}
              <NavDropdown
                title={<span className="perfil-texto">Perfil</span>}
                id="dropdown-perfil"
                menuVariant="dark"
                className="perfil-dropdown"
              >
                {/* NO LOGUEADO → LOGIN + REGISTRO */}
                {!isAuthenticated && (
                  <>
                    <NavDropdown.Item
                      as={Link}
                      to="/login"
                      onClick={handleCollapseClose}
                    >
                      Iniciar sesión
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={Link}
                      to="/registro"
                      onClick={handleCollapseClose}
                    >
                      Registrarse
                    </NavDropdown.Item>
                  </>
                )}

                {/* LOGUEADO → CERRAR SESIÓN */}
                {isAuthenticated && (
                  <NavDropdown.Item
                    onClick={() => {
                      logout();
                      handleCollapseClose();
                    }}
                  >
                    Cerrar sesión
                  </NavDropdown.Item>
                )}
              </NavDropdown>

              {/* BOTÓN CATÁLOGO */}
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

          
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
