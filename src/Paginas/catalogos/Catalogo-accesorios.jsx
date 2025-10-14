import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppNavBar from "../../componentes/navbar";
import AppSearch from "../../componentes/SearchBar";
import AppCard from "../../componentes/Card";
import Footer from "../../componentes/footer";


function CatalogoAccesorios() {
  const accesorios = [
  { "id": 1, "nombre": "Afinador Digital", "descripcion": "Afinador cromático para guitarra, bajo y violín", "precio": "$25","imagen":"Imagenes/acc1.jpg" },
  { "id": 2, "nombre": "Cuerdas de Guitarra", "descripcion": "Set de cuerdas de acero para guitarra acústica", "precio": "$15", "imagen":"Imagenes/acc2.jpg" },
  { "id": 3, "nombre": "Cuerdas de Bajo", "descripcion": "Set de cuerdas para bajo eléctrico de 4 cuerdas", "precio": "$20", "imagen":"Imagenes/acc3.jpg" },
  { "id": 4, "nombre": "Correa de Guitarra", "descripcion": "Correa ajustable de cuero para guitarra o bajo", "precio": "$18", "imagen":"Imagenes/acc4.png" },
  { "id": 5, "nombre": "Atril para Partituras", "descripcion": "Atril plegable de metal con altura ajustable", "precio": "$35", "imagen":"Imagenes/acc5.jpg" },
  { "id": 6, "nombre": "Púas de Guitarra", "descripcion": "Pack de 12 púas de distintos grosores", "precio": "$8", "imagen":"Imagenes/acc6.jpg" },
  { "id": 7, "nombre": "Pedal de Efectos", "descripcion": "Pedal multiefectos para guitarra eléctrica", "precio": "$90", "imagen":"Imagenes/acc7.jpeg" },
  { "id": 8, "nombre": "Soporte para Guitarra", "descripcion": "Soporte de suelo para guitarra o bajo", "precio": "$30", "imagen":"Imagenes/acc8.jpg" },
  { "id": 9, "nombre": "Cabo Instrumento", "descripcion": "Cable de 3 metros para guitarra, bajo o teclado", "precio": "$22", "imagen":"Imagenes/acc9.jpg" },
  { "id": 10, "nombre": "Funda para Guitarra", "descripcion": "Funda acolchada para guitarra eléctrica o acústica", "precio": "$45", "imagen":"Imagenes/acc10.jpg" },
  { "id": 11, "nombre": "Funda para Bajo", "descripcion": "Funda rígida para bajo eléctrico de 4-5 cuerdas", "precio": "$60", "imagen":"Imagenes/acc12.jpg" },
  { "id": 12, "nombre": "Slide de Guitarra", "descripcion": "Slide de acero inoxidable para guitarra", "precio": "$12", "imagen":"Imagenes/acc13.jpg" },
  { "id": 13, "nombre": "Pulidor de Cuerdas", "descripcion": "Paño y líquido limpiador para cuerdas y cuerpo", "precio": "$10", "imagen":"Imagenes/acc14.jpg" },
  { "id": 14, "nombre": "Capo de Guitarra", "descripcion": "Capo de metal ajustable para guitarra", "precio": "$18", "imagen":"Imagenes/acc15.jpg" },
  { "id": 15, "nombre": "Soporte de Micrófono", "descripcion": "Trípode ajustable para micrófono de estudio", "precio": "$40", "imagen":"Imagenes/acc17.jpg" },
  { "id": 16, "nombre": "Metronomo Digital", "descripcion": "Metrónomo con pantalla LCD y modos de ritmo", "precio": "$45", "imagen":"Imagenes/acc16.jpg" }
]
;

 const [productosFiltrados, setProductosFiltrados] = useState(accesorios);

  const handleSearch = (texto) => {
    if (texto.trim() === "") {
      setProductosFiltrados(accesorios); 
    } else {
      const resultado = accesorios.filter((item) =>
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
        {productosFiltrados.map((accesorios) => (
          <AppCard key={accesorios.id} producto={accesorios} />
        ))}
      </Row>
    </Container>
  );
}

export default CatalogoAccesorios;