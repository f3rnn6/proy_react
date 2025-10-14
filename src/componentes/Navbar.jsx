import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


export default function AppNavBar({nombre}) {
  return (
    <Navbar expand="lg" className=" barra-navegacion">
      <Container fluid="lg">
        <Navbar.Brand href="#home">Melody Store</Navbar.Brand>
        <Navbar.Text href="#home">Hola {nombre}</Navbar.Text>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='text-end'>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

