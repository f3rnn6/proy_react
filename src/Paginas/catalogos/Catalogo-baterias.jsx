import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppNavBar from "../../componentes/navbar";
import AppSearch from "../../componentes/SearchBar";
import AppCard from "../../componentes/Card";
import Footer from "../../componentes/footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function CatalogoBaterias() {
  const baterias = [
  { "id": 17, "nombre": "Batería Acústica 5 Piezas", "descripcion": "Set completo con bombo, caja, toms, platillos y pedal de bombo", "precio": "$1200","imagen":"Imagenes/bateria 1.jpg" },
  { "id": 18, "nombre": "Batería Electrónica Compacta", "descripcion": "Kit digital con pads de goma, módulo de sonido y conexión USB", "precio": "$950","imagen":"Imagenes/bateria 2.jpg" },
  { "id": 19, "nombre": "Batería Infantil", "descripcion": "Batería pequeña de 3 piezas ideal para niños principiantes", "precio": "$350","imagen":"Imagenes/bateria 3.jpg" },
  { "id": 20, "nombre": "Batería Profesional Maple", "descripcion": "Cascos de arce con excelente resonancia y acabado brillante", "precio": "$2000","imagen":"Imagenes/bateria 4.jpg" },
  { "id": 21, "nombre": "Caja Snare Metálica 14x5.5", "descripcion": "Caja metálica con bordonera ajustable y aro de acero", "precio": "$280","imagen":"Imagenes/bateria 5.jpg" },
  { "id": 22, "nombre": "Set de Platillos", "descripcion": "Juego de platillos hi-hat, crash y ride de aleación de bronce", "precio": "$500" ,"imagen":"Imagenes/bateria 6.jpg"},
  { "id": 23, "nombre": "Batería de Jazz 4 Piezas", "descripcion": "Kit compacto con sonido cálido ideal para estilos suaves", "precio": "$1100","imagen":"Imagenes/bateria 7.jpg" },
  { "id": 24, "nombre": "Pad de Práctica", "descripcion": "Superficie de goma silenciosa para practicar sin molestar", "precio": "$60","imagen":"Imagenes/bateria 8.jpg" },
  { "id": 25, "nombre": "Batería Electrónica Profesional", "descripcion": "Set con pads de malla, doble pedal y conexión MIDI", "precio": "$1800","imagen":"Imagenes/bateria 9.jpg" },
  { "id": 26, "nombre": "Pedal Doble de Bombo", "descripcion": "Pedal de acero reforzado con ajuste de tensión y cadena doble", "precio": "$320","imagen":"Imagenes/bateria 10.jpg" },
  { "id": 27, "nombre": "Trono de Batería", "descripcion": "Asiento acolchado ajustable en altura", "precio": "$140","imagen":"Imagenes/bateria 15.jpg" },
  { "id": 28, "nombre": "Rack de Batería Electrónica", "descripcion": "Estructura de aluminio ajustable para montar módulos y pads", "precio": "$250","imagen":"Imagenes/bateria 11.png" },
  { "id": 29, "nombre": "Set de Baquetas de Hickory", "descripcion": "Par de baquetas tamaño 5A con punta de madera", "precio": "$25","imagen":"Imagenes/bateria 12.jpg" },
  { "id": 30, "nombre": "Batería Acrílica Transparente", "descripcion": "Set profesional con cascos acrílicos y sonido potente", "precio": "$2300","imagen":"Imagenes/bateria 13.jpg" },
  { "id": 31, "nombre": "Módulo de Sonido para Batería", "descripcion": "Módulo con 200 sonidos y entrada USB/MIDI", "precio": "$400","imagen":"Imagenes/bateria 14.jpg" },
  { "id": 32, "nombre": "Micrófonos para Batería", "descripcion": "Set de 7 micrófonos con estuches y clips incluidos", "precio": "$370","imagen":"Imagenes/bateria 16.jpg" }
]
;

   const [productosFiltrados, setProductosFiltrados] = useState(baterias);
  
    const handleSearch = (texto) => {
      if (texto.trim() === "") {
        setProductosFiltrados(baterias); 
      } else {
        const resultado = baterias.filter((item) =>
          item.nombre.toLowerCase().includes(texto.toLowerCase())
        );
        setProductosFiltrados(resultado);
      }
    };
  
    return (
      <Container  className="text-center mt-3">
        <Row className="mb-3">
          <AppNavBar nombre="Joaquin" />
        </Row>
  
        <Row>
          <AppSearch onSearch={handleSearch} />
        </Row>
  
        <Row className="mt-3">
          {productosFiltrados.map((bateria) => (
            <AppCard key={bateria.id} producto={bateria} />
          ))}
        </Row>
      </Container>
  );
}

export default CatalogoBaterias;