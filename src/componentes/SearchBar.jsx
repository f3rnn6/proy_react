import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

export default function AppSearch({ onSearch }) {
  const [busqueda, setBusqueda] = useState("");

  const handleSearch = () => {
    onSearch(busqueda); // Envía el texto al padre
  };

  const handleChange = (e) => {
    const valor = e.target.value;
    setBusqueda(valor);
    onSearch(valor); // Envía el valor en tiempo real al padre
  };

  return (
    <Col md={{ span: 6, offset: 3 }}>
      <InputGroup size="lg" className="mb-3">
        <Form.Control
          placeholder="Buscar"
          aria-label="Buscar"
          value={busqueda}
          onChange={handleChange}
        />
      </InputGroup>
    </Col>
  );
}
