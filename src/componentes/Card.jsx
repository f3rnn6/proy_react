import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function AppCard({producto}) {
  
    function favorito(){
        alert("clicked")
    }
  
    return (

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="Imagenes/guitarra1.webp" />
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>
            {producto.descripcion}  
        </Card.Text>
        <Card.Text>
            {producto.precio} 
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        <Button variant="primary" onClick={favorito}>☆</Button>
      </Card.Body>
    </Card>
  
  );
}

