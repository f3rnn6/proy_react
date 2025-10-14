import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import col from 'react-bootstrap/Col';
import Col from 'react-bootstrap/Col';

export default function AppSearch() {

const [busqueda, setbusqueda] = useState("");
const handlesearch = (e) => {
    e.preventDefault
    alert(busqueda)
    
}

  return (
   <Col md={{ span: 6, offset: 3 }}>
    <InputGroup size="lg"  className="mb-3">
      <Form.Control
        placeholder="Buscar"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        value={busqueda}
        onChange={(e) => setbusqueda(e.target.value)}
      />
      <Button 
        variant="outline-secondary"
        id="button-addon2"
        onClick={handlesearch}>       
        Buscar
      </Button>
    </InputGroup>
    </Col>
    
    )
}