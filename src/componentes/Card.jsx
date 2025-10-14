import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default function AppCard({producto}) {
  
    function favorito(){
        alert("clicked")
    }
  
    return (

    <Card className="tarjeta-producto" style={{ width: '18rem' }}>
      <Card.Img className="imagenes-card" variant="top" src={producto.imagen} />
      <Card.Body>
        <Card.Title style={{color:"#ffffff"}}>{producto.nombre}</Card.Title>
        <Card.Text style={{color:"#ffffff"}}>
            {producto.descripcion}  
        </Card.Text>
        <Card.Text style={{color:"#ffffff"}}>
            {producto.precio} 
        </Card.Text>
        <Button className='boton-primario' >Go somewhere</Button>
        <Button className='boton-favoritos' onClick={favorito}>☆</Button>
      </Card.Body>
    </Card>
  
  );
}

