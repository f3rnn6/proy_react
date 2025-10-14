import { useState } from "react";
import { Navbar, Nav, Container, Button, Offcanvas, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AppNavBar({ nombre }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <Navbar expand="lg" className="barra-navegacion">
        <Container fluid="lg">
          <Navbar.Brand as={Link} to="/">Melody Store</Navbar.Brand>
          <Navbar.Text className="text-white">Hola {nombre} sigue disfrutando de la musica!</Navbar.Text>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
          <Navbar.Collapse className="text-end">
            <Nav className="ms-auto d-none d-lg-flex align-items-center">
              <Nav.Link as={Link} to="/favoritos">Carrito</Nav.Link>
              <Nav.Link as={Link} to="/favoritos">Favoritos</Nav.Link>
              <NavDropdown title="Perfil" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Actualizar datos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"> Cerrar sesion</NavDropdown.Item>
                
              </NavDropdown>
              <Button variant="outline-light" onClick={handleShow} className="ms-2">
                Catalogo
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Offcanvas className="offcanvas" show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> Melody Store</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column h-100">
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/" onClick={handleClose}>Home</Nav.Link>
            <Nav.Link as={Link} to="/catalogoguitarras" onClick={handleClose}>Guitarras</Nav.Link>
            <Nav.Link as={Link} to="/catalogoteclados" onClick={handleClose}>Teclados</Nav.Link>
            <Nav.Link as={Link} to="/catalogoaccesorios" onClick={handleClose}>Accesorios</Nav.Link>
          </Nav>
          <div className="flex-column mt-auto pb-3">
            <Nav.Link
              as={Link}
              to="/ajustes"
              onClick={handleClose}
            >
              Contactanos
            </Nav.Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
