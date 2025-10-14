import { useState } from 'react';
import { Button, Form, InputGroup, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


export default function AppSearch({ onSearch }) {
  const [busqueda, setBusqueda] = useState("");

  const handleSearch = (e) => {
    e.preventDefault(); 
    onSearch(busqueda);
  };

  return (
    <Col md={6} className="mx-auto my-4">
      <Form onSubmit={handleSearch}>
        <InputGroup size="lg" className="mb-3">
          <Form.Control
            placeholder="Buscar producto..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          <Button type="submit" className='boton-primario'>
            Buscar
          </Button>
        </InputGroup>
      </Form>
    </Col>
  );
}

