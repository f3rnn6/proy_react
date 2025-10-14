import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppNavBar from "../../componentes/navbar";
import AppSearch from "../../componentes/SearchBar";
import AppCard from "../../componentes/Card";
import Footer from "../../componentes/footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function CatalogoTeclados() {
  const teclados = [
  { "id": 1, "nombre": "Teclado Digital 61 Teclas", "descripcion": "Teclado con 61 teclas sensibles y sonidos integrados", "precio": "$400","imagen":"Imagenes/teclado 1.jpg" },
  { "id": 2, "nombre": "Piano Digital 88 Teclas", "descripcion": "Piano de 88 teclas con acción de martillo y altavoces incorporados", "precio": "$1200", "imagen":"Imagenes/teclado 2.jpg" },
  { "id": 3, "nombre": "Teclado Portátil 49 Teclas", "descripcion": "Teclado ligero con funciones de aprendizaje y metrónomo", "precio": "$250", "imagen":"Imagenes/teclado 3.jpg" },
  { "id": 4, "nombre": "Teclado Profesional 76 Teclas", "descripcion": "Teclado con múltiples voces y conectividad MIDI", "precio": "$800", "imagen":"Imagenes/teclado 4.jpg" },
  { "id": 5, "nombre": "Teclado MIDI", "descripcion": "Controlador MIDI compacto con 25 teclas sensibles a la velocidad", "precio": "$150", "imagen":"Imagenes/teclado 5.jpg" },
  { "id": 6, "nombre": "Piano Digital Compacto", "descripcion": "Piano de 61 teclas con sonidos de piano acústico realista", "precio": "$500", "imagen":"Imagenes/teclado 6.jpeg" },
  { "id": 7, "nombre": "Teclado de Estudio", "descripcion": "Teclado con 73 teclas y efectos incorporados para producción musical", "precio": "$900", "imagen":"Imagenes/teclado 7.jpg" },
  { "id": 8, "nombre": "Teclado Acústico Híbrido", "descripcion": "Teclado con 88 teclas y altavoces de alta calidad", "precio": "$1300", "imagen":"Imagenes/teclado 8.jpg" },
  { "id": 9, "nombre": "Teclado para Principiantes", "descripcion": "Teclado de 49 teclas con guía de aprendizaje y ritmos automáticos", "precio": "$220", "imagen":"Imagenes/teclado 9.jpg" },
  { "id": 10, "nombre": "Piano Eléctrico", "descripcion": "Piano de 88 teclas con salida para auriculares y grabación MIDI", "precio": "$1000", "imagen":"Imagenes/teclado 10.jpg" },
  { "id": 11, "nombre": "Teclado Synth", "descripcion": "Teclado sintético con 61 teclas y sonidos de sintetizador", "precio": "$750", "imagen":"Imagenes/teclado 11.jpg" },
  { "id": 12, "nombre": "Teclado Profesional 88 Teclas", "descripcion": "Teclado con sensibilidad de martillo y polifonía avanzada", "precio": "$1500", "imagen":"Imagenes/teclado 12.jpg" },
  { "id": 13, "nombre": "Teclado USB MIDI", "descripcion": "Controlador MIDI compacto con software incluido", "precio": "$180", "imagen":"Imagenes/teclado 13.jpg" },
  { "id": 14, "nombre": "Teclado de 76 Teclas", "descripcion": "Teclado con altavoces incorporados y 128 voces diferentes", "precio": "$850", "imagen":"Imagenes/teclado 14.jpg" },
  { "id": 15, "nombre": "Teclado Electrónico 61 Teclas", "descripcion": "Teclado portátil con ritmos y canciones incorporadas", "precio": "$300", "imagen":"Imagenes/teclado 15.jpg" },
  { "id": 16, "nombre": "Piano Digital Avanzado", "descripcion": "Piano con 88 teclas, conexión Bluetooth y efectos de sonido", "precio": "$1400", "imagen":"Imagenes/teclado 16.jpg" }
];

   const [productosFiltrados, setProductosFiltrados] = useState(guitarras);
  
    const handleSearch = (texto) => {
      if (texto.trim() === "") {
        setProductosFiltrados(guitarras); // 👈 Si está vacío, muestra todo
      } else {
        const resultado = guitarras.filter((item) =>
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
          {productosFiltrados.map((guitarra) => (
            <AppCard key={guitarra.id} producto={guitarra} />
          ))}
        </Row>
      </Container>
  );
}

export default CatalogoTeclados;
