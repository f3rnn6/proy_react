import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppNavBar from "../../componentes/navbar";
import AppSearch from "../../componentes/barrabusqueda";
import AppCard from "../../componentes/Card";
import Footer from "../../componentes/footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function CatalogoGuitarras() {
  const guitarras = [
    
  { "id": 1, "nombre": "Guitarra Clásica", "descripcion": "Guitarra de madera con cuerdas de nylon", "precio": "$300","imagen":"Imagenes/guitarra1.webp" },
  { "id": 2, "nombre": "Bajo Eléctrico", "descripcion": "Bajo de 4 cuerdas con cuerpo sólido y acabado brillante", "precio": "$550","imagen":"Imagenes/bajo1.jpg" },
  { "id": 3, "nombre": "Guitarra Acústica", "descripcion": "Guitarra de madera con cuerdas de acero, ideal para principiantes", "precio": "$350","imagen":"Imagenes/guitarra2.jpg" },
  { "id": 4, "nombre": "Bajo Jazz", "descripcion": "Bajo eléctrico de 5 cuerdas con pastillas activas", "precio": "$650","imagen":"Imagenes/bajo2.webp" },
  { "id": 5, "nombre": "Guitarra Eléctrica", "descripcion": "Guitarra con cuerpo sólido y pastillas humbucker", "precio": "$700","imagen":"Imagenes/guitarra3.jpg" },
  { "id": 6, "nombre": "Bajo Acústico", "descripcion": "Bajo acústico con cuerdas de nylon y cuerpo de madera maciza", "precio": "$500","imagen":"Imagenes/bajo3.jpg" },
  { "id": 7, "nombre": "Guitarra Flamenca", "descripcion": "Guitarra española con tapa de cedro y cuerdas de nylon", "precio": "$400","imagen":"Imagenes/guitarra4.jpeg" },
  { "id": 8, "nombre": "Bajo Eléctrico Vintage", "descripcion": "Bajo de estilo clásico con acabado sunburst", "precio": "$600","imagen":"Imagenes/bajo4.jpeg" },
  { "id": 9, "nombre": "Guitarra Semiacústica", "descripcion": "Guitarra eléctrica con caja hueca y pastillas humbucker", "precio": "$750", "imagen":"Imagenes/guitarra5.jpeg" },
  { "id": 10, "nombre": "Bajo Fretless", "descripcion": "Bajo eléctrico sin trastes, ideal para jazz y funk", "precio": "$700", "imagen":"Imagenes/bajo5.jpeg" },
  { "id": 11, "nombre": "Guitarra de 12 Cuerdas", "descripcion": "Guitarra acústica de 12 cuerdas con sonido brillante", "precio": "$500", "imagen":"Imagenes/guitarra6.jpg" },
  { "id": 12, "nombre": "Bajo Activo", "descripcion": "Bajo con preamplificador activo y control de tono", "precio": "$650","imagen":"Imagenes/bajo6.jpeg" },
  { "id": 13, "nombre": "Guitarra Rock", "descripcion": "Guitarra eléctrica con puente flotante y pastillas dobles", "precio": "$800", "imagen":"Imagenes/guitarra7.jpg" },
  { "id": 14, "nombre": "Bajo Electroacústico", "descripcion": "Bajo acústico con salida para amplificador", "precio": "$550", "imagen":"Imagenes/bajo7.jpeg" },
  { "id": 15, "nombre": "Guitarra Vintage", "descripcion": "Guitarra eléctrica clásica con acabado relic", "precio": "$900", "imagen":"Imagenes/guitarra8.webp" },
  { "id": 16, "nombre": "Bajo Moderno", "descripcion": "Bajo eléctrico con cuerpo ligero y diseño moderno", "precio": "$750", "imagen":"Imagenes/bajo8.jpeg" }



  ];

  const [filtro, setFiltro] = useState("");

  // ✅ Filtra las guitarras según lo que el usuario escriba
  const guitarrasFiltradas = guitarras.filter((guitarra) =>
    guitarra.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
      <Container fluid className="text-center">
          <Row className="mb-3">
              <AppNavBar nombre="Joaquin" />
          </Row>

          <Row className="justify-content-center">
              <AppSearch onSearch={setFiltro} />
          </Row>

          <Row className="mt-4 text-center">
              {guitarrasFiltradas.length > 0 ? (
                  guitarrasFiltradas.map((guitarra) => (
                      <Col key={guitarra.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                          <AppCard producto={guitarra} />
                      </Col>
                  ))
              ) : (
                  <p>No se encontraron productos</p>
              )}
          </Row>
          
              <Row className="mb-3">
                  <Footer />
              </Row>

      </Container>
  );
}

export default CatalogoGuitarras;
