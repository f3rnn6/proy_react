import { useState } from "react";
import { Navbar, Nav, Container, Button, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AppNavBar({ nombre }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <Navbar expand="lg" className="barra-navegacion">
        <Container fluid="lg">
          <Navbar.Brand href="#home">Melody Store</Navbar.Brand>
          <Navbar.Text className="text-white">Hola {nombre}</Navbar.Text>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
          <Navbar.Collapse className="text-end">
            <Nav className="ms-auto d-none d-lg-flex align-items-center">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Button variant="outline-light" onClick={handleShow} className="ms-2">
                Catalogo
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menú</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/" onClick={handleClose}>Home</Nav.Link>
            <Nav.Link as={Link} to="/catalogoguitarras" onClick={handleClose}>Guitarras</Nav.Link>
            <Nav.Link as={Link} to="/catalogoteclados" onClick={handleClose}>Teclados</Nav.Link>
            <Nav.Link as={Link} to="/catalogoaccesorios" onClick={handleClose}>Accesorios</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
